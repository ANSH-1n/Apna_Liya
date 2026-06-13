//app/pricing/_components/PricingExperience.tsx

'use client'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe2,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { PricingPageData, PricingRegion } from '../pricing-data'

const whatsappNumber = '917006377796'

const budgetOptions: Record<PricingRegion, string[]> = {
  international: ['Under $500', '$500 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+'],
  india: ['Under $500', '$500 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+'],
}

const trustItems = [
  'Fast Delivery',
  'Dedicated Team',
  'International Support',
  'Conversion Focused',
  'AI + Human Workflow',
  'Transparent Communication',
  'Performance Driven',
]

type PricingExperienceProps = {
  page: PricingPageData
}

export default function PricingExperience({ page }: PricingExperienceProps) {
  const [region, setRegion] = useState<PricingRegion>('international')
  const [openFaq, setOpenFaq] = useState(0)
  const [activePackageIndex, setActivePackageIndex] = useState(0)
  const activePackage = page.packageTiers?.[activePackageIndex]
  const activePlans = activePackage?.plans ?? page.plans
  const activeServices = activePackage?.services ?? page.services
  const isWebDevelopmentPage = page.slug === 'web-development'
  const isCustomSoftwareTab = activePackage?.id === 'custom-software'

  useEffect(() => {
    const savedRegion = window.localStorage.getItem('snipercoders-pricing-region')
    if (savedRegion === 'international' || savedRegion === 'india') {
      setRegion(savedRegion)
    }
  }, [])

  const updateRegion = (nextRegion: PricingRegion) => {
    setRegion(nextRegion)
    window.localStorage.setItem('snipercoders-pricing-region', nextRegion)
  }

  const ctaMessage = useMemo(
    () =>
      encodeURIComponent(
        `Hello SniperCoders, I want to discuss ${page.serviceRequired} pricing for my project.`
      ),
    [page.serviceRequired]
  )

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.24),transparent_58%)]" />

          <div className="mx-auto max-w-6xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300"
            >
              {page.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            >
              {page.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              {page.description}
            </motion.p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#plans"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                View packages
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${ctaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/20"
              >
                Ask on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
              {page.audience.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Customize package
                <Sparkles className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <ShieldCheck className="h-5 w-5 shrink-0 text-cyan-300" />
                <span>Transparent premium pricing with custom proposal options.</span>
              </div>
            </div>
            <RegionToggle region={region} onChange={updateRegion} />
          </div>
        </section>

        {page.packageTiers && page.packageTiers.length > 1 && (
          <section className="px-4 pt-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
              <PackageToggle
                tiers={page.packageTiers}
                activeIndex={activePackageIndex}
                onChange={setActivePackageIndex}
              />
              {activePackage && (
                <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{activePackage.title}</h2>
                    <p className="mt-2 max-w-3xl leading-7 text-slate-300">{activePackage.description}</p>
                  </div>
                  {activePackage.costNote && (
                    <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100">
                      {activePackage.costNote}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {isWebDevelopmentPage && (
          <section className="px-4 pt-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-medium leading-6 text-cyan-100">
              All plans cover development only. Hosting, domain, server costs, and third-party subscription fees are not included and are paid directly by the client.
            </div>
          </section>
        )}

        <section id="plans" className="px-4 py-16 sm:px-6 lg:px-8">
          {isCustomSoftwareTab ? (
            <CustomSoftwareProjectForm />
          ) : region === 'india' ? (
            <IndiaCustomOnly page={page} activePackageTitle={activePackage?.title} />
          ) : (
            <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
              {activePlans.map((plan, index) => (
                <motion.article
                  key={`${activePackage?.id ?? 'default'}-${plan.name}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.08 }}
                  className={[
                    'relative rounded-2xl border p-6 transition hover:-translate-y-1',
                    plan.popular
                      ? 'border-cyan-300/50 bg-cyan-300/[0.08] shadow-[0_0_40px_rgba(34,211,238,0.12)]'
                      : 'border-white/10 bg-white/[0.04]',
                  ].join(' ')}
                >
                  {plan.popular && (
                    <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      Most Popular
                    </div>
                  )}
                  <h2 className="pr-28 text-2xl font-semibold">{plan.name}</h2>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-300">{plan.subtitle}</p>
                  <div className="mt-6 flex items-end gap-1">
                    <span className="text-4xl font-semibold">{plan.internationalPrice}</span>
                    <span className="pb-1 text-sm text-slate-400">{plan.billing}</span>
                  </div>
                  {plan.popular && <p className="mt-3 text-sm font-semibold text-cyan-200">Best value for consistent growth.</p>}

                  <div className="mt-6 grid gap-3 text-sm text-slate-300">
                    <PlanMeta icon={Clock3} label="Turnaround" value={plan.turnaround} />
                    <PlanMeta icon={Sparkles} label="Revisions" value={plan.revisions} />
                    <PlanMeta icon={Headphones} label="Support" value={plan.support} />
                    <PlanMeta icon={BarChart3} label="Monthly Output" value={plan.monthlyDeliverables} />
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {plan.note && <p className="mt-5 text-xs leading-6 text-slate-400">{plan.note}</p>}

                  <a
                    href="#quote"
                    className={[
                      'mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition',
                      plan.popular
                        ? 'bg-white text-slate-950 hover:bg-cyan-100'
                        : 'border border-white/15 bg-white/5 text-white hover:border-cyan-300/60 hover:bg-cyan-300/10',
                    ].join(' ')}
                  >
                    Request this plan
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-3">
              <Zap className="h-6 w-6 text-cyan-300" />
              <h2 className="text-3xl font-semibold">Included service coverage</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {activeServices.map((service) => (
                <div key={service} className="rounded-xl border border-white/10 bg-slate-950/60 p-4 text-sm font-medium text-slate-200">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Why Clients Choose SniperCoders
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Premium execution without confusing agency layers.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                You get practical strategy, fast communication, and creative assets built around trust, conversion, and growth.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection
          page={page}
          region={region}
          onCustomSoftwareSelected={
            isWebDevelopmentPage
              ? () => {
                  const customIndex = page.packageTiers?.findIndex((tier) => tier.id === 'custom-software') ?? -1
                  if (customIndex >= 0) {
                    setActivePackageIndex(customIndex)
                    window.setTimeout(() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' }), 0)
                  }
                }
              : undefined
          }
        />

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Questions
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Pricing FAQs</h2>
            </div>
            <div className="space-y-3">
              {page.faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/[0.04]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-white"
                      aria-expanded={isOpen}
                    >
                      {faq.question}
                      <ChevronDown className={`h-5 w-5 shrink-0 text-cyan-300 transition ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && <p className="px-5 pb-5 leading-7 text-slate-300">{faq.answer}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Social Proof
                </p>
                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  We let the work speak.
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-200">
                  Portfolio and case studies available on request via WhatsApp before you commit to any plan.
                </p>
              </div>
              <a
                href="#quote"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Get a tailored quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <a
          href="#quote"
          className="fixed inset-x-4 bottom-4 z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_36px_rgba(34,211,238,0.28)] sm:hidden"
        >
          Request quote
          <MessageCircle className="h-4 w-4" />
        </a>
      </main>
      <Footer />
    </>
  )
}

function RegionToggle({ region, onChange }: { region: PricingRegion; onChange: (region: PricingRegion) => void }) {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 rounded-full border border-white/10 bg-slate-950 p-1 text-sm font-semibold sm:w-80">
      {[
        { value: 'international' as const, label: 'International', icon: Globe2 },
        { value: 'india' as const, label: 'India', icon: ShieldCheck },
      ].map((item) => {
        const Icon = item.icon
        const active = region === item.value
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={`relative flex min-h-10 items-center justify-center gap-2 rounded-full px-4 transition ${
              active ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

function IndiaCustomOnly({
  page,
  activePackageTitle,
}: {
  page: PricingPageData
  activePackageTitle?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      className="mx-auto max-w-4xl rounded-2xl border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(15,23,42,0.96)_48%,rgba(236,72,153,0.12))] p-6 text-center shadow-[0_0_45px_rgba(34,211,238,0.10)] sm:p-10"
    >
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
        <Sparkles className="h-7 w-7" />
      </div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
        India Pricing
      </p>
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
        Customize your Indian package
      </h2>
      <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
        For Indian clients, we prepare a custom quote based on your scope, city, monthly volume,
        timeline, and the exact deliverables you need
        {activePackageTitle ? ` for ${activePackageTitle}` : ` for ${page.serviceRequired}`}.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href="#quote"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
        >
          Customize package
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hello SniperCoders, I want a custom India package for ${page.serviceRequired}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/20"
        >
          WhatsApp for quote
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}

function PackageToggle({
  tiers,
  activeIndex,
  onChange,
}: {
  tiers: NonNullable<PricingPageData['packageTiers']>
  activeIndex: number
  onChange: (index: number) => void
}) {
  return (
    <div
      className="grid gap-2 rounded-full border border-white/10 bg-[#05070d] p-1 text-sm font-semibold sm:grid-cols-2"
      role="tablist"
      aria-label="Package type"
    >
      {tiers.map((tier, index) => {
        const active = activeIndex === index
        return (
          <button
            key={tier.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(index)}
            className={`min-h-11 rounded-full px-4 py-2 transition ${
              active ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            {tier.label}
          </button>
        )
      })}
    </div>
  )
}

function PlanMeta({ icon: Icon, label, value }: { icon: typeof Clock3; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</div>
        <div className="mt-1 text-slate-200">{value}</div>
      </div>
    </div>
  )
}

function CustomSoftwareProjectForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    projectType: 'SaaS Platform',
    budget: '$8,000 - $20,000',
    timeline: '1 to 3 months',
    hasSpec: 'No - I need help scoping this',
    description: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = encodeURIComponent(
      `New Custom Software Project Request

Full Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
WhatsApp: ${form.whatsapp}

Project Type: ${form.projectType}
Estimated Budget: ${form.budget}
Timeline: ${form.timeline}
Technical Document: ${form.hasSpec}

Project Description:
${form.description}`
    )

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Custom Software Proposal
        </p>
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          Tell us what you need to build.
        </h2>
        <p className="mt-5 leading-8 text-slate-300">
          Custom software is scoped individually. No fixed price list - because no two projects are the same.
          Fill the form and we will review your requirements and send a detailed proposal within 48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-950 p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} required />
          <Field label="Company Name" value={form.company} onChange={(value) => setForm({ ...form, company: value })} />
          <Field label="Email Address" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} required />
          <Field label="WhatsApp Number" value={form.whatsapp} onChange={(value) => setForm({ ...form, whatsapp: value })} required />
          <SelectField
            label="Project Type"
            value={form.projectType}
            onChange={(value) => setForm({ ...form, projectType: value })}
            options={[
              'SaaS Platform',
              'CRM System',
              'ERP Solution',
              'Admin Dashboard',
              'AI Integration',
              'Workflow Automation',
              'API Integration',
              'Mobile App',
              'Other (describe below)',
            ]}
          />
          <SelectField
            label="Estimated Budget"
            value={form.budget}
            onChange={(value) => setForm({ ...form, budget: value })}
            options={['Under $3,000', '$3,000 - $8,000', '$8,000 - $20,000', '$20,000 - $50,000', '$50,000+', 'Not sure yet']}
          />
          <SelectField
            label="Timeline"
            value={form.timeline}
            onChange={(value) => setForm({ ...form, timeline: value })}
            options={['As soon as possible', 'Within 1 month', '1 to 3 months', '3 to 6 months', 'Flexible']}
          />
          <SelectField
            label="Technical document or specification?"
            value={form.hasSpec}
            onChange={(value) => setForm({ ...form, hasSpec: value })}
            options={['Yes - I will share it on WhatsApp', 'No - I need help scoping this']}
          />
          <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
            Project Description
            <textarea
              value={form.description}
              onChange={(event) => setForm({ ...form, description: event.target.value })}
              required
              rows={6}
              className="rounded-xl border border-white/10 bg-[#05070d] px-4 py-3 text-white outline-none focus:border-cyan-300"
              placeholder="Describe what you want to build, what problem it solves, and any technical requirements you already know."
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
        >
          Send project details on WhatsApp
          <MessageCircle className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}

function QuoteSection({
  page,
  region,
  onCustomSoftwareSelected,
}: {
  page: PricingPageData
  region: PricingRegion
  onCustomSoftwareSelected?: () => void
}) {
  const isWebDevelopmentPage = page.slug === 'web-development'
  const quoteBudgetOptions = useMemo(
    () =>
      isWebDevelopmentPage
        ? ['Under $1,000', '$1,000 - $3,000', '$3,000 - $8,000', '$8,000 - $20,000', '$20,000+']
        : budgetOptions[region],
    [isWebDevelopmentPage, region]
  )
  const serviceOptions = useMemo(
    () =>
      isWebDevelopmentPage
        ? ['Website Development', 'Landing Page', 'Ecommerce Store', 'Booking System', 'Website Redesign', 'Custom Software (redirects to custom tab)']
        : [page.serviceRequired, 'Video Editing', 'Social Media Marketing', 'Website & Software Development', 'AI Solutions', 'Business Automation'],
    [isWebDevelopmentPage, page.serviceRequired]
  )
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    service: serviceOptions[0],
    budget: quoteBudgetOptions[1],
    description: '',
  })

  useEffect(() => {
    setForm((current) => ({ ...current, budget: quoteBudgetOptions[1], service: serviceOptions[0] }))
  }, [quoteBudgetOptions, serviceOptions])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = encodeURIComponent(
      `New Custom Quote Request

Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
WhatsApp: ${form.whatsapp}

Service Required: ${form.service}

Budget: ${form.budget}

Project Details:
${form.description}`
    )

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="quote" className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Need Something Custom?
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Tell us about your project and receive a tailored proposal.
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            Share your goals, budget, timeline, and current bottleneck. The form opens WhatsApp with a structured message so the conversation starts clean.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-950 p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} required />
            <Field label="Company Name" value={form.company} onChange={(value) => setForm({ ...form, company: value })} />
            <Field label="Email" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} required />
            <Field label="WhatsApp Number" value={form.whatsapp} onChange={(value) => setForm({ ...form, whatsapp: value })} required />
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Service Required
              <select
                value={form.service}
                onChange={(event) => {
                  const value = event.target.value
                  setForm({ ...form, service: value })
                  if (value.startsWith('Custom Software')) {
                    onCustomSoftwareSelected?.()
                  }
                }}
                className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
              >
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Budget
              <select
                value={form.budget}
                onChange={(event) => setForm({ ...form, budget: event.target.value })}
                className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
              >
                {quoteBudgetOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
              Project Description
              <textarea
                value={form.description}
                onChange={(event) => setForm({ ...form, description: event.target.value })}
                required
                rows={5}
                className="rounded-xl border border-white/10 bg-[#05070d] px-4 py-3 text-white outline-none focus:border-cyan-300"
                placeholder="Tell us what you want to build, improve, edit, or scale."
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            Send quote request on WhatsApp
            <MessageCircle className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  required?: boolean
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
      />
    </label>
  )
}
