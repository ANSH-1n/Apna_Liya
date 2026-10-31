import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import RelatedLinks from '@/components/RelatedLinks';
import SeoBreadcrumbs from '@/components/SeoBreadcrumbs';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { seoPageByPath, seoPages } from '@/lib/seo-cluster';
import { buildMetadata } from '@/lib/seo-metadata';
import { articleSchema, breadcrumbs, collectionSchema, faqSchema, organization, serviceSchema } from '@/lib/schema';

type Props = { params: Promise<{ slug: string[] }> };
const pillar = '/social-media-marketing-agency-bangalore';
const freeAudit = '/contact';

export async function generateStaticParams() {
  return seoPages.map(page => ({ slug: page.path.slice(1).split('/') }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPageByPath.get(`/${slug.join('/')}`);
  return page ? buildMetadata(page.path) : {};
}

function jsonLd(value: object) {
  return { __html: JSON.stringify(value).replace(/</g, '\\u003c') };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const path = `/${slug.join('/')}`;
  const page = seoPageByPath.get(path);
  if (!page) notFound();

  const isHub = page.cluster === 'hub';
  const defaultFaqs = [
    { question: `What should a ${page.label} social media plan include?`, answer: 'Begin with business priorities, audience questions, the content the team can reliably produce, channel roles, approval ownership and a reporting approach. The final scope should be set after discovery.' },
    { question: 'How do we know which channels to use?', answer: 'Choose channels by audience behaviour, content fit and the team’s ability to respond consistently. A channel should have a defined purpose rather than being included because it is popular.' },
    { question: 'Can SniperCoders work with our existing team?', answer: 'A plan can define responsibilities between the client team and agency, including who supplies source material, approves content, publishes and responds to enquiries.' },
    { question: 'How do we get started?', answer: 'Request a free audit. The discussion can clarify objectives, current channels, available resources and whether a custom plan is a sensible next step.' },
  ];
  const faqItems = page.copy?.faqs?.map(item => ({ question: item.q, answer: item.a })) ?? defaultFaqs;
  const crumbItems = [{ name: 'Home', path: '/' }, { name: 'Bangalore', path: pillar }, ...(page.hub && page.path !== page.hub ? [{ name: page.hub.split('/').at(-1)!.replace(/-/g, ' '), path: page.hub }] : []), { name: page.copy?.title ?? page.label, path: page.path }];
  const schemas: object[] = [organization(), breadcrumbs(crumbItems), faqSchema(faqItems)];
  if (['area', 'industry', 'service'].includes(page.cluster)) schemas.push(serviceSchema(page.heading, page.description, page.path));
  if (page.cluster === 'guide') schemas.push(articleSchema({ title: page.heading, description: page.description, url: page.path, datePublished: page.updatedAt, dateModified: page.updatedAt }));
  if (isHub) schemas.push(collectionSchema(page.heading, page.path, page.related));

  return <div className="min-h-screen bg-[var(--sc-ink)] text-white">
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />)}
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 lg:px-12">
      <SeoBreadcrumbs items={crumbItems} />
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_78%_10%,rgba(34,211,238,.17),transparent_34%),linear-gradient(135deg,#101826,#070a11_65%)] px-7 py-14 sm:px-12 sm:py-20">
        <div aria-hidden="true" className="absolute -right-12 -top-16 -z-10 h-72 w-72 rounded-full border border-cyan-100/10" />
        <p className="text-xs font-semibold uppercase tracking-[.25em] text-cyan-200">SniperCoders <span className="mx-2 text-white/30">/</span> Bangalore growth</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">{page.heading}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{page.copy?.intro ?? page.description}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4"><Link href={freeAudit} className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">Get a free audit <span aria-hidden="true">↗</span></Link><span className="text-sm text-slate-400">Custom scope after discovery</span></div>
      </section>

      {page.copy ? <article className="py-14 sm:py-20">
        {page.copy.sections.map((section, index) => <section key={section.h2} className={`mb-6 rounded-3xl border border-white/10 p-7 sm:p-10 ${index % 2 === 0 ? 'bg-white/[.035]' : 'bg-cyan-200/[.035]'}`}>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{section.h2}</h2>
          {section.paragraphs?.map((paragraph, paragraphIndex) => <p key={paragraphIndex} className="mt-5 max-w-4xl text-base leading-8 text-slate-300">{paragraph}</p>)}
          {section.bullets && <ul className="mt-5 grid gap-3 sm:grid-cols-2">{section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 leading-7 text-slate-300"><span className="mr-2 text-cyan-200">↗</span>{bullet}</li>)}</ul>}
        </section>)}
        {page.copy.children && <section className="mt-14"><div className="max-w-3xl"><p className="text-sm uppercase tracking-[.2em] text-cyan-200">Explore the collection</p><h2 className="mt-3 text-3xl font-semibold">Choose the page that matches your decision</h2></div><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{page.copy.children.map(child => <Link key={child.path} href={child.path} className="group rounded-3xl border border-white/10 bg-white/[.035] p-6 transition hover:-translate-y-1 hover:border-cyan-100/40 hover:bg-white/[.06] focus-visible:outline focus-visible:outline-cyan-200"><h3 className="text-xl font-semibold text-white">{child.title}<span className="float-right text-cyan-200 transition group-hover:translate-x-1">↗</span></h3><p className="mt-3 leading-7 text-slate-300">{child.blurb}</p></Link>)}</div></section>}
      </article> : <>
      <section className="grid gap-10 py-16 lg:grid-cols-[.72fr_1.28fr] lg:py-24">
        <div><p className="text-sm uppercase tracking-[.2em] text-cyan-200">Start with the business</p><h2 className="mt-4 text-3xl font-semibold leading-tight">A useful social presence begins with a clear role.</h2></div>
        <div className="space-y-5 text-base leading-8 text-slate-300"><p>Social media planning is most useful when it connects a company’s real priorities with what its audience needs to understand. Before choosing formats or a posting rhythm, clarify the offer, who evaluates it, what questions appear during consideration, and what action a relevant person should be able to take next.</p><p>For {page.label}, that means developing a point of view that fits the context instead of recycling generic campaign prompts. The content can explain decisions, show how the service or product is approached, answer recurring questions, and make the brand’s standards visible. Each piece should have an intended audience and a job in the wider communication plan.</p><p>Our <Link className="text-cyan-200 underline decoration-cyan-200/40 underline-offset-4" href={pillar}>Bangalore social media marketing overview</Link> explains how strategy, creative production and measurement can work together. A focused review of the current channels is a practical starting point when the next steps are not yet obvious.</p></div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-white/[.035] p-7 sm:p-10"><div className="max-w-3xl"><p className="text-sm uppercase tracking-[.2em] text-cyan-200">A working framework</p><h2 className="mt-3 text-3xl font-semibold">From audience questions to a repeatable plan</h2><p className="mt-4 leading-7 text-slate-300">The right workflow makes decisions easier to review. It gives the team a reason for each content theme and a way to learn without treating every post as an isolated experiment.</p></div>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {[
            ['01', 'Listen before planning', 'Review existing communication, audience questions, sales conversations and the team’s available source material. Separate confirmed insights from assumptions that need validation.'],
            ['02', 'Set channel responsibilities', 'Give each channel a clear role based on audience fit and the formats the team can sustain. Define what belongs in public content and what is better handled in a direct conversation.'],
            ['03', 'Build useful editorial themes', 'Create recurring themes that help people understand the offer, the process, the people behind it and the questions that shape a decision. Keep each theme specific enough to guide production.'],
            ['04', 'Review and refine', 'Use a shared approval process and a consistent review of meaningful signals. Keep what supports the objective, revise what creates friction and document why decisions changed.'],
          ].map(([number, title, copy]) => <article key={number} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6"><span className="text-sm font-semibold text-cyan-200">{number}</span><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{copy}</p></article>)}
        </div>
      </section>

      <section className="grid gap-10 py-16 lg:grid-cols-2 lg:py-24"><div><p className="text-sm uppercase tracking-[.2em] text-cyan-200">Scope & collaboration</p><h2 className="mt-4 text-3xl font-semibold">A custom plan with responsibilities in the open</h2></div><div className="space-y-5 leading-8 text-slate-300"><p>A useful engagement clarifies the work before production begins: strategic priorities, the channel mix, content formats, review ownership, publishing responsibilities and how learning will be shared. The exact scope depends on the audit and the client’s working process; it is not assumed from an industry label or neighbourhood name.</p><p>Good collaboration also makes room for subject-matter review. The client team knows its customers, products and operating constraints. The agency can help turn that knowledge into clear briefs, content systems and creative execution. A workable approval path keeps the people with the right context involved without making every decision difficult to track.</p><p>Reporting should help the team make a decision. Separate activity from audience response, note what the available data can and cannot show, and agree what to test or adjust next. Social performance alone cannot establish that a post caused a business outcome; connect platform signals to the wider customer journey where reliable information is available.</p><p>For guidance on evaluation, see the <Link className="text-cyan-200 underline decoration-cyan-200/40 underline-offset-4" href="/bangalore/guides/custom-strategy-plan">custom social media strategy framework</Link>. The free audit is a conversation about fit and scope, not a promise of ranking, reach, leads or revenue.</p></div></section>

      <section className="mb-16 flex flex-col items-start justify-between gap-5 rounded-3xl border border-cyan-100/15 bg-cyan-200/[.06] p-7 sm:flex-row sm:items-center sm:p-9"><div><p className="text-sm uppercase tracking-[.2em] text-cyan-200">Make the next decision with context</p><h2 className="mt-2 text-2xl font-semibold">Start with a free audit of your current approach.</h2></div><Link href={freeAudit} className="rounded-full border border-cyan-100/40 px-5 py-3 font-medium text-cyan-100 hover:bg-white/5 focus-visible:outline focus-visible:outline-cyan-200">Talk through your goals ↗</Link></section>

      {page.cluster === 'industry' && <section className="mb-16 rounded-3xl border border-amber-200/20 bg-amber-100/[.04] p-7 sm:p-9"><p className="text-sm font-semibold uppercase tracking-[.16em] text-amber-200">Responsible communication</p><h2 className="mt-3 text-2xl font-semibold">Review claims and platform rules before publishing</h2><p className="mt-4 max-w-4xl leading-7 text-slate-300">For regulated or sensitive categories, content should be reviewed by the client’s qualified legal or compliance adviser. Confirm that claims are substantiated, required disclosures are clear, and platform policies and applicable advertising rules are followed. [VERIFY WITH CLIENT COUNSEL]</p></section>}

      {page.cluster === 'guide' && <section className="mb-16 grid gap-6 rounded-3xl border border-white/10 bg-white/[.035] p-7 sm:grid-cols-2 sm:p-9"><div><p className="text-sm uppercase tracking-[.2em] text-cyan-200">Decision checklist</p><h2 className="mt-3 text-2xl font-semibold">Questions to resolve before committing</h2><a className="mt-5 inline-flex rounded-full border border-cyan-100/30 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-white/5" href="/downloads/bangalore-social-media-audit-checklist.txt" download>Download the audit checklist ↓</a></div><ul className="space-y-3 leading-7 text-slate-300"><li>• Is the audience and business objective specific enough to guide editorial choices?</li><li>• Who supplies expertise, approves claims and responds to the community?</li><li>• What evidence would help the team learn, and what cannot be attributed reliably?</li><li>• Does the team have the time and operating readiness to act on demand?</li></ul></section>}
      </>}

      <CaseStudy path={page.path} />

      {!!faqItems.length && <section className="py-16"><div className="max-w-3xl"><p className="text-sm uppercase tracking-[.2em] text-cyan-200">Common questions</p><h2 className="mt-3 text-3xl font-semibold">Frequently asked questions</h2></div><div className="mt-7 divide-y divide-white/10 border-y border-white/10">{faqItems.map(item => <details key={item.question} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-lg font-medium marker:hidden focus-visible:outline focus-visible:outline-cyan-300">{item.question}<span className="float-right text-cyan-200 transition group-open:rotate-45">＋</span></summary><p className="mt-3 max-w-3xl leading-7 text-slate-300">{item.answer}</p></details>)}</div></section>}

      <section className="rounded-[2rem] bg-cyan-200 px-7 py-10 text-slate-950 sm:px-12 sm:py-12"><div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-slate-700">A considered next step</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold">Get a free audit and a custom plan for your business.</h2><p className="mt-3 max-w-2xl leading-7 text-slate-700">Bring your current channels, goals and questions. We’ll use the conversation to understand whether a tailored social media programme makes sense.</p></div><Link href={freeAudit} className="shrink-0 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950">Request a free audit ↗</Link></div></section>

      <section className="py-12"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm uppercase tracking-[.2em] text-cyan-200">Explore the cluster</p><h2 className="mt-3 text-2xl font-semibold">Related resources</h2></div><p className="text-sm text-slate-400">Reviewed by the SniperCoders strategy team · Last reviewed October 21, 2026</p></div><div className="mt-6"><RelatedLinks path={page.path} /></div></section>
    </div>
    <StickyMobileCTA />
  </div>;
}
