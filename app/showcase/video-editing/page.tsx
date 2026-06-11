import Footer from '@/components/Footer';
import { Play } from 'lucide-react';
import Link from 'next/link';

// const videoCategories = [
//   { label: 'All Video', value: 'all' },
//   { label: 'Real Estate', value: 'real-estate' },
//   { label: 'YouTube Podcast', value: 'youtube-podcast' },
//   { label: 'Education', value: 'education' },
//   { label: 'Influencer', value: 'influencer' },
//   { label: 'Vehicle Accessories', value: 'vehicle-accessories' },
//   { label: 'Fitness', value: 'fitness' },
//   { label: 'Mobile Screen Guards', value: 'mobile-screen-guards' },
//   { label: 'Gaming', value: 'gaming' },
// ];

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

        {/* ── Hero ── */}
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.23),transparent_60%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Video Editing Showcase
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Compact video editing portfolio by category.
            </h1>
          </div>
        </section>

        {/* ── Filter Bar ── */}
        {/* <section className="border-y border-white/10 bg-white/[0.03] px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {videoCategories.map((category) => {
              const isActive = selectedVideoCategory === category.value;
              const href =
                category.value === 'all'
                  ? '/showcase/video-editing'
                  : `/showcase/video-editing?category=${category.value}`;
              return (
                <Link
                  key={category.value}
                  href={href}
                  style={{ touchAction: 'manipulation' }}
                  className={[
                    'shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-medium',
                    'transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400',
                    isActive
                      ? 'border-cyan-300/50 bg-cyan-300/10 text-cyan-100'
                      : 'border-white/10 bg-slate-950/40 text-slate-300 hover:border-cyan-300/30 hover:text-white',
                  ].join(' ')}
                >
                  {category.label}
                </Link>
              );
            })}
          </div>
        </section> */}

        {/* ── Video Grid ── */}
        <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div
            className="mx-auto grid max-w-6xl grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
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
                  {/* Category badge */}
                  <div className="pointer-events-none absolute left-2 top-2 rounded-full border border-white/15 bg-black/50 px-2 py-1 text-[10px] font-medium text-white backdrop-blur sm:left-3 sm:top-3 sm:text-xs">
                    {project.category}
                  </div>
                  {/* Play icon — decorative */}
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

      </main>
      <Footer />
    </>
  );
}
