
// // FILE PATH: app/services/best-software-agency-udhampur/page.tsx

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
//   Mountain, Train, Bus, Shield as ShieldIcon, Tractor
// } from "lucide-react";
// import Footer from "@/components/Footer";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: (i = 0) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.65, ease: "easeOut", delay: i * 0.08 },
//   }),
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.88 },
//   show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
// };

// const SERVICES = [
//   { 
//     icon: <Globe className="w-7 h-7" />, 
//     title: "Website Development Udhampur", 
//     desc: "Professional website design company in Udhampur. Professional websites for Udhampur businesses — from government contractors and traders to local shops and service providers.", 
//     gradient: "from-emerald-500 to-teal-600",
//     keywords: "website design Udhampur, web development company Udhampur, website designer near me Udhampur"
//   },
//   { 
//     icon: <Smartphone className="w-7 h-7" />, 
//     title: "Mobile App Development Udhampur", 
//     desc: "Top app development agency in Udhampur. Android & iOS apps for Udhampur entrepreneurs, transport operators & local businesses looking to reach customers digitally.", 
//     gradient: "from-violet-500 to-purple-700",
//     keywords: "app development Udhampur, mobile app developers Udhampur, Android app development Udhampur"
//   },
//   { 
//     icon: <Code className="w-7 h-7" />, 
//     title: "Custom Software Development Udhampur", 
//     desc: "Enterprise software solutions in Udhampur. Inventory systems, billing software, school management platforms & business automation tools built for Udhampur SMEs.", 
//     gradient: "from-blue-500 to-cyan-600",
//     keywords: "software development Udhampur, custom software Udhampur, billing software Udhampur"
//   },
//   { 
//     icon: <TrendingUp className="w-7 h-7" />, 
//     title: "Digital Marketing Agency Udhampur", 
//     desc: "Rank on Google for 'best [service] in Udhampur' with our local SEO, Google Ads & social media marketing strategies. Best SEO company in Udhampur.", 
//     gradient: "from-rose-500 to-pink-600",
//     keywords: "digital marketing Udhampur, SEO services Udhampur, Google Ads Udhampur"
//   },
//   { 
//     icon: <Users className="w-7 h-7" />, 
//     title: "IT Consulting Udhampur", 
//     desc: "Expert IT consultants in Udhampur. Technology planning and digital transformation guidance for Udhampur businesses entering the digital economy.", 
//     gradient: "from-amber-500 to-orange-600",
//     keywords: "IT consulting Udhampur, technology consultants Udhampur, digital transformation Udhampur"
//   },
//   { 
//     icon: <Award className="w-7 h-7" />, 
//     title: "Branding & Design Udhampur", 
//     desc: "Premium branding agency in Udhampur. Logo, brand identity, visiting cards, social media creatives & complete brand kits for Udhampur businesses.", 
//     gradient: "from-fuchsia-500 to-pink-600",
//     keywords: "branding agency Udhampur, graphic design Udhampur, logo design Udhampur"
//   },
// ];

// const BUSINESS_CATEGORIES = [
//   { icon: <Utensils className="w-5 h-5" />, label: "Dhabas on NH44", keyword: "restaurant website Udhampur", color: "text-orange-400" },
//   { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Udhampur", keyword: "hotel website Udhampur", color: "text-blue-400" },
//   { icon: <Car className="w-5 h-5" />, label: "Taxi Services", keyword: "transport website Udhampur", color: "text-cyan-400" },
//   { icon: <Bus className="w-5 h-5" />, label: "Bus Operators", keyword: "bus booking website Udhampur", color: "text-yellow-400" },
//   { icon: <Train className="w-5 h-5" />, label: "Railway Suppliers", keyword: "railway contractor website Udhampur", color: "text-blue-300" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail Stores", keyword: "retail website Udhampur", color: "text-pink-400" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Schools Udhampur", keyword: "school website Udhampur", color: "text-green-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Clinics Udhampur", keyword: "clinic website Udhampur", color: "text-red-400" },
//   { icon: <Plane className="w-5 h-5" />, label: "Travel Agencies", keyword: "travel website Udhampur", color: "text-sky-400" },
//   { icon: <TreePine className="w-5 h-5" />, label: "Apple Orchards", keyword: "agriculture website Udhampur", color: "text-lime-400" },
//   { icon: <Tractor className="w-5 h-5" />, label: "Farming Equipment", keyword: "agriculture equipment website Udhampur", color: "text-green-300" },
//   { icon: <Home className="w-5 h-5" />, label: "Property Dealers", keyword: "real estate website Udhampur", color: "text-teal-400" },
//   { icon: <Truck className="w-5 h-5" />, label: "Logistics Udhampur", keyword: "logistics software Udhampur", color: "text-yellow-400" },
//   { icon: <Wrench className="w-5 h-5" />, label: "Hardware Shops", keyword: "hardware website Udhampur", color: "text-orange-300" },
//   { icon: <Factory className="w-5 h-5" />, label: "Rice Mills", keyword: "rice mill website Udhampur", color: "text-gray-400" },
//   { icon: <Coffee className="w-5 h-5" />, label: "Bakeries Udhampur", keyword: "bakery website Udhampur", color: "text-amber-400" },
//   { icon: <Camera className="w-5 h-5" />, label: "Photo Studios", keyword: "photography website Udhampur", color: "text-violet-400" },
//   { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", keyword: "event website Udhampur", color: "text-rose-400" },
//   { icon: <Landmark className="w-5 h-5" />, label: "Finance Udhampur", keyword: "finance website Udhampur", color: "text-blue-300" },
//   { icon: <Building2 className="w-5 h-5" />, label: "Govt Contractors", keyword: "government contractor website Udhampur", color: "text-purple-300" },
//   { icon: <ShieldIcon className="w-5 h-5" />, label: "Defence Suppliers", keyword: "defence supplier website Udhampur", color: "text-amber-300" },
//   { icon: <ShoppingCart className="w-5 h-5" />, label: "Wholesale Traders", keyword: "wholesale website Udhampur", color: "text-emerald-400" },
//   { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms Udhampur", keyword: "fitness website Udhampur", color: "text-lime-300" },
//   { icon: <Wifi className="w-5 h-5" />, label: "Computer Shops", keyword: "computer shop website Udhampur", color: "text-cyan-300" },
//   { icon: <Briefcase className="w-5 h-5" />, label: "Consultants", keyword: "consultant website Udhampur", color: "text-indigo-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Ayurveda Udhampur", keyword: "wellness website Udhampur", color: "text-pink-300" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Coaching Centres", keyword: "coaching website Udhampur", color: "text-green-300" },
//   { icon: <Truck className="w-5 h-5" />, label: "Army Canteen", keyword: "canteen supplier website Udhampur", color: "text-amber-300" },
//   { icon: <Mountain className="w-5 h-5" />, label: "Tourist Places", keyword: "tourism website Udhampur", color: "text-emerald-300" },
// ];

// const STATS = [
//   { value: "30+", label: "Udhampur Projects Delivered", keyword: "Udhampur software projects" },
//   { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Udhampur" },
//   { value: "24/7", label: "Local Support Available", keyword: "IT support Udhampur" },
//   { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Udhampur reviews" },
// ];

// const TRUST_SIGNALS = [
//   { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
//   { icon: <Clock className="w-5 h-5" />, text: "10+ Years Experience" },
//   { icon: <MapPin className="w-5 h-5" />, text: "Serving Udhampur District" },
//   { icon: <Gem className="w-5 h-5" />, text: "Urdu/Hindi/English/Dogri Support" },
//   { icon: <Rocket className="w-5 h-5" />, text: "Affordable Local Pricing" },
// ];

// const LOCATIONS = [
//   "Udhampur City", "Ramnagar", "Chenani", "Majalta", "Basantgarh",
//   "Kud", "Batote", "Assar", "Latti", "Moungri",
//   "Panchari", "Tikri", "Jakhani", "Dudu", "Gandhi Nagar Udhampur",
//   "Reasi Road", "Jammu Highway", "Katra Road", "NH44 Corridor", "Railway Station Area"
// ];

// const FAQS = [
//   { 
//     q: "Which is the best software agency in Udhampur?", 
//     a: "SniperCoders is the most trusted software agency serving Udhampur. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Udhampur city, Ramnagar, Chenani, and surrounding areas. Our affordable pricing and local understanding set us apart." 
//   },
//   { 
//     q: "Can SniperCoders build websites for small businesses in Udhampur?", 
//     a: "Yes! We specialize in affordable, professional websites for small and medium businesses in Udhampur. Our packages start at just ₹15,000 — accessible even for local traders, shop owners, and service providers. We understand that Udhampur businesses need cost-effective solutions without compromising on quality." 
//   },
//   { 
//     q: "Do you understand the Udhampur business market?", 
//     a: "Absolutely. Udhampur is a rapidly growing city with a strong mix of government activity (Northern Command HQ), military presence, agriculture (apple orchards), tourism (gateway to Vaishno Devi and Patnitop), and trade along the NH44 highway. We tailor our digital strategies to match these local dynamics — from defence supplier portals to dhaba websites and apple orchard ecommerce." 
//   },
//   { 
//     q: "Can you help my Udhampur business rank on Google?", 
//     a: "Yes. Our local SEO service targets searches like 'best hotel in Udhampur', 'transport services Udhampur', 'top contractor in Udhampur', 'apple wholesaler Udhampur', and 'dhaba near NH44 Udhampur' — driving real customers to your door. We optimize your Google Business Profile and create locally relevant content that Google loves." 
//   },
//   { 
//     q: "Do you support Urdu, Hindi, and Dogri languages?", 
//     a: "Yes! We support Urdu, Hindi, English, and Dogri content — crucial for reaching Udhampur's diverse linguistic audience. Most businesses only target English keywords, missing out on the majority of local searches. Our multilingual approach gives you a significant competitive advantage." 
//   },
//   { 
//     q: "Can you build websites for government contractors and defence suppliers?", 
//     a: "Absolutely. Udhampur is home to the Indian Army's Northern Command, creating a strong ecosystem of defence suppliers and government contractors. We build compliant websites, digital catalogues, and tender application portals specifically for this sector, helping you win more contracts." 
//   },
//   { 
//     q: "Is there any in-person support available for Udhampur clients?", 
//     a: "We provide full remote support with video consultation, which works seamlessly for most clients. For Udhampur businesses that prefer occasional in-person meetings, we can schedule visits when our team is in the region. We ensure dedicated communication via WhatsApp, calls & email throughout the project." 
//   },
//   { 
//     q: "How much does a website cost in Udhampur?", 
//     a: "Our Udhampur packages start at ₹15,000 for a basic business website, ₹25,000-₹45,000 for e-commerce or advanced sites, and custom solutions priced based on requirements. All packages include hosting, SSL certificate, and 3 months free maintenance. We offer transparent pricing with no hidden charges." 
//   },
// ];

// // Contact information
// const phoneNumber = "+917006377796";
// const email = "snipercoders25@gmail.com";

// export default function UdhampurPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-[#06100a] text-white font-sans overflow-x-hidden">

//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section
//         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
//         style={{
//           background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(5,150,105,0.14) 0%, transparent 60%), #06100a"
//         }}
//       >
//         <div className="absolute inset-0 opacity-[0.04]"
//           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
//         />
//         <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-emerald-600/15 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-teal-600/15 blur-[80px] pointer-events-none" />

//         <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
//           >
//             <Crown className="w-4 h-4" /> #1 Rated Software Agency in Udhampur • 30+ Projects Delivered
//           </motion.div>

//           <motion.h1
//             initial="hidden" animate="show" variants={fadeUp}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Best Software Agency<br />
//             <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
//               in Udhampur, J&K
//             </span>
//           </motion.h1>

//           <motion.p
//             custom={1} initial="hidden" animate="show" variants={fadeUp}
//             className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
//           >
//             SniperCoders brings big-city digital expertise to Udhampur — <strong className="text-emerald-400">website development, mobile apps, SEO & digital marketing</strong> crafted for the unique growth opportunities of J&K's gateway city. Serving <strong className="text-emerald-400">Udhampur, Ramnagar, Chenani & NH44 corridor</strong>. <span className="text-emerald-400">30+ projects • 5★ rated • Affordable local pricing</span>
//           </motion.p>

//           {/* Trust signals */}
//           <motion.div
//             custom={1.5} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {TRUST_SIGNALS.map((signal, i) => (
//               <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
//                 <span className="text-emerald-400">{signal.icon}</span>
//                 {signal.text}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Consultation <ChevronRight className="w-5 h-5" />
//             </Link>
//             <a href={`tel:${phoneNumber}`}
//               className="inline-flex items-center gap-2 border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
//             >
//               <Phone className="w-5 h-5" /> Call: +91 7006377796
//             </a>
//           </motion.div>

//           <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
//             {STATS.map((s, i) => (
//               <div key={i} className="text-center">
//                 <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{s.value}</div>
//                 <div className="text-xs text-gray-500 mt-1">{s.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── INTRO PARA with hyperlocal keywords ─────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
//             className="bg-gradient-to-br from-gray-900/80 to-emerald-950/30 border border-emerald-900/40 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Why Udhampur Businesses Need SniperCoders
//             </h2>
//             <div className="space-y-4 text-gray-300 leading-relaxed">
//               <p>
//                 <strong className="text-white">Udhampur</strong> — the administrative headquarters of Udhampur district — is one of J&K's fastest-growing cities. Sitting strategically on the <strong className="text-emerald-400">National Highway NH44</strong> connecting Jammu to Srinagar, the city is a hub for trade, military activity (<strong className="text-emerald-400">Northern Command HQ</strong>), education, agriculture (<strong className="text-emerald-400">apple orchards</strong>), and increasingly, tourism following the <strong className="text-emerald-400">Udhampur-Srinagar-Baramulla Rail Link</strong> project and proximity to <strong className="text-emerald-400">Vaishno Devi</strong> and <strong className="text-emerald-400">Patnitop</strong>.
//               </p>
//               <p>
//                 Despite this explosive growth, most Udhampur businesses — from <strong className="text-white">NH44 dhabas</strong> to <strong className="text-white">defence suppliers</strong>, <strong className="text-white">apple traders</strong> to <strong className="text-white">local retailers</strong> — still lack a strong digital presence. Your competitors in Jammu and other cities are already capturing customers online. <strong className="text-white">SniperCoders</strong>, the <strong className="text-emerald-400">best software agency in Udhampur</strong>, exists to change that. We bring affordable, world-class digital solutions directly to local businesses here.
//               </p>
//               <p>
//                 Whether you run a <strong className="text-white">hotel near the highway</strong>, a <strong className="text-white">transport service</strong>, a <strong className="text-white">school</strong>, a <strong className="text-white">clinic</strong>, an <strong className="text-white">apple orchard</strong>, or a <strong className="text-white">government contracting business</strong> — we understand the Udhampur market and will build you a digital presence that brings real customers and real revenue. <strong className="text-emerald-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── SERVICES with keyword optimization ──────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Our Services in{" "}
//               <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Udhampur</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Practical, powerful digital solutions built for the pace of Udhampur's growing economy. <strong className="text-emerald-400">Web development, mobile apps, SEO, and more.</strong>
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((svc, i) => (
//               <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="group relative bg-gray-900/60 border border-gray-800 hover:border-emerald-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.08), transparent)" }} />
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
//                 <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">{svc.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
//                 <p className="text-xs text-emerald-400/70 italic">{svc.keywords}</p>
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
//       <section className="py-20 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Industries We Serve in{" "}
//               <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Udhampur</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               From <strong className="text-emerald-400">NH44 highway dhabas</strong> to <strong className="text-emerald-400">defence contractors</strong>, <strong className="text-emerald-400">apple orchards</strong> to <strong className="text-emerald-400">local retailers</strong> — every business category in Udhampur deserves a powerful digital presence.
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
//             <p className="text-sm text-gray-500 mb-4">Serving all Udhampur district locations:</p>
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

//       {/* ── WHY US with psychological triggers ──────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Built for{" "}
//               <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Udhampur</span>
//               , Delivered with Excellence
//             </h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//               Here's what makes us the <strong className="text-emerald-400">preferred digital partner for Udhampur's growing businesses</strong>:
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               "Affordable packages starting at ₹15,000 for Udhampur SMEs & micro-businesses",
//               "Urdu, Hindi, English & Dogri multilingual content support for maximum local reach",
//               "Local SEO targeting Udhampur, Ramnagar, Chenani, Batote & surrounding areas",
//               "Government tender & contractor website expertise for defence suppliers",
//               "Tourism-ready websites for hotels, dhabas & travel agencies on NH44",
//               "Army & defence canteen supplier digital catalogues with product listings",
//               "Apple orchard & agriculture ecommerce platforms with seasonal ordering",
//               "Razorpay, Paytm & UPI payment gateway integrations for local businesses",
//               "WhatsApp Business & chatbot integrations for local shops and services",
//               "School & coaching centre websites with online admission forms",
//               "Transport & logistics booking systems for taxi and bus operators",
//               "Post-launch support & maintenance with ongoing assistance"
//             ].map((item, i) => (
//               <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-emerald-800/50 transition-all duration-300"
//               >
//                 <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-300 text-sm">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link href="/contact"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
//             >
//               Start Your Project in Udhampur <ChevronRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL with social proof ───────────────────────── */}
//       <section className="py-12 bg-gradient-to-r from-emerald-900/20 via-teal-900/10 to-emerald-900/20 border-y border-gray-800/50">
//         <div className="container mx-auto px-4 text-center">
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
//           </div>
//           <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
//             "Our transport business in <strong className="text-emerald-400">Udhampur</strong> had zero online presence. SniperCoders built our website targeting 'taxi service Udhampur to Jammu' and 'tempo traveller Udhampur'. Now we get <strong className="text-emerald-400">daily booking inquiries from Google</strong> — tourists and locals both. Truly the best agency for Udhampur!"
//           </blockquote>
//           <p className="text-gray-500 mt-4 text-sm">— Transport Business Owner, Udhampur City</p>
//           <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
//             <span>⭐ 5/5 on Google</span>
//             <span>✅ Verified Client</span>
//             <span>📍 Udhampur City</span>
//             <span>💰 Daily Bookings</span>
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ with long-tail keywords ─────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Frequently Asked Questions —{" "}
//               <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Udhampur</span>
//             </h2>
//             <p className="text-gray-400">Answers to common questions about <strong className="text-emerald-400">software development, website design, and digital marketing in Udhampur.</strong></p>
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

//       {/* ── CTA with contact info ───────────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-4xl text-center">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
//             className="relative bg-gradient-to-br from-emerald-900/50 to-teal-900/40 border border-emerald-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 Ready to Go Digital in<br />
//                 <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Udhampur?</span>
//               </h2>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 Be one of the first businesses in <strong className="text-white">Udhampur, Ramnagar, Chenani & NH44 corridor</strong> to dominate Google search. Your competitors in Jammu are already online — this is your window to capture the local market before they do. <strong className="text-emerald-400">Affordable packages start at just ₹15,000.</strong>
//               </p>
              
//               {/* Contact cards */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <a href={`tel:${phoneNumber}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-emerald-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Phone className="w-6 h-6 text-emerald-400" />
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
//                 <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
//                   Book Free Consultation <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
//                   View Udhampur Portfolio
//                 </Link>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" /> Serving Udhampur, Ramnagar, Chenani, Batote & Surrounding Areas</span>
//                 <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-400" /> GST Registered • ISO Certified</span>
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








// app/services/best-software-agency-udhampur/page.tsx

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
  Clock, Shield, Crown, Rocket, Gem,
  Mountain, Train, Bus, Shield as ShieldIcon, Tractor
} from "lucide-react";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay: i * 0.08 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const SERVICES = [
  { 
    icon: <Globe className="w-7 h-7" />, 
    title: "Website Development Udhampur", 
    desc: "Professional website design company in Udhampur. Professional websites for Udhampur businesses &mdash; from government contractors and traders to local shops and service providers.", 
    gradient: "from-emerald-500 to-teal-600",
    keywords: "website design Udhampur, web development company Udhampur, website designer near me Udhampur"
  },
  { 
    icon: <Smartphone className="w-7 h-7" />, 
    title: "Mobile App Development Udhampur", 
    desc: "Top app development agency in Udhampur. Android & iOS apps for Udhampur entrepreneurs, transport operators & local businesses looking to reach customers digitally.", 
    gradient: "from-violet-500 to-purple-700",
    keywords: "app development Udhampur, mobile app developers Udhampur, Android app development Udhampur"
  },
  { 
    icon: <Code className="w-7 h-7" />, 
    title: "Custom Software Development Udhampur", 
    desc: "Enterprise software solutions in Udhampur. Inventory systems, billing software, school management platforms & business automation tools built for Udhampur SMEs.", 
    gradient: "from-blue-500 to-cyan-600",
    keywords: "software development Udhampur, custom software Udhampur, billing software Udhampur"
  },
  { 
    icon: <TrendingUp className="w-7 h-7" />, 
    title: "Digital Marketing Agency Udhampur", 
    desc: "Rank on Google for &apos;best [service] in Udhampur&apos; with our local SEO, Google Ads & social media marketing strategies. Best SEO company in Udhampur.", 
    gradient: "from-rose-500 to-pink-600",
    keywords: "digital marketing Udhampur, SEO services Udhampur, Google Ads Udhampur"
  },
  { 
    icon: <Users className="w-7 h-7" />, 
    title: "IT Consulting Udhampur", 
    desc: "Expert IT consultants in Udhampur. Technology planning and digital transformation guidance for Udhampur businesses entering the digital economy.", 
    gradient: "from-amber-500 to-orange-600",
    keywords: "IT consulting Udhampur, technology consultants Udhampur, digital transformation Udhampur"
  },
  { 
    icon: <Award className="w-7 h-7" />, 
    title: "Branding & Design Udhampur", 
    desc: "Premium branding agency in Udhampur. Logo, brand identity, visiting cards, social media creatives & complete brand kits for Udhampur businesses.", 
    gradient: "from-fuchsia-500 to-pink-600",
    keywords: "branding agency Udhampur, graphic design Udhampur, logo design Udhampur"
  },
];

const BUSINESS_CATEGORIES = [
  { icon: <Utensils className="w-5 h-5" />, label: "Dhabas on NH44", keyword: "restaurant website Udhampur", color: "text-orange-400" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Udhampur", keyword: "hotel website Udhampur", color: "text-blue-400" },
  { icon: <Car className="w-5 h-5" />, label: "Taxi Services", keyword: "transport website Udhampur", color: "text-cyan-400" },
  { icon: <Bus className="w-5 h-5" />, label: "Bus Operators", keyword: "bus booking website Udhampur", color: "text-yellow-400" },
  { icon: <Train className="w-5 h-5" />, label: "Railway Suppliers", keyword: "railway contractor website Udhampur", color: "text-blue-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail Stores", keyword: "retail website Udhampur", color: "text-pink-400" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Schools Udhampur", keyword: "school website Udhampur", color: "text-green-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Clinics Udhampur", keyword: "clinic website Udhampur", color: "text-red-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel Agencies", keyword: "travel website Udhampur", color: "text-sky-400" },
  { icon: <TreePine className="w-5 h-5" />, label: "Apple Orchards", keyword: "agriculture website Udhampur", color: "text-lime-400" },
  { icon: <Tractor className="w-5 h-5" />, label: "Farming Equipment", keyword: "agriculture equipment website Udhampur", color: "text-green-300" },
  { icon: <Home className="w-5 h-5" />, label: "Property Dealers", keyword: "real estate website Udhampur", color: "text-teal-400" },
  { icon: <Truck className="w-5 h-5" />, label: "Logistics Udhampur", keyword: "logistics software Udhampur", color: "text-yellow-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Hardware Shops", keyword: "hardware website Udhampur", color: "text-orange-300" },
  { icon: <Factory className="w-5 h-5" />, label: "Rice Mills", keyword: "rice mill website Udhampur", color: "text-gray-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Bakeries Udhampur", keyword: "bakery website Udhampur", color: "text-amber-400" },
  { icon: <Camera className="w-5 h-5" />, label: "Photo Studios", keyword: "photography website Udhampur", color: "text-violet-400" },
  { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", keyword: "event website Udhampur", color: "text-rose-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "Finance Udhampur", keyword: "finance website Udhampur", color: "text-blue-300" },
  { icon: <Building2 className="w-5 h-5" />, label: "Govt Contractors", keyword: "government contractor website Udhampur", color: "text-purple-300" },
  { icon: <ShieldIcon className="w-5 h-5" />, label: "Defence Suppliers", keyword: "defence supplier website Udhampur", color: "text-amber-300" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "Wholesale Traders", keyword: "wholesale website Udhampur", color: "text-emerald-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms Udhampur", keyword: "fitness website Udhampur", color: "text-lime-300" },
  { icon: <Wifi className="w-5 h-5" />, label: "Computer Shops", keyword: "computer shop website Udhampur", color: "text-cyan-300" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Consultants", keyword: "consultant website Udhampur", color: "text-indigo-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Ayurveda Udhampur", keyword: "wellness website Udhampur", color: "text-pink-300" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Coaching Centres", keyword: "coaching website Udhampur", color: "text-green-300" },
  { icon: <Truck className="w-5 h-5" />, label: "Army Canteen", keyword: "canteen supplier website Udhampur", color: "text-amber-300" },
  { icon: <Mountain className="w-5 h-5" />, label: "Tourist Places", keyword: "tourism website Udhampur", color: "text-emerald-300" },
];

const STATS = [
  { value: "30+", label: "Udhampur Projects Delivered", keyword: "Udhampur software projects" },
  { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Udhampur" },
  { value: "24/7", label: "Local Support Available", keyword: "IT support Udhampur" },
  { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Udhampur reviews" },
];

const TRUST_SIGNALS = [
  { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
  { icon: <Clock className="w-5 h-5" />, text: "10+ Years Experience" },
  { icon: <MapPin className="w-5 h-5" />, text: "Serving Udhampur District" },
  { icon: <Gem className="w-5 h-5" />, text: "Urdu/Hindi/English/Dogri Support" },
  { icon: <Rocket className="w-5 h-5" />, text: "Affordable Local Pricing" },
];

const LOCATIONS = [
  "Udhampur City", "Ramnagar", "Chenani", "Majalta", "Basantgarh",
  "Kud", "Batote", "Assar", "Latti", "Moungri",
  "Panchari", "Tikri", "Jakhani", "Dudu", "Gandhi Nagar Udhampur",
  "Reasi Road", "Jammu Highway", "Katra Road", "NH44 Corridor", "Railway Station Area"
];

const FAQS = [
  { 
    q: "Which is the best software agency in Udhampur?", 
    a: "SniperCoders is the most trusted software agency serving Udhampur. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we&apos;re the preferred choice for businesses across Udhampur city, Ramnagar, Chenani, and surrounding areas. Our affordable pricing and local understanding set us apart." 
  },
  { 
    q: "Can SniperCoders build websites for small businesses in Udhampur?", 
    a: "Yes! We specialize in affordable, professional websites for small and medium businesses in Udhampur. Our packages start at just ₹15,000 &mdash; accessible even for local traders, shop owners, and service providers. We understand that Udhampur businesses need cost-effective solutions without compromising on quality." 
  },
  { 
    q: "Do you understand the Udhampur business market?", 
    a: "Absolutely. Udhampur is a rapidly growing city with a strong mix of government activity (Northern Command HQ), military presence, agriculture (apple orchards), tourism (gateway to Vaishno Devi and Patnitop), and trade along the NH44 highway. We tailor our digital strategies to match these local dynamics &mdash; from defence supplier portals to dhaba websites and apple orchard ecommerce." 
  },
  { 
    q: "Can you help my Udhampur business rank on Google?", 
    a: "Yes. Our local SEO service targets searches like &apos;best hotel in Udhampur&apos;, &apos;transport services Udhampur&apos;, &apos;top contractor in Udhampur&apos;, &apos;apple wholesaler Udhampur&apos;, and &apos;dhaba near NH44 Udhampur&apos; &mdash; driving real customers to your door. We optimize your Google Business Profile and create locally relevant content that Google loves." 
  },
  { 
    q: "Do you support Urdu, Hindi, and Dogri languages?", 
    a: "Yes! We support Urdu, Hindi, English, and Dogri content &mdash; crucial for reaching Udhampur&apos;s diverse linguistic audience. Most businesses only target English keywords, missing out on the majority of local searches. Our multilingual approach gives you a significant competitive advantage." 
  },
  { 
    q: "Can you build websites for government contractors and defence suppliers?", 
    a: "Absolutely. Udhampur is home to the Indian Army&apos;s Northern Command, creating a strong ecosystem of defence suppliers and government contractors. We build compliant websites, digital catalogues, and tender application portals specifically for this sector, helping you win more contracts." 
  },
  { 
    q: "Is there any in-person support available for Udhampur clients?", 
    a: "We provide full remote support with video consultation, which works seamlessly for most clients. For Udhampur businesses that prefer occasional in-person meetings, we can schedule visits when our team is in the region. We ensure dedicated communication via WhatsApp, calls & email throughout the project." 
  },
  { 
    q: "How much does a website cost in Udhampur?", 
    a: "Our Udhampur packages start at ₹15,000 for a basic business website, ₹25,000-₹45,000 for e-commerce or advanced sites, and custom solutions priced based on requirements. All packages include hosting, SSL certificate, and 3 months free maintenance. We offer transparent pricing with no hidden charges." 
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function UdhampurPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#06100a] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(5,150,105,0.14) 0%, transparent 60%), #06100a"
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-emerald-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-teal-600/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> #1 Rated Software Agency in Udhampur • 30+ Projects Delivered
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Agency<br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              in Udhampur, J&K
            </span>
          </motion.h1>

          <motion.p
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders brings big-city digital expertise to Udhampur &mdash; <strong className="text-emerald-400">website development, mobile apps, SEO & digital marketing</strong> crafted for the unique growth opportunities of J&K&apos;s gateway city. Serving <strong className="text-emerald-400">Udhampur, Ramnagar, Chenani & NH44 corridor</strong>. <span className="text-emerald-400">30+ projects • 5★ rated • Affordable local pricing</span>
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-emerald-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" /> Call: +91 7006377796
            </a>
          </motion.div>

          <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO PARA with hyperlocal keywords ─────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="bg-gradient-to-br from-gray-900/80 to-emerald-950/30 border border-emerald-900/40 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Why Udhampur Businesses Need SniperCoders
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Udhampur</strong> &mdash; the administrative headquarters of Udhampur district &mdash; is one of J&K&apos;s fastest-growing cities. Sitting strategically on the <strong className="text-emerald-400">National Highway NH44</strong> connecting Jammu to Srinagar, the city is a hub for trade, military activity (<strong className="text-emerald-400">Northern Command HQ</strong>), education, agriculture (<strong className="text-emerald-400">apple orchards</strong>), and increasingly, tourism following the <strong className="text-emerald-400">Udhampur-Srinagar-Baramulla Rail Link</strong> project and proximity to <strong className="text-emerald-400">Vaishno Devi</strong> and <strong className="text-emerald-400">Patnitop</strong>.
              </p>
              <p>
                Despite this explosive growth, most Udhampur businesses &mdash; from <strong className="text-white">NH44 dhabas</strong> to <strong className="text-white">defence suppliers</strong>, <strong className="text-white">apple traders</strong> to <strong className="text-white">local retailers</strong> &mdash; still lack a strong digital presence. Your competitors in Jammu and other cities are already capturing customers online. <strong className="text-white">SniperCoders</strong>, the <strong className="text-emerald-400">best software agency in Udhampur</strong>, exists to change that. We bring affordable, world-class digital solutions directly to local businesses here.
              </p>
              <p>
                Whether you run a <strong className="text-white">hotel near the highway</strong>, a <strong className="text-white">transport service</strong>, a <strong className="text-white">school</strong>, a <strong className="text-white">clinic</strong>, an <strong className="text-white">apple orchard</strong>, or a <strong className="text-white">government contracting business</strong> &mdash; we understand the Udhampur market and will build you a digital presence that brings real customers and real revenue. <strong className="text-emerald-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES with keyword optimization ──────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Our Services in{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Udhampur</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Practical, powerful digital solutions built for the pace of Udhampur&apos;s growing economy. <strong className="text-emerald-400">Web development, mobile apps, SEO, and more.</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-emerald-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
                <p className="text-xs text-emerald-400/70 italic">{svc.keywords}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Udhampur</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From <strong className="text-emerald-400">NH44 highway dhabas</strong> to <strong className="text-emerald-400">defence contractors</strong>, <strong className="text-emerald-400">apple orchards</strong> to <strong className="text-emerald-400">local retailers</strong> &mdash; every business category in Udhampur deserves a powerful digital presence.
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
            <p className="text-sm text-gray-500 mb-4">Serving all Udhampur district locations:</p>
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

      {/* ── WHY US with psychological triggers ──────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
              Built for{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Udhampur</span>
              , Delivered with Excellence
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s what makes us the <strong className="text-emerald-400">preferred digital partner for Udhampur&apos;s growing businesses</strong>:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Affordable packages starting at ₹15,000 for Udhampur SMEs & micro-businesses",
              "Urdu, Hindi, English & Dogri multilingual content support for maximum local reach",
              "Local SEO targeting Udhampur, Ramnagar, Chenani, Batote & surrounding areas",
              "Government tender & contractor website expertise for defence suppliers",
              "Tourism-ready websites for hotels, dhabas & travel agencies on NH44",
              "Army & defence canteen supplier digital catalogues with product listings",
              "Apple orchard & agriculture ecommerce platforms with seasonal ordering",
              "Razorpay, Paytm & UPI payment gateway integrations for local businesses",
              "WhatsApp Business & chatbot integrations for local shops and services",
              "School & coaching centre websites with online admission forms",
              "Transport & logistics booking systems for taxi and bus operators",
              "Post-launch support & maintenance with ongoing assistance"
            ].map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-emerald-800/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project in Udhampur <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL with social proof ───────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-emerald-900/20 via-teal-900/10 to-emerald-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
            &ldquo;Our transport business in <strong className="text-emerald-400">Udhampur</strong> had zero online presence. SniperCoders built our website targeting &apos;taxi service Udhampur to Jammu&apos; and &apos;tempo traveller Udhampur&apos;. Now we get <strong className="text-emerald-400">daily booking inquiries from Google</strong> &mdash; tourists and locals both. Truly the best agency for Udhampur!&rdquo;
          </blockquote>
          <p className="text-gray-500 mt-4 text-sm">&mdash; Transport Business Owner, Udhampur City</p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
            <span>⭐ 5/5 on Google</span>
            <span>✅ Verified Client</span>
            <span>📍 Udhampur City</span>
            <span>💰 Daily Bookings</span>
          </div>
        </div>
      </section>

      {/* ── FAQ with long-tail keywords ─────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions &mdash;{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Udhampur</span>
            </h2>
            <p className="text-gray-400">Answers to common questions about <strong className="text-emerald-400">software development, website design, and digital marketing in Udhampur.</strong></p>
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

      {/* ── CTA with contact info ───────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="relative bg-gradient-to-br from-emerald-900/50 to-teal-900/40 border border-emerald-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Ready to Go Digital in<br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Udhampur?</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Be one of the first businesses in <strong className="text-white">Udhampur, Ramnagar, Chenani & NH44 corridor</strong> to dominate Google search. Your competitors in Jammu are already online &mdash; this is your window to capture the local market before they do. <strong className="text-emerald-400">Affordable packages start at just ₹15,000.</strong>
              </p>
              
              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-emerald-500 rounded-xl px-6 py-4 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-emerald-400" />
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
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
                  View Udhampur Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" /> Serving Udhampur, Ramnagar, Chenani, Batote & Surrounding Areas</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-400" /> GST Registered • ISO Certified</span>
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




