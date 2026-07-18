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
    desc: "Professional website design company in Pune. Business websites, ed-tech platforms, startup landing pages & manufacturing company portals tailored for Pune's tech-forward audience.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile App Development Pune",
    desc: "Top app development agency in Pune. Student-focused apps, automotive parts portals, campus platforms & local services apps built for Pune's mobile-first population.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: "Custom Software Development Pune",
    desc: "Enterprise software solutions in Pune. Manufacturing ERP, automotive supply chain tools, college management software & enterprise SaaS for Pune's industrial & academic landscape.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Digital Marketing Agency Pune",
    desc: "Marathi + English SEO, Google Ads and social media campaigns aimed at Pune's young, digitally active demographics.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "IT Consulting Pune",
    desc: "Expert IT consultants in Pune. Digital transformation strategy for Pune's IT parks, manufacturing companies, education institutions & startup ecosystem in Hinjawadi.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Branding & UI/UX Design Pune",
    desc: "Clean design systems that match Pune's design-conscious consumer market — from Koregaon Park to Viman Nagar.",
    gradient: "from-fuchsia-500 to-pink-600",
  },
];

const BUSINESS_CATEGORIES = [
  { icon: <BookOpen className="w-5 h-5" />, label: "Coaching in Deccan", color: "text-green-400" },
  { icon: <Cog className="w-5 h-5" />, label: "Auto in Pimpri-Chinchwad", color: "text-gray-400" },
  { icon: <Briefcase className="w-5 h-5" />, label: "IT in Hinjawadi", color: "text-blue-400" },
  { icon: <Utensils className="w-5 h-5" />, label: "Restaurants in KP", color: "text-orange-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Viman Nagar", color: "text-amber-400" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Koregaon Park", color: "text-blue-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail in Camp Area", color: "text-pink-400" },
  { icon: <Car className="w-5 h-5" />, label: "Car Dealers in Baner", color: "text-cyan-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Kothrud", color: "text-red-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel in Camp", color: "text-sky-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Aundh", color: "text-lime-400" },
  { icon: <Home className="w-5 h-5" />, label: "Real Estate in Wakad", color: "text-teal-400" },
  { icon: <Truck className="w-5 h-5" />, label: "Logistics in Pune", color: "text-yellow-400" },
  { icon: <Music className="w-5 h-5" />, label: "Wedding in Pune", color: "text-rose-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "Finance in Pune", color: "text-blue-300" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands Pune", color: "text-emerald-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Home Services Pune", color: "text-orange-300" },
  { icon: <Building2 className="w-5 h-5" />, label: "Co-working in Pune", color: "text-purple-300" },
  { icon: <Wifi className="w-5 h-5" />, label: "Startups in Kharadi", color: "text-cyan-300" },
  { icon: <Camera className="w-5 h-5" />, label: "Photography Pune", color: "text-violet-400" },
  { icon: <Microscope className="w-5 h-5" />, label: "Research Labs", color: "text-purple-400" },
  { icon: <TreePine className="w-5 h-5" />, label: "Agri in Pune", color: "text-green-300" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Yoga in Pune", color: "text-pink-300" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Bookstores Pune", color: "text-yellow-300" },
  { icon: <Mountain className="w-5 h-5" />, label: "Hill Stations near Pune", color: "text-emerald-300" },
  { icon: <Bus className="w-5 h-5" />, label: "Travel in Pune", color: "text-amber-300" },
];

const STATS = [
  { value: "30+", label: "Pune Projects Delivered" },
  { value: "100%", label: "Client Satisfaction Rate" },
  { value: "24/7", label: "Local Support Available" },
  { value: "5★", label: "Google Reviews Rating" },
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
    a: "SniperCoders is a growing software agency serving Pune, with experience across web development, mobile apps, and digital marketing for businesses across Koregaon Park, Hinjawadi, Kothrud, Baner, and the wider Pune metropolitan region."
  },
  {
    q: "Can SniperCoders help Pune's manufacturing & automotive companies go digital?",
    a: "Yes. Pune is a major automotive and manufacturing hub with the Pimpri-Chinchwad belt and Chakan corridor housing several large manufacturers. We build B2B portals, supplier catalogues, parts inventory platforms, and sales dashboards for auto component manufacturers and industrial companies."
  },
  {
    q: "Do you build websites for educational institutions in Pune?",
    a: "Yes. Pune has a large student population across hundreds of colleges, universities and coaching institutes. We build admissions portals, LMS integrations, and placement management systems for institutions from FC Road to Deccan and Kothrud."
  },
  {
    q: "How do you approach SEO for Pune startups?",
    a: "Pune's startup ecosystem is concentrated around Hinjawadi, Baner, Kharadi and Viman Nagar. We build SEO strategies aimed at investor searches, B2B lead generation, and consumer traffic depending on the business, with a Marathi + English approach for local search."
  },
  {
    q: "Do you support Marathi language content?",
    a: "Yes. We create Marathi + English bilingual content that can improve local SEO performance, especially for businesses targeting Pune's wider regional audience including Nashik, Solapur, and Kolhapur."
  },
  {
    q: "Can you build websites for restaurants in Koregaon Park and Baner?",
    a: "Yes. We build restaurant websites with online ordering integration, table reservation systems, menu displays, and local SEO targeting searches like 'best restaurants in KP' or 'cafés in Baner'."
  },
  {
    q: "How much does a website cost in Pune?",
    a: "A professional business website in Pune typically ranges from ₹15,000 to ₹1,50,000+ depending on complexity. We offer transparent pricing with no hidden charges for small businesses in Camp, Deccan, and across Pune."
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function PunePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#05070d] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.14) 0%, transparent 60%), #05070d" }}
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
            <Crown className="w-4 h-4" /> Software Agency in Pune • 30+ Projects Delivered
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Software Agency<br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              in Pune, Maharashtra
            </span>
          </motion.h1>

          <motion.p
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
            SniperCoders works with Pune&apos;s <strong className="text-indigo-400">startups, colleges, manufacturers, restaurants & IT firms</strong> — from <strong className="text-indigo-400">Hinjawadi&apos;s tech park</strong> to <strong className="text-indigo-400">Koregaon Park&apos;s café culture</strong> and <strong className="text-indigo-400">Pimpri-Chinchwad&apos;s industrial corridor</strong>.
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

      {/* ── INTRO ───────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="bg-gradient-to-br from-gray-900/80 to-indigo-950/25 border border-indigo-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Pune — Education City Meets Startup Hub
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Pune</strong> combines several things at once — a major education city, an automotive and manufacturing hub (<strong className="text-indigo-400">Pimpri-Chinchwad, Chakan</strong>), a growing IT corridor (<strong className="text-indigo-400">Hinjawadi, Magarpatta, Kharadi</strong>) and an active startup ecosystem (<strong className="text-indigo-400">Baner, Balewadi, Viman Nagar</strong>). With a large student population and a growing tech workforce, Pune&apos;s consumer base skews young and digital.
              </p>
              <p>
                Many Pune businesses — from <strong className="text-cyan-400">Deccan Gymkhana&apos;s heritage shops</strong> to <strong className="text-cyan-400">Camp Area&apos;s retail stores</strong> and <strong className="text-cyan-400">Koregaon Park&apos;s restaurant strip</strong> — still have limited digital presence relative to this audience. <strong className="text-white">SniperCoders</strong> works to close that gap with targeted digital solutions.
              </p>
              <p>
                Whether you&apos;re a <strong className="text-white">Hinjawadi startup</strong> needing a product website, a <strong className="text-white">Pimpri-Chinchwad auto parts manufacturer</strong> wanting a B2B portal, a <strong className="text-white">Kothrud coaching centre</strong>, or a <strong className="text-white">Koregaon Park café</strong> — <strong className="text-indigo-400">contact us at +91 7006377796 or snipercoders25@gmail.com</strong> for a free consultation.
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
              Our Services in <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Pune</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Digital solutions for Pune&apos;s mix of education, industry, and tech — web development, mobile apps, SEO, and more.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={i}
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-indigo-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(103,232,249,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES ─────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Pune</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From <strong className="text-indigo-400">Pimpri-Chinchwad auto companies</strong> to <strong className="text-indigo-400">Baner&apos;s café culture</strong> and <strong className="text-indigo-400">Kothrud&apos;s coaching classes</strong> — SniperCoders serves a wide range of Pune businesses.
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

      {/* ── ADVANTAGES ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
              Why Pune Businesses Work With <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">SniperCoders</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s how we work with Pune businesses:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Marathi & English bilingual SEO for Pune search coverage",
              "University & college admissions portal development with LMS integration",
              "Hinjawadi IT park — startup product websites & SaaS platforms",
              "Auto & manufacturing B2B supplier catalogue platforms for Pimpri-Chinchwad",
              "Koregaon Park, Viman Nagar & Baner restaurant digital marketing with online ordering",
              "PCMC (Pimpri-Chinchwad) industrial business websites with lead generation",
              "Pune real estate landing pages for Wakad, Kharadi, Undri & NIBM Road",
              "Student-targeted app development for Pune's college population",
              "Coaching class websites for Kothrud, Deccan & FC Road with admission forms",
              "Integration with Razorpay, Paytm, PhonePe & Indian payment gateways",
              "GST invoicing & India-compliant data practices for Maharashtra businesses",
              "Post-launch support & maintenance for critical issues"
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

      {/* ── TRUST STRIP (replaces the fabricated testimonial) ──── */}
      <section className="py-12 bg-gradient-to-r from-indigo-900/20 via-blue-900/10 to-indigo-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto">
            We work with manufacturers, educational institutions, startups, and restaurants across Pune to build websites, apps, and marketing campaigns suited to the city&apos;s student and startup population.
          </p>
          <div className="flex justify-center gap-4 mt-6 text-xs text-gray-600">
            <span>📍 Pune, Maharashtra</span>
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
              <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Pune</span>
            </h2>
            <p className="text-gray-400">Common questions about software development, website design, and digital marketing in Pune.</p>
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

      {/* ── CTA ─────────────────────────────────────────────────── */}
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
                Pune&apos;s digital-first consumers — from <strong className="text-indigo-400">Koregaon Park</strong> to <strong className="text-indigo-400">Hinjawadi</strong>, <strong className="text-indigo-400">Kothrud</strong> to <strong className="text-indigo-400">Viman Nagar</strong> — are searching right now. SniperCoders helps make sure they find you.
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