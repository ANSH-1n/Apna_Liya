import Footer from "@/components/Footer";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clapperboard,
  Code2,
  Globe2,
  MapPin,
  Megaphone,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Video Editing & Reels",
    copy: "Clean short-form videos, ad creatives, hooks, captions, and social edits for Bangalore founders, coaches, real estate teams, and local brands.",
    icon: Clapperboard,
  },
  {
    title: "Social Media Marketing",
    copy: "Content calendars, campaign planning, Instagram growth, Meta ads, and Google ads focused on qualified leads instead of empty reach.",
    icon: Megaphone,
  },
  {
    title: "Website Development",
    copy: "Fast business websites, landing pages, portfolios, and lead-generation pages built with responsive design and clear conversion paths.",
    icon: Globe2,
  },
  {
    title: "Mobile App Development",
    copy: "Simple, scalable Android and iOS app builds for MVPs, booking flows, service apps, and customer-facing digital products.",
    icon: Smartphone,
  },
  {
    title: "Custom Software",
    copy: "Dashboards, CRMs, internal tools, automations, and workflow software shaped around how your team actually works.",
    icon: Code2,
  },
  {
    title: "AI Automation",
    copy: "Practical AI workflows for lead handling, content support, customer replies, reporting, and repeated business tasks.",
    icon: Bot,
  },
];

const reasons = [
  "Local SEO-friendly pages for Bangalore searches",
  "Content and software under one creative growth team",
  "Fast communication and simple project planning",
  "Mobile-first design for Indian customers",
  "Clear deliverables before development starts",
  "Post-launch support for updates and improvements",
];

const process = [
  "We understand your offer, audience, and Bangalore market.",
  "We plan the content, design, technology, and lead flow.",
  "We build, test, launch, and improve based on real response.",
];

export default function BangaloreSoftwareAgencyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <section className="relative isolate px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <MapPin className="h-4 w-4" />
            Software agency for Bangalore brands
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-7xl">
            Best Software Agency in{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              Bangalore
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            SniperCoders helps Bangalore startups, local businesses, creators,
            and service brands grow with video editing, social media marketing,
            websites, mobile apps, custom software, and useful AI automation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/showcase"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              What We Build
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Digital work made simple for Bangalore businesses
            </h2>
            <p className="mt-4 text-slate-300">
              Whether you need better Instagram content, a sharper landing page,
              a booking app, or a custom dashboard, we keep the strategy clear
              and build around measurable business outcomes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.06]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {service.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Why SniperCoders
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Built for visibility, trust, and enquiries
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Bangalore customers compare fast. Your website, videos, ads, and
              software should make your brand easier to understand, easier to
              trust, and easier to contact.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex gap-3 rounded-lg border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-200"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-lg border border-cyan-300/20 bg-cyan-300/[0.05] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Process
              </p>
              <h2 className="mt-3 text-3xl font-black">
                A clean path from idea to launch
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {process.map((step, index) => (
                <div key={step} className="rounded-lg bg-black/20 p-5">
                  <div className="text-sm font-black text-cyan-300">
                    0{index + 1}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            Need a software agency in Bangalore?
          </h2>
          <p className="mt-4 text-slate-300">
            Tell us what you want to build or promote. We will suggest a simple
            plan for content, website, app, or software based on your goal.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
          >
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
