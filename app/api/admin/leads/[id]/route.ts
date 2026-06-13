import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { leadPriorities, leadStatuses, parseAmount, parseFollowUpDate, serializeLead } from '@/lib/leads'
import { getQuoteRequestsCollection } from '@/lib/mongodb'
import type { LeadPriority, LeadStatus, QuoteRequestDocument } from '@/lib/leads'

type LeadUpdateFields = Partial<{
  name: string
  companyName: string
  email: string
  whatsappNumber: string
  serviceRequired: string
  selectedPackage: string
  selectedPlan: string
  selectedPrice: string
  budget: string
  projectDescription: string
  status: LeadStatus
  priority: string
  nextFollowUpDate: string | null
  followUpNotes: string
  proposedAmount: number | string
  closedAmount: number | string
  assignedTo: string
}>

type PatchBody = LeadUpdateFields & {
  action?: 'updateLead' | 'addNote' | 'editNote' | 'deleteNote'
  noteId?: string
  noteText?: string
  lead?: LeadUpdateFields
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const body = (await request.json()) as PatchBody

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ ok: false, message: 'Invalid lead id' }, { status: 400 })
    }

    const collection = await getQuoteRequestsCollection()
    const lead = await collection.findOne({ _id: new ObjectId(id) })

    if (!lead) {
      return NextResponse.json({ ok: false, message: 'Lead not found' }, { status: 404 })
    }

    const now = new Date()
    const activityLog = lead.activityLog ?? []
    const notes = lead.notes ?? []

    if (body.action === 'addNote') {
      const text = body.noteText?.trim()
      if (!text) return NextResponse.json({ ok: false, message: 'Note is required' }, { status: 400 })
      notes.unshift({ id: randomUUID(), text, createdAt: now, updatedAt: now })
      activityLog.unshift({ id: randomUUID(), type: 'note_added', message: 'Note Added', createdAt: now })
      await collection.updateOne({ _id: new ObjectId(id) }, { $set: { notes, activityLog, updatedAt: now } })
    } else if (body.action === 'editNote') {
      const text = body.noteText?.trim()
      const note = notes.find((item) => item.id === body.noteId)
      if (!text || !note) return NextResponse.json({ ok: false, message: 'Valid note is required' }, { status: 400 })
      note.text = text
      note.updatedAt = now
      activityLog.unshift({ id: randomUUID(), type: 'note_edited', message: 'Note Edited', createdAt: now })
      await collection.updateOne({ _id: new ObjectId(id) }, { $set: { notes, activityLog, updatedAt: now } })
    } else if (body.action === 'deleteNote') {
      const nextNotes = notes.filter((item) => item.id !== body.noteId)
      activityLog.unshift({ id: randomUUID(), type: 'note_deleted', message: 'Note Deleted', createdAt: now })
      await collection.updateOne({ _id: new ObjectId(id) }, { $set: { notes: nextNotes, activityLog, updatedAt: now } })
    } else {
      const update = buildLeadUpdate(body, lead)
      const statusChanged = update.status && update.status !== lead.status
      const revenueChanged = update.proposedAmount !== (lead.proposedAmount ?? 0) || update.closedAmount !== (lead.closedAmount ?? 0)
      const followUpChanged = String(update.nextFollowUpDate ?? '') !== String(lead.nextFollowUpDate ?? '') || update.followUpNotes !== (lead.followUpNotes ?? '')
      const message = statusChanged
        ? `Status changed to ${update.status}`
        : revenueChanged
          ? 'Revenue Updated'
          : followUpChanged
            ? 'Follow-Up Added'
            : 'Lead Edited'
      activityLog.unshift({ id: randomUUID(), type: statusChanged ? 'status_changed' : revenueChanged ? 'revenue_updated' : followUpChanged ? 'follow_up_added' : 'lead_edited', message, createdAt: now })
      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...update, activityLog, updatedAt: now } }
      )
    }

    const updatedLead = await collection.findOne({ _id: new ObjectId(id) })
    return NextResponse.json({ ok: true, lead: updatedLead ? serializeLead(updatedLead) : null })
  } catch (error) {
    console.error('Failed to update lead', error)
    return NextResponse.json({ ok: false, message: 'Unable to update lead' }, { status: 500 })
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ ok: false, message: 'Invalid lead id' }, { status: 400 })
    }

    const collection = await getQuoteRequestsCollection()
    await collection.deleteOne({ _id: new ObjectId(id) })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to delete lead', error)
    return NextResponse.json({ ok: false, message: 'Unable to delete lead' }, { status: 500 })
  }
}

function buildLeadUpdate(body: PatchBody, currentLead: QuoteRequestDocument) {
  const input = body.lead ?? body
  const status = input.status && leadStatuses.includes(input.status) ? input.status : currentLead.status

  return {
    name: input.name?.trim() ?? currentLead.name ?? '',
    companyName: input.companyName?.trim() ?? currentLead.companyName ?? '',
    email: input.email?.trim() ?? currentLead.email ?? '',
    whatsappNumber: input.whatsappNumber?.trim() ?? currentLead.whatsappNumber ?? '',
    serviceRequired: input.serviceRequired?.trim() ?? currentLead.serviceRequired ?? '',
    selectedPackage: input.selectedPackage?.trim() ?? currentLead.selectedPackage ?? '',
    selectedPlan: input.selectedPlan?.trim() ?? currentLead.selectedPlan ?? '',
    selectedPrice: input.selectedPrice?.trim() ?? currentLead.selectedPrice ?? '',
    budget: input.budget?.trim() ?? currentLead.budget ?? '',
    projectDescription: input.projectDescription?.trim() ?? currentLead.projectDescription ?? '',
    status,
    priority: input.priority && leadPriorities.includes(input.priority as LeadPriority) ? input.priority as LeadPriority : currentLead.priority ?? 'Warm Lead',
    nextFollowUpDate:
      'nextFollowUpDate' in input
        ? parseFollowUpDate(input.nextFollowUpDate)
        : currentLead.nextFollowUpDate ?? null,
    followUpNotes: input.followUpNotes?.trim() ?? currentLead.followUpNotes ?? '',
    proposedAmount:
      'proposedAmount' in input ? parseAmount(input.proposedAmount) : currentLead.proposedAmount ?? 0,
    closedAmount:
      'closedAmount' in input ? parseAmount(input.closedAmount) : currentLead.closedAmount ?? 0,
    assignedTo: input.assignedTo?.trim() ?? currentLead.assignedTo ?? '',
  }
}
