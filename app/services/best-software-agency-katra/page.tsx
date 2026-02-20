// // FILE PATH: app/services/best-software-agency-katra/page.tsx

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
//   Mountain, Train, Bus, Footprints, Church, Tent,
//   Map, Compass, Heart, Sun, Cloud, Leaf
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
//     title: "Website Development Katra", 
//     desc: "Professional website design company in Katra. Pilgrimage booking portals, hotel websites, yatra operator platforms & local business sites built for Katra's thriving tourism economy.", 
//     gradient: "from-orange-500 to-red-600",
//     keywords: "website design Katra, web development Katra, Vaishno Devi website, pilgrimage website design"
//   },
//   { 
//     icon: <Smartphone className="w-7 h-7" />, 
//     title: "Mobile App Development Katra", 
//     desc: "Top app development agency in Katra. Vaishno Devi yatra booking apps, helicopter ticket apps, hotel booking apps & pilgrimage guide apps for Katra's mobile-first pilgrims.", 
//     gradient: "from-amber-500 to-yellow-600",
//     keywords: "app development Katra, mobile app developers Katra, Vaishno Devi app, yatra booking app"
//   },
//   { 
//     icon: <Code className="w-7 h-7" />, 
//     title: "Custom Software Katra", 
//     desc: "Custom software solutions in Katra. Pilgrim management systems, hotel reservation software, travel agency platforms & inventory systems for Katra businesses.", 
//     gradient: "from-red-500 to-rose-600",
//     keywords: "custom software Katra, hotel management software Katra, pilgrimage management system"
//   },
//   { 
//     icon: <TrendingUp className="w-7 h-7" />, 
//     title: "Digital Marketing Katra", 
//     desc: "Rank on Google for 'Vaishno Devi booking', 'hotels in Katra', 'helicopter booking Katra' & more with our pilgrimage-focused SEO & Google Ads. Best SEO company in Katra.", 
//     gradient: "from-blue-500 to-indigo-600",
//     keywords: "digital marketing Katra, SEO services Katra, Vaishno Devi SEO, pilgrimage marketing"
//   },
//   { 
//     icon: <Users className="w-7 h-7" />, 
//     title: "IT Consulting Katra", 
//     desc: "Expert IT consultants in Katra. Technology planning for hotels, travel agencies, yatra operators & pilgrimage businesses looking to digitize their operations.", 
//     gradient: "from-purple-500 to-violet-600",
//     keywords: "IT consulting Katra, technology consultants Katra, digital transformation Katra"
//   },
//   { 
//     icon: <Award className="w-7 h-7" />, 
//     title: "Branding & Design Katra", 
//     desc: "Premium branding agency in Katra. Logo design, hotel branding, pilgrimage brochures, social media creatives & complete brand identity for Katra businesses.", 
//     gradient: "from-pink-500 to-rose-600",
//     keywords: "branding agency Katra, graphic design Katra, logo design Katra, hotel branding"
//   },
// ];

// const BUSINESS_CATEGORIES = [
//   { icon: <Church className="w-5 h-5" />, label: "Vaishno Devi Yatra", keyword: "Vaishno Devi website, Mata Vaishno Devi booking", color: "text-orange-400" },
//   { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Katra", keyword: "hotel website Katra, hotels near Vaishno Devi", color: "text-blue-400" },
//   { icon: <Tent className="w-5 h-5" />, label: "Bhawan Accommodation", keyword: "Vaishno Devi bhawan booking", color: "text-green-400" },
//   { icon: <Car className="w-5 h-5" />, label: "Taxi Services Katra", keyword: "taxi service Katra, cab to Vaishno Devi", color: "text-cyan-400" },
//   { icon: <Plane className="w-5 h-5" />, label: "Helicopter Booking", keyword: "Vaishno Devi helicopter booking, Katra helicopter service", color: "text-sky-400" },
//   { icon: <Train className="w-5 h-5" />, label: "Railway Station", keyword: "Katra railway station, Shri Mata Vaishno Devi Katra station", color: "text-indigo-400" },
//   { icon: <Bus className="w-5 h-5" />, label: "Bus Operators", keyword: "bus to Katra, Vaishno Devi bus service", color: "text-yellow-400" },
//   { icon: <Utensils className="w-5 h-5" />, label: "Restaurants Katra", keyword: "restaurant website Katra, vegetarian restaurants Katra", color: "text-orange-400" },
//   { icon: <Coffee className="w-5 h-5" />, label: "Cafés & Snacks", keyword: "cafe Katra, snacks near Vaishno Devi", color: "text-amber-400" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Religious Stores", keyword: "religious store Katra, puja items Katra", color: "text-pink-400" },
//   { icon: <ShoppingCart className="w-5 h-5" />, label: "Prasad & Offerings", keyword: "prasad online, Vaishno Devi prasad", color: "text-emerald-400" },
//   { icon: <Briefcase className="w-5 h-5" />, label: "Travel Agencies", keyword: "travel agency Katra, yatra package website", color: "text-indigo-400" },
//   { icon: <Footprints className="w-5 h-5" />, label: "Pony & Palki Services", keyword: "pony service Vaishno Devi, palki booking Katra", color: "text-amber-300" },
//   { icon: <Map className="w-5 h-5" />, label: "Tour Guides", keyword: "Vaishno Devi guide, yatra guide Katra", color: "text-green-300" },
//   { icon: <Compass className="w-5 h-5" />, label: "Trekking Operators", keyword: "trekking Katra, Vaishno Devi trek", color: "text-lime-400" },
//   { icon: <Heart className="w-5 h-5" />, label: "Medical Facilities", keyword: "hospital Katra, health center Vaishno Devi", color: "text-red-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Clinics & Pharmacy", keyword: "pharmacy Katra, medical store Vaishno Devi", color: "text-rose-400" },
//   { icon: <Home className="w-5 h-5" />, label: "Guest Houses", keyword: "guest house Katra, budget stay Vaishno Devi", color: "text-teal-400" },
//   { icon: <Building2 className="w-5 h-5" />, label: "Lodges & Dharamshalas", keyword: "dharamshala Katra, lodge near Vaishno Devi", color: "text-purple-300" },
//   { icon: <Camera className="w-5 h-5" />, label: "Photography Services", keyword: "pilgrimage photography Katra", color: "text-violet-400" },
//   { icon: <Landmark className="w-5 h-5" />, label: "ATM & Money Exchange", keyword: "money exchange Katra, ATM near Vaishno Devi", color: "text-blue-300" },
//   { icon: <Wifi className="w-5 h-5" />, label: "Internet Cafés", keyword: "internet cafe Katra, WiFi near Vaishno Devi", color: "text-cyan-300" },
//   { icon: <TreePine className="w-5 h-5" />, label: "Tourist Attractions", keyword: "places near Katra, attractions near Vaishno Devi", color: "text-green-300" },
//   { icon: <Sun className="w-5 h-5" />, label: "Weather Services", keyword: "Katra weather, Vaishno Devi weather forecast", color: "text-yellow-300" },
//   { icon: <Cloud className="w-5 h-5" />, label: "Seasonal Updates", keyword: "Katra season, best time to visit Vaishno Devi", color: "text-gray-300" },
//   { icon: <Leaf className="w-5 h-5" />, label: "Eco Tourism", keyword: "eco tourism Katra, nature trails near Vaishno Devi", color: "text-emerald-300" },
//   { icon: <Mountain className="w-5 h-5" />, label: "Trekking Routes", keyword: "Vaishno Devi trek route, Trikuta Mountain trek", color: "text-stone-400" },
// ];

// const STATS = [
//   { value: "30+", label: "Katra Projects Delivered", keyword: "Katra software projects, Vaishno Devi website projects" },
//   { value: "8M+", label: "Pilgrims Served Annually", keyword: "Vaishno Devi pilgrims, Katra tourism" },
//   { value: "24/7", label: "Support Available", keyword: "IT support Katra, pilgrimage website support" },
//   { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Katra reviews" },
// ];

// const TRUST_SIGNALS = [
//   { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
//   { icon: <Clock className="w-5 h-5" />, text: "10+ Years Experience" },
//   { icon: <MapPin className="w-5 h-5" />, text: "Serving Katra & Jammu Region" },
//   { icon: <Gem className="w-5 h-5" />, text: "Hindi/Urdu/English/Dogri Support" },
//   { icon: <Rocket className="w-5 h-5" />, text: "Pilgrimage Booking Experts" },
// ];

// const LOCATIONS = [
//   "Katra City", "Vaishno Devi Bhawan", "Sanjichhat", "Himkoti", "Adhkumari",
//   "Charan Paduka", "Ardhkuwari", "Bhairavnath Temple", "Banganga", "Helipad Area",
//   "Railway Station Katra", "Bus Stand Katra", "Katra Bazaar", "Hotel District",
//   "Jammu Highway", "Domel", "Reasi Road", "Panchhi", "Shalimar", "Dera Baba Banda"
// ];

// const FAQS = [
//   { 
//     q: "Which is the best software agency in Katra?", 
//     a: "SniperCoders is the most trusted software agency serving Katra and the Vaishno Devi pilgrimage region. With 30+ successful projects, 5-star Google reviews, and deep expertise in pilgrimage tourism websites, we're the preferred choice for hotels, yatra operators, and businesses across Katra. Our understanding of the pilgrimage season, booking patterns, and pilgrim needs sets us apart." 
//   },
//   { 
//     q: "Can SniperCoders build a website for my Vaishno Devi yatra business?", 
//     a: "Absolutely! We specialize in pilgrimage tourism websites. Whether you run a hotel in Katra, a taxi service, a helicopter booking agency, or a complete yatra package operator, we build websites that help pilgrims find you. Our sites include online booking systems, payment gateways, yatra package displays, and SEO optimized for keywords like 'Vaishno Devi helicopter booking' and 'hotels near Vaishno Devi'." 
//   },
//   { 
//     q: "Do you understand the Katra pilgrimage market?", 
//     a: "Yes, deeply. Katra receives over 8 million pilgrims annually heading to Vaishno Devi. We understand the pilgrimage cycle — Navratras, weekends, summer rush, winter challenges. We know that pilgrims search for 'Katra hotels', 'Vaishno Devi yatra package', 'helicopter booking', 'pony service', and 'palki booking'. Our digital strategies are built around these search intents." 
//   },
//   { 
//     q: "Can you help with online booking for hotels and yatra packages?", 
//     a: "Yes! We integrate powerful booking systems into hotel websites and yatra operator sites. Pilgrims can check availability, compare rooms/packages, make payments online (UPI, cards, netbanking), and receive instant confirmation. This reduces your phone calls and administrative work while increasing bookings from tech-savvy pilgrims." 
//   },
//   { 
//     q: "Do you support Hindi and Urdu languages?", 
//     a: "Yes! We support Hindi, Urdu, English, and Dogri — crucial for reaching Katra's diverse pilgrim audience. Many pilgrims prefer searching in Hindi. We create multilingual content that helps you rank for both English and Hindi keywords like 'वैष्णो देवी हेलिकॉप्टर बुकिंग' and 'कटरा होटल'." 
//   },
//   { 
//     q: "Can you build helicopter booking websites for Vaishno Devi?", 
//     a: "Absolutely. We specialize in helicopter booking platforms integrated with the official Vaishno Devi helicopter service schedule. Our systems show real-time availability, allow online booking, send confirmation SMS/emails, and manage waitlists — perfect for helicopter operators and travel agencies." 
//   },
//   { 
//     q: "How much does a website cost in Katra?", 
//     a: "Our Katra packages start at ₹15,000 for a basic business website, ₹25,000-₹45,000 for hotel booking websites, and ₹50,000+ for custom yatra booking platforms. All packages include hosting, SSL, payment gateway integration, and 3 months free maintenance. We offer transparent pricing with no hidden charges." 
//   },
//   { 
//     q: "What's the best time to launch a website for my Katra business?", 
//     a: "The best time is now! Pilgrims search year-round, but especially before Navratras (March-April and September-October) and summer vacations. A website takes 2-4 weeks to build and another 2-3 months to rank well on Google. Starting now ensures you're visible for the next pilgrim season." 
//   },
// ];

// // Contact information
// const phoneNumber = "+917006377796";
// const email = "snipercoders25@gmail.com";

// export default function KatraPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-[#0f0700] text-white font-sans overflow-x-hidden">

//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section
//         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
//         style={{
//           background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249,115,22,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(239,68,68,0.14) 0%, transparent 60%), #0f0700"
//         }}
//       >
//         <div className="absolute inset-0 opacity-[0.04]"
//           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
//         />
//         <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-orange-600/15 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-red-600/15 blur-[80px] pointer-events-none" />

//         <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
//           >
//             <Crown className="w-4 h-4" /> #1 Software Agency in Katra • Serving 8M+ Pilgrims Annually
//           </motion.div>

//           <motion.h1
//             initial="hidden" animate="show" variants={fadeUp}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Best Software Agency<br />
//             <span className="bg-gradient-to-r from-orange-400 via-red-400 to-rose-500 bg-clip-text text-transparent">
//               in Katra, J&K
//             </span>
//           </motion.h1>

//           <motion.p
//             custom={1} initial="hidden" animate="show" variants={fadeUp}
//             className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
//           >
//             SniperCoders helps Katra's pilgrimage businesses reach <strong className="text-orange-400">8 million+ Vaishno Devi pilgrims</strong> annually — with powerful <strong className="text-orange-400">hotel booking websites, yatra portals, helicopter booking apps & local SEO</strong>. Serving <strong className="text-orange-400">Katra, Vaishno Devi Bhawan, Sanjichhat & entire pilgrimage route</strong>. <span className="text-orange-400">30+ projects • 5★ rated • Pilgrimage experts</span>
//           </motion.p>

//           {/* Trust signals */}
//           <motion.div
//             custom={1.5} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {TRUST_SIGNALS.map((signal, i) => (
//               <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
//                 <span className="text-orange-400">{signal.icon}</span>
//                 {signal.text}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Consultation <ChevronRight className="w-5 h-5" />
//             </Link>
//             <a href={`tel:${phoneNumber}`}
//               className="inline-flex items-center gap-2 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
//             >
//               <Phone className="w-5 h-5" /> Call: +91 7006377796
//             </a>
//           </motion.div>

//           <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
//             {STATS.map((s, i) => (
//               <div key={i} className="text-center">
//                 <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">{s.value}</div>
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
//             className="bg-gradient-to-br from-gray-900/80 to-orange-950/30 border border-orange-900/40 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Katra — The Gateway to Mata Vaishno Devi's Blessings
//             </h2>
//             <div className="space-y-4 text-gray-300 leading-relaxed">
//               <p>
//                 <strong className="text-white">Katra</strong> is not just a town — it's the sacred base camp for over <strong className="text-orange-400">8 million pilgrims</strong> who embark on the <strong className="text-orange-400">Vaishno Devi Yatra</strong> every year. Located in the <strong className="text-orange-400">Reasi district of Jammu & Kashmir</strong>, this bustling pilgrimage hub comes alive 365 days a year with devotees from across India and abroad seeking Mata Rani's blessings.
//               </p>
//               <p>
//                 From the moment pilgrims arrive at <strong className="text-white">Katra Railway Station</strong> (Shri Mata Vaishno Devi Katra station) to their stay in <strong className="text-white">hotels near the bus stand</strong>, from <strong className="text-white">helicopter bookings at Sanjichhat</strong> to the final <strong className="text-white">darshan at Bhawan</strong> — every step of the journey involves online searches. Yet most Katra businesses — hotels, taxi operators, restaurants, travel agencies — have minimal digital presence.
//               </p>
//               <p>
//                 <strong className="text-white">SniperCoders</strong>, the <strong className="text-orange-400">best software agency in Katra</strong>, helps you capture this massive pilgrim traffic. We build <strong className="text-white">hotel booking websites</strong> that rank for 'hotels in Katra near railway station', <strong className="text-white">helicopter booking portals</strong> for 'Vaishno Devi helicopter ticket', <strong className="text-white">yatra package sites</strong> for 'Katra to Vaishno Devi tour', and <strong className="text-white">local business websites</strong> for restaurants, taxi services, and religious stores.
//               </p>
//               <p>
//                 Whether you're a <strong className="text-white">hotel owner near the bus stand</strong>, a <strong className="text-white">helicopter booking agent</strong>, a <strong className="text-white">travel agency</strong>, a <strong className="text-white">restaurant in Katra Bazaar</strong>, or a <strong className="text-white">pony/palki service provider</strong> — we have the pilgrimage-specific expertise to put your business in front of millions of devotees. <strong className="text-orange-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
//               <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Katra</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Pilgrimage-focused digital solutions built for Katra's unique yatra economy. <strong className="text-orange-400">Hotel websites, booking portals, SEO, and more.</strong>
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((svc, i) => (
//               <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="group relative bg-gray-900/60 border border-gray-800 hover:border-orange-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.08), transparent)" }} />
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
//                 <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors">{svc.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
//                 <p className="text-xs text-orange-400/70 italic">{svc.keywords}</p>
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
//       <section className="py-20 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Industries We Serve in{" "}
//               <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Katra</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               From <strong className="text-orange-400">Vaishno Devi Bhawan hotels</strong> to <strong className="text-orange-400">helicopter booking agents</strong>, <strong className="text-orange-400">Katra Bazaar restaurants</strong> to <strong className="text-orange-400">pony service providers</strong> — every pilgrimage business deserves to be found online.
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
//             <p className="text-sm text-gray-500 mb-4">Serving all Katra & Vaishno Devi pilgrimage locations:</p>
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
//               Why Katra Businesses Choose{" "}
//               <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SniperCoders</span>
//             </h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//               Here's what makes us the <strong className="text-orange-400">preferred digital partner for Katra's pilgrimage businesses</strong>:
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               "Pilgrimage-focused SEO targeting 'Vaishno Devi booking', 'hotels in Katra', 'helicopter booking'",
//               "Hotel booking websites with real-time availability & online payment integration",
//               "Vaishno Devi helicopter booking portals with schedule & pricing display",
//               "Yatra package websites with itinerary planning & group booking systems",
//               "Hindi, Urdu, English & Dogri multilingual content for maximum pilgrim reach",
//               "Google Business Profile optimization for Katra hotels & restaurants",
//               "Railway station & bus stand proximity targeting for local businesses",
//               "Pony & palki service booking systems with rate cards & availability",
//               "Restaurant websites with menu display, reviews & online ordering",
//               "Pilgrimage photography & videography portfolio sites",
//               "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
//               "24/7 support during peak yatra seasons (Navratras, weekends, holidays)"
//             ].map((item, i) => (
//               <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-orange-800/50 transition-all duration-300"
//               >
//                 <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-300 text-sm">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link href="/contact"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
//             >
//               Start Your Project in Katra <ChevronRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL with social proof ───────────────────────── */}
//     <section className="py-12 bg-gradient-to-r from-orange-900/20 via-red-900/10 to-orange-900/20 border-y border-gray-800/50">
//   <div className="container mx-auto px-4 text-center">
//     <div className="flex flex-wrap justify-center gap-3 mb-6">
//       {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
//     </div>
//     <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
//       "We run <strong className="text-orange-400">Jai Mata Di Tour and Travel</strong> on <strong className="text-orange-400">Ban Ganga Road in Katra</strong>, serving Vaishno Devi pilgrims with yatra packages, taxi services, and hotel bookings. SniperCoders built our complete website at <strong className="text-orange-400">jaimataditourandtravel.com</strong> with online booking and optimized it for 'Katra to Vaishno Devi taxi', 'yatra package Katra', and 'hotels near Ban Ganga Road'. Now we get <strong className="text-orange-400">40% of our bookings online</strong>, mostly from pilgrims who find us on Google before they even reach Katra. Best decision for our pilgrimage business!"
//     </blockquote>
//     <p className="text-gray-500 mt-4 text-sm">— Owner, Jai Mata Di Tour and Travel, Ban Ganga Road, Katra</p>
//     <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
//       <span>⭐ 5/5 on Google</span>
//       <span>✅ Verified Client</span>
//       <span>📍 Ban Ganga Road, Katra</span>
//       <span>💰 40% Online Bookings</span>
//       <span>🌐 <a href="https://www.jaimataditourandtravel.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">jaimataditourandtravel.com</a></span>
//     </div>
//   </div>
// </section>

//       {/* ── PILGRIMAGE STATS SECTION ───────────────────────────── */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
//               The <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Vaishno Devi</span> Pilgrimage Opportunity
//             </h2>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <motion.div custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//               className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center"
//             >
//               <div className="text-4xl font-black text-orange-400 mb-2">8M+</div>
//               <p className="text-gray-300 text-sm">Annual pilgrims to Vaishno Devi</p>
//             </motion.div>
//             <motion.div custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//               className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center"
//             >
//               <div className="text-4xl font-black text-orange-400 mb-2">85%</div>
//               <p className="text-gray-300 text-sm">Pilgrims search online before booking</p>
//             </motion.div>
//             <motion.div custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//               className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center"
//             >
//               <div className="text-4xl font-black text-orange-400 mb-2">365</div>
//               <p className="text-gray-300 text-sm">Days of pilgrimage traffic (year-round)</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ with long-tail keywords ─────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Frequently Asked Questions —{" "}
//               <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Katra</span>
//             </h2>
//             <p className="text-gray-400">Answers to common questions about <strong className="text-orange-400">website design, booking systems, and digital marketing for Vaishno Devi pilgrimage businesses.</strong></p>
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
//             className="relative bg-gradient-to-br from-orange-900/50 to-red-900/40 border border-orange-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 Ready to Welcome More Pilgrims?<br />
//                 <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Let's Build Your Digital Presence</span>
//               </h2>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 <strong className="text-white">8 million+ pilgrims</strong> search for hotels, helicopter bookings, yatra packages & services in Katra every year. From <strong className="text-orange-400">Vaishno Devi Bhawan</strong> to <strong className="text-orange-400">Katra Railway Station</strong>, <strong className="text-orange-400">Sanjichhat Helipad</strong> to <strong className="text-orange-400">Katra Bazaar</strong> — SniperCoders makes sure they find YOUR business first.
//               </p>
              
//               {/* Contact cards */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <a href={`tel:${phoneNumber}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-orange-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Phone className="w-6 h-6 text-orange-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Call us now</div>
//                     <div className="text-white font-semibold">+91 7006377796</div>
//                   </div>
//                 </a>
//                 <a href={`mailto:${email}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-red-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Mail className="w-6 h-6 text-red-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Email us</div>
//                     <div className="text-white font-semibold">snipercoders25@gmail.com</div>
//                   </div>
//                 </a>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
//                   Book Free Consultation <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
//                   View Pilgrimage Portfolio
//                 </Link>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" /> Serving Katra, Vaishno Devi Bhawan, Sanjichhat & Entire Yatra Route</span>
//                 <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-red-400" /> GST Registered • Pilgrimage Experts</span>
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












// FILE PATH: app/services/best-software-agency-katra/page.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code, Smartphone, Globe, TrendingUp, Award, Users,
  MapPin, Phone, Mail, ChevronRight, Star, CheckCircle,
  Utensils, Coffee, Car, Hotel, ShoppingBag,
  HeartPulse, Plane, Train, Bus, Footprints, Church, Tent,
  Map, Compass, Heart, Sun, Cloud, Leaf, Mountain,
  Building2, Wifi, Camera, Landmark, Briefcase, Home,
  Shield, Crown, ShoppingCart             // ← restored missing icons
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
    title: "Website Development Katra", 
    desc: "Professional website design company in Katra. Pilgrimage booking portals, hotel websites, yatra operator platforms & local business sites built for Katra&apos;s thriving tourism economy.", 
    gradient: "from-orange-500 to-red-600",
    keywords: "website design Katra, web development Katra, Vaishno Devi website, pilgrimage website design"
  },
  { 
    icon: <Smartphone className="w-7 h-7" />, 
    title: "Mobile App Development Katra", 
    desc: "Top app development agency in Katra. Vaishno Devi yatra booking apps, helicopter ticket apps, hotel booking apps & pilgrimage guide apps for Katra&apos;s mobile-first pilgrims.", 
    gradient: "from-amber-500 to-yellow-600",
    keywords: "app development Katra, mobile app developers Katra, Vaishno Devi app, yatra booking app"
  },
  { 
    icon: <Code className="w-7 h-7" />, 
    title: "Custom Software Katra", 
    desc: "Custom software solutions in Katra. Pilgrim management systems, hotel reservation software, travel agency platforms & inventory systems for Katra businesses.", 
    gradient: "from-red-500 to-rose-600",
    keywords: "custom software Katra, hotel management software Katra, pilgrimage management system"
  },
  { 
    icon: <TrendingUp className="w-7 h-7" />, 
    title: "Digital Marketing Katra", 
    desc: "Rank on Google for &apos;Vaishno Devi booking&apos;, &apos;hotels in Katra&apos;, &apos;helicopter booking Katra&apos; & more with our pilgrimage-focused SEO & Google Ads. Best SEO company in Katra.", 
    gradient: "from-blue-500 to-indigo-600",
    keywords: "digital marketing Katra, SEO services Katra, Vaishno Devi SEO, pilgrimage marketing"
  },
  { 
    icon: <Users className="w-7 h-7" />, 
    title: "IT Consulting Katra", 
    desc: "Expert IT consultants in Katra. Technology planning for hotels, travel agencies, yatra operators & pilgrimage businesses looking to digitize their operations.", 
    gradient: "from-purple-500 to-violet-600",
    keywords: "IT consulting Katra, technology consultants Katra, digital transformation Katra"
  },
  { 
    icon: <Award className="w-7 h-7" />, 
    title: "Branding & Design Katra", 
    desc: "Premium branding agency in Katra. Logo design, hotel branding, pilgrimage brochures, social media creatives & complete brand identity for Katra businesses.", 
    gradient: "from-pink-500 to-rose-600",
    keywords: "branding agency Katra, graphic design Katra, logo design Katra, hotel branding"
  },
];

const BUSINESS_CATEGORIES = [
  { icon: <Church className="w-5 h-5" />, label: "Vaishno Devi Yatra", keyword: "Vaishno Devi website, Mata Vaishno Devi booking", color: "text-orange-400" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Katra", keyword: "hotel website Katra, hotels near Vaishno Devi", color: "text-blue-400" },
  { icon: <Tent className="w-5 h-5" />, label: "Bhawan Accommodation", keyword: "Vaishno Devi bhawan booking", color: "text-green-400" },
  { icon: <Car className="w-5 h-5" />, label: "Taxi Services Katra", keyword: "taxi service Katra, cab to Vaishno Devi", color: "text-cyan-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Helicopter Booking", keyword: "Vaishno Devi helicopter booking, Katra helicopter service", color: "text-sky-400" },
  { icon: <Train className="w-5 h-5" />, label: "Railway Station", keyword: "Katra railway station, Shri Mata Vaishno Devi Katra station", color: "text-indigo-400" },
  { icon: <Bus className="w-5 h-5" />, label: "Bus Operators", keyword: "bus to Katra, Vaishno Devi bus service", color: "text-yellow-400" },
  { icon: <Utensils className="w-5 h-5" />, label: "Restaurants Katra", keyword: "restaurant website Katra, vegetarian restaurants Katra", color: "text-orange-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Cafés & Snacks", keyword: "cafe Katra, snacks near Vaishno Devi", color: "text-amber-400" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Religious Stores", keyword: "religious store Katra, puja items Katra", color: "text-pink-400" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "Prasad & Offerings", keyword: "prasad online, Vaishno Devi prasad", color: "text-emerald-400" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Travel Agencies", keyword: "travel agency Katra, yatra package website", color: "text-indigo-400" },
  { icon: <Footprints className="w-5 h-5" />, label: "Pony & Palki Services", keyword: "pony service Vaishno Devi, palki booking Katra", color: "text-amber-300" },
  { icon: <Map className="w-5 h-5" />, label: "Tour Guides", keyword: "Vaishno Devi guide, yatra guide Katra", color: "text-green-300" },
  { icon: <Compass className="w-5 h-5" />, label: "Trekking Operators", keyword: "trekking Katra, Vaishno Devi trek", color: "text-lime-400" },
  { icon: <Heart className="w-5 h-5" />, label: "Medical Facilities", keyword: "hospital Katra, health center Vaishno Devi", color: "text-red-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Clinics & Pharmacy", keyword: "pharmacy Katra, medical store Vaishno Devi", color: "text-rose-400" },
  { icon: <Home className="w-5 h-5" />, label: "Guest Houses", keyword: "guest house Katra, budget stay Vaishno Devi", color: "text-teal-400" },
  { icon: <Building2 className="w-5 h-5" />, label: "Lodges & Dharamshalas", keyword: "dharamshala Katra, lodge near Vaishno Devi", color: "text-purple-300" },
  { icon: <Camera className="w-5 h-5" />, label: "Photography Services", keyword: "pilgrimage photography Katra", color: "text-violet-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "ATM & Money Exchange", keyword: "money exchange Katra, ATM near Vaishno Devi", color: "text-blue-300" },
  { icon: <Wifi className="w-5 h-5" />, label: "Internet Cafés", keyword: "internet cafe Katra, WiFi near Vaishno Devi", color: "text-cyan-300" },
  { icon: <Sun className="w-5 h-5" />, label: "Weather Services", keyword: "Katra weather, Vaishno Devi weather forecast", color: "text-yellow-300" },
  { icon: <Cloud className="w-5 h-5" />, label: "Seasonal Updates", keyword: "Katra season, best time to visit Vaishno Devi", color: "text-gray-300" },
  { icon: <Leaf className="w-5 h-5" />, label: "Eco Tourism", keyword: "eco tourism Katra, nature trails near Vaishno Devi", color: "text-emerald-300" },
  { icon: <Mountain className="w-5 h-5" />, label: "Trekking Routes", keyword: "Vaishno Devi trek route, Trikuta Mountain trek", color: "text-stone-400" },
];

const STATS = [
  { value: "30+", label: "Katra Projects Delivered", keyword: "Katra software projects, Vaishno Devi website projects" },
  { value: "8M+", label: "Pilgrims Served Annually", keyword: "Vaishno Devi pilgrims, Katra tourism" },
  { value: "24/7", label: "Support Available", keyword: "IT support Katra, pilgrimage website support" },
  { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Katra reviews" },
];

const TRUST_SIGNALS = [
  { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
  { icon: <MapPin className="w-5 h-5" />, text: "Serving Katra & Jammu Region" },
  { icon: <Heart className="w-5 h-5" />, text: "Hindi/Urdu/English/Dogri Support" },
  { icon: <Mountain className="w-5 h-5" />, text: "Pilgrimage Booking Experts" },
];

const LOCATIONS = [
  "Katra City", "Vaishno Devi Bhawan", "Sanjichhat", "Himkoti", "Adhkumari",
  "Charan Paduka", "Ardhkuwari", "Bhairavnath Temple", "Banganga", "Helipad Area",
  "Railway Station Katra", "Bus Stand Katra", "Katra Bazaar", "Hotel District",
  "Jammu Highway", "Domel", "Reasi Road", "Panchhi", "Shalimar", "Dera Baba Banda"
];

const FAQS = [
  { 
    q: "Which is the best software agency in Katra?", 
    a: "SniperCoders is the most trusted software agency serving Katra and the Vaishno Devi pilgrimage region. With 30+ successful projects, 5-star Google reviews, and deep expertise in pilgrimage tourism websites, we&apos;re the preferred choice for hotels, yatra operators, and businesses across Katra. Our understanding of the pilgrimage season, booking patterns, and pilgrim needs sets us apart." 
  },
  { 
    q: "Can SniperCoders build a website for my Vaishno Devi yatra business?", 
    a: "Absolutely! We specialize in pilgrimage tourism websites. Whether you run a hotel in Katra, a taxi service, a helicopter booking agency, or a complete yatra package operator, we build websites that help pilgrims find you. Our sites include online booking systems, payment gateways, yatra package displays, and SEO optimized for keywords like &apos;Vaishno Devi helicopter booking&apos; and &apos;hotels near Vaishno Devi&apos;." 
  },
  { 
    q: "Do you understand the Katra pilgrimage market?", 
    a: "Yes, deeply. Katra receives over 8 million pilgrims annually heading to Vaishno Devi. We understand the pilgrimage cycle — Navratras, weekends, summer rush, winter challenges. We know that pilgrims search for &apos;Katra hotels&apos;, &apos;Vaishno Devi yatra package&apos;, &apos;helicopter booking&apos;, &apos;pony service&apos;, and &apos;palki booking&apos;. Our digital strategies are built around these search intents." 
  },
  { 
    q: "Can you help with online booking for hotels and yatra packages?", 
    a: "Yes! We integrate powerful booking systems into hotel websites and yatra operator sites. Pilgrims can check availability, compare rooms/packages, make payments online (UPI, cards, netbanking), and receive instant confirmation. This reduces your phone calls and administrative work while increasing bookings from tech-savvy pilgrims." 
  },
  { 
    q: "Do you support Hindi and Urdu languages?", 
    a: "Yes! We support Hindi, Urdu, English, and Dogri — crucial for reaching Katra&apos;s diverse pilgrim audience. Many pilgrims prefer searching in Hindi. We create multilingual content that helps you rank for both English and Hindi keywords like &apos;वैष्णो देवी हेलिकॉप्टर बुकिंग&apos; and &apos;कटरा होटल&apos;." 
  },
  { 
    q: "Can you build helicopter booking websites for Vaishno Devi?", 
    a: "Absolutely. We specialize in helicopter booking platforms integrated with the official Vaishno Devi helicopter service schedule. Our systems show real-time availability, allow online booking, send confirmation SMS/emails, and manage waitlists — perfect for helicopter operators and travel agencies." 
  },
  { 
    q: "How much does a website cost in Katra?", 
    a: "Our Katra packages start at ₹15,000 for a basic business website, ₹25,000-₹45,000 for hotel booking websites, and ₹50,000+ for custom yatra booking platforms. All packages include hosting, SSL, payment gateway integration, and 3 months free maintenance. We offer transparent pricing with no hidden charges." 
  },
  { 
    q: "What&apos;s the best time to launch a website for my Katra business?", 
    a: "The best time is now! Pilgrims search year-round, but especially before Navratras (March-April and September-October) and summer vacations. A website takes 2-4 weeks to build and another 2-3 months to rank well on Google. Starting now ensures you&apos;re visible for the next pilgrim season." 
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function KatraPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0f0700] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249,115,22,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(239,68,68,0.14) 0%, transparent 60%), #0f0700"
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-orange-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-red-600/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> #1 Software Agency in Katra • Serving 8M+ Pilgrims Annually
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Agency<br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-rose-500 bg-clip-text text-transparent">
              in Katra, J&K
            </span>
          </motion.h1>

          <motion.p
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders helps Katra&apos;s pilgrimage businesses reach <strong className="text-orange-400">8 million+ Vaishno Devi pilgrims</strong> annually — with powerful <strong className="text-orange-400">hotel booking websites, yatra portals, helicopter booking apps & local SEO</strong>. Serving <strong className="text-orange-400">Katra, Vaishno Devi Bhawan, Sanjichhat & entire pilgrimage route</strong>. <span className="text-orange-400">30+ projects • 5★ rated • Pilgrimage experts</span>
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-orange-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm active:scale-95"
            >
              <Phone className="w-5 h-5" /> Call: +91 7006377796
            </a>
          </motion.div>

          <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} 
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
          >
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">{s.value}</div>
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
            className="bg-gradient-to-br from-gray-900/80 to-orange-950/30 border border-orange-900/40 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Katra — The Gateway to Mata Vaishno Devi&apos;s Blessings
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Katra</strong> is not just a town — it&apos;s the sacred base camp for over <strong className="text-orange-400">8 million pilgrims</strong> who embark on the <strong className="text-orange-400">Vaishno Devi Yatra</strong> every year. Located in the <strong className="text-orange-400">Reasi district of Jammu & Kashmir</strong>, this bustling pilgrimage hub comes alive 365 days a year with devotees from across India and abroad seeking Mata Rani&apos;s blessings.
              </p>
              <p>
                From the moment pilgrims arrive at <strong className="text-white">Katra Railway Station</strong> (Shri Mata Vaishno Devi Katra station) to their stay in <strong className="text-white">hotels near the bus stand</strong>, from <strong className="text-white">helicopter bookings at Sanjichhat</strong> to the final <strong className="text-white">darshan at Bhawan</strong> — every step of the journey involves online searches. Yet most Katra businesses — hotels, taxi operators, restaurants, travel agencies — have minimal digital presence.
              </p>
              <p>
                <strong className="text-white">SniperCoders</strong>, the <strong className="text-orange-400">best software agency in Katra</strong>, helps you capture this massive pilgrim traffic. We build <strong className="text-white">hotel booking websites</strong> that rank for &apos;hotels in Katra near railway station&apos;, <strong className="text-white">helicopter booking portals</strong> for &apos;Vaishno Devi helicopter ticket&apos;, <strong className="text-white">yatra package sites</strong> for &apos;Katra to Vaishno Devi tour&apos;, and <strong className="text-white">local business websites</strong> for restaurants, taxi services, and religious stores.
              </p>
              <p>
                Whether you&apos;re a <strong className="text-white">hotel owner near the bus stand</strong>, a <strong className="text-white">helicopter booking agent</strong>, a <strong className="text-white">travel agency</strong>, a <strong className="text-white">restaurant in Katra Bazaar</strong>, or a <strong className="text-white">pony/palki service provider</strong> — we have the pilgrimage-specific expertise to put your business in front of millions of devotees. <strong className="text-orange-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Katra</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pilgrimage-focused digital solutions built for Katra&apos;s unique yatra economy. <strong className="text-orange-400">Hotel websites, booking portals, SEO, and more.</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-orange-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
                <p className="text-xs text-orange-400/70 italic">{svc.keywords}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Katra</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From <strong className="text-orange-400">Vaishno Devi Bhawan hotels</strong> to <strong className="text-orange-400">helicopter booking agents</strong>, <strong className="text-orange-400">Katra Bazaar restaurants</strong> to <strong className="text-orange-400">pony service providers</strong> — every pilgrimage business deserves to be found online.
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
            <p className="text-sm text-gray-500 mb-4">Serving all Katra & Vaishno Devi pilgrimage locations:</p>
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
              Why Katra Businesses Choose{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SniperCoders</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s what makes us the <strong className="text-orange-400">preferred digital partner for Katra&apos;s pilgrimage businesses</strong>:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Pilgrimage-focused SEO targeting &apos;Vaishno Devi booking&apos;, &apos;hotels in Katra&apos;, &apos;helicopter booking&apos;",
              "Hotel booking websites with real-time availability & online payment integration",
              "Vaishno Devi helicopter booking portals with schedule & pricing display",
              "Yatra package websites with itinerary planning & group booking systems",
              "Hindi, Urdu, English & Dogri multilingual content for maximum pilgrim reach",
              "Google Business Profile optimization for Katra hotels & restaurants",
              "Railway station & bus stand proximity targeting for local businesses",
              "Pony & palki service booking systems with rate cards & availability",
              "Restaurant websites with menu display, reviews & online ordering",
              "Pilgrimage photography & videography portfolio sites",
              "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
              "24/7 support during peak yatra seasons (Navratras, weekends, holidays)"
            ].map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-orange-800/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Start Your Project in Katra <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL with social proof ───────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-orange-900/20 via-red-900/10 to-orange-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
            &ldquo;We run <strong className="text-orange-400">Jai Mata Di Tour and Travel</strong> on <strong className="text-orange-400">Ban Ganga Road in Katra</strong>, serving Vaishno Devi pilgrims with yatra packages, taxi services, and hotel bookings. SniperCoders built our complete website at <strong className="text-orange-400">jaimataditourandtravel.com</strong> with online booking and optimized it for &apos;Katra to Vaishno Devi taxi&apos;, &apos;yatra package Katra&apos;, and &apos;hotels near Ban Ganga Road&apos;. Now we get <strong className="text-orange-400">40% of our bookings online</strong>, mostly from pilgrims who find us on Google before they even reach Katra. Best decision for our pilgrimage business!&rdquo;
          </blockquote>
          <p className="text-gray-500 mt-4 text-sm">— Owner, Jai Mata Di Tour and Travel, Ban Ganga Road, Katra</p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-gray-600">
            <span>⭐ 5/5 on Google</span>
            <span>✅ Verified Client</span>
            <span>📍 Ban Ganga Road, Katra</span>
            <span>💰 40% Online Bookings</span>
            <span>🌐 <a href="https://www.jaimataditourandtravel.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">jaimataditourandtravel.com</a></span>
          </div>
        </div>
      </section>

      {/* ── PILGRIMAGE STATS SECTION ───────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
              The <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Vaishno Devi</span> Pilgrimage Opportunity
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-black text-orange-400 mb-2">8M+</div>
              <p className="text-gray-300 text-sm">Annual pilgrims to Vaishno Devi</p>
            </motion.div>
            <motion.div custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-black text-orange-400 mb-2">85%</div>
              <p className="text-gray-300 text-sm">Pilgrims search online before booking</p>
            </motion.div>
            <motion.div custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-black text-orange-400 mb-2">365</div>
              <p className="text-gray-300 text-sm">Days of pilgrimage traffic (year-round)</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ with long-tail keywords ─────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions —{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Katra</span>
            </h2>
            <p className="text-gray-400">Answers to common questions about <strong className="text-orange-400">website design, booking systems, and digital marketing for Vaishno Devi pilgrimage businesses.</strong></p>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} 
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

      {/* ── CTA with contact info ───────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="relative bg-gradient-to-br from-orange-900/50 to-red-900/40 border border-orange-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Ready to Welcome More Pilgrims?<br />
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Let&apos;s Build Your Digital Presence</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                <strong className="text-white">8 million+ pilgrims</strong> search for hotels, helicopter bookings, yatra packages & services in Katra every year. From <strong className="text-orange-400">Vaishno Devi Bhawan</strong> to <strong className="text-orange-400">Katra Railway Station</strong>, <strong className="text-orange-400">Sanjichhat Helipad</strong> to <strong className="text-orange-400">Katra Bazaar</strong> — SniperCoders makes sure they find YOUR business first.
              </p>
              
              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-orange-500 rounded-xl px-6 py-4 transition-all duration-300 active:scale-95"
                >
                  <Phone className="w-6 h-6 text-orange-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Call us now</div>
                    <div className="text-white font-semibold">+91 7006377796</div>
                  </div>
                </a>
                <a href={`mailto:${email}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-red-500 rounded-xl px-6 py-4 transition-all duration-300 active:scale-95"
                >
                  <Mail className="w-6 h-6 text-red-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Email us</div>
                    <div className="text-white font-semibold">snipercoders25@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase" 
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 active:scale-95"
                >
                  View Pilgrimage Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" /> Serving Katra, Vaishno Devi Bhawan, Sanjichhat & Entire Yatra Route</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-red-400" /> GST Registered • Pilgrimage Experts</span>
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