// FILE PATH: app/services/best-software-agency-delhi/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Delhi | SniperCoders',
  description: 'SniperCoders is the best software agency in Delhi NCR. Enterprise websites, mobile apps, custom software & performance digital marketing for Delhi, Noida, Gurugram businesses.',
  keywords: [
    'best software agency in delhi',
    'best IT company in delhi',
    'web development company delhi',
    'mobile app development delhi',
    'digital marketing agency delhi ncr',
    'software development company delhi',
    'website development new delhi',
    'IT company noida gurugram faridabad',
    'best software agency delhi ncr',
  ],
  alternates: {
    canonical: 'https://snipercoders.in/services/best-software-agency-delhi',
  },
  openGraph: {
    title: 'Best Software Agency in Delhi | SniperCoders',
    description: 'Enterprise websites, apps & aggressive digital marketing for Delhi NCR businesses. Serving Delhi, Noida, Gurugram, Faridabad & Ghaziabad.',
    url: 'https://snipercoders.in/services/best-software-agency-delhi',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Delhi | SniperCoders',
    description: 'Websites, apps & digital marketing for Delhi NCR businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}