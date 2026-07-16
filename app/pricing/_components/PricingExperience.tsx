// // //app/pricing/_components/PricingExperience.tsx




// 'use client'

// import Footer from '@/components/Footer'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link' // ✅ ADDED: Import Link component
// import RealClientResults from './RealClientResults'
// import {
//   ArrowRight,
//   BarChart3,
//   CheckCircle2,
//   ChevronDown,
//   Clock3,
//   ExternalLink,
//   Globe2,
//   Headphones,
//   MessageCircle,
//   ShieldCheck,
//   Sparkles,
//   Star,
//   XCircle,
//   Zap,
// } from 'lucide-react'
// import { useEffect, useMemo, useState } from 'react'
// import type { PricingPageData, PricingRegion } from '../pricing-data'

// const whatsappNumber = '917006377796'

// const budgetOptions: Record<PricingRegion, string[]> = {
//   international: ['Under $500', '$500 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+'],
//   india: ['Under $500', '$500 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+'],
// }

// const trustItems = [
//   'Fast Delivery',
//   'Dedicated Team',
//   'International Support',
//   'Conversion Focused',
//   'AI + Human Workflow',
//   'Transparent Communication',
//   'Performance Driven',
// ]

// const socialMediaProcessSteps = [
//   'You send us your raw videos, photos, products, offers, and business updates.',
//   'We edit reels, create graphics, write captions, design stories, and plan content.',
//   'We schedule posts, manage engagement, optimize content, and monitor performance.',
//   'You receive consistent content, stronger brand visibility, and more inbound inquiries.',
// ]

// const socialMediaIncludedItems = [
//   'Client provides raw videos/photos',
//   'Professional reel editing',
//   'Content calendar planning',
//   'Caption writing',
//   'Story design',
//   'Feed post design',
//   'Post scheduling',
//   'Community management',
//   'Monthly reporting',
//   'Performance optimization',
// ]

// const socialMediaNotIncludedItems = [
//   'On-site videography',
//   'Product photography',
//   'Influencer management',
//   'Ad spend',
//   'Paid promotion budget',
// ]

// const adsCoverageItems = [
//   'Campaign setup',
//   'Audience research',
//   'Creative strategy',
//   'Lead generation funnel setup',
//   'Ad management',
//   'Weekly optimization',
//   'Reporting',
// ]

// type PricingExperienceProps = {
//   page: PricingPageData
// }

// type SelectedPlanContext = {
//   service: string
//   packageName: string
//   planName: string
//   price: string
// }

// function getLeadSource(page: PricingPageData) {
//   if (page.slug === 'video-editing') {
//     return {
//       service: 'Video Editing',
//       page: 'Video Editing Pricing',
//     }
//   }

//   if (page.slug === 'social-media-marketing') {
//     return {
//       service: 'Social Media Marketing',
//       page: 'Social Media Pricing',
//     }
//   }

//   return {
//     service: 'Website & Software Development',
//     page: 'Website Pricing',
//   }
// }

// function formatPlanPrice(price: string, billing: string) {
//   return `${price}${billing.replace(/\s+/g, '')}`
// }

// function SocialMediaManagementProcess() {
//   return (
//     <section className="px-4 py-16 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-80px' }}
//           className="mb-10 max-w-3xl"
//         >
//           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//             Social Media Management
//           </p>
//           <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
//             How Our Social Media Management Works
//           </h2>
//           <p className="mt-4 leading-8 text-slate-300">
//             A clear monthly workflow from raw content to consistent posting, engagement, and performance improvement.
//           </p>
//         </motion.div>

//         <div className="grid gap-4 lg:grid-cols-4">
//           {socialMediaProcessSteps.map((step, index) => (
//             <motion.article
//               key={step}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: '-80px' }}
//               transition={{ delay: index * 0.06 }}
//               className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
//             >
//               <div className="mb-5 flex items-center justify-between gap-3">
//                 <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 text-sm font-bold text-slate-950">
//                   {index + 1}
//                 </span>
//                 {index < socialMediaProcessSteps.length - 1 && (
//                   <span className="hidden text-2xl font-semibold text-cyan-300/70 lg:block">&darr;</span>
//                 )}
//               </div>
//               <h3 className="text-lg font-semibold text-white">Step {index + 1}</h3>
//               <p className="mt-3 text-sm leading-7 text-slate-300">{step}</p>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function SocialMediaTransparencySection() {
//   return (
//     <section className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-80px' }}
//           className="mb-10 max-w-3xl"
//         >
//           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//             Transparent Scope
//           </p>
//           <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
//             What&apos;s Included In Our Social Media Management
//           </h2>
//           <p className="mt-4 leading-8 text-slate-300">
//             Clear expectations before you choose a plan: we manage strategy, editing, posting, engagement, and optimization while you provide the raw business content.
//           </p>
//         </motion.div>

//         <div className="grid gap-5 lg:grid-cols-2">
//           <ScopeCard title="Included" items={socialMediaIncludedItems} tone="included" />
//           <ScopeCard title="Not Included" items={socialMediaNotIncludedItems} tone="excluded" />
//         </div>
//       </div>
//     </section>
//   )
// }

// function ScopeCard({ title, items, tone }: { title: string; items: string[]; tone: 'included' | 'excluded' }) {
//   const isIncluded = tone === 'included'

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 18 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: '-80px' }}
//       className={[
//         'rounded-2xl border p-6',
//         isIncluded
//           ? 'border-cyan-300/25 bg-cyan-300/10'
//           : 'border-white/10 bg-slate-950/80',
//       ].join(' ')}
//     >
//       <h3 className="text-2xl font-semibold text-white">{title}</h3>
//       <div className="mt-5 grid gap-3 sm:grid-cols-2">
//         {items.map((item) => (
//           <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-black/20 p-3 text-sm leading-6 text-slate-200">
//             {isIncluded ? (
//               <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
//             ) : (
//               <XCircle className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
//             )}
//             {item}
//           </div>
//         ))}
//       </div>
//     </motion.article>
//   )
// }

// function AdsLeadGenerationNotice() {
//   return (
//     <section className="px-4 pt-12 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 18 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: '-80px' }}
//         className="mx-auto max-w-7xl rounded-2xl border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(15,23,42,0.96)_48%,rgba(8,13,25,0.98))] p-6 sm:p-8"
//       >
//         <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
//           <div>
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//               Important
//             </p>
//             <h2 className="text-3xl font-semibold leading-tight text-white">
//               Ad spend is NOT included in any package.
//             </h2>
//             <p className="mt-4 leading-8 text-slate-300">
//               Advertising budget is paid directly by the client to Meta or Google. Our pricing covers the strategy, setup, management, optimization, and reporting work.
//             </p>
//           </div>
//           <div className="grid gap-3 sm:grid-cols-2">
//             {adsCoverageItems.map((item) => (
//               <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-200">
//                 <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// function SocialMediaCustomProposalCta() {
//   return (
//     <section className="px-4 pb-16 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 18 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: '-80px' }}
//         className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-950/80 p-6 text-center sm:p-8"
//       >
//         <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
//           Need Something Custom?
//         </p>
//         <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-300">
//           If your business requires a custom strategy, content volume, ad management, or account handling, request a personalized quote and we&apos;ll build a package specifically for your goals.
//         </p>
//         <a
//           href="#quote"
//           className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
//         >
//           Get Custom Proposal
//           <ArrowRight className="h-4 w-4" />
//         </a>
//       </motion.div>
//     </section>
//   )
// }

// export default function PricingExperience({ page }: PricingExperienceProps) {
//   const [region, setRegion] = useState<PricingRegion>('international')
//   const [openFaq, setOpenFaq] = useState(0)
//   const [activePackageIndex, setActivePackageIndex] = useState(0)
//   const [selectedPlan, setSelectedPlan] = useState<SelectedPlanContext | null>(null)
//   const activePackage = page.packageTiers?.[activePackageIndex]
//   const activePlans = activePackage?.plans ?? page.plans
//   const activeServices = activePackage?.services ?? page.services
//   const isVideoEditingPage = page.slug === 'video-editing'
//   const isSocialMediaPage = page.slug === 'social-media-marketing'
//   const isWebDevelopmentPage = page.slug === 'web-development'
//   const isCustomSoftwareTab = activePackage?.id === 'custom-software'
//   const isAdsLeadGenerationTab = activePackage?.id === 'ads-lead-generation'
//   const leadSource = getLeadSource(page)

//   useEffect(() => {
//     const savedRegion = window.localStorage.getItem('snipercoders-pricing-region')
//     if (savedRegion === 'international' || savedRegion === 'india') {
//       setRegion(savedRegion)
//     }
//   }, [])

//   const updateRegion = (nextRegion: PricingRegion) => {
//     setRegion(nextRegion)
//     setSelectedPlan(null)
//     window.localStorage.setItem('snipercoders-pricing-region', nextRegion)
//   }

//   const ctaMessage = useMemo(
//     () =>
//       encodeURIComponent(
//         `Hello SniperCoders!

// I am interested in your ${leadSource.service} services.

// Page: ${leadSource.page}`
//       ),
//     [leadSource.page, leadSource.service]
//   )

//   return (
//     <>
//       <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
//         <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8 lg:pt-28">
//           <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
//           <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.24),transparent_58%)]" />

//           <div className="mx-auto max-w-6xl text-center">
//             <motion.p
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300"
//             >
//               {page.eyebrow}
//             </motion.p>
//             <motion.h1
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.08 }}
//               className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
//             >
//               {page.title}
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.16 }}
//               className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
//             >
//               {page.description}
//             </motion.p>

//             <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
//               <a
//                 href="#plans"
//                 className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
//               >
//                 View packages
//                 <ArrowRight className="h-4 w-4" />
//               </a>
//               <a
//                 href={`https://wa.me/${whatsappNumber}?text=${ctaMessage}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/20"
//               >
//                 Ask on WhatsApp
//                 <MessageCircle className="h-4 w-4" />
//               </a>
//             </div>

//             <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
//               {page.audience.map((item) => (
//                 <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="border-y border-white/10 bg-white/[0.03] px-4 py-5 sm:px-6 lg:px-8">
//           <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
//             <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//               <a
//                 href="#quote"
//                 onClick={() =>
//                   setSelectedPlan({
//                     service: page.serviceRequired,
//                     packageName: activePackage?.title ?? 'Custom Package',
//                     planName: 'Custom Package',
//                     price: 'Custom Quote',
//                   })
//                 }
//                 className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
//               >
//                 Customize package
//                 <Sparkles className="h-4 w-4" />
//               </a>
//               <div className="flex items-center gap-3 text-sm text-slate-300">
//                 <ShieldCheck className="h-5 w-5 shrink-0 text-cyan-300" />
//                 <span>Transparent premium pricing with custom proposal options.</span>
//               </div>
//             </div>
//             <RegionToggle region={region} onChange={updateRegion} />
//           </div>
//         </section>

//         {page.packageTiers && page.packageTiers.length > 1 && (
//           <section className="px-4 pt-10 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
//               <PackageToggle
//                 tiers={page.packageTiers}
//                 activeIndex={activePackageIndex}
//                 onChange={(index) => {
//                   setActivePackageIndex(index)
//                   setSelectedPlan(null)
//                 }}
//               />
//               {activePackage && (
//                 <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
//                   <div>
//                     <h2 className="text-2xl font-semibold text-white">{activePackage.title}</h2>
//                     <p className="mt-2 max-w-3xl leading-7 text-slate-300">{activePackage.description}</p>
//                   </div>
//                   {activePackage.costNote && (
//                     <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100">
//                       {activePackage.costNote}
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </section>
//         )}

//         {isWebDevelopmentPage && (
//           <section className="px-4 pt-5 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-6xl rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-medium leading-6 text-cyan-100">
//               All plans cover development only. Hosting, domain, server costs, and third-party subscription fees are not included and are paid directly by the client.
//             </div>
//           </section>
//         )}

//         {page.caseStudies && <RealClientResults caseStudies={page.caseStudies} className="pt-12" />}

//         {isVideoEditingPage && <VideoEditingPortfolioPreview />}
//         {isWebDevelopmentPage && (
//           isCustomSoftwareTab ? <CustomSoftwarePortfolioPreview /> : <WebsitePortfolioPreview />
//         )}

//         {isSocialMediaPage && <SocialMediaManagementProcess />}
//         {isSocialMediaPage && <SocialMediaTransparencySection />}
//         {isSocialMediaPage && isAdsLeadGenerationTab && <AdsLeadGenerationNotice />}

//         <section id="plans" className="px-4 py-16 sm:px-6 lg:px-8">
//           {isCustomSoftwareTab ? (
//             <CustomSoftwareProjectForm page={page} />
//           ) : region === 'india' ? (
//             <IndiaCustomOnly
//               page={page}
//               activePackageTitle={activePackage?.title}
//               onCustomize={() =>
//                 setSelectedPlan({
//                   service: page.serviceRequired,
//                   packageName: activePackage?.title ?? 'Custom India Package',
//                   planName: 'Custom India Package',
//                   price: 'Custom Quote',
//                 })
//               }
//             />
//           ) : (
//             <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
//               {activePlans.map((plan, index) => (
//                 (() => {
//                   const planContext = {
//                     service: page.serviceRequired,
//                     packageName: activePackage?.title ?? page.title,
//                     planName: plan.name,
//                     price: formatPlanPrice(plan.internationalPrice, plan.billing),
//                   }

//                   return (
//                     <motion.article
//                       key={`${activePackage?.id ?? 'default'}-${plan.name}`}
//                       initial={{ opacity: 0, y: 18 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, margin: '-80px' }}
//                       transition={{ delay: index * 0.08 }}
//                       className={[
//                         'relative rounded-2xl border p-6 transition hover:-translate-y-1',
//                         plan.popular
//                           ? 'border-cyan-300/50 bg-cyan-300/[0.08] shadow-[0_0_40px_rgba(34,211,238,0.12)]'
//                           : 'border-white/10 bg-white/[0.04]',
//                       ].join(' ')}
//                     >
//                       {plan.popular && (
//                         <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
//                           <Star className="h-3.5 w-3.5 fill-current" />
//                           Most Popular
//                         </div>
//                       )}
//                       <h2 className="pr-28 text-2xl font-semibold">{plan.name}</h2>
//                       <p className="mt-2 min-h-12 text-sm leading-6 text-slate-300">{plan.subtitle}</p>
//                       <div className="mt-6 flex items-end gap-1">
//                         <span className="text-4xl font-semibold">{plan.internationalPrice}</span>
//                         <span className="pb-1 text-sm text-slate-400">{plan.billing}</span>
//                       </div>
//                       {plan.popular && <p className="mt-3 text-sm font-semibold text-cyan-200">Best value for consistent growth.</p>}

//                       <div className="mt-6 grid gap-3 text-sm text-slate-300">
//                         <PlanMeta icon={Clock3} label="Turnaround" value={plan.turnaround} />
//                         <PlanMeta icon={Sparkles} label="Revisions" value={plan.revisions} />
//                         <PlanMeta icon={Headphones} label="Support" value={plan.support} />
//                         <PlanMeta icon={BarChart3} label="Monthly Output" value={plan.monthlyDeliverables} />
//                       </div>

//                       <ul className="mt-6 space-y-3">
//                         {plan.deliverables.map((item) => (
//                           <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
//                             <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                       {plan.note && <p className="mt-5 text-xs leading-6 text-slate-400">{plan.note}</p>}

//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSelectedPlan(planContext)
//                           window.setTimeout(() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' }), 0)
//                         }}
//                         className={[
//                           'mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition',
//                           plan.popular
//                             ? 'bg-white text-slate-950 hover:bg-cyan-100'
//                             : 'border border-white/15 bg-white/5 text-white hover:border-cyan-300/60 hover:bg-cyan-300/10',
//                         ].join(' ')}
//                       >
//                         Request this plan
//                         <ArrowRight className="h-4 w-4" />
//                       </button>
//                     </motion.article>
//                   )
//                 })()
//               ))}
//             </div>
//           )}
//         </section>

//         {isSocialMediaPage && <SocialMediaCustomProposalCta />}

//         <section className="px-4 pb-16 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-7xl">
//             <div className="mb-8 flex items-center gap-3">
//               <Zap className="h-6 w-6 text-cyan-300" />
//               <h2 className="text-3xl font-semibold">Included service coverage</h2>
//             </div>
//             <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
//               {activeServices.map((service) => (
//                 <div key={service} className="rounded-xl border border-white/10 bg-slate-950/60 p-4 text-sm font-medium text-slate-200">
//                   {service}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="px-4 py-16 sm:px-6 lg:px-8">
//           <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
//             <div>
//               <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//                 Why Clients Choose SniperCoders
//               </p>
//               <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
//                 Premium execution without confusing agency layers.
//               </h2>
//               <p className="mt-5 leading-8 text-slate-300">
//                 You get practical strategy, fast communication, and creative assets built around trust, conversion, and growth.
//               </p>
//             </div>
//             <div className="grid gap-4 sm:grid-cols-2">
//               {trustItems.map((item) => (
//                 <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
//                   <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
//                   <span className="text-slate-200">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <QuoteSection
//           page={page}
//           region={region}
//           selectedPlan={selectedPlan}
//           onCustomSoftwareSelected={
//             isWebDevelopmentPage
//               ? () => {
//                   const customIndex = page.packageTiers?.findIndex((tier) => tier.id === 'custom-software') ?? -1
//                   if (customIndex >= 0) {
//                     setActivePackageIndex(customIndex)
//                     window.setTimeout(() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' }), 0)
//                   }
//                 }
//               : undefined
//           }
//         />

//         <section className="px-4 py-16 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-4xl">
//             <div className="mb-8 text-center">
//               <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//                 Questions
//               </p>
//               <h2 className="text-3xl font-semibold sm:text-4xl">Pricing FAQs</h2>
//             </div>
//             <div className="space-y-3">
//               {page.faqs.map((faq, index) => {
//                 const isOpen = openFaq === index
//                 return (
//                   <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/[0.04]">
//                     <button
//                       type="button"
//                       onClick={() => setOpenFaq(isOpen ? -1 : index)}
//                       className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-white"
//                       aria-expanded={isOpen}
//                     >
//                       {faq.question}
//                       <ChevronDown className={`h-5 w-5 shrink-0 text-cyan-300 transition ${isOpen ? 'rotate-180' : ''}`} />
//                     </button>
//                     {isOpen && <p className="px-5 pb-5 leading-7 text-slate-300">{faq.answer}</p>}
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </section>

//         <section className="px-4 pb-24 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-7xl rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
//             <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
//               <div>
//                 <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
//                   Social Proof
//                 </p>
//                 <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
//                   We let the work speak.
//                 </h2>
//                 <p className="mt-4 max-w-2xl leading-8 text-slate-200">
//                   Portfolio and case studies available on request via WhatsApp before you commit to any plan.
//                 </p>
//               </div>
//               <a
//                 href="#quote"
//                 className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
//               >
//                 Get a tailored quote
//                 <ArrowRight className="h-4 w-4" />
//               </a>
//             </div>
//           </div>
//         </section>

//         <a
//           href="#quote"
//           className="fixed inset-x-4 bottom-4 z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_36px_rgba(34,211,238,0.28)] sm:hidden"
//         >
//           Request quote
//           <MessageCircle className="h-4 w-4" />
//         </a>
//       </main>
//       <Footer />
//     </>
//   )
// }

// function RegionToggle({ region, onChange }: { region: PricingRegion; onChange: (region: PricingRegion) => void }) {
//   return (
//     <div className="grid w-full max-w-sm grid-cols-2 rounded-full border border-white/10 bg-slate-950 p-1 text-sm font-semibold sm:w-80">
//       {[
//         { value: 'international' as const, label: 'International', icon: Globe2 },
//         { value: 'india' as const, label: 'India', icon: ShieldCheck },
//       ].map((item) => {
//         const Icon = item.icon
//         const active = region === item.value
//         return (
//           <button
//             key={item.value}
//             type="button"
//             onClick={() => onChange(item.value)}
//             className={`relative flex min-h-10 items-center justify-center gap-2 rounded-full px-4 transition ${
//               active ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:text-white'
//             }`}
//           >
//             <Icon className="h-4 w-4" />
//             {item.label}
//           </button>
//         )
//       })}
//     </div>
//   )
// }

// function IndiaCustomOnly({
//   page,
//   activePackageTitle,
//   onCustomize,
// }: {
//   page: PricingPageData
//   activePackageTitle?: string
//   onCustomize: () => void
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 18 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: '-80px' }}
//       className="mx-auto max-w-4xl rounded-2xl border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(15,23,42,0.96)_48%,rgba(236,72,153,0.12))] p-6 text-center shadow-[0_0_45px_rgba(34,211,238,0.10)] sm:p-10"
//     >
//       <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
//         <Sparkles className="h-7 w-7" />
//       </div>
//       <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
//         India Pricing
//       </p>
//       <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
//         Customize your Indian package
//       </h2>
//       <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
//         For Indian clients, we prepare a custom quote based on your scope, city, monthly volume,
//         timeline, and the exact deliverables you need
//         {activePackageTitle ? ` for ${activePackageTitle}` : ` for ${page.serviceRequired}`}.
//       </p>
//       <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
//         <a
//           href="#quote"
//           onClick={onCustomize}
//           className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
//         >
//           Customize package
//           <ArrowRight className="h-4 w-4" />
//         </a>
//         <a
//           href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//             `Hello SniperCoders!

// I am interested in your ${getLeadSource(page).service} services.

// Page: ${getLeadSource(page).page}

// Request: Custom package`
//           )}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/20"
//         >
//           WhatsApp for quote
//           <MessageCircle className="h-4 w-4" />
//         </a>
//       </div>
//     </motion.div>
//   )
// }

// function PackageToggle({
//   tiers,
//   activeIndex,
//   onChange,
// }: {
//   tiers: NonNullable<PricingPageData['packageTiers']>
//   activeIndex: number
//   onChange: (index: number) => void
// }) {
//   return (
//     <div
//       className="grid gap-2 rounded-full border border-white/10 bg-[#05070d] p-1 text-sm font-semibold sm:grid-cols-2"
//       role="tablist"
//       aria-label="Package type"
//     >
//       {tiers.map((tier, index) => {
//         const active = activeIndex === index
//         return (
//           <button
//             key={tier.id}
//             type="button"
//             role="tab"
//             aria-selected={active}
//             onClick={() => onChange(index)}
//             className={`min-h-11 rounded-full px-4 py-2 transition ${
//               active ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:bg-white/5 hover:text-white'
//             }`}
//           >
//             {tier.label}
//           </button>
//         )
//       })}
//     </div>
//   )
// }

// function PlanMeta({ icon: Icon, label, value }: { icon: typeof Clock3; label: string; value: string }) {
//   return (
//     <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-3">
//       <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
//       <div>
//         <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</div>
//         <div className="mt-1 text-slate-200">{value}</div>
//       </div>
//     </div>
//   )
// }

// function WebsitePortfolioPreview() {
//   return (
//     <section className="px-4 pt-10 sm:px-6 lg:px-8">
//       <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
//         <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950">
//           <Image
//             src="/images/ride_adventure.png"
//             alt="Ride Adventure website portfolio preview by SniperCoders"
//             width={1200}
//             height={760}
//             className="aspect-[16/10] w-full object-cover"
//             priority={false}
//           />
//           <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
//             Website Portfolio
//           </div>
//         </div>

//         <div>
//           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//             See The Work
//           </p>
//           <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
//             Explore Real Client Websites
//           </h2>
//           <p className="mt-5 leading-8 text-slate-300">
//             See the quality, responsiveness, UI/UX, and business-focused websites we&apos;ve built for clients.
//           </p>
//           <div className="mt-6 grid gap-3 sm:grid-cols-2">
//             {['Real project previews', 'Responsive website builds', 'Conversion-focused sections', 'Current portfolio examples'].map((item) => (
//               <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
//                 <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
//                 {item}
//               </div>
//             ))}
//           </div>
//           <Link
//             href="/showcase/websites"
//             className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
//           >
//             View Live Projects
//             <ExternalLink className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// function CustomSoftwarePortfolioPreview() {
//   return (
//     <section className="px-4 pt-10 sm:px-6 lg:px-8">
//       <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
//         <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950">
//           <Image
//             src="/images/image.png"
//             alt="TorkeHub custom software portfolio preview by SniperCoders"
//             width={1200}
//             height={760}
//             className="aspect-[16/10] w-full object-cover"
//             priority={false}
//           />
//           <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
//             Custom Software Portfolio
//           </div>
//         </div>

//         <div>
//           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//             See The System
//           </p>
//           <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
//             Explore TorkeHub Custom Software
//           </h2>
//           <p className="mt-5 leading-8 text-slate-300">
//             See how we design CRM-style dashboards, automation flows, clear interfaces, and business-focused software experiences.
//           </p>
//           <div className="mt-6 grid gap-3 sm:grid-cols-2">
//             {['CRM interface design', 'Automation-focused workflows', 'Dashboard UX', 'Business software structure'].map((item) => (
//               <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
//                 <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
//                 {item}
//               </div>
//             ))}
//           </div>
//           <a
//             href="https://www.torkehub.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
//           >
//             View TorkeHub Project
//             <ExternalLink className="h-4 w-4" />
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

// function VideoEditingPortfolioPreview() {
//   return (
//     <section className="px-4 pt-10 sm:px-6 lg:px-8">
//       <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
//         <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950">
//           <video
//             src="https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198635/Dubai_realstate_1_pcwu5o.mp4"
//             className="aspect-[9/16] w-full object-cover"
//             controls
//             preload="metadata"
//             playsInline
//           />
//           <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
//             Real Estate Client Video
//           </div>
//         </div>

//         <div>
//           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//             See The Editing Quality
//           </p>
//           <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
//             Explore Real Estate Client Videos
//           </h2>
//           <p className="mt-5 leading-8 text-slate-300">
//             See the pacing, captions, property-focused storytelling, vertical formatting, and clean edits we create for real estate content.
//           </p>
//           <div className="mt-6 grid gap-3 sm:grid-cols-2">
//             {['Real estate reels', 'Property walkthrough edits', 'Captions and pacing', 'Mobile-first vertical format'].map((item) => (
//               <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
//                 <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
//                 {item}
//               </div>
//             ))}
//           </div>
//           <Link href="/showcase/video-editing/">View Our Video Editing</Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// function CustomSoftwareProjectForm({ page }: { page: PricingPageData }) {
//   const leadSource = getLeadSource(page)
//   const [form, setForm] = useState({
//     name: '',
//     company: '',
//     email: '',
//     whatsapp: '',
//     projectType: 'SaaS Platform',
//     budget: '$8,000 - $20,000',
//     timeline: '1 to 3 months',
//     hasSpec: 'No - I need help scoping this',
//     description: '',
//   })

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     const message = encodeURIComponent(
//       `Hello SniperCoders!

// I am interested in your ${leadSource.service} services.

// Page: ${leadSource.page}

// New Custom Software Project Request

// Full Name: ${form.name}
// Company: ${form.company}
// Email: ${form.email}
// WhatsApp: ${form.whatsapp}

// Project Type: ${form.projectType}
// Estimated Budget: ${form.budget}
// Timeline: ${form.timeline}
// Technical Document: ${form.hasSpec}

// Project Description:
// ${form.description}`
//     )

//     try {
//       await fetch('/api/quote-requests', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: form.name,
//           companyName: form.company,
//           email: form.email,
//           whatsappNumber: form.whatsapp,
//           serviceRequired: leadSource.service,
//           selectedPackage: 'Custom Software Project',
//           selectedPlan: form.projectType,
//           selectedPrice: 'Custom Quote',
//           budget: form.budget,
//           projectDescription: form.description,
//           sourcePage: typeof window !== 'undefined' ? window.location.pathname : leadSource.page,
//           currentUrl: typeof window !== 'undefined' ? window.location.href : leadSource.page,
//           pricingPageUrl: typeof window !== 'undefined' ? window.location.pathname : leadSource.page,
//         }),
//       })
//     } catch (error) {
//       console.error('Lead save failed before WhatsApp open', error)
//     }

//     window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
//   }

//   return (
//     <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
//       <div>
//         <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//           Custom Software Proposal
//         </p>
//         <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
//           Tell us what you need to build.
//         </h2>
//         <p className="mt-5 leading-8 text-slate-300">
//           Custom software is scoped individually. No fixed price list - because no two projects are the same.
//           Fill the form and we will review your requirements and send a detailed proposal within 48 hours.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-950 p-5 sm:p-6">
//         <div className="grid gap-4 sm:grid-cols-2">
//           <Field label="Full Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} required />
//           <Field label="Company Name" value={form.company} onChange={(value) => setForm({ ...form, company: value })} />
//           <Field label="Email Address" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} required />
//           <Field label="WhatsApp Number" value={form.whatsapp} onChange={(value) => setForm({ ...form, whatsapp: value })} required />
//           <SelectField
//             label="Project Type"
//             value={form.projectType}
//             onChange={(value) => setForm({ ...form, projectType: value })}
//             options={[
//               'SaaS Platform',
//               'CRM System',
//               'ERP Solution',
//               'Admin Dashboard',
//               'AI Integration',
//               'Workflow Automation',
//               'API Integration',
//               'Mobile App',
//               'Other (describe below)',
//             ]}
//           />
//           <SelectField
//             label="Estimated Budget"
//             value={form.budget}
//             onChange={(value) => setForm({ ...form, budget: value })}
//             options={['Under $3,000', '$3,000 - $8,000', '$8,000 - $20,000', '$20,000 - $50,000', '$50,000+', 'Not sure yet']}
//           />
//           <SelectField
//             label="Timeline"
//             value={form.timeline}
//             onChange={(value) => setForm({ ...form, timeline: value })}
//             options={['As soon as possible', 'Within 1 month', '1 to 3 months', '3 to 6 months', 'Flexible']}
//           />
//           <SelectField
//             label="Technical document or specification?"
//             value={form.hasSpec}
//             onChange={(value) => setForm({ ...form, hasSpec: value })}
//             options={['Yes - I will share it on WhatsApp', 'No - I need help scoping this']}
//           />
//           <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
//             Project Description
//             <textarea
//               value={form.description}
//               onChange={(event) => setForm({ ...form, description: event.target.value })}
//               required
//               rows={6}
//               className="rounded-xl border border-white/10 bg-[#05070d] px-4 py-3 text-white outline-none focus:border-cyan-300"
//               placeholder="Describe what you want to build, what problem it solves, and any technical requirements you already know."
//             />
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
//         >
//           Send project details on WhatsApp
//           <MessageCircle className="h-4 w-4" />
//         </button>
//       </form>
//     </div>
//   )
// }

// function QuoteSection({
//   page,
//   region,
//   selectedPlan,
//   onCustomSoftwareSelected,
// }: {
//   page: PricingPageData
//   region: PricingRegion
//   selectedPlan: SelectedPlanContext | null
//   onCustomSoftwareSelected?: () => void
// }) {
//   const leadSource = getLeadSource(page)
//   const isWebDevelopmentPage = page.slug === 'web-development'
//   const quoteBudgetOptions = useMemo(
//     () =>
//       isWebDevelopmentPage
//         ? ['Under $1,000', '$1,000 - $3,000', '$3,000 - $8,000', '$8,000 - $20,000', '$20,000+']
//         : budgetOptions[region],
//     [isWebDevelopmentPage, region]
//   )
//   const serviceOptions = useMemo(
//     () =>
//       isWebDevelopmentPage
//         ? ['Website Development', 'Landing Page', 'Ecommerce Store', 'Booking System', 'Website Redesign', 'Custom Software (redirects to custom tab)']
//         : [page.serviceRequired, 'Video Editing', 'Social Media Marketing', 'Website & Software Development', 'AI Solutions', 'Business Automation'],
//     [isWebDevelopmentPage, page.serviceRequired]
//   )
//   const [form, setForm] = useState({
//     name: '',
//     company: '',
//     email: '',
//     whatsapp: '',
//     service: serviceOptions[0],
//     budget: quoteBudgetOptions[1],
//     description: '',
//   })

//   useEffect(() => {
//     setForm((current) => ({ ...current, budget: quoteBudgetOptions[1], service: serviceOptions[0] }))
//   }, [quoteBudgetOptions, serviceOptions])

//   useEffect(() => {
//     if (selectedPlan) {
//       setForm((current) => ({ ...current, service: selectedPlan.service }))
//     }
//   }, [selectedPlan])

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     const message = encodeURIComponent(
//       `Hello SniperCoders!

// I am interested in your ${leadSource.service} services.

// Page: ${leadSource.page}

// New Custom Quote Request

// Name: ${form.name}
// Company: ${form.company}
// Email: ${form.email}
// WhatsApp: ${form.whatsapp}

// Service Required: ${form.service}
// Selected Package: ${selectedPlan?.packageName ?? 'Not selected'}
// Selected Plan: ${selectedPlan?.planName ?? 'Custom / Not selected'}
// Selected Price: ${selectedPlan?.price ?? 'Not selected'}

// Budget: ${form.budget}

// Project Details:
// ${form.description}`
//     )

//     try {
//       await fetch('/api/quote-requests', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: form.name,
//           companyName: form.company,
//           email: form.email,
//           whatsappNumber: form.whatsapp,
//           serviceRequired: form.service,
//           selectedPackage: selectedPlan?.packageName ?? 'Custom / Not selected',
//           selectedPlan: selectedPlan?.planName ?? 'Custom / Not selected',
//           selectedPrice: selectedPlan?.price ?? 'Not selected',
//           budget: form.budget,
//           projectDescription: form.description,
//           sourcePage: typeof window !== 'undefined' ? window.location.pathname : leadSource.page,
//           currentUrl: typeof window !== 'undefined' ? window.location.href : leadSource.page,
//           pricingPageUrl: typeof window !== 'undefined' ? window.location.pathname : leadSource.page,
//         }),
//       })
//     } catch (error) {
//       console.error('Lead save failed before WhatsApp open', error)
//     }

//     window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
//   }

//   return (
//     <section id="quote" className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
//       <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
//         <div>
//           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
//             Need Something Custom?
//           </p>
//           <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
//             Tell us about your project and receive a tailored proposal.
//           </h2>
//           <p className="mt-5 leading-8 text-slate-300">
//             Share your goals, budget, timeline, and current bottleneck. The form opens WhatsApp with a structured message so the conversation starts clean.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-950 p-5 sm:p-6">
//           <div className="grid gap-4 sm:grid-cols-2">
//             {selectedPlan && (
//               <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-4 sm:col-span-2">
//                 <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
//                   Selected Package
//                 </p>
//                 <div className="mt-3 grid gap-3 sm:grid-cols-3">
//                   <ReadOnlyInfo label="Service" value={selectedPlan.service} />
//                   <ReadOnlyInfo label="Package" value={selectedPlan.packageName} />
//                   <ReadOnlyInfo label="Plan" value={`${selectedPlan.planName} - ${selectedPlan.price}`} />
//                 </div>
//               </div>
//             )}
//             <Field label="Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} required />
//             <Field label="Company Name" value={form.company} onChange={(value) => setForm({ ...form, company: value })} />
//             <Field label="Email" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} required />
//             <Field label="WhatsApp Number" value={form.whatsapp} onChange={(value) => setForm({ ...form, whatsapp: value })} required />
//             <label className="grid gap-2 text-sm font-medium text-slate-200">
//               Service Required
//               <select
//                 value={form.service}
//                 onChange={(event) => {
//                   const value = event.target.value
//                   setForm({ ...form, service: value })
//                   if (value.startsWith('Custom Software')) {
//                     onCustomSoftwareSelected?.()
//                   }
//                 }}
//                 className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
//               >
//                 {serviceOptions.map((option) => (
//                   <option key={option}>{option}</option>
//                 ))}
//               </select>
//             </label>
//             <label className="grid gap-2 text-sm font-medium text-slate-200">
//               Budget
//               <select
//                 value={form.budget}
//                 onChange={(event) => setForm({ ...form, budget: event.target.value })}
//                 className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
//               >
//                 {quoteBudgetOptions.map((option) => (
//                   <option key={option}>{option}</option>
//                 ))}
//               </select>
//             </label>
//             <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
//               Project Description
//               <textarea
//                 value={form.description}
//                 onChange={(event) => setForm({ ...form, description: event.target.value })}
//                 required
//                 rows={5}
//                 className="rounded-xl border border-white/10 bg-[#05070d] px-4 py-3 text-white outline-none focus:border-cyan-300"
//                 placeholder="Tell us what you want to build, improve, edit, or scale."
//               />
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
//           >
//             Send quote request on WhatsApp
//             <MessageCircle className="h-4 w-4" />
//           </button>
//         </form>
//       </div>
//     </section>
//   )
// }

// function SelectField({
//   label,
//   value,
//   onChange,
//   options,
// }: {
//   label: string
//   value: string
//   onChange: (value: string) => void
//   options: string[]
// }) {
//   return (
//     <label className="grid gap-2 text-sm font-medium text-slate-200">
//       {label}
//       <select
//         value={value}
//         onChange={(event) => onChange(event.target.value)}
//         className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
//       >
//         {options.map((option) => (
//           <option key={option}>{option}</option>
//         ))}
//       </select>
//     </label>
//   )
// }

// function ReadOnlyInfo({ label, value }: { label: string; value: string }) {
//   return (
//     <div>
//       <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
//       <div className="mt-1 text-sm font-semibold text-white">{value}</div>
//     </div>
//   )
// }

// function Field({
//   label,
//   value,
//   onChange,
//   type = 'text',
//   required = false,
// }: {
//   label: string
//   value: string
//   onChange: (value: string) => void
//   type?: string
//   required?: boolean
// }) {
//   return (
//     <label className="grid gap-2 text-sm font-medium text-slate-200">
//       {label}
//       <input
//         type={type}
//         value={value}
//         onChange={(event) => onChange(event.target.value)}
//         required={required}
//         className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
//       />
//     </label>
//   )
// }














'use client'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import RealClientResults from './RealClientResults'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock3,
  ExternalLink,
  Globe2,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  XCircle,
  Zap,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { PricingPageData, PricingRegion } from '../pricing-data'

const whatsappNumber = '917006377796'

const budgetOptions: Record<PricingRegion, string[]> = {
  international: ['Under $500', '$500 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+'],
  india: ['Under $500', '$500 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+'],
}

const trustItems = [
  'Fast Delivery',
  'Dedicated Team',
  'International Support',
  'Conversion Focused',
  'AI + Human Workflow',
  'Transparent Communication',
  'Performance Driven',
]

const socialMediaProcessSteps = [
  'You send us your raw videos, photos, products, offers, and business updates.',
  'We edit reels, create graphics, write captions, design stories, and plan content.',
  'We schedule posts, manage engagement, optimize content, and monitor performance.',
  'You receive consistent content, stronger brand visibility, and more inbound inquiries.',
]

const socialMediaIncludedItems = [
  'Client provides raw videos/photos',
  'Professional reel editing',
  'Content calendar planning',
  'Caption writing',
  'Story design',
  'Feed post design',
  'Post scheduling',
  'Community management',
  'Monthly reporting',
  'Performance optimization',
]

const socialMediaNotIncludedItems = [
  'On-site videography',
  'Product photography',
  'Influencer management',
  'Ad spend',
  'Paid promotion budget',
]

const adsCoverageItems = [
  'Campaign setup',
  'Audience research',
  'Creative strategy',
  'Lead generation funnel setup',
  'Ad management',
  'Weekly optimization',
  'Reporting',
]

// ✅ NEW: AI-friendly FAQs for Social Media Marketing
const socialMediaFaqs = [
  {
    question: 'What is included in your social media marketing packages?',
    answer: 'Our social media marketing packages include content creation, posting, community engagement, analytics reporting, and performance optimization. We handle everything from strategy to execution.'
  },
  {
    question: 'How much does social media marketing cost?',
    answer: 'Our social media marketing packages start at $500/month for the Starter plan and go up to $2,500/month for the Executive plan. We also offer custom pricing for Indian clients.'
  },
  {
    question: 'How long does it take to see results from social media marketing?',
    answer: 'Most clients see initial engagement growth within 30 days, with significant audience growth and lead generation typically visible within 60-90 days of consistent strategy execution.'
  },
  {
    question: 'Which social media platforms do you manage?',
    answer: 'We primarily manage Instagram, LinkedIn, Facebook, and YouTube. We can also support TikTok and X (Twitter) based on your target audience and business goals.'
  },
  {
    question: 'Do you create content for social media?',
    answer: 'Yes, we create all types of social media content including reels, graphics, carousels, stories, and captions. You provide the raw content, and we handle the editing, design, and posting.'
  },
  {
    question: 'Can I get a custom social media package?',
    answer: 'Absolutely! We offer custom packages for Indian clients and businesses with specific requirements. Contact us via WhatsApp to discuss your needs and get a tailored quote.'
  },
]

type PricingExperienceProps = {
  page: PricingPageData
}

type SelectedPlanContext = {
  service: string
  packageName: string
  planName: string
  price: string
}

function getLeadSource(page: PricingPageData) {
  if (page.slug === 'video-editing') {
    return {
      service: 'Video Editing',
      page: 'Video Editing Pricing',
    }
  }

  if (page.slug === 'social-media-marketing') {
    return {
      service: 'Social Media Marketing',
      page: 'Social Media Pricing',
    }
  }

  return {
    service: 'Website & Software Development',
    page: 'Website Pricing',
  }
}

function formatPlanPrice(price: string, billing: string) {
  return `${price}${billing.replace(/\s+/g, '')}`
}

function SocialMediaManagementProcess() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Social Media Management
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            How Our Social Media Management Works
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A clear monthly workflow from raw content to consistent posting, engagement, and performance improvement.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-4">
          {socialMediaProcessSteps.map((step, index) => (
            <motion.article
              key={step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                {index < socialMediaProcessSteps.length - 1 && (
                  <span className="hidden text-2xl font-semibold text-cyan-300/70 lg:block">&darr;</span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white">Step {index + 1}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialMediaTransparencySection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Transparent Scope
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            What&apos;s Included In Our Social Media Management
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Clear expectations before you choose a plan: we manage strategy, editing, posting, engagement, and optimization while you provide the raw business content.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          <ScopeCard title="Included" items={socialMediaIncludedItems} tone="included" />
          <ScopeCard title="Not Included" items={socialMediaNotIncludedItems} tone="excluded" />
        </div>
      </div>
    </section>
  )
}

function ScopeCard({ title, items, tone }: { title: string; items: string[]; tone: 'included' | 'excluded' }) {
  const isIncluded = tone === 'included'

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      className={[
        'rounded-2xl border p-6',
        isIncluded
          ? 'border-cyan-300/25 bg-cyan-300/10'
          : 'border-white/10 bg-slate-950/80',
      ].join(' ')}
    >
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-black/20 p-3 text-sm leading-6 text-slate-200">
            {isIncluded ? (
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
            ) : (
              <XCircle className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
            )}
            {item}
          </div>
        ))}
      </div>
    </motion.article>
  )
}

function AdsLeadGenerationNotice() {
  return (
    <section className="px-4 pt-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="mx-auto max-w-7xl rounded-2xl border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(15,23,42,0.96)_48%,rgba(8,13,25,0.98))] p-6 sm:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Important
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white">
              Ad spend is NOT included in any package.
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Advertising budget is paid directly by the client to Meta or Google. Our pricing covers the strategy, setup, management, optimization, and reporting work.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {adsCoverageItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-200">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function SocialMediaCustomProposalCta() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-950/80 p-6 text-center sm:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Need Something Custom?
        </p>
        <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-300">
          If your business requires a custom strategy, content volume, ad management, or account handling, request a personalized quote and we&apos;ll build a package specifically for your goals.
        </p>
        <a
          href="#quote"
          className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
        >
          Get Custom Proposal
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  )
}

// ✅ NEW: AI-Friendly FAQ Section
function SocialMediaFAQSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white/[0.02]">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Frequently Asked Questions About Social Media Marketing
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Find answers to common questions about our social media marketing services, pricing, and process.
          </p>
        </div>
        <div className="space-y-4">
          {socialMediaFaqs.map((faq, index) => (
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
  )
}

export default function PricingExperience({ page }: PricingExperienceProps) {
  const [region, setRegion] = useState<PricingRegion>('international')
  const [openFaq, setOpenFaq] = useState(0)
  const [activePackageIndex, setActivePackageIndex] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlanContext | null>(null)
  const activePackage = page.packageTiers?.[activePackageIndex]
  const activePlans = activePackage?.plans ?? page.plans
  const activeServices = activePackage?.services ?? page.services
  const isVideoEditingPage = page.slug === 'video-editing'
  const isSocialMediaPage = page.slug === 'social-media-marketing'
  const isWebDevelopmentPage = page.slug === 'web-development'
  const isCustomSoftwareTab = activePackage?.id === 'custom-software'
  const isAdsLeadGenerationTab = activePackage?.id === 'ads-lead-generation'
  const leadSource = getLeadSource(page)

  useEffect(() => {
    const savedRegion = window.localStorage.getItem('snipercoders-pricing-region')
    if (savedRegion === 'international' || savedRegion === 'india') {
      setRegion(savedRegion)
    }
  }, [])

  const updateRegion = (nextRegion: PricingRegion) => {
    setRegion(nextRegion)
    setSelectedPlan(null)
    window.localStorage.setItem('snipercoders-pricing-region', nextRegion)
  }

  const ctaMessage = useMemo(
    () =>
      encodeURIComponent(
        `Hello SniperCoders!

I am interested in your ${leadSource.service} services.

Page: ${leadSource.page}`
      ),
    [leadSource.page, leadSource.service]
  )

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <section className="relative isolate px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8 lg:pt-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.24),transparent_58%)]" />

          <div className="mx-auto max-w-6xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300"
            >
              {page.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            >
              {page.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              {page.description}
            </motion.p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#plans"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                View packages
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${ctaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/20"
              >
                Ask on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
              {page.audience.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                onClick={() =>
                  setSelectedPlan({
                    service: page.serviceRequired,
                    packageName: activePackage?.title ?? 'Custom Package',
                    planName: 'Custom Package',
                    price: 'Custom Quote',
                  })
                }
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Customize package
                <Sparkles className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <ShieldCheck className="h-5 w-5 shrink-0 text-cyan-300" />
                <span>Transparent premium pricing with custom proposal options.</span>
              </div>
            </div>
            <RegionToggle region={region} onChange={updateRegion} />
          </div>
        </section>

        {page.packageTiers && page.packageTiers.length > 1 && (
          <section className="px-4 pt-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
              <PackageToggle
                tiers={page.packageTiers}
                activeIndex={activePackageIndex}
                onChange={(index) => {
                  setActivePackageIndex(index)
                  setSelectedPlan(null)
                }}
              />
              {activePackage && (
                <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{activePackage.title}</h2>
                    <p className="mt-2 max-w-3xl leading-7 text-slate-300">{activePackage.description}</p>
                  </div>
                  {activePackage.costNote && (
                    <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100">
                      {activePackage.costNote}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {isWebDevelopmentPage && (
          <section className="px-4 pt-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-medium leading-6 text-cyan-100">
              All plans cover development only. Hosting, domain, server costs, and third-party subscription fees are not included and are paid directly by the client.
            </div>
          </section>
        )}

        {page.caseStudies && <RealClientResults caseStudies={page.caseStudies} className="pt-12" />}

        {isVideoEditingPage && <VideoEditingPortfolioPreview />}
        {isWebDevelopmentPage && (
          isCustomSoftwareTab ? <CustomSoftwarePortfolioPreview /> : <WebsitePortfolioPreview />
        )}

        {isSocialMediaPage && <SocialMediaManagementProcess />}
        {isSocialMediaPage && <SocialMediaTransparencySection />}
        {isSocialMediaPage && isAdsLeadGenerationTab && <AdsLeadGenerationNotice />}

        <section id="plans" className="px-4 py-16 sm:px-6 lg:px-8">
          {isCustomSoftwareTab ? (
            <CustomSoftwareProjectForm page={page} />
          ) : region === 'india' ? (
            <IndiaCustomOnly
              page={page}
              activePackageTitle={activePackage?.title}
              onCustomize={() =>
                setSelectedPlan({
                  service: page.serviceRequired,
                  packageName: activePackage?.title ?? 'Custom India Package',
                  planName: 'Custom India Package',
                  price: 'Custom Quote',
                })
              }
            />
          ) : (
            <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
              {activePlans.map((plan, index) => (
                (() => {
                  const planContext = {
                    service: page.serviceRequired,
                    packageName: activePackage?.title ?? page.title,
                    planName: plan.name,
                    price: formatPlanPrice(plan.internationalPrice, plan.billing),
                  }

                  return (
                    <motion.article
                      key={`${activePackage?.id ?? 'default'}-${plan.name}`}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ delay: index * 0.08 }}
                      className={[
                        'relative rounded-2xl border p-6 transition hover:-translate-y-1',
                        plan.popular
                          ? 'border-cyan-300/50 bg-cyan-300/[0.08] shadow-[0_0_40px_rgba(34,211,238,0.12)]'
                          : 'border-white/10 bg-white/[0.04]',
                      ].join(' ')}
                    >
                      {plan.popular && (
                        <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          Most Popular
                        </div>
                      )}
                      <h2 className="pr-28 text-2xl font-semibold">{plan.name}</h2>
                      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-300">{plan.subtitle}</p>
                      <div className="mt-6 flex items-end gap-1">
                        <span className="text-4xl font-semibold">{plan.internationalPrice}</span>
                        <span className="pb-1 text-sm text-slate-400">{plan.billing}</span>
                      </div>
                      {plan.popular && <p className="mt-3 text-sm font-semibold text-cyan-200">Best value for consistent growth.</p>}

                      <div className="mt-6 grid gap-3 text-sm text-slate-300">
                        <PlanMeta icon={Clock3} label="Turnaround" value={plan.turnaround} />
                        <PlanMeta icon={Sparkles} label="Revisions" value={plan.revisions} />
                        <PlanMeta icon={Headphones} label="Support" value={plan.support} />
                        <PlanMeta icon={BarChart3} label="Monthly Output" value={plan.monthlyDeliverables} />
                      </div>

                      <ul className="mt-6 space-y-3">
                        {plan.deliverables.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {plan.note && <p className="mt-5 text-xs leading-6 text-slate-400">{plan.note}</p>}

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPlan(planContext)
                          window.setTimeout(() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' }), 0)
                        }}
                        className={[
                          'mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition',
                          plan.popular
                            ? 'bg-white text-slate-950 hover:bg-cyan-100'
                            : 'border border-white/15 bg-white/5 text-white hover:border-cyan-300/60 hover:bg-cyan-300/10',
                        ].join(' ')}
                      >
                        Request this plan
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </motion.article>
                  )
                })()
              ))}
            </div>
          )}
        </section>

        {isSocialMediaPage && <SocialMediaCustomProposalCta />}

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-3">
              <Zap className="h-6 w-6 text-cyan-300" />
              <h2 className="text-3xl font-semibold">Included service coverage</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {activeServices.map((service) => (
                <div key={service} className="rounded-xl border border-white/10 bg-slate-950/60 p-4 text-sm font-medium text-slate-200">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Why Clients Choose SniperCoders
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Premium execution without confusing agency layers.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                You get practical strategy, fast communication, and creative assets built around trust, conversion, and growth.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ NEW: AI-Friendly FAQ Section */}
        {isSocialMediaPage && <SocialMediaFAQSection />}

        <QuoteSection
          page={page}
          region={region}
          selectedPlan={selectedPlan}
          onCustomSoftwareSelected={
            isWebDevelopmentPage
              ? () => {
                  const customIndex = page.packageTiers?.findIndex((tier) => tier.id === 'custom-software') ?? -1
                  if (customIndex >= 0) {
                    setActivePackageIndex(customIndex)
                    window.setTimeout(() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' }), 0)
                  }
                }
              : undefined
          }
        />

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Questions
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Pricing FAQs</h2>
            </div>
            <div className="space-y-3">
              {page.faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/[0.04]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-white"
                      aria-expanded={isOpen}
                    >
                      {faq.question}
                      <ChevronDown className={`h-5 w-5 shrink-0 text-cyan-300 transition ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && <p className="px-5 pb-5 leading-7 text-slate-300">{faq.answer}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.2),rgba(15,23,42,0.96)_42%,rgba(236,72,153,0.16))] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Social Proof
                </p>
                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  We let the work speak.
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-200">
                  Portfolio and case studies available on request via WhatsApp before you commit to any plan.
                </p>
              </div>
              <a
                href="#quote"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Get a tailored quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <a
          href="#quote"
          className="fixed inset-x-4 bottom-4 z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_36px_rgba(34,211,238,0.28)] sm:hidden"
        >
          Request quote
          <MessageCircle className="h-4 w-4" />
        </a>
      </main>
      <Footer />
    </>
  )
}

function RegionToggle({ region, onChange }: { region: PricingRegion; onChange: (region: PricingRegion) => void }) {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 rounded-full border border-white/10 bg-slate-950 p-1 text-sm font-semibold sm:w-80">
      {[
        { value: 'international' as const, label: 'International', icon: Globe2 },
        { value: 'india' as const, label: 'India', icon: ShieldCheck },
      ].map((item) => {
        const Icon = item.icon
        const active = region === item.value
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={`relative flex min-h-10 items-center justify-center gap-2 rounded-full px-4 transition ${
              active ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

function IndiaCustomOnly({
  page,
  activePackageTitle,
  onCustomize,
}: {
  page: PricingPageData
  activePackageTitle?: string
  onCustomize: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      className="mx-auto max-w-4xl rounded-2xl border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(15,23,42,0.96)_48%,rgba(236,72,153,0.12))] p-6 text-center shadow-[0_0_45px_rgba(34,211,238,0.10)] sm:p-10"
    >
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
        <Sparkles className="h-7 w-7" />
      </div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
        India Pricing
      </p>
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
        Customize your Indian package
      </h2>
      <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
        For Indian clients, we prepare a custom quote based on your scope, city, monthly volume,
        timeline, and the exact deliverables you need
        {activePackageTitle ? ` for ${activePackageTitle}` : ` for ${page.serviceRequired}`}.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href="#quote"
          onClick={onCustomize}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
        >
          Customize package
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hello SniperCoders!

I am interested in your ${getLeadSource(page).service} services.

Page: ${getLeadSource(page).page}

Request: Custom package`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/20"
        >
          WhatsApp for quote
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}

function PackageToggle({
  tiers,
  activeIndex,
  onChange,
}: {
  tiers: NonNullable<PricingPageData['packageTiers']>
  activeIndex: number
  onChange: (index: number) => void
}) {
  return (
    <div
      className="grid gap-2 rounded-full border border-white/10 bg-[#05070d] p-1 text-sm font-semibold sm:grid-cols-2"
      role="tablist"
      aria-label="Package type"
    >
      {tiers.map((tier, index) => {
        const active = activeIndex === index
        return (
          <button
            key={tier.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(index)}
            className={`min-h-11 rounded-full px-4 py-2 transition ${
              active ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            {tier.label}
          </button>
        )
      })}
    </div>
  )
}

function PlanMeta({ icon: Icon, label, value }: { icon: typeof Clock3; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</div>
        <div className="mt-1 text-slate-200">{value}</div>
      </div>
    </div>
  )
}

function WebsitePortfolioPreview() {
  return (
    <section className="px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950">
          <Image
            src="/images/ride_adventure.png"
            alt="Ride Adventure website portfolio preview by SniperCoders"
            width={1200}
            height={760}
            className="aspect-[16/10] w-full object-cover"
            priority={false}
          />
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            Website Portfolio
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            See The Work
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Explore Real Client Websites
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            See the quality, responsiveness, UI/UX, and business-focused websites we&apos;ve built for clients.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {['Real project previews', 'Responsive website builds', 'Conversion-focused sections', 'Current portfolio examples'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
          <Link
            href="/showcase/websites"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            View Live Projects
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function CustomSoftwarePortfolioPreview() {
  return (
    <section className="px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950">
          <Image
            src="/images/image.png"
            alt="TorkeHub custom software portfolio preview by SniperCoders"
            width={1200}
            height={760}
            className="aspect-[16/10] w-full object-cover"
            priority={false}
          />
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            Custom Software Portfolio
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            See The System
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Explore TorkeHub Custom Software
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            See how we design CRM-style dashboards, automation flows, clear interfaces, and business-focused software experiences.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {['CRM interface design', 'Automation-focused workflows', 'Dashboard UX', 'Business software structure'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
          <a
            href="https://www.torkehub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            View TorkeHub Project
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function VideoEditingPortfolioPreview() {
  return (
    <section className="px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950">
          <video
            src="https://res.cloudinary.com/dzoxwk1jc/video/upload/v1781198635/Dubai_realstate_1_pcwu5o.mp4"
            className="aspect-[9/16] w-full object-cover"
            controls
            preload="metadata"
            playsInline
          />
          <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            Real Estate Client Video
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            See The Editing Quality
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Explore Real Estate Client Videos
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            See the pacing, captions, property-focused storytelling, vertical formatting, and clean edits we create for real estate content.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {['Real estate reels', 'Property walkthrough edits', 'Captions and pacing', 'Mobile-first vertical format'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
          <Link href="/showcase/video-editing/">View Our Video Editing</Link>
        </div>
      </div>
    </section>
  )
}

function CustomSoftwareProjectForm({ page }: { page: PricingPageData }) {
  const leadSource = getLeadSource(page)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    projectType: 'SaaS Platform',
    budget: '$8,000 - $20,000',
    timeline: '1 to 3 months',
    hasSpec: 'No - I need help scoping this',
    description: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = encodeURIComponent(
      `Hello SniperCoders!

I am interested in your ${leadSource.service} services.

Page: ${leadSource.page}

New Custom Software Project Request

Full Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
WhatsApp: ${form.whatsapp}

Project Type: ${form.projectType}
Estimated Budget: ${form.budget}
Timeline: ${form.timeline}
Technical Document: ${form.hasSpec}

Project Description:
${form.description}`
    )

    try {
      await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          companyName: form.company,
          email: form.email,
          whatsappNumber: form.whatsapp,
          serviceRequired: leadSource.service,
          selectedPackage: 'Custom Software Project',
          selectedPlan: form.projectType,
          selectedPrice: 'Custom Quote',
          budget: form.budget,
          projectDescription: form.description,
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : leadSource.page,
          currentUrl: typeof window !== 'undefined' ? window.location.href : leadSource.page,
          pricingPageUrl: typeof window !== 'undefined' ? window.location.pathname : leadSource.page,
        }),
      })
    } catch (error) {
      console.error('Lead save failed before WhatsApp open', error)
    }

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Custom Software Proposal
        </p>
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          Tell us what you need to build.
        </h2>
        <p className="mt-5 leading-8 text-slate-300">
          Custom software is scoped individually. No fixed price list - because no two projects are the same.
          Fill the form and we will review your requirements and send a detailed proposal within 48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-950 p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} required />
          <Field label="Company Name" value={form.company} onChange={(value) => setForm({ ...form, company: value })} />
          <Field label="Email Address" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} required />
          <Field label="WhatsApp Number" value={form.whatsapp} onChange={(value) => setForm({ ...form, whatsapp: value })} required />
          <SelectField
            label="Project Type"
            value={form.projectType}
            onChange={(value) => setForm({ ...form, projectType: value })}
            options={[
              'SaaS Platform',
              'CRM System',
              'ERP Solution',
              'Admin Dashboard',
              'AI Integration',
              'Workflow Automation',
              'API Integration',
              'Mobile App',
              'Other (describe below)',
            ]}
          />
          <SelectField
            label="Estimated Budget"
            value={form.budget}
            onChange={(value) => setForm({ ...form, budget: value })}
            options={['Under $3,000', '$3,000 - $8,000', '$8,000 - $20,000', '$20,000 - $50,000', '$50,000+', 'Not sure yet']}
          />
          <SelectField
            label="Timeline"
            value={form.timeline}
            onChange={(value) => setForm({ ...form, timeline: value })}
            options={['As soon as possible', 'Within 1 month', '1 to 3 months', '3 to 6 months', 'Flexible']}
          />
          <SelectField
            label="Technical document or specification?"
            value={form.hasSpec}
            onChange={(value) => setForm({ ...form, hasSpec: value })}
            options={['Yes - I will share it on WhatsApp', 'No - I need help scoping this']}
          />
          <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
            Project Description
            <textarea
              value={form.description}
              onChange={(event) => setForm({ ...form, description: event.target.value })}
              required
              rows={6}
              className="rounded-xl border border-white/10 bg-[#05070d] px-4 py-3 text-white outline-none focus:border-cyan-300"
              placeholder="Describe what you want to build, what problem it solves, and any technical requirements you already know."
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
        >
          Send project details on WhatsApp
          <MessageCircle className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}

function QuoteSection({
  page,
  region,
  selectedPlan,
  onCustomSoftwareSelected,
}: {
  page: PricingPageData
  region: PricingRegion
  selectedPlan: SelectedPlanContext | null
  onCustomSoftwareSelected?: () => void
}) {
  const leadSource = getLeadSource(page)
  const isWebDevelopmentPage = page.slug === 'web-development'
  const quoteBudgetOptions = useMemo(
    () =>
      isWebDevelopmentPage
        ? ['Under $1,000', '$1,000 - $3,000', '$3,000 - $8,000', '$8,000 - $20,000', '$20,000+']
        : budgetOptions[region],
    [isWebDevelopmentPage, region]
  )
  const serviceOptions = useMemo(
    () =>
      isWebDevelopmentPage
        ? ['Website Development', 'Landing Page', 'Ecommerce Store', 'Booking System', 'Website Redesign', 'Custom Software (redirects to custom tab)']
        : [page.serviceRequired, 'Video Editing', 'Social Media Marketing', 'Website & Software Development', 'AI Solutions', 'Business Automation'],
    [isWebDevelopmentPage, page.serviceRequired]
  )
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    service: serviceOptions[0],
    budget: quoteBudgetOptions[1],
    description: '',
  })

  useEffect(() => {
    setForm((current) => ({ ...current, budget: quoteBudgetOptions[1], service: serviceOptions[0] }))
  }, [quoteBudgetOptions, serviceOptions])

  useEffect(() => {
    if (selectedPlan) {
      setForm((current) => ({ ...current, service: selectedPlan.service }))
    }
  }, [selectedPlan])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = encodeURIComponent(
      `Hello SniperCoders!

I am interested in your ${leadSource.service} services.

Page: ${leadSource.page}

New Custom Quote Request

Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
WhatsApp: ${form.whatsapp}

Service Required: ${form.service}
Selected Package: ${selectedPlan?.packageName ?? 'Not selected'}
Selected Plan: ${selectedPlan?.planName ?? 'Custom / Not selected'}
Selected Price: ${selectedPlan?.price ?? 'Not selected'}

Budget: ${form.budget}

Project Details:
${form.description}`
    )

    try {
      await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          companyName: form.company,
          email: form.email,
          whatsappNumber: form.whatsapp,
          serviceRequired: form.service,
          selectedPackage: selectedPlan?.packageName ?? 'Custom / Not selected',
          selectedPlan: selectedPlan?.planName ?? 'Custom / Not selected',
          selectedPrice: selectedPlan?.price ?? 'Not selected',
          budget: form.budget,
          projectDescription: form.description,
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : leadSource.page,
          currentUrl: typeof window !== 'undefined' ? window.location.href : leadSource.page,
          pricingPageUrl: typeof window !== 'undefined' ? window.location.pathname : leadSource.page,
        }),
      })
    } catch (error) {
      console.error('Lead save failed before WhatsApp open', error)
    }

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="quote" className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Need Something Custom?
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Tell us about your project and receive a tailored proposal.
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            Share your goals, budget, timeline, and current bottleneck. The form opens WhatsApp with a structured message so the conversation starts clean.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-950 p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {selectedPlan && (
              <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-4 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Selected Package
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <ReadOnlyInfo label="Service" value={selectedPlan.service} />
                  <ReadOnlyInfo label="Package" value={selectedPlan.packageName} />
                  <ReadOnlyInfo label="Plan" value={`${selectedPlan.planName} - ${selectedPlan.price}`} />
                </div>
              </div>
            )}
            <Field label="Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} required />
            <Field label="Company Name" value={form.company} onChange={(value) => setForm({ ...form, company: value })} />
            <Field label="Email" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} required />
            <Field label="WhatsApp Number" value={form.whatsapp} onChange={(value) => setForm({ ...form, whatsapp: value })} required />
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Service Required
              <select
                value={form.service}
                onChange={(event) => {
                  const value = event.target.value
                  setForm({ ...form, service: value })
                  if (value.startsWith('Custom Software')) {
                    onCustomSoftwareSelected?.()
                  }
                }}
                className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
              >
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Budget
              <select
                value={form.budget}
                onChange={(event) => setForm({ ...form, budget: event.target.value })}
                className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
              >
                {quoteBudgetOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
              Project Description
              <textarea
                value={form.description}
                onChange={(event) => setForm({ ...form, description: event.target.value })}
                required
                rows={5}
                className="rounded-xl border border-white/10 bg-[#05070d] px-4 py-3 text-white outline-none focus:border-cyan-300"
                placeholder="Tell us what you want to build, improve, edit, or scale."
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            Send quote request on WhatsApp
            <MessageCircle className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function ReadOnlyInfo({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  required?: boolean
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="min-h-12 rounded-xl border border-white/10 bg-[#05070d] px-4 text-white outline-none focus:border-cyan-300"
      />
    </label>
  )
}