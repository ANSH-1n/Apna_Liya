//components/VideoSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black/95 via-purple-900/20 to-black/95">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10 md:opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        {/* Glowing orbs for atmosphere - Smaller on mobile */}
        <div className="absolute top-10 left-4 w-48 h-48 md:top-20 md:left-20 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-48 h-48 md:bottom-20 md:right-20 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content Container with Better Spacing */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 xl:py-24">
        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        className="relative w-full max-w-5xl mx-auto"

        >
          {/* Glow effect behind video - Smaller on mobile */}
          <div className="absolute -inset-2 md:-inset-3 lg:-inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50"></div>
        
          {/* Video wrapper with border */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-1 md:p-2 rounded-xl md:rounded-2xl shadow-xl lg:shadow-2xl">
            {/* Inner glow border */}
            <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-purple-500/50 md:border-2 md:border-purple-500 opacity-50"></div>
          
            {/* Video element with autoplay */}
            <div className="relative rounded-lg md:rounded-xl overflow-hidden aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="https://via.placeholder.com/1280x720/1e293b/8b5cf6?text=SniperCoders+Showreel"
              >
                <source src="https://res.cloudinary.com/dzoxwk1jc/video/upload/v1768070466/sniper_video_section_r1kcfs.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Subtle play indicator - Smaller on mobile */}
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black/60 backdrop-blur-sm rounded-full p-1.5 md:p-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              
              {/* Auto-play indicator for mobile */}
              <div className="absolute top-2 left-2 md:top-4 md:left-4">
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2 md:px-3 py-1">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs md:text-sm font-medium">Auto-playing</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video caption/title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-4 md:mt-6 lg:mt-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              See Our Work in Action
            </h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              Watch how we transform ideas into stunning digital experiences
            </p>
          </motion.div>
        </motion.div>

        {/* Optional: Add some stats or features below the video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { label: 'Projects', value: '40+' },
            { label: 'Clients', value: '20+' },
            { label: 'Satisfaction', value: '98%' },
            { label: 'Support', value: '24/7' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-lg md:rounded-xl p-4 text-center border border-purple-500/20"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {stat.value}
              </div>
              <div className="text-gray-300 text-xs md:text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        /* Responsive aspect ratio for very small screens */
        @media (max-width: 480px) {
          .aspect-video {
            aspect-ratio: 16/9;
          }
        }
        
        /* Hide video controls on all browsers */
        video::-webkit-media-controls {
          display: none !important;
        }
        
        video::-webkit-media-controls-enclosure {
          display: none !important;
        }
        
        video::-webkit-media-controls-panel {
          display: none !important;
        }
        
        video {
          -webkit-mask-image: -webkit-radial-gradient(white, black);
        }
        
        /* Smooth hover effects for desktop only */
        @media (hover: hover) {
          .hover\\:scale-105:hover {
            transform: scale(1.02);
          }
        }
      `}</style>
    </section>
  );
}