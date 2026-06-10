
// // FILE PATH: app/services/best-software-agency-kashmir/page.tsx

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
//   Sailboat, Mountain, Snowflake, Cherry, Flower2,
//   Tent, Ship, Waves, CableCar
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
//     title: "Website Development Kashmir", 
//     desc: "Professional website design company in Kashmir. Houseboat booking portals, shikara tour sites, handicraft eCommerce stores & hotel websites built for Kashmir's global tourism audience.", 
//     gradient: "from-sky-500 to-blue-600",
//     keywords: "website design Kashmir, web development Srinagar, ecommerce website Kashmir"
//   },
//   { 
//     icon: <Smartphone className="w-7 h-7" />, 
//     title: "Mobile App Development Kashmir", 
//     desc: "Top app development agency in Kashmir. Tourism apps, Amarnath yatra booking apps, local delivery platforms & business management apps for Kashmir's mobile-first market.", 
//     gradient: "from-violet-500 to-purple-700",
//     keywords: "app development Kashmir, mobile app developers Srinagar, Amarnath yatra app"
//   },
//   { 
//     icon: <Code className="w-7 h-7" />, 
//     title: "Custom Software Development Kashmir", 
//     desc: "Enterprise software solutions in Kashmir. Hotel management systems, handicraft inventory platforms, apple orchard management software & school ERP for Kashmir businesses.", 
//     gradient: "from-indigo-500 to-blue-700",
//     keywords: "software development Kashmir, custom software Srinagar, ERP development Kashmir"
//   },
//   { 
//     icon: <TrendingUp className="w-7 h-7" />, 
//     title: "Digital Marketing Agency Kashmir", 
//     desc: "Rank globally for 'Kashmir houseboat booking', 'best hotel in Srinagar', 'Gulmarg skiing packages' & more to attract international tourists to your business. Best SEO company in Kashmir.", 
//     gradient: "from-rose-500 to-pink-600",
//     keywords: "digital marketing Kashmir, SEO services Srinagar, tourism marketing Kashmir"
//   },
//   { 
//     icon: <Users className="w-7 h-7" />, 
//     title: "IT Consulting Kashmir", 
//     desc: "Expert IT consultants in Kashmir. Digital transformation advisory for Kashmir's growing hospitality sector, startups and government-backed businesses.", 
//     gradient: "from-emerald-500 to-teal-600",
//     keywords: "IT consulting Kashmir, technology consultants Srinagar, digital transformation Kashmir"
//   },
//   { 
//     icon: <Award className="w-7 h-7" />, 
//     title: "Branding & Design Kashmir", 
//     desc: "Premium branding agency in Kashmir. Beautiful brand identities that reflect Kashmir's heritage — ideal for handicraft sellers, hotels and tourism operators.", 
//     gradient: "from-fuchsia-500 to-pink-600",
//     keywords: "branding agency Kashmir, graphic design Srinagar, logo design Kashmir"
//   },
// ];

// const BUSINESS_CATEGORIES = [
//   { icon: <Sailboat className="w-5 h-5" />, label: "Houseboats on Dal Lake", keyword: "houseboat website Kashmir", color: "text-sky-400" },
//   { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Srinagar", keyword: "hotel website Kashmir", color: "text-blue-400" },
//   { icon: <Plane className="w-5 h-5" />, label: "Tour Operators Gulmarg", keyword: "tour operator website Kashmir", color: "text-indigo-400" },
//   { icon: <Car className="w-5 h-5" />, label: "Cab Services Srinagar", keyword: "transport website Kashmir", color: "text-cyan-400" },
//   { icon: <ShoppingCart className="w-5 h-5" />, label: "Handicrafts in Srinagar", keyword: "handicraft ecommerce Kashmir", color: "text-pink-400" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Pashmina Shawls", keyword: "pashmina website Kashmir", color: "text-rose-400" },
//   { icon: <Cherry className="w-5 h-5" />, label: "Apple Orchards", keyword: "apple farm website Kashmir", color: "text-red-400" },
//   { icon: <Flower2 className="w-5 h-5" />, label: "Saffron Farms Pampore", keyword: "saffron ecommerce Kashmir", color: "text-purple-400" },
//   { icon: <Utensils className="w-5 h-5" />, label: "Wazwan Restaurants", keyword: "restaurant website Kashmir", color: "text-orange-400" },
//   { icon: <Coffee className="w-5 h-5" />, label: "Kahwa Cafés", keyword: "cafe website Kashmir", color: "text-amber-400" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Srinagar", keyword: "school website Kashmir", color: "text-green-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals Kashmir", keyword: "hospital website Kashmir", color: "text-red-400" },
//   { icon: <Mountain className="w-5 h-5" />, label: "Gulmarg Ski Resorts", keyword: "ski resort website Kashmir", color: "text-cyan-400" },
//   { icon: <Tent className="w-5 h-5" />, label: "Pahalgam Camps", keyword: "camping website Kashmir", color: "text-lime-400" },
//   { icon: <Ship className="w-5 h-5" />, label: "Shikara Rides", keyword: "shikara tour website Kashmir", color: "text-sky-400" },
//   { icon: <Camera className="w-5 h-5" />, label: "Film & Photography", keyword: "film website Kashmir", color: "text-violet-400" },
//   { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", keyword: "wedding website Kashmir", color: "text-rose-300" },
//   { icon: <Landmark className="w-5 h-5" />, label: "Banks in Kashmir", keyword: "banking website Kashmir", color: "text-blue-300" },
//   { icon: <Factory className="w-5 h-5" />, label: "Dry Fruit Traders", keyword: "dry fruit ecommerce Kashmir", color: "text-amber-300" },
//   { icon: <Building2 className="w-5 h-5" />, label: "Government Agencies", keyword: "government website Kashmir", color: "text-purple-300" },
//   { icon: <Dumbbell className="w-5 h-5" />, label: "Adventure Sports", keyword: "adventure website Kashmir", color: "text-lime-300" },
//   { icon: <Wifi className="w-5 h-5" />, label: "Tech Startups Kashmir", keyword: "startup website Kashmir", color: "text-cyan-300" },
//   { icon: <Briefcase className="w-5 h-5" />, label: "Exporters Kashmir", keyword: "import export website Kashmir", color: "text-indigo-400" },
//   { icon: <Waves className="w-5 h-5" />, label: "Dal Lake Experiences", keyword: "lake tourism website Kashmir", color: "text-sky-300" },
//   { icon: <Snowflake className="w-5 h-5" />, label: "Gulmarg Skiing", keyword: "skiing website Kashmir", color: "text-blue-200" },
//   { icon: <CableCar className="w-5 h-5" />, label: "Gulmarg Gondola", keyword: "gondola website Kashmir", color: "text-indigo-300" },
// ];

// const STATS = [
//   { value: "30+", label: "Kashmir Projects Delivered", keyword: "Kashmir software projects" },
//   { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Kashmir" },
//   { value: "24/7", label: "Local Support Available", keyword: "IT support Kashmir" },
//   { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Kashmir reviews" },
// ];

// const TRUST_SIGNALS = [
//   { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
//   { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
//   { icon: <MapPin className="w-5 h-5" />, text: "Kashmir Presence" },
//   { icon: <Gem className="w-5 h-5" />, text: "Urdu/Hindi/English Support" },
// ];

// const LOCATIONS = [
//   "Srinagar", "Dal Lake", "Nishat Bagh", "Shalimar Bagh", "Chashme Shahi",
//   "Gulmarg", "Tangmarg", "Pahalgam", "Betaab Valley", "Aru Valley",
//   "Sonamarg", "Zojila Pass", "Yusmarg", "Doodhpathri", "Kokernag",
//   "Verinag", "Achabal", "Pulwama", "Pampore", "Anantnag",
//   "Kulgam", "Shopian", "Bandipora", "Baramulla", "Kupwara",
//   "Gurez Valley", "Tulail Valley", "Kargil", "Leh-Ladakh", "Katra (Vaishno Devi)"
// ];

// const FAQS = [
//   { 
//     q: "Which is the best software agency in Kashmir?", 
//     a: "SniperCoders is consistently rated among the top software agencies in Kashmir. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Srinagar, Gulmarg, Pahalgam, and the entire Kashmir Valley." 
//   },
//   { 
//     q: "Can SniperCoders help my Kashmir houseboat business rank internationally?", 
//     a: "Yes! We build SEO strategies targeting global tourists searching for Kashmir houseboats, Dal Lake experiences, and Srinagar hotels. We target keywords like 'houseboat in Dal Lake Srinagar', 'best luxury houseboat Kashmir', and 'Dal Lake accommodation' that international travellers search for. Your website can rank in Google searches from India, Europe, UK, US, and beyond — bringing you direct bookings without paying commissions to aggregators." 
//   },
//   { 
//     q: "Do you help Kashmiri handicraft sellers sell online?", 
//     a: "Absolutely. We build eCommerce stores for carpet weavers, Pashmina shawl sellers, papier-mâché artisans, wood carving workshops, and other handicraft businesses. We integrate international shipping solutions, multi-currency pricing, and multilingual product pages (English, Hindi, Urdu) so you can sell to buyers worldwide. We also optimize your store for Google Shopping and Pinterest — where handicrafts perform exceptionally well." 
//   },
//   { 
//     q: "What digital marketing works best for tourism businesses in Kashmir?", 
//     a: "A combination of strategies works best: 1) Google SEO targeting long-tail tourism keywords like 'Gulmarg skiing packages', 'Pahalgam family tour', 'Sonamarg camping', 2) Instagram/Meta Ads with stunning visuals targeting travellers from India and abroad, 3) Google Business Profile optimization for local searches, 4) Travel blogger and influencer collaborations, and 5) YouTube content showcasing your property or services. We handle all of this for you." 
//   },
//   { 
//     q: "Is there support in Urdu or Kashmiri language?", 
//     a: "We support Urdu and Hindi content extensively. For Kashmiri-language content, we work with local translators to ensure your messaging resonates deeply with the local audience. This is particularly effective for targeting the local Kashmir market and for creating emotional connections with customers who prefer communicating in their mother tongue." 
//   },
//   { 
//     q: "Can you help with Amarnath Yatra and pilgrimage tourism?", 
//     a: "Yes! We specialize in pilgrimage tourism digital marketing. We build booking platforms for Amarnath Yatra packages, helicopter bookings, Pahalgam base camp accommodations, and complete yatra itinerary planning tools. We also optimize for keywords like 'Amarnath Yatra registration', 'Baltal helicopter booking', and 'Amarnath tour packages from Srinagar'." 
//   },
// ];

// // Contact information
// const phoneNumber = "+917006377796";
// const email = "snipercoders25@gmail.com";

// export default function KashmirPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-[#05070d] text-white font-sans overflow-x-hidden">

//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section
//         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
//         style={{
//           background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(14,165,233,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.14) 0%, transparent 60%), #05070d"
//         }}
//       >
//         <div className="absolute inset-0 opacity-[0.04]"
//           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
//         <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-sky-600/15 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-indigo-600/15 blur-[80px] pointer-events-none" />

//         <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
//           >
//             <Crown className="w-4 h-4" /> #1 Software Agency in Kashmir • 30+ Projects Delivered
//           </motion.div>

//           <motion.h1
//             initial="hidden" animate="show" variants={fadeUp}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Best Software Agency<br />
//             <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
//               in Kashmir Valley
//             </span>
//           </motion.h1>

//           <motion.p 
//             custom={1} initial="hidden" animate="show" variants={fadeUp}
//             className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
//           >
//             SniperCoders brings cutting-edge digital solutions to Kashmir — helping <strong className="text-sky-400">houseboats on Dal Lake, Pashmina artisans, Wazwan restaurants, Gulmarg ski resorts & Amarnath yatra operators</strong> reach the world through powerful websites, apps & SEO. <span className="text-sky-400">30+ projects • 5★ rated</span>
//           </motion.p>

//           {/* Trust signals */}
//           <motion.div
//             custom={1.5} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {TRUST_SIGNALS.map((signal, i) => (
//               <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
//                 <span className="text-sky-400">{signal.icon}</span>
//                 {signal.text}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div 
//             custom={2} initial="hidden" animate="show" variants={fadeUp} 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Link href="/contact"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Consultation <ChevronRight className="w-5 h-5" />
//             </Link>
//             <a href={`tel:${phoneNumber}`}
//               className="inline-flex items-center gap-2 border border-gray-600 hover:border-sky-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
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
//                 <div className="text-3xl font-black bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">{s.value}</div>
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
//             className="bg-gradient-to-br from-gray-900/80 to-sky-950/25 border border-sky-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Kashmir's Untapped Digital Goldmine
//             </h2>
//             <div className="space-y-4 text-gray-300 leading-relaxed">
//               <p>
//                 <strong className="text-white">Kashmir</strong> — the "Paradise on Earth" — draws over <strong className="text-sky-400">2.1 crore tourists annually</strong>. <strong className="text-cyan-400">Srinagar's Dal Lake</strong>, <strong className="text-cyan-400">Gulmarg's ski slopes</strong>, <strong className="text-cyan-400">Pahalgam's meadows</strong> and <strong className="text-cyan-400">Sonamarg's glaciers</strong> are world-famous destinations that travellers search for on Google every single day. From <strong className="text-cyan-400">houseboats with Mughal gardens views</strong> to <strong className="text-cyan-400">Pashmina shawls woven by master artisans</strong>, from <strong className="text-cyan-400">saffron fields of Pampore</strong> to <strong className="text-cyan-400">Wazwan feasts in traditional restaurants</strong> — Kashmir's offerings are globally sought-after.
//               </p>
//               <p>
//                 Yet shockingly, the majority of Kashmir's tourism, hospitality, handicraft and trade businesses have no meaningful digital presence. This is a massive opportunity. <strong className="text-white">SniperCoders</strong>, the <strong className="text-sky-400">best software agency in Kashmir</strong>, is here to help local businesses claim their rightful place in global search results — attracting domestic and international tourists directly, without depending on aggregators who charge high commissions.
//               </p>
//               <p>
//                 From <strong className="text-white">houseboat booking platforms</strong> to <strong className="text-white">Pashmina eCommerce with international shipping</strong>, from <strong className="text-white">Wazwan restaurant SEO</strong> to <strong className="text-white">Amarnath yatra operator apps</strong>, from <strong className="text-white">apple orchard management systems</strong> to <strong className="text-white">Gulmarg ski resort websites</strong> — we have the expertise to put Kashmir businesses on the global digital map. <strong className="text-sky-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
//               <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Kashmir</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Digital solutions crafted for Kashmir's globally admired tourism, culture and trade ecosystem. <strong className="text-sky-400">Web development, mobile apps, SEO, and more.</strong>
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((svc, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="group relative bg-gray-900/60 border border-gray-800 hover:border-sky-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(14,165,233,0.08), transparent)" }} />
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
//                 <h3 className="text-xl font-bold mb-3 text-white group-hover:text-sky-300 transition-colors">{svc.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
//                 <p className="text-xs text-sky-400/70 italic">{svc.keywords}</p>
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
//       <section className="py-20 bg-gradient-to-b from-transparent via-sky-950/10 to-transparent">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Industries We Serve in{" "}
//               <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Kashmir</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Every industry in Kashmir — from <strong className="text-sky-400">Dal Lake houseboats</strong> to <strong className="text-sky-400">Pampore saffron farms</strong> and <strong className="text-sky-400">Gulmarg ski resorts</strong> — can grow exponentially with the right digital strategy.
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
//             <p className="text-sm text-gray-500 mb-4">Serving all Kashmir Valley locations:</p>
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
//               Why Kashmir Businesses Choose{" "}
//               <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">SniperCoders</span>
//             </h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//               Here's what makes us the <strong className="text-sky-400">preferred digital partner for Kashmir's most successful businesses</strong>:
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               "Global SEO targeting international tourists searching for Kashmir destinations",
//               "Houseboat & hotel booking system integrations with real-time availability",
//               "Handicraft eCommerce with international shipping, multi-currency & multilingual support",
//               "Urdu, Hindi & English multilingual content capabilities for wider reach",
//               "High-quality photography & drone-shot video support for stunning visual content",
//               "Google Business Profile & Maps dominance for Srinagar, Gulmarg & Pahalgam",
//               "Apple & saffron farm product digitization & B2B export portals",
//               "Amarnath Yatra booking platforms with helicopter & accommodation integration",
//               "Gulmarg ski tourism & adventure sports digital marketing",
//               "Wazwan restaurant local SEO & food photography",
//               "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
//               "Post-launch support & maintenance with 24/7 availability for critical issues"
//             ].map((item, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-sky-800/50 transition-all duration-300"
//               >
//                 <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-300 text-sm">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
//               Start Your Project in Kashmir <ChevronRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL with social proof ───────────────────────── */}
//       <section className="py-12 bg-gradient-to-r from-sky-900/20 via-indigo-900/10 to-sky-900/20 border-y border-gray-800/50">
//         <div className="container mx-auto px-4 text-center">
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
//           </div>
//           <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
//             "We sell Kashmiri carpets and Pashmina shawls from our shop in <strong className="text-sky-400">Srinagar</strong>. SniperCoders built our eCommerce store and now international buyers from Europe, US and UAE find us on Google. We've shipped to 12 countries in just 6 months. It <strong className="text-sky-400">changed our business completely</strong> — we're no longer dependent only on tourists who visit Kashmir."
//           </blockquote>
//           <p className="text-gray-500 mt-4 text-sm">— Handicraft Business Owner, Lal Chowk, Srinagar, Kashmir</p>
//           <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
//             <span>⭐ 5/5 on Google</span>
//             <span>✅ Verified Client</span>
//             <span>📍 Srinagar, Kashmir</span>
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ with long-tail keywords ────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Frequently Asked Questions —{" "}
//               <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Kashmir</span>
//             </h2>
//             <p className="text-gray-400">Answers to common questions about <strong className="text-sky-400">software development, website design, and digital marketing in Kashmir.</strong></p>
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
//             className="relative bg-gradient-to-br from-sky-900/40 to-indigo-900/30 border border-sky-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 Let the World Find<br />
//                 <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Your Kashmir Business</span>
//               </h2>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 <strong className="text-white">2.1 crore+ tourists</strong> dream about Kashmir every year. From <strong className="text-sky-400">Dal Lake houseboats</strong> to <strong className="text-sky-400">Gulmarg ski slopes</strong>, <strong className="text-sky-400">Pahalgam meadows</strong> to <strong className="text-sky-400">Pampore saffron fields</strong> — SniperCoders makes sure they find YOUR business, not your competitor's.
//               </p>
              
//               {/* Contact cards */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <a href={`tel:${phoneNumber}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-sky-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Phone className="w-6 h-6 text-sky-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Call us now</div>
//                     <div className="text-white font-semibold">+91 7006377796</div>
//                   </div>
//                 </a>
//                 <a href={`mailto:${email}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-indigo-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Mail className="w-6 h-6 text-indigo-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Email us</div>
//                     <div className="text-white font-semibold">snipercoders25@gmail.com</div>
//                   </div>
//                 </a>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
//                   Book Free Consultation <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-sky-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
//                   View Kashmir Portfolio
//                 </Link>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-400" /> Serving Srinagar, Gulmarg, Pahalgam, Sonamarg & All of Kashmir Valley</span>
//                 <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-indigo-400" /> GST Registered • ISO Standards</span>
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











// FILE PATH: app/services/best-software-agency-kashmir/page.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code, Smartphone, Globe, TrendingUp, Award, Users,
  MapPin, Phone, Mail, ChevronRight, Star, CheckCircle,
  Utensils, Coffee, Car, Hotel, ShoppingBag,
  GraduationCap, HeartPulse, Plane, Dumbbell, Camera,
  Briefcase, Music, Landmark,
  Wifi, ShoppingCart, Factory, Building2,
  Clock, Shield, Crown, Gem,
  Sailboat, Mountain, Snowflake, Cherry, Flower2,
  Tent, Ship, Waves, CableCar
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
    title: "Website Development Kashmir", 
    desc: "Professional website design company in Kashmir. Houseboat booking portals, shikara tour sites, handicraft eCommerce stores & hotel websites built for Kashmir&apos;s global tourism audience.", 
    gradient: "from-sky-500 to-blue-600",
    keywords: "website design Kashmir, web development Srinagar, ecommerce website Kashmir"
  },
  { 
    icon: <Smartphone className="w-7 h-7" />, 
    title: "Mobile App Development Kashmir", 
    desc: "Top app development agency in Kashmir. Tourism apps, Amarnath yatra booking apps, local delivery platforms & business management apps for Kashmir&apos;s mobile-first market.", 
    gradient: "from-violet-500 to-purple-700",
    keywords: "app development Kashmir, mobile app developers Srinagar, Amarnath yatra app"
  },
  { 
    icon: <Code className="w-7 h-7" />, 
    title: "Custom Software Development Kashmir", 
    desc: "Enterprise software solutions in Kashmir. Hotel management systems, handicraft inventory platforms, apple orchard management software & school ERP for Kashmir businesses.", 
    gradient: "from-indigo-500 to-blue-700",
    keywords: "software development Kashmir, custom software Srinagar, ERP development Kashmir"
  },
  { 
    icon: <TrendingUp className="w-7 h-7" />, 
    title: "Digital Marketing Agency Kashmir", 
    desc: "Rank globally for &apos;Kashmir houseboat booking&apos;, &apos;best hotel in Srinagar&apos;, &apos;Gulmarg skiing packages&apos; & more to attract international tourists to your business. Best SEO company in Kashmir.", 
    gradient: "from-rose-500 to-pink-600",
    keywords: "digital marketing Kashmir, SEO services Srinagar, tourism marketing Kashmir"
  },
  { 
    icon: <Users className="w-7 h-7" />, 
    title: "IT Consulting Kashmir", 
    desc: "Expert IT consultants in Kashmir. Digital transformation advisory for Kashmir&apos;s growing hospitality sector, startups and government-backed businesses.", 
    gradient: "from-emerald-500 to-teal-600",
    keywords: "IT consulting Kashmir, technology consultants Srinagar, digital transformation Kashmir"
  },
  { 
    icon: <Award className="w-7 h-7" />, 
    title: "Branding & Design Kashmir", 
    desc: "Premium branding agency in Kashmir. Beautiful brand identities that reflect Kashmir&apos;s heritage — ideal for handicraft sellers, hotels and tourism operators.", 
    gradient: "from-fuchsia-500 to-pink-600",
    keywords: "branding agency Kashmir, graphic design Srinagar, logo design Kashmir"
  },
];

const BUSINESS_CATEGORIES = [
  { icon: <Sailboat className="w-5 h-5" />, label: "Houseboats on Dal Lake", keyword: "houseboat website Kashmir", color: "text-sky-400" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Srinagar", keyword: "hotel website Kashmir", color: "text-blue-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Tour Operators Gulmarg", keyword: "tour operator website Kashmir", color: "text-indigo-400" },
  { icon: <Car className="w-5 h-5" />, label: "Cab Services Srinagar", keyword: "transport website Kashmir", color: "text-cyan-400" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "Handicrafts in Srinagar", keyword: "handicraft ecommerce Kashmir", color: "text-pink-400" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Pashmina Shawls", keyword: "pashmina website Kashmir", color: "text-rose-400" },
  { icon: <Cherry className="w-5 h-5" />, label: "Apple Orchards", keyword: "apple farm website Kashmir", color: "text-red-400" },
  { icon: <Flower2 className="w-5 h-5" />, label: "Saffron Farms Pampore", keyword: "saffron ecommerce Kashmir", color: "text-purple-400" },
  { icon: <Utensils className="w-5 h-5" />, label: "Wazwan Restaurants", keyword: "restaurant website Kashmir", color: "text-orange-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Kahwa Cafés", keyword: "cafe website Kashmir", color: "text-amber-400" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Srinagar", keyword: "school website Kashmir", color: "text-green-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals Kashmir", keyword: "hospital website Kashmir", color: "text-red-400" },
  { icon: <Mountain className="w-5 h-5" />, label: "Gulmarg Ski Resorts", keyword: "ski resort website Kashmir", color: "text-cyan-400" },
  { icon: <Tent className="w-5 h-5" />, label: "Pahalgam Camps", keyword: "camping website Kashmir", color: "text-lime-400" },
  { icon: <Ship className="w-5 h-5" />, label: "Shikara Rides", keyword: "shikara tour website Kashmir", color: "text-sky-400" },
  { icon: <Camera className="w-5 h-5" />, label: "Film & Photography", keyword: "film website Kashmir", color: "text-violet-400" },
  { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", keyword: "wedding website Kashmir", color: "text-rose-300" },
  { icon: <Landmark className="w-5 h-5" />, label: "Banks in Kashmir", keyword: "banking website Kashmir", color: "text-blue-300" },
  { icon: <Factory className="w-5 h-5" />, label: "Dry Fruit Traders", keyword: "dry fruit ecommerce Kashmir", color: "text-amber-300" },
  { icon: <Building2 className="w-5 h-5" />, label: "Government Agencies", keyword: "government website Kashmir", color: "text-purple-300" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Adventure Sports", keyword: "adventure website Kashmir", color: "text-lime-300" },
  { icon: <Wifi className="w-5 h-5" />, label: "Tech Startups Kashmir", keyword: "startup website Kashmir", color: "text-cyan-300" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Exporters Kashmir", keyword: "import export website Kashmir", color: "text-indigo-400" },
  { icon: <Waves className="w-5 h-5" />, label: "Dal Lake Experiences", keyword: "lake tourism website Kashmir", color: "text-sky-300" },
  { icon: <Snowflake className="w-5 h-5" />, label: "Gulmarg Skiing", keyword: "skiing website Kashmir", color: "text-blue-200" },
  { icon: <CableCar className="w-5 h-5" />, label: "Gulmarg Gondola", keyword: "gondola website Kashmir", color: "text-indigo-300" },
];

const STATS = [
  { value: "30+", label: "Kashmir Projects Delivered", keyword: "Kashmir software projects" },
  { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Kashmir" },
  { value: "24/7", label: "Local Support Available", keyword: "IT support Kashmir" },
  { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Kashmir reviews" },
];

const TRUST_SIGNALS = [
  { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
  { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
  { icon: <MapPin className="w-5 h-5" />, text: "Kashmir Presence" },
  { icon: <Gem className="w-5 h-5" />, text: "Urdu/Hindi/English Support" },
];

const LOCATIONS = [
  "Srinagar", "Dal Lake", "Nishat Bagh", "Shalimar Bagh", "Chashme Shahi",
  "Gulmarg", "Tangmarg", "Pahalgam", "Betaab Valley", "Aru Valley",
  "Sonamarg", "Zojila Pass", "Yusmarg", "Doodhpathri", "Kokernag",
  "Verinag", "Achabal", "Pulwama", "Pampore", "Anantnag",
  "Kulgam", "Shopian", "Bandipora", "Baramulla", "Kupwara",
  "Gurez Valley", "Tulail Valley", "Kargil", "Leh-Ladakh", "Katra (Vaishno Devi)"
];

const FAQS = [
  { 
    q: "Which is the best software agency in Kashmir?", 
    a: "SniperCoders is consistently rated among the top software agencies in Kashmir. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Srinagar, Gulmarg, Pahalgam, and the entire Kashmir Valley." 
  },
  { 
    q: "Can SniperCoders help my Kashmir houseboat business rank internationally?", 
    a: "Yes! We build SEO strategies targeting global tourists searching for Kashmir houseboats, Dal Lake experiences, and Srinagar hotels. We target keywords like &apos;houseboat in Dal Lake Srinagar&apos;, &apos;best luxury houseboat Kashmir&apos;, and &apos;Dal Lake accommodation&apos; that international travellers search for. Your website can rank in Google searches from India, Europe, UK, US, and beyond — bringing you direct bookings without paying commissions to aggregators." 
  },
  { 
    q: "Do you help Kashmiri handicraft sellers sell online?", 
    a: "Absolutely. We build eCommerce stores for carpet weavers, Pashmina shawl sellers, papier-mâché artisans, wood carving workshops, and other handicraft businesses. We integrate international shipping solutions, multi-currency pricing, and multilingual product pages (English, Hindi, Urdu) so you can sell to buyers worldwide. We also optimize your store for Google Shopping and Pinterest — where handicrafts perform exceptionally well." 
  },
  { 
    q: "What digital marketing works best for tourism businesses in Kashmir?", 
    a: "A combination of strategies works best: 1) Google SEO targeting long-tail tourism keywords like &apos;Gulmarg skiing packages&apos;, &apos;Pahalgam family tour&apos;, &apos;Sonamarg camping&apos;, 2) Instagram/Meta Ads with stunning visuals targeting travellers from India and abroad, 3) Google Business Profile optimization for local searches, 4) Travel blogger and influencer collaborations, and 5) YouTube content showcasing your property or services. We handle all of this for you." 
  },
  { 
    q: "Is there support in Urdu or Kashmiri language?", 
    a: "We support Urdu and Hindi content extensively. For Kashmiri-language content, we work with local translators to ensure your messaging resonates deeply with the local audience. This is particularly effective for targeting the local Kashmir market and for creating emotional connections with customers who prefer communicating in their mother tongue." 
  },
  { 
    q: "Can you help with Amarnath Yatra and pilgrimage tourism?", 
    a: "Yes! We specialize in pilgrimage tourism digital marketing. We build booking platforms for Amarnath Yatra packages, helicopter bookings, Pahalgam base camp accommodations, and complete yatra itinerary planning tools. We also optimize for keywords like &apos;Amarnath Yatra registration&apos;, &apos;Baltal helicopter booking&apos;, and &apos;Amarnath tour packages from Srinagar&apos;." 
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function KashmirPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#05070d] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(14,165,233,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.14) 0%, transparent 60%), #05070d"
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-sky-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-indigo-600/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> #1 Software Agency in Kashmir • 30+ Projects Delivered
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Agency<br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              in Kashmir Valley
            </span>
          </motion.h1>

          <motion.p 
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders brings cutting-edge digital solutions to Kashmir — helping <strong className="text-sky-400">houseboats on Dal Lake, Pashmina artisans, Wazwan restaurants, Gulmarg ski resorts & Amarnath yatra operators</strong> reach the world through powerful websites, apps & SEO. <span className="text-sky-400">30+ projects • 5★ rated</span>
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-sky-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div 
            custom={2} initial="hidden" animate="show" variants={fadeUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-sky-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm active:scale-95"
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
                <div className="text-3xl font-black bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">{s.value}</div>
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
            className="bg-gradient-to-br from-gray-900/80 to-sky-950/25 border border-sky-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Kashmir&apos;s Untapped Digital Goldmine
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Kashmir</strong> — the &ldquo;Paradise on Earth&rdquo; — draws over <strong className="text-sky-400">2.1 crore tourists annually</strong>. <strong className="text-cyan-400">Srinagar&apos;s Dal Lake</strong>, <strong className="text-cyan-400">Gulmarg&apos;s ski slopes</strong>, <strong className="text-cyan-400">Pahalgam&apos;s meadows</strong> and <strong className="text-cyan-400">Sonamarg&apos;s glaciers</strong> are world-famous destinations that travellers search for on Google every single day. From <strong className="text-cyan-400">houseboats with Mughal gardens views</strong> to <strong className="text-cyan-400">Pashmina shawls woven by master artisans</strong>, from <strong className="text-cyan-400">saffron fields of Pampore</strong> to <strong className="text-cyan-400">Wazwan feasts in traditional restaurants</strong> — Kashmir&apos;s offerings are globally sought-after.
              </p>
              <p>
                Yet shockingly, the majority of Kashmir&apos;s tourism, hospitality, handicraft and trade businesses have no meaningful digital presence. This is a massive opportunity. <strong className="text-white">SniperCoders</strong>, the <strong className="text-sky-400">best software agency in Kashmir</strong>, is here to help local businesses claim their rightful place in global search results — attracting domestic and international tourists directly, without depending on aggregators who charge high commissions.
              </p>
              <p>
                From <strong className="text-white">houseboat booking platforms</strong> to <strong className="text-white">Pashmina eCommerce with international shipping</strong>, from <strong className="text-white">Wazwan restaurant SEO</strong> to <strong className="text-white">Amarnath yatra operator apps</strong>, from <strong className="text-white">apple orchard management systems</strong> to <strong className="text-white">Gulmarg ski resort websites</strong> — we have the expertise to put Kashmir businesses on the global digital map. <strong className="text-sky-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
              <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Kashmir</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Digital solutions crafted for Kashmir&apos;s globally admired tourism, culture and trade ecosystem. <strong className="text-sky-400">Web development, mobile apps, SEO, and more.</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-sky-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(14,165,233,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-sky-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
                <p className="text-xs text-sky-400/70 italic">{svc.keywords}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-sky-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Kashmir</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every industry in Kashmir — from <strong className="text-sky-400">Dal Lake houseboats</strong> to <strong className="text-sky-400">Pampore saffron farms</strong> and <strong className="text-sky-400">Gulmarg ski resorts</strong> — can grow exponentially with the right digital strategy.
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
            <p className="text-sm text-gray-500 mb-4">Serving all Kashmir Valley locations:</p>
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
              Why Kashmir Businesses Choose{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">SniperCoders</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s what makes us the <strong className="text-sky-400">preferred digital partner for Kashmir&apos;s most successful businesses</strong>:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Global SEO targeting international tourists searching for Kashmir destinations",
              "Houseboat & hotel booking system integrations with real-time availability",
              "Handicraft eCommerce with international shipping, multi-currency & multilingual support",
              "Urdu, Hindi & English multilingual content capabilities for wider reach",
              "High-quality photography & drone-shot video support for stunning visual content",
              "Google Business Profile & Maps dominance for Srinagar, Gulmarg & Pahalgam",
              "Apple & saffron farm product digitization & B2B export portals",
              "Amarnath Yatra booking platforms with helicopter & accommodation integration",
              "Gulmarg ski tourism & adventure sports digital marketing",
              "Wazwan restaurant local SEO & food photography",
              "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
              "Post-launch support & maintenance with 24/7 availability for critical issues"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-sky-800/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
              Start Your Project in Kashmir <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL with social proof ───────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-sky-900/20 via-indigo-900/10 to-sky-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
            &ldquo;We sell Kashmiri carpets and Pashmina shawls from our shop in <strong className="text-sky-400">Srinagar</strong>. SniperCoders built our eCommerce store and now international buyers from Europe, US and UAE find us on Google. We&rsquo;ve shipped to 12 countries in just 6 months. It <strong className="text-sky-400">changed our business completely</strong> — we&rsquo;re no longer dependent only on tourists who visit Kashmir.&rdquo;
          </blockquote>
          <p className="text-gray-500 mt-4 text-sm">— Handicraft Business Owner, Lal Chowk, Srinagar, Kashmir</p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
            <span>⭐ 5/5 on Google</span>
            <span>✅ Verified Client</span>
            <span>📍 Srinagar, Kashmir</span>
          </div>
        </div>
      </section>

      {/* ── FAQ with long-tail keywords ────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions —{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Kashmir</span>
            </h2>
            <p className="text-gray-400">Answers to common questions about <strong className="text-sky-400">software development, website design, and digital marketing in Kashmir.</strong></p>
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
            className="relative bg-gradient-to-br from-sky-900/40 to-indigo-900/30 border border-sky-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Let the World Find<br />
                <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Your Kashmir Business</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                <strong className="text-white">2.1 crore+ tourists</strong> dream about Kashmir every year. From <strong className="text-sky-400">Dal Lake houseboats</strong> to <strong className="text-sky-400">Gulmarg ski slopes</strong>, <strong className="text-sky-400">Pahalgam meadows</strong> to <strong className="text-sky-400">Pampore saffron fields</strong> — SniperCoders makes sure they find YOUR business, not your competitor&apos;s.
              </p>
              
              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-sky-500 rounded-xl px-6 py-4 transition-all duration-300 active:scale-95"
                >
                  <Phone className="w-6 h-6 text-sky-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Call us now</div>
                    <div className="text-white font-semibold">+91 7006377796</div>
                  </div>
                </a>
                <a href={`mailto:${email}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-indigo-500 rounded-xl px-6 py-4 transition-all duration-300 active:scale-95"
                >
                  <Mail className="w-6 h-6 text-indigo-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Email us</div>
                    <div className="text-white font-semibold">snipercoders25@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-sky-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 active:scale-95">
                  View Kashmir Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-400" /> Serving Srinagar, Gulmarg, Pahalgam, Sonamarg & All of Kashmir Valley</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-indigo-400" /> GST Registered • ISO Standards</span>
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