import Footer from '@/components/Footer';
import { ArrowRight, Globe2, LayoutDashboard, MonitorSmartphone, Search, ShoppingBag, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Development Services | SniperCoders',
  description:
    'SniperCoders builds modern websites, landing pages, business websites, portfolio pages, and eCommerce experiences with clean UX, speed, SEO structure, and conversion-focused content.',
  keywords: ['web development services', 'website development', 'landing page development', 'business website', 'eCommerce website', 'SEO website', 'SniperCoders'],
};

const websiteTypes = [
  { title: 'Business Websites', description: 'Clean websites for service businesses, consultants, agencies, local brands, and growing companies.', icon: Globe2 },
  { title: 'Landing Pages', description: 'Focused pages for campaigns, offers, launches, ads, waitlists, and lead generation.', icon: LayoutDashboard },
  { title: 'Portfolio Pages', description: 'Premium project, creator, agency, and brand portfolios that make work easier to inspect.', icon: MonitorSmartphone },
  { title: 'eCommerce Websites', description: 'Product-led stores with clear catalogue structure, checkout flow, and mobile-first shopping UX.', icon: ShoppingBag },
  { title: 'SEO Structure', description: 'Page hierarchy, metadata, internal links, and content structure built with search visibility in mind.', icon: Search },
  { title: 'Performance Basics', description: 'Fast, responsive pages with stable layouts, clear CTAs, and conversion-focused user paths.', icon: Zap },
];

const process = [
  ['01', 'Plan', 'We define goals, audience, pages, content sections, and conversion actions.'],
  ['02', 'Design', 'We shape a clean visual system that matches your brand and current site direction.'],
  ['03', 'Build', 'We develop responsive pages with practical SEO, speed, and maintainability in mind.'],
  ['04', 'Launch', 'We test the core flows and prepare the site for publishing and future updates.'],
];

export default function WebDevelopmentPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Web Development
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Websites and landing pages built for clarity and trust.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              We build modern websites that support your marketing: clean design, fast pages,
              strong content structure, mobile-first layouts, and clear next steps for visitors.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
                Start a website
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/showcase/websites" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10">
                View website work
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {websiteTypes.map((websiteType) => {
              const Icon = websiteType.icon;
              return (
              <article key={websiteType.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">{websiteType.title}</h2>
                <p className="mt-4 leading-7 text-slate-300">{websiteType.description}</p>
              </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
            {process.map(([number, title, copy]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <p className="text-sm font-semibold text-cyan-300">{number}</p>
                <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
                  Need a website that supports your content and campaigns?
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  Share your offer, pages, and examples you like. We will suggest the simplest structure for the site.
                </p>
              </div>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
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
