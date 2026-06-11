'use client';

import { ChevronLeft, ChevronRight, Film, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const realEstateVideos = [
  'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198635/Dubai_realstate_1_pcwu5o.mp4',
  'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198634/Dubai_realstate_2_woxfi8.mp4',
  'https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198644/Dubai_realstate_3_rroedn.mp4',
];

export default function HomeVideoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeVideo = realEstateVideos[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % realEstateVideos.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? realEstateVideos.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % realEstateVideos.length);
  };

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
      if (!nextMuted) {
        videoRef.current.volume = 1;
        void videoRef.current.play();
      }
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
        <div className="relative">
          <video
            ref={videoRef}
            key={activeVideo}
            src={activeVideo}
            className="aspect-[16/10] w-full object-cover opacity-90 lg:aspect-[4/5]"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            aria-label={`Real estate video edit ${activeIndex + 1}`}
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent p-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  Real estate edits
                </p>
                <p className="mt-2 max-w-xs text-lg font-semibold text-white">
                  Property videos cut for trust, pace, and inquiry intent.
                </p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
                <Film className="h-5 w-5" />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-black/70"
            aria-label="Show previous real estate video"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-black/70"
            aria-label="Show next real estate video"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={toggleSound}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-black/70"
            aria-label={isMuted ? 'Turn video sound on' : 'Turn video sound off'}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 border-t border-white/10 p-4">
          {realEstateVideos.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={[
                'h-2 rounded-full transition-all',
                index === activeIndex ? 'w-8 bg-cyan-300' : 'w-2 bg-white/25 hover:bg-white/50',
              ].join(' ')}
              aria-label={`Show real estate video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
