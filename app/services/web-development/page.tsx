// //app/services/web-development/page.tsx

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import Footer from '@/components/Footer';

export default function WebDevelopmentPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [hoverCard, setHoverCard] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Three.js setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      color: 0x88ccff,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    camera.position.z = 50;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.animate-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Stats counter animation
  const [stats, setStats] = useState({ projects: 0, rating: 0, clients: 0 });

  useEffect(() => {
    if (isVisible.stats) {
      const duration = 2000;
      const interval = 20;
      const steps = duration / interval;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setStats({
          projects: Math.min(30, Math.floor((30 * step) / steps)),
          rating: Math.min(4.9, parseFloat(((4.9 * step) / steps).toFixed(1))),
          clients: Math.min(100, Math.floor((100 * step) / steps)),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible.stats]);

  // Bubble component
  const Bubble = ({ delay, duration, size, position }: { delay: number; duration: number; size: number; position: { left: string; top: string } }) => (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 backdrop-blur-sm"
      style={{
        width: size,
        height: size,
        left: position.left,
        top: position.top,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        delay,
        ease: 'easeInOut',
      }}
    />
  );

  // Services data with SEO-optimized content
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Custom Coded Website Development',
      description: 'Best custom coded websites near you - hand-crafted, pixel-perfect business websites tailored to your brand identity and business goals.',
      color: 'bg-purple-500',
      progress: 95,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'eCommerce Website Development',
      description: 'Best eCommerce website development near you - secure, seamless online stores with advanced payment integrations for your growing business.',
      color: 'bg-blue-500',
      progress: 92,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Best Web Design Near You',
      description: 'Award-winning web design services - creating visually stunning, conversion-focused websites that captivate your audience and drive results.',
      color: 'bg-green-500',
      progress: 96,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Best App Development Agency',
      description: 'Leading app development agency in India - creating innovative mobile applications for iOS and Android that transform your business digitally.',
      color: 'bg-red-500',
      progress: 94,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Content Creation & Video Editing',
      description: 'Best content creation and video editing company near you - professional digital content that engages, informs, and converts your target audience.',
      color: 'bg-pink-500',
      progress: 93,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Digital Marketing Services',
      description: 'Complete digital marketing services including SEO, Google Ads, Meta Ads, and social media marketing to grow your online presence and revenue.',
      color: 'bg-purple-600',
      progress: 95,
    },
  ];

 
  
  return (
    <div ref={containerRef} className="relative bg-gray-900 text-white min-h-screen overflow-hidden font-sans">
      {/* SEO-optimized meta tags would go in your head component */}
      
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-30" style={{ opacity: backgroundOpacity.get() }} />

      {/* Floating Bubbles */}
      {[...Array(15)].map((_, i) => (
        <Bubble
          key={`global-${i}`}
          delay={i * 0.5}
          duration={4 + Math.random() * 4}
          size={60 + Math.random() * 120}
          position={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 400}%`,
          }}
        />
      ))}

      {/* Header Banner - SEO Optimized */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-800 to-purple-800 p-10 text-center"
        style={{ scale: headerScale }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r mt-12 from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Best Website Development Company Near You in India
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-4 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          SniperCoders - Your trusted software and IT agency in India, delivering the best solutions for businesses and startups. With 30+ projects delivered, we focus on customer satisfaction above all.
        </motion.p>
        <motion.p
          className="text-md md:text-lg mb-8 max-w-3xl mx-auto text-blue-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Specializing in custom coded websites, business websites, eCommerce development, best web design, and app development. We&apos;re recognized as one of the best website development companies in India.
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started - Free Consultation →
        </motion.button>
      </motion.section>

      {/* Why Choose Us Section - NEW */}
      <section className="max-w-7xl mx-auto py-20 px-6 animate-section relative" id="why-choose">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible['why-choose'] ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose SniperCoders?
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible['why-choose'] ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          As the best software and IT company in India, we combine technical excellence with creative innovation to deliver outstanding digital solutions for businesses and startups.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Local Expertise, Global Standards', 
              desc: 'Best website development near you with international quality standards',
              icon: '🎯'
            },
            { 
              title: 'Proven Track Record', 
              desc: '30+ successful projects delivered across diverse industries',
              icon: '✨'
            },
            { 
              title: 'Customer-First Approach', 
              desc: 'Your satisfaction is our priority - we deliver on time, every time',
              icon: '❤️'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl text-center hover:bg-gray-700/70 transition-all"
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible['why-choose'] ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid - SEO Enhanced */}
      <section className="max-w-7xl mx-auto py-20 px-6 animate-section relative" id="services">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible.services ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Our Premium Services
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible.services ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From best website development and app development to content creation and digital marketing - we&apos;re your one-stop solution for all digital needs.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 text-center overflow-hidden border border-gray-700/30 hover:border-purple-500/50"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={isVisible.services ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
              onHoverStart={() => setHoverCard(index)}
              onHoverEnd={() => setHoverCard(null)}
            >
              <motion.div
                className={`${service.color} w-16 h-16 mx-auto rounded-xl mb-6 flex items-center justify-center shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="mb-6 text-gray-300">{service.description}</p>
              <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${service.color}`}
                  initial={{ width: '0%' }}
                  animate={{ width: hoverCard === index ? `${service.progress}%` : '0%' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
              {hoverCard === index && (
                <motion.p
                  className="text-sm mt-2 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Expertise Level: {service.progress}%
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="max-w-7xl mx-auto py-20 px-6 animate-section relative" id="process">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible.process ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Our Proven Development Process
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible.process ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          As the best website development company in India, we follow a systematic approach to ensure your project&apos;s success from concept to launch.
        </motion.p>
        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2 hidden md:block"
            initial={{ height: 0 }}
            animate={isVisible.process ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.2 }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Discovery & Strategy', desc: 'Understanding your business goals, target audience, and project requirements', color: 'blue-400', step: 1 },
              { title: 'UI/UX Design', desc: 'Creating intuitive, beautiful designs that enhance user experience', color: 'indigo-400', step: 2 },
              { title: 'Custom Development', desc: 'Building with cutting-edge technologies and best coding practices', color: 'purple-400', step: 3 },
              { title: 'Quality Assurance', desc: 'Rigorous testing across all devices and browsers', color: 'cyan-400', step: 4 },
              { title: 'Launch & Support', desc: 'Smooth deployment with ongoing maintenance and optimization', color: 'teal-400', step: 5 },
            ].map((step, index) => (
              <motion.div
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={isVisible.process ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl hover:bg-gray-700/70 transition-all transform hover:-translate-y-2 shadow-xl border border-gray-700/30">
                  <h3 className={`text-xl font-bold mb-3 text-${step.color}`}>{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} md:block hidden`}
                >
                  <motion.div
                    className={`bg-gradient-to-r from-${step.color} to-${step.color.replace('400', '500')} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg`}
                    whileHover={{ scale: 1.2, boxShadow: `0 0 15px ${step.color}` }}
                  >
                    {step.step}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Updated with accurate numbers */}
      <section className="py-20 animate-section relative" id="stats">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.stats ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible.stats ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SniperCoders By The Numbers
            </motion.h2>
            <motion.p
              className="text-xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={isVisible.stats ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Trusted by businesses across India for delivering excellence in web development, app development, and digital marketing services.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { value: `${stats.projects}+`, label: 'Projects Delivered', icon: 'chart-bar', color: 'from-blue-500 to-blue-400' },
              { value: stats.rating, label: 'Client Satisfaction Rating', icon: 'star', color: 'from-yellow-500 to-yellow-400', suffix: '/5' },
              { value: `${stats.clients}%`, label: 'Customer Satisfaction', icon: 'trending-up', color: 'from-green-500 to-green-400' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl text-center relative overflow-hidden group border border-gray-700/30"
                initial={{ y: 50, opacity: 0 }}
                animate={isVisible.stats ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(31, 41, 55, 0.9)', borderColor: 'rgba(147, 51, 234, 0.5)' }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        stat.icon === 'chart-bar'
                          ? 'M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
                          : stat.icon === 'star'
                          ? 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                          : 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                      }
                    />
                  </svg>
                </div>
                <motion.div
                  className="text-4xl font-bold text-white flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={isVisible.stats ? { scale: 1 } : { scale: 0 }}
                  transition={{ type: 'spring', stiffness: 100, delay: 0.7 + index * 0.2 }}
                >
                  {stat.value}
                  {stat.suffix && <span className="text-2xl ml-1">{stat.suffix}</span>}
                </motion.div>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas - NEW SEO Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 animate-section relative" id="service-areas">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible['service-areas'] ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Complete Digital Solutions
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible['service-areas'] ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            'Best Website Development Near Me',
            'Custom Coded Websites Near Me',
            'Business Websites Near Me',
            'eCommerce Website Development Near Me',
            'Best Web Design Services',
            'Best App Development Agency in India',
            'Content Creation & Video Editing',
            'Digital Marketing (SEO, Google Ads, Meta Ads)',
            'Social Media Marketing',
            'Website Development Companies in India'
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700/30 hover:border-purple-500/50 transition-all"
              initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              animate={isVisible['service-areas'] ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(31, 41, 55, 0.5)' }}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 text-purple-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200">{service}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call-to-Action - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business Online?
          </motion.h2>
          <motion.p
            className="text-xl mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Partner with SniperCoders - the best software and IT company in India for your digital success story.
          </motion.p>
          <motion.p
            className="text-lg mb-10 max-w-2xl mx-auto text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get started with a free consultation and discover how we can elevate your business with our website development, app development, and digital marketing expertise.
          </motion.p>
          <motion.button
            className="bg-white text-purple-800 py-4 px-10 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
            whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255,255,255,0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Free Consultation Today →
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}