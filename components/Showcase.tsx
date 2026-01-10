//components/Showcase.tsx
'use client';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Travel Quench',
    description: 'A travel agency offering national and international packages.',
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767936495/Screenshot_2026-01-09_104902_fql72o.png',
    url: 'https://www.travelquench.in/',
  },
  {
    id: 2,
    title: 'Jai Mata Di Tour and Travel',
    description: 'Travel agency based in J&K offering pilgrimage and family tour packages.',
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767936495/Screenshot_2026-01-09_105029_hrvpvm.png',
    url: 'https://www.jaimataditourandtravel.com/',
  },
  {
    id: 3,
    title: 'TorkeHub',
    description: 'CRM focused startup based in USA',
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767936494/Screenshot_2026-01-09_104939_mcykfb.png',
    url: 'https://www.torkehub.com/',
  },
  {
    id: 4,
    title: 'UrbanCraft',
    description: 'Elegant and premium furniture store based in Bangalore.',
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767936495/Screenshot_2026-01-09_105322_fiylhj.png',
    url: 'https://furniture-landingpage-omega.vercel.app/',
  },
  {
    id: 5,
    title: 'StudentHolistic-AI',
    description: 'AI-Based E-Learning platform for automated content for students',
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767936920/Screenshot_2025-12-11_135634_oljoli.png',
    url: 'https://example.com/project5',
  },
  {
    id: 6,
    title: 'Kanban',
    description: 'AI-Powered project Management application to monitor team progress',
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767936494/Screenshot_2026-01-09_105231_wx6w1d.png',
    url: 'https://kanban-app-rjun.vercel.app',
  },
];

export default function Showcase() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [scrollSpeed, setScrollSpeed] = useState(1.2);
  
  // Adjust scroll speed based on screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) { // Mobile
        setScrollSpeed(0.8);
      } else if (window.innerWidth < 1024) { // Tablet
        setScrollSpeed(1);
      } else { // Desktop
        setScrollSpeed(1.2);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const animateScroll = () => {
    if (!scrollRef.current || isPaused) return;
    const scroller = scrollRef.current;
    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    
    if (scroller.scrollLeft >= maxScrollLeft - 1) {
      scroller.scrollLeft = 0;
    } else {
      scroller.scrollLeft += scrollSpeed;
    }
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    
    animationFrameRef.current = requestAnimationFrame(animateScroll);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, scrollSpeed]);

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-b from-black/90 to-purple-900/20 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-48 md:w-64 lg:w-96 h-48 md:h-64 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-36 md:w-48 lg:w-72 h-36 md:h-48 lg:h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-8 md:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 px-4"
        >
          Our Stellar Projects
        </motion.h2>
        
        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent space-x-4 md:space-x-6 lg:space-x-8 py-4 px-4 md:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
        >
          {duplicatedProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[380px] bg-black/60 backdrop-blur-lg border border-cyan-500/20 rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 snap-start relative z-20"
            >
              <div className="relative h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={380}
                    height={224}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    unoptimized={true}
                    priority={index < 3}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 lg:p-7">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 md:mb-6 leading-relaxed line-clamp-2 md:line-clamp-3">
                  {project.description}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-cyan-600 to-purple-700 text-white font-medium rounded-full hover:from-cyan-500 hover:to-purple-600 transition-all shadow-md hover:shadow-lg cursor-pointer text-sm sm:text-base"
                >
                  View Live Project
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Manual navigation buttons */}
        <div className="flex justify-center mt-8 md:mt-10 lg:mt-12 space-x-4 md:space-x-6">
          <button
            onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
            className="p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur transition-all active:scale-95 cursor-pointer"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
            className="p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur transition-all active:scale-95 cursor-pointer"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Mobile instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-4 md:mt-6"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            ← Projects auto-scroll • Pause on hover/touch →
          </p>
        </motion.div>
      </div>
      
      <style jsx>{`
        /* Custom scrollbar styling */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(6, 182, 212, 0.3);
          border-radius: 3px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(6, 182, 212, 0.5);
        }
        
        /* Line clamping for text */
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
        
        /* Hide scrollbar for mobile touch */
        @media (max-width: 768px) {
          .overflow-x-hidden {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          
          .overflow-x-hidden::-webkit-scrollbar {
            display: none; /* Chrome, Safari and Opera */
          }
        }
      `}</style>
    </section>
  );
}