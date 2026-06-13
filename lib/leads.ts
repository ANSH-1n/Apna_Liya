import { randomUUID } from 'crypto'
import type { ObjectId } from 'mongodb'

export const leadStatuses = ['New Lead', 'Contacted', 'Proposal Sent', 'Negotiation', 'Follow Up', 'Won', 'Lost', 'Spam'] as const
export const leadPriorities = ['Hot Lead', 'Warm Lead', 'Cold Lead'] as const

export type LeadStatus = (typeof leadStatuses)[number]
export type LeadPriority = (typeof leadPriorities)[number]

export type LeadNote = {
  id: string
  text: string
  createdAt: Date
  updatedAt: Date
}

export type LeadActivity = {
  id: string
  type: string
  message: string
  createdAt: Date
}

export type QuoteRequestInput = {
  name?: string
  companyName?: string
  email?: string
  whatsappNumber?: string
  serviceRequired?: string
  selectedPackage?: string
  selectedPlan?: string
  selectedPrice?: string
  budget?: string
  projectDescription?: string
  sourcePage?: string
  currentUrl?: string
  pricingPageUrl?: string
  userIp?: string
  deviceType?: string
  status?: LeadStatus
  priority?: LeadPriority
  nextFollowUpDate?: string | Date | null
  followUpNotes?: string
  proposedAmount?: number | string
  closedAmount?: number | string
  assignedTo?: string
}

export type QuoteRequestDocument = Required<Omit<QuoteRequestInput, 'nextFollowUpDate' | 'proposedAmount' | 'closedAmount'>> & {
  _id?: ObjectId
  nextFollowUpDate: Date | null
  proposedAmount: number
  closedAmount: number
  notes: LeadNote[]
  activityLog: LeadActivity[]
  createdAt: Date
  updatedAt: Date
}

export type SerializedLead = Omit<QuoteRequestDocument, '_id' | 'createdAt' | 'updatedAt' | 'nextFollowUpDate' | 'notes' | 'activityLog'> & {
  _id: string
  nextFollowUpDate: string | null
  notes: Array<Omit<LeadNote, 'createdAt' | 'updatedAt'> & { createdAt: string; updatedAt: string }>
  activityLog: Array<Omit<LeadActivity, 'createdAt'> & { createdAt: string }>
  createdAt: string
  updatedAt: string
}

export function parseAmount(value: number | string | undefined) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0
  if (!value) return 0
  const parsed = Number(value.replace(/[^0-9.]/g, ''))
  return Number.isFinite(parsed) ? parsed : 0
}

export function parseFollowUpDate(value: string | Date | null | undefined) {
  if (!value) return null
  const date = value instanceof Date ? value : new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

export function normalizeLeadInput(input: QuoteRequestInput): Omit<QuoteRequestDocument, '_id'> {
  const now = new Date()

  return {
    name: input.name?.trim() ?? '',
    companyName: input.companyName?.trim() ?? '',
    email: input.email?.trim() ?? '',
    whatsappNumber: input.whatsappNumber?.trim() ?? '',
    serviceRequired: input.serviceRequired?.trim() ?? '',
    selectedPackage: input.selectedPackage?.trim() ?? '',
    selectedPlan: input.selectedPlan?.trim() ?? '',
    selectedPrice: input.selectedPrice?.trim() ?? '',
    budget: input.budget?.trim() ?? '',
    projectDescription: input.projectDescription?.trim() ?? '',
    sourcePage: input.sourcePage?.trim() ?? '',
    currentUrl: input.currentUrl?.trim() ?? input.sourcePage?.trim() ?? '',
    pricingPageUrl: input.pricingPageUrl?.trim() ?? input.sourcePage?.trim() ?? '',
    userIp: input.userIp?.trim() ?? '',
    deviceType: input.deviceType?.trim() ?? '',
    status: leadStatuses.includes(input.status as LeadStatus) ? (input.status as LeadStatus) : 'New Lead',
    priority: leadPriorities.includes(input.priority as LeadPriority) ? (input.priority as LeadPriority) : 'Warm Lead',
    nextFollowUpDate: parseFollowUpDate(input.nextFollowUpDate),
    followUpNotes: input.followUpNotes?.trim() ?? '',
    proposedAmount: parseAmount(input.proposedAmount),
    closedAmount: parseAmount(input.closedAmount),
    assignedTo: input.assignedTo?.trim() ?? '',
    notes: [],
    activityLog: [
      {
        id: randomUUID(),
        type: 'created',
        message: 'Lead Created',
        createdAt: now,
      },
    ],
    createdAt: now,
    updatedAt: now,
  }
}

export function serializeLead(lead: QuoteRequestDocument): SerializedLead {
  return {
    _id: lead._id?.toString() ?? '',
    name: lead.name ?? '',
    companyName: lead.companyName ?? '',
    email: lead.email ?? '',
    whatsappNumber: lead.whatsappNumber ?? '',
    serviceRequired: lead.serviceRequired ?? '',
    selectedPackage: lead.selectedPackage ?? '',
    selectedPlan: lead.selectedPlan ?? '',
    selectedPrice: lead.selectedPrice ?? '',
    budget: lead.budget ?? '',
    projectDescription: lead.projectDescription ?? '',
    sourcePage: lead.sourcePage ?? '',
    currentUrl: lead.currentUrl ?? lead.sourcePage ?? '',
    pricingPageUrl: lead.pricingPageUrl ?? lead.sourcePage ?? '',
    userIp: lead.userIp ?? '',
    deviceType: lead.deviceType ?? '',
    status: leadStatuses.includes(lead.status as LeadStatus) ? lead.status : 'New Lead',
    priority: leadPriorities.includes(lead.priority as LeadPriority) ? lead.priority : 'Warm Lead',
    nextFollowUpDate: lead.nextFollowUpDate ? new Date(lead.nextFollowUpDate).toISOString() : null,
    followUpNotes: lead.followUpNotes ?? '',
    proposedAmount: lead.proposedAmount ?? 0,
    closedAmount: lead.closedAmount ?? 0,
    assignedTo: lead.assignedTo ?? '',
    notes: (lead.notes ?? []).map((note) => ({
      id: note.id,
      text: note.text,
      createdAt: new Date(note.createdAt).toISOString(),
      updatedAt: new Date(note.updatedAt).toISOString(),
    })),
    activityLog: (lead.activityLog ?? []).map((activity) => ({
      id: activity.id,
      type: activity.type,
      message: activity.message,
      createdAt: new Date(activity.createdAt).toISOString(),
    })),
    createdAt: new Date(lead.createdAt).toISOString(),
    updatedAt: new Date(lead.updatedAt).toISOString(),
  }
}
