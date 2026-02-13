// //app/services/mobile-development/page.tsx


// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { ArrowRight, Smartphone, RefreshCw, Palette, Settings, Briefcase, LineChart, Shield, Rocket, Edit, BarChart3, Code } from 'lucide-react';
// import CountUp from 'react-countup';
// import * as THREE from 'three';
// import Footer from '@/components/Footer';


// export default  function MobileAppDevelopment() {
//   const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
//   const [hoverCard, setHoverCard] = useState<number | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Three.js setup
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Create particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particleCount = 800;
//     const posArray = new Float32Array(particleCount * 3);

//     for (let i = 0; i < particleCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 80;
//     }

//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.4,
//       color: 0x88ccff,
//       transparent: true,
//       opacity: 0.5,
//     });

//     const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particles);
//     camera.position.z = 40;

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       particles.rotation.y += 0.002;
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // Scroll-based animations
//   const { scrollYProgress } = useScroll();
//   const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0.7]);
//   const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

//   // Intersection Observer for section animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({
//               ...prev,
//               [entry.target.id]: true,
//             }));
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     document.querySelectorAll('.animate-section').forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Services data
//   const services = [
//     {
//       icon: <Smartphone className="text-white" size={24} />,
//       title: 'Native Excellence',
//       description: 'Platform-specific iOS and Android apps with smooth, native performance.',
//       color: 'from-purple-500 to-blue-500',
//       borderColor: 'purple-500',
//     },
//     {
//       icon: <RefreshCw className="text-white" size={24} />,
//       title: 'Hybrid Solutions',
//       description: 'Cross-platform apps with React Native and Flutter for optimal performance.',
//       color: 'from-blue-500 to-teal-500',
//       borderColor: 'blue-500',
//     },
//     {
//       icon: <Palette className="text-white" size={24} />,
//       title: 'Design Excellence',
//       description: 'Behavior-driven UI with micro-interactions for emotional engagement.',
//       color: 'from-teal-500 to-emerald-500',
//       borderColor: 'teal-500',
//     },
//     {
//       icon: <Settings className="text-white" size={24} />,
//       title: 'Lifecycle Management',
//       description: 'Continuous optimization and feature evolution based on analytics.',
//       color: 'from-emerald-500 to-orange-500',
//       borderColor: 'emerald-500',
//     },
//     {
//       icon: <Briefcase className="text-white" size={24} />,
//       title: 'Enterprise Mobility',
//       description: 'Secure solutions for workflow automation and data visualization.',
//       color: 'from-orange-500 to-purple-500',
//       borderColor: 'orange-500',
//     },
//     {
//       icon: <LineChart className="text-white" size={24} />,
//       title: 'Growth Acceleration',
//       description: 'App store optimization and user acquisition strategies.',
//       color: 'from-purple-500 to-blue-500',
//       borderColor: 'purple-500',
//     },
//   ];

//   // Features data
//   const features = [
//     {
//       icon: <Rocket className="text-white" size={28} />,
//       title: 'Cutting-Edge Stack',
//       description: 'Swift, Kotlin, React Native with native module integration.',
//       color: 'from-purple-500 to-blue-500',
//     },
//     {
//       icon: <Edit className="text-white" size={28} />,
//       title: 'Precision QA Protocol',
//       description: '75+ device test matrix with performance benchmarking.',
//       color: 'from-blue-500 to-teal-500',
//     },
//     {
//       icon: <BarChart3 className="text-white" size={28} />,
//       title: 'Performance Optimized',
//       description: 'Sub-16ms frame time and minimal memory footprint.',
//       color: 'from-teal-500 to-emerald-500',
//     },
//     {
//       icon: <Shield className="text-white" size={28} />,
//       title: 'Security Architecture',
//       description: 'Zero-knowledge encryption and penetration-tested codebase.',
//       color: 'from-emerald-500 to-purple-500',
//     },
//   ];


//     const textVariants = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
//   };
  

//   return (
//     <div ref={containerRef} className="relative bg-slate-900 text-white min-h-screen overflow-hidden font-sans">
//       {/* Three.js Canvas */}
//       <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-20" style={{ opacity: backgroundOpacity.get() }} />

//       {/* Header */}
    

//       {/* Hero Section */}
//       <motion.section
//         className="container mx-auto px-4 py-24 relative z-10 text-center"
//         style={{ scale: headerScale }}
//       >
//         <motion.span
//           className="inline-block bg-purple-900/50 backdrop-blur-sm text-purple-200 px-6 py-2 rounded-full mb-6 shadow-lg"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Smartphone className="inline mr-2" size={18} />
//           Precision Mobile Development
//         </motion.span>
//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Crafted Mobile Experiences
//         </motion.h1>
//         <motion.p
//           className="text-xl max-w-3xl mx-auto mb-12 text-gray-300"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           Transform ideas into <span className="text-purple-400 font-semibold">captivating mobile solutions</span> that drive{' '}
//           <span className="text-teal-400 font-semibold">business growth</span>.
//         </motion.p>
//         <div className="flex justify-center gap-8 mb-20">
//           {[
//             { end: 120, suffix: '+', label: 'Precision Apps', color: 'from-purple-400 to-blue-400' },
//             { end: 4.9, suffix: '/5', label: 'Client Satisfaction', color: 'from-blue-400 to-teal-400', decimals: 1 },
//             { end: 3, suffix: 'x', label: 'ROI Average', color: 'from-teal-400 to-purple-400' },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
//             >
//               <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
//                 <CountUp end={stat.end} duration={2} suffix={stat.suffix} decimals={stat.decimals} />
//               </div>
//               <div className="text-gray-400">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Development Lifecycle */}
//       <section className="container mx-auto px-4 py-12 relative z-10 animate-section" id="lifecycle">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: -30 }}
//           animate={isVisible.lifecycle ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.8 }}
//         >
//           Our Precision Development Approach
//         </motion.h2>
//         <div className="relative max-w-4xl mx-auto">
//           <motion.div
//             className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-teal-500"
//             initial={{ height: 0 }}
//             animate={isVisible.lifecycle ? { height: '100%' } : { height: 0 }}
//             transition={{ duration: 1.5 }}
//           />
//           <div className="space-y-24 relative">
//             {[
//               { title: 'Strategic Discovery', desc: 'Analyze business goals and user behaviors.', icon: <Shield size={24} />, color: 'from-purple-500 to-blue-500', side: 'right' },
//               { title: 'UX Architecture', desc: 'Design interactive wireframes and systems.', icon: <Palette size={24} />, color: 'from-blue-500 to-blue-600', side: 'left' },
//               { title: 'Precision Development', desc: 'Clean code with agile iterations.', icon: <Code size={24} />, color: 'from-blue-500 to-teal-500', side: 'right' },
//               { title: 'Advanced Quality Control', desc: 'Automated testing and device validation.', icon: <RefreshCw size={24} />, color: 'from-teal-500 to-teal-600', side: 'left' },
//               { title: 'Strategic Deployment', desc: 'App store optimization and rollout.', icon: <Rocket size={24} />, color: 'from-teal-500 to-purple-500', side: 'right' },
//               { title: 'Continuous Evolution', desc: 'Analytics-driven enhancements.', icon: <LineChart size={24} />, color: 'from-purple-500 to-purple-600', side: 'left' },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-center relative"
//                 initial={{ x: item.side === 'right' ? -100 : 100, opacity: 0 }}
//                 animate={isVisible.lifecycle ? { x: 0, opacity: 1 } : { x: item.side === 'right' ? -100 : 100, opacity: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//               >
//                 <div className={`w-1/2 ${item.side === 'right' ? 'pr-12 text-right' : 'pl-12'}`}>
//                   <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl">
//                     <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
//                     <p className="text-gray-300">{item.desc}</p>
//                   </div>
//                 </div>
//                 <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
//                   <motion.div
//                     className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
//                     initial={{ scale: 0 }}
//                     animate={isVisible.lifecycle ? { scale: 1 } : { scale: 0 }}
//                     transition={{ duration: 0.7, delay: index * 0.2 + 0.2 }}
//                     whileHover={{ scale: 1.2 }}
//                   >
//                     {item.icon}
//                   </motion.div>
//                 </div>
//                 <div className={`w-1/2 ${item.side === 'right' ? 'pl-12' : 'pr-12'}`}></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="container mx-auto px-4 py-24 relative z-10 animate-section" id="advantages">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: -30 }}
//           animate={isVisible.advantages ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.8 }}
//         >
//           The SniperCoders Advantage
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 shadow-xl"
//               initial={{ y: 50, opacity: 0 }}
//               animate={isVisible.advantages ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               whileHover={{
//                 scale: 1.05,
//                 x: index % 2 === 0 ? 10 : -10,
//                 boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
//               }}
//             >
//               <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl inline-block mb-6 shadow-lg`}>
//                 {feature.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
//               <p className="text-gray-300">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="container mx-auto px-4 py-24 relative z-10 animate-section" id="services">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: -30 }}
//           animate={isVisible.services ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.8 }}
//         >
//           Our Services
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-${service.borderColor}/10 shadow-lg`}
//               initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
//               animate={isVisible.services ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               whileHover={{
//                 scale: 1.05,
//                 x: index % 2 === 0 ? 10 : -10,
//                 boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
//               }}
//               onHoverStart={() => setHoverCard(index)}
//               onHoverEnd={() => setHoverCard(null)}
//             >
//               <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl inline-block mb-6 shadow-lg`}>
//                 {service.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
//               <p className="text-gray-300">{service.description}</p>
//               {hoverCard === index && (
//                 <motion.p
//                   className="text-sm mt-2 text-gray-300"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   Explore More
//                 </motion.p>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="container mx-auto px-4 py-24 relative z-10">
//         <motion.div
//           className="bg-gradient-to-r from-purple-600/90 to-teal-600/90 backdrop-blur-sm rounded-3xl p-16 text-center shadow-2xl"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-white mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Ready for Mobile Excellence?
//           </motion.h2>
//           <motion.p
//             className="text-xl text-white mb-10 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Craft an app that elevates your brand. Begin with a strategic consultation.
//           </motion.p>
//           <motion.button
//             className="bg-white text-slate-900 font-bold py-4 px-8 rounded-xl flex items-center gap-3 mx-auto shadow-xl"
//             whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span>Begin Your Mobile Transformation</span>
//             <ArrowRight size={20} />
//           </motion.button>
//         </motion.div>
//       </section>

//   <Footer />  
    

//     </div>
//   );
// }













'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Smartphone, RefreshCw, Palette, Settings, Briefcase, LineChart, Shield, Rocket, Edit, BarChart3, Code } from 'lucide-react';
import CountUp from 'react-countup';
import * as THREE from 'three';
import Footer from '@/components/Footer';

export default function MobileAppDevelopment() {
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
    const particleCount = 800;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 80;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.4,
      color: 0x88ccff,
      transparent: true,
      opacity: 0.5,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    camera.position.z = 40;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.002;
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
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0.7]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

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

  // Services data - SEO optimized
  const services = [
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: 'Native iOS & Android App Development',
      description: 'Best app development agency in India - platform-specific iOS and Android apps with smooth, native performance and superior user experience.',
      color: 'from-purple-500 to-blue-500',
      borderColor: 'purple-500',
    },
    {
      icon: <RefreshCw className="text-white" size={24} />,
      title: 'Cross-Platform App Development',
      description: 'Expert hybrid solutions with React Native and Flutter - delivering cost-effective apps that work seamlessly across all devices.',
      color: 'from-blue-500 to-teal-500',
      borderColor: 'blue-500',
    },
    {
      icon: <Palette className="text-white" size={24} />,
      title: 'Mobile App UI/UX Design',
      description: 'Award-winning app design near you - behavior-driven interfaces with micro-interactions that create emotional engagement and boost conversions.',
      color: 'from-teal-500 to-emerald-500',
      borderColor: 'teal-500',
    },
    {
      icon: <Settings className="text-white" size={24} />,
      title: 'App Maintenance & Support',
      description: 'Continuous app optimization and lifecycle management - feature evolution based on real-time analytics and user feedback.',
      color: 'from-emerald-500 to-orange-500',
      borderColor: 'emerald-500',
    },
    {
      icon: <Briefcase className="text-white" size={24} />,
      title: 'Enterprise Mobile Solutions',
      description: 'Best enterprise app development near you - secure business applications for workflow automation, data visualization, and team collaboration.',
      color: 'from-orange-500 to-purple-500',
      borderColor: 'orange-500',
    },
    {
      icon: <LineChart className="text-white" size={24} />,
      title: 'App Marketing & Growth',
      description: 'Complete digital marketing for apps - App Store Optimization (ASO), user acquisition strategies, and growth acceleration services.',
      color: 'from-purple-500 to-blue-500',
      borderColor: 'purple-500',
    },
  ];

  // Features data
  const features = [
    {
      icon: <Rocket className="text-white" size={28} />,
      title: 'Cutting-Edge Technology',
      description: 'Swift, Kotlin, React Native with seamless native module integration for best app performance.',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: <Edit className="text-white" size={28} />,
      title: 'Precision Quality Assurance',
      description: '75+ device test matrix with comprehensive performance benchmarking and automated testing.',
      color: 'from-blue-500 to-teal-500',
    },
    {
      icon: <BarChart3 className="text-white" size={28} />,
      title: 'Performance Optimized Apps',
      description: 'Sub-16ms frame time, minimal memory footprint, and lightning-fast load times guaranteed.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      icon: <Shield className="text-white" size={28} />,
      title: 'Enterprise-Grade Security',
      description: 'Zero-knowledge encryption, penetration-tested codebase, and compliance with industry standards.',
      color: 'from-emerald-500 to-purple-500',
    },
  ];


  return (
    <div ref={containerRef} className="relative bg-slate-900 text-white min-h-screen overflow-hidden font-sans">
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-20" style={{ opacity: backgroundOpacity.get() }} />

      {/* Hero Section - SEO Optimized */}
      <motion.section
        className="container mx-auto px-4 py-24 relative z-10 text-center"
        style={{ scale: headerScale }}
      >
        <motion.span
          className="inline-block bg-purple-900/50 backdrop-blur-sm text-purple-200 px-6 py-2 rounded-full mb-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Smartphone className="inline mr-2" size={18} />
          Best App Development Agency in India
        </motion.span>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Best App Development Near You
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto mb-4 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          SniperCoders - Your trusted <span className="text-purple-400 font-semibold">software and IT company in India</span>, specializing in best mobile app development for businesses and startups.
        </motion.p>
        <motion.p
          className="text-lg max-w-3xl mx-auto mb-12 text-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Transform your ideas into <span className="text-teal-400 font-semibold">captivating mobile applications</span> with our custom coded app development, business app solutions, and innovative eCommerce mobile apps that drive real business growth.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {[
            { end: 30, suffix: '+', label: 'Mobile Apps Delivered', color: 'from-purple-400 to-blue-400' },
            { end: 4.9, suffix: '/5', label: 'Client Satisfaction', color: 'from-blue-400 to-teal-400', decimals: 1 },
            { end: 100, suffix: '%', label: 'Customer Satisfaction', color: 'from-teal-400 to-purple-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-slate-700/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                <CountUp end={stat.end} duration={2} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose SniperCoders - NEW SECTION */}
      <section className="container mx-auto px-4 py-20 relative z-10 animate-section" id="why-choose">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible['why-choose'] ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose SniperCoders for App Development?
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible['why-choose'] ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          As the best app development agency in India, we combine technical excellence with creative innovation to deliver outstanding mobile solutions for businesses and startups across all industries.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Proven Mobile Expertise',
              desc: '30+ successful mobile apps delivered with 100% customer satisfaction',
              icon: '🚀',
            },
            {
              title: 'Local Excellence, Global Quality',
              desc: 'Best app development near you with international standards and latest technologies',
              icon: '🎯',
            },
            {
              title: 'End-to-End Solutions',
              desc: 'From concept to launch, maintenance, and digital marketing for your app',
              icon: '💎',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl text-center hover:bg-slate-700/70 transition-all border border-slate-700/30"
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible['why-choose'] ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid - SEO Enhanced */}
      <section className="container mx-auto px-4 py-24 relative z-10 animate-section" id="services">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible.services ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Our Mobile App Development Services
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible.services ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From native iOS and Android development to cross-platform solutions, we&apos;re your one-stop app development company for all mobile needs.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 shadow-lg hover:border-purple-500/50`}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={isVisible.services ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
              onHoverStart={() => setHoverCard(index)}
              onHoverEnd={() => setHoverCard(null)}
            >
              <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl inline-block mb-6 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              {hoverCard === index && (
                <motion.div
                  className="mt-4 pt-4 border-t border-slate-700/50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button className="text-purple-400 font-medium hover:text-purple-300 transition-colors flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Lifecycle */}
      <section className="container mx-auto px-4 py-20 relative z-10 animate-section" id="lifecycle">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible.lifecycle ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Our Proven App Development Process
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible.lifecycle ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          As the best website development company in India, we follow a systematic, customer-focused approach for every mobile app project.
        </motion.p>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-teal-500 hidden md:block"
            initial={{ height: 0 }}
            animate={isVisible.lifecycle ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5 }}
          />
          <div className="space-y-24 relative">
            {[
              { title: 'Strategic Discovery & Planning', desc: 'Deep analysis of your business goals, target audience, and competitive landscape.', icon: <Shield size={24} />, color: 'from-purple-500 to-blue-500', side: 'right' },
              { title: 'UX/UI Design Architecture', desc: 'Interactive wireframes, prototypes, and design systems for optimal user experience.', icon: <Palette size={24} />, color: 'from-blue-500 to-blue-600', side: 'left' },
              { title: 'Custom App Development', desc: 'Clean, scalable code with agile methodology and regular client updates.', icon: <Code size={24} />, color: 'from-blue-500 to-teal-500', side: 'right' },
              { title: 'Rigorous Quality Assurance', desc: 'Automated testing, device validation, and performance optimization.', icon: <RefreshCw size={24} />, color: 'from-teal-500 to-teal-600', side: 'left' },
              { title: 'App Store Launch & Optimization', desc: 'Strategic deployment with App Store Optimization (ASO) for maximum visibility.', icon: <Rocket size={24} />, color: 'from-teal-500 to-purple-500', side: 'right' },
              { title: 'Ongoing Support & Growth', desc: 'Continuous maintenance, updates, and analytics-driven enhancements.', icon: <LineChart size={24} />, color: 'from-purple-500 to-purple-600', side: 'left' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center relative"
                initial={{ x: item.side === 'right' ? -100 : 100, opacity: 0 }}
                animate={isVisible.lifecycle ? { x: 0, opacity: 1 } : { x: item.side === 'right' ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`w-full md:w-1/2 ${item.side === 'right' ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-8 md:mb-0`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-slate-700/30 hover:bg-slate-700/70 transition-all">
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                  <motion.div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={isVisible.lifecycle ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.2 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <div className={`hidden md:block md:w-1/2 ${item.side === 'right' ? 'md:pl-12' : 'md:pr-12'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The SniperCoders Advantage */}
      <section className="container mx-auto px-4 py-24 relative z-10 animate-section" id="advantages">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible.advantages ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          The SniperCoders Technical Advantage
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible.advantages ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What sets us apart as the best app development agency - cutting-edge technology, rigorous quality standards, and customer-first approach.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 shadow-xl hover:border-purple-500/50"
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible.advantages ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
            >
              <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl inline-block mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* App Types We Build - NEW SEO SECTION */}
      <section className="container mx-auto px-4 py-20 relative z-10 animate-section" id="app-types">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible['app-types'] ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Mobile App Solutions We Build
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible['app-types'] ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            'Best Custom iOS App Development Near Me',
            'Best Android App Development Near Me',
            'Cross-Platform Mobile Apps (React Native, Flutter)',
            'Business Mobile Applications',
            'eCommerce Mobile Apps & Shopping Apps',
            'Enterprise Mobility Solutions',
            'Social Media & Community Apps',
            'On-Demand Service Apps (Uber-like)',
            'Healthcare & Fitness Mobile Apps',
            'Educational & E-Learning Apps',
            'Food Delivery & Restaurant Apps',
            'Real Estate & Property Apps',
          ].map((appType, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/30 hover:border-purple-500/50 transition-all"
              initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              animate={isVisible['app-types'] ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200">{appType}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA - Enhanced */}
      <section className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          className="bg-gradient-to-r from-purple-600/90 to-teal-600/90 backdrop-blur-sm rounded-3xl p-16 text-center shadow-2xl border border-purple-500/20 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="relative z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Build Your Dream Mobile App?
            </motion.h2>
            <motion.p
              className="text-xl text-white mb-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Partner with SniperCoders - the best app development agency in India for your mobile success story.
            </motion.p>
            <motion.p
              className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Get started with a free consultation and discover how we can transform your business with our custom app development, innovative designs, and comprehensive digital marketing services.
            </motion.p>
            <motion.button
              className="bg-white text-slate-900 font-bold py-4 px-10 rounded-xl flex items-center gap-3 mx-auto shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule Your Free Consultation Today</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}