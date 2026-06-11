// FILE PATH: app/services/best-software-agency-delhi/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Delhi | SniperCoders',
  description: 'SniperCoders is a software agency in Delhi NCR for video editing, digital marketing, SEO-ready websites, mobile apps, custom software, and AI automation.',
  keywords: [
    'best software agency in delhi',
    'web development company delhi',
    'mobile app development delhi',
    'digital marketing agency delhi ncr',
    'video editing agency delhi',
    'software development company delhi',
    'custom software development delhi',
    'ai automation agency delhi ncr',
    'best software agency delhi ncr',
  ],
  alternates: {
    canonical: 'https://snipercoders.in/services/best-software-agency-delhi',
  },
  openGraph: {
    title: 'Best Software Agency in Delhi | SniperCoders',
    description: 'Video editing, digital marketing, websites, apps, custom software, and AI automation for Delhi NCR businesses.',
    url: 'https://snipercoders.in/services/best-software-agency-delhi',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Delhi | SniperCoders',
    description: 'Video editing, websites, apps, custom software, and marketing for Delhi NCR businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
