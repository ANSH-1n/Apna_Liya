// FILE PATH: app/services/best-software-agency-pune/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Pune | SniperCoders',
  description: 'SniperCoders is the best software agency in Pune. Website development, mobile apps, manufacturing ERP & Marathi SEO digital marketing for Pune startups, colleges & industries.',
  keywords: [
    'best software agency in pune',
    'best IT company in pune',
    'web development company pune',
    'mobile app development pune',
    'software company hinjawadi pune',
    'digital marketing agency pune maharashtra',
    'manufacturing software pune pcmc',
    'marathi seo digital marketing pune',
    'website development baner kharadi viman nagar',
  ],
  alternates: {
    canonical: 'https://snipercoders.com/services/best-software-agency-pune',
  },
  openGraph: {
    title: 'Best Software Agency in Pune | SniperCoders',
    description: 'Websites, apps & Marathi SEO for Pune startups, manufacturers & colleges. Serving Hinjawadi, Baner, Kharadi & all Pune.',
    url: 'https://snipercoders.com/services/best-software-agency-pune',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Pune | SniperCoders',
    description: 'Websites, apps & digital marketing for Pune businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}