import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy | SniperCoders',
  description:
    'Read the SniperCoders refund policy for video editing, social media marketing, website, app, and custom software services.',
};

const policySections = [
  {
    title: 'Project Deposits',
    copy: 'Most projects require an advance payment or milestone payment before work begins. Deposits reserve team time and cover planning, research, setup, and initial production, so they are generally non-refundable once work has started.',
  },
  {
    title: 'Eligible Refund Requests',
    copy: 'A refund may be considered if we are unable to deliver the agreed scope, if a paid milestone has not started, or if both sides agree in writing that the project should stop before meaningful work has been completed.',
  },
  {
    title: 'Non-Refundable Items',
    copy: 'Completed work, approved milestones, strategy sessions, custom designs, video edits, ad creatives, third-party costs, ad spend, software subscriptions, domain fees, hosting fees, and urgent delivery fees are not refundable.',
  },
  {
    title: 'Revision First Approach',
    copy: 'For creative and development work, we first try to resolve concerns through reasonable revisions, fixes, or scope clarification before considering a refund.',
  },
  {
    title: 'How to Request a Refund',
    copy: 'Email snipercoders25@gmail.com with your project name, payment details, reason for the request, and supporting context. We review requests case by case and reply with the next step.',
  },
  {
    title: 'Review Timeline',
    copy: 'Refund reviews usually take 5 to 10 business days after we receive the required information. Approved refunds are processed through the original payment method where possible.',
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Policy
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Refund Policy
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A simple overview of how refund requests are reviewed for SniperCoders services.
              Last updated: June 2026.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-5">
            {policySections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
                  <div>
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                    <p className="mt-4 leading-8 text-slate-300">{section.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-semibold">Questions about a payment?</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Send us the project details and payment reference. We will review the situation clearly and fairly.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
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
