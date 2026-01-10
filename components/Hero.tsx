//components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/06d4ecd8bd9e3431187222535399542e.png"
      >
        <source
          src="https://static.vecteezy.com/system/resources/previews/021/050/143/original/spinning-digital-globe-with-computer-binary-code-moving-towards-the-camera-communication-and-data-network-connections-concept-this-blue-technology-motion-background-is-full-hd-and-a-seamless-loop-free-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />

      {/* Content with responsive adjustments */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-start justify-center text-left w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:ml-20"
      >
        {/* Main Headline - Responsive stack layout */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-x-4 mb-8 sm:mb-12">
          <motion.h1 className="text-5xl xs:text-6xl sm:text-7xl lg:text-9xl text-white font-bold leading-tight glowing-text">
         Let&apos;s Elevate
          </motion.h1>
          <motion.h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-8xl text-white font-bold leading-tight glowing-text pb-1 sm:pb-2 lg:pb-4">
            Your
          </motion.h1>
        </div>

        <motion.h1 className="text-5xl xs:text-6xl sm:text-7xl lg:text-9xl text-white font-bold mb-8 sm:mb-12 leading-tight glowing-text">
          Brand
        </motion.h1>

        <p className="text-lg sm:text-xl lg:text-xl mb-8 sm:mb-12 max-w-2xl text-gray-200 px-2 sm:px-0">
          We craft powerful digital experiences to boost your brand&apos;s visibility and engagement.
        </p>

        <div className="w-full sm:w-auto px-2 sm:px-0">
          <Link href="/services" passHref>
            <motion.button
              className="w-full sm:w-auto inline-block bg-gradient-to-r from-cyan-600 to-purple-700 text-white py-4 sm:py-5 px-6 sm:px-10 rounded-full text-lg sm:text-xl font-semibold hover:from-yellow-500 hover:to-orange-600 hover:scale-105 hover:shadow-2xl transition-all duration-500 shadow-xl cursor-pointer text-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Custom Solution
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}