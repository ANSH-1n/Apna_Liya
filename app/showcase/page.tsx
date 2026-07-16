'use client';

import Footer from '@/components/Footer';
import { ArrowRight, BriefcaseBusiness, Film, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const showcaseOptions = [
  {
    title: 'Website Showcase',
    href: '/showcase/websites',
    description: 'Website, e-commerce, travel, and custom software projects.',
    icon: BriefcaseBusiness,
    features: [
      'Responsive business websites',
      'E-commerce and booking platforms',
      'Travel and portfolio sites',
      'Custom software dashboards',
    ],
  },
  {
    title: 'Video Editing Showcase',
    href: '/showcase/video-editing',
    description: 'Real estate, vehicle accessories, fitness, and short-form edits.',
    icon: Film,
    features: [
      'Real estate property reels',
      'Vehicle accessories content',
      'Fitness and lifestyle edits',
      'Short-form social media videos',
    ],
  },
];

// ✅ FAQ data for AI discovery
const faqs = [
  {
    question: 'What types of websites has SniperCoders built?',
    answer: 'SniperCoders has built responsive business websites, e-commerce platforms, travel booking sites, portfolio pages, and custom software dashboards for clients across various industries including fitness, real estate, travel, and education.'
  },
  {
    question: 'What types of videos does SniperCoders edit?',
    answer: 'SniperCoders specializes in short-form video editing for Instagram Reels, YouTube Shorts, and TikTok. We edit real estate walkthroughs, vehicle accessories content, fitness videos, and lifestyle content with professional pacing, captions, and sound design.'
  },
  {
    question: 'Can I see examples of your work?',
    answer: "Yes! Our showcase section features live examples of websites we've built and video edits we've produced. Visit the Website Showcase for web projects and the Video Editing Showcase for video content."
  },
  {
    question: 'What industries do you have experience in?',
    answer: 'We have experience working with clients in real estate, fitness, education, travel, automotive accessories, e-commerce, and professional services. Our portfolio reflects a diverse range of projects.'
  },
  {
    question: 'How can I get a project like these examples?',
    answer: 'Contact us via WhatsApp or book a growth call. We will discuss your project requirements, timeline, and budget to create a custom solution tailored to your needs.'
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

export default function ShowcaseLandingPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        {/* ✅ AI-FRIENDLY HERO SECTION */}
        <section className="relative isolate px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.23),transparent_60%)]" />

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Showcase
            </p>
            {/* ✅ H1: Added keywords */}
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Website and Video Editing Portfolio — SniperCoders Showcase
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              <strong>SniperCoders</strong> portfolio featuring professional websites, e-commerce platforms, 
              custom software, and short-form video editing projects. Explore our work in web development 
              and video production.
            </p>
          </div>
        </section>

        {/* ✅ SHOWCASE OPTIONS SECTION */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Portfolio"
            title="Explore Our Work — Websites and Videos"
            copy="Browse through our portfolio of website projects and video editing work. Each project reflects our commitment to quality, creativity, and client satisfaction."
          />
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {showcaseOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Link
                  key={option.title}
                  href={option.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 sm:p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">{option.title}</h2>
                  <p className="mt-4 leading-7 text-slate-300">{option.description}</p>
                  {/* ✅ Feature list for each showcase */}
                  <div className="mt-4 grid gap-2">
                    {option.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-white">
                    View {option.title}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ✅ FAQ SECTION - Critical for AI discovery */}
        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions About SniperCoders Portfolio"
              copy="Find answers to common questions about our website projects, video editing work, and client experience."
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

        {/* ✅ FINAL CTA SECTION */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Ready to Build Your Project?
                </p>
                <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                  Let SniperCoders Create Something Amazing for You
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  Whether you need a website, video content, or both, we can help you bring your vision to life.
                  Let&apos;s discuss your project requirements and create something extraordinary.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/917006377796?text=Hello%20SniperCoders%2C%20I%20want%20to%20discuss%20a%20website%20or%20video%20editing%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
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