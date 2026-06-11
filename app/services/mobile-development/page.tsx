import Footer from '@/components/Footer';
import { ArrowRight, Bell, CheckCircle2, Database, Layout, Smartphone, Store, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | SniperCoders',
  description:
    'SniperCoders designs and develops mobile apps, MVPs, customer apps, booking apps, eCommerce apps, dashboards, and app backends for growing businesses.',
  keywords: ['mobile app development', 'app development services', 'iOS app development', 'Android app development', 'MVP app', 'business app development', 'SniperCoders'],
};

const appServices = [
  { title: 'Mobile App MVPs', description: 'Lean app versions that help founders test the core idea without overbuilding.', icon: Smartphone },
  { title: 'Customer Apps', description: 'Apps for booking, service requests, content access, loyalty, communities, and customer workflows.', icon: Bell },
  { title: 'eCommerce Apps', description: 'Mobile shopping experiences with product discovery, cart flows, payments, and order updates.', icon: Store },
  { title: 'App UI/UX', description: 'Clean screens, navigation, onboarding, forms, and flows built for simple mobile use.', icon: Layout },
  { title: 'Backend & APIs', description: 'Databases, admin panels, integrations, and APIs that keep the app useful behind the scenes.', icon: Database },
  { title: 'Performance & Support', description: 'Testing, fixes, updates, launch support, and improvements after real users start using the app.', icon: Zap },
];

const process = [
  ['Scope', 'Define users, features, user journeys, launch goals, and the MVP boundary.'],
  ['Prototype', 'Create the screen flow and validate how the app should feel before development.'],
  ['Develop', 'Build the app, backend, integrations, and admin functions in focused milestones.'],
  ['Launch', 'Test, prepare release assets, publish, monitor, and plan the next improvement cycle.'],
];

export default function MobileDevelopmentPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Mobile Development
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Mobile apps built around real users and clear business goals.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              We help brands and founders plan, design, develop, and improve mobile apps that are
              simple to use, practical to manage, and ready for growth.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
                Discuss an app
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/showcase" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10">
                View showcase
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {appServices.map((appService) => {
              const Icon = appService.icon;
              return (
              <article key={appService.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">{appService.title}</h2>
                <p className="mt-4 leading-7 text-slate-300">{appService.description}</p>
              </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
            {process.map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <CheckCircle2 className="h-6 w-6 text-cyan-300" />
                <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              Have an app idea that needs structure?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-200">
              Send the app goal, audience, and must-have features. We will help shape the simplest useful version.
            </p>
            <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
              Contact SniperCoders
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
