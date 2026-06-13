import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { leadPriorities, leadStatuses, parseAmount, serializeLead } from '@/lib/leads'
import { getQuoteRequestsCollection } from '@/lib/mongodb'
import type { Filter } from 'mongodb'
import type { QuoteRequestDocument } from '@/lib/leads'

export async function GET(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const service = url.searchParams.get('service')?.trim()
    const selectedPackage = url.searchParams.get('package')?.trim()
    const plan = url.searchParams.get('plan')?.trim()
    const status = url.searchParams.get('status')?.trim()
    const priority = url.searchParams.get('priority')?.trim()
    const dateFrom = url.searchParams.get('dateFrom')?.trim()
    const dateTo = url.searchParams.get('dateTo')?.trim()
    const budgetMin = parseAmount(url.searchParams.get('budgetMin') ?? undefined)
    const budgetMax = parseAmount(url.searchParams.get('budgetMax') ?? undefined)
    const query: Filter<QuoteRequestDocument> = {}

    if (service) query.serviceRequired = service
    if (selectedPackage) query.selectedPackage = selectedPackage
    if (plan) query.selectedPlan = plan
    if (priority && leadPriorities.includes(priority as QuoteRequestDocument['priority'])) {
      query.priority = priority as QuoteRequestDocument['priority']
    }
    if (status && leadStatuses.includes(status as QuoteRequestDocument['status'])) {
      query.status = status as QuoteRequestDocument['status']
    }
    if (dateFrom || dateTo) {
      const createdAt: Record<string, Date> = {}
      if (dateFrom) {
        const start = new Date(`${dateFrom}T00:00:00.000Z`)
        if (!Number.isNaN(start.getTime())) createdAt.$gte = start
      }
      if (dateTo) {
        const end = new Date(`${dateTo}T23:59:59.999Z`)
        if (!Number.isNaN(end.getTime())) createdAt.$lte = end
      }
      if (Object.keys(createdAt).length) query.createdAt = createdAt
    }

    const collection = await getQuoteRequestsCollection()
    const allLeads = await collection.find({}).sort({ createdAt: -1 }).limit(2000).toArray()
    const queriedLeads = await collection.find(query).sort({ createdAt: -1 }).limit(1000).toArray()
    const leads = queriedLeads.filter((lead) => {
      const budgetAmount = parseAmount(lead.budget) || lead.proposedAmount || lead.closedAmount || 0
      if (budgetMin && budgetAmount < budgetMin) return false
      if (budgetMax && budgetAmount > budgetMax) return false
      return true
    })

    return NextResponse.json({
      ok: true,
      leads: leads.map(serializeLead),
      stats: buildStats(allLeads),
    })
  } catch (error) {
    console.error('Failed to load leads', error)
    return NextResponse.json({ ok: false, message: 'Unable to load leads' }, { status: 500 })
  }
}

function buildStats(leads: QuoteRequestDocument[]) {
  const now = new Date()
  const todayStart = new Date(now)
  todayStart.setHours(0, 0, 0, 0)
  const todayEnd = new Date(now)
  todayEnd.setHours(23, 59, 59, 999)
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const wonLeads = leads.filter((lead) => lead.status === 'Won')
  const closedAmounts = leads.map((lead) => lead.closedAmount ?? 0).filter((amount) => amount > 0)
  const budgetAmounts = leads.map((lead) => parseAmount(lead.budget)).filter((amount) => amount > 0)
  const revenue = closedAmounts.reduce((sum, amount) => sum + amount, 0)
  const revenueThisMonth = leads
    .filter((lead) => lead.closedAmount > 0 && new Date(lead.updatedAt) >= monthStart)
    .reduce((sum, lead) => sum + (lead.closedAmount ?? 0), 0)

  return {
    totalLeads: leads.length,
    newLeads: countStatus(leads, 'New Lead'),
    contactedLeads: countStatus(leads, 'Contacted'),
    wonLeads: countStatus(leads, 'Won'),
    lostLeads: countStatus(leads, 'Lost'),
    conversionRate: leads.length ? Math.round((wonLeads.length / leads.length) * 100) : 0,
    totalRevenue: revenue,
    revenueThisMonth,
    averageDealSize: closedAmounts.length ? Math.round(revenue / closedAmounts.length) : 0,
    averageBudget: budgetAmounts.length ? Math.round(budgetAmounts.reduce((sum, amount) => sum + amount, 0) / budgetAmounts.length) : 0,
    pipelineValue: leads.reduce((sum, lead) => sum + (lead.proposedAmount ?? 0), 0),
    followUpsToday: leads.filter((lead) => {
      if (!lead.nextFollowUpDate) return false
      const followUp = new Date(lead.nextFollowUpDate)
      return followUp >= todayStart && followUp <= todayEnd
    }).length,
    overdueFollowUps: leads.filter((lead) => lead.nextFollowUpDate && new Date(lead.nextFollowUpDate) < todayStart && !['Won', 'Lost', 'Spam'].includes(lead.status)).length,
    upcomingFollowUps: leads.filter((lead) => lead.nextFollowUpDate && new Date(lead.nextFollowUpDate) > todayEnd && !['Won', 'Lost', 'Spam'].includes(lead.status)).length,
    videoEditingLeads: leads.filter((lead) => lead.serviceRequired.toLowerCase().includes('video')).length,
    socialMediaLeads: leads.filter((lead) => lead.serviceRequired.toLowerCase().includes('social')).length,
    websiteLeads: leads.filter((lead) => lead.serviceRequired.toLowerCase().includes('website') || lead.serviceRequired.toLowerCase().includes('web')).length,
    mostPopularService: mostFrequent(leads.map((lead) => lead.serviceRequired).filter(Boolean)),
    mostPopularPackage: mostFrequent(leads.map((lead) => lead.selectedPackage).filter(Boolean)),
    mostPopularPlan: mostFrequent(leads.map((lead) => lead.selectedPlan).filter(Boolean)),
    mostRequestedService: mostFrequent(leads.map((lead) => lead.serviceRequired).filter(Boolean)),
    mostImportantPackage: mostFrequent(leads.map((lead) => lead.selectedPackage).filter(Boolean)),
  }
}

function countStatus(leads: QuoteRequestDocument[], status: QuoteRequestDocument['status']) {
  return leads.filter((lead) => lead.status === status).length
}

function mostFrequent(values: string[]) {
  const counts = new Map<string, number>()
  values.forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1))
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '-'
}
