
// // FILE PATH: app/services/best-software-agency-mumbai/page.tsx

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
//   Wifi, ShoppingCart, Wrench, Factory, Building2, Building,
//   Clock, Shield, Crown, Rocket, Gem, Sparkles,
//   Banknote, Film, Train, Ship,
//   Waves, Store, Theater, Palette, Tent
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
//   { icon: <Globe className="w-7 h-7" />, title: "Website Development Mumbai", desc: "Premium website design company in Mumbai. Premium business websites, fintech portals, Bollywood production sites & enterprise eCommerce platforms built for Mumbai's ultra-competitive digital scene.", gradient: "from-cyan-500 to-teal-600", keywords: "website design Mumbai, web development company Mumbai, ecommerce website Mumbai" },
//   { icon: <Smartphone className="w-7 h-7" />, title: "Mobile App Development Mumbai", desc: "Top app development agency in Mumbai. Fintech apps, food delivery platforms, local logistics apps & BFSI mobile solutions for Mumbai's smartphone-savvy consumer base.", gradient: "from-violet-500 to-purple-700", keywords: "app development Mumbai, mobile app developers Mumbai, fintech app development Mumbai" },
//   { icon: <Code className="w-7 h-7" />, title: "Custom Software Development Mumbai", desc: "Enterprise software solutions in Mumbai. Trading platforms, NBFC software, inventory management, ERP & enterprise SaaS for Mumbai's diverse industries from Dharavi to BKC.", gradient: "from-blue-500 to-indigo-600", keywords: "software development Mumbai, custom software Mumbai, ERP development Mumbai" },
//   { icon: <TrendingUp className="w-7 h-7" />, title: "Digital Marketing Agency Mumbai", desc: "Aggressive local SEO, performance marketing & social media strategies to help Mumbai brands cut through the city's intense digital noise. Best SEO company in Mumbai.", gradient: "from-rose-500 to-pink-600", keywords: "digital marketing Mumbai, SEO services Mumbai, Google Ads Mumbai" },
//   { icon: <Users className="w-7 h-7" />, title: "IT Consulting Mumbai", desc: "Expert IT consultants in Mumbai. Technology strategy for Mumbai's corporates, financial institutions, media companies & startups looking to scale digitally.", gradient: "from-amber-500 to-orange-600", keywords: "IT consulting Mumbai, technology consultants Mumbai, digital transformation Mumbai" },
//   { icon: <Award className="w-7 h-7" />, title: "UI/UX Design Agency Mumbai", desc: "Premium UI/UX design company in Mumbai. World-class product design and brand identities that stand out in Mumbai's high-design, trend-forward consumer market.", gradient: "from-fuchsia-500 to-pink-600", keywords: "UI UX design Mumbai, product design Mumbai, branding agency Mumbai" },
// ];

// const BUSINESS_CATEGORIES = [
//   { icon: <Landmark className="w-5 h-5" />, label: "Banks in BKC", keyword: "banking website Mumbai", color: "text-cyan-400" },
//   { icon: <Banknote className="w-5 h-5" />, label: "Fintech in Nariman Point", keyword: "fintech website Mumbai", color: "text-emerald-400" },
//   { icon: <Briefcase className="w-5 h-5" />, label: "Startups in Bandra", keyword: "startup website Mumbai", color: "text-indigo-400" },
//   { icon: <Film className="w-5 h-5" />, label: "Bollywood in Andheri", keyword: "film production website Mumbai", color: "text-violet-400" },
//   { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in Colaba", keyword: "restaurant website Mumbai", color: "text-orange-400" },
//   { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Bandra", keyword: "cafe website Mumbai", color: "text-amber-400" },
//   { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Juhu", keyword: "hotel website Mumbai", color: "text-blue-400" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Fashion in Linking Road", keyword: "fashion ecommerce Mumbai", color: "text-pink-400" },
//   { icon: <Car className="w-5 h-5" />, label: "Luxury Cars in Worli", keyword: "automotive website Mumbai", color: "text-cyan-300" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Ed-Tech in Powai", keyword: "education website Mumbai", color: "text-green-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Parel", keyword: "hospital website Mumbai", color: "text-red-400" },
//   { icon: <Plane className="w-5 h-5" />, label: "Travel in Fort", keyword: "travel website Mumbai", color: "text-sky-400" },
//   { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Andheri West", keyword: "fitness website Mumbai", color: "text-lime-400" },
//   { icon: <Home className="w-5 h-5" />, label: "Real Estate in Worli", keyword: "real estate website Mumbai", color: "text-teal-400" },
//   { icon: <Truck className="w-5 h-5" />, label: "Logistics in Bhiwandi", keyword: "logistics software Mumbai", color: "text-yellow-400" },
//   { icon: <Music className="w-5 h-5" />, label: "Nightlife in Lower Parel", keyword: "event website Mumbai", color: "text-rose-400" },
//   { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands Mumbai", keyword: "d2c ecommerce Mumbai", color: "text-emerald-400" },
//   { icon: <Wrench className="w-5 h-5" />, label: "Home Services Mumbai", keyword: "service business website Mumbai", color: "text-orange-300" },
//   { icon: <Factory className="w-5 h-5" />, label: "Textiles in Dadar", keyword: "textile website Mumbai", color: "text-gray-400" },
//   { icon: <Building2 className="w-5 h-5" />, label: "Co-working in BKC", keyword: "coworking website Mumbai", color: "text-purple-300" },
//   { icon: <Wifi className="w-5 h-5" />, label: "IT Services in Goregaon", keyword: "IT company website Mumbai", color: "text-cyan-300" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Pharma in Mumbai", keyword: "pharma website Mumbai", color: "text-pink-300" },
//   { icon: <TreePine className="w-5 h-5" />, label: "NGOs in Mumbai", keyword: "NGO website Mumbai", color: "text-green-300" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Jewellery in Zaveri Bazaar", keyword: "jewellery website Mumbai", color: "text-yellow-300" },
//   { icon: <Building className="w-5 h-5" />, label: "Corporates in Nariman Point", keyword: "corporate website Mumbai", color: "text-blue-300" },
//   { icon: <Store className="w-5 h-5" />, label: "Retail in Crawford Market", keyword: "retail website Mumbai", color: "text-amber-300" },
//   { icon: <Theater className="w-5 h-5" />, label: "Theatre & Arts in Prithvi", keyword: "arts website Mumbai", color: "text-fuchsia-300" },
//   { icon: <Tent className="w-5 h-5" />, label: "Dharavi SMEs", keyword: "small business website Mumbai", color: "text-orange-400" },
// ];


// const STATS = [
//   { value: "30+", label: "Mumbai Projects Delivered", keyword: "Mumbai software projects" },
//   { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Mumbai" },
//   { value: "24/7", label: "Local Support Available", keyword: "IT support Mumbai" },
//   { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Mumbai reviews" },
// ];

// const TRUST_SIGNALS = [
//   { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
//   { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
//   { icon: <MapPin className="w-5 h-5" />, text: "Mumbai Presence" },
//   { icon: <Gem className="w-5 h-5" />, text: "Marathi/Hindi/English Support" },
// ];

// const LOCATIONS = [
//   "South Mumbai", "Nariman Point", "Colaba", "Fort", "Cuffe Parade",
//   "Worli", "Lower Parel", "Prabhadevi", "Dadar", "Mahalaxmi",
//   "Bandra", "Bandra Kurla Complex (BKC)", "Khar", "Santacruz", "Vile Parle",
//   "Andheri", "Andheri East (MIDC)", "Versova", "Juhu", "Goregaon",
//   "Malad", "Kandivali", "Borivali", "Dahisar", "Thane",
//   "Navi Mumbai", "Vashi", "Belapur", "Kharghar", "Panvel",
//   "Powai", "Ghatkopar", "Mulund", "Bhiwandi", "Kalyan",
//   "Dombivli", "Ulhasnagar", "Dharavi", "Mahim", "Byculla"
// ];

// const FAQS = [
//   { 
//     q: "Which is the best software agency in Mumbai?", 
//     a: "SniperCoders is consistently rated among the top software agencies in Mumbai. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Bandra, BKC, Lower Parel, Nariman Point, and the entire Mumbai Metropolitan Region." 
//   },
//   { 
//     q: "Can SniperCoders handle enterprise-level projects for Mumbai corporates?", 
//     a: "Absolutely. We build enterprise-grade platforms — from complex fintech dashboards for BFSI clients in BKC to large-scale eCommerce systems for retail giants in Nariman Point — with the reliability, security, and scalability that Mumbai's corporate sector demands. Our architecture complies with RBI guidelines, SEBI requirements, and enterprise security standards." 
//   },
//   { 
//     q: "Do you specialize in fintech or BFSI digital solutions?", 
//     a: "Yes. Mumbai is India's financial capital and we've built payment platforms, portfolio management portals, insurance sales tools, NBFC software, and customer-facing BFSI apps with strong compliance and security architecture. We understand the unique needs of clients in Nariman Point, BKC, and Fort — from loan origination systems to investment dashboards." 
//   },
//   { 
//     q: "How do you handle SEO for such a competitive market like Mumbai?", 
//     a: "Mumbai requires neighbourhood-level hyperlocal SEO (Bandra, Andheri, Lower Parel, BKC, etc.) combined with industry-specific keyword strategy. We run comprehensive technical audits plus content strategies to climb rankings systematically. We target keywords like 'best restaurant in Bandra', 'fintech companies in BKC', and 'co-working spaces in Lower Parel' — capturing intent at the micro-local level." 
//   },
//   { 
//     q: "Do you support Marathi language content?", 
//     a: "Yes! We support Marathi, Hindi and English — crucial for reaching both Mumbai's local Marathi-speaking audience and its pan-Indian migrant population. Marathi content gives you a significant competitive advantage for local searches, as most businesses only target English keywords. We create culturally resonant content that connects with Mumbai's diverse demographic." 
//   },
//   { 
//     q: "Can you build websites for Bollywood & media production houses?", 
//     a: "Absolutely. We've built portfolio websites, production house showcase sites, casting portals, and film marketing landing pages for clients in Andheri, Versova, and Goregaon. We understand the visual storytelling needs of the entertainment industry and create high-impact, video-first experiences that showcase work beautifully." 
//   },
//   { 
//     q: "How much does a website cost in Mumbai?", 
//     a: "A professional business website in Mumbai typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Dadar, Ghatkopar, Mulund, and across Mumbai, with enterprise solutions for corporates in BKC and Nariman Point." 
//   },
// ];

// // Contact information
// const phoneNumber = "+917006377796";
// const email = "snipercoders25@gmail.com";

// export default function MumbaiPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-[#05070d] text-white font-sans overflow-x-hidden">

//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section
//         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
//         style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.14) 0%, transparent 60%), #05070d" }}
//       >
//         <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
//         <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-cyan-600/15 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-indigo-600/15 blur-[80px] pointer-events-none" />

//         <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }} 
//             animate={{ opacity: 1, scale: 1 }} 
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
//           >
//             <Crown className="w-4 h-4" /> #1 Software Agency in Mumbai • 30+ Projects Delivered
//           </motion.div>

//           <motion.h1 
//             initial="hidden" animate="show" variants={fadeUp}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Best Software Agency<br />
//             <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 bg-clip-text text-transparent">
//               in Mumbai, Maharashtra
//             </span>
//           </motion.h1>

//           <motion.p 
//             custom={1} initial="hidden" animate="show" variants={fadeUp}
//             className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
//           >
//             SniperCoders powers Mumbai's most ambitious businesses — from <strong className="text-cyan-400">Bandra startups to BKC corporates, Juhu restaurants to Andheri film studios</strong> — with world-class websites, fintech apps, custom software & high-performance digital marketing. <span className="text-cyan-400">30+ projects • 5★ rated</span>
//           </motion.p>

//           {/* Trust signals */}
//           <motion.div
//             custom={1.5} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {TRUST_SIGNALS.map((signal, i) => (
//               <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
//                 <span className="text-cyan-400">{signal.icon}</span>
//                 {signal.text}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div 
//             custom={2} initial="hidden" animate="show" variants={fadeUp} 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Link href="/contact" 
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Consultation <ChevronRight className="w-5 h-5" />
//             </Link>
//             <a href={`tel:${phoneNumber}`}
//               className="inline-flex items-center gap-2 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
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
//                 <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{s.value}</div>
//                 <div className="text-xs text-gray-500 mt-1">{s.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── INTRO with hyperlocal keywords ──────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <motion.div 
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
//             className="bg-gradient-to-br from-gray-900/80 to-cyan-950/25 border border-cyan-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Why Mumbai Runs on Digital — and Why You Need to Too
//             </h2>
//             <div className="space-y-4 text-gray-300 leading-relaxed">
//               <p>
//                 <strong className="text-white">Mumbai</strong> — India's financial capital, entertainment hub and commercial powerhouse — is home to the BSE, Bollywood, over <strong className="text-cyan-400">1 lakh registered businesses</strong> and millions of digital-first consumers. From the skyscrapers of <strong className="text-cyan-400">Nariman Point and BKC</strong> to the creative energy of <strong className="text-cyan-400">Bandra and Versova</strong>, from the retail chaos of <strong className="text-cyan-400">Linking Road and Colaba Causeway</strong> to the industrial might of <strong className="text-cyan-400">Bhiwandi and Dharavi</strong> — every neighbourhood has its own digital dynamics.
//               </p>
//               <p>
//                 In the city that never sleeps, your digital presence works 24/7 to bring you customers even when you're off the clock. Yet most Mumbai businesses leave money on the table with outdated websites or no online presence at all. <strong className="text-white">SniperCoders</strong>, the <strong className="text-cyan-400">best software agency in Mumbai</strong>, understands these micro-markets and builds digital strategies that resonate locally while scaling nationally.
//               </p>
//               <p>
//                 Whether you're a <strong className="text-white">Juhu-based restaurant</strong>, a <strong className="text-white">Worli fintech startup</strong>, a <strong className="text-white">Versova film production house</strong>, a <strong className="text-white">Dadar textile trader</strong>, or a <strong className="text-white">Goregaon logistics company</strong> — we have the expertise to put you exactly where your customers are looking. <strong className="text-cyan-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
//               Our Services in <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">Mumbai</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Premium digital solutions built for the speed, scale and ambition of Mumbai's business ecosystem. <strong className="text-cyan-400">Web development, mobile apps, SEO, and more.</strong>
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((svc, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="group relative bg-gray-900/60 border border-gray-800 hover:border-cyan-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(6,182,212,0.08), transparent)" }} />
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
//                 <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{svc.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
//                 <p className="text-xs text-cyan-400/70 italic">{svc.keywords}</p>
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
//       <section className="py-20 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Industries We Serve in <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Mumbai</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               From <strong className="text-cyan-400">Dalal Street fintech</strong> to <strong className="text-cyan-400">Dharavi manufacturing</strong>, <strong className="text-cyan-400">Bollywood studios</strong> to <strong className="text-cyan-400">Bandra cafés</strong> — every Mumbai industry needs a digital engine.
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
//             <p className="text-sm text-gray-500 mb-4">Serving all Mumbai Metropolitan Region locations:</p>
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
//               The <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">SniperCoders</span> Advantage in Mumbai
//             </h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//               Here's what makes us the <strong className="text-cyan-400">preferred digital partner for Mumbai's most successful businesses</strong>:
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               "Hyperlocal SEO covering Bandra, Andheri, BKC, Lower Parel, Nariman Point & all suburbs",
//               "Marathi, Hindi & English multilingual content for maximum local reach",
//               "Fintech & BFSI compliant architecture with RBI-aware design for Nariman Point & BKC clients",
//               "Bollywood & media production portfolio websites for Andheri, Versova & Goregaon studios",
//               "High-conversion landing pages for Mumbai's premium real estate in Worli & Lower Parel",
//               "Shopify & WooCommerce for Mumbai's fashion & lifestyle D2C brands on Linking Road",
//               "WhatsApp Business API integrations for local service businesses across Mumbai",
//               "Advanced analytics & conversion tracking for Mumbai ad campaigns",
//               "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
//               "GST invoicing & India-compliant data practices for Maharashtra businesses",
//               "Enterprise-grade security for corporate clients in Nariman Point & BKC",
//               "Post-launch support & maintenance with 24/7 availability for critical issues"
//             ].map((item, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-800/50 transition-all duration-300"
//               >
//                 <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-300 text-sm">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
//               Start Your Project in Mumbai <ChevronRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL with social proof ───────────────────────── */}
//       <section className="py-12 bg-gradient-to-r from-cyan-900/20 via-teal-900/10 to-cyan-900/20 border-y border-gray-800/50">
//         <div className="container mx-auto px-4 text-center">
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
//           </div>
//           <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
//             "We're a <strong className="text-cyan-400">Lower Parel-based fintech startup</strong>. SniperCoders built our investor-ready platform and our web app. Exceptional quality and they actually understand financial products — from RBI compliance to seamless UPI integration. They're the <strong className="text-cyan-400">best software agency in Mumbai</strong> for fintech, hands down."
//           </blockquote>
//           <p className="text-gray-500 mt-4 text-sm">— Fintech Founder, Lower Parel, Mumbai</p>
//           <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
//             <span>⭐ 5/5 on Google</span>
//             <span>✅ Verified Client</span>
//             <span>📍 Lower Parel, Mumbai</span>
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ with long-tail keywords ────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Frequently Asked Questions —{" "}
//               <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Mumbai</span>
//             </h2>
//             <p className="text-gray-400">Answers to common questions about <strong className="text-cyan-400">software development, website design, and digital marketing in Mumbai.</strong></p>
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
//           <motion.div 
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
//             className="relative bg-gradient-to-br from-cyan-900/40 to-teal-900/30 border border-cyan-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 Build Your Mumbai Brand<br />
//                 <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Digitally, Decisively.</span>
//               </h2>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 Mumbai's <strong className="text-white">2 crore+ consumers</strong> are online right now. From <strong className="text-cyan-400">BKC boardrooms</strong> to <strong className="text-cyan-400">Bandra cafés</strong>, <strong className="text-cyan-400">Juhu restaurants</strong> to <strong className="text-cyan-400">Andheri studios</strong> — SniperCoders puts your brand in front of them, efficiently and profitably.
//               </p>
              
//               {/* Contact cards */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <a href={`tel:${phoneNumber}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-cyan-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Phone className="w-6 h-6 text-cyan-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Call us now</div>
//                     <div className="text-white font-semibold">+91 7006377796</div>
//                   </div>
//                 </a>
//                 <a href={`mailto:${email}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-teal-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Mail className="w-6 h-6 text-teal-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Email us</div>
//                     <div className="text-white font-semibold">snipercoders25@gmail.com</div>
//                   </div>
//                 </a>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
//                   Book Free Consultation <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
//                   View Mumbai Portfolio
//                 </Link>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /> Serving Mumbai, Thane, Navi Mumbai & MMR</span>
//                 <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-400" /> GST Registered • ISO Standards</span>
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










// FILE PATH: app/services/best-software-agency-mumbai/page.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code, Smartphone, Globe, TrendingUp, Award, Users,
  MapPin, Phone, Mail, ChevronRight, Star, CheckCircle,
  Utensils, Coffee, Car, Hotel, ShoppingBag,
  GraduationCap, HeartPulse, Plane, Dumbbell,
  Briefcase, Home, Truck, Music, Landmark, TreePine,
  Wifi, ShoppingCart, Wrench, Factory, Building2, Building,
  Clock, Shield, Crown, Gem,
  Banknote, Film,
  Store, Theater, Tent
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
  { icon: <Globe className="w-7 h-7" />, title: "Website Development Mumbai", desc: "Premium website design company in Mumbai. Premium business websites, fintech portals, Bollywood production sites & enterprise eCommerce platforms built for Mumbai's ultra-competitive digital scene.", gradient: "from-cyan-500 to-teal-600", keywords: "website design Mumbai, web development company Mumbai, ecommerce website Mumbai" },
  { icon: <Smartphone className="w-7 h-7" />, title: "Mobile App Development Mumbai", desc: "Top app development agency in Mumbai. Fintech apps, food delivery platforms, local logistics apps & BFSI mobile solutions for Mumbai's smartphone-savvy consumer base.", gradient: "from-violet-500 to-purple-700", keywords: "app development Mumbai, mobile app developers Mumbai, fintech app development Mumbai" },
  { icon: <Code className="w-7 h-7" />, title: "Custom Software Development Mumbai", desc: "Enterprise software solutions in Mumbai. Trading platforms, NBFC software, inventory management, ERP & enterprise SaaS for Mumbai's diverse industries from Dharavi to BKC.", gradient: "from-blue-500 to-indigo-600", keywords: "software development Mumbai, custom software Mumbai, ERP development Mumbai" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "Digital Marketing Agency Mumbai", desc: "Aggressive local SEO, performance marketing & social media strategies to help Mumbai brands cut through the city's intense digital noise. Best SEO company in Mumbai.", gradient: "from-rose-500 to-pink-600", keywords: "digital marketing Mumbai, SEO services Mumbai, Google Ads Mumbai" },
  { icon: <Users className="w-7 h-7" />, title: "IT Consulting Mumbai", desc: "Expert IT consultants in Mumbai. Technology strategy for Mumbai's corporates, financial institutions, media companies & startups looking to scale digitally.", gradient: "from-amber-500 to-orange-600", keywords: "IT consulting Mumbai, technology consultants Mumbai, digital transformation Mumbai" },
  { icon: <Award className="w-7 h-7" />, title: "UI/UX Design Agency Mumbai", desc: "Premium UI/UX design company in Mumbai. World-class product design and brand identities that stand out in Mumbai's high-design, trend-forward consumer market.", gradient: "from-fuchsia-500 to-pink-600", keywords: "UI UX design Mumbai, product design Mumbai, branding agency Mumbai" },
];

const BUSINESS_CATEGORIES = [
  { icon: <Landmark className="w-5 h-5" />, label: "Banks in BKC", keyword: "banking website Mumbai", color: "text-cyan-400" },
  { icon: <Banknote className="w-5 h-5" />, label: "Fintech in Nariman Point", keyword: "fintech website Mumbai", color: "text-emerald-400" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Startups in Bandra", keyword: "startup website Mumbai", color: "text-indigo-400" },
  { icon: <Film className="w-5 h-5" />, label: "Bollywood in Andheri", keyword: "film production website Mumbai", color: "text-violet-400" },
  { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in Colaba", keyword: "restaurant website Mumbai", color: "text-orange-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Bandra", keyword: "cafe website Mumbai", color: "text-amber-400" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Juhu", keyword: "hotel website Mumbai", color: "text-blue-400" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Fashion in Linking Road", keyword: "fashion ecommerce Mumbai", color: "text-pink-400" },
  { icon: <Car className="w-5 h-5" />, label: "Luxury Cars in Worli", keyword: "automotive website Mumbai", color: "text-cyan-300" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Ed-Tech in Powai", keyword: "education website Mumbai", color: "text-green-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Parel", keyword: "hospital website Mumbai", color: "text-red-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel in Fort", keyword: "travel website Mumbai", color: "text-sky-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Andheri West", keyword: "fitness website Mumbai", color: "text-lime-400" },
  { icon: <Home className="w-5 h-5" />, label: "Real Estate in Worli", keyword: "real estate website Mumbai", color: "text-teal-400" },
  { icon: <Truck className="w-5 h-5" />, label: "Logistics in Bhiwandi", keyword: "logistics software Mumbai", color: "text-yellow-400" },
  { icon: <Music className="w-5 h-5" />, label: "Nightlife in Lower Parel", keyword: "event website Mumbai", color: "text-rose-400" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands Mumbai", keyword: "d2c ecommerce Mumbai", color: "text-emerald-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Home Services Mumbai", keyword: "service business website Mumbai", color: "text-orange-300" },
  { icon: <Factory className="w-5 h-5" />, label: "Textiles in Dadar", keyword: "textile website Mumbai", color: "text-gray-400" },
  { icon: <Building2 className="w-5 h-5" />, label: "Co-working in BKC", keyword: "coworking website Mumbai", color: "text-purple-300" },
  { icon: <Wifi className="w-5 h-5" />, label: "IT Services in Goregaon", keyword: "IT company website Mumbai", color: "text-cyan-300" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Pharma in Mumbai", keyword: "pharma website Mumbai", color: "text-pink-300" },
  { icon: <TreePine className="w-5 h-5" />, label: "NGOs in Mumbai", keyword: "NGO website Mumbai", color: "text-green-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Jewellery in Zaveri Bazaar", keyword: "jewellery website Mumbai", color: "text-yellow-300" },
  { icon: <Building className="w-5 h-5" />, label: "Corporates in Nariman Point", keyword: "corporate website Mumbai", color: "text-blue-300" },
  { icon: <Store className="w-5 h-5" />, label: "Retail in Crawford Market", keyword: "retail website Mumbai", color: "text-amber-300" },
  { icon: <Theater className="w-5 h-5" />, label: "Theatre & Arts in Prithvi", keyword: "arts website Mumbai", color: "text-fuchsia-300" },
  { icon: <Tent className="w-5 h-5" />, label: "Dharavi SMEs", keyword: "small business website Mumbai", color: "text-orange-400" },
];


const STATS = [
  { value: "30+", label: "Mumbai Projects Delivered", keyword: "Mumbai software projects" },
  { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Mumbai" },
  { value: "24/7", label: "Local Support Available", keyword: "IT support Mumbai" },
  { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Mumbai reviews" },
];

const TRUST_SIGNALS = [
  { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
  { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
  { icon: <MapPin className="w-5 h-5" />, text: "Mumbai Presence" },
  { icon: <Gem className="w-5 h-5" />, text: "Marathi/Hindi/English Support" },
];

const LOCATIONS = [
  "South Mumbai", "Nariman Point", "Colaba", "Fort", "Cuffe Parade",
  "Worli", "Lower Parel", "Prabhadevi", "Dadar", "Mahalaxmi",
  "Bandra", "Bandra Kurla Complex (BKC)", "Khar", "Santacruz", "Vile Parle",
  "Andheri", "Andheri East (MIDC)", "Versova", "Juhu", "Goregaon",
  "Malad", "Kandivali", "Borivali", "Dahisar", "Thane",
  "Navi Mumbai", "Vashi", "Belapur", "Kharghar", "Panvel",
  "Powai", "Ghatkopar", "Mulund", "Bhiwandi", "Kalyan",
  "Dombivli", "Ulhasnagar", "Dharavi", "Mahim", "Byculla"
];

const FAQS = [
  { 
    q: "Which is the best software agency in Mumbai?", 
    a: "SniperCoders is consistently rated among the top software agencies in Mumbai. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Bandra, BKC, Lower Parel, Nariman Point, and the entire Mumbai Metropolitan Region." 
  },
  { 
    q: "Can SniperCoders handle enterprise-level projects for Mumbai corporates?", 
    a: "Absolutely. We build enterprise-grade platforms — from complex fintech dashboards for BFSI clients in BKC to large-scale eCommerce systems for retail giants in Nariman Point — with the reliability, security, and scalability that Mumbai's corporate sector demands. Our architecture complies with RBI guidelines, SEBI requirements, and enterprise security standards." 
  },
  { 
    q: "Do you specialize in fintech or BFSI digital solutions?", 
    a: "Yes. Mumbai is India's financial capital and we've built payment platforms, portfolio management portals, insurance sales tools, NBFC software, and customer-facing BFSI apps with strong compliance and security architecture. We understand the unique needs of clients in Nariman Point, BKC, and Fort — from loan origination systems to investment dashboards." 
  },
  { 
    q: "How do you handle SEO for such a competitive market like Mumbai?", 
    a: "Mumbai requires neighbourhood-level hyperlocal SEO (Bandra, Andheri, Lower Parel, BKC, etc.) combined with industry-specific keyword strategy. We run comprehensive technical audits plus content strategies to climb rankings systematically. We target keywords like 'best restaurant in Bandra', 'fintech companies in BKC', and 'co-working spaces in Lower Parel' — capturing intent at the micro-local level." 
  },
  { 
    q: "Do you support Marathi language content?", 
    a: "Yes! We support Marathi, Hindi and English — crucial for reaching both Mumbai's local Marathi-speaking audience and its pan-Indian migrant population. Marathi content gives you a significant competitive advantage for local searches, as most businesses only target English keywords. We create culturally resonant content that connects with Mumbai's diverse demographic." 
  },
  { 
    q: "Can you build websites for Bollywood & media production houses?", 
    a: "Absolutely. We've built portfolio websites, production house showcase sites, casting portals, and film marketing landing pages for clients in Andheri, Versova, and Goregaon. We understand the visual storytelling needs of the entertainment industry and create high-impact, video-first experiences that showcase work beautifully." 
  },
  { 
    q: "How much does a website cost in Mumbai?", 
    a: "A professional business website in Mumbai typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Dadar, Ghatkopar, Mulund, and across Mumbai, with enterprise solutions for corporates in BKC and Nariman Point." 
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function MumbaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#05070d] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.14) 0%, transparent 60%), #05070d" }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-cyan-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-indigo-600/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> #1 Software Agency in Mumbai • 30+ Projects Delivered
          </motion.div>

          <motion.h1 
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Agency<br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 bg-clip-text text-transparent">
              in Mumbai, Maharashtra
            </span>
          </motion.h1>

          <motion.p 
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders powers Mumbai&apos;s most ambitious businesses — from <strong className="text-cyan-400">Bandra startups to BKC corporates, Juhu restaurants to Andheri film studios</strong> — with world-class websites, fintech apps, custom software &amp; high-performance digital marketing. <span className="text-cyan-400">30+ projects • 5★ rated</span>
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-cyan-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div 
            custom={2} initial="hidden" animate="show" variants={fadeUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
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
                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO with hyperlocal keywords ──────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="bg-gradient-to-br from-gray-900/80 to-cyan-950/25 border border-cyan-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Why Mumbai Runs on Digital — and Why You Need to Too
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Mumbai</strong> — India&apos;s financial capital, entertainment hub and commercial powerhouse — is home to the BSE, Bollywood, over <strong className="text-cyan-400">1 lakh registered businesses</strong> and millions of digital-first consumers. From the skyscrapers of <strong className="text-cyan-400">Nariman Point and BKC</strong> to the creative energy of <strong className="text-cyan-400">Bandra and Versova</strong>, from the retail chaos of <strong className="text-cyan-400">Linking Road and Colaba Causeway</strong> to the industrial might of <strong className="text-cyan-400">Bhiwandi and Dharavi</strong> — every neighbourhood has its own digital dynamics.
              </p>
              <p>
                In the city that never sleeps, your digital presence works 24/7 to bring you customers even when you&apos;re off the clock. Yet most Mumbai businesses leave money on the table with outdated websites or no online presence at all. <strong className="text-white">SniperCoders</strong>, the <strong className="text-cyan-400">best software agency in Mumbai</strong>, understands these micro-markets and builds digital strategies that resonate locally while scaling nationally.
              </p>
              <p>
                Whether you&apos;re a <strong className="text-white">Juhu-based restaurant</strong>, a <strong className="text-white">Worli fintech startup</strong>, a <strong className="text-white">Versova film production house</strong>, a <strong className="text-white">Dadar textile trader</strong>, or a <strong className="text-white">Goregaon logistics company</strong> — we have the expertise to put you exactly where your customers are looking. <strong className="text-cyan-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
              Our Services in <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">Mumbai</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Premium digital solutions built for the speed, scale and ambition of Mumbai&apos;s business ecosystem. <strong className="text-cyan-400">Web development, mobile apps, SEO, and more.</strong>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-cyan-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(6,182,212,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
                <p className="text-xs text-cyan-400/70 italic">{svc.keywords}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Mumbai</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From <strong className="text-cyan-400">Dalal Street fintech</strong> to <strong className="text-cyan-400">Dharavi manufacturing</strong>, <strong className="text-cyan-400">Bollywood studios</strong> to <strong className="text-cyan-400">Bandra cafés</strong> — every Mumbai industry needs a digital engine.
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
            <p className="text-sm text-gray-500 mb-4">Serving all Mumbai Metropolitan Region locations:</p>
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
              The <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">SniperCoders</span> Advantage in Mumbai
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s what makes us the <strong className="text-cyan-400">preferred digital partner for Mumbai&apos;s most successful businesses</strong>:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Hyperlocal SEO covering Bandra, Andheri, BKC, Lower Parel, Nariman Point & all suburbs",
              "Marathi, Hindi & English multilingual content for maximum local reach",
              "Fintech & BFSI compliant architecture with RBI-aware design for Nariman Point & BKC clients",
              "Bollywood & media production portfolio websites for Andheri, Versova & Goregaon studios",
              "High-conversion landing pages for Mumbai's premium real estate in Worli & Lower Parel",
              "Shopify & WooCommerce for Mumbai's fashion & lifestyle D2C brands on Linking Road",
              "WhatsApp Business API integrations for local service businesses across Mumbai",
              "Advanced analytics & conversion tracking for Mumbai ad campaigns",
              "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
              "GST invoicing & India-compliant data practices for Maharashtra businesses",
              "Enterprise-grade security for corporate clients in Nariman Point & BKC",
              "Post-launch support & maintenance with 24/7 availability for critical issues"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-800/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Project in Mumbai <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL with social proof ───────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-cyan-900/20 via-teal-900/10 to-cyan-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
            &ldquo;We&apos;re a <strong className="text-cyan-400">Lower Parel-based fintech startup</strong>. SniperCoders built our investor-ready platform and our web app. Exceptional quality and they actually understand financial products — from RBI compliance to seamless UPI integration. They&apos;re the <strong className="text-cyan-400">best software agency in Mumbai</strong> for fintech, hands down.&rdquo;
          </blockquote>
          <p className="text-gray-500 mt-4 text-sm">— Fintech Founder, Lower Parel, Mumbai</p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
            <span>⭐ 5/5 on Google</span>
            <span>✅ Verified Client</span>
            <span>📍 Lower Parel, Mumbai</span>
          </div>
        </div>
      </section>

      {/* ── FAQ with long-tail keywords ────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions —{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Mumbai</span>
            </h2>
            <p className="text-gray-400">Answers to common questions about <strong className="text-cyan-400">software development, website design, and digital marketing in Mumbai.</strong></p>
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
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="relative bg-gradient-to-br from-cyan-900/40 to-teal-900/30 border border-cyan-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Build Your Mumbai Brand<br />
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Digitally, Decisively.</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Mumbai&apos;s <strong className="text-white">2 crore+ consumers</strong> are online right now. From <strong className="text-cyan-400">BKC boardrooms</strong> to <strong className="text-cyan-400">Bandra cafés</strong>, <strong className="text-cyan-400">Juhu restaurants</strong> to <strong className="text-cyan-400">Andheri studios</strong> — SniperCoders puts your brand in front of them, efficiently and profitably.
              </p>
              
              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-cyan-500 rounded-xl px-6 py-4 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Call us now</div>
                    <div className="text-white font-semibold">+91 7006377796</div>
                  </div>
                </a>
                <a href={`mailto:${email}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-teal-500 rounded-xl px-6 py-4 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-teal-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Email us</div>
                    <div className="text-white font-semibold">snipercoders25@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
                  View Mumbai Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /> Serving Mumbai, Thane, Navi Mumbai &amp; MMR</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-400" /> GST Registered • ISO Standards</span>
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