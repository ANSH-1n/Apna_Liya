'use client';

import Footer from '@/components/Footer';
import { ArrowRight, BriefcaseBusiness, Film } from 'lucide-react';
import Link from 'next/link';

const showcaseOptions = [
  {
    title: 'Website Showcase',
    href: '/showcase/websites',
    description: 'Website, e-commerce, travel, and custom software projects.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Video Editing Showcase',
    href: '/showcase/video-editing',
    description: 'Real estate, vehicle accessories, fitness, and short-form edits.',
    icon: Film,
  },
];

export default function ShowcaseLandingPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.23),transparent_60%)]" />

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Showcase
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Choose the portfolio you want to explore.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Website projects and video editing projects now live in separate showcase sections for a cleaner viewing experience.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
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
                  <p className="mt-4 min-h-14 leading-7 text-slate-300">{option.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-white">
                    Open showcase
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
