import Footer from '@/components/Footer';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clapperboard,
  Globe2,
  Megaphone,
  PenTool,
  Target,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Video Editing, Social Media Marketing & Digital Growth',
  description:
    'SniperCoders offers short-form video editing, social media marketing, Meta Ads creatives, Google Ads creatives, content strategy, websites, landing pages, and AI automation for growing brands.',
  keywords: [
    'video editing services',
    'short-form video editing',
    'social media marketing',
    'Meta Ads creatives',
    'Google Ads creatives',
    'content strategy',
    'website development',
    'landing page development',
    'AI automation',
    'SniperCoders services',
  ],
};

const services = [
  {
    title: 'Short-Form Video Editing',
    href: '/showcase/video-editing',
    icon: Clapperboard,
    description:
      'Premium reels, shorts, captions, pacing, hooks, sound design, and retention-focused edits for brands, creators, coaches, real estate, fitness, education, and product-led businesses.',
    includes: ['Instagram Reels', 'YouTube Shorts', 'Ad-ready edits'],
  },
  {
    title: 'Social Media Marketing',
    href: '/contact',
    icon: Megaphone,
    description:
      'Content planning, posting direction, captions, calendar structure, story ideas, and campaign thinking for brands that need a consistent online presence.',
    includes: ['Content calendars', 'Caption direction', 'Growth strategy'],
  },
  {
    title: 'Meta & Google Ads Creatives',
    href: '/contact',
    icon: Target,
    description:
      'Static ads, video ads, UGC-style concepts, thumbnails, hooks, offer creatives, and testing variants for paid campaigns.',
    includes: ['Meta creatives', 'Google ad assets', 'Creative variants'],
  },
  {
    title: 'Content Strategy & Brand Storytelling',
    href: '/contact',
    icon: PenTool,
    description:
      'Clear messaging, content pillars, founder-led stories, campaign ideas, and creative direction that makes your brand easier to understand and remember.',
    includes: ['Messaging', 'Content pillars', 'Campaign ideas'],
  },
  {
    title: 'Websites & Landing Pages',
    href: '/showcase/websites',
    icon: Globe2,
    description:
      'Modern websites, landing pages, portfolio pages, business sites, and conversion-focused pages that support your marketing and sales flow.',
    includes: ['Business websites', 'Landing pages', 'Portfolio pages'],
  },
  {
    title: 'AI Agents & Automation',
    href: '/agents',
    icon: Bot,
    description:
      'Practical AI agents and automations for lead capture, support, workflows, and repetitive business tasks.',
    includes: ['AI chat agents', 'Workflow automation', 'Lead support'],
  },
];

const reasons = [
  'Focused on video, social media, paid creatives, and conversion.',
  'Clean creative direction with practical business thinking.',
  'Experience across content, websites, marketing, and automation.',
  'Simple communication and a clear sprint-based workflow.',
];

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Services
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Creative growth services for brands that need sharper content.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              SniperCoders helps founders, creators, coaches, startups, agencies, and growing
              businesses with video editing, social media marketing, ad creatives, content strategy,
              websites, landing pages, and AI automation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Discuss a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/showcase"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                View showcase
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                  <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.includes.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-white">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Why SniperCoders
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Simple services, clear execution, better creative output.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                We keep the work practical: understand the offer, create stronger assets, test better
                angles, and make every page, post, reel, and ad easier for the audience to trust.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950 p-5">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
                  <p className="leading-7 text-slate-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Start Here
                </p>
                <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                  Need video edits, social content, ads, or a landing page?
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  Send your niche, current content, and goal. We will suggest the service mix that
                  fits your next growth sprint.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Contact SniperCoders
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
