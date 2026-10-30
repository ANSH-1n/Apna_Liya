// app/services/best-software-agency-hyderabad/page.tsx

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
  ShoppingCart, Wrench, Factory, Building2,
  Clock, Shield, Crown, Gem,
  FlaskConical, Microscope, Building, Sparkles
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
    icon: <Users className="w-7 h-7" />,
    title: "Social Media Marketing in Hyderabad",
    desc: "Build a consistent presence with content planning, creative posts, Reels, captions, publishing support, and campaign coordination across relevant platforms.",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    icon: <Camera className="w-7 h-7" />,
    title: "Video Editing & Reels Production",
    desc: "Turn footage and ideas into Reels, Shorts, promotional and product videos, and ad creatives with editing, subtitles, sound design, and platform-ready formats.",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Website Development in Hyderabad",
    desc: "Responsive business websites, landing pages, portfolios, and eCommerce experiences built around your goals, customer journey, performance, and search visibility.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Digital Marketing & Online Advertising",
    desc: "Campaign planning, creative support for Meta and Google Ads, landing-page improvements, and performance analysis aligned with your business goals.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "SEO & Google Business Profile",
    desc: "Keyword research, on-page improvements, local content, internal linking, and accurate Google Business Profile information for eligible local businesses.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Branding & Creative Design",
    desc: "Create recognizable digital assets through promotional graphics, campaign creatives, visual identity elements, and brand storytelling.",
    gradient: "from-fuchsia-500 to-pink-600",
  },
  { icon: <Sparkles className="w-7 h-7" />, title: "AI-Powered Video & Creative Solutions", desc: "Explore AI-assisted video production, multilingual content adaptation, and creative workflows while keeping brand consistency and quality in focus.", gradient: "from-amber-500 to-orange-600" },
  { icon: <Code className="w-7 h-7" />, title: "Custom Software & Mobile App Development", desc: "Plan web applications, dashboards, business workflows, and mobile apps around your users, requirements, scope, and budget.", gradient: "from-cyan-500 to-blue-600" },
];

const BUSINESS_CATEGORIES = [
  { icon: <FlaskConical className="w-5 h-5" />, label: "Pharma in Genome Valley", color: "text-violet-400" },
  { icon: <Briefcase className="w-5 h-5" />, label: "IT in HITEC City", color: "text-indigo-400" },
  { icon: <Utensils className="w-5 h-5" />, label: "Biryani in Old City", color: "text-orange-400" },
  { icon: <Coffee className="w-5 h-5" />, label: "Cafés in Jubilee Hills", color: "text-amber-400" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels in Banjara Hills", color: "text-blue-400" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail in Begumpet", color: "text-pink-400" },
  { icon: <Car className="w-5 h-5" />, label: "Car Dealers in Secunderabad", color: "text-cyan-400" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Ed-Tech in Gachibowli", color: "text-green-400" },
  { icon: <HeartPulse className="w-5 h-5" />, label: "Hospitals in Somajiguda", color: "text-red-400" },
  { icon: <Plane className="w-5 h-5" />, label: "Travel in Abids", color: "text-sky-400" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Gyms in Kondapur", color: "text-lime-400" },
  { icon: <Home className="w-5 h-5" />, label: "Real Estate in Kokapet", color: "text-teal-400" },
  { icon: <Truck className="w-5 h-5" />, label: "Logistics in Patancheru", color: "text-yellow-400" },
  { icon: <Music className="w-5 h-5" />, label: "Events in Madhapur", color: "text-rose-400" },
  { icon: <Landmark className="w-5 h-5" />, label: "Finance in Koti", color: "text-blue-300" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "D2C Brands Hyderabad", color: "text-emerald-400" },
  { icon: <Factory className="w-5 h-5" />, label: "MSME in Balanagar", color: "text-gray-400" },
  { icon: <Building2 className="w-5 h-5" />, label: "Co-working Spaces", color: "text-purple-300" },
  { icon: <Microscope className="w-5 h-5" />, label: "Biotech in Genome Valley", color: "text-cyan-300" },
  { icon: <Gem className="w-5 h-5" />, label: "Pearls in Laad Bazaar", color: "text-yellow-300" },
  { icon: <TreePine className="w-5 h-5" />, label: "Agritech in Hyderabad", color: "text-green-300" },
  { icon: <Camera className="w-5 h-5" />, label: "Film Studios in Hyderabad", color: "text-fuchsia-400" },
  { icon: <Wrench className="w-5 h-5" />, label: "Home Services Hyderabad", color: "text-orange-300" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Universities Hyderabad", color: "text-lime-300" },
  { icon: <Building className="w-5 h-5" />, label: "TSIC Startups", color: "text-indigo-300" },
];

const TRUST_SIGNALS = [
  { icon: <Gem className="w-5 h-5" />, text: "Creative and technology-driven" },
  { icon: <Users className="w-5 h-5" />, text: "Social content and campaign support" },
  { icon: <Globe className="w-5 h-5" />, text: "Websites designed around business goals" },
  { icon: <Shield className="w-5 h-5" />, text: "Flexible solutions for growing brands" },
];

const LOCATIONS = [
  "HITEC City", "Gachibowli", "Madhapur", "Kondapur", "Jubilee Hills",
  "Banjara Hills", "Begumpet", "Somajiguda", "Ameerpet", "Punjagutta",
  "Secunderabad", "Koti", "Abids", "Charminar", "Old City",
  "Laad Bazaar", "Patancheru", "Balanagar", "Kukatpally", "Miyapur",
  "Kompally", "Bachupally", "Kokapet", "Nanakramguda", "Financial District",
  "Uppal", "Rangareddy", "Shamshabad", "Genome Valley", "Turkayamjal"
];

const FAQS = [
  {
    q: "Which services does SniperCoders offer in Hyderabad?",
    a: "Our services include social media marketing, short-form video editing, website development, digital marketing support, SEO, creative design, AI-assisted content solutions, and custom software development."
  },
  {
    q: "Can you manage social media for my business?",
    a: "We can discuss a package based on your platforms, content requirements, posting frequency, creative needs, and campaign goals. The final scope and pricing are confirmed before work begins."
  },
  {
    q: "Do you provide Reels and video editing services?",
    a: "Yes. Video projects can include Reels, YouTube Shorts, promotional and product videos, subtitles, and advertising creatives, depending on the agreed requirements."
  },
  {
    q: "Can you build a website for my Hyderabad business?",
    a: "We can discuss business websites, landing pages, portfolio sites, eCommerce stores, and custom web applications. We recommend an approach after understanding your goals and requirements."
  },
  {
    q: "Do you offer SEO services for Hyderabad businesses?",
    a: "SEO support can include keyword research, on-page optimization, page titles and descriptions, internal linking, local landing pages, and website content improvements."
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the deliverables, project scope, timeline, and ongoing support required. Contact us and we will discuss a suitable scope and budget before work begins."
  },
  {
    q: "Can I combine website development and social media marketing?",
    a: "Yes. Your website, social media, advertising creatives, and brand identity can be planned together so they support a consistent customer journey."
  },
  {
    q: "How do I get started?",
    a: "Contact us for a consultation. We will discuss your audience, goals, current online presence, budget, and next steps that fit your requirements."
  },
];

// Contact information
const phoneNumber = "+917006377796";
const email = "snipercoders25@gmail.com";

export default function HyderabadPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0c0614] text-white font-sans overflow-x-hidden">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(245,158,11,0.14) 0%, transparent 60%), #0c0614" }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-violet-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-orange-600/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4" /> Creative Growth Agency for Hyderabad Businesses
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Digital Growth Agency<br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              in Hyderabad, Telangana
            </span>
          </motion.h1>

          <motion.p
            custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
          >
              SniperCoders helps startups, local businesses, creators, eCommerce brands, and growing companies strengthen their digital presence through <strong className="text-violet-400">social media, video editing, website development, branding, and AI-assisted creative solutions</strong>.
          </motion.p>

          {/* Trust signals */}
          <motion.div
            custom={1.5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="text-violet-400">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={2} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-violet-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" /> Call: +91 7006377796
            </a>
          </motion.div>

          <motion.div
            custom={3} initial="hidden" animate="show" variants={fadeUp}
            className="hidden"
          >
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ───────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn}
            className="bg-gradient-to-br from-gray-900/80 to-violet-950/25 border border-violet-900/30 rounded-3xl p-8 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent" style={{ fontFamily: "'Syne', sans-serif" }}>
              Build a Stronger Digital Presence in Hyderabad
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Hyderabad</strong> is home to startups, technology companies, restaurants, healthcare providers, educational institutions, retail brands, and eCommerce businesses. In a competitive market, a website or social account is only the beginning: businesses also need a clear identity, compelling content, and a strategy that helps the right audience discover them.
              </p>
              <p>
                At <strong className="text-white">SniperCoders</strong>, we bring creative execution and digital technology together. From short-form videos and Instagram content to business websites and digital marketing campaigns, our services can support your brand at different stages of growth.
              </p>
              <p>
                If your business serves HITEC City, Gachibowli, Madhapur, Kondapur, Jubilee Hills, Banjara Hills, or elsewhere in Hyderabad, we can discuss a digital plan tailored to your goals. Contact us at <strong className="text-violet-400">+91 7006377796</strong> or <strong className="text-violet-400">snipercoders25@gmail.com</strong> for a consultation.
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
              Our Services in <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">Hyderabad</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Creative and technology services to help Hyderabad businesses communicate clearly, reach the right audience, and grow online.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={i}
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative bg-gray-900/60 border border-gray-800 hover:border-violet-600/50 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.08), transparent)" }} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-5 shadow-lg`}>{svc.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-orange-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CATEGORIES ─────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Industries We Serve in <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">Hyderabad</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From <strong className="text-violet-400">Charminar pearl traders</strong> to <strong className="text-violet-400">Cyberabad SaaS companies</strong> &mdash; every Hyderabad business category deserves a strong digital presence.
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
            <p className="text-sm text-gray-500 mb-4">Serving all Hyderabad locations:</p>
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
              Why Hyderabad Businesses Work With <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">SniperCoders</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here&apos;s how we work with Hyderabad businesses:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Creative thinking and technology brought together for your brand",
              "Recommendations shaped around your business goals and budget",
              "Content planned for its platform, audience, and intended use",
              "Websites, social content, ads, and identity that work together",
              "Clear deliverables, timelines, responsibilities, and budget before work starts",
              "Agreed review and revision steps for each project",
              "Performance data and client feedback used to guide ongoing work"
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-violet-800/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Project in Hyderabad <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP (replaces the fabricated testimonial) ──── */}
      <section className="py-12 bg-gradient-to-r from-violet-900/20 via-purple-900/10 to-violet-900/20 border-y border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="text-sm font-semibold text-violet-300">Creative services for growing brands</span>
          </div>
          <p className="text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto">
            We bring content, design, and digital development together to help Hyderabad businesses build a clear and consistent online presence.
          </p>
          <div className="flex justify-center gap-4 mt-6 text-xs text-gray-600">
            <span>📍 Hyderabad, Telangana</span>
            <span>Digital services for growing businesses</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Frequently Asked Questions &mdash;{" "}
              <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">Hyderabad</span>
            </h2>
            <p className="text-gray-400">Common questions about software development, website design, and digital marketing in Hyderabad.</p>
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
                  <div className="px-6 py-5 bg-gray-950/40 text-gray-300 text-sm leading-relaxed border-t border-gray-800">{faq.a}</div>
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
            className="relative bg-gradient-to-br from-violet-900/40 to-purple-900/30 border border-violet-700/30 rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Scale Your Hyderabad Business<br />
                <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">Digitally & Decisively</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Build a stronger presence with <strong className="text-violet-400">content, a clear brand, and digital experiences</strong> designed around the customers you want to reach.
              </p>

              {/* Contact cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-700 hover:border-violet-500 rounded-xl px-6 py-4 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-violet-400" />
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/showcase"
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-violet-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300"
                >
                  View Hyderabad Portfolio
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-violet-400" /> Serving Hyderabad, Secunderabad, Cyberabad & Rangareddy</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-orange-400" /> Clear scope and agreed deliverables</span>
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
