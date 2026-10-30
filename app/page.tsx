
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import HomeVideoSlider from '@/components/HomeVideoSlider';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clapperboard,
  MessageCircle,
  Sparkles,
  Target,
  Wand2,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Video Editing & Social Media Marketing Agency | SniperCoders' },
  description:
    'SniperCoders helps brands grow with short-form video editing, social media management, and Meta & Google ad creatives. Explore our services and get a custom quote.',

  alternates: {
    canonical: 'https://www.snipercoders.in/',
  },

  openGraph: {
    type: 'website',
    url: 'https://www.snipercoders.in/',
    title: 'Video Editing & Social Media Marketing Agency | SniperCoders',
    description:
      'Short-form video editing, social media management, and Meta & Google ad creatives for growing brands. Explore our services and get a custom quote.',
    siteName: 'SniperCoders',
    images: [
      {
        url: '/images/logo_sniper.ico',
        alt: 'SniperCoders digital growth agency',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Video Editing & Social Media Marketing Agency | SniperCoders',
    description:
      'Short-form video editing, social media management, and Meta & Google ad creatives for growing brands.',
  },
};

const whatsappHref =
  'https://wa.me/917006377796?text=Hello%20SniperCoders%2C%20I%20want%20to%20discuss%20video%20editing%2C%20social%20media%20marketing%2C%20Meta%20Ads%2C%20and%20Google%20Ads%20for%20my%20brand.';

const services = [
  {
    icon: Clapperboard,
    title: 'Short-Form Video Editing',
    copy: 'Reels and YouTube Shorts with cuts, captions, hooks, pacing, sound design, and vertical exports shaped around your content and audience.',
    href: '/pricing/video-editing',
    linkLabel: 'Explore video editing pricing',
  },
  {
    icon: Target,
    title: 'Social Media Marketing',
    copy: 'Content planning, calendars, captions, creative direction, scheduling, community management, and reporting based on the selected package.',
    href: '/pricing/social-media-marketing',
    linkLabel: 'View social media packages',
  },
  {
    icon: Wand2,
    title: 'Meta & Google Ad Creative',
    copy: 'Video and static ad creatives, offer-led visuals, thumbnails, and creative variations for campaign testing. Ad spend and campaign management are scoped separately.',
    href: '/services/digital-marketing',
    linkLabel: 'Explore digital marketing',
  },
  {
    icon: Sparkles,
    title: 'Brand Storytelling',
    copy: 'Founder stories, campaign concepts, brand messaging, and visual direction to help people understand and remember your business.',
    href: '/contact',
    linkLabel: 'Discuss your creative brief',
  },
];

const process = [
  [
    '01',
    'Position',
    'Clarify your audience, offer, content priorities, and the message you want people to remember.',
  ],
  [
    '02',
    'Produce',
    'Turn raw footage, scripts, brand assets, and product details into polished reels, posts, and ad creatives.',
  ],
  [
    '03',
    'Review & Improve',
    'Review available performance signals and feedback. Where available, these may include retention, saves, replies, clicks, CTR, and lead quality.',
  ],
];

const faqs = [
  {
    question: 'What services does SniperCoders offer?',
    answer:
      'SniperCoders focuses on short-form video editing, social media management, Meta and Google ad creatives, and brand storytelling. Other technology services are available on their dedicated service pages.',
  },
  {
    question: 'What is SniperCoders?',
    answer:
      'SniperCoders is a creative growth agency offering video editing, social media management, ad creative production, and brand storytelling for modern brands.',
  },
  {
    question: 'Who does SniperCoders work with?',
    answer:
      'We work with founders, creators, coaches, startups, agencies, and businesses that need video content, social media execution, or ad creatives. Fit depends on each project’s requirements.',
  },
  {
    question: 'What is included in your video editing services?',
    answer:
      'Depending on the selected service, editing can include cuts, captions, hooks, pacing, music, sound design, and platform-ready exports. Exact deliverables are confirmed before work starts.',
  },
  {
    question: 'How does SniperCoders help with social media marketing?',
    answer:
      'Social media packages may include content planning, captions, creative assets, scheduling, posting, community management, and reporting. Deliverables vary by plan.',
  },
  {
    question: 'Which social media platforms do you manage?',
    answer:
      'Organic plan options list Instagram, Facebook, and LinkedIn content. Paid campaign support is available for Meta and Google Ads based on the selected package and agreed scope.',
  },
  {
    question: 'What types of ad creatives do you produce?',
    answer:
      'We can produce video and static ad creatives for Meta and Google campaigns. Advertising spend and campaign management should be confirmed separately in the proposal.',
  },
  {
    question: 'Is advertising spend included in the monthly management fee?',
    answer:
      'No. Ad spend is paid directly to Meta or Google. The management fee covers the services and deliverables listed for the selected plan.',
  },
  {
    question: 'How much do your services cost?',
    answer:
      'Pricing depends on the service, content volume, complexity, and support required. Visit the pricing pages or contact us for a proposal based on your needs.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Send us your business niche, the service you need, your timeline, and your goal on WhatsApp. We can discuss the scope and next steps.',
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

      {copy ? (
        <p className="mt-5 text-base leading-8 text-slate-300">{copy}</p>
      ) : null}
    </div>
  );
}

function PrimaryCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
        href="/contact"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
      >
        Book a growth call
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        {/* HERO SECTION */}
        <section className="relative isolate px-4 pb-14 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <BadgeCheck className="h-4 w-4 text-cyan-300" />
                CREATIVE GROWTH FOR MODERN BRANDS
              </div>

              <h1 className="max-w-5xl text-[2.35rem] font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Video Editing, Social Media Marketing &amp; Ad Creatives
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
                <strong>SniperCoders</strong> helps founders, creators, startups,
                and growing brands turn raw footage and ideas into polished
                short-form videos, consistent social content, and advertising
                creatives. We combine creative direction, content execution,
                and performance-minded iteration to help your brand communicate
                clearly.
              </p>

              <div className="mt-6 lg:hidden">
                <HomeVideoSlider />
              </div>

              <div className="mt-8">
                <PrimaryCtas />
              </div>

            </div>

            <div className="relative hidden lg:block">
              <HomeVideoSlider />
            </div>
          </div>
        </section>

        {/* SERVICES HIGHLIGHTS */}
        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Short-form video editing',
              'Social media management',
              'Meta Ads creative production',
              'Google Ads assets',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core Offers"
            title="Video Editing, Social Media Marketing, and Ad Creative Services"
            copy="Choose the creative support that fits your needs, or combine services to keep your brand message consistent across social and paid channels."
          />

          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {service.copy}
                  </p>
                  <Link href={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white">
                    {service.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROOF / WORK SECTION */}
        <section className="bg-white/[0.03] px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Work"
            title="Creative Work Built for the Feed"
            copy="Explore real examples of Reels, short-form edits, property videos, and ad creatives. Portfolio samples are labeled by service, with client details shared where permitted."
          />

          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-950 p-7 sm:p-9">
            <h3 className="text-2xl font-semibold">Real estate videos edited for clear property presentation</h3>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              See property edits shaped with engaging pacing, captions, and mobile-first viewing in the featured video examples above. Case study metrics are shared only when documented and approved for publication.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/showcase/video-editing"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
            >
              View the video showcase
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="How It Works"
          />

          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {process.map(([number, title, copy]) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                <p className="text-sm font-semibold text-cyan-300">
                  {number}
                </p>

                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>

                <p className="mt-4 leading-7 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions About SniperCoders"
              copy="Answers to common questions about our video editing, social media marketing, and ad creative services."
            />

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 p-5 transition hover:border-cyan-300/30"
                >
                  <h3 className="text-lg font-semibold text-cyan-300">
                    {faq.question}
                  </h3>

                  <p className="mt-2 leading-relaxed text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Ready for Your Next Content Project?
                </p>

                <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  Tell Us About Your Brand and Content Goals
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  Tell us about your brand, the content you have, and what you
                  want to improve. We will help identify a practical creative
                  direction for better videos, clearer brand messaging, and
                  more focused ad assets.
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-end">
                <PrimaryCtas />
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-200">
                  <a href="tel:+917006377796" className="hover:text-cyan-200">+91 70063 77796</a>
                  <a href="mailto:snipercoders25@gmail.com" className="hover:text-cyan-200">snipercoders25@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

