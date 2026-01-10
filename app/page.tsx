

//app/page.tsx

'use client';
// import { motion  from 'framer-motion';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import Creative from '../components/Creative';
import Showcase from '../components/Showcase';
import TrendService from '../components/TrendService';
import Agent from '../components/Agent';
import WhoAreWe from '../components/WhoAreWe';



export default function Home() {
  const [, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a2a] text-white overflow-hidden pt-12">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="animated-orb orb-primary"></div>
        <div className="animated-orb orb-secondary"></div>
        <div className="animated-orb orb-tertiary"></div>
        <div className="particles-container">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 15 + 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <Hero />
        <VideoSection />
        <Creative />
        <Showcase />
        <TrendService />
        
        {/* Why Choose Us */}
        <div className="py-20 px-4 sm:px-8 bg-[#0a0a2a] text-white relative z-10">
          <Agent />
        </div>
        
        <WhoAreWe />
      </div>

      <footer className="relative z-10 bg-gray-950/50 backdrop-filter backdrop-blur-lg border-t border-gray-800/50 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold">
                  <span className="text-cyan-400">Sniper</span>Coders
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We specialize in turning visionary ideas into reality. Our expertise helps businesses transform aspirations into tangible solutions, paving the way for future growth.
              </p>
            </div>
            
            {/* Our Service */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Custom Software Dev</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Website Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Mobile App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Cloud Solutions</a></li>
              </ul>
            </div>
            
            {/* Useful Links */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Useful Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Refund Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</a></li>
              </ul>
            </div>
            
            {/* Contact/Know More */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Get In Touch</h3>
              <ul className="space-y-2">
                 <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</a></li>
                 <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Testimonials</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm">
             © {new Date().getFullYear()} SniperCoders. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}