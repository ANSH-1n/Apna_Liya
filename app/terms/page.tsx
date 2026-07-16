// app/terms/page.tsx
import Footer from '@/components/Footer';
import { FileText, Shield, Users, CreditCard, Edit, Lock, AlertCircle, Briefcase } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'Terms of Service | SniperCoders — Legal Terms & Conditions',
  description:
    'Read the SniperCoders terms of service for creative growth, video editing, social media marketing, website development, app development, and custom software projects.',
  keywords: [
    'terms of service',
    'legal terms',
    'SniperCoders terms',
    'service agreement',
    'terms and conditions',
    'website terms',
    'video editing terms',
    'social media marketing terms',
  ],
  openGraph: {
    title: 'Terms of Service | SniperCoders',
    description: 'Terms of service for creative growth, video editing, marketing, website, app, and software projects.',
    url: 'https://www.snipercoders.in/terms',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.snipercoders.in/terms',
  },
};

const terms = [
  {
    title: 'Acceptance of Terms',
    icon: FileText,
    copy: 'By using this website or working with SniperCoders, you agree to these terms and any written project agreement, proposal, invoice, or statement of work connected to your project. These terms form the basis of our working relationship.',
  },
  {
    title: 'Services',
    icon: Briefcase,
    copy: 'SniperCoders provides video editing, social media marketing, ad creatives, content strategy, websites, landing pages, mobile apps, custom software, and automation services. Exact deliverables are defined in the project scope and agreed upon before work begins.',
  },
  {
    title: 'Client Responsibilities',
    icon: Users,
    copy: 'Clients are responsible for providing accurate information, brand assets, access, approvals, references, feedback, and any required third-party account details on time. Timely responses are essential to keep projects on schedule.',
  },
  {
    title: 'Payments',
    icon: CreditCard,
    copy: 'Fees, milestones, deposits, and payment schedules are agreed before work begins. Late payments may delay delivery. Third-party expenses (hosting, domain, software licenses, ad spend) are billed separately unless stated otherwise in the agreement.',
  },
  {
    title: 'Revisions and Scope',
    icon: Edit,
    copy: 'Reasonable revisions are included when specified in the project agreement. New features, major direction changes, extra pages, additional edits, or new campaign assets may require a revised quote. We communicate scope changes clearly before proceeding.',
  },
  {
    title: 'Intellectual Property',
    icon: Lock,
    copy: 'After full payment, final approved deliverables are transferred to the client unless otherwise agreed. Drafts, unused concepts, source processes, internal tools, and reusable frameworks may remain with SniperCoders as part of our intellectual property.',
  },
  {
    title: 'Confidentiality',
    icon: Shield,
    copy: 'Both sides should treat non-public business, project, login, and strategy information as confidential and use it only for the agreed work. We respect your proprietary information and expect the same in return.',
  },
  {
    title: 'No Guaranteed Results',
    icon: AlertCircle,
    copy: 'We work to improve creative quality, clarity, and execution, but we cannot guarantee specific revenue, rankings, leads, views, conversions, or ad performance because results depend on many external factors including market conditions, competition, and audience behavior.',
  },
  {
    title: 'Limitation of Liability',
    icon: Shield,
    copy: 'SniperCoders is not liable for indirect, incidental, or consequential losses. Any liability is limited to the amount paid for the specific service related to the claim, where permitted by law. We recommend appropriate insurance coverage for your business.',
  },
  {
    title: 'Contact',
    icon: FileText,
    copy: 'For questions about these terms, contact snipercoders25@gmail.com. We reserve the right to update these terms as our services and legal requirements evolve. Last updated: June 2026.',
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

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        {/* ✅ AI-FRIENDLY HERO SECTION */}
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Legal
            </p>
            {/* ✅ H1: Added keywords */}
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Terms of Service — SniperCoders Legal Terms
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Simple terms for using our website and working with <strong>SniperCoders</strong> on creative,
              marketing, website, app, and software projects.
            </p>
          </div>
        </section>

        {/* ✅ TERMS SECTIONS */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Legal Terms"
            title="Terms of Service for SniperCoders Clients"
            copy="Clear terms for our working relationship, project delivery, payments, and client responsibilities."
          />
          <div className="mx-auto grid max-w-5xl gap-5">
            {terms.map((term) => {
              const Icon = term.icon;
              return (
                <article key={term.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-300/30 transition">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white">{term.title}</h2>
                      <p className="mt-3 leading-8 text-slate-300">{term.copy}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ✅ CTA SECTION */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold leading-tight text-white">
                  Questions About Our Terms?
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-200">
                  If you have any questions about our terms of service, please don&apos;t hesitate to contact us.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:snipercoders25@gmail.com"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  Email Us
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
                  Contact SniperCoders
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}