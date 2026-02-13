// //app/services/it-consulting/page.tsx


'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Shield, Cloud, List, Server, Lock, Code, ArrowRight, CheckCircle } from 'lucide-react';
import * as THREE from 'three';
import Footer from '@/components/Footer';

// Types
interface TimelineItemProps {
  number: number;
  title: string;
  description: string;
  isLeft: boolean;
  isLast?: boolean;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  onHover: () => void;
  onHoverEnd: () => void;
  isHovered: boolean;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatCardProps {
  number: string;
  label: string;
}



// Main App Component
const App: React.FC = () => {
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
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-950 text-white overflow-hidden font-sans">
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-30" style={{ opacity: backgroundOpacity.get() }} />
      
      <Hero />
      <WhyChooseSniperCoders />
      <ConsultingMethodology />
      <ServiceOfferings />
      <WhyPartnerWithUs />
      <StatsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

// Hero Component - SEO Optimized
const Hero: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full"
        >
          💼 Best IT Consulting Services in India
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Best IT Consulting Company Near You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-4 text-gray-300 max-w-4xl mx-auto"
        >
          SniperCoders - Your trusted software and IT company in India, delivering expert IT consulting services for businesses and startups.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg mb-8 text-blue-200 max-w-4xl mx-auto"
        >
          Transform your business with strategic IT consulting, cloud migration, cybersecurity, digital transformation, and technology solutions that drive growth and innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Schedule Free IT Assessment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-900/30 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Why Choose SniperCoders - NEW SECTION
const WhyChooseSniperCoders: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900/60 relative overflow-hidden" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8"
        >
          Why Choose SniperCoders for IT Consulting?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto"
        >
          As the best IT consulting company in India, we combine deep technical expertise with business acumen to deliver strategic technology solutions that transform your organization.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Comprehensive IT Expertise',
              desc: '30+ successful IT projects with expertise in cloud, security, infrastructure, and digital transformation',
              icon: '🎯',
            },
            {
              title: 'Customer-First Approach',
              desc: '100% customer satisfaction with dedicated account managers and personalized solutions',
              icon: '❤️',
            },
            {
              title: 'End-to-End Solutions',
              desc: 'From IT strategy and consulting to implementation, maintenance, and ongoing support',
              icon: '🚀',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-gray-700/70 transition-all border border-gray-700 hover:border-blue-500"
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Consulting Methodology Component
const ConsultingMethodology: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden animate-section" id="methodology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8"
        >
          Our Proven IT Consulting Methodology
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto"
        >
          Our systematic approach ensures successful technology transformation with minimal disruption to your business operations.
        </motion.p>
        <div className="relative">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-700 to-purple-700 z-0"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="relative z-10">
            {[
              { number: 1, title: 'Discovery & Assessment Workshop', description: 'Comprehensive business technology analysis and requirement gathering', isLeft: true },
              { number: 2, title: 'Strategic Gap Analysis', description: 'Identifying inefficiencies, security vulnerabilities, and growth opportunities', isLeft: false },
              { number: 3, title: 'Custom Solution Design', description: 'Tailored IT roadmap development with clear milestones and KPIs', isLeft: true },
              { number: 4, title: 'Implementation & Deployment', description: 'Vendor management, deployment oversight, and quality assurance', isLeft: false },
              { number: 5, title: 'Change Management & Training', description: 'Staff training, adoption strategy, and organizational change management', isLeft: true },
              { number: 6, title: 'Continuous Optimization', description: 'Quarterly reviews, performance monitoring, and strategy updates', isLeft: false, isLast: true },
            ].map((item, index) => (
              <TimelineItem
                key={index}
                number={item.number}
                title={item.title}
                description={item.description}
                isLeft={item.isLeft}
                isLast={item.isLast}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Timeline Item Component
const TimelineItem: React.FC<TimelineItemProps> = ({ number, title, description, isLeft, isLast = false }) => {
  return (
    <div className={`mb-8 ${isLast ? '' : 'pb-8'} flex justify-center items-center`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}
      >
        <motion.div
          className={`${
            isLeft ? 'ml-auto' : 'mr-auto'
          } max-w-sm bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300`}
          whileHover={{ scale: 1.05, x: isLeft ? -10 : 10 }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="z-20"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold shadow-lg">
          {number}
        </div>
      </motion.div>
      <div className={`w-5/12 ${isLeft ? 'text-left pl-8' : 'text-right pr-8'}`} />
    </div>
  );
};

// Service Offerings Component - SEO Enhanced
const ServiceOfferings: React.FC = () => {
  const [hoverCard, setHoverCard] = useState<number | null>(null);

  const services = [
    {
      icon: <List className="text-blue-400" size={24} />,
      title: 'IT Strategy & Planning',
      description: 'Best IT strategy consulting near you - align technology initiatives with business objectives through comprehensive digital transformation roadmaps.',
      color: 'blue',
    },
    {
      icon: <Shield className="text-purple-400" size={24} />,
      title: 'Cybersecurity Consulting & Audit',
      description: 'Enterprise-grade security assessments, vulnerability management, penetration testing, and comprehensive cybersecurity solutions.',
      color: 'purple',
    },
    {
      icon: <Cloud className="text-green-400" size={24} />,
      title: 'Cloud Migration Services',
      description: 'Expert cloud consulting - seamless transition to AWS, Azure, and Google Cloud with optimized architecture and cost efficiency.',
      color: 'green',
    },
    {
      icon: <Code className="text-orange-400" size={24} />,
      title: 'Digital Transformation Consulting',
      description: 'End-to-end business modernization - legacy system upgrades, workflow automation, and digital innovation strategies.',
      color: 'orange',
    },
    {
      icon: <Server className="text-red-400" size={24} />,
      title: 'IT Infrastructure Design',
      description: 'Future-proof network architecture, scalable system solutions, and enterprise infrastructure planning and implementation.',
      color: 'red',
    },
    {
      icon: <Lock className="text-indigo-400" size={24} />,
      title: 'Compliance & Regulatory Advisory',
      description: 'GDPR, HIPAA, ISO 27001, and industry-specific compliance strategy, implementation, and audit support.',
      color: 'indigo',
    },
  ];

  return (
    <section className="py-16 bg-gray-900/60 animate-section" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8"
        >
          Our IT Consulting Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto"
        >
          Comprehensive IT consulting services including strategy planning, cybersecurity, cloud migration, digital transformation, and infrastructure design.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              onHover={() => setHoverCard(index)}
              onHoverEnd={() => setHoverCard(null)}
              isHovered={hoverCard === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  color,
  onHover,
  onHoverEnd,
  isHovered,
}) => {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-700',
    purple: 'from-purple-500 to-purple-700',
    green: 'from-green-500 to-green-700',
    orange: 'from-orange-500 to-orange-700',
    red: 'from-red-500 to-red-700',
    indigo: 'from-indigo-500 to-indigo-700',
  };

  const gradientClass = colorMap[color] || 'from-blue-500 to-blue-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        transition: { duration: 0.3 }
      }}
      onHoverStart={onHover}
      onHoverEnd={onHoverEnd}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
    >
      <div className={`h-2 bg-gradient-to-r ${gradientClass}`} />
      <div className="p-6">
        <motion.div
          className="mb-4"
          whileHover={{
            scale: 1.2,
            rotate: 10,
            transition: { duration: 0.3 }
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
        {isHovered && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm mt-2 text-blue-400"
          >
            Learn More →
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

// Why Partner With Us Component
const WhyPartnerWithUs: React.FC = () => {
  return (
    <section className="py-16 animate-section" id="why-partner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-16"
        >
          The SniperCoders Advantage
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Code className="text-blue-400" size={24} />,
              title: 'Certified IT Experts',
              description: 'AWS, Azure, Cisco, and PMP certified professionals with proven expertise',
            },
            {
              icon: <CheckCircle className="text-blue-400" size={24} />,
              title: 'Customer-First Approach',
              description: 'Dedicated account managers, SLA guarantees, and 24/7 support',
            },
            {
              icon: <Shield className="text-blue-400" size={24} />,
              title: 'Vendor Neutral Solutions',
              description: 'Technology-agnostic recommendations focused on your business needs',
            },
            {
              icon: <ArrowRight className="text-blue-400" size={24} />,
              title: 'ROI-Focused Delivery',
              description: 'Clear metrics-driven success tracking and measurable business outcomes',
            },
          ].map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        y: -10,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        transition: { duration: 0.3 }
      }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="bg-blue-900 rounded-full p-3 mb-4"
          whileHover={{
            scale: 1.2,
            rotate: 10,
            transition: { duration: 0.3 }
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

// Stats Section Component - Updated with actual numbers
const StatsSection: React.FC = () => {
  return (
    <section className="py-16 animate-section bg-gray-900/60" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-16"
        >
          SniperCoders By The Numbers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '30+', label: 'IT Projects Delivered' },
            { number: '4.9/5', label: 'Client Satisfaction Rating' },
            { number: '100%', label: 'Customer Satisfaction' },
          ].map((stat, index) => (
            <StatCard key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Stat Card Component
const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
    >
      <div className="text-center">
        <motion.p
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-blue-400 mb-2"
        >
          {number}
        </motion.p>
        <p className="text-gray-300">{label}</p>
      </div>
    </motion.div>
  );
};

// Call to Action Component - Enhanced
const CallToAction: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden animate-section" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-lg text-center relative z-10 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-blue-100 mb-4">
              Partner with SniperCoders - the best IT consulting company in India for your digital success.
            </p>
            <p className="text-lg text-blue-100 mb-8">
              Schedule a free technology assessment and discover how our expert IT consulting services can future-proof your business!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto"
            >
              Schedule Your Free IT Consultation <ChevronRight className="ml-2" size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default App;
