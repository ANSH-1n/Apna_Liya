


// // FILE PATH: app/services/best-software-agency-chandigarh/page.tsx

// "use client";

// import { useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Link from "next/link";
// import {
//   Code, Smartphone, Globe, TrendingUp, Award, Users,
//   MapPin, Phone, Mail, ChevronRight, Star, CheckCircle,
//   Utensils, Coffee, Car, Hotel, ShoppingBag,
//   GraduationCap, HeartPulse, Plane, Dumbbell, Camera,
//   Briefcase, Home, Truck, Music, Landmark, TreePine,
//   Wifi, ShoppingCart, Wrench, Factory, Building2,
//   Clock, Shield, Crown, Rocket, Sparkles, Gem,
//   Layers, Zap, Target, BarChart, MessageCircle, Medal
// } from "lucide-react";
// import Footer from "@/components/Footer";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut", delay: i * 0.08 } }),
// };
// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.88 },
//   show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
// };

// const SERVICES = [
//   { 
//     icon: <Globe className="w-7 h-7" />, 
//     title: "Website Development Chandigarh", 
//     desc: "Professional website design company in Chandigarh. Elegant, modern business websites for Chandigarh's real estate developers, hospitality businesses, educational institutions & booming retail sector.", 
//     gradient: "from-teal-500 to-cyan-600",
//     keywords: "website design Chandigarh, web development company Mohali, website designers Panchkula"
//   },
//   { 
//     icon: <Smartphone className="w-7 h-7" />, 
//     title: "Mobile App Development Chandigarh", 
//     desc: "Top app development agency in Chandigarh Tricity. Clean, high-performance apps for Chandigarh's service businesses, healthcare providers, fitness studios & growing startup community.", 
//     gradient: "from-violet-500 to-purple-700",
//     keywords: "app development Chandigarh, mobile app developers Mohali, iOS app development Panchkula"
//   },
//   { 
//     icon: <Code className="w-7 h-7" />, 
//     title: "Custom Software Development", 
//     desc: "Enterprise software solutions in Chandigarh. Property management systems, school ERP, clinic management platforms & business automation tools built for Tricity's organised business environment.", 
//     gradient: "from-blue-500 to-indigo-600",
//     keywords: "software development Chandigarh, custom software Mohali, ERP development Panchkula"
//   },
//   { 
//     icon: <TrendingUp className="w-7 h-7" />, 
//     title: "Digital Marketing Agency Chandigarh", 
//     desc: "Dominate Google in Chandigarh, Mohali and Panchkula with our local SEO, Google Ads and Punjabi + Hindi + English social media marketing strategies. Best SEO company in Tricity.", 
//     gradient: "from-rose-500 to-pink-600",
//     keywords: "digital marketing Chandigarh, SEO services Mohali, Google Ads Panchkula"
//   },
//   { 
//     icon: <Users className="w-7 h-7" />, 
//     title: "IT Consulting Chandigarh", 
//     desc: "Expert IT consultants in Chandigarh Tricity. Digital strategy for Chandigarh's government-adjacent businesses, education institutions, healthcare facilities & Punjab's growing business class.", 
//     gradient: "from-amber-500 to-orange-600",
//     keywords: "IT consulting Chandigarh, technology consultants Mohali, digital transformation Panchkula"
//   },
//   { 
//     icon: <Award className="w-7 h-7" />, 
//     title: "Branding & UI/UX Design", 
//     desc: "Premium branding agency in Chandigarh. Refined, aspirational brand identities that reflect Chandigarh's reputation as India's most planned, affluent, design-forward city.", 
//     gradient: "from-fuchsia-500 to-pink-600",
//     keywords: "branding agency Chandigarh, UI UX design Mohali, graphic design Panchkula"
//   },
// ];

// const BUSINESS_CATEGORIES = [
//   { icon: <Home className="w-5 h-5" />, label: "Real Estate in Mohali", keyword: "real estate website Chandigarh", color: "text-teal-400" },
//   { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Sector 17", keyword: "hotel website design Chandigarh", color: "text-blue-400" },
//   { icon: <Utensils className="w-5 h-5" />, label: "Dhabas in Mohali", keyword: "restaurant website Chandigarh", color: "text-orange-400" },
//   { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Sector 35", keyword: "cafe website design Chandigarh", color: "text-amber-400" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Boutiques in Panchkula", keyword: "ecommerce website Chandigarh", color: "text-pink-400" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Chandigarh", keyword: "school website design Chandigarh", color: "text-green-400" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Ed-Tech in Mohali", keyword: "educational website Chandigarh", color: "text-lime-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Panchkula", keyword: "healthcare website Chandigarh", color: "text-red-400" },
//   { icon: <Car className="w-5 h-5" />, label: "Car Dealers in Zirakpur", keyword: "automotive website Chandigarh", color: "text-cyan-400" },
//   { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Sector 8", keyword: "fitness website Chandigarh", color: "text-lime-300" },
//   { icon: <Plane className="w-5 h-5" />, label: "Travel in Sector 22", keyword: "travel website Chandigarh", color: "text-sky-400" },
//   { icon: <Truck className="w-5 h-5" />, label: "Logistics in Mohali", keyword: "logistics software Chandigarh", color: "text-yellow-400" },
//   { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", keyword: "event website Chandigarh", color: "text-rose-400" },
//   { icon: <Landmark className="w-5 h-5" />, label: "Finance in Sector 9", keyword: "fintech Chandigarh", color: "text-blue-300" },
//   { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands Tricity", keyword: "d2c ecommerce Chandigarh", color: "text-emerald-400" },
//   { icon: <Wrench className="w-5 h-5" />, label: "Home Services", keyword: "service business website Chandigarh", color: "text-orange-300" },
//   { icon: <Factory className="w-5 h-5" />, label: "MSME in Punjab", keyword: "industrial website Chandigarh", color: "text-gray-400" },
//   { icon: <Building2 className="w-5 h-5" />, label: "IT Companies", keyword: "software company Chandigarh", color: "text-purple-300" },
//   { icon: <TreePine className="w-5 h-5" />, label: "Agriculture", keyword: "agri business website Punjab", color: "text-green-300" },
//   { icon: <Wifi className="w-5 h-5" />, label: "Telecom & ISPs", keyword: "telecom software Chandigarh", color: "text-cyan-300" },
//   { icon: <Camera className="w-5 h-5" />, label: "Photography Studios", keyword: "photography website Chandigarh", color: "text-violet-400" },
//   { icon: <Briefcase className="w-5 h-5" />, label: "Law Firms", keyword: "law firm website Chandigarh", color: "text-indigo-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Dental Clinics", keyword: "dental website Chandigarh", color: "text-pink-300" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Jewellery Stores", keyword: "jewellery website Chandigarh", color: "text-yellow-300" },
// ];

// const STATS = [
//   { value: "30+", label: "Tricity Projects Delivered", keyword: "Chandigarh software projects" },
//   { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Chandigarh" },
//   { value: "24/7", label: "Local Support Available", keyword: "IT support Chandigarh" },
//   { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Chandigarh reviews" },
// ];

// const TRUST_SIGNALS = [
//   { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
//   { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
//   { icon: <MapPin className="w-5 h-5" />, text: "Local Tricity Presence" },
//   { icon: <MessageCircle className="w-5 h-5" />, text: "Punjabi/Hindi/English Support" },
// ];

// const LOCATIONS = [
//   "Sector 17", "Sector 35", "Sector 22", "Sector 8", "Sector 9", "Sector 26",
//   "Mohali", "Phase 8 Mohali", "Phase 10 Mohali", "Aerocity Mohali", "New Chandigarh",
//   "Panchkula", "Sector 2 Panchkula", "Sector 20 Panchkula", "Zirakpur", "Kharar",
//   "Dera Bassi", "Banur", "Landran", "Mullanpur"
// ];

// const FAQS = [
//   { 
//     q: "Which is the best software agency in Chandigarh Tricity?", 
//     a: "SniperCoders is consistently rated among the top software agencies in Chandigarh, Mohali, and Panchkula. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Sector 17, Mohali IT Park, and Panchkula's commercial zones." 
//   },
//   { 
//     q: "Why should Chandigarh businesses invest in digital marketing now?", 
//     a: "Chandigarh has one of India's highest per-capita incomes and an extremely active online consumer base. Searches for real estate in Mohali, restaurants in Sector 17, schools in Panchkula, and clinics across Tricity are growing month on month — your business needs to be visible for them. Our trilingual SEO strategy (Punjabi+Hindi+English) gives you a decisive advantage over competitors." 
//   },
//   { 
//     q: "Can you handle real estate digital marketing in Mohali & New Chandigarh?", 
//     a: "Yes. Chandigarh and Mohali's real estate market is red hot — sectors like Aerocity, New Chandigarh (Mullanpur), Zirakpur and Kharar are all massive growth corridors. We build lead-capture portals, Google Ads campaigns and social media strategies specifically designed to bring qualified property buyers to your projects. We've helped multiple Mohali developers sell inventory through digital channels." 
//   },
//   { 
//     q: "Do you offer Punjabi or Hindi language content for SEO?", 
//     a: "Absolutely. Punjabi and Hindi language SEO opens up a significantly larger local audience beyond the English-only competition. We create trilingual strategies (Punjabi + Hindi + English) that give Chandigarh businesses a decisive ranking advantage. This is especially effective for local service businesses targeting Punjab's heartland from Mohali and Panchkula." 
//   },
//   { 
//     q: "How much does a website cost in Chandigarh?", 
//     a: "A professional business website in Chandigarh typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Sector 17, Mohali, Panchkula, and across Tricity." 
//   },
//   { 
//     q: "Do you serve Mohali and Panchkula as well?", 
//     a: "Yes. We serve the entire Chandigarh Tricity region — Chandigarh (UT), Mohali (Punjab) and Panchkula (Haryana) — as a single integrated digital market. Most of our Tricity clients see customers searching across all three cities. We have specific expertise in Mohali IT Park's startup ecosystem and Panchkula's healthcare and residential sectors." 
//   },
// ];

// // Contact information
// const phoneNumber = "+917006377796";
// const email = "snipercoders25@gmail.com";

// export default function ChandigarhPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-[#030f0e] text-white font-sans overflow-x-hidden">

//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section
//         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
//         style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(20,184,166,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(6,182,212,0.14) 0%, transparent 60%), #030f0e" }}
//       >
//         <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
//         <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-teal-600/15 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-cyan-600/15 blur-[80px] pointer-events-none" />

//         <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }} 
//             animate={{ opacity: 1, scale: 1 }} 
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
//           >
//             <Crown className="w-4 h-4" /> #1 Software Agency in Chandigarh Tricity • 30+ Projects Delivered
//           </motion.div>

//           <motion.h1 
//             initial="hidden" animate="show" variants={fadeUp}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Best Software Agency<br />
//             <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               in Chandigarh, Mohali & Panchkula
//             </span>
//           </motion.h1>

//           <motion.p 
//             custom={1} initial="hidden" animate="show" variants={fadeUp}
//             className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
//           >
//             SniperCoders helps Chandigarh's most ambitious businesses — from <strong className="text-teal-400">Sector 17's retailers</strong> to <strong className="text-teal-400">Mohali's IT firms</strong> and <strong className="text-teal-400">Panchkula's real estate developers</strong> — build the digital presence they deserve in India's most planned city. <span className="text-teal-400">30+ projects • 5★ rated</span>
//           </motion.p>

//           {/* Trust signals */}
//           <motion.div
//             custom={1.5} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {TRUST_SIGNALS.map((signal, i) => (
//               <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
//                 <span className="text-teal-400">{signal.icon}</span>
//                 {signal.text}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div 
//             custom={2} initial="hidden" animate="show" variants={fadeUp} 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Link href="/contact" 
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Consultation <ChevronRight className="w-5 h-5" />
//             </Link>
//             <a href={`tel:${phoneNumber}`}
//               className="inline-flex items-center gap-2 border border-gray-600 hover:border-teal-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
//             >
//               <Phone className="w-5 h-5" /> Call: +91 7006377796
//             </a>
//           </motion.div>

//           <motion.div 
//             custom={3} initial="hidden" animate="show" variants={fadeUp} 
//             className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
//           >
//             {STATS.map((s, i) => (
//               <div key={i} className="text-center">
//                 <div className="text-3xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">{s.value}</div>
//                 <div className="text-xs text-gray-500 mt-1">{s.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── INTRO PARA with hyperlocal keywords ────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <motion.div 
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
//             className="bg-gradient-to-br from-gray-900/80 to-teal-950/25 border border-teal-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Chandigarh Tricity — India's Most Affluent Digital Frontier
//             </h2>
//             <div className="space-y-4 text-gray-300 leading-relaxed">
//               <p>
//                 <strong className="text-white">Chandigarh</strong> — Le Corbusier's masterpiece and India's most planned city — consistently ranks as the country's wealthiest urban agglomeration per capita. Together with <strong className="text-teal-400">Mohali (Punjab)</strong> and <strong className="text-teal-400">Panchkula (Haryana)</strong>, the Chandigarh Tricity is a 30 lakh+ consumer market with high disposable income, aspirational consumption habits and excellent internet connectivity.
//               </p>
//               <p>
//                 <strong className="text-cyan-400">Real estate in New Chandigarh</strong> is booming. <strong className="text-cyan-400">Mohali's IT park</strong> and <strong className="text-cyan-400">Aerocity</strong> are drawing corporate investment. <strong className="text-cyan-400">Panchkula's residential zones</strong> are growing rapidly. And across all three cities, thousands of restaurants in <strong className="text-white">Sector 17</strong>, gyms in <strong className="text-white">Sector 8</strong>, clinics in <strong className="text-white">Sector 20</strong>, schools in <strong className="text-white">Mohali</strong> and retail stores in <strong className="text-white">Panchkula</strong> compete for the attention of Chandigarh's discerning, deal-seeking online consumers.
//               </p>
//               <p>
//                 <strong className="text-white">SniperCoders</strong>, the <strong className="text-teal-400">best software agency in Chandigarh Tricity</strong>, brings surgical precision to this opportunity — building digital assets that match the city's clean aesthetics, high standards and results-driven business culture. <strong className="text-teal-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
//               Our Services in <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Chandigarh Tricity</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Clean, precise, high-performance digital solutions — exactly what Chandigarh's discerning businesses demand. <strong className="text-teal-400">Web development, mobile apps, SEO, and more.</strong>
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((svc, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="group relative bg-gray-900/60 border border-gray-800 hover:border-teal-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(20,184,166,0.08), transparent)" }} />
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
//                 <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-300 transition-colors">{svc.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
//                 <p className="text-xs text-teal-400/70 italic">{svc.keywords}</p>
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
//       <section className="py-20 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Industries We Serve in <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Chandigarh Tricity</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               From <strong className="text-teal-400">Sector 17 Plaza's boutiques</strong> to <strong className="text-teal-400">Mohali's IT offices</strong> and <strong className="text-teal-400">Panchkula's clinics</strong> — every Tricity business deserves digital leadership.
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
//             <p className="text-sm text-gray-500 mb-4">Serving all Chandigarh Tricity locations:</p>
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
//         <div className="container mx-auto px-4 max-w-5xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Why Chandigarh Businesses Choose <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">SniperCoders</span>
//             </h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//               Here's what makes us the <strong className="text-teal-400">preferred digital partner for Tricity's most successful businesses</strong>:
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               "Punjabi + Hindi + English trilingual SEO dominance across Tricity - rank in all languages",
//               "New Chandigarh, Mullanpur & Aerocity real estate lead-gen sites with high conversion rates",
//               "Mohali IT park — startup product websites & SaaS landing pages built for scale",
//               "Chandigarh wedding industry — venue, décor & planner websites with stunning portfolios",
//               "High-quality clinic & dental website design for Chandigarh's premium health market",
//               "Restaurant & dhaba discovery SEO for Sector 17, 35 & 26 - get found by hungry customers",
//               "Gym & fitness studio digital marketing for Chandigarh's health-conscious audience",
//               "Premium branding matching Chandigarh's design-forward aesthetics and Le Corbusier's legacy",
//               "Physical presence in Tricity for face-to-face meetings with local businesses",
//               "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
//               "GST invoicing & India-compliant data practices for Punjab & Haryana businesses",
//               "Post-launch support & maintenance with 24/7 availability for critical issues"
//             ].map((item, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-teal-800/50 transition-all duration-300"
//               >
//                 <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-300 text-sm">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link href="/contact" 
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
//             >
//               Start Your Project in Chandigarh <ChevronRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL STRIP with social proof ─────────────────── */}
//       <section className="py-12 bg-gradient-to-r from-teal-900/20 via-cyan-900/10 to-teal-900/20 border-y border-gray-800/50">
//         <div className="container mx-auto px-4 text-center">
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
//           </div>
//           <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
//             "We're a real estate developer in <strong className="text-teal-400">Mohali</strong>. SniperCoders built our project website and Google Ads campaign. We sold 12 units in the first 60 days directly from online leads. Absolutely outstanding — the <strong className="text-teal-400">best software agency in Chandigarh Tricity</strong>."
//           </blockquote>
//           <p className="text-gray-500 mt-4 text-sm">— Real Estate Developer, Aerocity, Mohali, Chandigarh Tricity</p>
//           <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
//             <span>⭐ 5/5 on Google</span>
//             <span>✅ Verified Client</span>
//             <span>📍 Mohali, Punjab</span>
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ with long-tail keywords ────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Frequently Asked Questions —{" "}
//               <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Chandigarh Tricity</span>
//             </h2>
//             <p className="text-gray-400">Answers to common questions about <strong className="text-teal-400">software development, website design, and digital marketing in Chandigarh, Mohali & Panchkula.</strong></p>
//           </motion.div>
//           <div className="space-y-4">
//             {FAQS.map((faq, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} 
//                 className="border border-gray-800 rounded-2xl overflow-hidden"
//               >
//                 <button 
//                   className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-900/60 hover:bg-gray-900 transition-colors" 
//                   onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                 >
//                   <span className="font-semibold text-white text-sm md:text-base">{faq.q}</span>
//                   <ChevronRight className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-90" : ""}`} />
//                 </button>
//                 {openFaq === i && 
//                   <div className="px-6 py-5 bg-gray-950/40 text-gray-300 text-sm leading-relaxed border-t border-gray-800">
//                     {faq.a}
//                   </div>
//                 }
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
//             className="relative bg-gradient-to-br from-teal-900/40 to-cyan-900/30 border border-teal-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 Build Chandigarh's Most<br />
//                 <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Powerful Digital Brand</span>
//               </h2>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 Chandigarh Tricity's <strong className="text-white">30 lakh+ affluent consumers</strong> are searching Google right now for businesses like yours. From <strong className="text-teal-400">Sector 17 to Mohali IT Park, Panchkula to New Chandigarh</strong> — SniperCoders makes sure your business is what they find.
//               </p>
              
//               {/* Contact cards */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <a href={`tel:${phoneNumber}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-teal-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Phone className="w-6 h-6 text-teal-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Call us now</div>
//                     <div className="text-white font-semibold">+91 7006377796</div>
//                   </div>
//                 </a>
//                 <a href={`mailto:${email}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-cyan-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Mail className="w-6 h-6 text-cyan-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Email us</div>
//                     <div className="text-white font-semibold">snipercoders25@gmail.com</div>
//                   </div>
//                 </a>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/contact" 
//                   className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
//                 >
//                   Book Free Consultation <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <Link href="/showcase" 
//                   className="inline-flex items-center gap-2 border border-gray-600 hover:border-teal-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300"
//                 >
//                   View Tricity Portfolio
//                 </Link>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-400" /> Serving Chandigarh UT, Mohali & Panchkula</span>
//                 <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-cyan-400" /> GST Registered • ISO Standards</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//       <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');`}</style>
//     </div>
//   );
// }










// FILE PATH: app/services/best-software-agency-chandigarh/page.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code, Smartphone, Globe, TrendingUp, Award, Users,
  MapPin, Phone, Mail, ChevronRight, Star, CheckCircle,
  Utensils, Coffee, Car, Hotel, ShoppingBag,
  GraduationCap, HeartPulse, Plane, Dumbbell, Camera,
  Briefcase, Home, Truck, Music, Landmark, TreePine,
  Wifi, ShoppingCart, Wrench, Factory, Building2,
  Clock, Shield, Crown, MessageCircle
} from "lucide-react";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut", delay: i * 0.08 } }),
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const SERVICES = [
  { 
    icon: <Globe className="w-7 h-7" />, 
    title: "Website Development Chandigarh", 
    desc: "Professional website design company in Chandigarh. Elegant, modern business websites for Chandigarh&apos;s real estate developers, hospitality businesses, educational institutions & booming retail sector.", 
    gradient: "from-teal-500 to-cyan-600",
    keywords: "website design Chandigarh, web development company Mohali, website designers Panchkula"
  },
  { 
    icon: <Smartphone className="w-7 h-7" />, 
    title: "Mobile App Development Chandigarh", 
    desc: "Top app development agency in Chandigarh Tricity. Clean, high-performance apps for Chandigarh&apos;s service businesses, healthcare providers, fitness studios & growing startup community.", 
    gradient: "from-violet-500 to-purple-700",
    keywords: "app development Chandigarh, mobile app developers Mohali, iOS app development Panchkula"
  },
  { 
    icon: <Code className="w-7 h-7" />, 
    title: "Custom Software Development", 
    desc: "Enterprise software solutions in Chandigarh. Property management systems, school ERP, clinic management platforms & business automation tools built for Tricity&apos;s organised business environment.", 
    gradient: "from-blue-500 to-indigo-600",
    keywords: "software development Chandigarh, custom software Mohali, ERP development Panchkula"
  },
  { 
    icon: <TrendingUp className="w-7 h-7" />, 
    title: "Digital Marketing Agency Chandigarh", 
    desc: "Dominate Google in Chandigarh, Mohali and Panchkula with our local SEO, Google Ads and Punjabi + Hindi + English social media marketing strategies. Best SEO company in Tricity.", 
    gradient: "from-rose-500 to-pink-600",
    keywords: "digital marketing Chandigarh, SEO services Mohali, Google Ads Panchkula"
  },
  { 
    icon: <Users className="w-7 h-7" />, 
    title: "IT Consulting Chandigarh", 
    desc: "Expert IT consultants in Chandigarh Tricity. Digital strategy for Chandigarh&apos;s government-adjacent businesses, education institutions, healthcare facilities & Punjab&apos;s growing business class.", 
    gradient: "from-amber-500 to-orange-600",
    keywords: "IT consulting Chandigarh, technology consultants Mohali, digital transformation Panchkula"
  },
  { 
    icon: <Award className="w-7 h-7" />, 
    title: "Branding & UI/UX Design", 
    desc: "Premium branding agency in Chandigarh. Refined, aspirational brand identities that reflect Chandigarh&apos;s reputation as India&apos;s most planned, affluent, design-forward city.", 
    gradient: "from-fuchsia-500 to-pink-600",
    keywords: "branding agency Chandigarh, UI UX design Mohali, graphic design Panchkula"
  },
];

const BUSINESS_CATEGORIES = [
  { icon: <Home className="w-5 h-5" />, label: "Real Estate in Mohali", keyword: "real estate website Chandigarh", color: "text-teal-400" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Sector 17", keyword: "hotel website design Chandigarh", color: "text-blue-400" },
  { icon: <Utensils className="w-5 h-5" />, label: "Dhabas in Mohali", keyword: "restaurant website Chandigarh", color: "text-orange-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Sector 35", keyword: "cafe website design Chandigarh", color: "text-amber-400" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Boutiques in Panchkula", keyword: "ecommerce website Chandigarh", color: "text-pink-400" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Chandigarh", keyword: "school website design Chandigarh", color: "text-green-400" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Ed-Tech in Mohali", keyword: "educational website Chandigarh", color: "text-lime-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Panchkula", keyword: "healthcare website Chandigarh", color: "text-red-400" },
  { icon: <Car className="w-5 h-5" />, label: "Car Dealers in Zirakpur", keyword: "automotive website Chandigarh", color: "text-cyan-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Sector 8", keyword: "fitness website Chandigarh", color: "text-lime-300" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel in Sector 22", keyword: "travel website Chandigarh", color: "text-sky-400" },
  { icon: <Truck className="w-5 h-5" />, label: "Logistics in Mohali", keyword: "logistics software Chandigarh", color: "text-yellow-400" },
  { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", keyword: "event website Chandigarh", color: "text-rose-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "Finance in Sector 9", keyword: "fintech Chandigarh", color: "text-blue-300" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands Tricity", keyword: "d2c ecommerce Chandigarh", color: "text-emerald-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Home Services", keyword: "service business website Chandigarh", color: "text-orange-300" },
  { icon: <Factory className="w-5 h-5" />, label: "MSME in Punjab", keyword: "industrial website Chandigarh", color: "text-gray-400" },
  { icon: <Building2 className="w-5 h-5" />, label: "IT Companies", keyword: "software company Chandigarh", color: "text-purple-300" },
  { icon: <TreePine className="w-5 h-5" />, label: "Agriculture", keyword: "agri business website Punjab", color: "text-green-300" },
  { icon: <Wifi className="w-5 h-5" />, label: "Telecom & ISPs", keyword: "telecom software Chandigarh", color: "text-cyan-300" },
  { icon: <Camera className="w-5 h-5" />, label: "Photography Studios", keyword: "photography website Chandigarh", color: "text-violet-400" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Law Firms", keyword: "law firm website Chandigarh", color: "text-indigo-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Dental Clinics", keyword: "dental website Chandigarh", color: "text-pink-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Jewellery Stores", keyword: "jewellery website Chandigarh", color: "text-yellow-300" },
];

const STATS = [
  { value: "30+", label: "Tricity Projects Delivered", keyword: "Chandigarh software projects" },
  { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Chandigarh" },
  { value: "24/7", label: "Local Support Available", keyword: "IT support Chandigarh" },
  { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Chandigarh reviews" },
];

const TRUST_SIGNALS = [
  { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
  { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
  { icon: <MapPin className="w-5 h-5" />, text: "Local Tricity Presence" },
  { icon: <MessageCircle className="w-5 h-5" />, text: "Punjabi/Hindi/English Support" },
];

const LOCATIONS = [
  "Sector 17", "Sector 35", "Sector 22", "Sector 8", "Sector 9", "Sector 26",
  "Mohali", "Phase 8 Mohali", "Phase 10 Mohali", "Aerocity Mohali", "New Chandigarh",
  "Panchkula", "Sector 2 Panchkula", "Sector 20 Panchkula", "Zirakpur", "Kharar",
  "Dera Bassi", "Banur", "Landran", "Mullanpur"
];

const FAQS = [
  { 
    q: "Which is the best software agency in Chandigarh Tricity?", 
    a: "SniperCoders is consistently rated among the top software agencies in Chandigarh, Mohali, and Panchkula. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we&apos;re the preferred choice for businesses across Sector 17, Mohali IT Park, and Panchkula&apos;s commercial zones." 
  },
  { 
    q: "Why should Chandigarh businesses invest in digital marketing now?", 
    a: "Chandigarh has one of India&apos;s highest per-capita incomes and an extremely active online consumer base. Searches for real estate in Mohali, restaurants in Sector 17, schools in Panchkula, and clinics across Tricity are growing month on month — your business needs to be visible for them. Our trilingual SEO strategy (Punjabi+Hindi+English) gives you a decisive advantage over competitors." 
  },
  { 
    q: "Can you handle real estate digital marketing in Mohali & New Chandigarh?", 
    a: "Yes. Chandigarh and Mohali&apos;s real estate market is red hot — sectors like Aerocity, New Chandigarh (Mullanpur), Zirakpur and Kharar are all massive growth corridors. We build lead-capture portals, Google Ads campaigns and social media strategies specifically designed to bring qualified property buyers to your projects. We&apos;ve helped multiple Mohali developers sell inventory through digital channels." 
  },
  { 
    q: "Do you offer Punjabi or Hindi language content for SEO?", 
    a: "Absolutely. Punjabi and Hindi language SEO opens up a significantly larger local audience beyond the English-only competition. We create trilingual strategies (Punjabi + Hindi + English) that give Chandigarh businesses a decisive ranking advantage. This is especially effective for local service businesses targeting Punjab&apos;s heartland from Mohali and Panchkula." 
  },
  { 
    q: "How much does a website cost in Chandigarh?", 
    a: "A professional business website in Chandigarh typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Sector 17, Mohali, Panchkula, and across Tricity." 
  },
  { 
    q: "Do you serve Mohali and Panchkula as well?", 
    a: "Yes. We serve the entire Chandigarh Tricity region — Chandigarh (UT), Mohali (Punjab) and Panchkula (Haryana) — as a single integrated digital market. Most of our Tricity clients see customers searching across all three cities. We have specific expertise in Mohali IT Park&apos;s startup ecosystem and Panchkula&apos;s healthcare and residential sectors." 
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function ChandigarhPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#030f0e] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(20,184,166,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(6,182,212,0.14) 0%, transparent 60%), #030f0e" }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-teal-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-cyan-600/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> #1 Software Agency in Chandigarh Tricity • 30+ Projects Delivered
          </motion.div>

          <motion.h1 
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Agency<br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              in Chandigarh, Mohali & Panchkula
            </span>
          </motion.h1>

          <motion.p 
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders helps Chandigarh&apos;s most ambitious businesses — from <strong className="text-teal-400">Sector 17&apos;s retailers</strong> to <strong className="text-teal-400">Mohali&apos;s IT firms</strong> and <strong className="text-teal-400">Panchkula&apos;s real estate developers</strong> — build the digital presence they deserve in India&apos;s most planned city. <span className="text-teal-400">30+ projects • 5★ rated</span>
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-teal-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div 
            custom={2} initial="hidden" animate="show" variants={fadeUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-teal-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm active:scale-95"
            >
              <Phone className="w-5 h-5" /> Call: +91 7006377796
            </a>
          </motion.div>

          <motion.div 
            custom={3} initial="hidden" animate="show" variants={fadeUp} 
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
          >
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO PARA with hyperlocal keywords ────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="bg-gradient-to-br from-gray-900/80 to-teal-950/25 border border-teal-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Chandigarh Tricity — India&apos;s Most Affluent Digital Frontier
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Chandigarh</strong> — Le Corbusier&apos;s masterpiece and India&apos;s most planned city — consistently ranks as the country&apos;s wealthiest urban agglomeration per capita. Together with <strong className="text-teal-400">Mohali (Punjab)</strong> and <strong className="text-teal-400">Panchkula (Haryana)</strong>, the Chandigarh Tricity is a 30 lakh+ consumer market with high disposable income, aspirational consumption habits and excellent internet connectivity.
              </p>
              <p>
                <strong className="text-cyan-400">Real estate in New Chandigarh</strong> is booming. <strong className="text-cyan-400">Mohali&apos;s IT park</strong> and <strong className="text-cyan-400">Aerocity</strong> are drawing corporate investment. <strong className="text-cyan-400">Panchkula&apos;s residential zones</strong> are growing rapidly. And across all three cities, thousands of restaurants in <strong className="text-white">Sector 17</strong>, gyms in <strong className="text-white">Sector 8</strong>, clinics in <strong className="text-white">Sector 20</strong>, schools in <strong className="text-white">Mohali</strong> and retail stores in <strong className="text-white">Panchkula</strong> compete for the attention of Chandigarh&apos;s discerning, deal-seeking online consumers.
              </p>
              <p>
                <strong className="text-white">SniperCoders</strong>, the <strong className="text-teal-400">best software agency in Chandigarh Tricity</strong>, brings surgical precision to this opportunity — building digital assets that match the city&apos;s clean aesthetics, high standards and results-driven business culture. <strong className="text-teal-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
              Our Services in <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Chandigarh Tricity</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Clean, precise, high-performance digital solutions — exactly what Chandigarh&apos;s discerning businesses demand. <strong className="text-teal-400">Web development, mobile apps, SEO, and more.</strong>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-teal-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(20,184,166,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
                <p className="text-xs text-teal-400/70 italic">{svc.keywords}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Chandigarh Tricity</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From <strong className="text-teal-400">Sector 17 Plaza&apos;s boutiques</strong> to <strong className="text-teal-400">Mohali&apos;s IT offices</strong> and <strong className="text-teal-400">Panchkula&apos;s clinics</strong> — every Tricity business deserves digital leadership.
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
            <p className="text-sm text-gray-500 mb-4">Serving all Chandigarh Tricity locations:</p>
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
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
              Why Chandigarh Businesses Choose <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">SniperCoders</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s what makes us the <strong className="text-teal-400">preferred digital partner for Tricity&apos;s most successful businesses</strong>:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Punjabi + Hindi + English trilingual SEO dominance across Tricity - rank in all languages",
              "New Chandigarh, Mullanpur & Aerocity real estate lead-gen sites with high conversion rates",
              "Mohali IT park — startup product websites & SaaS landing pages built for scale",
              "Chandigarh wedding industry — venue, décor & planner websites with stunning portfolios",
              "High-quality clinic & dental website design for Chandigarh&apos;s premium health market",
              "Restaurant & dhaba discovery SEO for Sector 17, 35 & 26 - get found by hungry customers",
              "Gym & fitness studio digital marketing for Chandigarh&apos;s health-conscious audience",
              "Premium branding matching Chandigarh&apos;s design-forward aesthetics and Le Corbusier&apos;s legacy",
              "Physical presence in Tricity for face-to-face meetings with local businesses",
              "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
              "GST invoicing & India-compliant data practices for Punjab & Haryana businesses",
              "Post-launch support & maintenance with 24/7 availability for critical issues"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-teal-800/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Start Your Project in Chandigarh <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP with social proof ─────────────────── */}
      <section className="py-12 bg-gradient-to-r from-teal-900/20 via-cyan-900/10 to-teal-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
            &ldquo;We&apos;re a real estate developer in <strong className="text-teal-400">Mohali</strong>. SniperCoders built our project website and Google Ads campaign. We sold 12 units in the first 60 days directly from online leads. Absolutely outstanding — the <strong className="text-teal-400">best software agency in Chandigarh Tricity</strong>.&rdquo;
          </blockquote>
          <p className="text-gray-500 mt-4 text-sm">— Real Estate Developer, Aerocity, Mohali, Chandigarh Tricity</p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
            <span>⭐ 5/5 on Google</span>
            <span>✅ Verified Client</span>
            <span>📍 Mohali, Punjab</span>
          </div>
        </div>
      </section>

      {/* ── FAQ with long-tail keywords ────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions —{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Chandigarh Tricity</span>
            </h2>
            <p className="text-gray-400">Answers to common questions about <strong className="text-teal-400">software development, website design, and digital marketing in Chandigarh, Mohali & Panchkula.</strong></p>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} 
                className="border border-gray-800 rounded-2xl overflow-hidden"
              >
                <button 
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-900/60 hover:bg-gray-900 transition-colors" 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white text-sm md:text-base">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-90" : ""}`} />
                </button>
                {openFaq === i && 
                  <div className="px-6 py-5 bg-gray-950/40 text-gray-300 text-sm leading-relaxed border-t border-gray-800">
                    {faq.a}
                  </div>
                }
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
            className="relative bg-gradient-to-br from-teal-900/40 to-cyan-900/30 border border-teal-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Build Chandigarh&apos;s Most<br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Powerful Digital Brand</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Chandigarh Tricity&apos;s <strong className="text-white">30 lakh+ affluent consumers</strong> are searching Google right now for businesses like yours. From <strong className="text-teal-400">Sector 17 to Mohali IT Park, Panchkula to New Chandigarh</strong> — SniperCoders makes sure your business is what they find.
              </p>
              
              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-teal-500 rounded-xl px-6 py-4 transition-all duration-300 active:scale-95"
                >
                  <Phone className="w-6 h-6 text-teal-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Call us now</div>
                    <div className="text-white font-semibold">+91 7006377796</div>
                  </div>
                </a>
                <a href={`mailto:${email}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-cyan-500 rounded-xl px-6 py-4 transition-all duration-300 active:scale-95"
                >
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Email us</div>
                    <div className="text-white font-semibold">snipercoders25@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase" 
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-teal-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 active:scale-95"
                >
                  View Tricity Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-400" /> Serving Chandigarh UT, Mohali & Panchkula</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-cyan-400" /> GST Registered • ISO Standards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');`}</style>
    </div>
  );
}