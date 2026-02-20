
// // FILE PATH: app/services/best-software-agency-bangalore/page.tsx

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// import Link from "next/link";
// import {
//   Code, Smartphone, Globe, TrendingUp, Award, Users,
//   MapPin, Phone, Mail, ChevronRight, Star, CheckCircle,
//   Building2, Utensils, Coffee, Car, Hotel, ShoppingBag,
//   GraduationCap, HeartPulse, Plane, Dumbbell, Camera,
//   Briefcase, Home, Truck, Music, Landmark, TreePine,
//   Wifi, ShoppingCart, Wrench, Factory, Clock, Shield,
//    MessageCircle, Target, Zap, Rocket, Crown,
  
// } from "lucide-react";
// import Footer from "@/components/Footer";

// // ── animation helpers ──────────────────────────────────────────────
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.65, ease: "easeOut", delay: i * 0.08 },
//   }),
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.88 },
//   show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
// };

// // ── data ───────────────────────────────────────────────────────────
// const SERVICES = [
//   { 
//     icon: <Globe className="w-7 h-7" />, 
//     title: "Website Development Bangalore", 
//     desc: "Professional website design and development in Bangalore. Custom-coded business websites, eCommerce stores, landing pages & portfolios built for Bangalore's competitive digital market.", 
//     gradient: "from-cyan-500 to-blue-600",
//     keywords: "website design Bangalore, web development company Bangalore, ecommerce website Bangalore"
//   },
//   { 
//     icon: <Smartphone className="w-7 h-7" />, 
//     title: "Mobile App Development Bangalore", 
//     desc: "Top-rated mobile app development company in Bangalore. Native iOS & Android apps plus cross-platform Flutter/React Native solutions for Bangalore startups and enterprises.", 
//     gradient: "from-violet-500 to-purple-700",
//     keywords: "app development Bangalore, mobile app developers Bangalore, iOS app development Bangalore"
//   },
//   { 
//     icon: <Code className="w-7 h-7" />, 
//     title: "Custom Software Development Bangalore", 
//     desc: "Enterprise software development company in Bangalore. Scalable SaaS platforms, ERP systems, CRM tools & automation software tailored to your business workflows.", 
//     gradient: "from-emerald-500 to-teal-600",
//     keywords: "software development Bangalore, custom software Bangalore, ERP development Bangalore"
//   },
//   { 
//     icon: <TrendingUp className="w-7 h-7" />, 
//     title: "Digital Marketing Agency Bangalore", 
//     desc: "Results-driven digital marketing company in Bangalore. Local SEO, Google Ads, Meta Ads, YouTube marketing & social media management to dominate Bangalore search results.", 
//     gradient: "from-rose-500 to-pink-600",
//     keywords: "digital marketing Bangalore, SEO services Bangalore, Google Ads Bangalore"
//   },
//   { 
//     icon: <Users className="w-7 h-7" />, 
//     title: "IT Consulting Bangalore", 
//     desc: "Expert IT consulting services in Bangalore. Technology roadmaps, cloud migration, system architecture & digital transformation strategies for Bangalore businesses.", 
//     gradient: "from-amber-500 to-orange-600",
//     keywords: "IT consulting Bangalore, technology consultants Bangalore, digital transformation Bangalore"
//   },
//   { 
//     icon: <Award className="w-7 h-7" />, 
//     title: "UI/UX Design Agency Bangalore", 
//     desc: "Premier UI/UX design company in Bangalore. Conversion-optimised interfaces, brand identity systems & user research that resonate with Bangalore consumers.", 
//     gradient: "from-fuchsia-500 to-pink-600",
//     keywords: "UI UX design Bangalore, product design Bangalore, user experience agency Bangalore"
//   },
// ];

// const BUSINESS_CATEGORIES = [
//   { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in Indiranagar", keyword: "restaurant website design Bangalore", color: "text-orange-400" },
//   { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Koramangala", keyword: "cafe website development Bangalore", color: "text-amber-400" },
//   { icon: <Hotel className="w-5 h-5" />, label: "Hotels in MG Road", keyword: "hotel website design Bangalore", color: "text-blue-400" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail Stores in Jayanagar", keyword: "ecommerce website Bangalore", color: "text-pink-400" },
//   { icon: <Car className="w-5 h-5" />, label: "Car Showrooms in Whitefield", keyword: "automotive website Bangalore", color: "text-cyan-400" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Ed-Tech in HSR Layout", keyword: "education website Bangalore", color: "text-green-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Bannerghatta", keyword: "healthcare website Bangalore", color: "text-red-400" },
//   { icon: <Plane className="w-5 h-5" />, label: "Travel Agencies in JP Nagar", keyword: "travel website Bangalore", color: "text-sky-400" },
//   { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Rajajinagar", keyword: "fitness website Bangalore", color: "text-lime-400" },
//   { icon: <Camera className="w-5 h-5" />, label: "Photography Studios", keyword: "portfolio website Bangalore", color: "text-violet-400" },
//   { icon: <Briefcase className="w-5 h-5" />, label: "Startups in Electronic City", keyword: "startup website Bangalore", color: "text-indigo-400" },
//   { icon: <Home className="w-5 h-5" />, label: "Real Estate in Sarjapur", keyword: "real estate website Bangalore", color: "text-teal-400" },
//   { icon: <Truck className="w-5 h-5" />, label: "Logistics in Yeswanthpur", keyword: "logistics software Bangalore", color: "text-yellow-400" },
//   { icon: <Music className="w-5 h-5" />, label: "Event Management", keyword: "event website Bangalore", color: "text-rose-400" },
//   { icon: <Landmark className="w-5 h-5" />, label: "Finance in CBD", keyword: "fintech development Bangalore", color: "text-blue-300" },
//   { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands", keyword: "d2c ecommerce Bangalore", color: "text-emerald-400" },
//   { icon: <Wrench className="w-5 h-5" />, label: "Home Services", keyword: "service business website Bangalore", color: "text-orange-300" },
//   { icon: <Factory className="w-5 h-5" />, label: "Manufacturing in Peenya", keyword: "industrial website Bangalore", color: "text-gray-400" },
//   { icon: <TreePine className="w-5 h-5" />, label: "AgriBusiness", keyword: "agriculture website Bangalore", color: "text-green-300" },
//   { icon: <Wifi className="w-5 h-5" />, label: "Telecom Providers", keyword: "telecom software Bangalore", color: "text-cyan-300" },
//   { icon: <Building2 className="w-5 h-5" />, label: "Co-working Spaces", keyword: "coworking website Bangalore", color: "text-purple-300" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Wellness Centers", keyword: "wellness website Bangalore", color: "text-pink-300" },
//   { icon: <Car className="w-5 h-5" />, label: "Cab Services", keyword: "taxi app development Bangalore", color: "text-amber-300" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Malleshwaram", keyword: "school website Bangalore", color: "text-lime-300" },
// ];

// const STATS = [
//   { value: "30+", label: "Bangalore Projects Delivered", keyword: "Bangalore software projects" },
//   { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Bangalore" },
//   { value: "24/7", label: "Local Support Available", keyword: "Bangalore IT support" },
//   { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Bangalore reviews" },
// ];

// const TRUST_SIGNALS = [
//   { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
//   { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
//   { icon: <MapPin className="w-5 h-5" />, text: "Local Bangalore Presence" },
//   { icon: <MessageCircle className="w-5 h-5" />, text: "Kannada/English Support" },
// ];

// const FAQS = [
//   { 
//     q: "How much does a website cost in Bangalore?", 
//     a: "A professional business website in Bangalore typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Indiranagar, Koramangala, Whitefield, and across Bangalore." 
//   },
//   { 
//     q: "Which is the best software agency in Bangalore?", 
//     a: "SniperCoders is consistently rated among the top software agencies in Bangalore. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Electronic City, HSR Layout, and MG Road." 
//   },
//   { 
//     q: "Do you offer local SEO for Bangalore businesses?", 
//     a: "Yes! We specialise in Google Business Profile optimisation, local keyword targeting like 'best restaurants in Indiranagar', 'cafes near me', and Bangalore-specific content strategies to help you rank for searches like 'best [service] in Bangalore' and dominate local pack results." 
//   },
//   { 
//     q: "Can you build apps for Bangalore-based startups?", 
//     a: "Absolutely. We have extensive experience working with early-stage Bangalore startups in Whitefield and Electronic City on MVP development, pitch-ready prototypes, and scalable full-stack applications. Our startup packages are designed for rapid deployment and investor presentations." 
//   },
//   { 
//     q: "How long does it take to build a website in Bangalore?", 
//     a: "A standard business website for Bangalore clients takes 7–21 days. Complex eCommerce or custom software projects are scoped after a free discovery call. We understand the fast-paced Bangalore market and deliver accordingly." 
//   },
//   { 
//     q: "Do you develop eCommerce websites for Bangalore businesses?", 
//     a: "Yes, we specialise in eCommerce development for Bangalore's booming retail sector. From Magento and Shopify to custom WooCommerce solutions with Razorpay, Paytm, and UPI integration, we build online stores that convert Bangalore customers." 
//   },
// ];

// const LOCATIONS = [
//   "Indiranagar", "Koramangala", "Whitefield", "HSR Layout", "Jayanagar", 
//   "JP Nagar", "Malleshwaram", "Rajajinagar", "Electronic City", "BTM Layout",
//   "Marathahalli", "Bellandur", "Sarjapur Road", "Banashankari", "Basavanagudi"
// ];

// // ── component ──────────────────────────────────────────────────────
// export default function BangalorePage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const heroRef = useRef(null);

//   // Contact information
//   const phoneNumber = "+917006377796";
//   const email = "snipercoders25@gmail.com";

//   return (
//     <div className="min-h-screen bg-[#050c1a] text-white font-sans overflow-x-hidden">

//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section
//         ref={heroRef}
//         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
//         style={{
//           background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.22) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(124,58,237,0.18) 0%, transparent 60%), #050c1a"
//         }}
//       >
//         {/* Grid overlay */}
//         <div className="absolute inset-0 opacity-[0.04]"
//           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
//         />

//         {/* Glowing orbs */}
//         <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-blue-600/20 blur-[90px] pointer-events-none" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-violet-600/20 blur-[80px] pointer-events-none" />

//         <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//           {/* Location badge with trust signal */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
//           >
//             <Crown className="w-4 h-4" /> #1 Software Agency in Bangalore • 30+ Projects Delivered
//           </motion.div>

//           <motion.h1
//             initial="hidden" animate="show" variants={fadeUp}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Best Software Agency<br />
//             <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
//               in Bangalore, India
//             </span>
//           </motion.h1>

//           <motion.p
//             custom={1} initial="hidden" animate="show" variants={fadeUp}
//             className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
//           >
//             SniperCoders is Bangalore&apos;ed IT partner — delivering world-class <strong>website development, mobile apps, custom software & digital marketing</strong> solutions to businesses across Bengaluru. <span className="text-blue-400">30+ projects delivered • 5★ rated</span>
//           </motion.p>

//           {/* Trust signals */}
//           <motion.div
//             custom={1.5} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {TRUST_SIGNALS.map((signal, i) => (
//               <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
//                 <span className="text-blue-400">{signal.icon}</span>
//                 {signal.text}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div
//             custom={2} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Link href="/contact"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Consultation <ChevronRight className="w-5 h-5" />
//             </Link>
//             <a href={`tel:${phoneNumber}`}
//               className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
//             >
//               <Phone className="w-5 h-5" /> Call: +91 7006377796
//             </a>
//           </motion.div>

//           {/* Stats row with keywords */}
//           <motion.div
//             custom={3} initial="hidden" animate="show" variants={fadeUp}
//             className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
//           >
//             {STATS.map((s, i) => (
//               <div key={i} className="text-center">
//                 <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{s.value}</div>
//                 <div className="text-xs text-gray-500 mt-1">{s.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── INTRO PARA with hyperlocal keywords ────────────────── */}
//       <section className="py-20 relative">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <motion.div
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
//             className="bg-gradient-to-br from-gray-900/80 to-blue-950/40 border border-blue-900/40 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Why Bangalore Businesses Choose SniperCoders
//             </h2>
//             <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
//               <p>
//                 <strong className="text-white">Bangalore</strong> — the <strong className="text-blue-400">Silicon Valley of India</strong> — is home to over 12,000 startups, thousands of SMEs in <strong className="text-cyan-400">Indiranagar, Koramangala, Whitefield, HSR Layout, and Jayanagar</strong>, and some of the country's fastest-growing enterprises. In this hyper-competitive digital landscape, having a powerful online presence is no longer optional. <strong className="text-white">SniperCoders</strong>, the <strong className="text-blue-400">best software agency in Bangalore</strong>, helps businesses of every size cut through the noise with precision-engineered digital solutions.
//               </p>
//               <p>
//                 Whether you run a <strong className="text-cyan-400">restaurant on Indiranagar's 100 Feet Road</strong>, a <strong className="text-cyan-400">boutique hotel in Koramangala</strong>, a <strong className="text-cyan-400">tech startup in Whitefield</strong>, an <strong className="text-cyan-400">ed-tech company in Jayanagar</strong>, or a <strong className="text-cyan-400">retail store in Malleshwaram</strong> — we understand the unique demands of the <strong className="text-cyan-400">Bangalore market</strong>. Our team combines global engineering standards with deep local business insight across <strong className="text-white">BTM Layout, Marathahalli, Bellandur, Sarjapur Road, and Electronic City</strong>.
//               </p>
//               <p>
//                 From building blazing-fast <strong className="text-white">websites for Bangalore businesses</strong> to crafting viral digital campaigns and developing <strong className="text-white">custom software solutions</strong>, <strong className="text-white">SniperCoders</strong> is your one-stop partner for all things digital in Bengaluru. <strong className="text-blue-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── SERVICES with keyword optimization ────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Our Services in{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Bangalore</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Full-spectrum digital services designed for the pace and scale of Bangalore's business ecosystem. <strong className="text-blue-400">Web development, mobile apps, SEO, and more.</strong>
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((svc, i) => (
//               <motion.div
//                 key={i}
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="group relative bg-gray-900/60 border border-gray-800 hover:border-blue-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1), transparent)" }} />
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>
//                   {svc.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{svc.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
//                 <p className="text-xs text-blue-400/70 italic">{svc.keywords}</p>
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
//       <section className="py-20 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Industries We Serve in{" "}
//               <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Bangalore</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               SniperCoders powers digital growth for every business category across Bengaluru — from <strong className="text-cyan-400">Koramangala cafés</strong> to <strong className="text-cyan-400">Whitefield tech firms</strong> and <strong className="text-cyan-400">Indiranagar boutiques</strong>.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {BUSINESS_CATEGORIES.map((cat, i) => (
//               <motion.div
//                 key={i}
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="flex flex-col items-center gap-2 bg-gray-900/60 border border-gray-800 hover:border-gray-600 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
//                 title={cat.keyword}
//               >
//                 <span className={cat.color}>{cat.icon}</span>
//                 <span className="text-xs text-gray-300 leading-tight">{cat.label}</span>
//               </motion.div>
//             ))}
//           </div>

//           {/* Hyperlocal areas */}
//           <motion.div 
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//             className="mt-12 text-center"
//           >
//             <p className="text-sm text-gray-500 mb-4">Serving all Bangalore locations:</p>
//             <div className="flex flex-wrap justify-center gap-2">
//               {LOCATIONS.map((loc, i) => (
//                 <span key={i} className="text-xs bg-gray-900/60 border border-gray-800 px-3 py-1.5 rounded-full text-gray-400">
//                   {loc}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── WHY US with psychological triggers ─────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
//               <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 The{" "}
//                 <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
//                   SniperCoders
//                 </span>{" "}
//                 Advantage in Bangalore
//               </h2>
//               <p className="text-gray-400 mb-8 leading-relaxed">
//                 We're not just another IT agency. We're builders who understand what it takes to succeed in Bangalore's demanding market — <strong className="text-white">fast delivery, mobile-first design, local SEO dominance, and support that never sleeps.</strong> Here's why 30+ Bangalore businesses trust us:
//               </p>
//               <div className="space-y-4">
//                 {[
//                   "Bangalore-specific SEO & Google Maps optimisation for local visibility",
//                   "Bilingual content support (English + Kannada/Hindi) for wider reach",
//                   "Startup-friendly pricing with flexible payment plans for early-stage companies",
//                   "Delivery in 7–21 days for most projects - we match Bangalore's pace",
//                   "Dedicated project manager for every client with weekly updates",
//                   "Post-launch support & maintenance included in all packages",
//                   "Integration with Razorpay, Paytm, PhonePe & Indian payment gateways",
//                   "GSTIN invoicing & India-compliant data practices (GDPR-style)",
//                   "Physical presence in Bangalore for face-to-face meetings",
//                   "ISO-standard development processes with 100% client satisfaction rate"
//                 ].map((item, i) => (
//                   <motion.div
//                     key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                     className="flex items-start gap-3"
//                   >
//                     <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-300 text-sm">{item}</span>
//                   </motion.div>
//                 ))}
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 mt-10">
//                 <Link href="/contact"
//                   className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
//                 >
//                   Start Your Project <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <a href={`mailto:${email}`}
//                   className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300"
//                 >
//                   <Mail className="w-5 h-5" /> Email Us
//                 </a>
//               </div>
//             </motion.div>

//             <motion.div
//               initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
//               className="grid grid-cols-2 gap-4"
//             >
//               {[
//                 { 
//                   title: "Startup Ecosystem", 
//                   desc: "We've powered 15+ Bangalore startups in Whitefield & Electronic City with digital infrastructure built to scale.", 
//                   color: "from-blue-900/50 to-blue-800/30", 
//                   border: "border-blue-800/50",
//                   icon: <Rocket className="w-4 h-4 text-blue-400" />
//                 },
//                 { 
//                   title: "Restaurant & F&B", 
//                   desc: "Online ordering systems, digital menus, booking platforms & Zomato/Swiggy integrations for Indiranagar & Koramangala restaurants.", 
//                   color: "from-orange-900/40 to-orange-800/20", 
//                   border: "border-orange-800/40",
//                   icon: <Utensils className="w-4 h-4 text-orange-400" />
//                 },
//                 { 
//                   title: "Healthcare & Clinics", 
//                   desc: "Appointment booking, patient management systems & telemedicine portals for clinics in Jayanagar & HSR Layout.", 
//                   color: "from-rose-900/40 to-rose-800/20", 
//                   border: "border-rose-800/40",
//                   icon: <HeartPulse className="w-4 h-4 text-rose-400" />
//                 },
//                 { 
//                   title: "Real Estate", 
//                   desc: "Property listing portals, virtual tours & lead-capture websites for Bangalore builders in Sarjapur & Whitefield.", 
//                   color: "from-teal-900/40 to-teal-800/20", 
//                   border: "border-teal-800/40",
//                   icon: <Home className="w-4 h-4 text-teal-400" />
//                 },
//               ].map((card, i) => (
//                 <div key={i} className={`bg-gradient-to-br ${card.color} border ${card.border} rounded-2xl p-5`}>
//                   <div className="flex items-center gap-2 mb-2">
//                     {card.icon}
//                     <h4 className="font-bold text-white text-sm">{card.title}</h4>
//                   </div>
//                   <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL STRIP with social proof ─────────────────── */}
//    <section className="py-12 bg-gradient-to-r from-blue-900/20 via-violet-900/10 to-blue-900/20 border-y border-gray-800/50">
//   <div className="container mx-auto px-4">
    
//     <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">Trusted by Bangalore's Growing Businesses</h3>
    
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
//       {/* Testimonial 1 - Restaurant */}
//       <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center">
//         <div className="flex justify-center gap-1 mb-4">
//           {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
//         </div>
//         <blockquote className="text-sm text-gray-300 italic mb-4">
//           "SniperCoders built our restaurant's online ordering system and Google ranking went from page 4 to page 1 in 6 weeks. Best IT agency in Bangalore."
//         </blockquote>
//         <p className="text-white font-semibold text-sm">Restaurant Owner</p>
//         <p className="text-gray-500 text-xs">📍 Indiranagar, Bangalore</p>
//       </div>
      
//       {/* Testimonial 2 - TravelQuench */}
//       <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center">
//         <div className="flex justify-center gap-1 mb-4">
//           {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
//         </div>
//         <blockquote className="text-sm text-gray-300 italic mb-4">
//           "<a href="https://travelquench.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">TravelQuench.in</a> was built by SniperCoders with seamless booking integration. We're now ranking for 'Bangalore tour packages' and getting daily inquiries."
//         </blockquote>
//         <p className="text-white font-semibold text-sm">TravelQuench Founder</p>
//         <p className="text-gray-500 text-xs">📍 HSR Layout, Bangalore</p>
//       </div>
      
//       {/* Testimonial 3 - Travel with Manikanta */}
//       <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center">
//         <div className="flex justify-center gap-1 mb-4">
//           {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
//         </div>
//         <blockquote className="text-sm text-gray-300 italic mb-4">
//           "<a href="http://travelwithmanikanta.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">TravelWithManikanta.com</a> showcases my Karnataka tours. Inquiries tripled since launch. Perfect for travel entrepreneurs!"
//         </blockquote>
//         <p className="text-white font-semibold text-sm">Manikanta, Travel Blogger</p>
//         <p className="text-gray-500 text-xs">📍 Bangalore</p>
//         <p className="text-blue-400 text-xs">💰 3x Inquiries</p>
//       </div>
      
//     </div>
//   </div>
// </section>


//       {/* ── FAQ with long-tail keywords ────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Frequently Asked Questions —{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Bangalore</span>
//             </h2>
//             <p className="text-gray-400">Answers to common questions about <strong className="text-blue-400">software development, website design, and digital marketing in Bangalore.</strong></p>
//           </motion.div>
//           <div className="space-y-4">
//             {FAQS.map((faq, i) => (
//               <motion.div
//                 key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="border border-gray-800 rounded-2xl overflow-hidden"
//               >
//                 <button
//                   className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-900/60 hover:bg-gray-900 transition-colors"
//                   onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                 >
//                   <span className="font-semibold text-white text-sm md:text-base">{faq.q}</span>
//                   <ChevronRight className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-90" : ""}`} />
//                 </button>
//                 {openFaq === i && (
//                   <div className="px-6 py-5 bg-gray-950/40 text-gray-300 text-sm leading-relaxed border-t border-gray-800">
//                     {faq.a}
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA with contact info ──────────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-4xl text-center">
//           <motion.div
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
//             className="relative bg-gradient-to-br from-blue-900/50 to-violet-900/40 border border-blue-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-10"
//               style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 Ready to Grow Your<br />
//                 <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
//                   Bangalore Business?
//                 </span>
//               </h2>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 Join <strong className="text-white">30+ businesses across Bangalore</strong> that trust SniperCoders to build, launch & scale their digital presence. From <strong className="text-blue-400">Indiranagar to Whitefield, Koramangala to Electronic City</strong> — we're Bangalore's preferred software agency.
//               </p>
              
//               {/* Contact cards */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <a href={`tel:${phoneNumber}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-blue-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Phone className="w-6 h-6 text-blue-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Call us now</div>
//                     <div className="text-white font-semibold">+91 7006377796</div>
//                   </div>
//                 </a>
//                 <a href={`mailto:${email}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-violet-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Mail className="w-6 h-6 text-violet-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Email us</div>
//                     <div className="text-white font-semibold">snipercoders25@gmail.com</div>
//                   </div>
//                 </a>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/contact"
//                   className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105"
//                 >
//                   Book Free Consultation <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <Link href="/showcase"
//                   className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300"
//                 >
//                   View Bangalore Portfolio
//                 </Link>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Serving all of Bangalore & Bengaluru Rural</span>
//                 <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-violet-400" /> GST Registered • ISO Standards</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />

//       {/* Google Font import */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');
//       `}</style>
//     </div>
//   );
// }







// FILE PATH: app/services/best-software-agency-bangalore/page.tsx

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import {
  Code, Smartphone, Globe, TrendingUp, Award, Users,
  MapPin, Phone, Mail, ChevronRight, Star, CheckCircle,
  Building2, Utensils, Coffee, Car, Hotel, ShoppingBag,
  GraduationCap, HeartPulse, Plane, Dumbbell, Camera,
  Briefcase, Home, Truck, Music, Landmark, TreePine,
  Wifi, ShoppingCart, Wrench, Factory, Clock, Shield,
  MessageCircle, Rocket, Crown,
} from "lucide-react";
import Footer from "@/components/Footer";

// ── animation helpers ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay: i * 0.08 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

// ── data ───────────────────────────────────────────────────────────
const SERVICES = [
  { 
    icon: <Globe className="w-7 h-7" />, 
    title: "Website Development Bangalore", 
    desc: "Professional website design and development in Bangalore. Custom-coded business websites, eCommerce stores, landing pages & portfolios built for Bangalore's competitive digital market.", 
    gradient: "from-cyan-500 to-blue-600",
    keywords: "website design Bangalore, web development company Bangalore, ecommerce website Bangalore"
  },
  { 
    icon: <Smartphone className="w-7 h-7" />, 
    title: "Mobile App Development Bangalore", 
    desc: "Top-rated mobile app development company in Bangalore. Native iOS & Android apps plus cross-platform Flutter/React Native solutions for Bangalore startups and enterprises.", 
    gradient: "from-violet-500 to-purple-700",
    keywords: "app development Bangalore, mobile app developers Bangalore, iOS app development Bangalore"
  },
  { 
    icon: <Code className="w-7 h-7" />, 
    title: "Custom Software Development Bangalore", 
    desc: "Enterprise software development company in Bangalore. Scalable SaaS platforms, ERP systems, CRM tools & automation software tailored to your business workflows.", 
    gradient: "from-emerald-500 to-teal-600",
    keywords: "software development Bangalore, custom software Bangalore, ERP development Bangalore"
  },
  { 
    icon: <TrendingUp className="w-7 h-7" />, 
    title: "Digital Marketing Agency Bangalore", 
    desc: "Results-driven digital marketing company in Bangalore. Local SEO, Google Ads, Meta Ads, YouTube marketing & social media management to dominate Bangalore search results.", 
    gradient: "from-rose-500 to-pink-600",
    keywords: "digital marketing Bangalore, SEO services Bangalore, Google Ads Bangalore"
  },
  { 
    icon: <Users className="w-7 h-7" />, 
    title: "IT Consulting Bangalore", 
    desc: "Expert IT consulting services in Bangalore. Technology roadmaps, cloud migration, system architecture & digital transformation strategies for Bangalore businesses.", 
    gradient: "from-amber-500 to-orange-600",
    keywords: "IT consulting Bangalore, technology consultants Bangalore, digital transformation Bangalore"
  },
  { 
    icon: <Award className="w-7 h-7" />, 
    title: "UI/UX Design Agency Bangalore", 
    desc: "Premier UI/UX design company in Bangalore. Conversion-optimised interfaces, brand identity systems & user research that resonate with Bangalore consumers.", 
    gradient: "from-fuchsia-500 to-pink-600",
    keywords: "UI UX design Bangalore, product design Bangalore, user experience agency Bangalore"
  },
];

const BUSINESS_CATEGORIES = [
  { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in Indiranagar", keyword: "restaurant website design Bangalore", color: "text-orange-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Koramangala", keyword: "cafe website development Bangalore", color: "text-amber-400" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in MG Road", keyword: "hotel website design Bangalore", color: "text-blue-400" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail Stores in Jayanagar", keyword: "ecommerce website Bangalore", color: "text-pink-400" },
  { icon: <Car className="w-5 h-5" />, label: "Car Showrooms in Whitefield", keyword: "automotive website Bangalore", color: "text-cyan-400" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Ed-Tech in HSR Layout", keyword: "education website Bangalore", color: "text-green-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Bannerghatta", keyword: "healthcare website Bangalore", color: "text-red-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel Agencies in JP Nagar", keyword: "travel website Bangalore", color: "text-sky-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Rajajinagar", keyword: "fitness website Bangalore", color: "text-lime-400" },
  { icon: <Camera className="w-5 h-5" />, label: "Photography Studios", keyword: "portfolio website Bangalore", color: "text-violet-400" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Startups in Electronic City", keyword: "startup website Bangalore", color: "text-indigo-400" },
  { icon: <Home className="w-5 h-5" />, label: "Real Estate in Sarjapur", keyword: "real estate website Bangalore", color: "text-teal-400" },
  { icon: <Truck className="w-5 h-5" />, label: "Logistics in Yeswanthpur", keyword: "logistics software Bangalore", color: "text-yellow-400" },
  { icon: <Music className="w-5 h-5" />, label: "Event Management", keyword: "event website Bangalore", color: "text-rose-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "Finance in CBD", keyword: "fintech development Bangalore", color: "text-blue-300" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands", keyword: "d2c ecommerce Bangalore", color: "text-emerald-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Home Services", keyword: "service business website Bangalore", color: "text-orange-300" },
  { icon: <Factory className="w-5 h-5" />, label: "Manufacturing in Peenya", keyword: "industrial website Bangalore", color: "text-gray-400" },
  { icon: <TreePine className="w-5 h-5" />, label: "AgriBusiness", keyword: "agriculture website Bangalore", color: "text-green-300" },
  { icon: <Wifi className="w-5 h-5" />, label: "Telecom Providers", keyword: "telecom software Bangalore", color: "text-cyan-300" },
  { icon: <Building2 className="w-5 h-5" />, label: "Co-working Spaces", keyword: "coworking website Bangalore", color: "text-purple-300" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Wellness Centers", keyword: "wellness website Bangalore", color: "text-pink-300" },
  { icon: <Car className="w-5 h-5" />, label: "Cab Services", keyword: "taxi app development Bangalore", color: "text-amber-300" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Malleshwaram", keyword: "school website Bangalore", color: "text-lime-300" },
];

const STATS = [
  { value: "30+", label: "Bangalore Projects Delivered", keyword: "Bangalore software projects" },
  { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Bangalore" },
  { value: "24/7", label: "Local Support Available", keyword: "Bangalore IT support" },
  { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Bangalore reviews" },
];

const TRUST_SIGNALS = [
  { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
  { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
  { icon: <MapPin className="w-5 h-5" />, text: "Local Bangalore Presence" },
  { icon: <MessageCircle className="w-5 h-5" />, text: "Kannada/English Support" },
];

const FAQS = [
  { 
    q: "How much does a website cost in Bangalore?", 
    a: "A professional business website in Bangalore typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Indiranagar, Koramangala, Whitefield, and across Bangalore." 
  },
  { 
    q: "Which is the best software agency in Bangalore?", 
    a: "SniperCoders is consistently rated among the top software agencies in Bangalore. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Electronic City, HSR Layout, and MG Road." 
  },
  { 
    q: "Do you offer local SEO for Bangalore businesses?", 
    a: "Yes! We specialise in Google Business Profile optimisation, local keyword targeting like 'best restaurants in Indiranagar', 'cafes near me', and Bangalore-specific content strategies to help you rank for searches like 'best [service] in Bangalore' and dominate local pack results." 
  },
  { 
    q: "Can you build apps for Bangalore-based startups?", 
    a: "Absolutely. We have extensive experience working with early-stage Bangalore startups in Whitefield and Electronic City on MVP development, pitch-ready prototypes, and scalable full-stack applications. Our startup packages are designed for rapid deployment and investor presentations." 
  },
  { 
    q: "How long does it take to build a website in Bangalore?", 
    a: "A standard business website for Bangalore clients takes 7–21 days. Complex eCommerce or custom software projects are scoped after a free discovery call. We understand the fast-paced Bangalore market and deliver accordingly." 
  },
  { 
    q: "Do you develop eCommerce websites for Bangalore businesses?", 
    a: "Yes, we specialise in eCommerce development for Bangalore's booming retail sector. From Magento and Shopify to custom WooCommerce solutions with Razorpay, Paytm, and UPI integration, we build online stores that convert Bangalore customers." 
  },
];

const LOCATIONS = [
  "Indiranagar", "Koramangala", "Whitefield", "HSR Layout", "Jayanagar", 
  "JP Nagar", "Malleshwaram", "Rajajinagar", "Electronic City", "BTM Layout",
  "Marathahalli", "Bellandur", "Sarjapur Road", "Banashankari", "Basavanagudi"
];

// ── component ──────────────────────────────────────────────────────
export default function BangalorePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef(null);

  // Contact information
  const phoneNumber = "+917006377796";
  const email = "snipercoders25@gmail.com";

  return (
    <div className="min-h-screen bg-[#050c1a] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.22) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(124,58,237,0.18) 0%, transparent 60%), #050c1a"
        }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        {/* Glowing orbs */}
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-blue-600/20 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-violet-600/20 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          {/* Location badge with trust signal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> #1 Software Agency in Bangalore • 30+ Projects Delivered
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Agency<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
              in Bangalore, India
            </span>
          </motion.h1>

          <motion.p
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders is Bangalore&apos;s trusted IT partner — delivering world-class <strong>website development, mobile apps, custom software &amp; digital marketing</strong> solutions to businesses across Bengaluru. <span className="text-blue-400">30+ projects delivered • 5★ rated</span>
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-blue-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={2} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" /> Call: +91 7006377796
            </a>
          </motion.div>

          {/* Stats row with keywords */}
          <motion.div
            custom={3} initial="hidden" animate="show" variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
          >
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO PARA with hyperlocal keywords ────────────────── */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="bg-gradient-to-br from-gray-900/80 to-blue-950/40 border border-blue-900/40 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Why Bangalore Businesses Choose SniperCoders
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
              <p>
                <strong className="text-white">Bangalore</strong> — the <strong className="text-blue-400">Silicon Valley of India</strong> — is home to over 12,000 startups, thousands of SMEs in <strong className="text-cyan-400">Indiranagar, Koramangala, Whitefield, HSR Layout, and Jayanagar</strong>, and some of the country&apos;s fastest-growing enterprises. In this hyper-competitive digital landscape, having a powerful online presence is no longer optional. <strong className="text-white">SniperCoders</strong>, the <strong className="text-blue-400">best software agency in Bangalore</strong>, helps businesses of every size cut through the noise with precision-engineered digital solutions.
              </p>
              <p>
                Whether you run a <strong className="text-cyan-400">restaurant on Indiranagar&apos;s 100 Feet Road</strong>, a <strong className="text-cyan-400">boutique hotel in Koramangala</strong>, a <strong className="text-cyan-400">tech startup in Whitefield</strong>, an <strong className="text-cyan-400">ed-tech company in Jayanagar</strong>, or a <strong className="text-cyan-400">retail store in Malleshwaram</strong> — we understand the unique demands of the <strong className="text-cyan-400">Bangalore market</strong>. Our team combines global engineering standards with deep local business insight across <strong className="text-white">BTM Layout, Marathahalli, Bellandur, Sarjapur Road, and Electronic City</strong>.
              </p>
              <p>
                From building blazing-fast <strong className="text-white">websites for Bangalore businesses</strong> to crafting viral digital campaigns and developing <strong className="text-white">custom software solutions</strong>, <strong className="text-white">SniperCoders</strong> is your one-stop partner for all things digital in Bengaluru. <strong className="text-blue-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES with keyword optimization ────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Our Services in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Bangalore</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full-spectrum digital services designed for the pace and scale of Bangalore&apos;s business ecosystem. <strong className="text-blue-400">Web development, mobile apps, SEO, and more.</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={i}
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-blue-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
                <p className="text-xs text-blue-400/70 italic">{svc.keywords}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Bangalore</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              SniperCoders powers digital growth for every business category across Bengaluru — from <strong className="text-cyan-400">Koramangala cafés</strong> to <strong className="text-cyan-400">Whitefield tech firms</strong> and <strong className="text-cyan-400">Indiranagar boutiques</strong>.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BUSINESS_CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col items-center gap-2 bg-gray-900/60 border border-gray-800 hover:border-gray-600 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
                title={cat.keyword}
              >
                <span className={cat.color}>{cat.icon}</span>
                <span className="text-xs text-gray-300 leading-tight">{cat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Hyperlocal areas */}
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500 mb-4">Serving all Bangalore locations:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {LOCATIONS.map((loc, i) => (
                <span key={i} className="text-xs bg-gray-900/60 border border-gray-800 px-3 py-1.5 rounded-full text-gray-400">
                  {loc}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY US with psychological triggers ─────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                The{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                  SniperCoders
                </span>{" "}
                Advantage in Bangalore
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We&apos;re not just another IT agency. We&apos;re builders who understand what it takes to succeed in Bangalore&apos;s demanding market — <strong className="text-white">fast delivery, mobile-first design, local SEO dominance, and support that never sleeps.</strong> Here&apos;s why 30+ Bangalore businesses trust us:
              </p>
              <div className="space-y-4">
                {[
                  "Bangalore-specific SEO & Google Maps optimisation for local visibility",
                  "Bilingual content support (English + Kannada/Hindi) for wider reach",
                  "Startup-friendly pricing with flexible payment plans for early-stage companies",
                  "Delivery in 7–21 days for most projects - we match Bangalore's pace",
                  "Dedicated project manager for every client with weekly updates",
                  "Post-launch support & maintenance included in all packages",
                  "Integration with Razorpay, Paytm, PhonePe & Indian payment gateways",
                  "GSTIN invoicing & India-compliant data practices (GDPR-style)",
                  "Physical presence in Bangalore for face-to-face meetings",
                  "ISO-standard development processes with 100% client satisfaction rate"
                ].map((item, i) => (
                  <motion.div
                    key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Project <ChevronRight className="w-5 h-5" />
                </Link>
                <a href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300"
                >
                  <Mail className="w-5 h-5" /> Email Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { 
                  title: "Startup Ecosystem", 
                  desc: "We've powered 15+ Bangalore startups in Whitefield & Electronic City with digital infrastructure built to scale.", 
                  color: "from-blue-900/50 to-blue-800/30", 
                  border: "border-blue-800/50",
                  icon: <Rocket className="w-4 h-4 text-blue-400" />
                },
                { 
                  title: "Restaurant & F&B", 
                  desc: "Online ordering systems, digital menus, booking platforms & Zomato/Swiggy integrations for Indiranagar & Koramangala restaurants.", 
                  color: "from-orange-900/40 to-orange-800/20", 
                  border: "border-orange-800/40",
                  icon: <Utensils className="w-4 h-4 text-orange-400" />
                },
                { 
                  title: "Healthcare & Clinics", 
                  desc: "Appointment booking, patient management systems & telemedicine portals for clinics in Jayanagar & HSR Layout.", 
                  color: "from-rose-900/40 to-rose-800/20", 
                  border: "border-rose-800/40",
                  icon: <HeartPulse className="w-4 h-4 text-rose-400" />
                },
                { 
                  title: "Real Estate", 
                  desc: "Property listing portals, virtual tours & lead-capture websites for Bangalore builders in Sarjapur & Whitefield.", 
                  color: "from-teal-900/40 to-teal-800/20", 
                  border: "border-teal-800/40",
                  icon: <Home className="w-4 h-4 text-teal-400" />
                },
              ].map((card, i) => (
                <div key={i} className={`bg-gradient-to-br ${card.color} border ${card.border} rounded-2xl p-5`}>
                  <div className="flex items-center gap-2 mb-2">
                    {card.icon}
                    <h4 className="font-bold text-white text-sm">{card.title}</h4>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP with social proof ─────────────────── */}
      <section className="py-12 bg-gradient-to-r from-blue-900/20 via-violet-900/10 to-blue-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4">
          
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">Trusted by Bangalore&apos;s Growing Businesses</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Testimonial 1 - Restaurant */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <blockquote className="text-sm text-gray-300 italic mb-4">
                &ldquo;SniperCoders built our restaurant&apos;s online ordering system and Google ranking went from page 4 to page 1 in 6 weeks. Best IT agency in Bangalore.&rdquo;
              </blockquote>
              <p className="text-white font-semibold text-sm">Restaurant Owner</p>
              <p className="text-gray-500 text-xs">📍 Indiranagar, Bangalore</p>
            </div>
            
            {/* Testimonial 2 - TravelQuench */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <blockquote className="text-sm text-gray-300 italic mb-4">
                &ldquo;<a href="https://travelquench.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">TravelQuench.in</a> was built by SniperCoders with seamless booking integration. We&apos;re now ranking for &lsquo;Bangalore tour packages&rsquo; and getting daily inquiries.&rdquo;
              </blockquote>
              <p className="text-white font-semibold text-sm">TravelQuench Founder</p>
              <p className="text-gray-500 text-xs">📍 HSR Layout, Bangalore</p>
            </div>
            
            {/* Testimonial 3 - Travel with Manikanta */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <blockquote className="text-sm text-gray-300 italic mb-4">
                &ldquo;<a href="http://travelwithmanikanta.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">TravelWithManikanta.com</a> showcases my Karnataka tours. Inquiries tripled since launch. Perfect for travel entrepreneurs!&rdquo;
              </blockquote>
              <p className="text-white font-semibold text-sm">Manikanta, Travel Blogger</p>
              <p className="text-gray-500 text-xs">📍 Bangalore</p>
              <p className="text-blue-400 text-xs">💰 3x Inquiries</p>
            </div>
            
          </div>
        </div>
      </section>


      {/* ── FAQ with long-tail keywords ────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions —{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Bangalore</span>
            </h2>
            <p className="text-gray-400">Answers to common questions about <strong className="text-blue-400">software development, website design, and digital marketing in Bangalore.</strong></p>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="border border-gray-800 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-900/60 hover:bg-gray-900 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white text-sm md:text-base">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-90" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-5 bg-gray-950/40 text-gray-300 text-sm leading-relaxed border-t border-gray-800">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA with contact info ──────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="relative bg-gradient-to-br from-blue-900/50 to-violet-900/40 border border-blue-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Ready to Grow Your<br />
                <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                  Bangalore Business?
                </span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join <strong className="text-white">30+ businesses across Bangalore</strong> that trust SniperCoders to build, launch &amp; scale their digital presence. From <strong className="text-blue-400">Indiranagar to Whitefield, Koramangala to Electronic City</strong> — we&apos;re Bangalore&apos;s preferred software agency.
              </p>
              
              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-blue-500 rounded-xl px-6 py-4 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Call us now</div>
                    <div className="text-white font-semibold">+91 7006377796</div>
                  </div>
                </a>
                <a href={`mailto:${email}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-violet-500 rounded-xl px-6 py-4 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-violet-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Email us</div>
                    <div className="text-white font-semibold">snipercoders25@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                >
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase"
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300"
                >
                  View Bangalore Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Serving all of Bangalore &amp; Bengaluru Rural</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-violet-400" /> GST Registered • ISO Standards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Google Font import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');
      `}</style>
    </div>
  );
}