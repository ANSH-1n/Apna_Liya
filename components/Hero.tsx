


// components/Hero.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        aria-label="Background video showing digital technology and global connectivity"
      >
        <source
          src="https://static.vecteezy.com/system/resources/previews/021/050/143/original/spinning-digital-globe-with-computer-binary-code-moving-towards-the-camera-communication-and-data-network-connections-concept-this-blue-technology-motion-background-is-full-hd-and-a-seamless-loop-free-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Enhanced overlay with more depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/30 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_100%)]" />

      {/* Animated particles/dots - only render after mount */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Content with responsive adjustments */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-start justify-center text-left w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:ml-20"
      >
        {/* Main Headline with enhanced animations */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-x-4 mb-4 sm:mb-6">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl xs:text-6xl sm:text-7xl lg:text-9xl text-white font-black leading-tight relative"
          >
            <span className="relative inline-block">
              Let&apos;s Elevate
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-purple-600/20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl xs:text-5xl sm:text-6xl lg:text-8xl font-black leading-tight pb-1 sm:pb-2 lg:pb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
          >
            Your
          </motion.h1>
        </div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-6xl xs:text-7xl sm:text-8xl lg:text-[10rem] font-black mb-6 sm:mb-8 leading-none relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-pulse">
            Brand
          </span>
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-orange-600/10 via-pink-600/10 to-purple-600/10 blur-3xl -z-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-3xl text-gray-300 leading-relaxed px-2 sm:px-0"
        >
          <span className="text-white font-semibold">SniperCoders</span> - The <span className="text-cyan-400 font-semibold">best IT and software company in India</span>

        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base sm:text-lg lg:text-xl mb-10 sm:mb-14 max-w-3xl text-gray-400 leading-relaxed px-2 sm:px-0"
        >
          Specializing in <span className="text-blue-400 font-medium">best website development</span>, 
          <span className="text-purple-400 font-medium"> app development</span>, 
          <span className="text-orange-400 font-medium"> digital marketing</span> (SEO, Google Ads, Meta Ads), 
          <span className="text-cyan-400 font-medium"> IT consulting</span>, and 
          <span className="text-pink-400 font-medium"> content creation services</span> near you.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-5 sm:gap-6 w-full sm:w-auto px-2 sm:px-0"
        >
          {/* Offers Button */}
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== 'undefined') {
                const offersSection = document.querySelector('#offers');
                if (offersSection) {
                  const offsetTop = offersSection.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }
            }}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white py-5 sm:py-6 px-10 sm:px-12 rounded-full text-lg sm:text-xl font-bold overflow-hidden shadow-2xl shadow-orange-500/30 cursor-pointer border-2 border-transparent hover:border-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            aria-label="View exclusive offers on web development and digital marketing services"
          >
            {/* Shimmer effect */}
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            
            {/* Animated background */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="relative flex items-center gap-3 z-10">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="font-black tracking-wide">Exclusive Offers</span>
              <motion.svg 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
          </motion.button>

          {/* Services Button */}
          <Link href="/services" aria-label="Explore our website development, app development, and IT services">
            <motion.button
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white py-5 sm:py-6 px-10 sm:px-12 rounded-full text-lg sm:text-xl font-bold overflow-hidden shadow-2xl shadow-cyan-500/30 cursor-pointer border-2 border-transparent hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer effect */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: 0.5,
                }}
              />
              
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative flex items-center gap-3 z-10">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-black tracking-wide">Our Services</span>
                <motion.svg 
                  className="w-5 h-5 sm:w-6 sm:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.button>
          </Link>

          {/* Google Review Button */}
          <a 
            href="https://g.page/r/CSFjE6U6AniqEBM/review" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Leave us a Google review"
          >
            <motion.button
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white py-5 sm:py-6 px-10 sm:px-12 rounded-full text-lg sm:text-xl font-bold overflow-hidden shadow-2xl shadow-green-500/30 cursor-pointer border-2 border-transparent hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer effect */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: 0.7,
                }}
              />
              
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative flex items-center gap-3 z-10">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="font-black tracking-wide">Review Us</span>
                <motion.svg 
                  className="w-5 h-5 sm:w-6 sm:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </motion.svg>
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* SEO-friendly additional context */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 sm:mt-12 text-sm text-gray-500 max-w-3xl px-2 sm:px-0"
        >
          <p className="leading-relaxed">
            🏆 <span className="text-gray-400">Trusted by 30+ businesses</span> | 
            ⭐ <span className="text-gray-400">4.9/5 rating</span> | 
            ✅ <span className="text-gray-400">100% customer satisfaction</span> | 
            🇮🇳 <span className="text-gray-400">Best IT company in India</span>
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes glowing-text {
          0%, 100% {
            text-shadow: 0 0 20px rgba(96, 165, 250, 0.5),
                         0 0 40px rgba(96, 165, 250, 0.3),
                         0 0 60px rgba(96, 165, 250, 0.2);
          }
          50% {
            text-shadow: 0 0 30px rgba(251, 146, 60, 0.6),
                         0 0 60px rgba(251, 146, 60, 0.4),
                         0 0 90px rgba(251, 146, 60, 0.3);
          }
        }
      `}</style>
    </section>
  );
}