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

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
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
    title: 'The Retail Therapy',
    category: 'Fashion & E-Commerce',
    type: 'Lifestyle Retail Platform',
    image: '/images/retail_therapy.png',
    icon: ShoppingBag,
    summary: 'A clean Next.js retail experience for apparel, thrift, magazine, blog, and lookbook content.',
    deliverables: ['Next.js build', 'Razorpay setup', 'Free-shipping logic', 'Inventory admin'],
    href: 'https://the-retail-therapy.vercel.app/',
  },
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
];

export default function WebsiteShowcasePage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.23),transparent_60%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Website Showcase
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Website and software projects built as conversion assets.
            </h1>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
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
      </main>
      <Footer />
    </>
  );
}
