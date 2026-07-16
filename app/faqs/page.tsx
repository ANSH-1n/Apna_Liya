// //app/faqs/page.tsx

// import Footer from '@/components/Footer';
// import { ArrowRight } from 'lucide-react';
// import type { Metadata } from 'next';
// import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'FAQs | SniperCoders',
//   description:
//     'Answers to common questions about SniperCoders services, video editing, social media marketing, websites, apps, software, pricing, timelines, and support.',
// };

// const faqGroups = [
//   {
//     title: 'Services',
//     faqs: [
//       ['What does SniperCoders do?', 'We help brands with short-form video editing, social media marketing, ad creatives, content strategy, websites, landing pages, mobile apps, custom software, and automation.'],
//       ['Is video editing your main service now?', 'Yes. The current focus is creative growth: video editing, social media content, paid ad creatives, and content systems. Website and software work is still available when it supports the growth plan.'],
//       ['Do you work with international clients?', 'Yes. We can work remotely with founders, creators, coaches, startups, agencies, and brands in India and other countries.'],
//     ],
//   },
//   {
//     title: 'Process',
//     faqs: [
//       ['How do we start?', 'Send your niche, current content or website, goal, and any references. We review the brief and suggest the best next step.'],
//       ['How do you manage communication?', 'Most projects are handled through WhatsApp, email, calls, shared documents, and regular progress updates.'],
//       ['Can you work from raw footage?', 'Yes. You can send raw clips, brand assets, scripts, references, and instructions. We can also help shape hooks and structure when needed.'],
//     ],
//   },
//   {
//     title: 'Pricing and Timelines',
//     faqs: [
//       ['How much does a project cost?', 'Pricing depends on scope, number of videos or pages, complexity, turnaround time, and revision needs. We provide a quote after understanding the brief.'],
//       ['Do you offer monthly retainers?', 'Yes. Retainers are available for recurring video editing, social media content, ad creatives, and ongoing marketing support.'],
//       ['How fast can you deliver?', 'Timelines depend on scope. Small creative tasks can move quickly, while websites, apps, and software need a clearer project plan and milestones.'],
//     ],
//   },
//   {
//     title: 'Websites, Apps, and Software',
//     faqs: [
//       ['Do you still build websites?', 'Yes. We build business websites, landing pages, portfolios, eCommerce pages, and campaign pages.'],
//       ['Do you build mobile apps?', 'Yes. We can help plan, design, and build mobile app MVPs, customer apps, eCommerce apps, and business tools.'],
//       ['Can you build custom software?', 'Yes. We build dashboards, admin panels, workflow tools, integrations, and custom systems for business operations.'],
//     ],
//   },
//   {
//     title: 'Support',
//     faqs: [
//       ['Do you provide revisions?', 'Yes. Revision terms depend on the service and project scope. We clarify revision rounds before work begins.'],
//       ['Do you provide post-launch support?', 'Yes. Support can include bug fixes, updates, creative changes, page edits, monitoring, and ongoing improvements.'],
//       ['How can I contact you?', 'Use the contact page or email snipercoders25@gmail.com. WhatsApp is usually the fastest way to start.'],
//     ],
//   },
// ];

// export default function FAQsPage() {
//   return (
//     <>
//       <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
//         <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
//           <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
//           <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />
//           <div className="mx-auto max-w-5xl text-center">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//               Help
//             </p>
//             <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
//               Frequently Asked Questions
//             </h1>
//             <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
//               Clear answers about SniperCoders services, process, pricing, timelines, and support.
//             </p>
//           </div>
//         </section>

//         <section className="px-4 pb-20 sm:px-6 lg:px-8">
//           <div className="mx-auto grid max-w-5xl gap-8">
//             {faqGroups.map((group) => (
//               <section key={group.title}>
//                 <h2 className="mb-4 text-2xl font-semibold text-white">{group.title}</h2>
//                 <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">
//                   {group.faqs.map(([question, answer]) => (
//                     <details key={question} className="group p-6">
//                       <summary className="cursor-pointer list-none text-lg font-semibold text-white">
//                         {question}
//                       </summary>
//                       <p className="mt-4 leading-8 text-slate-300">{answer}</p>
//                     </details>
//                   ))}
//                 </div>
//               </section>
//             ))}
//           </div>
//         </section>

//         <section className="px-4 pb-20 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8">
//             <h2 className="text-3xl font-semibold leading-tight">Still have a question?</h2>
//             <p className="mt-4 max-w-2xl leading-8 text-slate-200">
//               Send your project details and we will reply with a practical next step.
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









// app/faqs/page.tsx
import Footer from '@/components/Footer';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'FAQs | Frequently Asked Questions About SniperCoders Services',
  description:
    'Find answers to common questions about SniperCoders video editing, social media marketing, web development, app development, custom software, pricing, and support services.',
  keywords: [
    'FAQs',
    'frequently asked questions',
    'video editing FAQs',
    'social media marketing questions',
    'web development FAQ',
    'app development questions',
    'custom software FAQs',
    'SniperCoders help',
    'digital marketing FAQs',
    'pricing questions',
  ],
  openGraph: {
    title: 'FAQs | SniperCoders Services',
    description: 'Frequently asked questions about video editing, social media marketing, web development, app development, custom software, and support.',
    url: 'https://www.snipercoders.in/faqs',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.snipercoders.in/faqs',
  },
};

const faqGroups = [
  {
    title: 'Services',
    faqs: [
      ['What does SniperCoders do?', 'SniperCoders is a creative growth agency based in Bangalore, India. We help brands with short-form video editing, social media marketing, ad creatives, content strategy, websites, landing pages, mobile apps, custom software, and AI automation. Our focus is on creating content that earns attention and drives measurable results for modern brands.'],
      ['Is video editing your main service now?', 'Yes. The current focus is creative growth: video editing, social media content, paid ad creatives, and content systems. Website and software work is still available when it supports the growth plan. We specialize in short-form content for Instagram Reels, YouTube Shorts, and TikTok.'],
      ['Do you work with international clients?', 'Yes. We work remotely with founders, creators, coaches, startups, agencies, and brands in India and other countries. Our global client base includes businesses from the US, UK, Australia, UAE, and Europe.'],
    ],
  },
  {
    title: 'Process',
    faqs: [
      ['How do we start?', 'Send your niche, current content or website, goal, and any references. We review the brief and suggest the best next step. You can reach out via WhatsApp, email, or through our contact form. We typically respond within 1-2 business hours.'],
      ['How do you manage communication?', 'Most projects are handled through WhatsApp, email, calls, shared documents, and regular progress updates. We provide weekly reports and updates to keep you informed about project status and milestones.'],
      ['Can you work from raw footage?', 'Yes. You can send raw clips, brand assets, scripts, references, and instructions. We can also help shape hooks and structure when needed. Our team will edit, add captions, sound design, and effects to create polished content.'],
    ],
  },
  {
    title: 'Pricing and Timelines',
    faqs: [
      ['How much does a project cost?', 'Pricing depends on scope, number of videos or pages, complexity, turnaround time, and revision needs. We provide a quote after understanding the brief. Video editing packages start at $500/month, websites start at $500, and custom software is quoted individually based on requirements.'],
      ['Do you offer monthly retainers?', 'Yes. Retainers are available for recurring video editing, social media content, ad creatives, and ongoing marketing support. Monthly retainers provide priority service, consistent content delivery, and better pricing compared to one-off projects.'],
      ['How fast can you deliver?', 'Timelines depend on scope. Small creative tasks can move quickly (24-48 hours), while websites, apps, and software need a clearer project plan and milestones (typically 2-6 weeks). We provide estimated timelines during the quoting process.'],
    ],
  },
  {
    title: 'Websites, Apps, and Software',
    faqs: [
      ['Do you still build websites?', 'Yes. We build business websites, landing pages, portfolios, eCommerce pages, and campaign pages. All our websites are responsive, SEO-optimized, and conversion-focused. Website development typically takes 2-6 weeks depending on complexity.'],
      ['Do you build mobile apps?', 'Yes. We can help plan, design, and build mobile app MVPs, customer apps, eCommerce apps, and business tools for both iOS and Android platforms. We use modern frameworks like React Native and Flutter for cross-platform development.'],
      ['Can you build custom software?', 'Yes. We build dashboards, admin panels, workflow tools, integrations, and custom systems for business operations. Our custom software solutions include CRM systems, automation platforms, and internal business tools.'],
    ],
  },
  {
    title: 'Support',
    faqs: [
      ['Do you provide revisions?', 'Yes. Revision terms depend on the service and project scope. We clarify revision rounds before work begins. Video editing packages typically include 2-3 revision rounds, while web development projects include revision phases during development.'],
      ['Do you provide post-launch support?', 'Yes. Support can include bug fixes, updates, creative changes, page edits, monitoring, and ongoing improvements. We offer maintenance packages for websites and software to ensure your digital assets remain secure and up-to-date.'],
      ['How can I contact you?', 'Use the contact page or email snipercoders25@gmail.com. WhatsApp is usually the fastest way to start. You can also book a growth call through our contact page for a detailed discussion of your project requirements.'],
    ],
  },
];

// ✅ Generate FAQ Schema for rich results
function generateFAQSchema() {
  const allFaqs = faqGroups.flatMap(group => 
    group.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    }))
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs,
  };
}

export default function FAQsPage() {
  const faqSchema = generateFAQSchema();

  return (
    <>
      {/* ✅ FAQ Schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        {/* ✅ AI-FRIENDLY HERO SECTION */}
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Help Center
            </p>
            {/* ✅ H1: Added keywords */}
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Frequently Asked Questions About SniperCoders Services
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Clear answers about <strong>SniperCoders</strong> video editing, social media marketing, 
              web development, app development, custom software, pricing, timelines, and support.
            </p>
          </div>
        </section>

        {/* ✅ FAQ SECTIONS */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-8">
            {faqGroups.map((group) => (
              <section key={group.title}>
                <h2 className="mb-4 text-2xl font-semibold text-white">{group.title}</h2>
                <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">
                  {group.faqs.map(([question, answer]) => (
                    <details key={question} className="group p-6">
                      <summary className="cursor-pointer list-none text-lg font-semibold text-white hover:text-cyan-300 transition">
                        {question}
                      </summary>
                      <p className="mt-4 leading-8 text-slate-300">{answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* ✅ CTA SECTION */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold leading-tight text-white">
                  Still Have a Question?
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-200">
                  Send your project details and we will reply with a practical next step.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/917006377796?text=Hello%20SniperCoders%2C%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  <MessageCircle className="h-4 w-4" />
                  Ask on WhatsApp
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