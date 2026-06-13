'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  Bell,
  CalendarClock,
  Copy,
  Download,
  Edit3,
  ExternalLink,
  FileSpreadsheet,
  LogOut,
  Mail,
  Phone,
  Plus,
  Search,
  Trash2,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { leadPriorities, leadStatuses } from '@/lib/leads'
import type { LeadPriority, LeadStatus, SerializedLead } from '@/lib/leads'

type LeadStats = {
  totalLeads: number
  newLeads: number
  contactedLeads: number
  wonLeads: number
  lostLeads: number
  conversionRate: number
  totalRevenue: number
  revenueThisMonth: number
  averageDealSize: number
  averageBudget: number
  pipelineValue: number
  followUpsToday: number
  overdueFollowUps: number
  upcomingFollowUps: number
  videoEditingLeads: number
  socialMediaLeads: number
  websiteLeads: number
  mostPopularService: string
  mostPopularPackage: string
  mostPopularPlan: string
  mostRequestedService: string
  mostImportantPackage: string
}

type LeadsResponse = {
  leads: SerializedLead[]
  stats: LeadStats
}

type Filters = {
  service: string
  package: string
  plan: string
  status: string
  priority: string
  dateFrom: string
  dateTo: string
  budgetMin: string
  budgetMax: string
}

const emptyStats: LeadStats = {
  totalLeads: 0,
  newLeads: 0,
  contactedLeads: 0,
  wonLeads: 0,
  lostLeads: 0,
  conversionRate: 0,
  totalRevenue: 0,
  revenueThisMonth: 0,
  averageDealSize: 0,
  averageBudget: 0,
  pipelineValue: 0,
  followUpsToday: 0,
  overdueFollowUps: 0,
  upcomingFollowUps: 0,
  videoEditingLeads: 0,
  socialMediaLeads: 0,
  websiteLeads: 0,
  mostPopularService: '-',
  mostPopularPackage: '-',
  mostPopularPlan: '-',
  mostRequestedService: '-',
  mostImportantPackage: '-',
}

const emptyFilters: Filters = {
  service: '',
  package: '',
  plan: '',
  status: '',
  priority: '',
  dateFrom: '',
  dateTo: '',
  budgetMin: '',
  budgetMax: '',
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<SerializedLead[]>([])
  const [stats, setStats] = useState<LeadStats>(emptyStats)
  const [selectedLead, setSelectedLead] = useState<SerializedLead | null>(null)
  const [editingLead, setEditingLead] = useState<SerializedLead | null>(null)
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<Filters>(emptyFilters)
  const [noteText, setNoteText] = useState('')
  const [editingNote, setEditingNote] = useState<{ id: string; text: string } | null>(null)
  const [viewMode, setViewMode] = useState<'table' | 'kanban'>('table')
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  const loadLeads = async () => {
    setLoading(true)
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    const response = await fetch(`/api/admin/leads?${params.toString()}`)
    if (response.ok) {
      const data = (await response.json()) as LeadsResponse
      setLeads(data.leads)
      setStats(data.stats)
      setSelectedLead((current) => data.leads.find((lead) => lead._id === current?._id) ?? current)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadLeads()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  const filterOptions = useMemo(() => {
    const values = (selector: (lead: SerializedLead) => string) =>
      Array.from(new Set(leads.map(selector).filter(Boolean))).sort()

    return {
      services: values((lead) => lead.serviceRequired),
      packages: values((lead) => lead.selectedPackage),
      plans: values((lead) => lead.selectedPlan),
    }
  }, [leads])

  const filteredLeads = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()
    if (!normalizedSearch) return leads

    return leads.filter((lead) =>
      [
        lead.name,
        lead.companyName,
        lead.email,
        lead.whatsappNumber,
        lead.serviceRequired,
        lead.selectedPackage,
        lead.selectedPlan,
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedSearch)
    )
  }, [leads, search])

  const notifications = useMemo(() => buildNotifications(leads), [leads])

  const updateLeadLocal = (updatedLead: SerializedLead) => {
    setLeads((current) => current.map((lead) => (lead._id === updatedLead._id ? updatedLead : lead)))
    setSelectedLead(updatedLead)
    setEditingLead(updatedLead)
  }

  const patchLead = async (leadId: string, body: Record<string, unknown>) => {
    const response = await fetch(`/api/admin/leads/${leadId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (response.ok) {
      const data = (await response.json()) as { lead: SerializedLead | null }
      if (data.lead) updateLeadLocal(data.lead)
      await loadLeads()
    }
  }

  const updateStatus = async (leadId: string, status: LeadStatus) => {
    setLeads((current) => current.map((lead) => (lead._id === leadId ? { ...lead, status } : lead)))
    await patchLead(leadId, { status })
  }

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, leadId: string) => {
    event.dataTransfer.setData('leadId', leadId)
  }

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>, status: LeadStatus) => {
    event.preventDefault()
    const leadId = event.dataTransfer.getData('leadId')
    if (leadId) await updateStatus(leadId, status)
  }

  const saveLead = async () => {
    if (!editingLead) return
    await patchLead(editingLead._id, { action: 'updateLead', lead: editingLead })
    setEditingLead(null)
  }

  const deleteLead = async (lead: SerializedLead) => {
    if (!window.confirm('Are you sure? This will permanently delete the lead.')) return

    const response = await fetch(`/api/admin/leads/${lead._id}`, { method: 'DELETE' })
    if (response.ok) {
      setSelectedLead(null)
      setEditingLead(null)
      await loadLeads()
    }
  }

  const addNote = async () => {
    if (!selectedLead || !noteText.trim()) return
    await patchLead(selectedLead._id, { action: 'addNote', noteText })
    setNoteText('')
  }

  const saveNote = async () => {
    if (!selectedLead || !editingNote) return
    await patchLead(selectedLead._id, { action: 'editNote', noteId: editingNote.id, noteText: editingNote.text })
    setEditingNote(null)
  }

  const deleteNote = async (noteId: string) => {
    if (!selectedLead || !window.confirm('Are you sure?')) return
    await patchLead(selectedLead._id, { action: 'deleteNote', noteId })
  }

  const setFollowUpDate = async (lead: SerializedLead, date: string) => {
    await patchLead(lead._id, { action: 'updateLead', lead: { ...lead, nextFollowUpDate: date } })
  }

  const exportCsv = async () => exportRows('csv')
  const exportExcel = async () => exportRows('xls')

  const exportRows = async (format: 'csv' | 'xls') => {
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    const response = await fetch(`/api/admin/leads?${params.toString()}`)
    const exportLeads = response.ok ? ((await response.json()) as LeadsResponse).leads : filteredLeads
    const headers = ['Name', 'Company', 'Email', 'WhatsApp', 'Service', 'Package', 'Plan', 'Price', 'Budget', 'Proposed', 'Closed', 'Follow Up', 'Date', 'Status', 'Source Page', 'Project Description']
    const rows = exportLeads.map((lead) => [
      lead.name,
      lead.companyName,
      lead.email,
      lead.whatsappNumber,
      lead.serviceRequired,
      lead.selectedPackage,
      lead.selectedPlan,
      lead.selectedPrice,
      lead.budget,
      lead.proposedAmount,
      lead.closedAmount,
      lead.nextFollowUpDate ? formatDate(lead.nextFollowUpDate) : '',
      formatDate(lead.createdAt),
      lead.status,
      lead.sourcePage,
      lead.projectDescription,
    ])

    if (format === 'csv') {
      downloadFile(toCsv([headers, ...rows]), 'text/csv;charset=utf-8;', 'csv')
      return
    }

    downloadFile(toExcelTable(headers, rows), 'application/vnd.ms-excel;charset=utf-8;', 'xls')
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.reload()
  }

  return (
    <main className="min-h-screen bg-[#05070d] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[96rem]">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Lead Management CRM</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">SniperCoders Admin Dashboard</h1>
            <p className="mt-3 text-slate-300">Manage leads, notes, follow-ups, revenue, status history, and exports.</p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <button onClick={() => setNotificationsOpen(!notificationsOpen)} className="relative inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/60">
              <Bell className="h-4 w-4" />
              Alerts
              {notifications.length > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-cyan-300 px-1.5 text-[0.65rem] font-bold text-slate-950">{notifications.length}</span>}
            </button>
            {notificationsOpen && (
              <div className="absolute right-0 top-12 z-20 w-80 rounded-2xl border border-white/10 bg-slate-950 p-4 shadow-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Notification Center</p>
                <div className="max-h-80 space-y-2 overflow-y-auto">
                  {notifications.length ? notifications.map((item) => (
                    <button key={item.id} onClick={() => { const lead = leads.find((nextLead) => nextLead._id === item.leadId); if (lead) setSelectedLead(lead); setNotificationsOpen(false) }} className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-3 text-left text-sm text-slate-200 transition hover:border-cyan-300/40">
                      {item.message}
                    </button>
                  )) : <p className="text-sm text-slate-400">No active notifications.</p>}
                </div>
              </div>
            )}
            <button onClick={exportCsv} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
              <Download className="h-4 w-4" />
              Export CSV
            </button>
            <button onClick={exportExcel} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20">
              <FileSpreadsheet className="h-4 w-4" />
              Export Excel
            </button>
            <button onClick={logout} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/60">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          <StatCard label="Total Leads" value={stats.totalLeads} />
          <StatCard label="New Leads" value={stats.newLeads} />
          <StatCard label="Contacted" value={stats.contactedLeads} />
          <StatCard label="Won Leads" value={stats.wonLeads} />
          <StatCard label="Lost Leads" value={stats.lostLeads} />
          <StatCard label="Conversion" value={`${stats.conversionRate}%`} />
          <StatCard label="Revenue" value={formatMoney(stats.totalRevenue)} />
          <StatCard label="Revenue This Month" value={formatMoney(stats.revenueThisMonth)} />
          <StatCard label="Avg Deal Size" value={formatMoney(stats.averageDealSize)} />
          <StatCard label="Avg Budget" value={formatMoney(stats.averageBudget)} />
          <StatCard label="Pipeline Value" value={formatMoney(stats.pipelineValue)} />
          <StatCard label="Follow Ups Today" value={stats.followUpsToday} />
          <StatCard label="Overdue Follow Ups" value={stats.overdueFollowUps} />
          <StatCard label="Upcoming Follow Ups" value={stats.upcomingFollowUps} />
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
          <MiniCard label="Video Editing Leads" value={stats.videoEditingLeads} />
          <MiniCard label="Social Media Leads" value={stats.socialMediaLeads} />
          <MiniCard label="Website Leads" value={stats.websiteLeads} />
          <MiniCard label="Most Popular Service" value={stats.mostPopularService} />
          <MiniCard label="Most Popular Package" value={stats.mostPopularPackage} />
          <MiniCard label="Most Popular Plan" value={stats.mostPopularPlan} />
          <MiniCard label="Most Important Package" value={stats.mostImportantPackage} />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            <button onClick={() => setViewMode('table')} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${viewMode === 'table' ? 'bg-white text-slate-950' : 'border border-white/10 text-white'}`}>Table View</button>
            <button onClick={() => setViewMode('kanban')} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${viewMode === 'kanban' ? 'bg-white text-slate-950' : 'border border-white/10 text-white'}`}>Kanban View</button>
          </div>

          <div className="grid gap-3 xl:grid-cols-[1.4fr_repeat(8,0.8fr)]">
            <label className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, company, email, WhatsApp, service, package, plan"
                className="min-h-12 w-full rounded-xl border border-white/10 bg-[#05070d] pl-11 pr-4 text-sm text-white outline-none focus:border-cyan-300"
              />
            </label>
            <FilterSelect label="All services" value={filters.service} options={filterOptions.services} onChange={(value) => setFilters({ ...filters, service: value })} />
            <FilterSelect label="All packages" value={filters.package} options={filterOptions.packages} onChange={(value) => setFilters({ ...filters, package: value })} />
            <FilterSelect label="All plans" value={filters.plan} options={filterOptions.plans} onChange={(value) => setFilters({ ...filters, plan: value })} />
            <FilterSelect label="All statuses" value={filters.status} options={[...leadStatuses]} onChange={(value) => setFilters({ ...filters, status: value })} />
            <FilterSelect label="All priorities" value={filters.priority} options={[...leadPriorities]} onChange={(value) => setFilters({ ...filters, priority: value })} />
            <input aria-label="Date from" type="date" value={filters.dateFrom} onChange={(event) => setFilters({ ...filters, dateFrom: event.target.value })} className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-3 text-sm text-white outline-none focus:border-cyan-300" />
            <input aria-label="Date to" type="date" value={filters.dateTo} onChange={(event) => setFilters({ ...filters, dateTo: event.target.value })} className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-3 text-sm text-white outline-none focus:border-cyan-300" />
            <button onClick={() => setFilters(emptyFilters)} className="min-h-12 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-semibold text-white transition hover:border-cyan-300/50">
              Clear
            </button>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:max-w-md xl:grid-cols-2">
            <input placeholder="Budget min" value={filters.budgetMin} onChange={(event) => setFilters({ ...filters, budgetMin: event.target.value })} className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300" />
            <input placeholder="Budget max" value={filters.budgetMax} onChange={(event) => setFilters({ ...filters, budgetMax: event.target.value })} className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300" />
          </div>

          {viewMode === 'table' ? (
            <>
              <div className="mt-5 hidden overflow-x-auto lg:block">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs uppercase tracking-[0.16em] text-slate-400">
                    <tr className="border-b border-white/10">
                      {['Name', 'Company', 'Email', 'WhatsApp', 'Service', 'Package', 'Plan', 'Priority', 'Follow Up', 'Date', 'Status', 'Actions'].map((header) => (
                        <th key={header} className="px-3 py-4 font-semibold">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr><td colSpan={12} className="px-3 py-8 text-center text-slate-400">Loading leads...</td></tr>
                    ) : filteredLeads.length === 0 ? (
                      <tr><td colSpan={12} className="px-3 py-8 text-center text-slate-400">No leads found.</td></tr>
                    ) : filteredLeads.map((lead) => (
                      <tr key={lead._id} onClick={() => { setSelectedLead(lead); setEditingLead(null) }} className="cursor-pointer border-b border-white/5 text-slate-200 transition hover:bg-cyan-300/10">
                        <td className="px-3 py-4 font-semibold text-white">{lead.name || '-'}</td>
                        <td className="px-3 py-4">{lead.companyName || '-'}</td>
                        <td className="px-3 py-4">{lead.email || '-'}</td>
                        <td className="px-3 py-4">{lead.whatsappNumber || '-'}</td>
                        <td className="px-3 py-4">{lead.serviceRequired || '-'}</td>
                        <td className="px-3 py-4">{lead.selectedPackage || '-'}</td>
                        <td className="px-3 py-4">{lead.selectedPlan || '-'}</td>
                        <td className="px-3 py-4"><PriorityBadge priority={lead.priority as LeadPriority} /></td>
                        <td className={`px-3 py-4 ${followUpToneClass(lead.nextFollowUpDate)}`}>{lead.nextFollowUpDate ? formatDate(lead.nextFollowUpDate) : '-'}</td>
                        <td className="px-3 py-4">{formatDate(lead.createdAt)}</td>
                        <td className="px-3 py-4" onClick={(event) => event.stopPropagation()}>
                          <select value={lead.status} onChange={(event) => updateStatus(lead._id, event.target.value as LeadStatus)} className="rounded-lg border border-white/10 bg-[#05070d] px-3 py-2 text-xs text-white outline-none focus:border-cyan-300">
                            {leadStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
                          </select>
                        </td>
                        <td className="px-3 py-4" onClick={(event) => event.stopPropagation()}>
                          <div className="flex gap-2">
                            <button onClick={() => setSelectedLead(lead)} className="rounded-lg border border-white/10 px-2 py-1 text-xs">View</button>
                            <button onClick={() => { setSelectedLead(lead); setEditingLead(lead) }} className="rounded-lg border border-white/10 px-2 py-1 text-xs">Edit</button>
                            <button onClick={() => deleteLead(lead)} className="rounded-lg border border-red-400/30 px-2 py-1 text-xs text-red-200">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-5 grid gap-3 lg:hidden">
                {filteredLeads.map((lead) => (
                  <button key={lead._id} onClick={() => setSelectedLead(lead)} className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-left">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-white">{lead.name || 'Unnamed Lead'}</p>
                        <p className="mt-1 text-sm text-slate-400">{lead.serviceRequired || '-'}</p>
                      </div>
                      <PriorityBadge priority={lead.priority as LeadPriority} />
                    </div>
                    <p className="mt-3 text-sm text-slate-300">{lead.selectedPackage || '-'} / {lead.selectedPlan || '-'}</p>
                    <p className={`mt-2 text-xs ${followUpToneClass(lead.nextFollowUpDate)}`}>Follow-up: {lead.nextFollowUpDate ? formatDate(lead.nextFollowUpDate) : '-'}</p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <KanbanView leads={filteredLeads} onDragStart={handleDragStart} onDrop={handleDrop} onOpen={(lead) => setSelectedLead(lead)} />
          )}
        </div>
      </div>

      {selectedLead && (
        <LeadDrawer
          lead={selectedLead}
          editingLead={editingLead}
          noteText={noteText}
          editingNote={editingNote}
          onClose={() => { setSelectedLead(null); setEditingLead(null) }}
          onEdit={() => setEditingLead(selectedLead)}
          onEditingLeadChange={setEditingLead}
          onSave={saveLead}
          onDelete={() => deleteLead(selectedLead)}
          onStatusChange={(status) => updateStatus(selectedLead._id, status)}
          onNoteTextChange={setNoteText}
          onAddNote={addNote}
          onEditingNoteChange={setEditingNote}
          onSaveNote={saveNote}
          onDeleteNote={deleteNote}
          onSetFollowUpDate={setFollowUpDate}
        />
      )}
    </main>
  )
}

function LeadDrawer({
  lead,
  editingLead,
  noteText,
  editingNote,
  onClose,
  onEdit,
  onEditingLeadChange,
  onSave,
  onDelete,
  onStatusChange,
  onNoteTextChange,
  onAddNote,
  onEditingNoteChange,
  onSaveNote,
  onDeleteNote,
  onSetFollowUpDate,
}: {
  lead: SerializedLead
  editingLead: SerializedLead | null
  noteText: string
  editingNote: { id: string; text: string } | null
  onClose: () => void
  onEdit: () => void
  onEditingLeadChange: (lead: SerializedLead | null) => void
  onSave: () => void
  onDelete: () => void
  onStatusChange: (status: LeadStatus) => void
  onNoteTextChange: (value: string) => void
  onAddNote: () => void
  onEditingNoteChange: (note: { id: string; text: string } | null) => void
  onSaveNote: () => void
  onDeleteNote: (id: string) => void
  onSetFollowUpDate: (lead: SerializedLead, date: string) => void
}) {
  const activeLead = editingLead ?? lead

  return (
    <div className="fixed inset-0 z-50 bg-black/70 p-3 backdrop-blur-sm sm:p-4" onClick={onClose}>
      <aside className="ml-auto h-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-950 p-4 shadow-2xl sm:p-6" onClick={(event) => event.stopPropagation()}>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Lead Details</p>
            <h2 className="mt-2 text-2xl font-semibold">{lead.name || 'Unnamed Lead'}</h2>
            <p className="mt-2 text-sm text-slate-400">Last updated {formatDate(lead.updatedAt)}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={onEdit} className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:text-white" title="Edit lead"><Edit3 className="h-5 w-5" /></button>
            <button onClick={onDelete} className="rounded-full border border-red-400/30 bg-red-400/10 p-2 text-red-100 transition hover:bg-red-400/20" title="Delete lead"><Trash2 className="h-5 w-5" /></button>
            <button onClick={onClose} className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:text-white" title="Close"><X className="h-5 w-5" /></button>
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          <QuickAction href={`https://wa.me/${normalizePhone(lead.whatsappNumber)}?text=${getWhatsAppMessage(lead)}`} icon={ExternalLink} label="Open WhatsApp" disabled={!lead.whatsappNumber} />
          <QuickAction href={`tel:${normalizePhone(lead.whatsappNumber)}`} icon={Phone} label="Call Lead" disabled={!lead.whatsappNumber} />
          <QuickAction href={`mailto:${lead.email}`} icon={Mail} label="Send Email" disabled={!lead.email} />
          <CopyButton value={lead.whatsappNumber} label="Copy Number" />
          <CopyButton value={lead.email} label="Copy Email" />
          <CopyButton value={lead.companyName} label="Copy Company" />
        </div>

        {editingLead ? (
          <EditLeadForm lead={activeLead} onChange={onEditingLeadChange} onSave={onSave} onCancel={() => onEditingLeadChange(null)} />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            <Detail label="Full Name" value={lead.name} />
            <Detail label="Company Name" value={lead.companyName} />
            <Detail label="Email" value={lead.email} />
            <Detail label="WhatsApp Number" value={lead.whatsappNumber} />
            <Detail label="Service" value={lead.serviceRequired} />
            <Detail label="Package" value={lead.selectedPackage} />
            <Detail label="Plan" value={lead.selectedPlan} />
            <Detail label="Price" value={lead.selectedPrice} />
            <Detail label="Budget" value={lead.budget} />
            <Detail label="Proposed Amount" value={formatMoney(lead.proposedAmount)} />
            <Detail label="Closed Amount" value={formatMoney(lead.closedAmount)} />
            <Detail label="Next Follow-Up" value={lead.nextFollowUpDate ? formatDate(lead.nextFollowUpDate) : '-'} />
            <Detail label="Submission Date" value={formatDate(lead.createdAt)} />
            <Detail label="Last Updated Date" value={formatDate(lead.updatedAt)} />
            <Detail label="Current Status" value={lead.status} />
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Lead Priority</p>
              <div className="mt-2"><PriorityBadge priority={lead.priority as LeadPriority} /></div>
            </div>
            <Detail label="Lead Source URL" value={lead.sourcePage} />
            <Detail label="Current URL" value={lead.currentUrl} />
            <Detail label="Pricing Page URL" value={lead.pricingPageUrl} />
            <Detail label="User IP" value={lead.userIp} />
            <Detail label="Device Type" value={lead.deviceType} />
            <div className="sm:col-span-2">
              <Detail label="Project Description" value={lead.projectDescription} multiline />
            </div>
            <div className="sm:col-span-2">
              <Detail label="Follow-Up Notes" value={lead.followUpNotes} multiline />
            </div>
          </div>
        )}

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-semibold">Follow-Up and Status</h3>
            <select value={lead.status} onChange={(event) => onStatusChange(event.target.value as LeadStatus)} className="min-h-11 rounded-xl border border-white/10 bg-[#05070d] px-3 text-sm text-white outline-none focus:border-cyan-300">
              {leadStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
            </select>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <FollowUpButton label="Today" lead={lead} onSetDate={onSetFollowUpDate} offsetDays={0} />
            <FollowUpButton label="Tomorrow" lead={lead} onSetDate={onSetFollowUpDate} offsetDays={1} />
            <label className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-[#05070d] px-4 text-sm text-slate-200">
              <CalendarClock className="h-4 w-4 text-cyan-300" />
              <input type="date" className="bg-transparent outline-none" onChange={(event) => onSetFollowUpDate(lead, event.target.value)} />
            </label>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <h3 className="text-xl font-semibold">Internal Notes</h3>
          <div className="mt-4 flex gap-2">
            <input value={noteText} onChange={(event) => onNoteTextChange(event.target.value)} placeholder="Add internal note..." className="min-h-11 flex-1 rounded-xl border border-white/10 bg-[#05070d] px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300" />
            <button onClick={onAddNote} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"><Plus className="h-4 w-4" />Add</button>
          </div>
          <div className="mt-4 space-y-3">
            {lead.notes.length ? lead.notes.map((note) => (
              <div key={note.id} className="rounded-xl border border-white/10 bg-black/20 p-4">
                {editingNote?.id === note.id ? (
                  <div className="flex gap-2">
                    <input value={editingNote.text} onChange={(event) => onEditingNoteChange({ ...editingNote, text: event.target.value })} className="min-h-10 flex-1 rounded-lg border border-white/10 bg-[#05070d] px-3 text-sm text-white outline-none focus:border-cyan-300" />
                    <button onClick={onSaveNote} className="rounded-lg bg-cyan-300 px-3 text-sm font-semibold text-slate-950">Save</button>
                  </div>
                ) : (
                  <>
                    <p className="text-sm leading-7 text-slate-200">{note.text}</p>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span>{formatDate(note.createdAt)}</span>
                      <span className="flex gap-2">
                        <button onClick={() => onEditingNoteChange({ id: note.id, text: note.text })} className="text-cyan-300">Edit</button>
                        <button onClick={() => onDeleteNote(note.id)} className="text-red-300">Delete</button>
                      </span>
                    </div>
                  </>
                )}
              </div>
            )) : <p className="text-sm text-slate-400">No notes yet.</p>}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <h3 className="text-xl font-semibold">Lead Timeline</h3>
          <div className="mt-4 space-y-3">
            {lead.activityLog.length ? lead.activityLog.map((activity) => (
              <div key={activity.id} className="flex gap-3 text-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                <div>
                  <p className="font-medium text-white">{activity.message}</p>
                  <p className="text-xs text-slate-500">{formatDate(activity.createdAt)}</p>
                </div>
              </div>
            )) : <p className="text-sm text-slate-400">No activity yet.</p>}
          </div>
        </div>
      </aside>
    </div>
  )
}

function EditLeadForm({ lead, onChange, onSave, onCancel }: { lead: SerializedLead; onChange: (lead: SerializedLead) => void; onSave: () => void; onCancel: () => void }) {
  return (
    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
      <h3 className="text-xl font-semibold">Edit Lead</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <EditField label="Name" value={lead.name} onChange={(value) => onChange({ ...lead, name: value })} />
        <EditField label="Company" value={lead.companyName} onChange={(value) => onChange({ ...lead, companyName: value })} />
        <EditField label="Email" value={lead.email} onChange={(value) => onChange({ ...lead, email: value })} />
        <EditField label="WhatsApp" value={lead.whatsappNumber} onChange={(value) => onChange({ ...lead, whatsappNumber: value })} />
        <EditField label="Service" value={lead.serviceRequired} onChange={(value) => onChange({ ...lead, serviceRequired: value })} />
        <EditField label="Package" value={lead.selectedPackage} onChange={(value) => onChange({ ...lead, selectedPackage: value })} />
        <EditField label="Plan" value={lead.selectedPlan} onChange={(value) => onChange({ ...lead, selectedPlan: value })} />
        <EditField label="Price" value={lead.selectedPrice} onChange={(value) => onChange({ ...lead, selectedPrice: value })} />
        <EditField label="Budget" value={lead.budget} onChange={(value) => onChange({ ...lead, budget: value })} />
        <EditField label="Proposed Amount" value={String(lead.proposedAmount)} onChange={(value) => onChange({ ...lead, proposedAmount: Number(value) || 0 })} />
        <EditField label="Closed Amount" value={String(lead.closedAmount)} onChange={(value) => onChange({ ...lead, closedAmount: Number(value) || 0 })} />
        <EditField label="Follow-Up Notes" value={lead.followUpNotes} onChange={(value) => onChange({ ...lead, followUpNotes: value })} />
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Priority
          <select value={lead.priority} onChange={(event) => onChange({ ...lead, priority: event.target.value as LeadPriority })} className="min-h-11 rounded-xl border border-white/10 bg-[#05070d] px-3 text-white outline-none focus:border-cyan-300">
            {leadPriorities.map((priority) => <option key={priority} value={priority}>{priority}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Status
          <select value={lead.status} onChange={(event) => onChange({ ...lead, status: event.target.value as LeadStatus })} className="min-h-11 rounded-xl border border-white/10 bg-[#05070d] px-3 text-white outline-none focus:border-cyan-300">
            {leadStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
          Description
          <textarea value={lead.projectDescription} onChange={(event) => onChange({ ...lead, projectDescription: event.target.value })} rows={4} className="rounded-xl border border-white/10 bg-[#05070d] px-3 py-2 text-white outline-none focus:border-cyan-300" />
        </label>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={onSave} className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">Save changes</button>
        <button onClick={onCancel} className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white">Cancel</button>
      </div>
    </div>
  )
}

function EditField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value)} className="min-h-11 rounded-xl border border-white/10 bg-[#05070d] px-3 text-white outline-none focus:border-cyan-300" />
    </label>
  )
}

function KanbanView({
  leads,
  onDragStart,
  onDrop,
  onOpen,
}: {
  leads: SerializedLead[]
  onDragStart: (event: React.DragEvent<HTMLDivElement>, leadId: string) => void
  onDrop: (event: React.DragEvent<HTMLDivElement>, status: LeadStatus) => void
  onOpen: (lead: SerializedLead) => void
}) {
  const columns = leadStatuses.filter((status) => status !== 'Spam')

  return (
    <div className="mt-5 grid gap-4 lg:grid-cols-3 2xl:grid-cols-7">
      {columns.map((status) => {
        const statusLeads = leads.filter((lead) => lead.status === status)

        return (
          <div
            key={status}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => onDrop(event, status)}
            className="min-h-48 rounded-2xl border border-white/10 bg-slate-950/70 p-3"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-white">{status}</h3>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-300">{statusLeads.length}</span>
            </div>
            <div className="space-y-3">
              {statusLeads.map((lead) => (
                <div
                  key={lead._id}
                  draggable
                  onDragStart={(event) => onDragStart(event, lead._id)}
                  onClick={() => onOpen(lead)}
                  className="cursor-grab rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-cyan-300/40"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-white">{lead.name || 'Unnamed Lead'}</p>
                    <PriorityBadge priority={lead.priority as LeadPriority} />
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{lead.serviceRequired || '-'}</p>
                  <p className={`mt-2 text-xs ${followUpToneClass(lead.nextFollowUpDate)}`}>
                    {lead.nextFollowUpDate ? formatDate(lead.nextFollowUpDate) : 'No follow-up'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function FollowUpButton({ label, lead, onSetDate, offsetDays }: { label: string; lead: SerializedLead; onSetDate: (lead: SerializedLead, date: string) => void; offsetDays: number }) {
  return (
    <button
      onClick={() => {
        const date = new Date()
        date.setDate(date.getDate() + offsetDays)
        onSetDate(lead, date.toISOString().slice(0, 10))
      }}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/50"
    >
      {label}
    </button>
  )
}

function PriorityBadge({ priority }: { priority: LeadPriority }) {
  const styles: Record<LeadPriority, string> = {
    'Hot Lead': 'border-red-300/30 bg-red-400/15 text-red-100',
    'Warm Lead': 'border-yellow-300/30 bg-yellow-300/15 text-yellow-100',
    'Cold Lead': 'border-slate-300/20 bg-slate-300/10 text-slate-200',
  }

  return (
    <span className={`inline-flex whitespace-nowrap rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold ${styles[priority] ?? styles['Warm Lead']}`}>
      {priority}
    </span>
  )
}

function followUpToneClass(value: string | null) {
  if (!value) return 'text-slate-400'
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const date = new Date(value)
  date.setHours(0, 0, 0, 0)
  const diff = date.getTime() - today.getTime()
  if (diff < 0) return 'text-red-300'
  if (diff === 0) return 'text-orange-300'
  return 'text-emerald-300'
}

function buildNotifications(leads: SerializedLead[]) {
  return leads.flatMap((lead) => {
    const items: Array<{ id: string; leadId: string; message: string }> = []
    if (lead.status === 'New Lead') items.push({ id: `${lead._id}-new`, leadId: lead._id, message: `New Lead Received: ${lead.name || lead.serviceRequired || 'Unnamed Lead'}` })
    if (lead.status === 'Won') items.push({ id: `${lead._id}-won`, leadId: lead._id, message: `Lead Won: ${lead.name || 'Unnamed Lead'}` })
    if (lead.status === 'Lost') items.push({ id: `${lead._id}-lost`, leadId: lead._id, message: `Lead Lost: ${lead.name || 'Unnamed Lead'}` })
    if (lead.nextFollowUpDate) {
      const tone = followUpToneClass(lead.nextFollowUpDate)
      if (tone.includes('orange')) items.push({ id: `${lead._id}-today`, leadId: lead._id, message: `Follow-Up Due Today: ${lead.name || 'Unnamed Lead'}` })
      if (tone.includes('red')) items.push({ id: `${lead._id}-overdue`, leadId: lead._id, message: `Lead Overdue: ${lead.name || 'Unnamed Lead'}` })
    }
    return items
  })
}

function FilterSelect({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)} className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-3 text-sm text-white outline-none focus:border-cyan-300">
      <option value="">{label}</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  )
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-300">{label}</p>
      <p className="mt-3 text-2xl font-semibold">{value}</p>
    </div>
  )
}

function MiniCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </div>
  )
}

function Detail({ label, value, multiline = false }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <p className={`mt-2 text-sm text-white ${multiline ? 'leading-7' : ''}`}>{value || '-'}</p>
    </div>
  )
}

function CopyButton({ value, label }: { value: string; label: string }) {
  return (
    <button onClick={() => value && navigator.clipboard.writeText(value)} disabled={!value} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white transition hover:border-cyan-300/50 disabled:cursor-not-allowed disabled:opacity-40">
      <Copy className="h-3.5 w-3.5" />
      {label}
    </button>
  )
}

function QuickAction({ href, icon: Icon, label, disabled }: { href: string; icon: LucideIcon; label: string; disabled?: boolean }) {
  return (
    <a href={disabled ? undefined : href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white transition hover:border-cyan-300/50 ${disabled ? 'pointer-events-none opacity-40' : ''}`}>
      <Icon className="h-3.5 w-3.5" />
      {label}
    </a>
  )
}

function normalizePhone(value: string) {
  return value.replace(/[^0-9]/g, '')
}

function getWhatsAppMessage(lead: SerializedLead) {
  return encodeURIComponent(
    `Hi ${lead.name || 'there'},

Thank you for contacting SniperCoders regarding ${lead.serviceRequired || 'your project'}.

We received your inquiry and would love to discuss your requirements.

Regards,
SniperCoders`
  )
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
}

function formatMoney(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value || 0)
}

function toCsv(rows: Array<Array<string | number>>) {
  return rows.map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n')
}

function toExcelTable(headers: string[], rows: Array<Array<string | number>>) {
  const tableRows = [headers, ...rows]
    .map((row) => `<tr>${row.map((value) => `<td>${String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;')}</td>`).join('')}</tr>`)
    .join('')
  return `<table>${tableRows}</table>`
}

function downloadFile(content: string, type: string, extension: string) {
  const url = URL.createObjectURL(new Blob([content], { type }))
  const link = document.createElement('a')
  link.href = url
  link.download = `snipercoders-leads-${new Date().toISOString().slice(0, 10)}.${extension}`
  link.click()
  URL.revokeObjectURL(url)
}
