import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | SniperCoders',
  description:
    'Read the SniperCoders terms of service for creative growth, video editing, marketing, website, app, and software projects.',
};

const terms = [
  {
    title: 'Acceptance of Terms',
    copy: 'By using this website or working with SniperCoders, you agree to these terms and any written project agreement, proposal, invoice, or statement of work connected to your project.',
  },
  {
    title: 'Services',
    copy: 'SniperCoders provides video editing, social media marketing, ad creatives, content strategy, websites, landing pages, mobile apps, custom software, and automation services. Exact deliverables are defined in the project scope.',
  },
  {
    title: 'Client Responsibilities',
    copy: 'Clients are responsible for providing accurate information, brand assets, access, approvals, references, feedback, and any required third-party account details on time.',
  },
  {
    title: 'Payments',
    copy: 'Fees, milestones, deposits, and payment schedules are agreed before work begins. Late payments may delay delivery. Third-party expenses are billed separately unless stated otherwise.',
  },
  {
    title: 'Revisions and Scope',
    copy: 'Reasonable revisions are included when specified in the project agreement. New features, major direction changes, extra pages, additional edits, or new campaign assets may require a revised quote.',
  },
  {
    title: 'Intellectual Property',
    copy: 'After full payment, final approved deliverables are transferred to the client unless otherwise agreed. Drafts, unused concepts, source processes, internal tools, and reusable frameworks may remain with SniperCoders.',
  },
  {
    title: 'Confidentiality',
    copy: 'Both sides should treat non-public business, project, login, and strategy information as confidential and use it only for the agreed work.',
  },
  {
    title: 'No Guaranteed Results',
    copy: 'We work to improve creative quality, clarity, and execution, but we cannot guarantee specific revenue, rankings, leads, views, conversions, or ad performance because results depend on many external factors.',
  },
  {
    title: 'Limitation of Liability',
    copy: 'SniperCoders is not liable for indirect, incidental, or consequential losses. Any liability is limited to the amount paid for the specific service related to the claim, where permitted by law.',
  },
  {
    title: 'Contact',
    copy: 'For questions about these terms, contact snipercoders25@gmail.com. Last updated: June 2026.',
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Legal
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Simple terms for using our website and working with SniperCoders on creative,
              marketing, website, app, and software projects.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-5">
            {terms.map((term) => (
              <article key={term.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
                  <div>
                    <h2 className="text-2xl font-semibold">{term.title}</h2>
                    <p className="mt-4 leading-8 text-slate-300">{term.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
