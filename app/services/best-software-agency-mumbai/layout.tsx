// FILE PATH: app/services/best-software-agency-mumbai/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Mumbai | SniperCoders',
  description: 'SniperCoders is the best software agency in Mumbai. Premium websites, fintech apps, custom software & digital marketing for Mumbai startups, corporates & SMEs. Free consultation.',
  keywords: [
    'best software agency in mumbai',
    'best IT company in mumbai',
    'web development company mumbai',
    'mobile app development mumbai',
    'fintech app development mumbai',
    'digital marketing agency mumbai',
    'software development company mumbai',
    'website development bandra andheri bkc lower parel',
    'best software agency thane navi mumbai',
  ],
  alternates: {
    canonical: 'https://snipercoders.in/services/best-software-agency-mumbai',
  },
  openGraph: {
    title: 'Best Software Agency in Mumbai | SniperCoders',
    description: 'Premium websites, fintech apps & digital marketing for Mumbai businesses. Serving Bandra, BKC, Andheri, Lower Parel & all MMR.',
    url: 'https://snipercoders.in/services/best-software-agency-mumbai',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Mumbai | SniperCoders',
    description: 'Websites, fintech apps & digital marketing for Mumbai businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}