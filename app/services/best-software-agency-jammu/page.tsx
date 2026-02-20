








// // FILE PATH: app/services/best-software-agency-jammu/page.tsx

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
//   Mountain, Church, Tent, Bus
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
//     title: "Website Development Jammu", 
//     desc: "Professional website design company in Jammu. Business websites, eCommerce platforms, tour operator portals & Vaishno Devi tourism sites crafted for Jammu's booming market.", 
//     gradient: "from-amber-500 to-orange-600",
//     keywords: "website design Jammu, web development company Jammu, ecommerce website Jammu"
//   },
//   { 
//     icon: <Smartphone className="w-7 h-7" />, 
//     title: "Mobile App Development Jammu", 
//     desc: "Top app development agency in Jammu. Pilgrimage booking apps, transport aggregator apps, local delivery apps & business apps built for Jammu's smartphone-first users.", 
//     gradient: "from-violet-500 to-purple-700",
//     keywords: "app development Jammu, mobile app developers Jammu, Vaishno Devi app development"
//   },
//   { 
//     icon: <Code className="w-7 h-7" />, 
//     title: "Custom Software Development Jammu", 
//     desc: "Enterprise software solutions in Jammu. Billing systems, school ERP, hotel management software & inventory tools designed for Jammu businesses.", 
//     gradient: "from-rose-500 to-red-600",
//     keywords: "software development Jammu, custom software Jammu, ERP development Jammu"
//   },
//   { 
//     icon: <TrendingUp className="w-7 h-7" />, 
//     title: "Digital Marketing Agency Jammu", 
//     desc: "Rank for 'best hotel near Vaishno Devi', 'top restaurant in Jammu' & more with our locally-tuned SEO and ad campaigns. Best SEO company in Jammu.", 
//     gradient: "from-blue-500 to-cyan-600",
//     keywords: "digital marketing Jammu, SEO services Jammu, Google Ads Jammu"
//   },
//   { 
//     icon: <Users className="w-7 h-7" />, 
//     title: "IT Consulting Jammu", 
//     desc: "Expert IT consultants in Jammu. Strategic tech guidance for Jammu businesses navigating the digital economy and government e-procurement platforms.", 
//     gradient: "from-emerald-500 to-teal-600",
//     keywords: "IT consulting Jammu, technology consultants Jammu, digital transformation Jammu"
//   },
//   { 
//     icon: <Award className="w-7 h-7" />, 
//     title: "Branding & Design Jammu", 
//     desc: "Premium branding agency in Jammu. Complete brand identity, social media creatives, menus, brochures & digital assets for Jammu businesses.", 
//     gradient: "from-fuchsia-500 to-pink-600",
//     keywords: "branding agency Jammu, graphic design Jammu, logo design Jammu"
//   },
// ];

// const BUSINESS_CATEGORIES = [
//   { icon: <Hotel className="w-5 h-5" />, label: "Hotels near Vaishno Devi", keyword: "hotel website Jammu", color: "text-amber-400" },
//   { icon: <Plane className="w-5 h-5" />, label: "Yatra Operators Katra", keyword: "tour operator website Jammu", color: "text-sky-400" },
//   { icon: <Car className="w-5 h-5" />, label: "Cabs to Srinagar", keyword: "transport website Jammu", color: "text-cyan-400" },
//   { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in Gandhi Nagar", keyword: "restaurant website Jammu", color: "text-orange-400" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail in Bakshi Nagar", keyword: "ecommerce website Jammu", color: "text-pink-400" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Trikuta Nagar", keyword: "school website Jammu", color: "text-green-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Jammu", keyword: "hospital website Jammu", color: "text-red-400" },
//   { icon: <TreePine className="w-5 h-5" />, label: "Organic Farms Rajouri", keyword: "agriculture website Jammu", color: "text-lime-400" },
//   { icon: <Home className="w-5 h-5" />, label: "Real Estate in Jammu", keyword: "real estate website Jammu", color: "text-teal-400" },
//   { icon: <Truck className="w-5 h-5" />, label: "Logistics Jammu", keyword: "logistics software Jammu", color: "text-yellow-400" },
//   { icon: <Wrench className="w-5 h-5" />, label: "Hardware in Narwal", keyword: "construction website Jammu", color: "text-orange-300" },
//   { icon: <Factory className="w-5 h-5" />, label: "Rice Mills Jammu", keyword: "industrial website Jammu", color: "text-gray-400" },
//   { icon: <Coffee className="w-5 h-5" />, label: "Bakeries Jammu", keyword: "bakery website Jammu", color: "text-amber-300" },
//   { icon: <Camera className="w-5 h-5" />, label: "Photo Studios Jammu", keyword: "photography website Jammu", color: "text-violet-400" },
//   { icon: <Music className="w-5 h-5" />, label: "Wedding Planners Jammu", keyword: "event website Jammu", color: "text-rose-400" },
//   { icon: <Landmark className="w-5 h-5" />, label: "Finance Jammu", keyword: "fintech Jammu", color: "text-blue-300" },
//   { icon: <Building2 className="w-5 h-5" />, label: "Govt Contractors", keyword: "government website Jammu", color: "text-purple-300" },
//   { icon: <ShoppingCart className="w-5 h-5" />, label: "Wholesale Jammu", keyword: "wholesale B2B website Jammu", color: "text-emerald-400" },
//   { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms Jammu", keyword: "fitness website Jammu", color: "text-lime-300" },
//   { icon: <Wifi className="w-5 h-5" />, label: "IT Centres Jammu", keyword: "software company Jammu", color: "text-cyan-300" },
//   { icon: <Briefcase className="w-5 h-5" />, label: "Importers Jammu", keyword: "import export website Jammu", color: "text-indigo-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Ayurveda Jammu", keyword: "wellness website Jammu", color: "text-pink-300" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Skill Development", keyword: "vocational training website Jammu", color: "text-green-300" },
//   { icon: <Truck className="w-5 h-5" />, label: "Dairy Farms Jammu", keyword: "dairy website Jammu", color: "text-yellow-300" },
//   { icon: <Mountain className="w-5 h-5" />, label: "Patnitop Resorts", keyword: "hill station website Jammu", color: "text-emerald-300" },
//   { icon: <Church className="w-5 h-5" />, label: "Temple Trusts", keyword: "temple website Jammu", color: "text-amber-200" },
// ];

// const STATS = [
//   { value: "30+", label: "Jammu Projects Delivered", keyword: "Jammu software projects" },
//   { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Jammu" },
//   { value: "24/7", label: "Local Support Available", keyword: "IT support Jammu" },
//   { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Jammu reviews" },
// ];

// const TRUST_SIGNALS = [
//   { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
//   { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
//   { icon: <MapPin className="w-5 h-5" />, text: "Jammu Presence" },
//   { icon: <Gem className="w-5 h-5" />, text: "Hindi/Dogri/English Support" },
// ];

// const LOCATIONS = [
//   "Jammu City", "Trikuta Nagar", "Gandhi Nagar", "Bakshi Nagar", "Narwal",
//   "Satwari", "Channi Himmat", "Janipur", "Talab Tillo", "Rehari",
//   "RS Pura", "Bari Brahmana", "Katra", "Vaishno Devi", "Patnitop",
//   "Sanasar", "Mansar", "Surinsar", "Akhnoor", "Rajouri",
//   "Poonch", "Udhampur", "Ramnagar", "Samba", "Hiranagar"
// ];

// const FAQS = [
//   { 
//     q: "Which is the best software agency in Jammu?", 
//     a: "SniperCoders is consistently rated among the top software agencies in Jammu. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Trikuta Nagar, Gandhi Nagar, Katra, and the entire Jammu division." 
//   },
//   { 
//     q: "Why does my Jammu business need a website?", 
//     a: "Jammu sees millions of pilgrims and tourists annually (over 8 million to Vaishno Devi alone), all of whom search Google before making decisions about hotels, transport, and restaurants. Additionally, Jammu's growing local population increasingly shops and searches online. Without a website, you're invisible to this massive audience and losing business to competitors who have embraced digital." 
//   },
//   { 
//     q: "Can you help tourism & yatra businesses in Jammu rank on Google?", 
//     a: "Absolutely. We specialize in local SEO for tourism businesses, targeting high-intent keywords like 'best hotel near Vaishno Devi', 'Katra to Vaishno Devi helicopter booking', 'Jammu tour packages', 'Patnitop resorts', and 'cab service Jammu to Srinagar'. We understand the pilgrimage seasonality and optimize your presence year-round." 
//   },
//   { 
//     q: "Do you support Hindi and Dogri language content?", 
//     a: "Yes! We create multilingual content in Hindi, English and can support Dogri for hyper-local targeting within Jammu. This is a massive competitive advantage as most businesses only target English keywords. Dogri and Hindi content helps you connect with local customers who prefer searching in their mother tongue." 
//   },
//   { 
//     q: "What industries do you serve in Jammu?", 
//     a: "We serve all industries — hospitality (hotels, guest houses, yatra operators), retail (Bakshi Nagar, Gandhi Nagar), agriculture (organic farms, rice mills), education (schools, coaching centers), healthcare (hospitals, clinics), real estate (Jammu's growing property market), transport (cab operators, logistics), government contractors, and more. Every business in Jammu can benefit from a digital presence." 
//   },
//   { 
//     q: "How much does a website cost in Jammu?", 
//     a: "A professional business website in Jammu typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Trikuta Nagar, Gandhi Nagar, and across Jammu division, with enterprise solutions for larger organizations." 
//   },
// ];

// // Contact information
// const phoneNumber = "+917006377796";
// const email = "snipercoders25@gmail.com";

// export default function JammuPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-[#0f0800] text-white font-sans overflow-x-hidden">

//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section
//         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
//         style={{
//           background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(239,68,68,0.12) 0%, transparent 60%), #0f0800"
//         }}
//       >
//         <div className="absolute inset-0 opacity-[0.04]"
//           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
//         <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-amber-600/15 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-orange-600/15 blur-[80px] pointer-events-none" />

//         <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
//           >
//             <Crown className="w-4 h-4" /> #1 Software Agency in Jammu • 30+ Projects Delivered
//           </motion.div>

//           <motion.h1
//             initial="hidden" animate="show" variants={fadeUp}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Best Software Agency<br />
//             <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
//               in Jammu, J&K
//             </span>
//           </motion.h1>

//           <motion.p 
//             custom={1} initial="hidden" animate="show" variants={fadeUp}
//             className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
//           >
//             SniperCoders helps Jammu businesses — from <strong className="text-amber-400">Vaishno Devi yatra operators</strong> to <strong className="text-amber-400">Trikuta Nagar retailers</strong> and <strong className="text-amber-400">Patnitop resort owners</strong> — dominate Google search with stunning websites, mobile apps & powerful digital marketing. <span className="text-amber-400">30+ projects • 5★ rated</span>
//           </motion.p>

//           {/* Trust signals */}
//           <motion.div
//             custom={1.5} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {TRUST_SIGNALS.map((signal, i) => (
//               <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
//                 <span className="text-amber-400">{signal.icon}</span>
//                 {signal.text}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div 
//             custom={2} initial="hidden" animate="show" variants={fadeUp} 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Link href="/contact"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Consultation <ChevronRight className="w-5 h-5" />
//             </Link>
//             <a href={`tel:${phoneNumber}`}
//               className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
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
//                 <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{s.value}</div>
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
//             className="bg-gradient-to-br from-gray-900/80 to-amber-950/20 border border-amber-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
//               The Digital Opportunity in Jammu
//             </h2>
//             <div className="space-y-4 text-gray-300 leading-relaxed">
//               <p>
//                 <strong className="text-white">Jammu</strong> — the "City of Temples" and winter capital of J&K — is one of North India's most strategically important cities. With over <strong className="text-amber-400">8 million pilgrims visiting Vaishno Devi annually</strong>, a booming real estate sector, growing retail corridors in <strong className="text-amber-400">Bakshi Nagar and Gandhi Nagar</strong>, hill stations like <strong className="text-amber-400">Patnitop and Sanasar</strong>, and a thriving educational ecosystem, Jammu presents enormous untapped digital potential.
//               </p>
//               <p>
//                 Yet the vast majority of Jammu's businesses remain offline or rely on word-of-mouth alone. Every day without a website or Google presence is a day your competitors could claim those pilgrims, tourists, and local customers. <strong className="text-white">SniperCoders</strong>, the <strong className="text-amber-400">best software agency in Jammu</strong>, helps local businesses capture this opportunity with world-class, affordable digital solutions tailored to <strong className="text-amber-400">Katra's yatra ecosystem, Jammu's retail hubs, and the region's unique cultural landscape</strong>.
//               </p>
//               <p>
//                 From building <strong className="text-white">Vaishno Devi yatra booking platforms</strong> to <strong className="text-white">local restaurant SEO in Trikuta Nagar</strong>, <strong className="text-white">Dogri language websites</strong> to <strong className="text-white">government contractor portals</strong> — we understand Jammu's unique business ecosystem and deliver results that matter here. <strong className="text-amber-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
//               <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Jammu</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Digital services fine-tuned for Jammu's tourism, trade & government-heavy economy. <strong className="text-amber-400">Web development, mobile apps, SEO, and more.</strong>
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((svc, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="group relative bg-gray-900/60 border border-gray-800 hover:border-amber-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.08), transparent)" }} />
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
//                 <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors">{svc.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
//                 <p className="text-xs text-amber-400/70 italic">{svc.keywords}</p>
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
//       <section className="py-20 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Industries We Serve in{" "}
//               <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Jammu</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               From <strong className="text-amber-400">Vaishno Devi yatra operators</strong> to <strong className="text-amber-400">Bakshi Nagar retailers</strong> and <strong className="text-amber-400">Patnitop resort owners</strong> — every Jammu business category deserves to be found online.
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
//             <p className="text-sm text-gray-500 mb-4">Serving all Jammu division locations:</p>
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
//               Why Jammu Businesses Trust{" "}
//               <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">SniperCoders</span>
//             </h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//               Here's what makes us the <strong className="text-amber-400">preferred digital partner for Jammu's most successful businesses</strong>:
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               "Tourism-first SEO for Vaishno Devi, Katra, Patnitop & Sanasar routes",
//               "Dogri, Hindi & English multilingual website content for hyperlocal reach",
//               "Yatra booking & hotel reservation system integrations for pilgrimage businesses",
//               "Google Maps & Google Business Profile optimisation for Jammu locations",
//               "Affordable pricing for Jammu's SME market with flexible payment options",
//               "Temple trust & religious institution websites for Jammu's spiritual economy",
//               "Defence & army contractor portal development for government tenders",
//               "Agriculture & horticulture eCommerce catalogues for organic farms",
//               "Rice mill & industrial website design for Bari Brahmana industrial area",
//               "School & coaching center websites for Jammu's education sector",
//               "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
//               "Post-launch support & maintenance with 24/7 availability for critical issues"
//             ].map((item, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-amber-800/50 transition-all duration-300"
//               >
//                 <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-300 text-sm">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
//               Start Your Project in Jammu <ChevronRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL with social proof ───────────────────────── */}
//       <section className="py-12 bg-gradient-to-r from-amber-900/20 via-orange-900/10 to-amber-900/20 border-y border-gray-800/50">
//         <div className="container mx-auto px-4 text-center">
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
//           </div>
//           <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
//             "We run a tour package business in <strong className="text-amber-400">Trikuta Nagar, Jammu</strong> specializing in Vaishno Devi yatra. After SniperCoders rebuilt our website and did local SEO targeting 'Katra to Vaishno Devi packages' and 'Jammu pilgrimage tours', our bookings <strong className="text-amber-400">doubled in 3 months</strong>. Best decision we made for our business."
//           </blockquote>
//           <p className="text-gray-500 mt-4 text-sm">— Tour Operator, Trikuta Nagar, Jammu</p>
//           <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
//             <span>⭐ 5/5 on Google</span>
//             <span>✅ Verified Client</span>
//             <span>📍 Trikuta Nagar, Jammu</span>
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ with long-tail keywords ────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Frequently Asked Questions —{" "}
//               <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Jammu</span>
//             </h2>
//             <p className="text-gray-400">Answers to common questions about <strong className="text-amber-400">software development, website design, and digital marketing in Jammu.</strong></p>
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
//             className="relative bg-gradient-to-br from-amber-900/40 to-orange-900/30 border border-amber-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 Ready to Dominate Google<br />
//                 <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">in Jammu?</span>
//               </h2>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 <strong className="text-white">8 million+ pilgrims</strong> and tourists search for services in Jammu every year. From <strong className="text-amber-400">Vaishno Devi yatra packages</strong> to <strong className="text-amber-400">Patnitop resorts</strong> and <strong className="text-amber-400">Gandhi Nagar restaurants</strong> — SniperCoders makes sure they find YOUR business first.
//               </p>
              
//               {/* Contact cards */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <a href={`tel:${phoneNumber}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-amber-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Phone className="w-6 h-6 text-amber-400" />
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
//                 <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
//                   Book Free Consultation <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
//                   View Jammu Portfolio
//                 </Link>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-400" /> Serving All of Jammu Division (Jammu, Katra, Udhampur, Rajouri, Poonch)</span>
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






// FILE PATH: app/services/best-software-agency-jammu/page.tsx

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
  Clock, Shield, Crown, Gem,
  Mountain, Church
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
    title: "Website Development Jammu", 
    desc: "Professional website design company in Jammu. Business websites, eCommerce platforms, tour operator portals & Vaishno Devi tourism sites crafted for Jammu's booming market.", 
    gradient: "from-amber-500 to-orange-600",
    keywords: "website design Jammu, web development company Jammu, ecommerce website Jammu"
  },
  { 
    icon: <Smartphone className="w-7 h-7" />, 
    title: "Mobile App Development Jammu", 
    desc: "Top app development agency in Jammu. Pilgrimage booking apps, transport aggregator apps, local delivery apps & business apps built for Jammu's smartphone-first users.", 
    gradient: "from-violet-500 to-purple-700",
    keywords: "app development Jammu, mobile app developers Jammu, Vaishno Devi app development"
  },
  { 
    icon: <Code className="w-7 h-7" />, 
    title: "Custom Software Development Jammu", 
    desc: "Enterprise software solutions in Jammu. Billing systems, school ERP, hotel management software & inventory tools designed for Jammu businesses.", 
    gradient: "from-rose-500 to-red-600",
    keywords: "software development Jammu, custom software Jammu, ERP development Jammu"
  },
  { 
    icon: <TrendingUp className="w-7 h-7" />, 
    title: "Digital Marketing Agency Jammu", 
    desc: "Rank for &lsquo;best hotel near Vaishno Devi&rsquo;, &lsquo;top restaurant in Jammu&rsquo; &amp; more with our locally-tuned SEO and ad campaigns. Best SEO company in Jammu.", 
    gradient: "from-blue-500 to-cyan-600",
    keywords: "digital marketing Jammu, SEO services Jammu, Google Ads Jammu"
  },
  { 
    icon: <Users className="w-7 h-7" />, 
    title: "IT Consulting Jammu", 
    desc: "Expert IT consultants in Jammu. Strategic tech guidance for Jammu businesses navigating the digital economy and government e-procurement platforms.", 
    gradient: "from-emerald-500 to-teal-600",
    keywords: "IT consulting Jammu, technology consultants Jammu, digital transformation Jammu"
  },
  { 
    icon: <Award className="w-7 h-7" />, 
    title: "Branding & Design Jammu", 
    desc: "Premium branding agency in Jammu. Complete brand identity, social media creatives, menus, brochures & digital assets for Jammu businesses.", 
    gradient: "from-fuchsia-500 to-pink-600",
    keywords: "branding agency Jammu, graphic design Jammu, logo design Jammu"
  },
];

const BUSINESS_CATEGORIES = [
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels near Vaishno Devi", keyword: "hotel website Jammu", color: "text-amber-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Yatra Operators Katra", keyword: "tour operator website Jammu", color: "text-sky-400" },
  { icon: <Car className="w-5 h-5" />, label: "Cabs to Srinagar", keyword: "transport website Jammu", color: "text-cyan-400" },
  { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in Gandhi Nagar", keyword: "restaurant website Jammu", color: "text-orange-400" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail in Bakshi Nagar", keyword: "ecommerce website Jammu", color: "text-pink-400" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Trikuta Nagar", keyword: "school website Jammu", color: "text-green-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Jammu", keyword: "hospital website Jammu", color: "text-red-400" },
  { icon: <TreePine className="w-5 h-5" />, label: "Organic Farms Rajouri", keyword: "agriculture website Jammu", color: "text-lime-400" },
  { icon: <Home className="w-5 h-5" />, label: "Real Estate in Jammu", keyword: "real estate website Jammu", color: "text-teal-400" },
  { icon: <Truck className="w-5 h-5" />, label: "Logistics Jammu", keyword: "logistics software Jammu", color: "text-yellow-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Hardware in Narwal", keyword: "construction website Jammu", color: "text-orange-300" },
  { icon: <Factory className="w-5 h-5" />, label: "Rice Mills Jammu", keyword: "industrial website Jammu", color: "text-gray-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Bakeries Jammu", keyword: "bakery website Jammu", color: "text-amber-300" },
  { icon: <Camera className="w-5 h-5" />, label: "Photo Studios Jammu", keyword: "photography website Jammu", color: "text-violet-400" },
  { icon: <Music className="w-5 h-5" />, label: "Wedding Planners Jammu", keyword: "event website Jammu", color: "text-rose-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "Finance Jammu", keyword: "fintech Jammu", color: "text-blue-300" },
  { icon: <Building2 className="w-5 h-5" />, label: "Govt Contractors", keyword: "government website Jammu", color: "text-purple-300" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "Wholesale Jammu", keyword: "wholesale B2B website Jammu", color: "text-emerald-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms Jammu", keyword: "fitness website Jammu", color: "text-lime-300" },
  { icon: <Wifi className="w-5 h-5" />, label: "IT Centres Jammu", keyword: "software company Jammu", color: "text-cyan-300" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Importers Jammu", keyword: "import export website Jammu", color: "text-indigo-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Ayurveda Jammu", keyword: "wellness website Jammu", color: "text-pink-300" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Skill Development", keyword: "vocational training website Jammu", color: "text-green-300" },
  { icon: <Truck className="w-5 h-5" />, label: "Dairy Farms Jammu", keyword: "dairy website Jammu", color: "text-yellow-300" },
  { icon: <Mountain className="w-5 h-5" />, label: "Patnitop Resorts", keyword: "hill station website Jammu", color: "text-emerald-300" },
  { icon: <Church className="w-5 h-5" />, label: "Temple Trusts", keyword: "temple website Jammu", color: "text-amber-200" },
];

const STATS = [
  { value: "30+", label: "Jammu Projects Delivered", keyword: "Jammu software projects" },
  { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Jammu" },
  { value: "24/7", label: "Local Support Available", keyword: "IT support Jammu" },
  { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Jammu reviews" },
];

const TRUST_SIGNALS = [
  { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
  { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
  { icon: <MapPin className="w-5 h-5" />, text: "Jammu Presence" },
  { icon: <Gem className="w-5 h-5" />, text: "Hindi/Dogri/English Support" },
];

const LOCATIONS = [
  "Jammu City", "Trikuta Nagar", "Gandhi Nagar", "Bakshi Nagar", "Narwal",
  "Satwari", "Channi Himmat", "Janipur", "Talab Tillo", "Rehari",
  "RS Pura", "Bari Brahmana", "Katra", "Vaishno Devi", "Patnitop",
  "Sanasar", "Mansar", "Surinsar", "Akhnoor", "Rajouri",
  "Poonch", "Udhampur", "Ramnagar", "Samba", "Hiranagar"
];

const FAQS = [
  { 
    q: "Which is the best software agency in Jammu?", 
    a: "SniperCoders is consistently rated among the top software agencies in Jammu. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Trikuta Nagar, Gandhi Nagar, Katra, and the entire Jammu division." 
  },
  { 
    q: "Why does my Jammu business need a website?", 
    a: "Jammu sees millions of pilgrims and tourists annually (over 8 million to Vaishno Devi alone), all of whom search Google before making decisions about hotels, transport, and restaurants. Additionally, Jammu's growing local population increasingly shops and searches online. Without a website, you're invisible to this massive audience and losing business to competitors who have embraced digital." 
  },
  { 
    q: "Can you help tourism & yatra businesses in Jammu rank on Google?", 
    a: "Absolutely. We specialize in local SEO for tourism businesses, targeting high-intent keywords like 'best hotel near Vaishno Devi', 'Katra to Vaishno Devi helicopter booking', 'Jammu tour packages', 'Patnitop resorts', and 'cab service Jammu to Srinagar'. We understand the pilgrimage seasonality and optimize your presence year-round." 
  },
  { 
    q: "Do you support Hindi and Dogri language content?", 
    a: "Yes! We create multilingual content in Hindi, English and can support Dogri for hyper-local targeting within Jammu. This is a massive competitive advantage as most businesses only target English keywords. Dogri and Hindi content helps you connect with local customers who prefer searching in their mother tongue." 
  },
  { 
    q: "What industries do you serve in Jammu?", 
    a: "We serve all industries — hospitality (hotels, guest houses, yatra operators), retail (Bakshi Nagar, Gandhi Nagar), agriculture (organic farms, rice mills), education (schools, coaching centers), healthcare (hospitals, clinics), real estate (Jammu's growing property market), transport (cab operators, logistics), government contractors, and more. Every business in Jammu can benefit from a digital presence." 
  },
  { 
    q: "How much does a website cost in Jammu?", 
    a: "A professional business website in Jammu typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Trikuta Nagar, Gandhi Nagar, and across Jammu division, with enterprise solutions for larger organizations." 
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function JammuPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0f0800] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(239,68,68,0.12) 0%, transparent 60%), #0f0800"
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-amber-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-orange-600/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> #1 Software Agency in Jammu • 30+ Projects Delivered
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Agency<br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              in Jammu, J&amp;K
            </span>
          </motion.h1>

          <motion.p 
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders helps Jammu businesses — from <strong className="text-amber-400">Vaishno Devi yatra operators</strong> to <strong className="text-amber-400">Trikuta Nagar retailers</strong> and <strong className="text-amber-400">Patnitop resort owners</strong> — dominate Google search with stunning websites, mobile apps &amp; powerful digital marketing. <span className="text-amber-400">30+ projects • 5★ rated</span>
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-amber-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div 
            custom={2} initial="hidden" animate="show" variants={fadeUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
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
                <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{s.value}</div>
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
            className="bg-gradient-to-br from-gray-900/80 to-amber-950/20 border border-amber-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              The Digital Opportunity in Jammu
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Jammu</strong> — the &ldquo;City of Temples&rdquo; and winter capital of J&amp;K — is one of North India&apos;s most strategically important cities. With over <strong className="text-amber-400">8 million pilgrims visiting Vaishno Devi annually</strong>, a booming real estate sector, growing retail corridors in <strong className="text-amber-400">Bakshi Nagar and Gandhi Nagar</strong>, hill stations like <strong className="text-amber-400">Patnitop and Sanasar</strong>, and a thriving educational ecosystem, Jammu presents enormous untapped digital potential.
              </p>
              <p>
                Yet the vast majority of Jammu&apos;s businesses remain offline or rely on word-of-mouth alone. Every day without a website or Google presence is a day your competitors could claim those pilgrims, tourists, and local customers. <strong className="text-white">SniperCoders</strong>, the <strong className="text-amber-400">best software agency in Jammu</strong>, helps local businesses capture this opportunity with world-class, affordable digital solutions tailored to <strong className="text-amber-400">Katra&apos;s yatra ecosystem, Jammu&apos;s retail hubs, and the region&apos;s unique cultural landscape</strong>.
              </p>
              <p>
                From building <strong className="text-white">Vaishno Devi yatra booking platforms</strong> to <strong className="text-white">local restaurant SEO in Trikuta Nagar</strong>, <strong className="text-white">Dogri language websites</strong> to <strong className="text-white">government contractor portals</strong> — we understand Jammu&apos;s unique business ecosystem and deliver results that matter here. <strong className="text-amber-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Jammu</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Digital services fine-tuned for Jammu&apos;s tourism, trade &amp; government-heavy economy. <strong className="text-amber-400">Web development, mobile apps, SEO, and more.</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-amber-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
                <p className="text-xs text-amber-400/70 italic">{svc.keywords}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Jammu</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From <strong className="text-amber-400">Vaishno Devi yatra operators</strong> to <strong className="text-amber-400">Bakshi Nagar retailers</strong> and <strong className="text-amber-400">Patnitop resort owners</strong> — every Jammu business category deserves to be found online.
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
            <p className="text-sm text-gray-500 mb-4">Serving all Jammu division locations:</p>
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
              Why Jammu Businesses Trust{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">SniperCoders</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s what makes us the <strong className="text-amber-400">preferred digital partner for Jammu&apos;s most successful businesses</strong>:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Tourism-first SEO for Vaishno Devi, Katra, Patnitop & Sanasar routes",
              "Dogri, Hindi & English multilingual website content for hyperlocal reach",
              "Yatra booking & hotel reservation system integrations for pilgrimage businesses",
              "Google Maps & Google Business Profile optimisation for Jammu locations",
              "Affordable pricing for Jammu's SME market with flexible payment options",
              "Temple trust & religious institution websites for Jammu's spiritual economy",
              "Defence & army contractor portal development for government tenders",
              "Agriculture & horticulture eCommerce catalogues for organic farms",
              "Rice mill & industrial website design for Bari Brahmana industrial area",
              "School & coaching center websites for Jammu's education sector",
              "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
              "Post-launch support & maintenance with 24/7 availability for critical issues"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-amber-800/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Project in Jammu <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL with social proof ───────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-amber-900/20 via-orange-900/10 to-amber-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
            &ldquo;We run a tour package business in <strong className="text-amber-400">Trikuta Nagar, Jammu</strong> specializing in Vaishno Devi yatra. After SniperCoders rebuilt our website and did local SEO targeting &lsquo;Katra to Vaishno Devi packages&rsquo; and &lsquo;Jammu pilgrimage tours&rsquo;, our bookings <strong className="text-amber-400">doubled in 3 months</strong>. Best decision we made for our business.&rdquo;
          </blockquote>
          <p className="text-gray-500 mt-4 text-sm">— Tour Operator, Trikuta Nagar, Jammu</p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
            <span>⭐ 5/5 on Google</span>
            <span>✅ Verified Client</span>
            <span>📍 Trikuta Nagar, Jammu</span>
          </div>
        </div>
      </section>

      {/* ── FAQ with long-tail keywords ────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions —{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Jammu</span>
            </h2>
            <p className="text-gray-400">Answers to common questions about <strong className="text-amber-400">software development, website design, and digital marketing in Jammu.</strong></p>
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
            className="relative bg-gradient-to-br from-amber-900/40 to-orange-900/30 border border-amber-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Ready to Dominate Google<br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">in Jammu?</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                <strong className="text-white">8 million+ pilgrims</strong> and tourists search for services in Jammu every year. From <strong className="text-amber-400">Vaishno Devi yatra packages</strong> to <strong className="text-amber-400">Patnitop resorts</strong> and <strong className="text-amber-400">Gandhi Nagar restaurants</strong> — SniperCoders makes sure they find YOUR business first.
              </p>
              
              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-amber-500 rounded-xl px-6 py-4 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-amber-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Call us now</div>
                    <div className="text-white font-semibold">+91 7006377796</div>
                  </div>
                </a>
                <a href={`mailto:${email}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-orange-500 rounded-xl px-6 py-4 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-orange-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Email us</div>
                    <div className="text-white font-semibold">snipercoders25@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
                  View Jammu Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-400" /> Serving All of Jammu Division (Jammu, Katra, Udhampur, Rajouri, Poonch)</span>
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
