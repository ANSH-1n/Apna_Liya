// FILE PATH: app/services/best-software-agency-jammu/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Jammu | SniperCoders',
  description: 'SniperCoders is the best software agency in Jammu. Website development, app development, SEO & digital marketing for hotels, yatra operators, restaurants & all Jammu businesses.',
  keywords: [
    'best software agency in jammu',
    'web development company jammu',
    'IT company jammu',
    'digital marketing agency jammu',
    'website development jammu',
    'mobile app development jammu',
    'best IT company in jammu kashmir',
    'vaishno devi tour operator website',
    'software company jammu',
  ],
  alternates: {
    canonical: 'https://snipercoders.in/services/best-software-agency-jammu',
  },
  openGraph: {
    title: 'Best Software Agency in Jammu | SniperCoders',
    description: 'Websites, apps & digital marketing for Jammu hotels, yatra operators, restaurants & businesses. Get found on Google.',
    url: 'https://snipercoders.in/services/best-software-agency-jammu',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Jammu | SniperCoders',
    description: 'Website development, apps & digital marketing for Jammu businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}