import Footer from '@/components/Footer';
import HomeVideoSlider from '@/components/HomeVideoSlider';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Clapperboard,
  MessageCircle,
  Sparkles,
  Target,
  Wand2,
} from 'lucide-react';
import Link from 'next/link';

const whatsappHref =
  'https://wa.me/917006377796?text=Hello%20SniperCoders%2C%20I%20want%20to%20discuss%20video%20editing%2C%20social%20media%20marketing%2C%20Meta%20Ads%2C%20and%20Google%20Ads%20for%20my%20brand.';

const stats = [
  { value: '30+', label: 'creative, web, and ad projects delivered' },
  { value: '7-day', label: 'content sprint available for fast-moving brands' },
  { value: '3x', label: 'hook and angle testing before scale' },
  { value: 'Global', label: 'workflow for founders, creators, and agencies' },
];

const services = [
  {
    icon: Clapperboard,
    title: 'Short-Form Video Editing',
    copy: 'Reels, Shorts, captions, pacing, hooks, sound design, and retention-led edits built for modern feeds.',
  },
  {
    icon: Target,
    title: 'Social Media Marketing',
    copy: 'Content pillars, calendars, caption direction, posting rhythm, and audience-led creative testing.',
  },
  {
    icon: Wand2,
    title: 'Meta & Google Ad Creative',
    copy: 'Video ads, static creatives, UGC-style concepts, offer visuals, thumbnails, and variants for paid learning.',
  },
  {
    icon: Sparkles,
    title: 'Brand Storytelling',
    copy: 'Founder narratives, campaign ideas, visual language, and messaging that makes the brand easier to remember.',
  },
];

const proof = [
  ['Fitness & wellness', 'Instagram management, reels, content planning, stories, polls, and enquiry-focused CTAs.'],
  ['Real estate edits', 'Premium vertical property edits with pacing, captions, music, and trust-building polish.'],
  ['Performance creatives', 'Meta and Google ad assets designed to test hooks, benefits, objections, and offers quickly.'],
];

const process = [
  ['01', 'Position', 'Clarify the audience, offer, content pillars, buying triggers, and the promise that deserves attention.'],
  ['02', 'Produce', 'Turn raw footage, scripts, brand assets, and product details into polished reels, posts, and ad creatives.'],
  ['03', 'Optimize', 'Review retention, saves, replies, clicks, CTR, and lead quality so the next batch gets sharper.'],
];

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-8 text-slate-300">{copy}</p> : null}
    </div>
  );
}

function PrimaryCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
      >
        <MessageCircle className="h-4 w-4" />
        Start on WhatsApp
      </a>
      <Link
        href="/contact"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
      >
        Book a growth call
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <BadgeCheck className="h-4 w-4 text-cyan-300" />
                Creative growth for modern brands
              </div>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Video editing and social media marketing built to earn attention.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                SniperCoders helps founders, creators, coaches, startups, and agencies turn
                ideas into premium reels, paid ad creatives, and content systems that build
                trust before the sales call.
              </p>
              <div className="mt-8">
                <PrimaryCtas />
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l border-white/15 pl-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <HomeVideoSlider />
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {['Short-form edits', 'Social media systems', 'Meta Ads creatives', 'Google Ads assets'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core Offers"
            title="A focused creative engine for video, social, and paid media demand."
            copy="Every service supports one commercial goal: make the right audience remember you, trust you, click, and take the next step."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-white/[0.03] px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Proof"
            title="Creative work that has a job beyond looking polished."
          />
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {proof.map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-950 p-7">
                <BarChart3 className="h-7 w-7 text-cyan-300" />
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/showcase/video-editing"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
            >
              View video showcase
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="A simple loop for brands that need better videos, posts, and ads."
          />
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {process.map(([number, title, copy]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <p className="text-sm font-semibold text-cyan-300">{number}</p>
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Ready for the next sprint?
                </p>
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  Let us turn your brand into the account your market keeps seeing.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  Send your niche, current content, and growth goal. We will suggest a clear
                  creative path for better videos, stronger ad assets, and more qualified inquiries.
                </p>
              </div>
              <PrimaryCtas />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
