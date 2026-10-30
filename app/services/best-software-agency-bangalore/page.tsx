//app/services/best-software-agency-bangalore/page.tsx


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
    copy: "Short-form videos, Reels, captions, hooks, pacing, sound design, and vertical exports for founders, creators, property teams, and local brands.",
    icon: Clapperboard,
    href: "/pricing/video-editing",
  },
  {
    title: "Social Media Marketing",
    copy: "Content calendars, captions, platform-specific creative, scheduling, and Meta or Google Ads support based on the selected plan.",
    icon: Megaphone,
    href: "/pricing/social-media-marketing",
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
  "Creative and technology projects scoped to your requirements",
  "Deliverables and responsibilities agreed before work starts",
  "Remote-friendly collaboration for content and digital projects",
  "Mobile-first website design",
  "Post-launch support according to the selected plan",
];

const process = [
  "We discuss your offer, audience, priorities, and local context.",
  "We agree on the content, design, technology, and deliverables.",
  "We produce, review, and refine work using feedback and available data.",
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
            Creative growth for Bangalore brands
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-7xl">
            Social Media Marketing & Video Editing for{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              Bangalore
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            SniperCoders helps Bangalore founders, creators, startups, and
            growing businesses with short-form video editing, social media
            management, and Meta and Google ad creatives. We also offer website
            development and other technology services on dedicated pages.
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
              Creative services for Bangalore businesses
            </h2>
            <p className="mt-4 text-slate-300">
              Choose video editing, social media execution, or ad creatives
              based on your current priorities. Our workflow can be arranged
              remotely; confirm any in-person production needs and availability
              before booking.
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
                  {service.href && (
                    <Link href={service.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white">
                      View service packages <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
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

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Bangalore service FAQs</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Common questions about creative services in Bangalore</h2>
          <div className="mt-8 space-y-5">
            <article>
              <h3 className="text-lg font-bold">Do you offer social media marketing for small businesses in Bangalore?</h3>
              <p className="mt-2 leading-7 text-slate-300">Yes. Plans can include content planning, captions, creative assets, scheduling, community management, and reporting. Deliverables depend on the selected plan. View the <Link className="text-cyan-200 underline" href="/pricing/social-media-marketing">social media marketing packages</Link> for plan details.</p>
            </article>
            <article>
              <h3 className="text-lg font-bold">How much does social media marketing cost in Bangalore?</h3>
              <p className="mt-2 leading-7 text-slate-300">Our listed India plans start at Rs.14,999 per month for Organic Management and Rs.24,999 per month for Ads + Lead Generation. The selected plan, deliverables, and any custom requirements determine the scope.</p>
            </article>
            <article>
              <h3 className="text-lg font-bold">Do you edit Reels from raw footage?</h3>
              <p className="mt-2 leading-7 text-slate-300">Yes. Video editing plans cover short-form formats such as Reels and YouTube Shorts. The client supplies footage; monthly volume, length, revisions, and turnaround are listed on the <Link className="text-cyan-200 underline" href="/pricing/video-editing">video editing pricing page</Link>.</p>
            </article>
            <article>
              <h3 className="text-lg font-bold">Is advertising spend included in the management fee?</h3>
              <p className="mt-2 leading-7 text-slate-300">No. Ad spend is paid directly to Meta or Google. The management plan covers the services and deliverables listed for that tier.</p>
            </article>
            <article>
              <h3 className="text-lg font-bold">Are services in-person or remote?</h3>
              <p className="mt-2 leading-7 text-slate-300">Content and digital projects can be coordinated remotely. Confirm any on-site filming or in-person production requirements and availability with us before booking.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            Need creative content or digital marketing in Bangalore?
          </h2>
          <p className="mt-4 text-slate-300">
            Tell us your business niche, the service you need, your timeline,
            and your goal. We will discuss the scope and next steps with you.
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
