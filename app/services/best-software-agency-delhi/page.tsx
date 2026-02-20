
// // FILE PATH: app/services/best-software-agency-delhi/page.tsx

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   Code, Smartphone, Globe, TrendingUp, Award, Users,
//   MapPin, Phone, Mail, ChevronRight, Star, CheckCircle,
//   Utensils, Coffee, Car, Hotel, ShoppingBag,
//   GraduationCap, HeartPulse, Plane, Dumbbell, Camera,
//   Briefcase, Home, Truck, Music, Landmark, TreePine,
//   Wifi, ShoppingCart, Wrench, Factory, Building2,
//   Clock, Shield, Crown, Rocket, Gem, Sparkles,
//   Building, Store, Library, Scale
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
//     title: "Website Development Delhi", 
//     desc: "Professional website design company in Delhi. High-performance business websites, B2B portals, government-compliant platforms & eCommerce stores built for Delhi's hyper-competitive digital landscape.", 
//     gradient: "from-red-500 to-rose-600",
//     keywords: "website design Delhi, web development company Delhi NCR, ecommerce website Delhi"
//   },
//   { 
//     icon: <Smartphone className="w-7 h-7" />, 
//     title: "Mobile App Development Delhi", 
//     desc: "Top app development agency in Delhi NCR. Feature-rich Android & iOS apps for Delhi startups, retailers, healthcare providers & enterprise clients with nationwide reach.", 
//     gradient: "from-violet-500 to-purple-700",
//     keywords: "app development Delhi, mobile app developers Noida, iOS app development Gurugram"
//   },
//   { 
//     icon: <Code className="w-7 h-7" />, 
//     title: "Custom Software Development Delhi", 
//     desc: "Enterprise software solutions in Delhi NCR. Enterprise ERP, CRM platforms, SaaS solutions, billing software & automation systems for Delhi's large-scale businesses and corporations.", 
//     gradient: "from-blue-500 to-cyan-600",
//     keywords: "software development Delhi, custom software Noida, ERP development Gurugram"
//   },
//   { 
//     icon: <TrendingUp className="w-7 h-7" />, 
//     title: "Digital Marketing Agency Delhi", 
//     desc: "Dominate Delhi's fiercely competitive search results with our advanced local SEO, Google Ads, Meta Ads & comprehensive digital marketing strategies. Best SEO company in Delhi NCR.", 
//     gradient: "from-orange-500 to-amber-600",
//     keywords: "digital marketing Delhi, SEO services Noida, Google Ads Gurugram"
//   },
//   { 
//     icon: <Users className="w-7 h-7" />, 
//     title: "IT Consulting Delhi", 
//     desc: "Expert IT consultants in Delhi NCR. Strategic technology consulting for Delhi's enterprises, government contractors, NGOs & startups navigating India's capital's complex business ecosystem.", 
//     gradient: "from-emerald-500 to-teal-600",
//     keywords: "IT consulting Delhi, technology consultants Noida, digital transformation Gurugram"
//   },
//   { 
//     icon: <Award className="w-7 h-7" />, 
//     title: "UI/UX Design Agency Delhi", 
//     desc: "Premium UI/UX design company in Delhi. World-class interface design and brand identities that stand out in Delhi's competitive consumer market — from Connaught Place to Cyber City.", 
//     gradient: "from-fuchsia-500 to-pink-600",
//     keywords: "UI UX design Delhi, product design Noida, branding agency Gurugram"
//   },
// ];

// const BUSINESS_CATEGORIES = [
//   { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in CP", keyword: "restaurant website Delhi", color: "text-orange-400" },
//   { icon: <Coffee className="w-5 h-5" />, label: "Cafés in South Delhi", keyword: "cafe website Delhi", color: "text-amber-400" },
//   { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Aerocity", keyword: "hotel website Delhi", color: "text-blue-400" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail in Lajpat Nagar", keyword: "ecommerce website Delhi", color: "text-pink-400" },
//   { icon: <Car className="w-5 h-5" />, label: "Car Dealers in Karol Bagh", keyword: "automotive website Delhi", color: "text-cyan-400" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Coaching in Mukherjee Nagar", keyword: "education website Delhi", color: "text-green-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in South Ex", keyword: "hospital website Delhi", color: "text-red-400" },
//   { icon: <Plane className="w-5 h-5" />, label: "Travel in Connaught Place", keyword: "travel website Delhi", color: "text-sky-400" },
//   { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Noida", keyword: "fitness website Delhi", color: "text-lime-400" },
//   { icon: <Camera className="w-5 h-5" />, label: "Photo Studios", keyword: "photography website Delhi", color: "text-violet-400" },
//   { icon: <Briefcase className="w-5 h-5" />, label: "Startups in 71 Noida", keyword: "startup website Delhi", color: "text-indigo-400" },
//   { icon: <Home className="w-5 h-5" />, label: "Real Estate in Gurugram", keyword: "real estate website Delhi", color: "text-teal-400" },
//   { icon: <Truck className="w-5 h-5" />, label: "Logistics in Delhi", keyword: "logistics software Delhi", color: "text-yellow-400" },
//   { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", keyword: "event website Delhi", color: "text-rose-400" },
//   { icon: <Landmark className="w-5 h-5" />, label: "NBFCs in Connaught Place", keyword: "fintech Delhi", color: "text-blue-300" },
//   { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands", keyword: "d2c ecommerce Delhi", color: "text-emerald-400" },
//   { icon: <Wrench className="w-5 h-5" />, label: "Home Services", keyword: "service business website Delhi", color: "text-orange-300" },
//   { icon: <Factory className="w-5 h-5" />, label: "MSME in Noida", keyword: "industrial website Delhi", color: "text-gray-400" },
//   { icon: <Building2 className="w-5 h-5" />, label: "NGOs & Foundations", keyword: "NGO website Delhi", color: "text-purple-300" },
//   { icon: <Wifi className="w-5 h-5" />, label: "IT Companies in Noida", keyword: "software company Delhi", color: "text-cyan-300" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Clinics in Greater Kailash", keyword: "clinic website Delhi", color: "text-pink-300" },
//   { icon: <Car className="w-5 h-5" />, label: "Used Cars in Delhi", keyword: "automotive portal Delhi", color: "text-amber-300" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Delhi", keyword: "school website Delhi", color: "text-lime-300" },
//   { icon: <TreePine className="w-5 h-5" />, label: "Pharma Companies", keyword: "pharmaceutical website Delhi", color: "text-green-300" },
//   { icon: <Store className="w-5 h-5" />, label: "Wholesale in Chandni Chowk", keyword: "wholesale B2B website Delhi", color: "text-yellow-400" },
//   { icon: <Library className="w-5 h-5" />, label: "Govt Contractors", keyword: "government website Delhi", color: "text-indigo-300" },
// ];

// const STATS = [
//   { value: "30+", label: "Delhi NCR Projects Delivered", keyword: "Delhi software projects" },
//   { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Delhi" },
//   { value: "24/7", label: "Local Support Available", keyword: "IT support Delhi" },
//   { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Delhi reviews" },
// ];

// const TRUST_SIGNALS = [
//   { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
//   { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
//   { icon: <MapPin className="w-5 h-5" />, text: "Delhi NCR Presence" },
//   { icon: <Gem className="w-5 h-5" />, text: "Hindi/English Bilingual Support" },
// ];

// const LOCATIONS = [
//   "Connaught Place", "South Delhi", "North Delhi", "East Delhi", "West Delhi",
//   "Lajpat Nagar", "Karol Bagh", "Chandni Chowk", "Rajouri Garden", "Janakpuri",
//   "Dwarka", "Rohini", "Pitampura", "Mukherjee Nagar", "Greater Kailash",
//   "South Ex", "Hauz Khas", "Saket", "Vasant Kunj", "Nehru Place",
//   "Noida", "Sector 18 Noida", "Sector 62 Noida", "Sector 71 Noida",
//   "Gurugram", "Cyber City Gurugram", "DLF Phase 1-5 Gurugram", "Sohna Road",
//   "Faridabad", "Ghaziabad", "Vaishali", "Indirapuram", "Aerocity"
// ];

// const FAQS = [
//   { 
//     q: "Which is the best software agency in Delhi NCR?", 
//     a: "SniperCoders is consistently rated among the top software agencies in Delhi NCR. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Connaught Place, Noida, Gurugram, and South Delhi." 
//   },
//   { 
//     q: "How competitive is SEO for businesses in Delhi?", 
//     a: "Delhi is one of India's most competitive SEO markets with millions of businesses fighting for the same keywords. That's why we go beyond basic SEO — combining technical optimization, hyperlocal content for specific Delhi neighbourhoods, Google Business Profile authority, and conversion-focused web design to help your business stand out. Our Hindi+English bilingual strategy gives you an edge over competitors targeting only English keywords." 
//   },
//   { 
//     q: "Can SniperCoders serve large enterprises in Delhi?", 
//     a: "Yes. We work with businesses of all sizes — from one-person shops in Lajpat Nagar to large corporations in Connaught Place and Cyber City Gurugram. We scale our solutions to match your needs. Our enterprise clients appreciate our robust security, compliance with Indian IT regulations, and ability to integrate with existing ERP and CRM systems." 
//   },
//   { 
//     q: "Do you have experience with Delhi's B2B and government sectors?", 
//     a: "Yes. We've built B2B portals, government e-procurement compliant websites, and digital catalogs for wholesale and trading businesses across Delhi NCR — from Chandni Chowk's wholesale markets to Okhla's industrial area. We understand the compliance requirements for government contractors and MSMEs." 
//   },
//   { 
//     q: "How much does a website cost in Delhi?", 
//     a: "A professional business website in Delhi typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Delhi, Noida, Gurugram, and across NCR, with enterprise solutions for larger corporations." 
//   },
//   { 
//     q: "What is the typical project turnaround for Delhi clients?", 
//     a: "Standard business websites: 7–14 days. eCommerce platforms: 21–45 days. Custom software: scoped after discovery. We're committed to fast, quality delivery for every Delhi client, understanding that speed to market is critical in such a competitive environment." 
//   },
// ];

// // Contact information
// const phoneNumber = "+917006377796";
// const email = "snipercoders25@gmail.com";

// export default function DelhiPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-[#100408] text-white font-sans overflow-x-hidden">

//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section
//         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
//         style={{
//           background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(239,68,68,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(245,158,11,0.12) 0%, transparent 60%), #100408"
//         }}
//       >
//         <div className="absolute inset-0 opacity-[0.04]"
//           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
//         <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-red-600/15 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-orange-600/15 blur-[80px] pointer-events-none" />

//         <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
//           >
//             <Crown className="w-4 h-4" /> #1 Software Agency in Delhi NCR • 30+ Projects Delivered
//           </motion.div>

//           <motion.h1 initial="hidden" animate="show" variants={fadeUp}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Best Software Agency<br />
//             <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
//               in Delhi NCR
//             </span>
//           </motion.h1>

//           <motion.p custom={1} initial="hidden" animate="show" variants={fadeUp}
//             className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
//           >
//             SniperCoders empowers Delhi businesses to dominate the digital space — delivering enterprise-grade <strong className="text-red-400">websites, mobile apps, custom software & aggressive digital marketing</strong> for India's capital's most ambitious brands. <strong className="text-red-400">30+ projects • 5★ rated</strong>
//           </motion.p>

//           {/* Trust signals */}
//           <motion.div
//             custom={1.5} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {TRUST_SIGNALS.map((signal, i) => (
//               <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
//                 <span className="text-red-400">{signal.icon}</span>
//                 {signal.text}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Consultation <ChevronRight className="w-5 h-5" />
//             </Link>
//             <a href={`tel:${phoneNumber}`}
//               className="inline-flex items-center gap-2 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
//             >
//               <Phone className="w-5 h-5" /> Call: +91 7006377796
//             </a>
//           </motion.div>

//           <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
//             {STATS.map((s, i) => (
//               <div key={i} className="text-center">
//                 <div className="text-3xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">{s.value}</div>
//                 <div className="text-xs text-gray-500 mt-1">{s.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── INTRO with hyperlocal keywords ──────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
//             className="bg-gradient-to-br from-gray-900/80 to-red-950/20 border border-red-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Winning the Digital Battle in Delhi NCR
//             </h2>
//             <div className="space-y-4 text-gray-300 leading-relaxed">
//               <p>
//                 <strong className="text-white">Delhi NCR</strong> — India's economic and political powerhouse — is home to over <strong className="text-red-400">3.3 crore people</strong>, thousands of MSMEs, hundreds of multinational corporations, and one of India's largest startup ecosystems. From <strong className="text-cyan-400">Chandni Chowk's wholesale traders</strong> to <strong className="text-cyan-400">Connaught Place's premium brands</strong>, from <strong className="text-cyan-400">South Delhi's elite restaurants</strong> to <strong className="text-cyan-400">Noida's tech corridor</strong> and <strong className="text-cyan-400">Gurugram's Cyber City</strong> — every Delhi business is fighting for the same Google real estate.
//               </p>
//               <p>
//                 In this intensely competitive environment, your digital presence is your most powerful business weapon. <strong className="text-white">SniperCoders</strong>, the <strong className="text-red-400">best software agency in Delhi NCR</strong>, helps you fight that battle and win it decisively with <strong className="text-red-400">Hindi+English bilingual SEO, hyperlocal strategies for every Delhi neighbourhood, and enterprise-grade solutions</strong> that scale with your ambition.
//               </p>
//               <p>
//                 We bring world-class engineering talent to solve Delhi's unique business challenges — from <strong className="text-white">government-compliant portals for contractors</strong> to <strong className="text-white">wholesale B2B platforms for Chandni Chowk traders</strong> and <strong className="text-white">lead-gen websites for Gurugram real estate</strong> — all at a fraction of what Delhi agencies charge. <strong className="text-red-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
//               <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Delhi NCR</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Enterprise-ready digital solutions for India's most competitive business market. <strong className="text-red-400">Web development, mobile apps, SEO, and more.</strong>
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((svc, i) => (
//               <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="group relative bg-gray-900/60 border border-gray-800 hover:border-red-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(239,68,68,0.08), transparent)" }} />
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
//                 <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors">{svc.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
//                 <p className="text-xs text-red-400/70 italic">{svc.keywords}</p>
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
//       <section className="py-20 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Industries We Serve in{" "}
//               <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Delhi NCR</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               From <strong className="text-red-400">Chandni Chowk wholesalers</strong> to <strong className="text-red-400">Gurugram SaaS startups</strong> — every Delhi NCR business category thrives with SniperCoders.
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {BUSINESS_CATEGORIES.map((cat, i) => (
//               <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
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
//             <p className="text-sm text-gray-500 mb-4">Serving all Delhi NCR locations:</p>
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

//       {/* ── ADVANTAGES with psychological triggers ─────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
//               The SniperCoders Edge in{" "}
//               <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Delhi NCR</span>
//             </h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//               Here's what makes us the <strong className="text-red-400">preferred digital partner for Delhi's most ambitious businesses</strong>:
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               "Hyperlocal SEO for every Delhi neighbourhood — from CP to Dwarka, Noida to Gurugram",
//               "Hindi & English bilingual content for maximum search coverage across Delhi NCR",
//               "B2B portal development for Delhi's wholesale & trading markets in Chandni Chowk & Sadar Bazaar",
//               "Government e-procurement compliant website architecture for contractors & MSMEs",
//               "Delhi NCR's full coverage — Delhi, Noida, Gurugram, Faridabad, Ghaziabad & Greater Noida",
//               "Enterprise-grade security & GDPR/IT Act compliance for corporate clients",
//               "Advanced CRM & lead management integrations for real estate & education sectors",
//               "Performance marketing — high-ROI Google & Meta Ad campaigns with Delhi-specific targeting",
//               "Educational institute websites for Mukherjee Nagar & Rajinder Nagar coaching hubs",
//               "Ecommerce solutions for Lajpat Nagar & Karol Bagh retail markets",
//               "Real estate portals for Gurugram & Noida property developers",
//               "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways"
//             ].map((item, i) => (
//               <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-red-800/50 transition-all duration-300"
//               >
//                 <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-300 text-sm">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
//               Start Your Project in Delhi NCR <ChevronRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL with social proof ───────────────────────── */}
//       <section className="py-12 bg-gradient-to-r from-red-900/20 via-orange-900/10 to-red-900/20 border-y border-gray-800/50">
//         <div className="container mx-auto px-4 text-center">
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
//           </div>
//           <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
//             "We're a coaching institute in <strong className="text-red-400">Mukherjee Nagar, Delhi</strong>. SniperCoders built our website and ran Google Ads targeting UPSC aspirants. Our enquiries went up <strong className="text-red-400">4x in the first month</strong>. They truly understand Delhi's competitive education market and the importance of Hindi keywords. <strong className="text-red-400">Best software agency in Delhi NCR</strong> by far."
//           </blockquote>
//           <p className="text-gray-500 mt-4 text-sm">— Coaching Institute Owner, Mukherjee Nagar, Delhi</p>
//           <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
//             <span>⭐ 5/5 on Google</span>
//             <span>✅ Verified Client</span>
//             <span>📍 Mukherjee Nagar, Delhi</span>
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ with long-tail keywords ────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Frequently Asked Questions —{" "}
//               <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Delhi NCR</span>
//             </h2>
//             <p className="text-gray-400">Answers to common questions about <strong className="text-red-400">software development, website design, and digital marketing in Delhi, Noida & Gurugram.</strong></p>
//           </motion.div>
//           <div className="space-y-4">
//             {FAQS.map((faq, i) => (
//               <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="border border-gray-800 rounded-2xl overflow-hidden">
//                 <button className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-900/60 hover:bg-gray-900 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
//                   <span className="font-semibold text-white text-sm md:text-base">{faq.q}</span>
//                   <ChevronRight className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-90" : ""}`} />
//                 </button>
//                 {openFaq === i && (
//                   <div className="px-6 py-5 bg-gray-950/40 text-gray-300 text-sm leading-relaxed border-t border-gray-800">{faq.a}</div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA with contact info ──────────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-4xl text-center">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
//             className="relative bg-gradient-to-br from-red-900/40 to-orange-900/30 border border-red-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 Ready to Win Delhi's<br />
//                 <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Digital Market?</span>
//               </h2>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 Delhi NCR's <strong className="text-white">3.3 crore+ consumers</strong> are searching online right now. From <strong className="text-red-400">Connaught Place to Cyber City, Chandni Chowk to Noida</strong> — SniperCoders puts YOUR business in front of them before your competitors do.
//               </p>
              
//               {/* Contact cards */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <a href={`tel:${phoneNumber}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-red-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Phone className="w-6 h-6 text-red-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Call us now</div>
//                     <div className="text-white font-semibold">+91 7006377796</div>
//                   </div>
//                 </a>
//                 <a href={`mailto:${email}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-orange-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Mail className="w-6 h-6 text-orange-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Email us</div>
//                     <div className="text-white font-semibold">snipercoders25@gmail.com</div>
//                   </div>
//                 </a>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
//                   Book Free Consultation <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
//                   View Delhi NCR Portfolio
//                 </Link>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-400" /> Serving Delhi, Noida, Gurugram, Faridabad & Ghaziabad</span>
//                 <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-orange-400" /> GST Registered • ISO Standards</span>
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









// FILE PATH: app/services/best-software-agency-delhi/page.tsx

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
  Clock, Shield, Crown, Gem, Store, Library
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
    title: "Website Development Delhi", 
    desc: "Professional website design company in Delhi. High-performance business websites, B2B portals, government-compliant platforms & eCommerce stores built for Delhi&apos;s hyper-competitive digital landscape.", 
    gradient: "from-red-500 to-rose-600",
    keywords: "website design Delhi, web development company Delhi NCR, ecommerce website Delhi"
  },
  { 
    icon: <Smartphone className="w-7 h-7" />, 
    title: "Mobile App Development Delhi", 
    desc: "Top app development agency in Delhi NCR. Feature-rich Android & iOS apps for Delhi startups, retailers, healthcare providers & enterprise clients with nationwide reach.", 
    gradient: "from-violet-500 to-purple-700",
    keywords: "app development Delhi, mobile app developers Noida, iOS app development Gurugram"
  },
  { 
    icon: <Code className="w-7 h-7" />, 
    title: "Custom Software Development Delhi", 
    desc: "Enterprise software solutions in Delhi NCR. Enterprise ERP, CRM platforms, SaaS solutions, billing software & automation systems for Delhi&apos;s large-scale businesses and corporations.", 
    gradient: "from-blue-500 to-cyan-600",
    keywords: "software development Delhi, custom software Noida, ERP development Gurugram"
  },
  { 
    icon: <TrendingUp className="w-7 h-7" />, 
    title: "Digital Marketing Agency Delhi", 
    desc: "Dominate Delhi&apos;s fiercely competitive search results with our advanced local SEO, Google Ads, Meta Ads & comprehensive digital marketing strategies. Best SEO company in Delhi NCR.", 
    gradient: "from-orange-500 to-amber-600",
    keywords: "digital marketing Delhi, SEO services Noida, Google Ads Gurugram"
  },
  { 
    icon: <Users className="w-7 h-7" />, 
    title: "IT Consulting Delhi", 
    desc: "Expert IT consultants in Delhi NCR. Strategic technology consulting for Delhi&apos;s enterprises, government contractors, NGOs & startups navigating India&apos;s capital&apos;s complex business ecosystem.", 
    gradient: "from-emerald-500 to-teal-600",
    keywords: "IT consulting Delhi, technology consultants Noida, digital transformation Gurugram"
  },
  { 
    icon: <Award className="w-7 h-7" />, 
    title: "UI/UX Design Agency Delhi", 
    desc: "Premium UI/UX design company in Delhi. World-class interface design and brand identities that stand out in Delhi&apos;s competitive consumer market — from Connaught Place to Cyber City.", 
    gradient: "from-fuchsia-500 to-pink-600",
    keywords: "UI UX design Delhi, product design Noida, branding agency Gurugram"
  },
];

const BUSINESS_CATEGORIES = [
  { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in CP", keyword: "restaurant website Delhi", color: "text-orange-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Cafés in South Delhi", keyword: "cafe website Delhi", color: "text-amber-400" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Aerocity", keyword: "hotel website Delhi", color: "text-blue-400" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail in Lajpat Nagar", keyword: "ecommerce website Delhi", color: "text-pink-400" },
  { icon: <Car className="w-5 h-5" />, label: "Car Dealers in Karol Bagh", keyword: "automotive website Delhi", color: "text-cyan-400" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Coaching in Mukherjee Nagar", keyword: "education website Delhi", color: "text-green-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in South Ex", keyword: "hospital website Delhi", color: "text-red-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel in Connaught Place", keyword: "travel website Delhi", color: "text-sky-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Noida", keyword: "fitness website Delhi", color: "text-lime-400" },
  { icon: <Camera className="w-5 h-5" />, label: "Photo Studios", keyword: "photography website Delhi", color: "text-violet-400" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Startups in 71 Noida", keyword: "startup website Delhi", color: "text-indigo-400" },
  { icon: <Home className="w-5 h-5" />, label: "Real Estate in Gurugram", keyword: "real estate website Delhi", color: "text-teal-400" },
  { icon: <Truck className="w-5 h-5" />, label: "Logistics in Delhi", keyword: "logistics software Delhi", color: "text-yellow-400" },
  { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", keyword: "event website Delhi", color: "text-rose-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "NBFCs in Connaught Place", keyword: "fintech Delhi", color: "text-blue-300" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands", keyword: "d2c ecommerce Delhi", color: "text-emerald-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Home Services", keyword: "service business website Delhi", color: "text-orange-300" },
  { icon: <Factory className="w-5 h-5" />, label: "MSME in Noida", keyword: "industrial website Delhi", color: "text-gray-400" },
  { icon: <Building2 className="w-5 h-5" />, label: "NGOs & Foundations", keyword: "NGO website Delhi", color: "text-purple-300" },
  { icon: <Wifi className="w-5 h-5" />, label: "IT Companies in Noida", keyword: "software company Delhi", color: "text-cyan-300" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Clinics in Greater Kailash", keyword: "clinic website Delhi", color: "text-pink-300" },
  { icon: <Car className="w-5 h-5" />, label: "Used Cars in Delhi", keyword: "automotive portal Delhi", color: "text-amber-300" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Delhi", keyword: "school website Delhi", color: "text-lime-300" },
  { icon: <TreePine className="w-5 h-5" />, label: "Pharma Companies", keyword: "pharmaceutical website Delhi", color: "text-green-300" },
  { icon: <Store className="w-5 h-5" />, label: "Wholesale in Chandni Chowk", keyword: "wholesale B2B website Delhi", color: "text-yellow-400" },
  { icon: <Library className="w-5 h-5" />, label: "Govt Contractors", keyword: "government website Delhi", color: "text-indigo-300" },
];

const STATS = [
  { value: "30+", label: "Delhi NCR Projects Delivered", keyword: "Delhi software projects" },
  { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Delhi" },
  { value: "24/7", label: "Local Support Available", keyword: "IT support Delhi" },
  { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Delhi reviews" },
];

const TRUST_SIGNALS = [
  { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
  { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
  { icon: <MapPin className="w-5 h-5" />, text: "Delhi NCR Presence" },
  { icon: <Gem className="w-5 h-5" />, text: "Hindi/English Bilingual Support" },
];

const LOCATIONS = [
  "Connaught Place", "South Delhi", "North Delhi", "East Delhi", "West Delhi",
  "Lajpat Nagar", "Karol Bagh", "Chandni Chowk", "Rajouri Garden", "Janakpuri",
  "Dwarka", "Rohini", "Pitampura", "Mukherjee Nagar", "Greater Kailash",
  "South Ex", "Hauz Khas", "Saket", "Vasant Kunj", "Nehru Place",
  "Noida", "Sector 18 Noida", "Sector 62 Noida", "Sector 71 Noida",
  "Gurugram", "Cyber City Gurugram", "DLF Phase 1-5 Gurugram", "Sohna Road",
  "Faridabad", "Ghaziabad", "Vaishali", "Indirapuram", "Aerocity"
];

const FAQS = [
  { 
    q: "Which is the best software agency in Delhi NCR?", 
    a: "SniperCoders is consistently rated among the top software agencies in Delhi NCR. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Connaught Place, Noida, Gurugram, and South Delhi." 
  },
  { 
    q: "How competitive is SEO for businesses in Delhi?", 
    a: "Delhi is one of India&apos;s most competitive SEO markets with millions of businesses fighting for the same keywords. That&apos;s why we go beyond basic SEO — combining technical optimization, hyperlocal content for specific Delhi neighbourhoods, Google Business Profile authority, and conversion-focused web design to help your business stand out. Our Hindi+English bilingual strategy gives you an edge over competitors targeting only English keywords." 
  },
  { 
    q: "Can SniperCoders serve large enterprises in Delhi?", 
    a: "Yes. We work with businesses of all sizes — from one-person shops in Lajpat Nagar to large corporations in Connaught Place and Cyber City Gurugram. We scale our solutions to match your needs. Our enterprise clients appreciate our robust security, compliance with Indian IT regulations, and ability to integrate with existing ERP and CRM systems." 
  },
  { 
    q: "Do you have experience with Delhi&apos;s B2B and government sectors?", 
    a: "Yes. We&apos;ve built B2B portals, government e-procurement compliant websites, and digital catalogs for wholesale and trading businesses across Delhi NCR — from Chandni Chowk&apos;s wholesale markets to Okhla&apos;s industrial area. We understand the compliance requirements for government contractors and MSMEs." 
  },
  { 
    q: "How much does a website cost in Delhi?", 
    a: "A professional business website in Delhi typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Delhi, Noida, Gurugram, and across NCR, with enterprise solutions for larger corporations." 
  },
  { 
    q: "What is the typical project turnaround for Delhi clients?", 
    a: "Standard business websites: 7–14 days. eCommerce platforms: 21–45 days. Custom software: scoped after discovery. We&apos;re committed to fast, quality delivery for every Delhi client, understanding that speed to market is critical in such a competitive environment." 
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function DelhiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#100408] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(239,68,68,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(245,158,11,0.12) 0%, transparent 60%), #100408"
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-red-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-orange-600/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> #1 Software Agency in Delhi NCR • 30+ Projects Delivered
          </motion.div>

          <motion.h1 initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Agency<br />
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              in Delhi NCR
            </span>
          </motion.h1>

          <motion.p custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders empowers Delhi businesses to dominate the digital space — delivering enterprise-grade <strong className="text-red-400">websites, mobile apps, custom software & aggressive digital marketing</strong> for India&apos;s capital&apos;s most ambitious brands. <strong className="text-red-400">30+ projects • 5★ rated</strong>
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-red-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-red-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm active:scale-95"
            >
              <Phone className="w-5 h-5" /> Call: +91 7006377796
            </a>
          </motion.div>

          <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO with hyperlocal keywords ──────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="bg-gradient-to-br from-gray-900/80 to-red-950/20 border border-red-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Winning the Digital Battle in Delhi NCR
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Delhi NCR</strong> — India&apos;s economic and political powerhouse — is home to over <strong className="text-red-400">3.3 crore people</strong>, thousands of MSMEs, hundreds of multinational corporations, and one of India&apos;s largest startup ecosystems. From <strong className="text-cyan-400">Chandni Chowk&apos;s wholesale traders</strong> to <strong className="text-cyan-400">Connaught Place&apos;s premium brands</strong>, from <strong className="text-cyan-400">South Delhi&apos;s elite restaurants</strong> to <strong className="text-cyan-400">Noida&apos;s tech corridor</strong> and <strong className="text-cyan-400">Gurugram&apos;s Cyber City</strong> — every Delhi business is fighting for the same Google real estate.
              </p>
              <p>
                In this intensely competitive environment, your digital presence is your most powerful business weapon. <strong className="text-white">SniperCoders</strong>, the <strong className="text-red-400">best software agency in Delhi NCR</strong>, helps you fight that battle and win it decisively with <strong className="text-red-400">Hindi+English bilingual SEO, hyperlocal strategies for every Delhi neighbourhood, and enterprise-grade solutions</strong> that scale with your ambition.
              </p>
              <p>
                We bring world-class engineering talent to solve Delhi&apos;s unique business challenges — from <strong className="text-white">government-compliant portals for contractors</strong> to <strong className="text-white">wholesale B2B platforms for Chandni Chowk traders</strong> and <strong className="text-white">lead-gen websites for Gurugram real estate</strong> — all at a fraction of what Delhi agencies charge. <strong className="text-red-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Delhi NCR</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enterprise-ready digital solutions for India&apos;s most competitive business market. <strong className="text-red-400">Web development, mobile apps, SEO, and more.</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-red-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(239,68,68,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
                <p className="text-xs text-red-400/70 italic">{svc.keywords}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Delhi NCR</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From <strong className="text-red-400">Chandni Chowk wholesalers</strong> to <strong className="text-red-400">Gurugram SaaS startups</strong> — every Delhi NCR business category thrives with SniperCoders.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BUSINESS_CATEGORIES.map((cat, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
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
            <p className="text-sm text-gray-500 mb-4">Serving all Delhi NCR locations:</p>
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

      {/* ── ADVANTAGES with psychological triggers ─────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
              The SniperCoders Edge in{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Delhi NCR</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s what makes us the <strong className="text-red-400">preferred digital partner for Delhi&apos;s most ambitious businesses</strong>:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Hyperlocal SEO for every Delhi neighbourhood — from CP to Dwarka, Noida to Gurugram",
              "Hindi & English bilingual content for maximum search coverage across Delhi NCR",
              "B2B portal development for Delhi&apos;s wholesale & trading markets in Chandni Chowk & Sadar Bazaar",
              "Government e-procurement compliant website architecture for contractors & MSMEs",
              "Delhi NCR&apos;s full coverage — Delhi, Noida, Gurugram, Faridabad, Ghaziabad & Greater Noida",
              "Enterprise-grade security & GDPR/IT Act compliance for corporate clients",
              "Advanced CRM & lead management integrations for real estate & education sectors",
              "Performance marketing — high-ROI Google & Meta Ad campaigns with Delhi-specific targeting",
              "Educational institute websites for Mukherjee Nagar & Rajinder Nagar coaching hubs",
              "Ecommerce solutions for Lajpat Nagar & Karol Bagh retail markets",
              "Real estate portals for Gurugram & Noida property developers",
              "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways"
            ].map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-red-800/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
              Start Your Project in Delhi NCR <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL with social proof ───────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-red-900/20 via-orange-900/10 to-red-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
            &ldquo;We&apos;re a coaching institute in <strong className="text-red-400">Mukherjee Nagar, Delhi</strong>. SniperCoders built our website and ran Google Ads targeting UPSC aspirants. Our enquiries went up <strong className="text-red-400">4x in the first month</strong>. They truly understand Delhi&apos;s competitive education market and the importance of Hindi keywords. <strong className="text-red-400">Best software agency in Delhi NCR</strong> by far.&rdquo;
          </blockquote>
          <p className="text-gray-500 mt-4 text-sm">— Coaching Institute Owner, Mukherjee Nagar, Delhi</p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
            <span>⭐ 5/5 on Google</span>
            <span>✅ Verified Client</span>
            <span>📍 Mukherjee Nagar, Delhi</span>
          </div>
        </div>
      </section>

      {/* ── FAQ with long-tail keywords ────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions —{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Delhi NCR</span>
            </h2>
            <p className="text-gray-400">Answers to common questions about <strong className="text-red-400">software development, website design, and digital marketing in Delhi, Noida & Gurugram.</strong></p>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="border border-gray-800 rounded-2xl overflow-hidden">
                <button className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-900/60 hover:bg-gray-900 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-white text-sm md:text-base">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-90" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-5 bg-gray-950/40 text-gray-300 text-sm leading-relaxed border-t border-gray-800">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA with contact info ──────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="relative bg-gradient-to-br from-red-900/40 to-orange-900/30 border border-red-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Ready to Win Delhi&apos;s<br />
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Digital Market?</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Delhi NCR&apos;s <strong className="text-white">3.3 crore+ consumers</strong> are searching online right now. From <strong className="text-red-400">Connaught Place to Cyber City, Chandni Chowk to Noida</strong> — SniperCoders puts YOUR business in front of them before your competitors do.
              </p>
              
              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-red-500 rounded-xl px-6 py-4 transition-all duration-300 active:scale-95"
                >
                  <Phone className="w-6 h-6 text-red-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Call us now</div>
                    <div className="text-white font-semibold">+91 7006377796</div>
                  </div>
                </a>
                <a href={`mailto:${email}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-orange-500 rounded-xl px-6 py-4 transition-all duration-300 active:scale-95"
                >
                  <Mail className="w-6 h-6 text-orange-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Email us</div>
                    <div className="text-white font-semibold">snipercoders25@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 active:scale-95">
                  View Delhi NCR Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-400" /> Serving Delhi, Noida, Gurugram, Faridabad & Ghaziabad</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-orange-400" /> GST Registered • ISO Standards</span>
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