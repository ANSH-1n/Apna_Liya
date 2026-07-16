'use client';

import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  CheckCircle2,
  Code2,
  Dumbbell,
  ExternalLink,
  Plane,
  ShoppingBag,
} from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: 'Moto Gears Pit Stop',
    category: 'Automotive',
    type: 'Motorcycle Gear Website',
    image: '/images/image2.png',
    icon: ShoppingBag,
    summary: 'A product-focused website project for a motorcycle gear brand.',
    deliverables: ['Website project', 'Product-focused UX', 'Brand presentation', 'Responsive structure'],
    href: 'https://motogearspitstop.com/',
  },
  {
    title: 'Ride Adventure',
    category: 'Automotive',
    type: 'Adventure Riding Website',
    image: '/images/ride_adventure.png',
    icon: ShoppingBag,
    summary: 'A sharp adventure riding web presence built for product discovery, brand trust, and mobile-first browsing.',
    deliverables: ['Adventure brand UX', 'Product discovery', 'Responsive website', 'Trust-focused layout'],
    href: 'https://rideadventure.in/',
  },
  {
    title: 'Equinoxx Fitness',
    category: 'Fitness',
    type: 'Fitness Centre & Gym Website',
    image: '/images/equinox_website_gym.png',
    icon: Dumbbell,
    summary: 'A bold, mobile-first website for a premium RT Nagar fitness centre.',
    deliverables: ['High-impact UI/UX', 'Membership pages', 'Lead capture forms', 'Local SEO structure'],
    href: 'https://equinoxxfitness.com/',
  },
  {
    title: 'TorkeHub',
    category: 'Custom Software',
    type: 'CRM & Automation Platform',
    image: '/images/image.png',
    icon: Code2,
    summary: 'A custom software interface for CRM automation and workflow clarity.',
    deliverables: ['CRM UI/UX', 'Automation flows', 'Dashboard design', 'Custom software system'],
    href: 'https://www.torkehub.com/',
  },
  {
    title: 'BRG Finery',
    category: 'Fashion & E-Commerce',
    type: 'Fashion E-Commerce Website',
    image: '/images/frfr[1].png',
    icon: ShoppingBag,
    summary: 'A premium online store with catalogue, checkout, and client-manageable backend.',
    deliverables: ['Custom catalogue', 'Payment integration', 'Mobile-first store', 'Admin workflow'],
    href: 'https://brgfinery.com/',
  },

  {
    title: 'Jai Mata Di Tour & Travels',
    category: 'Travel',
    type: 'Pilgrimage Travel Website',
    image: '/images/jaiMataDITravel.png',
    icon: Plane,
    summary: 'A multimedia travel website built for trust, accessibility, and enquiry capture.',
    deliverables: ['Video hero', 'Destination pages', 'Traveller diary', 'Lead capture'],
    href: 'https://jaimataditourandtravel.com/',
  },
  {
    title: 'Travel Quench',
    category: 'Travel',
    type: 'Travel Agency Website',
    image: '/images/travelQuench.png',
    icon: Plane,
    summary: 'A modern travel agency web presence with package listings and enquiry flows.',
    deliverables: ['Package listings', 'SEO architecture', 'Gallery system', 'Review signals'],
    href: 'https://www.travelquench.in/',
  },
  {
    title: 'Travel With Manikanta',
    category: 'Travel',
    type: 'Tour & Transport Platform',
    image: '/images/travelManikanta.png',
    icon: Plane,
    summary: 'A Next.js travel platform for service pages, destination architecture, and booking flows.',
    deliverables: ['Next.js platform', 'Booking flow', 'Service pages', 'Destination architecture'],
    href: 'http://travelwithmanikanta.com/',
  },
];

// ✅ FAQ data for AI discovery
const faqs = [
  {
    question: 'What types of websites has SniperCoders built?',
    answer: 'SniperCoders has built responsive business websites, e-commerce platforms, travel booking sites, portfolio pages, custom software dashboards, and fitness centre websites for clients across various industries including fitness, real estate, travel, automotive, and education.'
  },
  {
    question: 'How much does a website cost?',
    answer: 'Website costs vary based on complexity, features, and design requirements. Our website packages start at $500 for simple landing pages and go up to $5,000+ for custom e-commerce and software platforms. Contact us for a custom quote tailored to your needs.'
  },
  {
    question: 'How long does website development take?',
    answer: 'Website development typically takes 2-6 weeks depending on complexity. Simple landing pages can be completed in 1-2 weeks, while custom e-commerce or software platforms may take 4-8 weeks.'
  },
  {
    question: 'Do you offer website maintenance?',
    answer: 'Yes, we offer ongoing website maintenance, updates, security monitoring, and performance optimization to ensure your site remains secure, fast, and up-to-date.'
  },
  {
    question: 'What industries do you have experience in?',
    answer: 'We have experience working with clients in real estate, fitness, education, travel, automotive accessories, e-commerce, and professional services. Our portfolio reflects a diverse range of projects.'
  },
  {
    question: 'Can you build a custom software platform?',
    answer: 'Yes! We specialize in custom software development including CRM systems, automation platforms, dashboards, and internal business tools. TorkeHub is one example of our custom software work.'
  },
];

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-8 text-slate-300">{copy}</p> : null}
    </div>
  );
}

export default function WebsiteShowcasePage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        {/* ✅ AI-FRIENDLY HERO SECTION */}
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.23),transparent_60%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Website Showcase
            </p>
            {/* ✅ H1: Added keywords */}
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Website and Software Projects — SniperCoders Web Development Portfolio
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              <strong>SniperCoders</strong> web development portfolio featuring e-commerce, 
              travel, fitness, automotive, and custom software projects. Each website is built 
              as a conversion asset with modern UI/UX and responsive design.
            </p>
          </div>
        </section>

        {/* ✅ PROJECTS SECTION */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeader
            eyebrow="Portfolio"
            title="Websites and Custom Software Built for Real Business Growth"
            copy="Explore our web development projects including e-commerce stores, travel platforms, fitness websites, and custom software solutions."
          />
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.03 }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-950 sm:h-64">
                    <Image
                      src={project.image}
                      alt={`${project.title} case study by SniperCoders`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                        {project.category}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-sm font-medium text-cyan-300">{project.type}</p>
                    <h2 className="mt-2 text-2xl font-semibold">{project.title}</h2>
                    <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {project.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
                    >
                      Visit website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ✅ FAQ SECTION - Critical for AI discovery */}
        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions About SniperCoders Web Development"
              copy="Find answers to common questions about our website development, custom software, and project process."
            />
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-300/30 transition"
                >
                  <h3 className="text-lg font-semibold text-cyan-300">{faq.question}</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ FINAL CTA SECTION */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Ready to Build Your Website?
                </p>
                <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                  Let SniperCoders Build a Website That Converts
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  Whether you need an e-commerce store, a travel platform, a fitness website, 
                  or a custom software solution, we can help you bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/917006377796?text=Hello%20SniperCoders%2C%20I%20want%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  Discuss Your Website Project
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
                  Contact SniperCoders
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}