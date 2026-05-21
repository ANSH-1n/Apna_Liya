// FILE PATH: app/services/best-software-agency-chennai/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Chennai | SniperCoders',
  description: 'SniperCoders is the best software agency in Chennai. Website development, mobile apps, automotive software & Tamil SEO digital marketing for all Chennai businesses. Free consultation.',
  keywords: [
    'best software agency in chennai',
    'best IT company in chennai',
    'web development company chennai',
    'mobile app development chennai',
    'tamil seo digital marketing chennai',
    'software company omr chennai',
    'automotive software chennai',
    'website development t nagar anna nagar',
    'best software company tamil nadu',
  ],
  alternates: {
    canonical: 'https://snipercoders.in/services/best-software-agency-chennai',
  },
  openGraph: {
    title: 'Best Software Agency in Chennai | SniperCoders',
    description: 'Websites, apps & Tamil SEO for Chennai automotive, IT & retail businesses. Serving OMR, T. Nagar, Ambattur & all Chennai.',
    url: 'https://snipercoders.in/services/best-software-agency-chennai',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Chennai | SniperCoders',
    description: 'Websites, apps & Tamil SEO for Chennai businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}