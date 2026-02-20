// FILE PATH: app/services/best-software-agency-hyderabad/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Hyderabad | SniperCoders',
  description: 'SniperCoders is the best software agency in Hyderabad. Website development, mobile apps, pharma software & Telugu SEO digital marketing for HITEC City, Cyberabad & all Hyderabad businesses.',
  keywords: [
    'best software agency in hyderabad',
    'best IT company in hyderabad',
    'web development company hyderabad',
    'mobile app development hyderabad',
    'pharma software hyderabad',
    'digital marketing agency hyderabad telangana',
    'software company hitec city cyberabad',
    'telugu seo digital marketing hyderabad',
    'best website development hyderabad',
  ],
  alternates: {
    canonical: 'https://snipercoders.com/services/best-software-agency-hyderabad',
  },
  openGraph: {
    title: 'Best Software Agency in Hyderabad | SniperCoders',
    description: 'Websites, apps & Telugu SEO for Hyderabad pharma, IT & real estate businesses. Serving HITEC City, Cyberabad & all of Hyderabad.',
    url: 'https://snipercoders.com/services/best-software-agency-hyderabad',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Hyderabad | SniperCoders',
    description: 'Websites, apps & digital marketing for Hyderabad businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}