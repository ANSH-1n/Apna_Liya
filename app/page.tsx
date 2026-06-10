'use client';

import Footer from '@/components/Footer';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Clapperboard,
  Film,
  Globe2,
  MessageCircle,
  Play,
  Quote,
  Sparkles,
  Target,
  Wand2,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const whatsappHref =
  'https://wa.me/917006377796?text=Hello%20SniperCoders%2C%20I%20want%20to%20discuss%20video%20editing%2C%20social%20media%20marketing%2C%20Meta%20Ads%2C%20and%20Google%20Ads%20for%20my%20brand.';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const brands = ['SaaS founders', 'Coaches', 'eCommerce', 'Creators', 'Agencies', 'Startups'];

const stats = [
  { value: '30+', label: 'brand, video, and ad projects delivered' },
  { value: '7-day', label: 'reels and ad creative sprint available' },
  { value: '3x', label: 'Meta and Google angles tested before scaling' },
  { value: 'Global', label: 'workflow for modern growth teams' },
];

const services = [
  {
    icon: Clapperboard,
    title: 'Short-Form Video Editing',
    copy: 'Scroll-stopping reels, shorts, hooks, captions, pacing, sound design, and retention-led edits built for modern feeds.',
  },
  {
    icon: Target,
    title: 'Social Media Marketing',
    copy: 'Instagram, Facebook, YouTube, and LinkedIn content strategy with calendars, captions, posting direction, and growth-focused creative testing.',
  },
  {
    icon: Wand2,
    title: 'Meta Ads & Google Ads Creatives',
    copy: 'Static ads, video ads, UGC-style concepts, offer visuals, hooks, thumbnails, and variants designed for Meta Ads and Google Ads learning.',
  },
  {
    icon: Sparkles,
    title: 'Brand Storytelling',
    copy: 'Messaging, content pillars, founder-led narratives, visual language, and campaign ideas that make the brand memorable.',
  },
];

const reelCards = [
  {
    label: 'Founder Reel',
    metric: '+42% watch time',
    tone: 'Authority edit',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
  },
  {
    label: 'Product Demo',
    metric: '3 hooks tested',
    tone: 'SaaS launch',
    gradient: 'from-emerald-300 via-teal-500 to-cyan-700',
  },
  {
    label: 'Ad Creative',
    metric: 'Meta + Google variants',
    tone: 'Paid media',
    gradient: 'from-fuchsia-400 via-rose-500 to-orange-500',
  },
];

const websiteProjects = [
  {
    title: 'Equinoxx Fitness',
    type: 'Fitness website',
    detail: 'Premium gym website with lead capture, membership pages, Maps integration, and local SEO.',
  },
  {
    title: 'BRG Finery',
    type: 'Fashion e-commerce',
    detail: 'Custom catalogue, secure payments, mobile-first storefront, and easy admin workflow.',
  },
  {
    title: 'Moto Gears Pit Stop',
    type: 'Motorcycle gear website',
    detail: 'Product-focused website project for a motorcycle gear brand with responsive structure and direct customer action.',
  },
  {
    title: 'Travel With Manikanta',
    type: 'Travel platform',
    detail: 'Next.js platform for service pages, destination architecture, booking flows, and B2B transport.',
  },
  {
    title: 'TorkeHub',
    type: 'Custom software',
    detail: 'CRM automation interface with dashboard usability, workflow clarity, and custom software structure.',
  },
];

const process = [
  ['01', 'Position', 'We clarify audience, offer, content pillars, emotional triggers, and the promise your market actually cares about.'],
  ['02', 'Produce', 'We turn raw footage, scripts, and brand assets into polished reels, shorts, carousels, Meta Ads creatives, and Google Ads assets.'],
  ['03', 'Optimize', 'We study retention, saves, replies, clicks, CTR, and lead quality so the next batch gets sharper instead of just busier.'],
];

const testimonials = [
  {
    quote:
      'Full Instagram management for a fitness and wellness brand, covering shoot planning, reels, content strategy, hashtag research, stories, polls, and enquiry-focused CTAs.',
    name: 'Agriyog Fitness',
    role: 'Fitness & Wellness Social Media Marketing',
  },
  {
    quote:
      'A premium gym website built for RT Nagar, Bengaluru with membership pages, lead capture, Maps integration, local SEO, and a mobile-first conversion flow.',
    name: 'Equinoxx Fitness',
    role: 'Fitness Website & Lead Generation',
  },
  {
    quote:
      'A custom e-commerce experience for a fashion brand, including catalogue structure, secure payment integration, mobile-first design, and a client-manageable admin backend.',
    name: 'BRG Finery',
    role: 'Fashion E-Commerce',
  },
];

const faqs = [
  ['Do you only work with Indian businesses?', 'No. The homepage has been repositioned for international startups, coaches, creators, SaaS founders, eCommerce brands, and agency partners.'],
  ['Can you manage both strategy and editing?', 'Yes. We can handle content pillars, hooks, video editing, captions, publishing direction, creative testing, and recurring social media calendars.'],
  ['Do you also create Meta Ads and Google Ads creatives?', 'Yes. We create video ads, static ads, offer creatives, thumbnails, hooks, and multiple variants for Meta Ads and Google Ads campaigns.'],
  ['Is website development still available?', 'Yes, but it is now secondary. The primary offer is video editing, social media marketing, Meta Ads creatives, Google Ads creatives, and content systems.'],
  ['How do we start?', 'Send a WhatsApp message or book a discovery call. We review your brand, current content, ad goals, and the fastest path to a high-converting creative system.'],
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
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-8 text-slate-300">{copy}</p> : null}
    </motion.div>
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SniperCoders',
    url: 'https://www.snipercoders.in',
    description:
      'Creative growth agency for modern brands offering video editing, social media marketing, Meta Ads creatives, Google Ads creatives, content strategy, and brand storytelling.',
    telephone: '+91-7006377796',
    email: 'snipercoders25@gmail.com',
    areaServed: ['Global', 'United States', 'United Kingdom', 'Canada', 'Australia', 'India'],
    serviceType: [
      'Social media management',
      'Social media marketing',
      'Short-form video editing',
      'Viral reels editing',
      'Meta Ads creatives',
      'Google Ads creatives',
      'Content strategy',
      'Performance creatives',
      'Brand storytelling',
    ],
    sameAs: ['https://www.linkedin.com/company/snipercoders'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.65 }}
              className="max-w-4xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <BadgeCheck className="h-4 w-4 text-cyan-300" />
                Video Editing, Social Media Marketing & Paid Ads Creative
              </div>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Video editing and social media marketing that make your brand impossible to ignore.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                SniperCoders helps startups, founders, creators, coaches, and agencies turn
                raw ideas into premium reels, Meta Ads creatives, Google Ads assets, and social
                content systems that build trust before the sales call.
              </p>
              <div className="mt-8">
                <PrimaryCtas />
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l border-white/15 pl-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                  <video
                    src="/videos/introVideo.mp4"
                    className="aspect-[4/5] w-full object-cover opacity-80"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label="SniperCoders creative work preview"
                  />
                  <div className="border-t border-white/10 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-400">Current sprint</p>
                        <p className="text-lg font-semibold">Reels, Meta Ads, Google Ads, and creator assets</p>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
                        <Play className="h-5 w-5 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-xl backdrop-blur">
                <p className="text-sm text-slate-300">
                  Built for high-trust brands that need sharper video edits, stronger paid ad
                  creatives, and a social content rhythm their audience can feel.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
              Built for modern growth teams
            </p>
            <div className="flex flex-wrap gap-3">
              {brands.map((brand) => (
                <span key={brand} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Repositioning"
            title="Less generic IT company. More demand-driving creative partner."
            copy="The old conversion flow mixed software, SEO, AI, marketing, and location keywords into one message. The new homepage leads with a sharper promise: premium video editing, social media marketing, Meta Ads creatives, and Google Ads creatives for growth-focused brands."
          />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {[
              ['What was wrong', 'Too many offers fought for attention, which made the brand feel broad, local, and search-engine-first instead of premium and decisive.'],
              ['Why it hurt conversion', 'A buyer looking for reels, ads, or social media marketing had to decode the offer. That delay creates cognitive friction and weakens booked-call intent.'],
              ['What changed', 'The page now prioritizes video editing, social media marketing, Meta Ads, Google Ads, creative strategy, proof, and repeated CTAs.'],
            ].map(([title, copy]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{copy}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950/80 px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core Offers"
            title="A focused creative engine for video, social, and paid media demand."
            copy="Every service supports one commercial goal: make the right audience remember you, trust you, click, and take the next step."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-[#080b13] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{service.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Reel Showcase"
            title="Reels and ad creatives that look premium before anyone reads the caption."
            copy="Use this section for real client reels, Meta Ads tests, Google Ads assets, transformations, and content samples. It is designed to increase scroll depth and reduce uncertainty."
          />
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {reelCards.map((card) => (
              <motion.div
                key={card.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
              >
                <div className={`flex aspect-[9/13] items-end bg-gradient-to-br ${card.gradient} p-5`}>
                  <div className="w-full rounded-2xl border border-white/20 bg-black/35 p-4 backdrop-blur">
                    <div className="mb-28 flex items-center justify-between">
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                        {card.tone}
                      </span>
                      <Film className="h-5 w-5" />
                    </div>
                    <p className="text-2xl font-semibold">{card.label}</p>
                    <p className="mt-2 text-sm text-white/80">{card.metric}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-white/[0.03] px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Before and After"
            title="From raw footage to a reel or ad creative with a job to do."
          />
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            {[
              ['Before', 'Unclear hook, slow opening, inconsistent captions, generic pacing, and no reason to stay past the first three seconds.'],
              ['After', 'Pattern interrupt, sharp hook, branded captions, tighter sequence, stronger payoff, and a CTA that fits the buyer journey or ad objective.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-950 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{title}</p>
                <p className="mt-5 text-xl leading-8 text-slate-200">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Website & Software Portfolio"
            title="Real builds from the current SniperCoders portfolio."
            copy="No outbound client links here. The work is shown as proof, while keeping the visitor inside your conversion flow."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {websiteProjects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm font-semibold text-cyan-300">{project.type}</p>
                <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.detail}</p>
                <Link
                  href="/showcase"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white"
                >
                  View case studies
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="A simple growth loop for brands that need better videos, posts, and ads."
          />
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {process.map(([number, title, copy]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                <p className="text-sm font-semibold text-cyan-300">{number}</p>
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{copy}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why SniperCoders"
            title="Premium creative direction without agency bloat."
          />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
            {[
              ['International perception', 'Copy, spacing, visuals, and offer language now signal a global creative partner instead of a local keyword-stuffed vendor.'],
              ['Conversion psychology', 'The page moves from desire, to proof, to mechanism, to trust, to action with low-friction WhatsApp and call CTAs.'],
              ['Lead quality', 'The messaging filters for brands that value video editing, social media strategy, paid ad creatives, and premium execution rather than one-off cheap tasks.'],
              ['Retention and scroll depth', 'Video-first modules, ad creative language, proof cards, and comparison blocks keep the story moving without overwhelming the visitor.'],
            ].map(([title, copy]) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Social Proof"
            title="Built for brands that need their videos, posts, and ads to carry more trust."
          />
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.figure
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                <Quote className="h-7 w-7 text-cyan-300" />
                <blockquote className="mt-6 leading-8 text-slate-200">{item.quote}</blockquote>
                <figcaption className="mt-8">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        <section className="bg-white/[0.03] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Conversion Notes
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                The new page is designed to reduce doubt at each scroll point.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Strong offers create urgency by making the cost of staying inconsistent feel
                clear. No fake countdowns, no cheap pressure, just a confident path from
                content chaos and ad testing guesswork to a reliable creative system.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [BarChart3, 'Performance flow', 'Hero promise, audience fit, video editing, social media marketing, paid ads creative, proof, FAQ, and final CTA.'],
                [MessageCircle, 'WhatsApp inquiries', 'Repeated WhatsApp CTAs give warm visitors a low-friction way to ask for pricing and availability.'],
                [Zap, 'Urgency without discounting', 'Position limited sprint capacity and faster Meta/Google creative testing instead of cheap promotions.'],
                [Globe2, 'Global signal', 'International audience language, premium spacing, and social-first services replace local IT-company framing.'],
              ].map(([Icon, title, copy]) => {
                const LucideIcon = Icon as typeof BarChart3;
                return (
                  <div key={title as string} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                    <LucideIcon className="h-6 w-6 text-cyan-300" />
                    <h3 className="mt-5 text-lg font-semibold">{title as string}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{copy as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Clear answers before the call." />
          <div className="mx-auto max-w-4xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {question}
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Ready for the next video and ads sprint?
                </p>
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  Let&apos;s turn your brand into the account and ad your market keeps seeing.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  Send your current page, niche, and growth goal. We will suggest the fastest
                  creative path for stronger video content, better Meta/Google ad assets, and more qualified inquiries.
                </p>
              </div>
              <PrimaryCtas />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
