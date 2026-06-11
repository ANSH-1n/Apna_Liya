import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SniperCoders',
  description:
    'Read how SniperCoders collects, uses, stores, and protects information submitted through our website and project communication channels.',
};

const privacySections = [
  {
    title: 'Information We Collect',
    items: [
      'Name, email, phone number, company name, and project details submitted through contact forms or messages.',
      'Business requirements, brand references, files, links, and creative assets shared for project work.',
      'Basic website analytics such as pages visited, device type, browser, and approximate location.',
    ],
  },
  {
    title: 'How We Use Information',
    items: [
      'To reply to inquiries, prepare proposals, plan projects, and deliver agreed services.',
      'To improve website experience, service quality, communication, and internal workflows.',
      'To send project updates, administrative messages, and relevant follow-ups.',
    ],
  },
  {
    title: 'Payments and Third Parties',
    items: [
      'Payment details may be handled by third-party payment providers. We do not store full card or banking details on this website.',
      'We may use trusted tools for hosting, analytics, email, forms, cloud storage, communication, and project management.',
      'We only share information with service providers when it is needed to operate the website or deliver the project.',
    ],
  },
  {
    title: 'Data Protection',
    items: [
      'We use reasonable technical and organizational measures to protect information from unauthorized access or misuse.',
      'No online system is completely risk-free, but we keep access limited to the people and tools needed for the work.',
      'Clients should avoid sharing unnecessary sensitive personal information unless required for the project.',
    ],
  },
  {
    title: 'Your Choices',
    items: [
      'You can request correction, update, or deletion of your personal information where legally and practically possible.',
      'You can ask us to stop non-essential marketing communication.',
      'You can contact us for questions about how your information is used.',
    ],
  },
  {
    title: 'Contact',
    items: [
      'For privacy questions, email snipercoders25@gmail.com.',
      'This policy may be updated when our services, tools, or legal requirements change.',
      'Last updated: June 2026.',
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              This page explains how SniperCoders handles information shared through our website,
              contact forms, and project communication.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-5">
            {privacySections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <div className="mt-5 grid gap-3">
                  {section.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                      <p className="leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
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
