// FILE PATH: app/services/best-software-agency-kashmir/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Software Agency in Kashmir | SniperCoders',
  description: 'SniperCoders is the best software agency in Kashmir. We build houseboat booking websites, handicraft eCommerce stores, hotel portals & digital marketing for Kashmir businesses globally.',
  keywords: [
    'best software agency in kashmir',
    'web development company srinagar',
    'IT company kashmir',
    'digital marketing kashmir',
    'houseboat website development kashmir',
    'handicraft ecommerce kashmir',
    'tourism website kashmir srinagar',
    'best software company srinagar',
    'kashmir hotel website development',
  ],
  alternates: {
    canonical: 'https://snipercoders.com/services/best-software-agency-kashmir',
  },
  openGraph: {
    title: 'Best Software Agency in Kashmir | SniperCoders',
    description: 'Houseboat portals, handicraft eCommerce & global tourism SEO for Kashmir businesses. Reach international customers.',
    url: 'https://snipercoders.com/services/best-software-agency-kashmir',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Kashmir | SniperCoders',
    description: 'Websites, apps & global digital marketing for Kashmir tourism & handicraft businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}