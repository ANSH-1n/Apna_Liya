// app/about/page.tsx
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Clapperboard, Lightbulb, MessageCircle, Target, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// ✅ Metadata for AI discovery
export const metadata: Metadata = {
  title: 'About SniperCoders | Creative Growth Agency in Bangalore',
  description: 'SniperCoders is a creative growth agency in Bangalore, India. We provide video editing, social media marketing, and ad creative services for founders, creators, and agencies.',
  keywords: [
    'creative growth agency Bangalore',
    'video editing agency India',
    'social media marketing agency',
    'SniperCoders about',
    'digital marketing agency Bangalore',
  ],
  openGraph: {
    title: 'About SniperCoders | Creative Growth Agency',
    description: 'Learn about SniperCoders, a creative growth agency in Bangalore providing video editing, social media marketing, and ad creative services.',
    url: 'https://www.snipercoders.in/about',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
};

const whatsappHref =
  'https://wa.me/917006377796?text=Hello%20SniperCoders%2C%20I%20want%20to%20discuss%20a%20creative%20growth%20sprint%20for%20my%20brand.';

const values = [
  {
    icon: Target,
    title: 'Focused Strategy',
    copy: 'We choose the message, format, hook, and channel around what the audience needs to believe before they act.',
  },
  {
    icon: Clapperboard,
    title: 'Sharp Execution',
    copy: 'Every edit, caption, creative, and page section is built to feel polished, clear, and commercially useful.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Testing',
    copy: 'We treat content as a learning system, testing hooks, angles, offers, and formats instead of guessing once.',
  },
  {
    icon: Users,
    title: 'Calm Collaboration',
    copy: 'You get direct communication, fast iteration, and a practical workflow that respects your brand and time.',
  },
];

const timeline = [
  ['Started With Builds', 'SniperCoders began by shipping websites, software interfaces, and digital systems for growing businesses.'],
  ['Moved Toward Growth', 'Client demand shifted toward content, social media, ads, and stronger creative assets that could drive attention.'],
  ['Now Creative-First', 'Today the focus is premium video editing, social media marketing, paid ad creatives, and brand storytelling.'],
];

const proofPoints = [
  'Short-form video editing for real estate, fitness, education, influencer, gaming, and product-led brands.',
  'Social media calendars, captions, reels direction, story ideas, and posting systems for consistent growth.',
  'Meta Ads and Google Ads creative variants that help brands test faster without losing visual quality.',
  'Website and software experience that gives our creative work a stronger conversion and UX foundation.',
];

// ✅ FAQ data for AI discovery
const faqs = [
  {
    question: 'What is SniperCoders?',
    answer: 'SniperCoders is a creative growth agency founded in 2024 in Bangalore, India. We specialize in video editing, social media marketing, and ad creative production for modern brands. Our focus is on creating content that earns attention and drives measurable results.'
  },
  {
    question: 'Where is SniperCoders based?',
    answer: 'SniperCoders is based in Bangalore, India, and serves clients globally. We work with founders, creators, coaches, startups, and agencies worldwide.'
  },
  {
    question: 'What services does SniperCoders offer?',
    answer: 'SniperCoders offers short-form video editing, social media marketing, Meta & Google ad creative production, brand storytelling, website development, landing pages, and AI automation.'
  },
  {
    question: 'Who does SniperCoders work with?',
    answer: 'We work with founders, bike accessory brands, gaming cafe creators, coaches, startups, and agencies. Our services are designed for brands that need premium video content, social media systems, and ad creatives that convert.'
  },
  {
    question: 'What makes SniperCoders different?',
    answer: 'We combine creative taste with marketing thinking and technical discipline. Every service we offer is designed to make the right audience remember you, trust you, and take action.'
  },
  {
    question: 'How can I work with SniperCoders?',
    answer: 'Contact us via WhatsApp or book a growth call. We will discuss your goals, current content, and growth objectives, then create a customized strategy and service package for your brand.'
  },
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

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        {/* ✅ AI-FRIENDLY HERO SECTION */}
        <section className="relative isolate px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                About SniperCoders
              </p>
              {/* ✅ H1: Added location and keywords */}
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                SniperCoders — Creative Growth Agency in Bangalore, India
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                <strong>SniperCoders</strong> is a creative growth agency based in Bangalore, India. 
                We help founders, creators, bike accessory brands, gaming cafe owners, coaches, startups, 
                and agencies turn raw ideas into premium videos, social content, paid ad creatives, and 
                digital experiences that make the next step easier for the audience.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                  href="/showcase"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
                  View showcase
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              {/* ✅ Quick stats for AI */}
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="border-r border-white/10 pr-4">📍 Bangalore, India</span>
                <span className="border-r border-white/10 pr-4">📅 Founded 2024</span>
                <span className="pr-4">🌍 Serving Global Clients</span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/30">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                <Image
                  src="/images/About_section_banner.png"
                  alt="SniperCoders team collaboration"
                  width={900}
                  height={650}
                  className="aspect-[4/3] w-full object-cover opacity-85"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    Built for clarity
                  </p>
                  <p className="mt-2 text-2xl font-semibold">Strategy, editing, creative, and conversion thinking in one workflow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ KEYWORD SECTION - AI-friendly */}
        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['Video editing', 'Social media marketing', 'Paid ad creatives', 'Brand storytelling'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ✅ VALUES SECTION */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How We Think"
            title="Creative Work Should Be Beautiful and Move the Business"
            copy="Our values guide every project we take on, from video editing to social media strategy."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{value.copy}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ✅ TIMELINE SECTION */}
        <section className="bg-white/[0.03] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Our Shift
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                From Digital Builds to Creative Growth Systems
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                The technical foundation still matters, but the market has changed. Brands now
                need consistent content, faster creative testing, and stronger proof across every
                touchpoint. That is where SniperCoders is focused now.
              </p>
            </div>
            <div className="grid gap-4">
              {timeline.map(([title, copy]) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ PROOF POINTS SECTION */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Bring"
            title="A Practical Mix of Content Taste, Marketing Thinking, and Technical Discipline"
          />
          <div className="mx-auto grid max-w-7xl gap-4">
            {proofPoints.map((point) => (
              <div key={point} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
                <p className="leading-7 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ FAQ SECTION - Critical for AI discovery */}
        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions About SniperCoders"
              copy="Learn more about our creative growth agency, services, and how we work with brands."
            />
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-300/30 transition"
                >
                  <h3 className="text-lg font-semibold text-cyan-300">{faq.question}</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ CTA SECTION - Final call to action */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Work with us
                </p>
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
                  Bring the Raw Idea. We Will Help Shape the Creative System.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  Let&apos;s discuss your brand, goals, and content needs. We&apos;ll create a custom strategy
                  that combines video editing, social media marketing, and ad creative production.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  Contact SniperCoders
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  Discuss on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}