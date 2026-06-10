// //showcase/video-editing/page.tsx

// 'use client';

// import Footer from '@/components/Footer';
// import { motion } from 'framer-motion';
// import { Play } from 'lucide-react';
// import { useState } from 'react';

// const fadeUp = {
//   hidden: { opacity: 0, y: 22 },
//   visible: { opacity: 1, y: 0 },
// };

// const videoCategories = [
//   { label: 'All Video', value: 'all' },
//   { label: 'Real Estate', value: 'real-estate' },
//   { label: 'Vehicle Accessories', value: 'vehicle-accessories' },
//   { label: 'Fitness', value: 'fitness' },
//   { label: 'Mobile Screen Guards', value: 'mobile-screen-guards' },
//   { label: 'Gaming', value: 'gaming' },
// ];

// const videoEditingProjects = [
//   { title: 'Dubai Real Estate 01', category: 'Real Estate', categoryValue: 'real-estate', src: '/videos/Dubai_realstate_1.mp4' },
//   { title: 'Dubai Real Estate 02', category: 'Real Estate', categoryValue: 'real-estate', src: '/videos/Dubai_realstate_2.mp4' },
//   { title: 'Dubai Real Estate 03', category: 'Real Estate', categoryValue: 'real-estate', src: '/videos/Dubai_realstate_3.mp4' },
//   { title: 'Ride Adventure 01', category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: '/videos/ride_adventure_1.mp4' },
//   { title: 'Ride Adventure 02', category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: '/videos/ride_adventure_2.mp4' },
//   { title: 'Ride Adventure 03', category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: '/videos/rideadventure_3.mp4' },
//   { title: 'Ride Adventure 04', category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: '/videos/ride_adventure_4.mp4' },
//   { title: 'Fitness Edit 01', category: 'Fitness', categoryValue: 'fitness', src: '/videos/fitness_1.mp4' },
//   { title: 'Iron Pixel Screen Guard 01', category: 'Mobile Screen Guards', categoryValue: 'mobile-screen-guards', src: '/videos/Iron_Pixel_1.mp4' },
//   { title: 'Iron Pixel Screen Guard 02', category: 'Mobile Screen Guards', categoryValue: 'mobile-screen-guards', src: '/videos/Iron_Pixel_4.mp4' },
//   { title: 'Iron Pixel Gaming 01', category: 'Gaming', categoryValue: 'gaming', src: '/videos/Iron_pixel_2.mp4' },
//   { title: 'Iron Pixel Gaming 02', category: 'Gaming', categoryValue: 'gaming', src: '/videos/Iron_pixel_3.mp4' },
// ];

// export default function VideoEditingShowcasePage() {
//   const [selectedVideoCategory, setSelectedVideoCategory] = useState(() => {
//     if (typeof window === 'undefined') return 'all';
//     const categoryFromUrl = new URLSearchParams(window.location.search).get('category');
//     return videoCategories.some((category) => category.value === categoryFromUrl)
//       ? categoryFromUrl
//       : 'all';
//   });

//   const filteredVideoProjects =
//     selectedVideoCategory === 'all'
//       ? videoEditingProjects
//       : videoEditingProjects.filter((project) => project.categoryValue === selectedVideoCategory);

//   const handleCategoryChange = (category: string) => {
//     setSelectedVideoCategory(category);
//     const url = category === 'all' ? '/showcase/video-editing' : `/showcase/video-editing?category=${category}`;
//     window.history.replaceState(null, '', url);
//   };

//   return (
//     <>
//       <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
//         <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8">
//           <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
//           <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.23),transparent_60%)]" />

//           <div className="mx-auto max-w-5xl text-center">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//               Video Editing Showcase
//             </p>
//             <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
//               Compact video editing portfolio by category.
//             </h1>
//           </div>
//         </section>

//         <section className="border-y border-white/10 bg-white/[0.03] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
//             {videoCategories.map((category) => (
//               <button
//                 key={category.value}
//                 type="button"
//                 onClick={() => handleCategoryChange(category.value)}
//                 className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
//                   selectedVideoCategory === category.value
//                     ? 'border-cyan-300/50 bg-cyan-300/10 text-cyan-100'
//                     : 'border-white/10 bg-slate-950/40 text-slate-300 hover:border-cyan-300/30 hover:text-white'
//                 }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </section>

//         <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//           <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
//             {filteredVideoProjects.map((project, index) => (
//               <motion.article
//                 key={project.title}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.55, delay: index * 0.04 }}
//                 className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
//               >
//                 <div className="relative overflow-hidden bg-slate-950">
//                   <video
//                     src={project.src}
//                     className="aspect-[9/16] w-full object-cover"
//                     controls
//                     preload="metadata"
//                     playsInline
//                   />
//                   <div className="pointer-events-none absolute left-2 top-2 rounded-full border border-white/15 bg-black/45 px-2 py-1 text-[10px] font-medium text-white backdrop-blur sm:left-3 sm:top-3 sm:text-xs">
//                     {project.category}
//                   </div>
//                   <div className="pointer-events-none absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-slate-950 sm:bottom-3 sm:right-3">
//                     <Play className="h-4 w-4 fill-current" />
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }




'use client';

import Footer from '@/components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const videoCategories = [
  { label: 'All Video', value: 'all' },
  { label: 'Real Estate', value: 'real-estate' },
  { label: 'Vehicle Accessories', value: 'vehicle-accessories' },
  { label: 'Fitness', value: 'fitness' },
  { label: 'Mobile Screen Guards', value: 'mobile-screen-guards' },
  { label: 'Gaming', value: 'gaming' },
];

const videoEditingProjects = [
  { title: 'Dubai Real Estate 01', category: 'Real Estate', categoryValue: 'real-estate', src: '/videos/Dubai_realstate_1.mp4' },
  { title: 'Dubai Real Estate 02', category: 'Real Estate', categoryValue: 'real-estate', src: '/videos/Dubai_realstate_2.mp4' },
  { title: 'Dubai Real Estate 03', category: 'Real Estate', categoryValue: 'real-estate', src: '/videos/Dubai_realstate_3.mp4' },
  { title: 'Ride Adventure 01', category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: '/videos/ride_adventure_1.mp4' },
  { title: 'Ride Adventure 02', category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: '/videos/ride_adventure_2.mp4' },
  { title: 'Ride Adventure 03', category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: '/videos/rideadventure_3.mp4' },
  { title: 'Ride Adventure 04', category: 'Vehicle Accessories', categoryValue: 'vehicle-accessories', src: '/videos/ride_adventure_4.mp4' },
  { title: 'Fitness Edit 01', category: 'Fitness', categoryValue: 'fitness', src: '/videos/fitness_1.mp4' },
  { title: 'Iron Pixel Screen Guard 01', category: 'Mobile Screen Guards', categoryValue: 'mobile-screen-guards', src: '/videos/Iron_Pixel_1.mp4' },
  { title: 'Iron Pixel Screen Guard 02', category: 'Mobile Screen Guards', categoryValue: 'mobile-screen-guards', src: '/videos/Iron_Pixel_4.mp4' },
  { title: 'Iron Pixel Gaming 01', category: 'Gaming', categoryValue: 'gaming', src: '/videos/Iron_pixel_2.mp4' },
  { title: 'Iron Pixel Gaming 02', category: 'Gaming', categoryValue: 'gaming', src: '/videos/Iron_pixel_3.mp4' },
];

export default function VideoEditingShowcasePage() {
  // ✅ Fix: initialize with safe default, read URL only after mount
  const [selectedVideoCategory, setSelectedVideoCategory] = useState('all');

  useEffect(() => {
    const categoryFromUrl = new URLSearchParams(window.location.search).get('category');
    if (categoryFromUrl && videoCategories.some((c) => c.value === categoryFromUrl)) {
      setSelectedVideoCategory(categoryFromUrl);
    }
  }, []);

  const filteredVideoProjects =
    selectedVideoCategory === 'all'
      ? videoEditingProjects
      : videoEditingProjects.filter((project) => project.categoryValue === selectedVideoCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedVideoCategory(category);
    const url =
      category === 'all'
        ? '/showcase/video-editing'
        : `/showcase/video-editing?category=${category}`;
    window.history.replaceState(null, '', url);
  };

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
        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-4 sm:px-6 lg:px-8">
          {/*
           * ✅ Fix: removed pointer-events issues by ensuring no overlay sits above buttons.
           *    Used a plain flex row with horizontal scroll on mobile.
           *    Added touch-action: manipulation to prevent 300ms tap delay on iOS.
           */}
          <div
            className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {videoCategories.map((category) => {
              const isActive = selectedVideoCategory === category.value;
              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => handleCategoryChange(category.value)}
                  // ✅ touch-action: manipulation kills the 300ms delay on mobile Safari
                  style={{ touchAction: 'manipulation' }}
                  className={[
                    'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070d]',
                    isActive
                      ? 'border-cyan-300/50 bg-cyan-300/10 text-cyan-100'
                      : 'border-white/10 bg-slate-950/40 text-slate-300 hover:border-cyan-300/30 hover:text-white active:bg-white/10',
                  ].join(' ')}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Video Grid ── */}
        <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          {/*
           * Responsive grid:
           *  - xs  (<480px)  : 1 column  — 9:16 videos need room to breathe
           *  - sm  (≥640px)  : 2 columns
           *  - md  (≥768px)  : 3 columns
           *  - lg  (≥1024px) : 4 columns
           *
           * AnimatePresence re-animates cards when the filter changes.
           * Key on the outer div forces a full remount on category switch,
           * so staggered fadeUp runs fresh every time.
           */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedVideoCategory}            // ✅ remount grid on filter change → fresh stagger
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mx-auto grid max-w-6xl grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              {filteredVideoProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.45, delay: index * 0.05 }}
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
                    {/* Play icon — decorative, controls handle actual play */}
                    <div className="pointer-events-none absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-slate-950 sm:bottom-3 sm:right-3 sm:h-8 sm:w-8">
                      <Play className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />
                    </div>
                  </div>

                  {/* Title below video */}
                  <div className="px-3 py-2 sm:px-4 sm:py-3">
                    <p className="truncate text-xs font-medium text-slate-300 sm:text-sm">
                      {project.title}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
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