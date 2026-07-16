// //app/refund/page.tsx


// import Footer from '@/components/Footer';
// import { ArrowRight, CheckCircle2 } from 'lucide-react';
// import type { Metadata } from 'next';
// import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Refund Policy | SniperCoders',
//   description:
//     'Read the SniperCoders refund policy for video editing, social media marketing, website, app, and custom software services.',
// };

// const policySections = [
//   {
//     title: 'Project Deposits',
//     copy: 'Most projects require an advance payment or milestone payment before work begins. Deposits reserve team time and cover planning, research, setup, and initial production, so they are generally non-refundable once work has started.',
//   },
//   {
//     title: 'Eligible Refund Requests',
//     copy: 'A refund may be considered if we are unable to deliver the agreed scope, if a paid milestone has not started, or if both sides agree in writing that the project should stop before meaningful work has been completed.',
//   },
//   {
//     title: 'Non-Refundable Items',
//     copy: 'Completed work, approved milestones, strategy sessions, custom designs, video edits, ad creatives, third-party costs, ad spend, software subscriptions, domain fees, hosting fees, and urgent delivery fees are not refundable.',
//   },
//   {
//     title: 'Revision First Approach',
//     copy: 'For creative and development work, we first try to resolve concerns through reasonable revisions, fixes, or scope clarification before considering a refund.',
//   },
//   {
//     title: 'How to Request a Refund',
//     copy: 'Email snipercoders25@gmail.com with your project name, payment details, reason for the request, and supporting context. We review requests case by case and reply with the next step.',
//   },
//   {
//     title: 'Review Timeline',
//     copy: 'Refund reviews usually take 5 to 10 business days after we receive the required information. Approved refunds are processed through the original payment method where possible.',
//   },
// ];

// export default function RefundPolicyPage() {
//   return (
//     <>
//       <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
//         <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
//           <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
//           <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />

//           <div className="mx-auto max-w-5xl text-center">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//               Policy
//             </p>
//             <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
//               Refund Policy
//             </h1>
//             <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
//               A simple overview of how refund requests are reviewed for SniperCoders services.
//               Last updated: June 2026.
//             </p>
//           </div>
//         </section>

//         <section className="px-4 pb-20 sm:px-6 lg:px-8">
//           <div className="mx-auto grid max-w-5xl gap-5">
//             {policySections.map((section) => (
//               <article key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
//                 <div className="flex gap-4">
//                   <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
//                   <div>
//                     <h2 className="text-2xl font-semibold">{section.title}</h2>
//                     <p className="mt-4 leading-8 text-slate-300">{section.copy}</p>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className="px-4 pb-20 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-white/[0.04] p-8">
//             <h2 className="text-2xl font-semibold">Questions about a payment?</h2>
//             <p className="mt-4 leading-8 text-slate-300">
//               Send us the project details and payment reference. We will review the situation clearly and fairly.
//             </p>
//             <Link
//               href="/contact"
//               className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
//             >
//               Contact SniperCoders
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }









// app/refund/page.tsx
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Shield, Clock, AlertCircle, FileText, Mail } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'Refund Policy | SniperCoders — Payment & Cancellation Policy',
  description:
    'Read the SniperCoders refund policy for video editing, social media marketing, website development, app development, and custom software services. Clear payment and cancellation terms.',
  keywords: [
    'refund policy',
    'payment policy',
    'cancellation policy',
    'SniperCoders refund',
    'service refund policy',
    'video editing refund',
    'website development policy',
    'money back policy',
  ],
  openGraph: {
    title: 'Refund Policy | SniperCoders',
    description: 'Clear refund policy for video editing, social media marketing, web development, and custom software services.',
    url: 'https://www.snipercoders.in/refund',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.snipercoders.in/refund',
  },
};

const policySections = [
  {
    title: 'Project Deposits',
    icon: Shield,
    copy: 'Most projects require an advance payment or milestone payment before work begins. Deposits reserve team time and cover planning, research, setup, and initial production, so they are generally non-refundable once work has started. This ensures we can commit the necessary resources to your project.',
  },
  {
    title: 'Eligible Refund Requests',
    icon: CheckCircle2,
    copy: 'A refund may be considered if we are unable to deliver the agreed scope, if a paid milestone has not started, or if both sides agree in writing that the project should stop before meaningful work has been completed. We handle refund requests fairly and transparently.',
  },
  {
    title: 'Non-Refundable Items',
    icon: AlertCircle,
    copy: 'Completed work, approved milestones, strategy sessions, custom designs, video edits, ad creatives, third-party costs, ad spend, software subscriptions, domain fees, hosting fees, and urgent delivery fees are not refundable. These costs are incurred during the delivery process.',
  },
  {
    title: 'Revision First Approach',
    icon: FileText,
    copy: 'For creative and development work, we first try to resolve concerns through reasonable revisions, fixes, or scope clarification before considering a refund. Our goal is your satisfaction, and we work with you to address any issues.',
  },
  {
    title: 'How to Request a Refund',
    icon: Mail,
    copy: 'Email snipercoders25@gmail.com with your project name, payment details, reason for the request, and supporting context. We review requests case by case and reply with the next step. Include any relevant documentation to help us process your request quickly.',
  },
  {
    title: 'Review Timeline',
    icon: Clock,
    copy: 'Refund reviews usually take 5 to 10 business days after we receive the required information. Approved refunds are processed through the original payment method where possible. We keep you updated throughout the review process.',
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

export default function RefundPolicyPage() {
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
              Refund Policy — SniperCoders Payment Terms
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A clear overview of how refund requests are reviewed for <strong>SniperCoders</strong> video editing, 
              social media marketing, website development, app development, and custom software services.
              <br />
              <span className="text-sm text-slate-400">Last updated: June 2026.</span>
            </p>
          </div>
        </section>

        {/* ✅ POLICY SECTIONS */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Payment Terms"
            title="How Refunds Are Handled at SniperCoders"
            copy="We believe in transparent payment terms. Here's a clear breakdown of our refund policy for all services."
          />
          <div className="mx-auto grid max-w-5xl gap-5">
            {policySections.map((section) => {
              const Icon = section.icon;
              return (
                <article key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-300/30 transition">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                      <p className="mt-3 leading-8 text-slate-300">{section.copy}</p>
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
                  Questions About a Payment?
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-200">
                  Send us the project details and payment reference. We will review the situation clearly and fairly.
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
                  <ArrowRight className="h-4 w-4" />
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