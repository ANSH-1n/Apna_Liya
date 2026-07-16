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
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile App Development Chennai",
    desc: "Top app development agency in Chennai. Tamil-first apps, auto sector digital tools, healthcare apps & enterprise mobility solutions built for Chennai's large, smartphone-driven workforce.",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: "Custom Software Development Chennai",
    desc: "Enterprise software solutions in Chennai. Automotive ERP, manufacturing MES, shipping & port logistics software & healthcare platforms for Chennai's industrial giants and growing tech sector.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Digital Marketing Agency Chennai",
    desc: "Localised SEO, Google Ads and culturally precise Tamil + English social media marketing campaigns for businesses across Chennai.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "IT Consulting Chennai",
    desc: "Expert IT consultants in Chennai. Technology strategy for Chennai's automobile majors, IT services companies, healthcare providers & government agencies in this disciplined, growth-first city.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Branding & UI/UX Design Chennai",
    desc: "Precise, elegant design systems for Chennai's conservative-yet-modern business culture — functional, trustworthy and conversion-optimised.",
    gradient: "from-fuchsia-500 to-pink-600",
  },
];

const BUSINESS_CATEGORIES = [
  { icon: <Factory className="w-5 h-5" />, label: "Auto in Sriperumbudur", color: "text-yellow-400" },
  { icon: <Briefcase className="w-5 h-5" />, label: "IT in OMR Corridor", color: "text-blue-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Kilpauk", color: "text-red-400" },
  { icon: <Ship className="w-5 h-5" />, label: "Shipping in Chennai Port", color: "text-orange-400" },
  { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in T Nagar", color: "text-amber-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Besant Nagar", color: "text-yellow-300" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in ECR", color: "text-blue-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Sarees in Mylapore", color: "text-pink-400" },
  { icon: <Car className="w-5 h-5" />, label: "Car Dealers", color: "text-cyan-400" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Schools in Adyar", color: "text-green-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel in Nungambakkam", color: "text-sky-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Anna Nagar", color: "text-lime-400" },
  { icon: <Home className="w-5 h-5" />, label: "Real Estate in OMR", color: "text-teal-400" },
  { icon: <Music className="w-5 h-5" />, label: "Wedding Planners", color: "text-rose-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "Finance in George Town", color: "text-indigo-400" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands", color: "text-emerald-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Home Services", color: "text-orange-300" },
  { icon: <Building2 className="w-5 h-5" />, label: "Textile Mills", color: "text-purple-300" },
  { icon: <HardHat className="w-5 h-5" />, label: "Construction", color: "text-cyan-300" },
  { icon: <Camera className="w-5 h-5" />, label: "Photography Studios", color: "text-violet-400" },
  { icon: <TreePine className="w-5 h-5" />, label: "Fisheries", color: "text-green-300" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Clinics in Velachery", color: "text-pink-300" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Ed-Tech in Guindy", color: "text-lime-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Jewellery in T Nagar", color: "text-yellow-300" },
];

const STATS = [
  { value: "30+", label: "Chennai Projects Delivered" },
  { value: "100%", label: "Client Satisfaction Rate" },
  { value: "24/7", label: "Local Support Available" },
  { value: "5★", label: "Google Reviews Rating" },
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
    a: "SniperCoders is a growing software agency serving Chennai, with experience across web development, mobile apps, and digital marketing for businesses across T Nagar, OMR Corridor, Anna Nagar, and the Sriperumbudur industrial belt."
  },
  {
    q: "Can SniperCoders help Chennai's automotive & manufacturing businesses go digital?",
    a: "Yes. Chennai is a major automotive manufacturing hub with Hyundai, Ford, BMW, Renault and dozens of Tier-1 suppliers in Sriperumbudur and Oragadam. We build supplier portals, dealer management websites, parts catalogue systems and B2B platforms for this sector."
  },
  {
    q: "Do you provide Tamil language SEO and content?",
    a: "Yes. Tamil-language SEO opens up a large local search audience beyond English-only keyword targeting. We create Tamil + English bilingual strategies to help you connect with Tamil-speaking customers who prefer searching in their mother tongue."
  },
  {
    q: "What experience do you have with Chennai's IT and BPO sector?",
    a: "We build recruitment websites, employee portals, client-facing service pages and digital marketing campaigns for IT and BPO companies, with a specific focus on Chennai's OMR corridor and Tidel Park ecosystem."
  },
  {
    q: "How do you approach Chennai's real estate digital marketing?",
    a: "Chennai real estate is growing fast — Sholinganallur, Perumbakkam, Siruseri and Kelambakkam are active corridors. We build lead-capture websites, map-integrated listings, Google Ads campaigns and WhatsApp follow-up systems for Chennai property developers."
  },
  {
    q: "How much does a website cost in Chennai?",
    a: "A professional business website in Chennai typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. We offer transparent pricing with no hidden charges for small businesses in T Nagar, Anna Nagar, Adyar, and across Chennai."
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
            <Crown className="w-4 h-4" /> Software Agency in Chennai • 30+ Projects Delivered
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Software Agency<br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              in Chennai, Tamil Nadu
            </span>
          </motion.h1>

          <motion.p
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders helps Chennai&apos;s <strong className="text-yellow-400">automotive giants, IT firms, healthcare providers and traders</strong> build digital presences that bring real customers — from <strong className="text-yellow-400">T. Nagar to OMR&apos;s tech corridor</strong>.
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

      {/* ── INTRO PARA ──────────────────────────────────────────── */}
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
                <strong className="text-white">Chennai</strong> is India&apos;s fourth-largest city and a gateway to South India&apos;s economy — known for its large automotive sector in <strong className="text-yellow-400">Sriperumbudur and Oragadam</strong>, a major IT corridor along <strong className="text-yellow-400">OMR and Old Mahabalipuram Road</strong>, and deep cultural heritage.
              </p>
              <p>
                Digital adoption among traditional businesses — from <strong className="text-white">Mylapore&apos;s silk saree shops</strong> to <strong className="text-white">Sowcarpet&apos;s wholesale traders</strong> and <strong className="text-white">Anna Salai&apos;s commercial establishments</strong> — is still catching up in many segments, which is an opportunity for businesses that move early. <strong className="text-white">SniperCoders</strong> works with businesses across <strong className="text-yellow-400">T Nagar, Adyar, Velachery, Ambattur, and Tambaram</strong> on locally-tuned digital solutions.
              </p>
              <p>
                <strong className="text-yellow-400">Tamil-first SEO, automotive supplier portals, healthcare appointment systems, jewellery eCommerce</strong> — <strong className="text-yellow-400">Contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Our Services in <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Chennai</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Reliable, precise digital solutions built for Chennai&apos;s performance-driven business culture — web development, mobile apps, SEO, and more.
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
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES ─────────────────────────────────── */}
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

      {/* ── WHY US ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
              Why Chennai Businesses Work With <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">SniperCoders</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s how we work with Chennai businesses:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Tamil & English bilingual SEO for local search coverage across Chennai",
              "Automotive & manufacturing supplier portal development for Sriperumbudur & Oragadam",
              "OMR IT corridor — startup websites & SaaS product pages",
              "T. Nagar & Pondy Bazaar retail & jewellery eCommerce with Tamil language support",
              "Healthcare appointment booking & patient management systems for Kilpauk & Porur clinics",
              "Chennai port & shipping logistics digital platforms",
              "Tamil Nadu government e-tender compliant website architecture for MSMEs",
              "Real estate portals for Sholinganallur, Perumbakkam & ECR property developers",
              "Integration with Razorpay, Paytm, PhonePe & Indian payment gateways",
              "GST invoicing & India-compliant data practices for Tamil Nadu businesses",
              "Post-launch support & maintenance for critical issues",
              "Regular business-hours availability for calls and meetings"
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

      {/* ── TRUST STRIP (replaces the fabricated testimonial) ──── */}
      <section className="py-12 bg-gradient-to-r from-yellow-900/20 via-orange-900/10 to-yellow-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto">
            We work with automotive suppliers, IT companies, healthcare providers, and retail businesses across Chennai to build websites, apps, and marketing campaigns that connect with local, Tamil-speaking customers.
          </p>
          <div className="flex justify-center gap-4 mt-6 text-xs text-gray-600">
            <span>📍 Chennai, Tamil Nadu</span>
            <span>✅ GST Registered</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions —{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Chennai</span>
            </h2>
            <p className="text-gray-400">Common questions about software development, website design, and digital marketing in Chennai.</p>
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

      {/* ── CTA ─────────────────────────────────────────────────── */}
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
                Chennai&apos;s consumers search Google in Tamil and English every day. From <strong className="text-yellow-400">T Nagar to OMR, Mylapore to Sriperumbudur</strong> — SniperCoders helps put your business in front of them.
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