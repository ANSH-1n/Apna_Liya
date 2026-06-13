//app/pricing/pricing-data.ts
//app/pricing/pricing-data.ts

import type { Metadata } from 'next'

export type PricingRegion = 'international' | 'india'

export type PricingPlan = {
  name: string
  subtitle: string
  internationalPrice: string
  indiaPrice: string
  billing: string
  deliverables: string[]
  turnaround: string
  revisions: string
  support: string
  monthlyDeliverables: string
  note?: string
  popular?: boolean
}

export type PricingPackageTier = {
  id: string
  label: string
  title: string
  description: string
  costNote?: string
  services?: string[]
  plans: PricingPlan[]
}

export type ClientResultScreenshot = {
  label: string
  src: string
  alt: string
}

export type ClientResultCaseStudy = {
  clientName: string
  industry: string
  instagramUrl: string
  managementDuration: string
  beforeLeads: string
  afterLeads: string
  growth: string
  screenshots: ClientResultScreenshot[]
  services: string[]
  resultsSummary: string
  clientQuote?: {
    text: string
    attribution: string
  }
  trustIndicators?: string[]
}

export type PricingPageData = {
  slug: string
  title: string
  eyebrow: string
  description: string
  audience: string[]
  services: string[]
  plans: PricingPlan[]
  packageTiers?: PricingPackageTier[]
  caseStudies?: ClientResultCaseStudy[]
  faqs: { question: string; answer: string }[]
  serviceRequired: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

const baseUrl = 'https://www.snipercoders.in'

export const socialMediaGrowthCaseStudies: ClientResultCaseStudy[] = [
  {
    clientName: 'Ride Adventure',
    industry: 'Bike parts and riding accessories retail',
    instagramUrl: 'https://www.instagram.com/ride_adventure_/',
    managementDuration: '7 Months',
    beforeLeads: 'Less than 10 organic inquiries per month',
    afterLeads: '40-50 organic inquiries per month',
    growth: '5X',
    screenshots: [
      {
        label: 'Instagram Profile Preview',
        src: '/images/ride_adventure_insta_profil.png',
        alt: 'Ride Adventure Instagram profile preview managed by SniperCoders',
      },
      {
        label: 'Real Customer Inquiry #1',
        src: '/images/ride_adventure_dm_1.jpeg',
        alt: 'Ride Adventure organic Instagram inquiry preview one',
      },
      {
        label: 'Real Customer Inquiry #2',
        src: '/images/ride_adventure_dm_2.jpeg',
        alt: 'Ride Adventure organic Instagram inquiry preview two',
      },
    ],
    services: [
      'Content Strategy',
      'Content Calendar',
      'Professional Reel Editing (Client Footage)',
      'Social Media Management',
      'Community Management',
      'Growth Optimization',
    ],
    resultsSummary:
      'Consistent content execution and platform optimization helped the client increase inbound inquiries from fewer than 10 per month to 40-50 organic inquiries monthly while strengthening brand visibility and audience engagement.',
    clientQuote: {
      text: 'We started receiving regular customer inquiries through Instagram after SniperCoders handled our content and account management.',
      attribution: 'Ride Adventure',
    },
    trustIndicators: [
      '7+ Months Management',
      '5X Inquiry Growth',
      'Consistent Organic Leads',
      'Real Verified Client',
    ],
  },
]

const sharedFaqs = [
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. We work with startups and businesses across the US, UK, Australia, Canada, Dubai, and Singapore. All communication runs on WhatsApp and Google Meet with clear milestone checkpoints.',
  },
  {
    question: 'Can I upgrade or downgrade later?',
    answer:
      'Yes. You can move between plans at the start of any new billing cycle. We will adjust the scope and deliverables accordingly.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfer and suitable international payment options such as Wise or Payoneer. Payment terms are confirmed in the proposal.',
  },
  {
    question: 'Can I request a custom package?',
    answer:
      'Yes. Use the quote form and share your goals, budget, and timeline. We will send a tailored scope within 24 hours.',
  },
]

export const pricingPages: Record<string, PricingPageData> = {
  'video-editing': {
    slug: 'video-editing',
    title: 'Video Editing Pricing',
    eyebrow: 'Pricing for creators and brands',
    description:
      'Short-form and long-form editing packages for creators, coaches, podcast hosts, real estate professionals, fitness brands, and agencies. Fast turnaround, professional output, no fluff.',
    audience: [
      'Podcast Hosts',
      'Coaches',
      'Creators',
      'Fitness Brands',
      'Real Estate Professionals',
      'Personal Brands',
      'Agencies',
    ],
    services: [
      'Reels Editing',
      'YouTube Shorts',
      'Podcast Clip Editing',
      'Long Form Video Editing',
      'Talking Head Videos',
      'Real Estate Walkthrough Videos',
      'Fitness and Transformation Videos',
      'Captions and Subtitles',
      'Hook Optimization',
      'Motion Graphics',
      'Thumbnail Design',
      'Music and SFX',
    ],
    serviceRequired: 'Video Editing',
    plans: [
      {
        name: 'Starter',
        subtitle: 'For creators starting with consistent vertical content.',
        internationalPrice: '$199',
        indiaPrice: 'Rs.7,999',
        billing: '/ month',
        deliverables: [
          '6 short-form videos per month',
          'Captions and hook-focused opening',
          'Music, pacing, and vertical format optimization',
          'Clean cuts for reels and shorts',
          'Delivery via Google Drive',
        ],
        turnaround: '3-5 business days per batch',
        revisions: '1 revision per video',
        support: 'WhatsApp support',
        monthlyDeliverables: '6 reels or shorts under 60 seconds',
      },
      {
        name: 'Growth',
        subtitle: 'For brands posting with steady weekly momentum.',
        internationalPrice: '$449',
        indiaPrice: 'Rs.19,999',
        billing: '/ month',
        deliverables: [
          '16 short-form videos per month',
          'Captions, hooks, music, and pacing',
          'Vertical format edits for Instagram and YouTube Shorts',
          'Motion graphics and clean transitions',
          'Monthly performance notes',
        ],
        turnaround: '2-4 business days per batch',
        revisions: '2 revisions per video',
        support: 'Priority WhatsApp support',
        monthlyDeliverables: '16 reels or shorts under 60 seconds',
        popular: true,
      },
      {
        name: 'Scale',
        subtitle: 'For high-volume creators and fast-moving brands.',
        internationalPrice: '$899',
        indiaPrice: 'Rs.39,999',
        billing: '/ month',
        deliverables: [
          '30 short-form videos per month',
          'Advanced captions, hooks, music, and pacing',
          'Vertical format optimization for every video',
          'Motion graphics and platform-ready exports',
          'Dedicated editor assigned to your account',
        ],
        turnaround: '1-3 business days per batch',
        revisions: '3 revisions per video',
        support: 'Dedicated editor channel',
        monthlyDeliverables: '30 reels or shorts under 60 seconds',
      },
    ],
    packageTiers: [
      {
        id: 'short-form',
        label: 'Short-Form Content',
        title: 'Short-Form Content',
        description:
          'For reels, Instagram Shorts, YouTube Shorts, creator clips, and vertical videos under 60 seconds.',
       
        services: [
          'Reels Editing',
          'Instagram Shorts',
          'YouTube Shorts',
          'Captions',
          'Hook Optimization',
          'Music and SFX',
          'Pacing',
          'Vertical Format',
        ],
        plans: [
          {
            name: 'Starter',
            subtitle: 'For creators starting with consistent vertical content.',
            internationalPrice: '$199',
            indiaPrice: 'Rs.7,999',
            billing: '/ month',
            deliverables: [
              '6 short-form videos per month',
              'Captions and hook-focused opening',
              'Music, pacing, and vertical format optimization',
              'Clean cuts for reels and shorts',
              'Delivery via Google Drive',
            ],
            turnaround: '3-5 business days per batch',
            revisions: '1 revision per video',
            support: 'WhatsApp support',
            monthlyDeliverables: '6 reels or shorts under 60 seconds',
          },
          {
            name: 'Growth',
            subtitle: 'For brands posting with steady weekly momentum.',
            internationalPrice: '$449',
            indiaPrice: 'Rs.19,999',
            billing: '/ month',
            deliverables: [
              '16 short-form videos per month',
              'Captions, hooks, music, and pacing',
              'Vertical format edits for Instagram and YouTube Shorts',
              'Motion graphics and clean transitions',
              'Monthly performance notes',
            ],
            turnaround: '2-4 business days per batch',
            revisions: '2 revisions per video',
            support: 'Priority WhatsApp support',
            monthlyDeliverables: '16 reels or shorts under 60 seconds',
            popular: true,
          },
          {
            name: 'Scale',
            subtitle: 'For high-volume creators and fast-moving brands.',
            internationalPrice: '$899',
            indiaPrice: 'Rs.39,999',
            billing: '/ month',
            deliverables: [
              '30 short-form videos per month',
              'Advanced captions, hooks, music, and pacing',
              'Vertical format optimization for every video',
              'Motion graphics and platform-ready exports',
              'Dedicated editor assigned to your account',
            ],
            turnaround: '1-3 business days per batch',
            revisions: '3 revisions per video',
            support: 'Dedicated editor channel',
            monthlyDeliverables: '30 reels or shorts under 60 seconds',
          },
        ],
      },
      {
        id: 'long-form',
        label: 'Long-Form Content',
        title: 'Long-Form Content',
        description:
          'For YouTube videos, podcast episodes, webinars, talking-head edits, and videos over 5 minutes.',
        costNote: 'Editor cost per video: Rs.2,000 to Rs.3,500',
        services: [
          'YouTube Video Editing',
          'Podcast Episodes',
          'Talking Head Videos',
          'Webinars',
          'Clean Cuts',
          'Chapter Markers',
          'B-roll Direction',
          'Subtitles',
          'Thumbnail Design',
        ],
        plans: [
          {
            name: 'Starter',
            subtitle: 'For consistent YouTube or podcast publishing.',
            internationalPrice: '$499',
            indiaPrice: 'Rs.11,999',
            billing: '/ month',
            deliverables: [
              '4 long-form videos per month, up to 40 minutes each',
              'Clean cuts and pacing improvements',
              'Basic subtitles',
              'Chapter marker suggestions',
              'Delivery via Google Drive',
            ],
            turnaround: '4-6 business days',
            revisions: '1 revision per video',
            support: 'WhatsApp support',
            monthlyDeliverables: '4 videos, up to 40 minutes each',
          },
          {
            name: 'Growth',
            subtitle: 'For channels and podcasts publishing every week.',
            internationalPrice: '$949',
            indiaPrice: 'Rs.22,999',
            billing: '/ month',
            deliverables: [
              '8 long-form videos per month, up to 40 minutes each',
              'Clean cuts, subtitles, and chapter markers',
              'B-roll direction and pacing notes',
              'Thumbnail design for every video',
              'Monthly improvement notes',
            ],
            turnaround: '3-5 business days',
            revisions: '2 revisions per video',
            support: 'Priority WhatsApp support',
            monthlyDeliverables: '8 videos, up to 40 minutes each',
            popular: true,
          },
          {
            name: 'Scale',
            subtitle: 'For high-volume YouTube, podcast, and education teams.',
            internationalPrice: '$1,699',
            indiaPrice: 'Rs.44,999',
            billing: '/ month',
            deliverables: [
              '15 long-form videos per month, up to 40 minutes each',
              'Everything in Growth',
              'Advanced pacing and retention optimization',
              'B-roll direction for stronger retention',
              'Dedicated editor assigned to your account',
            ],
            turnaround: '2-4 business days',
            revisions: '3 revisions per video',
            support: 'Dedicated editor channel',
            monthlyDeliverables: '15 videos, up to 40 minutes each',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the difference between short-form and long-form packages?',
        answer:
          'Short-form covers reels, Instagram Shorts, and YouTube Shorts under 60 seconds. Long-form covers YouTube videos, podcast episode edits, webinars, and talking head videos over 5 minutes.',
      },
      {
        question: 'What formats do you edit?',
        answer:
          'We edit reels, YouTube Shorts, TikToks, podcast clips, talking heads, real estate walkthroughs, fitness transformations, and long-form content repurposed into clips.',
      },
      {
        question: 'Do you provide source files?',
        answer:
          'Source files are available on Growth and Scale plans when requested before the project begins.',
      },
      {
        question: 'How do I send raw footage?',
        answer:
          'You share raw files via Google Drive or WeTransfer. We download, edit, and return finished files to the same folder.',
      },
      {
        question: 'Can you match a specific editing style?',
        answer:
          'Yes. Share reference videos before we start and we will match the style, pacing, and tone.',
      },
      ...sharedFaqs,
    ],
    seo: {
      title: 'Video Editing Pricing | SniperCoders',
      description:
        'Affordable video editing packages for reels, podcast clips, shorts, real estate videos, fitness content, captions, thumbnails, and motion graphics. International and India pricing available.',
      keywords: [
        'video editing pricing',
        'reels editing package',
        'podcast clip editing',
        'short form video editing agency',
        'SniperCoders pricing',
      ],
    },
  },

  'social-media-marketing': {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing Pricing',
    eyebrow: 'Monthly retainer pricing',
    description:
      'Done-for-you social media management for founders, coaches, and brands in the US, UK, Australia, and beyond. Content editing, posting, paid ads, lead generation, and reporting - without the cost of hiring in-house.',
    audience: [
      'Founders',
      'Local Businesses',
      'Coaches',
      'Ecommerce Brands',
      'Fitness Studios',
      'Service Businesses',
      'Agencies',
    ],
    services: [
      'Instagram Management',
      'Facebook Management',
      'LinkedIn Content',
      'Content Strategy',
      'Monthly Content Calendar',
      'Caption Writing',
      'Scheduling and Posting',
      'Community Management',
      'Meta Ads Management',
      'Google Ads Management',
      'Lead Generation Campaigns',
      'Content Editing & Management',
      'Monthly Performance Reports',
    ],
    serviceRequired: 'Social Media Marketing',
    caseStudies: socialMediaGrowthCaseStudies,
    plans: [
      {
        name: 'Starter',
        subtitle: 'For a consistent and professional presence.',
        internationalPrice: '$399',
        indiaPrice: 'Rs.14,999',
        billing: '/ month',
        deliverables: [
          'Client provides raw content',
          '12 static posts per month',
          '4 professionally edited reels from client footage per month',
          'Monthly content calendar',
          'Caption writing and hashtag research',
          'Scheduling and posting included',
          'Basic monthly report',
        ],
        turnaround: 'Weekly scheduling',
        revisions: '1 content revision round',
        support: 'WhatsApp support',
        monthlyDeliverables: '16 content assets',
      },
      {
        name: 'Growth',
        subtitle: 'For lead generation and real audience growth.',
        internationalPrice: '$799',
        indiaPrice: 'Rs.39,999',
        billing: '/ month',
        deliverables: [
          'Client provides raw content',
          '20 posts per month',
          '8 professionally edited reels from client footage per month',
          'Meta Ads setup and management',
          'Google Ads direction',
          'Lead generation campaign setup',
          'Community management',
          'Detailed monthly report with insights',
        ],
        turnaround: 'Weekly planning and posting',
        revisions: '2 content revision rounds',
        support: 'Priority WhatsApp support',
        monthlyDeliverables: '28 content assets',
        popular: true,
      },
      {
        name: 'Scale',
        subtitle: 'For brands that need full execution and strategy.',
        internationalPrice: '$1,499',
        indiaPrice: 'Rs.79,999',
        billing: '/ month',
        deliverables: [
          'Client provides raw content',
          '30 posts per month',
          '12 professionally edited reels from client footage per month',
          'Meta and Google Ads full management',
          'Community management and DM handling',
          'Creative testing across ad sets',
          'Competitor benchmarking',
          'Detailed bi-weekly reports',
        ],
        turnaround: 'Weekly sprint rhythm',
        revisions: '3 content revision rounds',
        support: 'Dedicated strategy channel',
        monthlyDeliverables: '42+ content assets',
      },
    ],
    packageTiers: [
      {
        id: 'organic-management',
        label: 'Organic Management',
        title: 'Organic Social Media Management',
        description:
          'For Instagram, Facebook, and LinkedIn content execution with posts, reels, captions, scheduling, and monthly reporting.',
        costNote: 'Best for brands that need consistent posting and creative direction.',
        services: [
          'Instagram Management',
          'Facebook Management',
          'LinkedIn Content',
          'Professional Reel Editing (Client Footage)',
          'Content Calendar',
          'Caption Writing',
          'Scheduling and Posting',
          'Community Management',
          'Monthly Reports',
        ],
        plans: [
          {
            name: 'Starter',
            subtitle: 'For a consistent and professional presence.',
            internationalPrice: '$399',
            indiaPrice: 'Rs.14,999',
            billing: '/ month',
            deliverables: [
              'Client provides raw content',
              '12 static posts per month',
              '4 professionally edited reels from client footage per month',
              'Monthly content calendar',
              'Caption writing and hashtag research',
              'Scheduling and posting included',
              'Basic monthly report',
            ],
            turnaround: 'Weekly scheduling',
            revisions: '1 content revision round',
            support: 'WhatsApp support',
            monthlyDeliverables: '16 content assets',
          },
          {
            name: 'Growth',
            subtitle: 'For brands that need stronger weekly output.',
            internationalPrice: '$799',
            indiaPrice: 'Rs.39,999',
            billing: '/ month',
            deliverables: [
              'Client provides raw content',
              '20 posts per month',
              '8 professionally edited reels from client footage per month',
              'Content strategy and calendar planning',
              'Caption writing and creative hooks',
              'Community management',
              'Detailed monthly report with insights',
            ],
            turnaround: 'Weekly planning and posting',
            revisions: '2 content revision rounds',
            support: 'Priority WhatsApp support',
            monthlyDeliverables: '28 content assets',
            popular: true,
          },
          {
            name: 'Scale',
            subtitle: 'For brands that need full content execution.',
            internationalPrice: '$1,499',
            indiaPrice: 'Rs.79,999',
            billing: '/ month',
            deliverables: [
              'Client provides raw content',
              '30 posts per month',
              '12 professionally edited reels from client footage per month',
              'Advanced content strategy',
              'Community management and DM handling',
              'Competitor benchmarking',
              'Detailed bi-weekly reports',
            ],
            turnaround: 'Weekly sprint rhythm',
            revisions: '3 content revision rounds',
            support: 'Dedicated strategy channel',
            monthlyDeliverables: '42+ content assets',
          },
        ],
      },
      {
        id: 'ads-lead-generation',
        label: 'Ads + Lead Generation',
        title: 'Paid Ads and Lead Generation',
        description:
          'For Meta Ads, Google Ads, lead generation campaigns, landing-page direction, creative testing, and performance reporting. Ad spend is separate and paid directly to Meta or Google.',
        services: [
          'Meta Ads Management',
          'Google Ads Management',
          'Lead Generation Campaigns',
          'Ad Creative Direction',
          'Campaign Setup',
          'Audience Testing',
          'Conversion Tracking',
          'Performance Reports',
        ],
        plans: [
          {
            name: 'Starter',
            subtitle: 'For one focused campaign and basic lead flow.',
            internationalPrice: '$699',
            indiaPrice: 'Rs.24,999',
            billing: '/ month',
            deliverables: [
              '1 Meta or Google Ads campaign',
              'Campaign setup and audience research',
              '6 ad creative directions',
              'Basic conversion tracking setup',
              'Monthly performance report',
              'WhatsApp check-in every 2 weeks',
            ],
            turnaround: 'Setup in 5-7 business days',
            revisions: '1 campaign revision round',
            support: 'WhatsApp support',
            monthlyDeliverables: '1 active campaign',
          },
          {
            name: 'Growth',
            subtitle: 'For brands actively testing and scaling lead generation.',
            internationalPrice: '$1,299',
            indiaPrice: 'Rs.49,999',
            billing: '/ month',
            deliverables: [
              'Meta Ads and Google Ads management',
              'Lead generation funnel setup',
              '12 ad creative directions',
              'Creative testing across ad sets',
              'Weekly optimization notes',
              'Landing page conversion recommendations',
              'Detailed monthly performance report',
            ],
            turnaround: 'Weekly optimization cycle',
            revisions: '2 campaign revision rounds',
            support: 'Priority WhatsApp support',
            monthlyDeliverables: '2-3 active campaigns',
            popular: true,
          },
          {
            name: 'Scale',
            subtitle: 'For multi-campaign acquisition and growth systems.',
            internationalPrice: '$2,499',
            indiaPrice: 'Rs.99,999',
            billing: '/ month',
            deliverables: [
              'Full Meta and Google Ads management',
              'Multiple lead generation campaigns running simultaneously',
              '20 ad creative directions per month',
              'Creative testing roadmap and reporting',
              'Landing page conversion audit and recommendations',
              'Dedicated strategy call every 2 weeks',
              'Bi-weekly performance reporting with next-step recommendations',
            ],
            turnaround: 'Weekly sprint rhythm',
            revisions: '3 campaign revision rounds',
            support: 'Dedicated strategy channel',
            monthlyDeliverables: '4+ active campaigns',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'How is the Organic plan different from the Ads plan?',
        answer:
          'Organic covers content editing, posting, reels from client footage, captions, and community management with no ad spend required. The Ads plan covers paid Meta and Google campaigns, creative testing, and lead generation. You can run both together for maximum impact.',
      },
      {
        question: 'Is ad spend included in the price?',
        answer:
          'No. Ad spend is paid directly to Meta or Google by the client. Our fee covers strategy, setup, creative, and management only.',
      },
      {
        question: 'Do you write captions?',
        answer:
          'Yes. Caption writing, content angles, hooks, and calendar structure are included in every plan.',
      },
      {
        question: 'How do you report results?',
        answer:
          'We send monthly reports covering reach, engagement, follower growth, and ad performance. Growth and Scale include deeper breakdowns.',
      },
      {
        question: 'Can I pause the retainer?',
        answer:
          'Pauses can be discussed before the next billing cycle depending on the campaign calendar and active ad sets.',
      },
      ...sharedFaqs,
    ],
    seo: {
      title: 'Social Media Marketing Pricing | SniperCoders',
      description:
        'Done-for-you social media management for founders, coaches, and brands in the US, UK, Australia, and beyond. Content editing, posting, paid ads, lead generation, and reporting without hiring in-house.',
      keywords: [
        'social media marketing pricing',
        'Meta Ads management pricing',
        'Instagram management package',
        'social media agency pricing',
        'SniperCoders SMM',
      ],
    },
  },

  'web-development': {
    slug: 'web-development',
    title: 'Website Development Pricing',
    eyebrow: 'Project-based pricing',
    description:
      'Conversion-focused websites, landing pages, ecommerce builds, and custom software for startups, local businesses, and agencies. Built for speed, SEO, and results.',
    audience: [
      'Startups',
      'Local Businesses',
      'Ecommerce Brands',
      'Service Companies',
      'Agencies',
      'SaaS Founders',
    ],
    services: [
      'Business Website',
      'Landing Page',
      'Portfolio Website',
      'E-Commerce Website',
      'Booking and Appointment Systems',
      'WordPress Development',
      'Next.js Development',
      'SEO Setup',
      'Google Analytics Setup',
      'CMS Integration',
      'Custom Software Development',
      'Post-Launch Maintenance',
    ],
    serviceRequired: 'Website & Software Development',
    plans: [
      {
        name: 'Starter',
        subtitle: 'For a clean and functional business website.',
        internationalPrice: '$599',
        indiaPrice: 'Rs.24,999',
        billing: ' project',
        deliverables: [
          'Up to 5 pages',
          'Mobile responsive design',
          'Contact form with email delivery',
          'Basic on-page SEO setup',
          'Google Analytics integration',
          'Performance optimized build',
        ],
        turnaround: '10-14 business days',
        revisions: '2 design revision rounds',
        support: '14 days post-launch support',
        monthlyDeliverables: 'One project launch',
        note: 'Hosting, domain, and SSL are not included.',
      },
      {
        name: 'Growth',
        subtitle: 'For conversion-focused websites and ecommerce stores.',
        internationalPrice: '$1,799',
        indiaPrice: 'Rs.79,999',
        billing: ' project',
        deliverables: [
          'Up to 12 pages',
          'CMS or ecommerce integration',
          'Advanced animations and interactions',
          'Full SEO setup with schema markup',
          'Analytics and conversion tracking',
          'Lead capture and funnel sections',
        ],
        turnaround: '3-5 weeks',
        revisions: '3 revision rounds',
        support: '30 days post-launch support',
        monthlyDeliverables: 'Website or ecommerce build',
        note: 'Hosting, server, payment gateway fees, and CMS subscriptions are not included.',
        popular: true,
      },
      {
        name: 'Enterprise',
        subtitle: 'For SaaS, custom software, and complex systems.',
        internationalPrice: 'Custom',
        indiaPrice: 'Custom',
        billing: ' proposal',
        deliverables: [
          'Product discovery and scoping session',
          'Custom architecture and database design',
          'Admin dashboards and user portals',
          'Third-party API and payment integrations',
          'AI workflow integrations on request',
          'Maintenance and update roadmap',
        ],
        turnaround: 'Scoped after discovery',
        revisions: 'Milestone-based review checkpoints',
        support: 'Dedicated project channel',
        monthlyDeliverables: 'Consultation-led roadmap',
      },
    ],
    packageTiers: [
      {
        id: 'websites',
        label: 'Websites',
        title: 'Websites, Landing Pages, and Ecommerce',
        description:
          'For business websites, landing pages, portfolio sites, ecommerce stores, and booking systems. Development cost only. Hosting, domain, and server fees are not included.',
        costNote: 'Best for launch-ready websites and marketing pages.',
        services: [
          'Business Website',
          'Landing Page',
          'Portfolio Website',
          'E-Commerce Website',
          'Booking Systems',
          'WordPress Development',
          'Next.js Development',
          'SEO Setup',
          'Google Analytics Setup',
        ],
        plans: [
          {
            name: 'Starter',
            subtitle: 'For a clean and functional business website.',
            internationalPrice: '$599',
            indiaPrice: 'Rs.24,999',
            billing: ' project',
            deliverables: [
              'Up to 5 pages',
              'Mobile responsive design',
              'Contact form with email delivery',
              'Basic on-page SEO setup',
              'Google Analytics integration',
              'Performance optimized build',
            ],
            turnaround: '10-14 business days',
            revisions: '2 design revision rounds',
            support: '14 days post-launch support',
            monthlyDeliverables: 'One website launch',
            note: 'Hosting, domain, and SSL are not included.',
          },
          {
            name: 'Growth',
            subtitle: 'For conversion-focused websites and ecommerce stores.',
            internationalPrice: '$1,799',
            indiaPrice: 'Rs.79,999',
            billing: ' project',
            deliverables: [
              'Up to 12 pages',
              'CMS or ecommerce integration',
              'Advanced animations and interactions',
              'Full SEO setup with schema markup',
              'Analytics and conversion tracking',
              'Lead capture and funnel sections',
            ],
            turnaround: '3-5 weeks',
            revisions: '3 revision rounds',
            support: '30 days post-launch support',
            monthlyDeliverables: 'Website or ecommerce build',
            note: 'Hosting, server, payment gateway fees, and CMS subscriptions are not included.',
            popular: true,
          },
          {
            name: 'Scale',
            subtitle: 'For larger websites with advanced conversion flows.',
            internationalPrice: '$3,499',
            indiaPrice: 'Rs.1,49,999',
            billing: ' project',
            deliverables: [
              '15+ custom pages',
              'Advanced CMS or ecommerce architecture',
              'Custom animations and component system',
              'SEO architecture and tracking setup',
              'Launch QA and conversion review',
            ],
            turnaround: '5-8 weeks',
            revisions: '4 revision rounds',
            support: '60 days post-launch support',
            monthlyDeliverables: 'Advanced website launch',
            note: 'Hosting, server, third-party tools, and plugin licenses are not included.',
          },
        ],
      },
      {
        id: 'custom-software',
        label: 'Custom Software',
        title: 'Custom Software, SaaS, CRM, ERP, and AI Systems',
        description:
          'SaaS platforms, CRM systems, ERP tools, admin dashboards, AI integrations, and workflow automation. Every project is scoped individually. Fill the form below and we will send a detailed proposal within 48 hours.',
        costNote: 'No fixed price list because no two custom software projects are the same.',
        services: [
          'SaaS Platform',
          'CRM System',
          'ERP Solution',
          'Admin Dashboard',
          'AI Integration',
          'Workflow Automation',
          'API Integration',
          'Maintenance Roadmap',
        ],
        plans: [],
      },
    ],
    faqs: [
      {
        question: 'What is not included in the development price?',
        answer:
          'Hosting, domain registration, SSL certificates, server costs, third-party plugin licenses, payment gateway fees, and ongoing maintenance are not included in any plan. These are paid directly by the client to the relevant providers. We help you choose and set them up.',
      },
      {
        question: 'How does custom software pricing work?',
        answer:
          'Custom software is scoped individually after reviewing your requirements. Fill the project form in the Custom Software tab and we will send a detailed proposal within 48 hours. There is no fixed price because scope, integrations, and complexity vary significantly between projects.',
      },
      {
        question: 'What platforms do you build on?',
        answer:
          'We build on Next.js, WordPress, Webflow, and custom stacks depending on the project scope. We recommend based on your goals.',
      },
      {
        question: 'Is hosting included?',
        answer:
          'Hosting is not included in the project price. We help you set it up on Vercel, Hostinger, or your preferred provider.',
      },
      {
        question: 'Do you offer maintenance after launch?',
        answer:
          'Yes. Post-launch support is included for 30 or 60 days depending on the plan. Ongoing maintenance can be added separately.',
      },
      {
        question: 'Can you redesign an existing website?',
        answer:
          'Yes. Redesigns follow the same scoping process. We audit the existing site first and propose the rebuild plan.',
      },
      ...sharedFaqs,
    ],
    seo: {
      title: 'Website Development Pricing | SniperCoders',
      description:
        'Project-based pricing for business websites, landing pages, ecommerce, WordPress, Next.js, SEO setup, and custom software. Affordable for Indian and international clients.',
      keywords: [
        'website development pricing',
        'web design pricing India',
        'ecommerce website cost',
        'Next.js development agency',
        'SniperCoders web development',
      ],
    },
  },
}

export function getPricingMetadata(page: PricingPageData): Metadata {
  const canonical = `${baseUrl}/pricing/${page.slug}`

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: { canonical },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: canonical,
      siteName: 'SniperCoders',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/logo_sniper.ico`,
          width: 800,
          height: 600,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seo.title,
      description: page.seo.description,
    },
  }
}
