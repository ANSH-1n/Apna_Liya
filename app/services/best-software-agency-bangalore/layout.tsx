// FILE PATH: app/services/best-software-agency-bangalore/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Bangalore | SniperCoders',
  description: 'SniperCoders is the best software agency in Bangalore. Website development, mobile apps, custom software & digital marketing for all Bangalore businesses. Free consultation today.',
  keywords: [
    'best software agency in bangalore',
    'best IT company in bangalore',
    'web development company bangalore',
    'mobile app development bangalore',
    'digital marketing agency bangalore',
    'software development company bangalore',
    'best website development company bangalore',
    'IT agency near me bangalore',
  ],
  alternates: {
    canonical: 'https://snipercoders.in/services/best-software-agency-bangalore',
  },
  openGraph: {
    title: 'Best Software Agency in Bangalore | SniperCoders',
    description: 'Website development, mobile apps, custom software & digital marketing for Bangalore businesses. 30+ projects. 100% satisfaction.',
    url: 'https://snipercoders.in/services/best-software-agency-bangalore',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Bangalore | SniperCoders',
    description: 'Website development, mobile apps & digital marketing for Bangalore businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}