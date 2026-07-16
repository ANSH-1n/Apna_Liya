// app/privacy/page.tsx
import Footer from '@/components/Footer';
import { CheckCircle2, Shield, Lock, Eye, Database } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'Privacy Policy | SniperCoders — Data Protection & Privacy',
  description:
    'Read how SniperCoders collects, uses, stores, and protects information submitted through our website, contact forms, and project communication channels. Your privacy matters to us.',
  keywords: [
    'privacy policy',
    'data protection',
    'SniperCoders privacy',
    'information security',
    'website privacy',
    'data collection policy',
    'GDPR compliance',
    'privacy policy India',
  ],
  openGraph: {
    title: 'Privacy Policy | SniperCoders',
    description: 'How SniperCoders collects, uses, stores, and protects your information.',
    url: 'https://www.snipercoders.in/privacy',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.snipercoders.in/privacy',
  },
};

const privacySections = [
  {
    title: 'Information We Collect',
    icon: Database,
    items: [
      'Name, email, phone number, company name, and project details submitted through contact forms or messages.',
      'Business requirements, brand references, files, links, and creative assets shared for project work.',
      'Basic website analytics such as pages visited, device type, browser, and approximate location.',
    ],
  },
  {
    title: 'How We Use Information',
    icon: Eye,
    items: [
      'To reply to inquiries, prepare proposals, plan projects, and deliver agreed services.',
      'To improve website experience, service quality, communication, and internal workflows.',
      'To send project updates, administrative messages, and relevant follow-ups.',
    ],
  },
  {
    title: 'Payments and Third Parties',
    icon: Shield,
    items: [
      'Payment details may be handled by third-party payment providers. We do not store full card or banking details on this website.',
      'We may use trusted tools for hosting, analytics, email, forms, cloud storage, communication, and project management.',
      'We only share information with service providers when it is needed to operate the website or deliver the project.',
    ],
  },
  {
    title: 'Data Protection',
    icon: Lock,
    items: [
      'We use reasonable technical and organizational measures to protect information from unauthorized access or misuse.',
      'No online system is completely risk-free, but we keep access limited to the people and tools needed for the work.',
      'Clients should avoid sharing unnecessary sensitive personal information unless required for the project.',
    ],
  },
  {
    title: 'Your Choices',
    icon: CheckCircle2,
    items: [
      'You can request correction, update, or deletion of your personal information where legally and practically possible.',
      'You can ask us to stop non-essential marketing communication.',
      'You can contact us for questions about how your information is used.',
    ],
  },
  {
    title: 'Contact',
    icon: Shield,
    items: [
      'For privacy questions, email snipercoders25@gmail.com.',
      'This policy may be updated when our services, tools, or legal requirements change.',
      'Last updated: June 2026.',
    ],
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        {/* ✅ AI-FRIENDLY HERO SECTION */}
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Policy
            </p>
            {/* ✅ H1: Added keywords */}
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Privacy Policy — SniperCoders Data Protection
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              <strong>SniperCoders</strong> is committed to protecting your privacy. This page explains how we 
              collect, use, store, and protect information shared through our website,
              contact forms, and project communication.
            </p>
          </div>
        </section>

        {/* ✅ PRIVACY SECTIONS */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Your Privacy Matters"
            title="How SniperCoders Handles Your Information"
            copy="We take data protection seriously. Here&apos;s a transparent overview of our privacy practices."
          />
          <div className="mx-auto grid max-w-5xl gap-5">
            {privacySections.map((section) => {
              const Icon = section.icon;
              return (
                <article key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-300/30 transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                  </div>
                  <div className="mt-2 grid gap-3">
                    {section.items.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                        <p className="leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
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
                  Questions About Your Privacy?
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-200">
                  If you have any questions about how we handle your data, please don&apos;t hesitate to contact us.
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