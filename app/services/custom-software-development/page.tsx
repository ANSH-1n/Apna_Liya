import Footer from '@/components/Footer';
import { ArrowRight, BarChart3, CheckCircle2, Code2, Database, GitBranch, Lock, Workflow } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | SniperCoders',
  description:
    'SniperCoders builds custom software, dashboards, admin panels, workflow automation, API integrations, CRM tools, and business systems for growing teams.',
  keywords: ['custom software development', 'business software', 'dashboard development', 'workflow automation', 'admin panel', 'API integration', 'CRM development', 'SniperCoders'],
};

const solutions = [
  { title: 'Business Dashboards', description: 'Central views for metrics, operations, leads, tasks, teams, inventory, and customer activity.', icon: BarChart3 },
  { title: 'Admin Panels', description: 'Manage content, orders, users, products, bookings, reports, and business data from one place.', icon: Database },
  { title: 'Workflow Automation', description: 'Reduce repetitive work with automations for lead handling, reporting, notifications, and internal tasks.', icon: Workflow },
  { title: 'API Integrations', description: 'Connect CRMs, payment systems, email tools, analytics, forms, WhatsApp flows, and third-party platforms.', icon: GitBranch },
  { title: 'Custom Web Apps', description: 'Role-based web applications for teams, clients, partners, and operational use cases.', icon: Code2 },
  { title: 'Secure Systems', description: 'Authentication, permissions, data handling, backups, and practical safeguards for business use.', icon: Lock },
];

const process = [
  ['Understand', 'We map the manual process, users, roles, data, and problems the software must solve.'],
  ['Design', 'We define screens, flows, permissions, database structure, and the first useful version.'],
  ['Build', 'We develop in focused milestones with testing and feedback after each important section.'],
  ['Improve', 'We refine the system after real use, adding automation and reports where they matter most.'],
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_58%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Custom Software
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Software that fits the way your business actually works.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              We build dashboards, admin panels, workflow tools, integrations, and custom systems
              that reduce manual work and give teams better control over their operations.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
                Discuss software
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/showcase/websites" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10">
                View related work
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
              <article key={solution.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">{solution.title}</h2>
                <p className="mt-4 leading-7 text-slate-300">{solution.description}</p>
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
              Want to replace messy manual work with one clear system?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-200">
              Send the workflow you want to improve. We will suggest the simplest software path before anything gets overbuilt.
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
