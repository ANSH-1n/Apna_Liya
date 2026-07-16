// app/showcase/video-editing/page.tsx
import Footer from '@/components/Footer';
import { Play } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

// ✅ Metadata for AI discovery
export const metadata: Metadata = {
  title: 'Video Editing Showcase | SniperCoders Portfolio',
  description: 'Explore SniperCoders video editing portfolio featuring real estate, fitness, gaming, vehicle accessories, and influencer content. Professional short-form video editing for social media.',
  keywords: [
    'video editing portfolio',
    'short-form video editing',
    'real estate video editing',
    'fitness video editing',
    'gaming video editing',
    'vehicle accessories video editing',
    'influencer video editing',
    'SniperCoders showcase',
  ],
  openGraph: {
    title: 'Video Editing Showcase | SniperCoders Portfolio',
    description: 'Professional short-form video editing portfolio featuring real estate, fitness, gaming, and influencer content.',
    url: 'https://www.snipercoders.in/showcase/video-editing',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
};

const videoEditingProjects = [
  { category: 'Real Estate', categoryValue: 'real-estate', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198635/Dubai_realstate_1_pcwu5o.mp4' },
  { category: 'Real Estate', categoryValue: 'real-estate', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198634/Dubai_realstate_2_woxfi8.mp4' },
  { category: 'Real Estate', categoryValue: 'real-estate', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198644/Dubai_realstate_3_rroedn.mp4' },
  { category: 'YouTube Podcast', categoryValue: 'youtube-podcast', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198771/Youtube_podcast__ug6soi.mp4' },
  { category: 'Education', categoryValue: 'education', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781199964/Education_2_uevrml.mp4' },
  { category: 'Education', categoryValue: 'education', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781200306/Education_2_jwrg9s.mp4' },
  { category: 'Influencer', categoryValue: 'influencer', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781199967/Influencer_1_ks6z3a.mp4' },
  { category: 'Influencer', categoryValue: 'influencer', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781199986/Influencer_2_ylmq4f.mp4' },
  { category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198633/ride_adventure_1_a1tdhg.mp4' },
  { category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198635/ride_adventure_2_oi2df3.mp4' },
  { category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198635/rideadventure_3_nm6h4j.mp4' },
  { category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198629/ride_adventure_4_rxae2u.mp4' },
  { category: 'Fitness', categoryValue: 'fitness', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198592/fitness_1_tm1uoe.mp4' },
  { category: 'Mobile Screen Guards', categoryValue: 'mobile-screen-guards', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198553/Iron_Pixel_1_ixcqet.mp4' },
  { category: 'Mobile Screen Guards', categoryValue: 'mobile-screen-guards', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781199264/Iron_Pixel_4_ovx0ni.mp4' },
  { category: 'Gaming', categoryValue: 'gaming', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781199272/Iron_pixel_2_qnechm.mp4' },
  { category: 'Gaming', categoryValue: 'gaming', src: 'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781199263/Iron_pixel_3_w7t8vk.mp4' },
];

// Define categories derived from the projects themselves — single source of truth
const videoCategories = [
  { label: 'All', value: 'all' },
  ...Array.from(new Set(videoEditingProjects.map((p) => p.categoryValue))).map((val) => ({
    label: videoEditingProjects.find((p) => p.categoryValue === val)!.category,
    value: val,
  })),
];

// ✅ FAQ data for AI discovery
const faqs = [
  {
    question: 'What types of videos does SniperCoders edit?',
    answer: 'SniperCoders specializes in short-form video editing for Instagram Reels, YouTube Shorts, and TikTok. We edit real estate walkthroughs, fitness content, gaming videos, vehicle accessories content, influencer content, education videos, and YouTube podcasts.'
  },
  {
    question: 'How much does video editing cost?',
    answer: 'Our video editing packages start at $500/month for basic editing and scale based on volume and complexity. Contact us for a custom quote tailored to your content needs and video volume.'
  },
  {
    question: 'How long does video editing take?',
    answer: 'Video editing turnaround times vary by complexity. Simple edits can be completed in 24-48 hours, while more complex projects may take 3-5 business days. We work with you to meet your deadlines.'
  },
  {
    question: 'What industries have you edited videos for?',
    answer: 'We have edited videos for real estate, fitness, gaming, automotive accessories, education, influencers, mobile accessories, and YouTube podcasts. Our portfolio reflects a diverse range of content.'
  },
  {
    question: 'Do you edit long-form videos?',
    answer: 'While we specialize in short-form content for social media, we also edit YouTube videos, podcasts, and other long-form content. Contact us to discuss your specific video editing needs.'
  },
  {
    question: 'Can you add captions and effects to videos?',
    answer: 'Yes! We add professional captions, sound design, transitions, effects, and color grading to all videos. Our edits are designed to maximize retention and engagement on social media platforms.'
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

type VideoEditingShowcasePageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function VideoEditingShowcasePage({
  searchParams,
}: VideoEditingShowcasePageProps) {
  const params = await searchParams;
  const categoryFromUrl = params?.category;
  const selectedVideoCategory =
    categoryFromUrl && videoCategories.some((c) => c.value === categoryFromUrl)
      ? categoryFromUrl
      : 'all';

  const filteredVideoProjects =
    selectedVideoCategory === 'all'
      ? videoEditingProjects
      : videoEditingProjects.filter((p) => p.categoryValue === selectedVideoCategory);

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">

        {/* ── AI-FRIENDLY HERO ── */}
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.23),transparent_60%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Video Editing Showcase
            </p>
            {/* ✅ H1: Added keywords */}
            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Professional Video Editing Portfolio — SniperCoders Showcase
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              <strong>SniperCoders</strong> video editing portfolio featuring real estate, 
              fitness, gaming, vehicle accessories, influencer, and education content. 
              Professional short-form video editing for social media platforms.
            </p>
          </div>
        </section>

        {/* ── Video Grid ── */}
        <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <SectionHeader
            eyebrow="Portfolio"
            title="Short-Form Video Editing for Social Media"
            copy="Browse our video editing portfolio by category. Each video is professionally edited for retention, engagement, and brand consistency."
          />
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredVideoProjects.map((project) => (
              <article
                key={project.src}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
              >
                <div className="relative overflow-hidden bg-slate-950">
                  <video
                    src={project.src}
                    className="aspect-[9/16] w-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  />
                  <div className="pointer-events-none absolute left-2 top-2 rounded-full border border-white/15 bg-black/50 px-2 py-1 text-[10px] font-medium text-white backdrop-blur sm:left-3 sm:top-3 sm:text-xs">
                    {project.category}
                  </div>
                  <div className="pointer-events-none absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-slate-950 sm:bottom-3 sm:right-3 sm:h-8 sm:w-8">
                    <Play className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredVideoProjects.length === 0 && (
            <p className="mt-16 text-center text-sm text-slate-500">
              No videos in this category yet.
            </p>
          )}
        </section>

        {/* ✅ FAQ SECTION - Critical for AI discovery */}
        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions About SniperCoders Video Editing"
              copy="Find answers to common questions about our video editing services, pricing, and process."
            />
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-300/30 transition"
                >
                  <h3 className="text-lg font-semibold text-cyan-300">{faq.question}</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ FINAL CTA SECTION */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Ready to Edit Your Videos?
                </p>
                <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                  Let SniperCoders Make Your Videos Stand Out
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  Whether you need real estate reels, fitness content, gaming videos, or influencer 
                  edits, we can help you create professional video content that drives engagement.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/917006377796?text=Hello%20SniperCoders%2C%20I%20want%20to%20discuss%20video%20editing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  Discuss Video Editing Services
                </a>
                <Link
                  href="/pricing/video-editing"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
                  View Video Editing Pricing
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