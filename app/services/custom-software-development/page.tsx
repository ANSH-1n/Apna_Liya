// //app/services/custom-software-development/page.tsx

// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import { motion, useScroll, useTransform, Variants } from "framer-motion";
// import {
//   Code,
//   Database,
//   Server,
//   Zap,
//   Users,
//   Shield,
//   BarChart,
// } from "lucide-react";
// import * as THREE from "three";
// import Footer from '@/components/Footer';



// // Define interfaces for userData
// interface MeshUserData {
//   index: number;
//   originalY: number;
//   hover: boolean;
// }

// interface PointsUserData {
//   velocities: Float32Array;
//   index: number;
//   hover: boolean;
// }

// // Define component
// const SniperCodersWebsite: React.FC = () => {
//   const [scrollY, setScrollY] = useState<number>(0);
//   const canvasRef = useRef<HTMLDivElement>(null);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number | null>(null);
//   const modelsRef = useRef<THREE.Mesh[]>([]);
//   const particleSystemsRef = useRef<THREE.Points[]>([]);

//   // Scroll-based animations
//   const { scrollYProgress } = useScroll({ target: scrollRef });
//   const cameraZ = useTransform(scrollYProgress, [0, 1], [6, 10]);
//   const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.8]);

//   // Three.js setup
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Scene setup
//     const scene: THREE.Scene = new THREE.Scene();
//     const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);

//     // Store canvasRef.current in a variable to avoid issues in cleanup
//     const canvasElement: HTMLDivElement = canvasRef.current;
//     canvasElement.appendChild(renderer.domElement);

//     // Models and particles
//     const models: THREE.Mesh[] = [];
//     const particleSystems: THREE.Points[] = [];
//     const geometries: THREE.BufferGeometry[] = [
//       new THREE.OctahedronGeometry(0.7, 0),
//       new THREE.TorusGeometry(0.6, 0.2, 16, 100),
//       new THREE.DodecahedronGeometry(0.65, 0),
//     ];
//     const colors: number[] = [0x8b5cf6, 0x06b6d4, 0xec4899];

//     geometries.forEach((geometry: THREE.BufferGeometry, index: number) => {
//       const material: THREE.MeshStandardMaterial = new THREE.MeshStandardMaterial({
//         color: colors[index % colors.length],
//         emissive: colors[index % colors.length],
//         emissiveIntensity: 0.4,
//         roughness: 0.4,
//         metalness: 0.7,
//         transparent: true,
//         opacity: 0.85,
//       });
//       const model: THREE.Mesh = new THREE.Mesh(geometry, material);
//       const angle: number = (index / geometries.length) * Math.PI * 2;
//       const radius: number = 5;
//       model.position.x = Math.cos(angle) * radius;
//       model.position.y = Math.sin(angle) * radius * 0.6;
//       model.position.z = -6;
//       model.userData = { index, originalY: model.position.y, hover: false } as MeshUserData;
//       models.push(model);
//       scene.add(model);

//       // Particle System
//       const particleCount: number = 50;
//       const particlesGeometry: THREE.BufferGeometry = new THREE.BufferGeometry();
//       const posArray: Float32Array = new Float32Array(particleCount * 3);
//       const velocities: Float32Array = new Float32Array(particleCount * 3);
//       for (let i = 0; i < particleCount * 3; i += 3) {
//         posArray[i] = model.position.x + (Math.random() - 0.5) * 1.5;
//         posArray[i + 1] = model.position.y + (Math.random() - 0.5) * 1.5;
//         posArray[i + 2] = model.position.z + (Math.random() - 0.5) * 1.5;
//         velocities[i] = (Math.random() - 0.5) * 0.015;
//         velocities[i + 1] = (Math.random() - 0.5) * 0.015;
//         velocities[i + 2] = (Math.random() - 0.5) * 0.015;
//       }
//       particlesGeometry.setAttribute(
//         "position",
//         new THREE.BufferAttribute(posArray, 3)
//       );
//       const particleMaterial: THREE.PointsMaterial = new THREE.PointsMaterial({
//         color: colors[index % colors.length],
//         size: 0.08,
//         transparent: true,
//         opacity: 0.6,
//         blending: THREE.AdditiveBlending,
//       });
//       const particleSystem: THREE.Points = new THREE.Points(
//         particlesGeometry,
//         particleMaterial
//       );
//       particleSystem.userData = { velocities, index, hover: false } as PointsUserData;
//       particleSystems.push(particleSystem);
//       scene.add(particleSystem);
//     });

//     // Store in ref for access in event handlers
//     modelsRef.current = models;
//     particleSystemsRef.current = particleSystems;

//     // Interactive Particle Field (Background Network)
//     const nodeCount: number = 100;
//     const nodesGeometry: THREE.BufferGeometry = new THREE.BufferGeometry();
//     const nodePositions: Float32Array = new Float32Array(nodeCount * 3);
//     const nodeVelocities: Float32Array = new Float32Array(nodeCount * 3);
//     for (let i = 0; i < nodeCount * 3; i += 3) {
//       nodePositions[i] = (Math.random() - 0.5) * 20;
//       nodePositions[i + 1] = (Math.random() - 0.5) * 15;
//       nodePositions[i + 2] = (Math.random() - 0.5) * 10;
//       nodeVelocities[i] = (Math.random() - 0.5) * 0.01;
//       nodeVelocities[i + 1] = (Math.random() - 0.5) * 0.01;
//       nodeVelocities[i + 2] = (Math.random() - 0.5) * 0.01;
//     }
//     nodesGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(nodePositions, 3)
//     );
//     const nodeMaterial: THREE.PointsMaterial = new THREE.PointsMaterial({
//       color: 0x22d3ee,
//       size: 0.1,
//       transparent: true,
//       opacity: 0.5,
//       blending: THREE.AdditiveBlending,
//     });
//     const nodeSystem: THREE.Points = new THREE.Points(nodesGeometry, nodeMaterial);
//     scene.add(nodeSystem);

//     // Dynamic Lines
//     const lineMaterial: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({
//       color: 0x22d3ee,
//       transparent: true,
//       opacity: 0.2,
//     });
//     const lines: THREE.Line[] = [];

//     const updateLines = (): void => {
//       lines.forEach((line: THREE.Line) => scene.remove(line));
//       lines.length = 0;
//       const positions: Float32Array = nodePositions;
//       for (let i = 0; i < nodeCount; i++) {
//         for (let j = i + 1; j < nodeCount; j++) {
//           const dist: number = Math.sqrt(
//             Math.pow(positions[i * 3] - positions[j * 3], 2) +
//               Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
//               Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
//           );
//           if (dist < 3) {
//             const geometry: THREE.BufferGeometry = new THREE.BufferGeometry().setFromPoints([
//               new THREE.Vector3(
//                 positions[i * 3],
//                 positions[i * 3 + 1],
//                 positions[i * 3 + 2]
//               ),
//               new THREE.Vector3(
//                 positions[j * 3],
//                 positions[j * 3 + 1],
//                 positions[j * 3 + 2]
//               ),
//             ]);
//             const line: THREE.Line = new THREE.Line(geometry, lineMaterial);
//             lines.push(line);
//             scene.add(line);
//           }
//         }
//       }
//     };

//     // Lighting
//     const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0x606060, 0.6);
//     scene.add(ambientLight);
//     const directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 5, 5);
//     scene.add(directionalLight);
//     const pointLight: THREE.PointLight = new THREE.PointLight(0x22d3ee, 1.5, 50);
//     pointLight.position.set(0, 5, 5);
//     scene.add(pointLight);

//     // Camera position
//     camera.position.z = 6;

//     // Mouse interaction
//     const mouse: THREE.Vector2 = new THREE.Vector2();
//     const windowHalf: THREE.Vector2 = new THREE.Vector2(
//       window.innerWidth / 2,
//       window.innerHeight / 2
//     );

//     const handleMouseMove = (event: MouseEvent): void => {
//       mouse.x = (event.clientX - windowHalf.x) / windowHalf.x;
//       mouse.y = (event.clientY - windowHalf.y) / windowHalf.y;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     // Scroll interaction
//     let targetScrollY: number = window.scrollY;
//     let currentScrollY: number = window.scrollY;

//     const handleScroll = (): void => {
//       targetScrollY = window.scrollY;
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Animation loop
//     const animate = (): void => {
//       animationRef.current = requestAnimationFrame(animate);

//       // Smooth scroll effect
//       currentScrollY += (targetScrollY - currentScrollY) * 0.1;

//       // Update models
//       models.forEach((model: THREE.Mesh, index: number) => {
//         const angle: number =
//           (index / models.length) * Math.PI * 2 + currentScrollY * 0.0015;
//         const radius: number = 5 + Math.sin(currentScrollY * 0.004) * 1;
//         model.position.x = Math.cos(angle) * radius;
//         model.position.y =
//           (model.userData as MeshUserData).originalY +
//           Math.sin(currentScrollY * 0.004 + index) * 1;
//         model.position.z = -6 + Math.cos(currentScrollY * 0.003 + index) * 1.5;

//         // Hover effect
//         const hoverScale: number = (model.userData as MeshUserData).hover ? 1.3 : 1;
//         model.scale.setScalar(
//           hoverScale + Math.sin(Date.now() * 0.001 + index) * 0.08
//         );
//         model.rotation.x += (model.userData as MeshUserData).hover ? 0.025 : 0.01;
//         model.rotation.y += (model.userData as MeshUserData).hover ? 0.03 : 0.012;
//         (model.material as THREE.MeshStandardMaterial).emissiveIntensity = (model
//           .userData as MeshUserData).hover
//           ? 0.8
//           : 0.4;
//       });

//       // Update particle systems
//       particleSystems.forEach((system: THREE.Points) => {
//         const positions: Float32Array = system.geometry.attributes.position
//           .array as Float32Array;
//         const velocities: Float32Array = (system.userData as PointsUserData).velocities;
//         const model: THREE.Mesh = models[(system.userData as PointsUserData).index];
//         const hover: boolean = (system.userData as PointsUserData).hover;
//         for (let i = 0; i < positions.length; i += 3) {
//           positions[i] += velocities[i] * (hover ? 1.4 : 1);
//           positions[i + 1] += velocities[i + 1] * (hover ? 1.4 : 1);
//           positions[i + 2] += velocities[i + 2] * (hover ? 1.4 : 1);
//           const dist: number = Math.sqrt(
//             Math.pow(positions[i] - model.position.x, 2) +
//               Math.pow(positions[i + 1] - model.position.y, 2) +
//               Math.pow(positions[i + 2] - model.position.z, 2)
//           );
//           if (dist > (hover ? 3 : 2)) {
//             positions[i] = model.position.x + (Math.random() - 0.5) * 1.5;
//             positions[i + 1] = model.position.y + (Math.random() - 0.5) * 1.5;
//             positions[i + 2] = model.position.z + (Math.random() - 0.5) * 1.5;
//             velocities[i] = (Math.random() - 0.5) * (hover ? 0.02 : 0.015);
//             velocities[i + 1] = (Math.random() - 0.5) * (hover ? 0.02 : 0.015);
//             velocities[i + 2] = (Math.random() - 0.5) * (hover ? 0.02 : 0.015);
//           }
//         }
//         system.geometry.attributes.position.needsUpdate = true;
//         (system.material as THREE.PointsMaterial).size = hover ? 0.1 : 0.08;
//         (system.material as THREE.PointsMaterial).opacity = hover ? 0.8 : 0.6;
//       });

//       // Update node system
//       const nodePositions: Float32Array = nodesGeometry.attributes.position
//         .array as Float32Array;
//       for (let i = 0; i < nodeCount * 3; i += 3) {
//         nodePositions[i] += nodeVelocities[i];
//         nodePositions[i + 1] += nodeVelocities[i + 1];
//         nodePositions[i + 2] += nodeVelocities[i + 2];
//         if (Math.abs(nodePositions[i]) > 10) nodeVelocities[i] *= -1;
//         if (Math.abs(nodePositions[i + 1]) > 7.5) nodeVelocities[i + 1] *= -1;
//         if (Math.abs(nodePositions[i + 2]) > 5) nodeVelocities[i + 2] *= -1;
//       }
//       nodesGeometry.attributes.position.needsUpdate = true;
//       updateLines();

//       // Camera movement
//       camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.05;
//       camera.position.y += (-mouse.y * 1.5 - camera.position.y) * 0.05;
//       camera.position.z = cameraZ.get();
//       camera.lookAt(scene.position);

//       renderer.render(scene, camera);
//     };

//     // Handle resize
//     const handleResize = (): void => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       windowHalf.set(window.innerWidth / 2, window.innerHeight / 2);
//     };

//     window.addEventListener("resize", handleResize);
//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("scroll", handleScroll);
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//       if (canvasElement && renderer.domElement) {
//         canvasElement.removeChild(renderer.domElement);
//       }
//       geometries.forEach((geom: THREE.BufferGeometry) => geom.dispose());
//     };
//   }, [cameraZ]);

//   // Animation variants
//   const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     hover: {
//       scale: 1.05,
//       y: -10,
//       rotateX: 4,
//       rotateY: 4,
//       boxShadow: "0 15px 30px rgba(34, 211, 238, 0.3)",
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//     tap: { scale: 0.98 },
//   };

//   const iconVariants: Variants = {
//     rest: { scale: 1, rotate: 0 },
//     hover: {
//       scale: 1.2,
//       rotate: 8,
//       transition: {
//         duration: 0.3,
//         type: "spring",
//         stiffness: 200,
//         damping: 10,
//       },
//     },
//   };

//   const textVariants: Variants = {
//     rest: { y: 0, opacity: 1 },
//     hover: {
//       y: -5,
//       opacity: 1,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   // Handle hover state for models and particles
//   const handleCardHover = (index: number): void => {
//     if (
//       modelsRef.current[index % modelsRef.current.length] &&
//       particleSystemsRef.current[index % particleSystemsRef.current.length]
//     ) {
//       (modelsRef.current[index % modelsRef.current.length].userData as MeshUserData).hover = true;
//       (particleSystemsRef.current[index % particleSystemsRef.current.length].userData as PointsUserData).hover = true;
//     }
//   };

//   const handleCardHoverEnd = (index: number): void => {
//     if (
//       modelsRef.current[index % modelsRef.current.length] &&
//       particleSystemsRef.current[index % particleSystemsRef.current.length]
//     ) {
//       (modelsRef.current[index % modelsRef.current.length].userData as MeshUserData).hover = false;
//       (particleSystemsRef.current[index % particleSystemsRef.current.length].userData as PointsUserData).hover = false;
//     }
//   };

//   return (
//     <div className="relative bg-gray-900 text-gray-300 min-h-screen overflow-hidden font-sans">
//       {/* Three.js Canvas */}
//       <div
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
//         style={{ opacity: backgroundOpacity.get() }}
//       />

//       <style jsx>{`
//         .animate-text {
//           background-size: 200% auto;
//           animation: textShine 2s linear infinite;
//         }

//         @keyframes textShine {
//           to {
//             background-position: 200% center;
//           }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-float-delay-1 {
//           animation: float 3s ease-in-out 0.5s infinite;
//         }

//         .animate-float-delay-2 {
//           animation: float 3s ease-in-out 1s infinite;
//         }

//         .animate-float-delay-3 {
//           animation: float 3s ease-in-out 1.5s infinite;
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }
//       `}</style>

//       <div ref={scrollRef}>
//         {/* Hero Section */}
//         <section className="py-16 md:py-24 relative">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center"
//               style={{
//                 transform: `translateY(${scrollY * 0.2}px)`,
//                 opacity: 1 - scrollY * 0.001,
//               }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="inline-block mb-4 px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full"
//               >
//                 💻 Powerful Software Solutions
//               </motion.div>
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-violet-600 bg-clip-text text-transparent animate-text"
//               >
//                 Custom Software Development
//               </motion.h1>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
//               >
//                 Transform your business with tailor-made software solutions that
//                 <span className="text-blue-400">
//                   {" "}
//                   solve your unique challenges
//                 </span>
//                 ,<span className="text-purple-400"> streamline operations</span>
//                 , and
//                 <span className="text-cyan-400"> accelerate growth</span>.
//               </motion.p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//                 className="flex flex-col md:flex-row justify-center gap-4"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-6 py-3 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
//                 >
//                   <a href="/contact" className="flex items-center">
//                     <span>Schedule a Free Consultation</span>
//                     <span className="animate-bounce">→</span>
//                   </a>
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="border border-gray-700 px-6 py-3 rounded-md hover:bg-gray-800 hover:border-cyan-500 transition-all"
//                 >
//                   Learn More
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-16 relative">
//           <div className="container mx-auto px-4">
//             <motion.div
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: {
//                   opacity: 1,
//                   transition: { staggerChildren: 0.2, delayChildren: 0.2 },
//                 },
//               }}
//               initial="hidden"
//               animate="visible"
//               className="grid grid-cols-1 md:grid-cols-4 gap-6"
//             >
//               {[
//                 {
//                   value: "250+",
//                   label: "Projects Delivered",
//                   color: "purple-400",
//                 },
//                 {
//                   value: "96%",
//                   label: "Client Satisfaction",
//                   color: "purple-400",
//                 },
//                 {
//                   value: "10+ Years",
//                   label: "Industry Experience",
//                   color: "purple-400",
//                 },
//                 {
//                   value: "30+",
//                   label: "Tech Specialists",
//                   color: "purple-400",
//                 },
//               ].map((stat, index: number) => (
//                 <motion.div
//                   key={index}
//                   variants={cardVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   onHoverStart={() => handleCardHover(index)}
//                   onHoverEnd={() => handleCardHoverEnd(index)}
//                   className={`group bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all cursor-pointer relative`}
//                 >
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-${stat.color}/20 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
//                   />
//                   <motion.div
//                     variants={textVariants}
//                     className={`text-4xl font-bold text-${stat.color} mb-2`}
//                   >
//                     {stat.value}
//                   </motion.div>
//                   <motion.div
//                     variants={textVariants}
//                     className="text-gray-400 group-hover:text-gray-100"
//                   >
//                     {stat.label}
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section className="py-16 md:py-24">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//                 Our Services
//               </h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
//               <p className="text-gray-400 max-w-2xl mx-auto">
//                 We deliver cutting-edge software solutions tailored to your
//                 business needs.
//               </p>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: {
//                   opacity: 1,
//                   transition: { staggerChildren: 0.2, delayChildren: 0.2 },
//                 },
//               }}
//               initial="hidden"
//               animate="visible"
//               className="grid grid-cols-1 md:grid-cols-3 gap-8"
//             >
//               {[
//                 {
//                   title: "Web Application Development",
//                   desc: "Scalable, responsive web applications built with modern frameworks and future-proof architecture.",
//                   icon: Code,
//                   color: "blue-400",
//                 },
//                 {
//                   title: "API Development & Integration",
//                   desc: "Robust APIs that connect your systems and enable seamless data flow across your organization.",
//                   icon: Server,
//                   color: "purple-400",
//                 },
//                 {
//                   title: "Database Architecture",
//                   desc: "Optimized database solutions designed for performance, security, and scalability.",
//                   icon: Database,
//                   color: "cyan-400",
//                 },
//               ].map((service, index: number) => (
//                 <motion.div
//                   key={index}
//                   variants={cardVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   onHoverStart={() => handleCardHover(index)}
//                   onHoverEnd={() => handleCardHoverEnd(index)}
//                   className="group"
//                 >
//                   <div
//                     className={`bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all h-full relative`}
//                   >
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-${service.color}/20 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
//                     />
//                     <motion.div
//                       variants={iconVariants}
//                       className={`w-16 h-16 bg-${service.color}/20 rounded-lg flex items-center justify-center mb-6 group-hover:animate-ping`}
//                     >
//                       <service.icon
//                         className={`w-8 h-8 text-${service.color}`}
//                       />
//                     </motion.div>
//                     <motion.h3
//                       variants={textVariants}
//                       className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300"
//                     >
//                       {service.title}
//                     </motion.h3>
//                     <motion.p
//                       variants={textVariants}
//                       className="text-gray-400 mb-4 group-hover:text-gray-100"
//                     >
//                       {service.desc}
//                     </motion.p>
//                     <motion.a
//                       href="#"
//                       variants={textVariants}
//                       className={`text-${service.color} inline-flex items-center gap-2 group-hover:gap-3 transition-all`}
//                     >
//                       Learn more{" "}
//                       <span className="group-hover:translate-x-1 transition-transform">
//                         →
//                       </span>
//                     </motion.a>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Tech Stack Section */}
//         <section className="py-16 bg-gray-800/30">
//           <div className="container mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
//             >
//               Our Technology Stack
//             </motion.h2>

//             {[
//               {
//                 title: "Frontend",
//                 items: [
//                   "React",
//                   "Angular",
//                   "Vue",
//                   "Next.js",
//                   "Svelte",
//                   "Tailwind CSS",
//                   "Bootstrap",
//                 ],
//                 color: "blue",
//               },
//               {
//                 title: "Backend",
//                 items: [
//                   "Node.js",
//                   "Python",
//                   "Django",
//                   "Flask",
//                   "Ruby on Rails",
//                   "Java",
//                   "Spring Boot",
//                   ".NET Core",
//                   "Go",
//                   "PHP",
//                   "Laravel",
//                 ],
//                 color: "green",
//               },
//               {
//                 title: "Databases",
//                 items: [
//                   "PostgreSQL",
//                   "MySQL",
//                   "MongoDB",
//                   "Redis",
//                   "SQLite",
//                   "Oracle DB",
//                   "Microsoft SQL Server",
//                   "Firebase",
//                 ],
//                 color: "yellow",
//               },
//               {
//                 title: "DevOps & Cloud",
//                 items: [
//                   "AWS",
//                   "Azure",
//                   "Google Cloud",
//                   "Docker",
//                   "Kubernetes",
//                   "Terraform",
//                   "Jenkins",
//                   "GitLab CI/CD",
//                   "GitHub Actions",
//                   "Nginx",
//                   "Apache",
//                 ],
//                 color: "blue",
//               },
//               {
//                 title: "Tools & Utilities",
//                 items: [
//                   "Git",
//                   "Figma",
//                   "Jira",
//                   "Postman",
//                   "Swagger",
//                   "ESLint",
//                   "Prettier",
//                   "Webpack",
//                   "Vite",
//                   "Babel",
//                 ],
//                 color: "purple",
//               },
//               {
//                 title: "Testing",
//                 items: [
//                   "Jest",
//                   "Mocha",
//                   "Chai",
//                   "Cypress",
//                   "Selenium",
//                   "Playwright",
//                   "JUnit",
//                   "Postman (Tests)",
//                 ],
//                 color: "red",
//               },
//             ].map((category, catIndex: number) => (
//               <motion.div
//                 key={catIndex}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: catIndex * 0.1 }}
//                 className="mb-10"
//               >
//                 <h3 className="text-xl font-semibold mb-4 text-center text-gray-200">
//                   {category.title}
//                 </h3>
//                 <motion.div
//                   variants={{
//                     hidden: { opacity: 0 },
//                     visible: {
//                       opacity: 1,
//                       transition: { staggerChildren: 0.1 },
//                     },
//                   }}
//                   initial="hidden"
//                   animate="visible"
//                   className="flex flex-wrap justify-center gap-4"
//                 >
//                   {category.items.map((tech: string, idx: number) => (
//                     <motion.div
//                       key={tech}
//                       variants={cardVariants}
//                       whileHover="hover"
//                       whileTap="tap"
//                       onHoverStart={() => handleCardHover(idx)}
//                       onHoverEnd={() => handleCardHoverEnd(idx)}
//                       className={`bg-gray-800 px-6 py-3 rounded-full text-${
//                         category.color
//                       }-${400 + (idx % 3) * 100} hover:bg-gray-700 hover:text-${
//                         category.color
//                       }-200 cursor-pointer transition-all animate-float-delay-${
//                         idx % 4
//                       } border border-gray-700/50 hover:border-cyan-500/80 relative`}
//                     >
//                       <div
//                         className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-${category.color}-500/20 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
//                       />
//                       {tech}
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section className="py-16 md:py-24">
//           <div className="container mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
//             >
//               Benefits of Custom Software
//             </motion.h2>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: {
//                   opacity: 1,
//                   transition: { staggerChildren: 0.2, delayChildren: 0.2 },
//                 },
//               }}
//               initial="hidden"
//               animate="visible"
//               className="grid grid-cols-1 md:grid-cols-4 gap-8"
//             >
//               {[
//                 {
//                   title: "Increased Efficiency",
//                   desc: "Automate repetitive tasks and streamline workflows",
//                   icon: Zap,
//                   color: "purple-500",
//                 },
//                 {
//                   title: "Enhanced User Experience",
//                   desc: "Tailored interfaces that match your exact needs",
//                   icon: Users,
//                   color: "blue-500",
//                 },
//                 {
//                   title: "Improved Security",
//                   desc: "Built-in safeguards for your sensitive data",
//                   icon: Shield,
//                   color: "green-500",
//                 },
//                 {
//                   title: "Scalable Solutions",
//                   desc: "Grow your software as your business expands",
//                   icon: BarChart,
//                   color: "cyan-500",
//                 },
//               ].map((benefit, index: number) => (
//                 <motion.div
//                   key={index}
//                   variants={cardVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   onHoverStart={() => handleCardHover(index)}
//                   onHoverEnd={() => handleCardHoverEnd(index)}
//                   className={`group bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all relative`}
//                 >
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-${benefit.color}/20 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
//                   />
//                   <motion.div
//                     variants={iconVariants}
//                     className={`text-${benefit.color} mb-4`}
//                   >
//                     <benefit.icon className="w-10 h-10" />
//                   </motion.div>
//                   <motion.h3
//                     variants={textVariants}
//                     className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300"
//                   >
//                     {benefit.title}
//                   </motion.h3>
//                   <motion.p
//                     variants={textVariants}
//                     className="text-gray-400 group-hover:text-gray-100"
//                   >
//                     {benefit.desc}
//                   </motion.p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Process Section */}
//         <section className="py-16 md:py-24 relative">
//           <div className="container mx-auto px-4">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
//             >
//               Our Development Process
//             </motion.h2>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: {
//                   opacity: 1,
//                   transition: { staggerChildren: 0.2, delayChildren: 0.2 },
//                 },
//               }}
//               initial="hidden"
//               animate="visible"
//               className="space-y-12"
//             >
//               {[
//                 {
//                   step: "Discovery & Planning",
//                   desc: "Requirements gathering and project roadmap development",
//                   number: 1,
//                 },
//                 {
//                   step: "Design & Architecture",
//                   desc: "UI/UX design and technical architecture planning",
//                   number: 2,
//                 },
//                 {
//                   step: "Development",
//                   desc: "Agile development with regular iterations and feedback",
//                   number: 3,
//                 },
//                 {
//                   step: "Quality Assurance",
//                   desc: "Comprehensive testing and bug fixing",
//                   number: 4,
//                 },
//                 {
//                   step: "Deployment",
//                   desc: "Smooth deployment to production environments",
//                   number: 5,
//                 },
//                 {
//                   step: "Maintenance & Support",
//                   desc: "Ongoing updates, improvements, and technical support",
//                   number: 6,
//                 },
//               ].map((process, index: number) => (
//                 <motion.div
//                   key={index}
//                   variants={cardVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   onHoverStart={() => handleCardHover(index)}
//                   onHoverEnd={() => handleCardHoverEnd(index)}
//                   className={`flex flex-col md:flex-row relative ${
//                     index % 2 === 0 ? "" : "md:flex-row-reverse"
//                   }`}
//                 >
//                   <div
//                     className={`md:w-1/2 ${
//                       index % 2 === 0 ? "md:pr-8" : "md:pl-8"
//                     }`}
//                   >
//                     <div
//                       className={`bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all relative group`}
//                     >
//                       <div
//                         className={`absolute left-1/2 md:${
//                           index % 2 === 0 ? "left-auto right-0" : "left-0"
//                         } transform -translate-x-1/2 md:translate-x-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold`}
//                       >
//                         {process.number}
//                       </div>
//                       <motion.h3
//                         variants={textVariants}
//                         className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300"
//                       >
//                         {process.step}
//                       </motion.h3>
//                       <motion.p
//                         variants={textVariants}
//                         className="text-gray-400 group-hover:text-gray-100"
//                       >
//                         {process.desc}
//                       </motion.p>
//                     </div>
//                   </div>
//                   <div className="md:w-1/2"></div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 bg-gradient-to-r from-violet-900/50 to-blue-900/50">
//           <div className="container mx-auto px-4 text-center">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-3xl md:text-4xl font-bold mb-6 text-white"
//             >
//               Ready to Build Your Custom Solution?
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-xl max-w-2xl mx-auto mb-8 text-gray-300"
//             >
//               {`Let's discuss your project and create software that perfectly fits your business needs.`}

//             </motion.p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-8 py-4 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2 mx-auto"
//             >
//               Schedule a Free Consultation
//               <span className="animate-bounce">→</span>
//             </motion.button>
//           </div>
//         </section>

//         {/* Footer */}
//    <Footer/>
//       </div>
//     </div>
//   );
// };

// export default SniperCodersWebsite;
















"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Zap,
  Users,
  Shield,
  BarChart,
} from "lucide-react";
import * as THREE from "three";
import Footer from '@/components/Footer';

// Define interfaces for userData
interface MeshUserData {
  index: number;
  originalY: number;
  hover: boolean;
}

interface PointsUserData {
  velocities: Float32Array;
  index: number;
  hover: boolean;
}

// Define component
const SniperCodersWebsite: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const canvasRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const modelsRef = useRef<THREE.Mesh[]>([]);
  const particleSystemsRef = useRef<THREE.Points[]>([]);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const cameraZ = useTransform(scrollYProgress, [0, 1], [6, 10]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.8]);

  // Three.js setup
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene: THREE.Scene = new THREE.Scene();
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Store canvasRef.current in a variable to avoid issues in cleanup
    const canvasElement: HTMLDivElement = canvasRef.current;
    canvasElement.appendChild(renderer.domElement);

    // Models and particles
    const models: THREE.Mesh[] = [];
    const particleSystems: THREE.Points[] = [];
    const geometries: THREE.BufferGeometry[] = [
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.TorusGeometry(0.6, 0.2, 16, 100),
      new THREE.DodecahedronGeometry(0.65, 0),
    ];
    const colors: number[] = [0x8b5cf6, 0x06b6d4, 0xec4899];

    geometries.forEach((geometry: THREE.BufferGeometry, index: number) => {
      const material: THREE.MeshStandardMaterial = new THREE.MeshStandardMaterial({
        color: colors[index % colors.length],
        emissive: colors[index % colors.length],
        emissiveIntensity: 0.4,
        roughness: 0.4,
        metalness: 0.7,
        transparent: true,
        opacity: 0.85,
      });
      const model: THREE.Mesh = new THREE.Mesh(geometry, material);
      const angle: number = (index / geometries.length) * Math.PI * 2;
      const radius: number = 5;
      model.position.x = Math.cos(angle) * radius;
      model.position.y = Math.sin(angle) * radius * 0.6;
      model.position.z = -6;
      model.userData = { index, originalY: model.position.y, hover: false } as MeshUserData;
      models.push(model);
      scene.add(model);

      // Particle System
      const particleCount: number = 50;
      const particlesGeometry: THREE.BufferGeometry = new THREE.BufferGeometry();
      const posArray: Float32Array = new Float32Array(particleCount * 3);
      const velocities: Float32Array = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = model.position.x + (Math.random() - 0.5) * 1.5;
        posArray[i + 1] = model.position.y + (Math.random() - 0.5) * 1.5;
        posArray[i + 2] = model.position.z + (Math.random() - 0.5) * 1.5;
        velocities[i] = (Math.random() - 0.5) * 0.015;
        velocities[i + 1] = (Math.random() - 0.5) * 0.015;
        velocities[i + 2] = (Math.random() - 0.5) * 0.015;
      }
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );
      const particleMaterial: THREE.PointsMaterial = new THREE.PointsMaterial({
        color: colors[index % colors.length],
        size: 0.08,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      const particleSystem: THREE.Points = new THREE.Points(
        particlesGeometry,
        particleMaterial
      );
      particleSystem.userData = { velocities, index, hover: false } as PointsUserData;
      particleSystems.push(particleSystem);
      scene.add(particleSystem);
    });

    // Store in ref for access in event handlers
    modelsRef.current = models;
    particleSystemsRef.current = particleSystems;

    // Interactive Particle Field (Background Network)
    const nodeCount: number = 100;
    const nodesGeometry: THREE.BufferGeometry = new THREE.BufferGeometry();
    const nodePositions: Float32Array = new Float32Array(nodeCount * 3);
    const nodeVelocities: Float32Array = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount * 3; i += 3) {
      nodePositions[i] = (Math.random() - 0.5) * 20;
      nodePositions[i + 1] = (Math.random() - 0.5) * 15;
      nodePositions[i + 2] = (Math.random() - 0.5) * 10;
      nodeVelocities[i] = (Math.random() - 0.5) * 0.01;
      nodeVelocities[i + 1] = (Math.random() - 0.5) * 0.01;
      nodeVelocities[i + 2] = (Math.random() - 0.5) * 0.01;
    }
    nodesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(nodePositions, 3)
    );
    const nodeMaterial: THREE.PointsMaterial = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.1,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const nodeSystem: THREE.Points = new THREE.Points(nodesGeometry, nodeMaterial);
    scene.add(nodeSystem);

    // Dynamic Lines
    const lineMaterial: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.2,
    });
    const lines: THREE.Line[] = [];

    const updateLines = (): void => {
      lines.forEach((line: THREE.Line) => scene.remove(line));
      lines.length = 0;
      const positions: Float32Array = nodePositions;
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dist: number = Math.sqrt(
            Math.pow(positions[i * 3] - positions[j * 3], 2) +
              Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
              Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
          );
          if (dist < 3) {
            const geometry: THREE.BufferGeometry = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(
                positions[i * 3],
                positions[i * 3 + 1],
                positions[i * 3 + 2]
              ),
              new THREE.Vector3(
                positions[j * 3],
                positions[j * 3 + 1],
                positions[j * 3 + 2]
              ),
            ]);
            const line: THREE.Line = new THREE.Line(geometry, lineMaterial);
            lines.push(line);
            scene.add(line);
          }
        }
      }
    };

    // Lighting
    const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0x606060, 0.6);
    scene.add(ambientLight);
    const directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    const pointLight: THREE.PointLight = new THREE.PointLight(0x22d3ee, 1.5, 50);
    pointLight.position.set(0, 5, 5);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 6;

    // Mouse interaction
    const mouse: THREE.Vector2 = new THREE.Vector2();
    const windowHalf: THREE.Vector2 = new THREE.Vector2(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

    const handleMouseMove = (event: MouseEvent): void => {
      mouse.x = (event.clientX - windowHalf.x) / windowHalf.x;
      mouse.y = (event.clientY - windowHalf.y) / windowHalf.y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Scroll interaction
    let targetScrollY: number = window.scrollY;
    let currentScrollY: number = window.scrollY;

    const handleScroll = (): void => {
      targetScrollY = window.scrollY;
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Animation loop
    const animate = (): void => {
      animationRef.current = requestAnimationFrame(animate);

      // Smooth scroll effect
      currentScrollY += (targetScrollY - currentScrollY) * 0.1;

      // Update models
      models.forEach((model: THREE.Mesh, index: number) => {
        const angle: number =
          (index / models.length) * Math.PI * 2 + currentScrollY * 0.0015;
        const radius: number = 5 + Math.sin(currentScrollY * 0.004) * 1;
        model.position.x = Math.cos(angle) * radius;
        model.position.y =
          (model.userData as MeshUserData).originalY +
          Math.sin(currentScrollY * 0.004 + index) * 1;
        model.position.z = -6 + Math.cos(currentScrollY * 0.003 + index) * 1.5;

        // Hover effect
        const hoverScale: number = (model.userData as MeshUserData).hover ? 1.3 : 1;
        model.scale.setScalar(
          hoverScale + Math.sin(Date.now() * 0.001 + index) * 0.08
        );
        model.rotation.x += (model.userData as MeshUserData).hover ? 0.025 : 0.01;
        model.rotation.y += (model.userData as MeshUserData).hover ? 0.03 : 0.012;
        (model.material as THREE.MeshStandardMaterial).emissiveIntensity = (model
          .userData as MeshUserData).hover
          ? 0.8
          : 0.4;
      });

      // Update particle systems
      particleSystems.forEach((system: THREE.Points) => {
        const positions: Float32Array = system.geometry.attributes.position
          .array as Float32Array;
        const velocities: Float32Array = (system.userData as PointsUserData).velocities;
        const model: THREE.Mesh = models[(system.userData as PointsUserData).index];
        const hover: boolean = (system.userData as PointsUserData).hover;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i] * (hover ? 1.4 : 1);
          positions[i + 1] += velocities[i + 1] * (hover ? 1.4 : 1);
          positions[i + 2] += velocities[i + 2] * (hover ? 1.4 : 1);
          const dist: number = Math.sqrt(
            Math.pow(positions[i] - model.position.x, 2) +
              Math.pow(positions[i + 1] - model.position.y, 2) +
              Math.pow(positions[i + 2] - model.position.z, 2)
          );
          if (dist > (hover ? 3 : 2)) {
            positions[i] = model.position.x + (Math.random() - 0.5) * 1.5;
            positions[i + 1] = model.position.y + (Math.random() - 0.5) * 1.5;
            positions[i + 2] = model.position.z + (Math.random() - 0.5) * 1.5;
            velocities[i] = (Math.random() - 0.5) * (hover ? 0.02 : 0.015);
            velocities[i + 1] = (Math.random() - 0.5) * (hover ? 0.02 : 0.015);
            velocities[i + 2] = (Math.random() - 0.5) * (hover ? 0.02 : 0.015);
          }
        }
        system.geometry.attributes.position.needsUpdate = true;
        (system.material as THREE.PointsMaterial).size = hover ? 0.1 : 0.08;
        (system.material as THREE.PointsMaterial).opacity = hover ? 0.8 : 0.6;
      });

      // Update node system
      const nodePositionsUpdate: Float32Array = nodesGeometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < nodeCount * 3; i += 3) {
        nodePositionsUpdate[i] += nodeVelocities[i];
        nodePositionsUpdate[i + 1] += nodeVelocities[i + 1];
        nodePositionsUpdate[i + 2] += nodeVelocities[i + 2];
        if (Math.abs(nodePositionsUpdate[i]) > 10) nodeVelocities[i] *= -1;
        if (Math.abs(nodePositionsUpdate[i + 1]) > 7.5) nodeVelocities[i + 1] *= -1;
        if (Math.abs(nodePositionsUpdate[i + 2]) > 5) nodeVelocities[i + 2] *= -1;
      }
      nodesGeometry.attributes.position.needsUpdate = true;
      updateLines();

      // Camera movement
      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 1.5 - camera.position.y) * 0.05;
      camera.position.z = cameraZ.get();
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = (): void => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      windowHalf.set(window.innerWidth / 2, window.innerHeight / 2);
    };

    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (canvasElement && renderer.domElement) {
        canvasElement.removeChild(renderer.domElement);
      }
      geometries.forEach((geom: THREE.BufferGeometry) => geom.dispose());
    };
  }, [cameraZ]);

  // Animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -10,
      rotateX: 4,
      rotateY: 4,
      boxShadow: "0 15px 30px rgba(34, 211, 238, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.98 },
  };

  const iconVariants: Variants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 8,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const textVariants: Variants = {
    rest: { y: 0, opacity: 1 },
    hover: {
      y: -5,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Handle hover state for models and particles
  const handleCardHover = (index: number): void => {
    if (
      modelsRef.current[index % modelsRef.current.length] &&
      particleSystemsRef.current[index % particleSystemsRef.current.length]
    ) {
      (modelsRef.current[index % modelsRef.current.length].userData as MeshUserData).hover = true;
      (particleSystemsRef.current[index % particleSystemsRef.current.length].userData as PointsUserData).hover = true;
    }
  };

  const handleCardHoverEnd = (index: number): void => {
    if (
      modelsRef.current[index % modelsRef.current.length] &&
      particleSystemsRef.current[index % particleSystemsRef.current.length]
    ) {
      (modelsRef.current[index % modelsRef.current.length].userData as MeshUserData).hover = false;
      (particleSystemsRef.current[index % particleSystemsRef.current.length].userData as PointsUserData).hover = false;
    }
  };

  return (
    <div className="relative bg-gray-900 text-gray-300 min-h-screen overflow-hidden font-sans">
      {/* Three.js Canvas */}
      <div
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{ opacity: backgroundOpacity.get() }}
      />

      <style jsx>{`
        .animate-text {
          background-size: 200% auto;
          animation: textShine 2s linear infinite;
        }

        @keyframes textShine {
          to {
            background-position: 200% center;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float 3s ease-in-out 0.5s infinite;
        }

        .animate-float-delay-2 {
          animation: float 3s ease-in-out 1s infinite;
        }

        .animate-float-delay-3 {
          animation: float 3s ease-in-out 1.5s infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>

      <div ref={scrollRef}>
        {/* Hero Section - SEO Optimized */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                opacity: 1 - scrollY * 0.001,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full"
              >
                💻 Best Software and IT Company in India
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-violet-600 bg-clip-text text-transparent animate-text"
              >
                Best Custom Software Development Near You
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl max-w-3xl mx-auto mb-4"
              >
                SniperCoders - Transform your business with <span className="text-blue-400">custom coded software solutions</span> that solve your unique challenges, <span className="text-purple-400">streamline operations</span>, and <span className="text-cyan-400">accelerate growth</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg max-w-3xl mx-auto mb-8 text-blue-200"
              >
                Delivering the best website development, app development, and custom software solutions for businesses and startups across India. With 30+ projects delivered and 100% customer satisfaction, we&apos;re your trusted IT partner.
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
                  className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-6 py-3 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <a href="/contact" className="flex items-center">
                    <span>Schedule a Free Consultation</span>
                    <span className="animate-bounce">→</span>
                  </a>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-700 px-6 py-3 rounded-md hover:bg-gray-800 hover:border-cyan-500 transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section - Updated with actual numbers */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {[
                {
                  value: "30+",
                  label: "Projects Delivered",
                  color: "purple-400",
                },
                {
                  value: "4.9/5",
                  label: "Client Satisfaction",
                  color: "purple-400",
                },
                {
                  value: "100%",
                  label: "Customer Satisfaction",
                  color: "purple-400",
                },
                {
                  value: "24/7",
                  label: "Support Available",
                  color: "purple-400",
                },
              ].map((stat, index: number) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => handleCardHover(index)}
                  onHoverEnd={() => handleCardHoverEnd(index)}
                  className={`group bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-gray-700/50 hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all cursor-pointer relative`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-${stat.color}/20 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
                  />
                  <motion.div
                    variants={textVariants}
                    className={`text-4xl font-bold text-${stat.color} mb-2`}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    variants={textVariants}
                    className="text-gray-400 group-hover:text-gray-100"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose SniperCoders - NEW SECTION */}
        <section className="py-16 md:py-20 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Why Choose SniperCoders?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                As the best software and IT company in India, we deliver exceptional custom software development solutions with a customer-first approach.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Proven Track Record',
                  desc: '30+ successful projects delivered across diverse industries with 100% satisfaction',
                  icon: '✨',
                },
                {
                  title: 'Local Expertise, Global Standards',
                  desc: 'Best custom software development near you with international quality',
                  icon: '🎯',
                },
                {
                  title: 'Complete IT Solutions',
                  desc: 'From custom software to web development, app development, and digital marketing',
                  icon: '🚀',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl text-center hover:bg-gray-700/70 transition-all border border-gray-700/30 hover:border-cyan-500/50"
                >
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - SEO Enhanced */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Custom Software Development Services
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We deliver cutting-edge custom software solutions tailored to your business needs - from custom coded websites to enterprise applications.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Custom Web Application Development",
                  desc: "Best website development near you - scalable, responsive web applications built with modern frameworks and future-proof architecture.",
                  icon: Code,
                  color: "blue-400",
                },
                {
                  title: "API Development & System Integration",
                  desc: "Robust APIs and seamless integrations that connect your systems and enable efficient data flow across your organization.",
                  icon: Server,
                  color: "purple-400",
                },
                {
                  title: "Database Architecture & Optimization",
                  desc: "Custom database solutions designed for maximum performance, security, and scalability for your business applications.",
                  icon: Database,
                  color: "cyan-400",
                },
              ].map((service, index: number) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => handleCardHover(index)}
                  onHoverEnd={() => handleCardHoverEnd(index)}
                  className="group"
                >
                  <div
                    className={`bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all h-full relative`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-${service.color}/20 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
                    />
                    <motion.div
                      variants={iconVariants}
                      className={`w-16 h-16 bg-${service.color}/20 rounded-lg flex items-center justify-center mb-6 group-hover:animate-ping`}
                    >
                      <service.icon
                        className={`w-8 h-8 text-${service.color}`}
                      />
                    </motion.div>
                    <motion.h3
                      variants={textVariants}
                      className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300"
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      variants={textVariants}
                      className="text-gray-400 mb-4 group-hover:text-gray-100"
                    >
                      {service.desc}
                    </motion.p>
                    <motion.a
                      href="#"
                      variants={textVariants}
                      className={`text-${service.color} inline-flex items-center gap-2 group-hover:gap-3 transition-all`}
                    >
                      Learn more{" "}
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
            >
              Our Technology Stack
            </motion.h2>

            {[
              {
                title: "Frontend Development",
                items: [
                  "React",
                  "Angular",
                  "Vue",
                  "Next.js",
                  "Svelte",
                  "Tailwind CSS",
                  "Bootstrap",
                ],
                color: "blue",
              },
              {
                title: "Backend Development",
                items: [
                  "Node.js",
                  "Python",
                  "Django",
                  "Flask",
                  "Ruby on Rails",
                  "Java",
                  "Spring Boot",
                  ".NET Core",
                  "Go",
                  "PHP",
                  "Laravel",
                ],
                color: "green",
              },
              {
                title: "Database Solutions",
                items: [
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Redis",
                  "SQLite",
                  "Oracle DB",
                  "Microsoft SQL Server",
                  "Firebase",
                ],
                color: "yellow",
              },
              {
                title: "DevOps & Cloud Infrastructure",
                items: [
                  "AWS",
                  "Azure",
                  "Google Cloud",
                  "Docker",
                  "Kubernetes",
                  "Terraform",
                  "Jenkins",
                  "GitLab CI/CD",
                  "GitHub Actions",
                  "Nginx",
                  "Apache",
                ],
                color: "blue",
              },
              {
                title: "Development Tools",
                items: [
                  "Git",
                  "Figma",
                  "Jira",
                  "Postman",
                  "Swagger",
                  "ESLint",
                  "Prettier",
                  "Webpack",
                  "Vite",
                  "Babel",
                ],
                color: "purple",
              },
              {
                title: "Quality Assurance & Testing",
                items: [
                  "Jest",
                  "Mocha",
                  "Chai",
                  "Cypress",
                  "Selenium",
                  "Playwright",
                  "JUnit",
                  "Postman (Tests)",
                ],
                color: "red",
              },
            ].map((category, catIndex: number) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: catIndex * 0.1 }}
                className="mb-10"
              >
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-200">
                  {category.title}
                </h3>
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap justify-center gap-4"
                >
                  {category.items.map((tech: string, idx: number) => (
                    <motion.div
                      key={tech}
                      variants={cardVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onHoverStart={() => handleCardHover(idx)}
                      onHoverEnd={() => handleCardHoverEnd(idx)}
                      className={`bg-gray-800 px-6 py-3 rounded-full text-${
                        category.color
                      }-${400 + (idx % 3) * 100} hover:bg-gray-700 hover:text-${
                        category.color
                      }-200 cursor-pointer transition-all animate-float-delay-${
                        idx % 4
                      } border border-gray-700/50 hover:border-cyan-500/80 relative`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-${category.color}-500/20 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
                      />
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
            >
              Benefits of Custom Software Development
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {[
                {
                  title: "Increased Business Efficiency",
                  desc: "Automate repetitive tasks and streamline workflows for maximum productivity",
                  icon: Zap,
                  color: "purple-500",
                },
                {
                  title: "Enhanced User Experience",
                  desc: "Custom interfaces tailored to your exact business needs and user preferences",
                  icon: Users,
                  color: "blue-500",
                },
                {
                  title: "Enterprise-Grade Security",
                  desc: "Built-in safeguards and advanced protection for your sensitive business data",
                  icon: Shield,
                  color: "green-500",
                },
                {
                  title: "Scalable Growth Solutions",
                  desc: "Software that grows with your business and adapts to changing requirements",
                  icon: BarChart,
                  color: "cyan-500",
                },
              ].map((benefit, index: number) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => handleCardHover(index)}
                  onHoverEnd={() => handleCardHoverEnd(index)}
                  className={`group bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all relative`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-${benefit.color}/20 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
                  />
                  <motion.div
                    variants={iconVariants}
                    className={`text-${benefit.color} mb-4`}
                  >
                    <benefit.icon className="w-10 h-10" />
                  </motion.div>
                  <motion.h3
                    variants={textVariants}
                    className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300"
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.p
                    variants={textVariants}
                    className="text-gray-400 group-hover:text-gray-100"
                  >
                    {benefit.desc}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 relative bg-gray-800/20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
            >
              Our Proven Development Process
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {[
                {
                  step: "Discovery & Strategic Planning",
                  desc: "Comprehensive requirements gathering, business analysis, and project roadmap development for your custom software solution.",
                  number: 1,
                },
                {
                  step: "UI/UX Design & Architecture",
                  desc: "Creating intuitive interfaces and robust technical architecture that ensures best user experience and scalability.",
                  number: 2,
                },
                {
                  step: "Custom Software Development",
                  desc: "Agile development with clean code, regular iterations, and continuous client feedback integration.",
                  number: 3,
                },
                {
                  step: "Rigorous Quality Assurance",
                  desc: "Comprehensive testing across devices, browsers, and platforms to ensure bug-free, high-performance software.",
                  number: 4,
                },
                {
                  step: "Deployment & Launch",
                  desc: "Smooth deployment to production environments with monitoring and optimization for peak performance.",
                  number: 5,
                },
                {
                  step: "Ongoing Maintenance & Support",
                  desc: "Continuous updates, improvements, technical support, and feature enhancements as your business evolves.",
                  number: 6,
                },
              ].map((process, index: number) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => handleCardHover(index)}
                  onHoverEnd={() => handleCardHoverEnd(index)}
                  className={`flex flex-col md:flex-row relative ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div
                      className={`bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all relative group`}
                    >
                      <div
                        className={`absolute left-1/2 md:${
                          index % 2 === 0 ? "left-auto right-0" : "left-0"
                        } transform -translate-x-1/2 md:translate-x-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold`}
                      >
                        {process.number}
                      </div>
                      <motion.h3
                        variants={textVariants}
                        className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300"
                      >
                        {process.step}
                      </motion.h3>
                      <motion.p
                        variants={textVariants}
                        className="text-gray-400 group-hover:text-gray-100"
                      >
                        {process.desc}
                      </motion.p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Software Solutions We Build - NEW SEO SECTION */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
            >
              Custom Software Solutions We Deliver
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                'Best Custom Coded Websites Near You',
                'Business Management Software',
                'Enterprise Resource Planning (ERP) Systems',
                'Customer Relationship Management (CRM) Software',
                'Inventory Management Systems',
                'E-Commerce Platforms & Solutions',
                'Content Management Systems (CMS)',
                'API Development & Integration Services',
                'Cloud-Based Software Solutions',
                'Mobile App Backend Development',
                'Data Analytics & Business Intelligence Tools',
                'Workflow Automation Software',
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(31, 41, 55, 0.5)' }}
                  className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700/30 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200">{solution}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="py-16 bg-gradient-to-r from-violet-900/50 to-blue-900/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Ready to Build Your Custom Software Solution?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto mb-4 text-gray-300"
            >
              Partner with SniperCoders - the best software and IT company in India for your digital transformation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg max-w-2xl mx-auto mb-8 text-blue-200"
            >
              Get started with a free consultation and discover how our custom software development expertise can accelerate your business growth.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-900 font-bold px-8 py-4 rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2 mx-auto"
            >
              Schedule Your Free Consultation Today
              <span className="animate-bounce">→</span>
            </motion.button>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default SniperCodersWebsite;