

// // FILE PATH: app/services/best-software-agency-chennai/page.tsx

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
//   Ship, Warehouse, Car as CarIcon, HardHat
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
//     title: "Website Development Chennai", 
//     desc: "Professional website design company in Chennai. Enterprise websites, automotive manufacturer portals, IT services pages & eCommerce platforms built for Chennai's disciplined, results-focused business culture.", 
//     gradient: "from-yellow-500 to-orange-600",
//     keywords: "website design Chennai, web development company Chennai, ecommerce website Chennai"
//   },
//   { 
//     icon: <Smartphone className="w-7 h-7" />, 
//     title: "Mobile App Development Chennai", 
//     desc: "Top app development agency in Chennai. Tamil-first apps, auto sector digital tools, healthcare apps & enterprise mobility solutions built for Chennai's large, smartphone-driven workforce.", 
//     gradient: "from-violet-500 to-purple-700",
//     keywords: "app development Chennai, mobile app developers Chennai, iOS app development Chennai"
//   },
//   { 
//     icon: <Code className="w-7 h-7" />, 
//     title: "Custom Software Development Chennai", 
//     desc: "Enterprise software solutions in Chennai. Automotive ERP, manufacturing MES, shipping & port logistics software & healthcare platforms for Chennai's industrial giants and growing tech sector.", 
//     gradient: "from-blue-500 to-cyan-600",
//     keywords: "software development Chennai, custom software Chennai, ERP development Chennai"
//   },
//   { 
//     icon: <TrendingUp className="w-7 h-7" />, 
//     title: "Digital Marketing Agency Chennai", 
//     desc: "Dominate Tamil + English search in Chennai with our localised SEO, Google Ads and culturally precise social media marketing campaigns. Best SEO company in Chennai.", 
//     gradient: "from-rose-500 to-pink-600",
//     keywords: "digital marketing Chennai, SEO services Chennai, Google Ads Chennai"
//   },
//   { 
//     icon: <Users className="w-7 h-7" />, 
//     title: "IT Consulting Chennai", 
//     desc: "Expert IT consultants in Chennai. Technology strategy for Chennai's automobile majors, IT services companies, healthcare providers & government agencies in this disciplined, growth-first city.", 
//     gradient: "from-emerald-500 to-teal-600",
//     keywords: "IT consulting Chennai, technology consultants Chennai, digital transformation Chennai"
//   },
//   { 
//     icon: <Award className="w-7 h-7" />, 
//     title: "Branding & UI/UX Design Chennai", 
//     desc: "Premium branding agency in Chennai. Precise, elegant design systems for Chennai's conservative-yet-modern business culture — functional, trustworthy and conversion-optimised.", 
//     gradient: "from-fuchsia-500 to-pink-600",
//     keywords: "branding agency Chennai, UI UX design Chennai, graphic design Chennai"
//   },
// ];

// const BUSINESS_CATEGORIES = [
//   { icon: <Factory className="w-5 h-5" />, label: "Auto in Sriperumbudur", keyword: "automotive website Chennai", color: "text-yellow-400" },
//   { icon: <Briefcase className="w-5 h-5" />, label: "IT in OMR Corridor", keyword: "IT company website Chennai", color: "text-blue-400" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Kilpauk", keyword: "hospital website Chennai", color: "text-red-400" },
//   { icon: <Ship className="w-5 h-5" />, label: "Shipping in Chennai Port", keyword: "logistics software Chennai", color: "text-orange-400" },
//   { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in T Nagar", keyword: "restaurant website Chennai", color: "text-amber-400" },
//   { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Besant Nagar", keyword: "cafe website Chennai", color: "text-yellow-300" },
//   { icon: <Hotel className="w-5 h-5" />, label: "Hotels in ECR", keyword: "hotel website design Chennai", color: "text-blue-300" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Sarees in Mylapore", keyword: "ecommerce website Chennai", color: "text-pink-400" },
//   { icon: <CarIcon className="w-5 h-5" />, label: "Car Dealers", keyword: "automotive website Chennai", color: "text-cyan-400" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Adyar", keyword: "school website Chennai", color: "text-green-400" },
//   { icon: <Plane className="w-5 h-5" />, label: "Travel in Nungambakkam", keyword: "travel website Chennai", color: "text-sky-400" },
//   { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Anna Nagar", keyword: "fitness website Chennai", color: "text-lime-400" },
//   { icon: <Home className="w-5 h-5" />, label: "Real Estate in OMR", keyword: "real estate website Chennai", color: "text-teal-400" },
//   { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", keyword: "event website Chennai", color: "text-rose-400" },
//   { icon: <Landmark className="w-5 h-5" />, label: "Finance in George Town", keyword: "fintech Chennai", color: "text-indigo-400" },
//   { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands", keyword: "d2c ecommerce Chennai", color: "text-emerald-400" },
//   { icon: <Wrench className="w-5 h-5" />, label: "Home Services", keyword: "service business website Chennai", color: "text-orange-300" },
//   { icon: <Building2 className="w-5 h-5" />, label: "Textile Mills", keyword: "textile website Chennai", color: "text-purple-300" },
//   { icon: <HardHat className="w-5 h-5" />, label: "Construction", keyword: "construction website Chennai", color: "text-cyan-300" },
//   { icon: <Camera className="w-5 h-5" />, label: "Photography Studios", keyword: "photography website Chennai", color: "text-violet-400" },
//   { icon: <TreePine className="w-5 h-5" />, label: "Fisheries", keyword: "marine business website Chennai", color: "text-green-300" },
//   { icon: <HeartPulse className="w-5 h-5" />, label: "Clinics in Velachery", keyword: "clinic website Chennai", color: "text-pink-300" },
//   { icon: <GraduationCap className="w-5 h-5" />, label: "Ed-Tech in Guindy", keyword: "education website Chennai", color: "text-lime-300" },
//   { icon: <ShoppingBag className="w-5 h-5" />, label: "Jewellery in T Nagar", keyword: "jewellery website Chennai", color: "text-yellow-300" },
// ];

// const STATS = [
//   { value: "30+", label: "Chennai Projects Delivered", keyword: "Chennai software projects" },
//   { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Chennai" },
//   { value: "24/7", label: "Local Support Available", keyword: "IT support Chennai" },
//   { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Chennai reviews" },
// ];

// const TRUST_SIGNALS = [
//   { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
//   { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
//   { icon: <MapPin className="w-5 h-5" />, text: "Local Chennai Presence" },
//   { icon: <Gem className="w-5 h-5" />, text: "Tamil/English Bilingual Support" },
// ];

// const LOCATIONS = [
//   "T Nagar", "Mylapore", "Anna Nagar", "Adyar", "Besant Nagar", "Velachery",
//   "OMR", "Old Mahabalipuram Road", "Guindy", "Tambaram", "Ambattur",
//   "Sriperumbudur", "Poonamallee", "Porur", "Vadapalani", "Nungambakkam",
//   "Kilpauk", "Egmore", "George Town", "Sowcarpet", "ECR", "Sholinganallur",
//   "Perumbakkam", "Siruseri", "Kelambakkam", "Thoraipakkam", "Karumandapam"
// ];

// const FAQS = [
//   { 
//     q: "Which is the best software agency in Chennai?", 
//     a: "SniperCoders is consistently rated among the top software agencies in Chennai. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across T Nagar, OMR Corridor, Anna Nagar, and Sriperumbudur industrial belt." 
//   },
//   { 
//     q: "Can SniperCoders help Chennai's automotive & manufacturing businesses go digital?", 
//     a: "Absolutely. Chennai is India's 'Detroit of Asia' with Hyundai, Ford, BMW, Renault and dozens of Tier-1 suppliers in Sriperumbudur and Oragadam. We build supplier portals, dealer management websites, parts catalogue systems and B2B platforms for this sector. Our team understands the specific compliance and integration needs of automotive manufacturing." 
//   },
//   { 
//     q: "Do you provide Tamil language SEO and content?", 
//     a: "Yes. Tamil-language SEO is a massive untapped opportunity in Chennai — most competitors only target English keywords. We create Tamil + English bilingual strategies that open up far larger local search audiences for your business. From T Nagar retailers to Mylapore service providers, we help you connect with Tamil-speaking customers who prefer searching in their mother tongue." 
//   },
//   { 
//     q: "What experience do you have with Chennai's IT and BPO sector?", 
//     a: "We've built recruitment websites, employee portals, client-facing service pages and digital marketing campaigns for IT and BPO companies. Chennai's OMR corridor and Tidel Park ecosystem are specific areas of focus for us. We understand the B2B SaaS landscape and help IT companies generate qualified leads through targeted content and SEO." 
//   },
//   { 
//     q: "How do you approach Chennai's real estate digital marketing?", 
//     a: "Chennai real estate is booming — Sholinganallur, Perumbakkam, Siruseri and Kelambakkam are growth corridors. We build lead-capture websites, map-integrated listings, Google Ads campaigns and WhatsApp follow-up systems specifically for Chennai property developers. Our portals are designed to convert OMR's IT professionals into qualified home buyers." 
//   },
//   { 
//     q: "How much does a website cost in Chennai?", 
//     a: "A professional business website in Chennai typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in T Nagar, Anna Nagar, Adyar, and across Chennai." 
//   },
// ];

// // Contact information
// const phoneNumber = "+917006377796";
// const email = "snipercoders25@gmail.com";

// export default function ChennaiPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-[#100a00] text-white font-sans overflow-x-hidden">

//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section
//         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
//         style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(234,179,8,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(249,115,22,0.14) 0%, transparent 60%), #100a00" }}
//       >
//         <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
//         <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-yellow-600/15 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-orange-600/15 blur-[80px] pointer-events-none" />

//         <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }} 
//             animate={{ opacity: 1, scale: 1 }} 
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
//           >
//             <Crown className="w-4 h-4" /> #1 Software Agency in Chennai • 30+ Projects Delivered
//           </motion.div>

//           <motion.h1 
//             initial="hidden" animate="show" variants={fadeUp}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Best Software Agency<br />
//             <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
//               in Chennai, Tamil Nadu
//             </span>
//           </motion.h1>

//           <motion.p 
//             custom={1} initial="hidden" animate="show" variants={fadeUp}
//             className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
//           >
//             SniperCoders helps Chennai's <strong className="text-yellow-400">automotive giants, IT firms, healthcare providers, temples & traders</strong> build powerful digital presences that bring real customers — from <strong className="text-yellow-400">T. Nagar to OMR's tech corridor</strong>. <span className="text-yellow-400">30+ projects • 5★ rated</span>
//           </motion.p>

//           {/* Trust signals */}
//           <motion.div
//             custom={1.5} initial="hidden" animate="show" variants={fadeUp}
//             className="flex flex-wrap justify-center gap-4 mb-8"
//           >
//             {TRUST_SIGNALS.map((signal, i) => (
//               <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
//                 <span className="text-yellow-400">{signal.icon}</span>
//                 {signal.text}
//               </div>
//             ))}
//           </motion.div>

//           <motion.div 
//             custom={2} initial="hidden" animate="show" variants={fadeUp} 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Link href="/contact" 
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
//             >
//               Get Free Consultation <ChevronRight className="w-5 h-5" />
//             </Link>
//             <a href={`tel:${phoneNumber}`}
//               className="inline-flex items-center gap-2 border border-gray-600 hover:border-yellow-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
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
//                 <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">{s.value}</div>
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
//             className="bg-gradient-to-br from-gray-900/80 to-yellow-950/20 border border-yellow-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Chennai — South India's Industrial Powerhouse Goes Digital
//             </h2>
//             <div className="space-y-4 text-gray-300 leading-relaxed">
//               <p>
//                 <strong className="text-white">Chennai</strong> is India's fourth-largest city and the gateway to South India's economy. Known as the <strong className="text-yellow-400">"Detroit of Asia"</strong> for its massive automotive sector in <strong className="text-cyan-400">Sriperumbudur and Oragadam</strong>, home to India's second-largest IT corridor along <strong className="text-cyan-400">OMR and Old Mahabalipuram Road</strong>, and a heritage city of deep Dravidian cultural pride — Chennai is a city of substance and serious commerce.
//               </p>
//               <p>
//                 Yet for all its economic muscle, Chennai's digital adoption among traditional businesses — from <strong className="text-white">Mylapore's silk saree shops</strong> to <strong className="text-white">Sowcarpet's wholesale traders</strong> and <strong className="text-white">Anna Salai's commercial establishments</strong> — is still catching up. This is your competitive window. <strong className="text-white">SniperCoders</strong>, the <strong className="text-yellow-400">best software agency in Chennai</strong>, helps you seize it with world-class, locally-tuned digital solutions across <strong className="text-yellow-400">T Nagar, Adyar, Velachery, Ambattur, and Tambaram</strong>.
//               </p>
//               <p>
//                 <strong className="text-cyan-400">Tamil-first SEO, automotive supplier portals, healthcare appointment systems, temple trust websites, jewellery eCommerce</strong> — we speak Chennai's digital language fluently. <strong className="text-yellow-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
//               Our Services in <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Chennai</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Reliable, precise digital solutions built for Chennai's performance-driven, traditional-yet-modern business culture. <strong className="text-yellow-400">Web development, mobile apps, SEO, and more.</strong>
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((svc, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="group relative bg-gray-900/60 border border-gray-800 hover:border-yellow-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(234,179,8,0.08), transparent)" }} />
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
//                 <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors">{svc.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
//                 <p className="text-xs text-yellow-400/70 italic">{svc.keywords}</p>
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
//       <section className="py-20 bg-gradient-to-b from-transparent via-yellow-950/10 to-transparent">
//         <div className="container mx-auto px-4">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
//             <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Industries We Serve in <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Chennai</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               From <strong className="text-yellow-400">Sriperumbudur auto plants</strong> to <strong className="text-yellow-400">T. Nagar jewellery stores</strong> and <strong className="text-yellow-400">OMR IT corridors</strong> — every Chennai business category deserves to be found online.
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
//             <p className="text-sm text-gray-500 mb-4">Serving all Chennai locations:</p>
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
//               Why Chennai Businesses Trust <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">SniperCoders</span>
//             </h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//               Here's what makes us the <strong className="text-yellow-400">preferred digital partner for Chennai's most successful businesses</strong>:
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               "Tamil & English bilingual SEO for dominant local search coverage across Chennai",
//               "Automotive & manufacturing supplier portal development for Sriperumbudur & Oragadam",
//               "OMR IT corridor — startup websites & SaaS product pages for Tidel Park & Ascendas",
//               "T. Nagar & Pondy Bazaar retail & jewellery eCommerce with Tamil language support",
//               "Temple trust & religious institution websites for Mylapore & Triplicane",
//               "Healthcare appointment booking & patient management systems for Kilpauk & Porur clinics",
//               "Chennai port & shipping logistics digital platforms for Kattupalli & Ennore",
//               "Tamilnadu government e-tender compliant website architecture for MSMEs",
//               "Real estate portals for Sholinganallur, Perumbakkam & ECR property developers",
//               "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
//               "GST invoicing & India-compliant data practices for Tamil Nadu businesses",
//               "Post-launch support & maintenance with 24/7 availability for critical issues"
//             ].map((item, i) => (
//               <motion.div 
//                 key={i} 
//                 custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//                 className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-yellow-800/50 transition-all duration-300"
//               >
//                 <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
//                 <span className="text-gray-300 text-sm">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link href="/contact" 
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
//             >
//               Start Your Project in Chennai <ChevronRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIAL STRIP with social proof ─────────────────── */}
//       <section className="py-12 bg-gradient-to-r from-yellow-900/20 via-orange-900/10 to-yellow-900/20 border-y border-gray-800/50">
//         <div className="container mx-auto px-4 text-center">
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
//           </div>
//           <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
//             "Our jewellery shop in <strong className="text-yellow-400">T. Nagar</strong> now gets online orders from across Tamil Nadu after SniperCoders built our eCommerce website and did Tamil SEO. The ROI has been incredible — we're getting customers from Madurai, Coimbatore, and even Chennai's NRI community. <strong className="text-yellow-400">Best software agency in Chennai</strong> by far."
//           </blockquote>
//           <p className="text-gray-500 mt-4 text-sm">— Jewellery Store Owner, T. Nagar, Chennai</p>
//           <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
//             <span>⭐ 5/5 on Google</span>
//             <span>✅ Verified Client</span>
//             <span>📍 T. Nagar, Chennai</span>
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ with long-tail keywords ────────────────────────── */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//               Frequently Asked Questions —{" "}
//               <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Chennai</span>
//             </h2>
//             <p className="text-gray-400">Answers to common questions about <strong className="text-yellow-400">software development, website design, and digital marketing in Chennai.</strong></p>
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
//             className="relative bg-gradient-to-br from-yellow-900/35 to-orange-900/25 border border-yellow-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                 Make Chennai Find<br />
//                 <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Your Business First</span>
//               </h2>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 Chennai's <strong className="text-white">90 lakh+ consumers</strong> search Google in Tamil and English every day. From <strong className="text-yellow-400">T Nagar to OMR, Mylapore to Sriperumbudur</strong> — SniperCoders puts your business at the top of both.
//               </p>
              
//               {/* Contact cards */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <a href={`tel:${phoneNumber}`}
//                   className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-yellow-500 rounded-xl px-6 py-4 transition-all duration-300"
//                 >
//                   <Phone className="w-6 h-6 text-yellow-400" />
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
//                 <Link href="/contact" 
//                   className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
//                 >
//                   Book Free Consultation <ChevronRight className="w-5 h-5" />
//                 </Link>
//                 <Link href="/showcase" 
//                   className="inline-flex items-center gap-2 border border-gray-600 hover:border-yellow-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300"
//                 >
//                   View Chennai Portfolio
//                 </Link>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
//                 <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-yellow-400" /> Serving Chennai, Tambaram, Ambattur & Greater Chennai</span>
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






// FILE PATH: app/services/best-software-agency-chennai/page.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code, Smartphone, Globe, TrendingUp, Award, Users,
  MapPin, Phone, Mail, ChevronRight, Star, CheckCircle,
  Utensils, Coffee, Car, Hotel, ShoppingBag,
  GraduationCap, HeartPulse, Plane, Dumbbell, Camera,
  Briefcase, Home, Music, Landmark, TreePine,
  ShoppingCart, Wrench, Factory, Building2,
  Clock, Shield, Crown, Gem,
  Ship, HardHat
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
    title: "Website Development Chennai", 
    desc: "Professional website design company in Chennai. Enterprise websites, automotive manufacturer portals, IT services pages & eCommerce platforms built for Chennai's disciplined, results-focused business culture.", 
    gradient: "from-yellow-500 to-orange-600",
    keywords: "website design Chennai, web development company Chennai, ecommerce website Chennai"
  },
  { 
    icon: <Smartphone className="w-7 h-7" />, 
    title: "Mobile App Development Chennai", 
    desc: "Top app development agency in Chennai. Tamil-first apps, auto sector digital tools, healthcare apps & enterprise mobility solutions built for Chennai's large, smartphone-driven workforce.", 
    gradient: "from-violet-500 to-purple-700",
    keywords: "app development Chennai, mobile app developers Chennai, iOS app development Chennai"
  },
  { 
    icon: <Code className="w-7 h-7" />, 
    title: "Custom Software Development Chennai", 
    desc: "Enterprise software solutions in Chennai. Automotive ERP, manufacturing MES, shipping & port logistics software & healthcare platforms for Chennai's industrial giants and growing tech sector.", 
    gradient: "from-blue-500 to-cyan-600",
    keywords: "software development Chennai, custom software Chennai, ERP development Chennai"
  },
  { 
    icon: <TrendingUp className="w-7 h-7" />, 
    title: "Digital Marketing Agency Chennai", 
    desc: "Dominate Tamil + English search in Chennai with our localised SEO, Google Ads and culturally precise social media marketing campaigns. Best SEO company in Chennai.", 
    gradient: "from-rose-500 to-pink-600",
    keywords: "digital marketing Chennai, SEO services Chennai, Google Ads Chennai"
  },
  { 
    icon: <Users className="w-7 h-7" />, 
    title: "IT Consulting Chennai", 
    desc: "Expert IT consultants in Chennai. Technology strategy for Chennai's automobile majors, IT services companies, healthcare providers & government agencies in this disciplined, growth-first city.", 
    gradient: "from-emerald-500 to-teal-600",
    keywords: "IT consulting Chennai, technology consultants Chennai, digital transformation Chennai"
  },
  { 
    icon: <Award className="w-7 h-7" />, 
    title: "Branding & UI/UX Design Chennai", 
    desc: "Premium branding agency in Chennai. Precise, elegant design systems for Chennai's conservative-yet-modern business culture — functional, trustworthy and conversion-optimised.", 
    gradient: "from-fuchsia-500 to-pink-600",
    keywords: "branding agency Chennai, UI UX design Chennai, graphic design Chennai"
  },
];

const BUSINESS_CATEGORIES = [
  { icon: <Factory className="w-5 h-5" />, label: "Auto in Sriperumbudur", keyword: "automotive website Chennai", color: "text-yellow-400" },
  { icon: <Briefcase className="w-5 h-5" />, label: "IT in OMR Corridor", keyword: "IT company website Chennai", color: "text-blue-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Kilpauk", keyword: "hospital website Chennai", color: "text-red-400" },
  { icon: <Ship className="w-5 h-5" />, label: "Shipping in Chennai Port", keyword: "logistics software Chennai", color: "text-orange-400" },
  { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in T Nagar", keyword: "restaurant website Chennai", color: "text-amber-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Besant Nagar", keyword: "cafe website Chennai", color: "text-yellow-300" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in ECR", keyword: "hotel website design Chennai", color: "text-blue-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Sarees in Mylapore", keyword: "ecommerce website Chennai", color: "text-pink-400" },
  { icon: <Car className="w-5 h-5" />, label: "Car Dealers", keyword: "automotive website Chennai", color: "text-cyan-400" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Adyar", keyword: "school website Chennai", color: "text-green-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel in Nungambakkam", keyword: "travel website Chennai", color: "text-sky-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Anna Nagar", keyword: "fitness website Chennai", color: "text-lime-400" },
  { icon: <Home className="w-5 h-5" />, label: "Real Estate in OMR", keyword: "real estate website Chennai", color: "text-teal-400" },
  { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", keyword: "event website Chennai", color: "text-rose-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "Finance in George Town", keyword: "fintech Chennai", color: "text-indigo-400" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands", keyword: "d2c ecommerce Chennai", color: "text-emerald-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Home Services", keyword: "service business website Chennai", color: "text-orange-300" },
  { icon: <Building2 className="w-5 h-5" />, label: "Textile Mills", keyword: "textile website Chennai", color: "text-purple-300" },
  { icon: <HardHat className="w-5 h-5" />, label: "Construction", keyword: "construction website Chennai", color: "text-cyan-300" },
  { icon: <Camera className="w-5 h-5" />, label: "Photography Studios", keyword: "photography website Chennai", color: "text-violet-400" },
  { icon: <TreePine className="w-5 h-5" />, label: "Fisheries", keyword: "marine business website Chennai", color: "text-green-300" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Clinics in Velachery", keyword: "clinic website Chennai", color: "text-pink-300" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Ed-Tech in Guindy", keyword: "education website Chennai", color: "text-lime-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Jewellery in T Nagar", keyword: "jewellery website Chennai", color: "text-yellow-300" },
];

const STATS = [
  { value: "30+", label: "Chennai Projects Delivered", keyword: "Chennai software projects" },
  { value: "100%", label: "Client Satisfaction Rate", keyword: "client satisfaction Chennai" },
  { value: "24/7", label: "Local Support Available", keyword: "IT support Chennai" },
  { value: "5★", label: "Google Reviews Rating", keyword: "best software agency Chennai reviews" },
];

const TRUST_SIGNALS = [
  { icon: <Shield className="w-5 h-5" />, text: "GST Registered Company" },
  { icon: <Clock className="w-5 h-5" />, text: "IST Timezone Alignment" },
  { icon: <MapPin className="w-5 h-5" />, text: "Local Chennai Presence" },
  { icon: <Gem className="w-5 h-5" />, text: "Tamil/English Bilingual Support" },
];

const LOCATIONS = [
  "T Nagar", "Mylapore", "Anna Nagar", "Adyar", "Besant Nagar", "Velachery",
  "OMR", "Old Mahabalipuram Road", "Guindy", "Tambaram", "Ambattur",
  "Sriperumbudur", "Poonamallee", "Porur", "Vadapalani", "Nungambakkam",
  "Kilpauk", "Egmore", "George Town", "Sowcarpet", "ECR", "Sholinganallur",
  "Perumbakkam", "Siruseri", "Kelambakkam", "Thoraipakkam", "Karumandapam"
];

const FAQS = [
  { 
    q: "Which is the best software agency in Chennai?", 
    a: "SniperCoders is consistently rated among the top software agencies in Chennai. With 30+ successful projects, 5-star Google reviews, and expertise across web development, mobile apps, and digital marketing, we're the preferred choice for businesses across T Nagar, OMR Corridor, Anna Nagar, and Sriperumbudur industrial belt." 
  },
  { 
    q: "Can SniperCoders help Chennai's automotive & manufacturing businesses go digital?", 
    a: "Absolutely. Chennai is India's 'Detroit of Asia' with Hyundai, Ford, BMW, Renault and dozens of Tier-1 suppliers in Sriperumbudur and Oragadam. We build supplier portals, dealer management websites, parts catalogue systems and B2B platforms for this sector. Our team understands the specific compliance and integration needs of automotive manufacturing." 
  },
  { 
    q: "Do you provide Tamil language SEO and content?", 
    a: "Yes. Tamil-language SEO is a massive untapped opportunity in Chennai — most competitors only target English keywords. We create Tamil + English bilingual strategies that open up far larger local search audiences for your business. From T Nagar retailers to Mylapore service providers, we help you connect with Tamil-speaking customers who prefer searching in their mother tongue." 
  },
  { 
    q: "What experience do you have with Chennai's IT and BPO sector?", 
    a: "We've built recruitment websites, employee portals, client-facing service pages and digital marketing campaigns for IT and BPO companies. Chennai's OMR corridor and Tidel Park ecosystem are specific areas of focus for us. We understand the B2B SaaS landscape and help IT companies generate qualified leads through targeted content and SEO." 
  },
  { 
    q: "How do you approach Chennai's real estate digital marketing?", 
    a: "Chennai real estate is booming — Sholinganallur, Perumbakkam, Siruseri and Kelambakkam are growth corridors. We build lead-capture websites, map-integrated listings, Google Ads campaigns and WhatsApp follow-up systems specifically for Chennai property developers. Our portals are designed to convert OMR's IT professionals into qualified home buyers." 
  },
  { 
    q: "How much does a website cost in Chennai?", 
    a: "A professional business website in Chennai typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. SniperCoders offers transparent pricing with no hidden charges. We provide affordable website design packages for small businesses in T Nagar, Anna Nagar, Adyar, and across Chennai." 
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function ChennaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#100a00] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(234,179,8,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(249,115,22,0.14) 0%, transparent 60%), #100a00" }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-yellow-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-orange-600/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> #1 Software Agency in Chennai • 30+ Projects Delivered
          </motion.div>

          <motion.h1 
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Best Software Agency<br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              in Chennai, Tamil Nadu
            </span>
          </motion.h1>

          <motion.p 
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders helps Chennai&apos;s <strong className="text-yellow-400">automotive giants, IT firms, healthcare providers, temples &amp; traders</strong> build powerful digital presences that bring real customers — from <strong className="text-yellow-400">T. Nagar to OMR&apos;s tech corridor</strong>. <span className="text-yellow-400">30+ projects • 5★ rated</span>
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-yellow-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div 
            custom={2} initial="hidden" animate="show" variants={fadeUp} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-yellow-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
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
                <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">{s.value}</div>
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
            className="bg-gradient-to-br from-gray-900/80 to-yellow-950/20 border border-yellow-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Chennai — South India&apos;s Industrial Powerhouse Goes Digital
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Chennai</strong> is India&apos;s fourth-largest city and the gateway to South India&apos;s economy. Known as the <strong className="text-yellow-400">&ldquo;Detroit of Asia&rdquo;</strong> for its massive automotive sector in <strong className="text-yellow-400">Sriperumbudur and Oragadam</strong>, home to India&apos;s second-largest IT corridor along <strong className="text-yellow-400">OMR and Old Mahabalipuram Road</strong>, and a heritage city of deep Dravidian cultural pride — Chennai is a city of substance and serious commerce.
              </p>
              <p>
                Yet for all its economic muscle, Chennai&apos;s digital adoption among traditional businesses — from <strong className="text-white">Mylapore&apos;s silk saree shops</strong> to <strong className="text-white">Sowcarpet&apos;s wholesale traders</strong> and <strong className="text-white">Anna Salai&apos;s commercial establishments</strong> — is still catching up. This is your competitive window. <strong className="text-white">SniperCoders</strong>, the <strong className="text-yellow-400">best software agency in Chennai</strong>, helps you seize it with world-class, locally-tuned digital solutions across <strong className="text-yellow-400">T Nagar, Adyar, Velachery, Ambattur, and Tambaram</strong>.
              </p>
              <p>
                <strong className="text-yellow-400">Tamil-first SEO, automotive supplier portals, healthcare appointment systems, temple trust websites, jewellery eCommerce</strong> — we speak Chennai&apos;s digital language fluently. <strong className="text-yellow-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
              Our Services in <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Chennai</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Reliable, precise digital solutions built for Chennai&apos;s performance-driven, traditional-yet-modern business culture. <strong className="text-yellow-400">Web development, mobile apps, SEO, and more.</strong>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-yellow-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(234,179,8,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.desc}</p>
                <p className="text-xs text-yellow-400/70 italic">{svc.keywords}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES with hyperlocal keywords ───────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-yellow-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Chennai</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From <strong className="text-yellow-400">Sriperumbudur auto plants</strong> to <strong className="text-yellow-400">T. Nagar jewellery stores</strong> and <strong className="text-yellow-400">OMR IT corridors</strong> — every Chennai business category deserves to be found online.
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
            <p className="text-sm text-gray-500 mb-4">Serving all Chennai locations:</p>
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
              Why Chennai Businesses Trust <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">SniperCoders</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s what makes us the <strong className="text-yellow-400">preferred digital partner for Chennai&apos;s most successful businesses</strong>:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Tamil & English bilingual SEO for dominant local search coverage across Chennai",
              "Automotive & manufacturing supplier portal development for Sriperumbudur & Oragadam",
              "OMR IT corridor — startup websites & SaaS product pages for Tidel Park & Ascendas",
              "T. Nagar & Pondy Bazaar retail & jewellery eCommerce with Tamil language support",
              "Temple trust & religious institution websites for Mylapore & Triplicane",
              "Healthcare appointment booking & patient management systems for Kilpauk & Porur clinics",
              "Chennai port & shipping logistics digital platforms for Kattupalli & Ennore",
              "Tamilnadu government e-tender compliant website architecture for MSMEs",
              "Real estate portals for Sholinganallur, Perumbakkam & ECR property developers",
              "Integration with Razorpay, Paytm, PhonePe & all Indian payment gateways",
              "GST invoicing & India-compliant data practices for Tamil Nadu businesses",
              "Post-launch support & maintenance with 24/7 availability for critical issues"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-yellow-800/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project in Chennai <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP with social proof ─────────────────── */}
      <section className="py-12 bg-gradient-to-r from-yellow-900/20 via-orange-900/10 to-yellow-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto italic">
            &ldquo;Our jewellery shop in <strong className="text-yellow-400">T. Nagar</strong> now gets online orders from across Tamil Nadu after SniperCoders built our eCommerce website and did Tamil SEO. The ROI has been incredible — we&apos;re getting customers from Madurai, Coimbatore, and even Chennai&apos;s NRI community. <strong className="text-yellow-400">Best software agency in Chennai</strong> by far.&rdquo;
          </blockquote>
          <p className="text-gray-500 mt-4 text-sm">— Jewellery Store Owner, T. Nagar, Chennai</p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
            <span>⭐ 5/5 on Google</span>
            <span>✅ Verified Client</span>
            <span>📍 T. Nagar, Chennai</span>
          </div>
        </div>
      </section>

      {/* ── FAQ with long-tail keywords ────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions —{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Chennai</span>
            </h2>
            <p className="text-gray-400">Answers to common questions about <strong className="text-yellow-400">software development, website design, and digital marketing in Chennai.</strong></p>
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
            className="relative bg-gradient-to-br from-yellow-900/35 to-orange-900/25 border border-yellow-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Make Chennai Find<br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Your Business First</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Chennai&apos;s <strong className="text-white">90 lakh+ consumers</strong> search Google in Tamil and English every day. From <strong className="text-yellow-400">T Nagar to OMR, Mylapore to Sriperumbudur</strong> — SniperCoders puts your business at the top of both.
              </p>
              
              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-yellow-500 rounded-xl px-6 py-4 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-yellow-400" />
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
                <Link href="/contact" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase" 
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-yellow-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300"
                >
                  View Chennai Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-yellow-400" /> Serving Chennai, Tambaram, Ambattur &amp; Greater Chennai</span>
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