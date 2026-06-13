'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { ArrowRight, BadgeCheck, CalendarDays, CheckCircle2, ExternalLink, MessageSquareText, TrendingUp } from 'lucide-react'
import type { ClientResultCaseStudy } from '../pricing-data'

type RealClientResultsProps = {
  caseStudies: ClientResultCaseStudy[]
  className?: string
  ctaHref?: string
}

const trustIconMap = [CalendarDays, TrendingUp, MessageSquareText, BadgeCheck]

export default function RealClientResults({ caseStudies, className = '', ctaHref = '#quote' }: RealClientResultsProps) {
  if (!caseStudies.length) return null

  return (
    <section className={`relative isolate px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="absolute inset-x-0 top-8 -z-10 h-72 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.16),transparent_66%)]" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Real Client Results
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
            REAL CLIENT RESULTS
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            See how strategic content, consistency, and execution helped our clients generate more inquiries, engagement, and business growth.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyResult key={`${caseStudy.clientName}-${caseStudy.industry}`} caseStudy={caseStudy} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mt-8 max-w-4xl rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(15,23,42,0.92)_50%,rgba(8,13,25,0.98))] p-6 text-center sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Want Similar Results For Your Business?
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Get a custom social media growth strategy tailored to your business goals.
          </h3>
          <a
            href={ctaHref}
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            Request Growth Strategy
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function CaseStudyResult({ caseStudy, index }: { caseStudy: ClientResultCaseStudy; index: number }) {
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const currentScreenshot = caseStudy.screenshots[activeScreenshot] ?? caseStudy.screenshots[0]
  const trustIndicators = useMemo(
    () => [
      caseStudy.trustIndicators?.[0] ?? `${caseStudy.managementDuration}+ Management`,
      caseStudy.trustIndicators?.[1] ?? `${caseStudy.growth} Inquiry Growth`,
      caseStudy.trustIndicators?.[2] ?? 'Consistent Organic Leads',
      caseStudy.trustIndicators?.[3] ?? 'Real Verified Client',
    ],
    [caseStudy.growth, caseStudy.managementDuration, caseStudy.trustIndicators]
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,13,25,0.98),rgba(15,23,42,0.94)_48%,rgba(8,47,73,0.4))] shadow-[0_22px_80px_rgba(0,0,0,0.34)]"
    >
      <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="border-b border-white/10 bg-black/20 p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Instagram Proof Preview
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{caseStudy.clientName}</h3>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
              <BadgeCheck className="h-4 w-4" />
              Real Client Result
            </span>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-cyan-300/20 bg-[#05070d]">
            {currentScreenshot && (
              <Image
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                width={1100}
                height={820}
                className="aspect-[4/3] w-full object-contain transition duration-500 hover:scale-[1.015]"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            )}
            <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {currentScreenshot?.label ?? 'Instagram Profile Preview'}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {caseStudy.screenshots.map((screenshot, screenshotIndex) => (
              <button
                key={screenshot.src}
                type="button"
                onClick={() => setActiveScreenshot(screenshotIndex)}
                className={[
                  'group overflow-hidden rounded-xl border bg-slate-950 text-left transition hover:-translate-y-0.5',
                  activeScreenshot === screenshotIndex
                    ? 'border-cyan-300/70 shadow-[0_0_24px_rgba(34,211,238,0.18)]'
                    : 'border-white/10 hover:border-cyan-300/40',
                ].join(' ')}
                aria-label={`Show ${screenshot.label}`}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={360}
                  height={280}
                  className="aspect-[4/3] w-full object-cover opacity-85 transition group-hover:opacity-100"
                  sizes="(min-width: 1024px) 15vw, 33vw"
                />
                <span className="block min-h-10 px-3 py-2 text-xs font-medium leading-5 text-slate-300">
                  {screenshot.label}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs leading-6 text-slate-400">
            Screenshots shared with permission. Personal information has been hidden for privacy.
          </p>
        </div>

        <div className="p-5 sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Case Study
            </p>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
              Confidential analytics protected
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-semibold leading-tight text-white">
            Real Client Result: From Less Than 10 to 40&ndash;50 Monthly Inquiries
          </h3>

          <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-[#05070d]/70 p-4">
            <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto] md:items-center">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Before Working With SniperCoders
                </p>
                <p className="mt-3 text-xl font-semibold text-white">Less than 10</p>
                <p className="mt-1 text-sm text-slate-300">organic inquiries/month</p>
              </div>
              <div className="flex justify-center text-2xl font-semibold text-cyan-300 md:px-1">
                &darr;
              </div>
              <div className="rounded-xl border border-cyan-300/25 bg-cyan-300/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  After {caseStudy.managementDuration}
                </p>
                <p className="mt-3 text-xl font-semibold text-white">40&ndash;50</p>
                <p className="mt-1 text-sm text-slate-300">organic inquiries/month</p>
              </div>
              <div className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-slate-950">
                &uarr; {caseStudy.growth} Growth
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Metric label="Client Industry" value={caseStudy.industry} />
            <Metric label="Management Duration" value={caseStudy.managementDuration} />
            <Metric label="Before Working With SniperCoders" value={caseStudy.beforeLeads} />
            <Metric label="Current Results" value={caseStudy.afterLeads} />
          </div>

          <div className="mt-4 rounded-xl border border-cyan-300/25 bg-cyan-300/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Growth Achieved
            </p>
            <p className="mt-2 text-4xl font-semibold text-white">{caseStudy.growth}</p>
            <p className="mt-2 text-sm text-slate-300">increase in inbound inquiries</p>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-white">Services Provided</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {caseStudy.services.map((service) => (
                <div key={service} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold text-white">Results Summary</p>
            <p className="mt-3 leading-7 text-slate-300">{caseStudy.resultsSummary}</p>
          </div>

          {caseStudy.clientQuote && (
            <figure className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <blockquote className="text-base font-medium leading-7 text-white">
                &ldquo;{caseStudy.clientQuote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-cyan-200">
                &mdash; {caseStudy.clientQuote.attribution}
              </figcaption>
            </figure>
          )}

          <a
            href={caseStudy.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 sm:w-auto"
          >
            View Instagram Profile
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="grid gap-3 border-t border-white/10 bg-black/20 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
        {trustIndicators.map((item, indicatorIndex) => {
          const Icon = trustIconMap[indicatorIndex] ?? BadgeCheck

          return (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-slate-100">{item}</p>
            </div>
          )
        })}
      </div>
    </motion.article>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <p className="mt-2 text-base font-semibold leading-6 text-white">{value}</p>
    </div>
  )
}
