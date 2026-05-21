// FILE PATH: app/services/best-software-agency-udhampur/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Udhampur | SniperCoders',
  description: 'SniperCoders is the best software agency in Udhampur, J&K. Professional websites, mobile apps & digital marketing for all Udhampur businesses. Affordable pricing. Free consultation.',
  keywords: [
    'best software agency in udhampur',
    'web development company udhampur',
    'IT company udhampur',
    'digital marketing udhampur',
    'website development udhampur',
    'mobile app development udhampur',
    'software company jammu kashmir',
    'best IT company udhampur jk',
  ],
  alternates: {
    canonical: 'https://snipercoders.in/services/best-software-agency-udhampur',
  },
  openGraph: {
    title: 'Best Software Agency in Udhampur | SniperCoders',
    description: 'Professional websites, mobile apps & digital marketing for Udhampur businesses. Fast delivery. Affordable pricing.',
    url: 'https://snipercoders.in/services/best-software-agency-udhampur',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Udhampur | SniperCoders',
    description: 'Websites, apps & digital marketing for Udhampur businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}