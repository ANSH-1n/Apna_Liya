import Footer from '@/components/Footer';
import { ArrowRight, BarChart3, CheckCircle2, Megaphone, MessageSquareText, Search, Target } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | SniperCoders',
  description:
    'Digital marketing services by SniperCoders: social media marketing, SEO, Meta Ads, Google Ads, content strategy, and video-led campaigns for growing brands.',
  keywords: ['digital marketing services', 'social media marketing', 'SEO services', 'Meta Ads', 'Google Ads', 'content strategy', 'SniperCoders'],
};

const services = [
  { title: 'Social Media Marketing', description: 'Content planning, captions, posting direction, campaign ideas, and brand consistency across Instagram, Facebook, YouTube, and LinkedIn.', icon: Megaphone },
  { title: 'SEO Foundations', description: 'Search-friendly page structure, keyword mapping, content improvements, and technical basics that help your site become easier to find.', icon: Search },
  { title: 'Meta Ads', description: 'Creative angles, video ads, static ad concepts, and testing structure for Facebook and Instagram campaigns.', icon: Target },
  { title: 'Google Ads Support', description: 'Search intent mapping, landing page alignment, ad copy direction, and creative support for campaign performance.', icon: BarChart3 },
  { title: 'Content Strategy', description: 'Content pillars, hooks, story formats, and a practical calendar built around your offer and audience.', icon: MessageSquareText },
  { title: 'Video-Led Campaigns', description: 'Short-form edits and ad-ready video assets that connect organic content with paid marketing.', icon: CheckCircle2 },
];

const process = [
  ['Audit', 'We review your current content, website, offer, competitors, and campaign goals.'],
  ['Plan', 'We map channels, content pillars, ad angles, and the creative assets needed for the sprint.'],
  ['Create', 'We produce posts, videos, ad creatives, captions, and landing page recommendations.'],
  ['Improve', 'We study response, clicks, retention, and lead quality to sharpen the next batch.'],
];

export default function DigitalMarketingPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Digital Marketing
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Marketing that connects content, ads, and conversion.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              We help brands build a clearer online presence with social media marketing, SEO,
              Meta Ads, Google Ads, content strategy, and video-led campaigns.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
                Discuss marketing
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/showcase/video-editing" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10">
                View video work
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
              </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
            {process.map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{title}</p>
                <p className="mt-4 leading-7 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              Need a simpler marketing plan for the next sprint?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-200">
              Send your niche, current content, and target audience. We will suggest a practical mix of content, ads, and SEO improvements.
            </p>
            <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
              Contact SniperCoders
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
