// FILE PATH: app/services/best-software-agency-katra/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Katra | SniperCoders',
  description: 'SniperCoders is the best software agency in Katra, J&K. Website development, mobile apps & digital marketing for Katra hotels, yatra operators, dhaba owners, taxi services & all Katra businesses. Free consultation.',
  keywords: [
    'best software agency in katra',
    'web development company katra',
    'IT company katra jammu kashmir',
    'digital marketing katra',
    'website development katra',
    'mobile app development katra',
    'vaishno devi yatra booking website',
    'hotel website development katra',
    'best software company katra reasi',
    'tour operator website katra',
    'taxi service website katra',
    'katra business website development',
  ],
  alternates: {
    canonical: 'https://snipercoders.com/services/best-software-agency-katra',
  },
  openGraph: {
    title: 'Best Software Agency in Katra | SniperCoders',
    description: 'Professional websites, apps & digital marketing for Katra hotels, yatra operators, taxi services & all businesses. Reach pilgrims before they arrive in Katra.',
    url: 'https://snipercoders.com/services/best-software-agency-katra',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Katra | SniperCoders',
    description: 'Websites, apps & digital marketing for Katra yatra & tourism businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}