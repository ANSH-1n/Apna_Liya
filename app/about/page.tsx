

// app/about/page.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import Image from "next/image";
import { ChevronRight, Code, Smartphone, Globe, TrendingUp, Award, Users } from "lucide-react";
import Footer from "@/components/Footer";

interface BubbleProps {
  id: number;
  size: number;
  left: number;
  animationDuration: number;
  delay: number;
}

export default function SniperCodersWebsite() {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);
  const mountRef = useRef<HTMLDivElement>(null);

  // Three.js setup
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const mount = mountRef.current;
    mount.appendChild(renderer.domElement);

    const particleCount = 100;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
      colors[i] = Math.random();
      colors[i + 1] = Math.random();
      colors[i + 2] = Math.random();
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.002;
      camera.position.x = Math.sin(Date.now() * 0.001) * 50;
      camera.position.y = Math.cos(Date.now() * 0.001) * 20;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 10,
      left: Math.random() * 100,
      animationDuration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
    setBubbles(newBubbles);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, rotateX: 10 },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 10px 20px rgba(34, 211, 238, 0.28)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-white relative overflow-hidden">
      {/* Three.js Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0 opacity-50" />

      {/* Animated Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-blue-500/20 z-1"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: "-100px",
          }}
          animate={{ y: -1000, opacity: [0.3, 0] }}
          transition={{
            duration: bubble.animationDuration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="py-16 relative z-10 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient"
            >
              SniperCoders
            </motion.h1>
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-300 mb-6"
            >
              Best Software &amp; IT Company in India
            </motion.p>
            
            <div className="w-full max-w-6xl mx-auto p-8 flex items-center justify-between bg-gradient-to-r from-gray-900/80 to-blue-900/60 rounded-2xl border border-blue-500/30 backdrop-blur-sm shadow-2xl">
              <div className="flex-1 pr-6">
                <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                  At <span className="text-blue-400 font-semibold">SniperCoders</span>, the <span className="text-purple-400 font-semibold">best software and IT company in India</span>, we specialize in turning visionary ideas into reality. As a leading <span className="text-cyan-400 font-semibold">IT agency near me</span> in Bangalore, our expertise helps businesses and startups transform aspirations into tangible digital solutions. With <span className="text-pink-400 font-semibold">30+ successful projects delivered</span> across India, we focus on customer satisfaction and paving the way for your future growth.
                </p>
                
                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">30+</div>
                    <div className="text-xs text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">100%</div>
                    <div className="text-xs text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400">24/7</div>
                    <div className="text-xs text-gray-400">Support</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 relative">
                <div
                  className={`
                    w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-400
                    transition-all duration-1000 ease-in-out
                    transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 hover:border-purple-400
                    ${isAnimating ? "scale-100 rotate-0" : "scale-95 rotate-12"}
                  `}
                >
                  <Image
                    src="/images/logo.png"
                    alt="SniperCoders - Best Software Company in India"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <motion.div 
              className="flex space-x-4 mt-8"
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              {[
                {
                  color: "from-pink-500 to-purple-500",
                  hover: "from-pink-600 to-purple-600",
                  icon: "github",
                  label: "GitHub"
                },
                {
                  color: "from-red-500 to-red-700",
                  hover: "from-red-600 to-red-800",
                  icon: "youtube",
                  label: "YouTube"
                },
                {
                  color: "from-blue-500 to-blue-700",
                  hover: "from-blue-600 to-blue-800",
                  icon: "twitter",
                  label: "Twitter"
                },
                {
                  color: "from-blue-600 to-blue-800",
                  hover: "from-blue-700 to-blue-900",
                  icon: "facebook",
                  label: "Facebook"
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className={`bg-gradient-to-r ${social.color} hover:${social.hover} p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {social.icon === "github" && (
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    )}
                    {social.icon === "youtube" && (
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    )}
                    {social.icon === "twitter" && (
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    )}
                    {social.icon === "facebook" && (
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section id="services" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center text-gray-300 max-w-3xl mx-auto mb-12"
          >
            As the <span className="text-blue-400 font-semibold">best website development company near me in India</span>, we offer comprehensive digital solutions tailored to your business needs.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Software Development",
                description: "Enterprise-grade custom software solutions designed for scalability and performance.",
                icon: <Code className="w-8 h-8" />,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Website Development",
                description: "Best website development near me including custom coded websites, business websites, and eCommerce solutions.",
                icon: <Globe className="w-8 h-8" />,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Mobile App Development",
                description: "Best app development agency near me in India, creating native and cross-platform mobile applications.",
                icon: <Smartphone className="w-8 h-8" />,
                gradient: "from-green-500 to-teal-500"
              },
              {
                title: "IT Consulting",
                description: "Strategic IT consulting services to help businesses leverage technology effectively.",
                icon: <Users className="w-8 h-8" />,
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "Digital Marketing",
                description: "Best content creation and video editing company near me, offering SEO, Google Ads, Meta Ads, and social media marketing.",
                icon: <TrendingUp className="w-8 h-8" />,
                gradient: "from-pink-500 to-purple-500"
              },
              {
                title: "Quality Assurance",
                description: "Comprehensive testing and quality assurance services ensuring flawless performance.",
                icon: <Award className="w-8 h-8" />,
                gradient: "from-yellow-500 to-orange-500"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {service.title}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4"></div>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <div className="progress-bar absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 relative z-10 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient"
          >
            Join Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
              Journey
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg"
          >
            As we continue to grow and evolve, we invite you to be part of our journey. Whether you&apos;re a business looking for a technology partner, a potential team member interested in joining our mission, or a technology enthusiast wanting to stay connected, we welcome your involvement in the SniperCoders story.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "For Businesses",
                icon: "🚀",
                description:
                  "Transform your operations with our cutting-edge technology solutions tailored to your needs.",
                cta: "Schedule a Consultation",
                ctaLink: "/contact",
              },
              {
                title: "Join Our Team",
                icon: "👥",
                description:
                  "Passionate about technology? We&apos;re always looking for talented individuals to join our mission.",
                cta: "View Open Positions",
                ctaLink: "#",
              },
              {
                title: "Stay Connected",
                icon: "📧",
                description:
                  "Follow our journey and be the first to know about our latest innovations and insights.",
                cta: "Subscribe to Updates",
                ctaLink: "/showcase",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-indigo-900/60 to-purple-900/40 p-8 rounded-2xl relative overflow-hidden border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500"
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-4xl mb-6 relative z-10 shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {card.title}
                </h3>
                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">
                  {card.description}
                </p>
                <motion.a
                  href={card.ctaLink}
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-medium relative z-10 shadow-lg"
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.cta} <ChevronRight className="inline ml-2" size={20} />
                </motion.a>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-blue-500/30 to-purple-500/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="progress-bar absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient"
          >
            Our Story
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.p
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-gray-300 text-base md:text-lg leading-relaxed"
              >
                <span className="text-blue-400 font-semibold">SniperCoders</span>, recognized as one of the <span className="text-purple-400 font-semibold">best website development companies near me in India</span>, was founded in 2025 with a vision to transform how businesses leverage technology in today&apos;s digital landscape. As a trusted <span className="text-cyan-400 font-semibold">software agency</span> in Bangalore, we recognized that many businesses were struggling to harness the full potential of digital technologies, and our mission is to bridge this gap with innovative, tailored solutions.
              </motion.p>
              <motion.p
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-base md:text-lg leading-relaxed"
              >
                Despite being a young company, our foundation is built on the extensive experience and expertise of our founder and team. Prior to establishing SniperCoders as the <span className="text-pink-400 font-semibold">best software and IT company in India</span>, we accumulated over three years of invaluable industry experience, working with diverse clients and mastering the intricacies of <span className="text-blue-400 font-semibold">custom coded websites</span>, <span className="text-purple-400 font-semibold">business websites</span>, <span className="text-cyan-400 font-semibold">mobile app development</span>, <span className="text-pink-400 font-semibold">digital marketing</span>, and innovative technology solutions.
              </motion.p>
              <motion.p
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-base md:text-lg leading-relaxed"
              >
                The name &quot;<span className="text-blue-400 font-semibold">SniperCoders</span>&quot; reflects who we are—sharp, focused, and creative. We blend the precision of coding with out-of-the-box thinking to build smart solutions that solve real problems for our clients. As the <span className="text-purple-400 font-semibold">best app development agency near me in India</span>, we&apos;re committed to delivering excellence in every project.
              </motion.p>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/TeamWork.jpg"
                  alt="SniperCoders Team - Best Software Company in India"
                  width={600}
                  height={400}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-purple-500/20 rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-gray-900/80 to-blue-900/40 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient"
          >
            Why Choose SniperCoders
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  "Local Expertise with Global Standards",
                  "End-to-End Solutions",
                  "Client-Focused Approach",
                  "Technical Excellence",
                  "Affordable Quality",
                  "Ongoing Support",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-2 rounded-full mr-4 mt-1 flex-shrink-0 shadow-lg">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-xl text-gray-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Social Media Marketing",
                  description: "Best content creation and video editing services",
                  img: "/images/socialEngag.jpg",
                },
                {
                  title: "Web Development",
                  description: "Custom coded websites and eCommerce solutions",
                  img: "/images/webInnovation.jpg",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="group bg-gray-800/80 rounded-2xl overflow-hidden transform transition-all duration-300 shadow-2xl relative border border-gray-700 hover:border-blue-500"
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={300}
                      height={224}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 group-hover:from-cyan-400 group-hover:to-pink-500 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                  </div>
                  <div className="progress-bar absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Businesses */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Transforming
                </span>{" "}
                Businesses
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  Through
                </span>{" "}
                Technology
              </motion.h2>
              <motion.p
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed"
              >
                <span className="text-blue-400 font-semibold">SniperCoders</span> is a full-service technology firm providing innovative digital solutions to help businesses thrive in today&apos;s competitive landscape. From <span className="text-purple-400 font-semibold">best website development near me</span> and <span className="text-cyan-400 font-semibold">mobile app development</span> to <span className="text-pink-400 font-semibold">digital marketing</span> services including <span className="text-blue-400 font-semibold">SEO, Google Ads, Meta Ads, and social media marketing</span>, we deliver tailored technology services that drive growth, enhance operational efficiency, and empower digital transformation across industries.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "App Development",
                  description: "Best app development agency near me creating innovative mobile solutions",
                  img: "/images/mobileAppDevelop.jpg",
                  color: "blue",
                },
                {
                  title: "Mobile Experiences",
                  description: "Native & cross-platform applications",
                  img: "/images/mobileExp.png",
                  color: "green",
                },
                {
                  title: "Digital Marketing",
                  description: "SEO, Google Ads, Meta Ads & social media marketing services",
                  img: "/images/digitalStrategy.png",
                  color: "purple",
                  colSpan: true,
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className={`group bg-gradient-to-br from-${
                    card.color
                  }-900/40 to-${card.color}-800/20 p-6 rounded-2xl border-2 border-${
                    card.color
                  }-800/50 hover:border-${
                    card.color
                  }-500 hover:shadow-2xl hover:shadow-${
                    card.color
                  }-500/30 transition-all duration-300 transform relative overflow-hidden ${
                    card.colSpan ? "col-span-2" : ""
                  }`}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={card.colSpan ? 600 : 300}
                      height={card.colSpan ? 128 : 192}
                      className={`w-full ${
                        card.colSpan ? "h-36" : "h-52"
                      } object-cover group-hover:scale-110 transition-transform duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                  <div className="progress-bar absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
 <Footer />

      {/* CSS Animation */}
      <style jsx>{`
        .progress-bar {
          transform-origin: left;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}