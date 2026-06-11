// FILE PATH: app/services/best-software-agency-bangalore/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Bangalore | SniperCoders',
  description: 'SniperCoders is a software agency in Bangalore for video editing, digital marketing, SEO-ready websites, mobile apps, custom software, and AI automation.',
  keywords: [
    'best software agency in bangalore',
    'web development company bangalore',
    'mobile app development bangalore',
    'digital marketing agency bangalore',
    'video editing agency bangalore',
    'software development company bangalore',
    'custom software development bangalore',
    'ai automation agency bangalore',
  ],
  alternates: {
    canonical: 'https://snipercoders.in/services/best-software-agency-bangalore',
  },
  openGraph: {
    title: 'Best Software Agency in Bangalore | SniperCoders',
    description: 'Video editing, digital marketing, websites, mobile apps, custom software, and AI automation for Bangalore businesses.',
    url: 'https://snipercoders.in/services/best-software-agency-bangalore',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Bangalore | SniperCoders',
    description: 'Video editing, websites, apps, custom software, and marketing for Bangalore businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
