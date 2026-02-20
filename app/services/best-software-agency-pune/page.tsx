




// // FILE PATH: app/services/best-software-agency-pune/page.tsx

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
//   BookOpen, Microscope, Cog, Bus, Mountain
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
//     title: "Website Development Pune", 
//     desc: "Professional website design company in Pune. Modern business websites, ed-tech platforms, startup landing pages & manufacturing company portals tailored for Pune's educated, tech-forward audience.", 
//     gradient: "from-indigo-500 to-blue-600",
//     keywords: "website design Pune, web development company Pune, ecommerce website Pune"
//   },
//   { 
//     icon: <Smartphone className="w-7 h-7" />, 
//     title: "Mobile App Development Pune", 
//     desc: "Top app development agency in Pune. Student-focused apps, automotive parts portals, campus platforms & local services apps built for Pune's young, mobile-first population.", 
//     gradient: "from-emerald-500 to-teal-600",
//     keywords: "app development Pune, mobile app developers Pune, student app development Pune"
//   },
//   { 
//     icon: <Code className="w-7 h-7" />, 
//     title: "Custom Software Development Pune", 
//     desc: "Enterprise software solutions in Pune. Manufacturing ERP, automotive supply chain tools, college management software & enterprise SaaS for Pune's diverse industrial & academic landscape.", 
//     gradient: "from-blue-500 to-cyan-600",
//     keywords: "software development Pune, custom software Pune, ERP development Pune"
//   },
//   { 
//     icon: <TrendingUp className="w-7 h-7" />, 
//     title: "Digital Marketing Agency Pune", 
//     desc: "Rank in Pune for your business category with our Marathi + English SEO, Google Ads and social media campaigns targeting Pune's young demographics. Best SEO company in Pune.", 
//     gradient: "from-rose-500 to-pink-600",
//     keywords: "digital marketing Pune, SEO services Pune, Google Ads Pune"
//   },
//   { 
//     icon: <Users className="w-7 h-7" />, 
//     title: "IT Consulting Pune", 
//     desc: "Expert IT consultants in Pune. Digital transformation strategy for Pune's IT parks, manufacturing companies, education institutions & growing startup ecosystem in Hinjawadi.", 
//     gradient: "from-amber-500 to-orange-600",
//     keywords: "IT consulting Pune, technology consultants Pune, digital transformation Pune"
//   },
//   { 
//     icon: <Award className="w-7 h-7" />, 
//     title: "Branding & UI/UX Design Pune", 
//     desc: "Premium branding agency in Pune. Clean, intellectually appealing design systems that match Pune's design-conscious, educated consumer market — from Koregaon Park to Viman Nagar.", 
//     gradient: "from-fuchsia-500 to-pink-600",
//     keywords: "branding agency Pune, UI UX design Pune, graphic design Pune"
//   },
// ];

// const BUSINESS_CATEGORIES = [
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Universities in Pune", keyword: "university website Pune", color: "text-indigo-400" },
//   { icon: <BookOpen className="w-5 h-5" />, label: "Coaching in Deccan", keyword: "coaching website Pune", color: "text-green-400" },
//   { icon: <Cog className="w-5 h-5" />, label: "Auto in Pimpri-Chinchwad", keyword: "automotive website Pune", color: "text-gray-400" },
//   { icon: <Briefcase className="w-5 h-5" />, label: "IT in Hinjawadi", keyword: "IT company website Pune", color: "text-blue-400" },
//   { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in KP", keyword: "restaurant website Pune", color: "text-orange-400" },
//   { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Viman Nagar", keyword: "cafe website Pune", color: "text-amber-400" },
//   { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Koregaon Park", keyword: "hotel website Pune", color: "text-blue-300" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail in Camp Area", keyword: "retail website Pune", color: "text-pink-400" },
//   { icon: <Car className="w-5 h-5" />, label: "Car Dealers in Baner", keyword: "automotive website Pune", color: "text-cyan-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Kothrud", keyword: "hospital website Pune", color: "text-red-400" },
//   { icon: <Plane className="w-5 h-5" />, label: "Travel in Camp", keyword: "travel website Pune", color: "text-sky-400" },
//   { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Aundh", keyword: "fitness website Pune", color: "text-lime-400" },
//   { icon: <Home className="w-5 h-5" />, label: "Real Estate in Wakad", keyword: "real estate website Pune", color: "text-teal-400" },
//   { icon: <Truck className="w-5 h-5" />, label: "Logistics in Pune", keyword: "logistics software Pune", color: "text-yellow-400" },
//   { icon: <Music className="w-5 h-5" />, label: "Wedding in Pune", keyword: "event website Pune", color: "text-rose-400" },
//   { icon: <Landmark className="w-5 h-5" />, label: "Finance in Pune", keyword: "fintech Pune", color: "text-blue-300" },
//   { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands Pune", keyword: "d2c ecommerce Pune", color: "text-emerald-400" },
//   { icon: <Wrench className="w-5 h-5" />, label: "Home Services Pune", keyword: "service business website Pune", color: "text-orange-300" },
//   { icon: <Building2 className="w-5 h-5" />, label: "Co-working in Pune", keyword: "coworking website Pune", color: "text-purple-300" },
//   { icon: <Wifi className="w-5 h-5" />, label: "Startups in Kharadi", keyword: "startup website Pune", color: "text-cyan-300" },
//   { icon: <Camera className="w-5 h-5" />, label: "Photography Pune", keyword: "photography website Pune", color: "text-violet-400" },
//   { icon: <Microscope className="w-5 h-5" />, label: "Research Labs", keyword: "research website Pune", color: "text-purple-400" },
//   { icon: <TreePine className="w-5 h-5" />, label: "Agri in Pune", keyword: "agriculture website Pune", color: "text-green-300" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Yoga in Pune", keyword: "wellness website Pune", color: "text-pink-300" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Bookstores Pune", keyword: "bookstore website Pune", color: "text-yellow-300" },
//   { icon: <Mountain className="w-5 h-5" />, label: "Hill Stations near Pune", keyword: "tourism website Pune", color: "text-emerald-300" },
//   { icon: <Bus className="w-5 h-5" />, label: "Travel in Pune", keyword: "transport website Pune", color: "text-amber-300" },
// ];

// const STATS = [
//   { value: "30+", label: "Pune Projects Delivered", keyword: "Pune software projects" },
//   { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Pune" },
//   { value: "24/7", label: "Local Support Available", keyword: "IT support Pune" },
//   { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Pune reviews" },
// ];

// const TRUST_SIGNALS = [
//   { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
//   { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
//   { icon: <MapPin className="w-5 h-5" />, text: "Pune Presence" },
//   { icon: <Gem className="w-5 h-5" />, text: "Marathi/Hindi/English Support" },
// ];

// const LOCATIONS = [
//   "Koregaon Park", "Viman Nagar", "Kalyani Nagar", "Wanowrie", "Kharadi",
//   "Magarpatta City", "Hadapsar", "Baner", "Balewadi", "Aundh",
//   "Pashan", "Hinjawadi", "Wakad", "Pimple Saudagar", "Pimpri",
//   "Chinchwad", "Bhosari", "Nigdi", "Akurdi", "Ravet",
//   "Deccan Gymkhana", "Shivajinagar", "FC Road", "JM Road", "Camp Area",
//   "Swargate", "Katraj", "Kondhwa", "Undri", "NIBM Road",
//   "Kothrud", "Karve Nagar", "Warje", "Sinhagad Road", "Paud Road"
// ];

// const FAQS = [
//   { 
//     q: "Which is the best software agency in Pune?", 
//     a: "SniperCoders is consistently rated among the top software agencies in Pune. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across Koregaon Park, Hinjawadi, Kothrud, Baner, and the entire Pune metropolitan region." 
//   },
//   { 
//     q: "Can SniperCoders help Pune's manufacturing & automotive companies go digital?", 
//     a: "Yes. Pune is India's automotive and manufacturing hub with the Pimpri-Chinchwad belt and Chakan corridor housing global giants. We build B2B portals, supplier catalogues, parts inventory platforms, vendor management systems and sales dashboards for auto component manufacturers and industrial companies. Our solutions help you connect with OEMs and expand your B2B reach." 
//   },
//   { 
//     q: "Do you build websites for educational institutions in Pune?", 
//     a: "Absolutely. Pune is India's Oxford with over 7 lakh students across hundreds of colleges, universities and coaching institutes. We build admissions portals, virtual tour websites, LMS integrations, student recruitment platforms, alumni networks and placement management systems for Pune's prestigious institutions — from FC Road to Deccan and Kothrud." 
//   },
//   { 
//     q: "How do you approach SEO for Pune startups?", 
//     a: "Pune's startup ecosystem is concentrated around Hinjawadi, Baner, Kharadi and Viman Nagar. We build SEO strategies that target multiple audiences: investor searches (for funding rounds), B2B lead generation (for SaaS companies), talent acquisition (for recruitment), and consumer traffic (for B2C startups). Our Marathi+English approach helps you dominate local search in the Pune market." 
//   },
//   { 
//     q: "Do you support Marathi language content?", 
//     a: "Yes! We create Marathi + English bilingual content that dramatically improves local SEO performance, especially for businesses targeting Pune's wider regional audience including Nashik, Solapur, Kolhapur, and Ahmednagar. Marathi content gives you a significant competitive advantage as most agencies only target English keywords." 
//   },
//   { 
//     q: "Can you build websites for restaurants in Koregaon Park and Baner?", 
//     a: "Yes! Pune's food scene is booming, especially in Koregaon Park, Viman Nagar, Baner, and Kothrud. We build restaurant websites with online ordering integration (Zomato, Swiggy, own platform), table reservation systems, menu displays, and local SEO targeting 'best restaurants in KP' or 'cafés in Baner' to drive footfall and direct orders." 
//   },
//   { 
//     q: "How much does a website cost in Pune?", 
//     a: "A professional business website in Pune typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Camp, Deccan, and across Pune, with enterprise solutions for manufacturing and IT companies." 
//   },
// ];

// // Contact information
// const phoneNumber = "+917006377796";
// const email = "snipercoders25@gmail.com";

// export default function PunePage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-[#04080f] text-white font-sans overflow-x-hidden">

//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section
//         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
//         style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(16,185,129,0.14) 0%, transparent 60%), #04080f" }}
//       >
//         <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
//         <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-indigo-600/15 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-emerald-600/15 blur-[80px] pointer-events-none" />

//         <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }} 
//             animate={{ opacity: 1, scale: 1 }} 
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
//           >
//             <Crown className="w-4 h-4" /> #1 Software Agency in Pune • 30+ Projects Delivered
//           </motion.div>

//           <motion.h1 
//             initial="hidden" animate="show" variants={fadeUp}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Best Software Agency<br />
//             <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
//               in Pune, Maharashtra
//             </span>
//           </motion.h1>

//           <motion.p 
//             custom={1} initial="hidden" animate="show" variants={fadeUp}
//             className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
//           >
//             SniperCoders helps Pune's <strong className="text-indigo-400">startups, colleges, manufacturers, restaurants & IT firms</strong> build a powerful digital presence — from <strong className="text-indigo-400">Hinjawadi's tech park</strong> to <strong className="text-indigo-400">Koregaon Park's vibrant café culture</strong> and <strong className="text-indigo-400">Pimpri-Chinchwad's industrial corridor</strong>. <span className="text-indigo-400">30+ projects • 5★ rated</span>
//           </motion.p>

//           {/* Trust signals */}
//           <motion.div
//             custom={1.5} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {TRUST_SIGNALS.map((signal, i) => (
//               <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
//                 <span className="text-indigo-400">{signal.icon}</span>
//                 {signal.text}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div 
//             custom={2} initial="hidden" animate="show" variants={fadeUp} 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Link href="/contact" 
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Consultation <ChevronRight className="w-5 h-5" />
//             </Link>
//             <a href={`tel:${phoneNumber}`}
//               className="inline-flex items-center gap-2 border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
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
//                 <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">{s.value}</div>
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
//             className="bg-gradient-to-br from-gray-900/80 to-indigo-950/25 border border-indigo-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Pune — India's Oxford Meets Startup Capital
//             </h2>
//             <div className="space-y-4 text-gray-300 leading-relaxed">
//               <p>
//                 <strong className="text-white">Pune</strong> is unique in India — it's simultaneously one of the country's most prestigious education cities, a major automotive and manufacturing hub (<strong className="text-indigo-400">Pimpri-Chinchwad, Chakan</strong>), a booming IT corridor (<strong className="text-indigo-400">Hinjawadi, Magarpatta, Kharadi</strong>) and an increasingly vibrant startup ecosystem (<strong className="text-indigo-400">Baner, Balewadi, Viman Nagar</strong>). With over <strong className="text-indigo-400">7 lakh students</strong> across hundreds of colleges and a rapidly growing tech workforce, Pune's consumer base is young, educated and deeply digital.
//               </p>
//               <p>
//                 Yet many Pune businesses — from <strong className="text-cyan-400">Deccan Gymkhana's heritage shops</strong> to <strong className="text-cyan-400">Camp Area's retail stores</strong> and <strong className="text-cyan-400">Koregaon Park's buzzing restaurant strip</strong> — still lack the digital presence to capture this tech-savvy audience. <strong className="text-white">SniperCoders</strong>, the <strong className="text-indigo-400">best software agency in Pune</strong>, closes that gap with targeted, intelligent digital solutions.
//               </p>
//               <p>
//                 Whether you're a <strong className="text-white">Hinjawadi startup</strong> needing a product website, a <strong className="text-white">Pimpri-Chinchwad auto parts manufacturer</strong> looking to build a B2B portal, a <strong className="text-white">Kothrud coaching centre</strong> wanting to attract students, or a <strong className="text-white">Koregaon Park café</strong> aiming to dominate local food searches — we're Pune's most capable digital partner. <strong className="text-indigo-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
//               Our Services in <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Pune</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Intelligent digital solutions for Pune's diverse blend of education, industry, tech and culture. <strong className="text-indigo-400">Web development, mobile apps, SEO, and more.</strong>
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((svc, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="group relative bg-gray-900/60 border border-gray-800 hover:border-indigo-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.08), transparent)" }} />
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
//                 <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">{svc.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
//                 <p className="text-xs text-indigo-400/70 italic">{svc.keywords}</p>
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
//       <section className="py-20 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Industries We Serve in <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Pune</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               From <strong className="text-indigo-400">Pimpri-Chinchwad auto giants</strong> to <strong className="text-indigo-400">Baner's café culture</strong> and <strong className="text-indigo-400">Kothrud's coaching classes</strong> — SniperCoders serves all of Pune's business universe.
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
//             <p className="text-sm text-gray-500 mb-4">Serving all Pune metropolitan region locations:</p>
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
//               Why Pune Businesses Choose <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">SniperCoders</span>
//             </h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//               Here's what makes us the <strong className="text-indigo-400">preferred digital partner for Pune's most successful businesses</strong>:
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               "Marathi & English bilingual SEO for maximum Pune search coverage",
//               "University & college admissions portal development with LMS integration",
//               "Hinjawadi IT park — startup product websites, investor decks & SaaS platforms",
//               "Auto & manufacturing B2B supplier catalogue platforms for Pimpri-Chinchwad",
//               "Koregaon Park, Viman Nagar & Baner restaurant digital marketing with online ordering",
//               "PCMC (Pimpri-Chinchwad) industrial business websites with lead generation",
//               "Pune real estate landing pages for Wakad, Kharadi, Undri & NIBM Road",
//               "Student-targeted app development for Pune's 7 lakh+ student population",
//               "Coaching class websites for Kothrud, Deccan & FC Road with admission forms",
//               "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
//               "GST invoicing & India-compliant data practices for Maharashtra businesses",
//               "Post-launch support & maintenance with 24/7 availability for critical issues"
//             ].map((item, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-indigo-800/50 transition-all duration-300"
//               >
//                 <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-300 text-sm">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
//               Start Your Project in Pune <ChevronRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL with social proof ───────────────────────── */}
//       <section className="py-12 bg-gradient-to-r from-indigo-900/20 via-blue-900/10 to-indigo-900/20 border-y border-gray-800/50">
//         <div className="container mx-auto px-4 text-center">
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
//           </div>
//           <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
//             "We're an auto parts manufacturer in <strong className="text-indigo-400">Pimpri-Chinchwad</strong>. SniperCoders built our B2B catalogue and within <strong className="text-indigo-400">3 months we had 5 new dealer inquiries</strong> through our website. They understood our industry — from technical specifications to OEM requirements. Superb work and highly recommended for Pune's manufacturing sector."
//           </blockquote>
//           <p className="text-gray-500 mt-4 text-sm">— Manufacturing Business Owner, Pimpri-Chinchwad, Pune</p>
//           <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
//             <span>⭐ 5/5 on Google</span>
//             <span>✅ Verified Client</span>
//             <span>📍 Pimpri-Chinchwad, Pune</span>
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ with long-tail keywords ────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Frequently Asked Questions —{" "}
//               <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Pune</span>
//             </h2>
//             <p className="text-gray-400">Answers to common questions about <strong className="text-indigo-400">software development, website design, and digital marketing in Pune.</strong></p>
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
//             className="relative bg-gradient-to-br from-indigo-900/40 to-blue-900/30 border border-indigo-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 Grow Your Pune Business<br />
//                 <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Smarter & Faster</span>
//               </h2>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 Pune's <strong className="text-white">educated, digital-first consumers</strong> — from <strong className="text-indigo-400">Koregaon Park</strong> to <strong className="text-indigo-400">Hinjawadi</strong>, <strong className="text-indigo-400">Kothrud</strong> to <strong className="text-indigo-400">Viman Nagar</strong> — are searching right now. SniperCoders makes sure they land on your website, not your competitor's.
//               </p>
              
//               {/* Contact cards */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <a href={`tel:${phoneNumber}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-indigo-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Phone className="w-6 h-6 text-indigo-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Call us now</div>
//                     <div className="text-white font-semibold">+91 7006377796</div>
//                   </div>
//                 </a>
//                 <a href={`mailto:${email}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-emerald-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Mail className="w-6 h-6 text-emerald-400" />
//                   <div className="text-left">
//                     <div className="text-xs text-gray-500">Email us</div>
//                     <div className="text-white font-semibold">snipercoders25@gmail.com</div>
//                   </div>
//                 </a>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
//                   Book Free Consultation <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
//                   View Pune Portfolio
//                 </Link>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-400" /> Serving Pune, PCMC, Pimpri-Chinchwad & Pune Metro</span>
//                 <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-400" /> GST Registered • ISO Standards</span>
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








// FILE PATH: app/services/best-software-agency-pune/page.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code, Smartphone, Globe, TrendingUp, Award, Users,
  MapPin, Phone, Mail, ChevronRight, Star, CheckCircle,
  Utensils, Coffee, Car, Hotel, ShoppingBag,
  HeartPulse, Plane, Dumbbell, Camera,
  Briefcase, Home, Truck, Music, Landmark, TreePine,
  Wifi, ShoppingCart, Wrench, Building2,
  Clock, Shield, Crown, BookOpen, Microscope, Cog, Bus, Mountain
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
    title: "Website Development Pune", 
    desc: "Professional website design company in Pune. Modern business websites, ed-tech platforms, startup landing pages & manufacturing company portals tailored for Pune&apos;s educated, tech-forward audience.", 
    gradient: "from-indigo-500 to-blue-600",
    keywords: "website design Pune, web development company Pune, ecommerce website Pune"
  },
  { 
    icon: <Smartphone className="w-7 h-7" />, 
    title: "Mobile App Development Pune", 
    desc: "Top app development agency in Pune. Student-focused apps, automotive parts portals, campus platforms & local services apps built for Pune&apos;s young, mobile-first population.", 
    gradient: "from-emerald-500 to-teal-600",
    keywords: "app development Pune, mobile app developers Pune, student app development Pune"
  },
  { 
    icon: <Code className="w-7 h-7" />, 
    title: "Custom Software Development Pune", 
    desc: "Enterprise software solutions in Pune. Manufacturing ERP, automotive supply chain tools, college management software & enterprise SaaS for Pune&apos;s diverse industrial & academic landscape.", 
    gradient: "from-blue-500 to-cyan-600",
    keywords: "software development Pune, custom software Pune, ERP development Pune"
  },
  { 
    icon: <TrendingUp className="w-7 h-7" />, 
    title: "Digital Marketing Agency Pune", 
    desc: "Rank in Pune for your business category with our Marathi + English SEO, Google Ads and social media campaigns targeting Pune&apos;s young demographics. Best SEO company in Pune.", 
    gradient: "from-rose-500 to-pink-600",
    keywords: "digital marketing Pune, SEO services Pune, Google Ads Pune"
  },
  { 
    icon: <Users className="w-7 h-7" />, 
    title: "IT Consulting Pune", 
    desc: "Expert IT consultants in Pune. Digital transformation strategy for Pune&apos;s IT parks, manufacturing companies, education institutions & growing startup ecosystem in Hinjawadi.", 
    gradient: "from-amber-500 to-orange-600",
    keywords: "IT consulting Pune, technology consultants Pune, digital transformation Pune"
  },
  { 
    icon: <Award className="w-7 h-7" />, 
    title: "Branding & UI/UX Design Pune", 
    desc: "Premium branding agency in Pune. Clean, intellectually appealing design systems that match Pune&apos;s design-conscious, educated consumer market — from Koregaon Park to Viman Nagar.", 
    gradient: "from-fuchsia-500 to-pink-600",
    keywords: "branding agency Pune, UI UX design Pune, graphic design Pune"
  },
];

const BUSINESS_CATEGORIES = [
 
  { icon: <BookOpen className="w-5 h-5" />, label: "Coaching in Deccan", keyword: "coaching website Pune", color: "text-green-400" },
  { icon: <Cog className="w-5 h-5" />, label: "Auto in Pimpri-Chinchwad", keyword: "automotive website Pune", color: "text-gray-400" },
  { icon: <Briefcase className="w-5 h-5" />, label: "IT in Hinjawadi", keyword: "IT company website Pune", color: "text-blue-400" },
  { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in KP", keyword: "restaurant website Pune", color: "text-orange-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Viman Nagar", keyword: "cafe website Pune", color: "text-amber-400" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Koregaon Park", keyword: "hotel website Pune", color: "text-blue-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail in Camp Area", keyword: "retail website Pune", color: "text-pink-400" },
  { icon: <Car className="w-5 h-5" />, label: "Car Dealers in Baner", keyword: "automotive website Pune", color: "text-cyan-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Kothrud", keyword: "hospital website Pune", color: "text-red-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel in Camp", keyword: "travel website Pune", color: "text-sky-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Aundh", keyword: "fitness website Pune", color: "text-lime-400" },
  { icon: <Home className="w-5 h-5" />, label: "Real Estate in Wakad", keyword: "real estate website Pune", color: "text-teal-400" },
  { icon: <Truck className="w-5 h-5" />, label: "Logistics in Pune", keyword: "logistics software Pune", color: "text-yellow-400" },
  { icon: <Music className="w-5 h-5" />, label: "Wedding in Pune", keyword: "event website Pune", color: "text-rose-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "Finance in Pune", keyword: "fintech Pune", color: "text-blue-300" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands Pune", keyword: "d2c ecommerce Pune", color: "text-emerald-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Home Services Pune", keyword: "service business website Pune", color: "text-orange-300" },
  { icon: <Building2 className="w-5 h-5" />, label: "Co-working in Pune", keyword: "coworking website Pune", color: "text-purple-300" },
  { icon: <Wifi className="w-5 h-5" />, label: "Startups in Kharadi", keyword: "startup website Pune", color: "text-cyan-300" },
  { icon: <Camera className="w-5 h-5" />, label: "Photography Pune", keyword: "photography website Pune", color: "text-violet-400" },
  { icon: <Microscope className="w-5 h-5" />, label: "Research Labs", keyword: "research website Pune", color: "text-purple-400" },
  { icon: <TreePine className="w-5 h-5" />, label: "Agri in Pune", keyword: "agriculture website Pune", color: "text-green-300" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Yoga in Pune", keyword: "wellness website Pune", color: "text-pink-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Bookstores Pune", keyword: "bookstore website Pune", color: "text-yellow-300" },
  { icon: <Mountain className="w-5 h-5" />, label: "Hill Stations near Pune", keyword: "tourism website Pune", color: "text-emerald-300" },
  { icon: <Bus className="w-5 h-5" />, label: "Travel in Pune", keyword: "transport website Pune", color: "text-amber-300" },
];

const STATS = [
  { value: "30+", label: "Pune Projects Delivered", keyword: "Pune software projects" },
  { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Pune" },
  { value: "24/7", label: "Local Support Available", keyword: "IT support Pune" },
  { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Pune reviews" },
];

const TRUST_SIGNALS = [
  { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
  { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
  { icon: <MapPin className="w-5 h-5" />, text: "Pune Presence" },
  { icon: <Cog className="w-5 h-5" />, text: "Marathi/Hindi/English Support" },
];

const LOCATIONS = [
  "Koregaon Park", "Viman Nagar", "Kalyani Nagar", "Wanowrie", "Kharadi",
  "Magarpatta City", "Hadapsar", "Baner", "Balewadi", "Aundh",
  "Pashan", "Hinjawadi", "Wakad", "Pimple Saudagar", "Pimpri",
  "Chinchwad", "Bhosari", "Nigdi", "Akurdi", "Ravet",
  "Deccan Gymkhana", "Shivajinagar", "FC Road", "JM Road", "Camp Area",
  "Swargate", "Katraj", "Kondhwa", "Undri", "NIBM Road",
  "Kothrud", "Karve Nagar", "Warje", "Sinhagad Road", "Paud Road"
];

const FAQS = [
  { 
    q: "Which is the best software agency in Pune?", 
    a: "SniperCoders is consistently rated among the top software agencies in Pune. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we&apos;re the preferred choice for businesses across Koregaon Park, Hinjawadi, Kothrud, Baner, and the entire Pune metropolitan region." 
  },
  { 
    q: "Can SniperCoders help Pune&apos;s manufacturing & automotive companies go digital?", 
    a: "Yes. Pune is India&apos;s automotive and manufacturing hub with the Pimpri-Chinchwad belt and Chakan corridor housing global giants. We build B2B portals, supplier catalogues, parts inventory platforms, vendor management systems and sales dashboards for auto component manufacturers and industrial companies. Our solutions help you connect with OEMs and expand your B2B reach." 
  },
  { 
    q: "Do you build websites for educational institutions in Pune?", 
    a: "Absolutely. Pune is India&apos;s Oxford with over 7 lakh students across hundreds of colleges, universities and coaching institutes. We build admissions portals, virtual tour websites, LMS integrations, student recruitment platforms, alumni networks and placement management systems for Pune&apos;s prestigious institutions — from FC Road to Deccan and Kothrud." 
  },
  { 
    q: "How do you approach SEO for Pune startups?", 
    a: "Pune&apos;s startup ecosystem is concentrated around Hinjawadi, Baner, Kharadi and Viman Nagar. We build SEO strategies that target multiple audiences: investor searches (for funding rounds), B2B lead generation (for SaaS companies), talent acquisition (for recruitment), and consumer traffic (for B2C startups). Our Marathi+English approach helps you dominate local search in the Pune market." 
  },
  { 
    q: "Do you support Marathi language content?", 
    a: "Yes! We create Marathi + English bilingual content that dramatically improves local SEO performance, especially for businesses targeting Pune&apos;s wider regional audience including Nashik, Solapur, Kolhapur, and Ahmednagar. Marathi content gives you a significant competitive advantage as most agencies only target English keywords." 
  },
  { 
    q: "Can you build websites for restaurants in Koregaon Park and Baner?", 
    a: "Yes! Pune&apos;s food scene is booming, especially in Koregaon Park, Viman Nagar, Baner, and Kothrud. We build restaurant websites with online ordering integration (Zomato, Swiggy, own platform), table reservation systems, menu displays, and local SEO targeting &apos;best restaurants in KP&apos; or &apos;cafés in Baner&apos; to drive footfall and direct orders." 
  },
  { 
    q: "How much does a website cost in Pune?", 
    a: "A professional business website in Pune typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in Camp, Deccan, and across Pune, with enterprise solutions for manufacturing and IT companies." 
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function PunePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#04080f] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(16,185,129,0.14) 0%, transparent 60%), #04080f" }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-indigo-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-emerald-600/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> #1 Software Agency in Pune • 30+ Projects Delivered
          </motion.div>

          <motion.h1 
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Agency<br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              in Pune, Maharashtra
            </span>
          </motion.h1>

          <motion.p 
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders helps Pune&apos;s <strong className="text-indigo-400">startups, colleges, manufacturers, restaurants & IT firms</strong> build a powerful digital presence — from <strong className="text-indigo-400">Hinjawadi&apos;s tech park</strong> to <strong className="text-indigo-400">Koregaon Park&apos;s vibrant café culture</strong> and <strong className="text-indigo-400">Pimpri-Chinchwad&apos;s industrial corridor</strong>. <span className="text-indigo-400">30+ projects • 5★ rated</span>
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-indigo-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div 
            custom={2} initial="hidden" animate="show" variants={fadeUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm active:scale-95"
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
                <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">{s.value}</div>
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
            className="bg-gradient-to-br from-gray-900/80 to-indigo-950/25 border border-indigo-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Pune — India&apos;s Oxford Meets Startup Capital
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Pune</strong> is unique in India — it&apos;s simultaneously one of the country&apos;s most prestigious education cities, a major automotive and manufacturing hub (<strong className="text-indigo-400">Pimpri-Chinchwad, Chakan</strong>), a booming IT corridor (<strong className="text-indigo-400">Hinjawadi, Magarpatta, Kharadi</strong>) and an increasingly vibrant startup ecosystem (<strong className="text-indigo-400">Baner, Balewadi, Viman Nagar</strong>). With over <strong className="text-indigo-400">7 lakh students</strong> across hundreds of colleges and a rapidly growing tech workforce, Pune&apos;s consumer base is young, educated and deeply digital.
              </p>
              <p>
                Yet many Pune businesses — from <strong className="text-cyan-400">Deccan Gymkhana&apos;s heritage shops</strong> to <strong className="text-cyan-400">Camp Area&apos;s retail stores</strong> and <strong className="text-cyan-400">Koregaon Park&apos;s buzzing restaurant strip</strong> — still lack the digital presence to capture this tech-savvy audience. <strong className="text-white">SniperCoders</strong>, the <strong className="text-indigo-400">best software agency in Pune</strong>, closes that gap with targeted, intelligent digital solutions.
              </p>
              <p>
                Whether you&apos;re a <strong className="text-white">Hinjawadi startup</strong> needing a product website, a <strong className="text-white">Pimpri-Chinchwad auto parts manufacturer</strong> looking to build a B2B portal, a <strong className="text-white">Kothrud coaching centre</strong> wanting to attract students, or a <strong className="text-white">Koregaon Park café</strong> aiming to dominate local food searches — we&apos;re Pune&apos;s most capable digital partner. <strong className="text-indigo-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
              Our Services in <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Pune</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Intelligent digital solutions for Pune&apos;s diverse blend of education, industry, tech and culture. <strong className="text-indigo-400">Web development, mobile apps, SEO, and more.</strong>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-indigo-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
                <p className="text-xs text-indigo-400/70 italic">{svc.keywords}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Pune</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From <strong className="text-indigo-400">Pimpri-Chinchwad auto giants</strong> to <strong className="text-indigo-400">Baner&apos;s café culture</strong> and <strong className="text-indigo-400">Kothrud&apos;s coaching classes</strong> — SniperCoders serves all of Pune&apos;s business universe.
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
            <p className="text-sm text-gray-500 mb-4">Serving all Pune metropolitan region locations:</p>
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
              Why Pune Businesses Choose <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">SniperCoders</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s what makes us the <strong className="text-indigo-400">preferred digital partner for Pune&apos;s most successful businesses</strong>:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Marathi & English bilingual SEO for maximum Pune search coverage",
              "University & college admissions portal development with LMS integration",
              "Hinjawadi IT park — startup product websites, investor decks & SaaS platforms",
              "Auto & manufacturing B2B supplier catalogue platforms for Pimpri-Chinchwad",
              "Koregaon Park, Viman Nagar & Baner restaurant digital marketing with online ordering",
              "PCMC (Pimpri-Chinchwad) industrial business websites with lead generation",
              "Pune real estate landing pages for Wakad, Kharadi, Undri & NIBM Road",
              "Student-targeted app development for Pune&apos;s 7 lakh+ student population",
              "Coaching class websites for Kothrud, Deccan & FC Road with admission forms",
              "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
              "GST invoicing & India-compliant data practices for Maharashtra businesses",
              "Post-launch support & maintenance with 24/7 availability for critical issues"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-indigo-800/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
              Start Your Project in Pune <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL with social proof ───────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-indigo-900/20 via-blue-900/10 to-indigo-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
            &ldquo;We&apos;re an auto parts manufacturer in <strong className="text-indigo-400">Pimpri-Chinchwad</strong>. SniperCoders built our B2B catalogue and within <strong className="text-indigo-400">3 months we had 5 new dealer inquiries</strong> through our website. They understood our industry — from technical specifications to OEM requirements. Superb work and highly recommended for Pune&apos;s manufacturing sector.&rdquo;
          </blockquote>
          <p className="text-gray-500 mt-4 text-sm">— Manufacturing Business Owner, Pimpri-Chinchwad, Pune</p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
            <span>⭐ 5/5 on Google</span>
            <span>✅ Verified Client</span>
            <span>📍 Pimpri-Chinchwad, Pune</span>
          </div>
        </div>
      </section>

      {/* ── FAQ with long-tail keywords ────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions —{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Pune</span>
            </h2>
            <p className="text-gray-400">Answers to common questions about <strong className="text-indigo-400">software development, website design, and digital marketing in Pune.</strong></p>
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
            className="relative bg-gradient-to-br from-indigo-900/40 to-blue-900/30 border border-indigo-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Grow Your Pune Business<br />
                <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Smarter & Faster</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Pune&apos;s <strong className="text-white">educated, digital-first consumers</strong> — from <strong className="text-indigo-400">Koregaon Park</strong> to <strong className="text-indigo-400">Hinjawadi</strong>, <strong className="text-indigo-400">Kothrud</strong> to <strong className="text-indigo-400">Viman Nagar</strong> — are searching right now. SniperCoders makes sure they land on your website, not your competitor&apos;s.
              </p>
              
              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-indigo-500 rounded-xl px-6 py-4 transition-all duration-300 active:scale-95"
                >
                  <Phone className="w-6 h-6 text-indigo-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Call us now</div>
                    <div className="text-white font-semibold">+91 7006377796</div>
                  </div>
                </a>
                <a href={`mailto:${email}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-emerald-500 rounded-xl px-6 py-4 transition-all duration-300 active:scale-95"
                >
                  <Mail className="w-6 h-6 text-emerald-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Email us</div>
                    <div className="text-white font-semibold">snipercoders25@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase" className="inline-flex items-center gap-2 border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 active:scale-95">
                  View Pune Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-400" /> Serving Pune, PCMC, Pimpri-Chinchwad & Pune Metro</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-400" /> GST Registered • ISO Standards</span>
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