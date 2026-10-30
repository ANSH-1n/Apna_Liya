// //app/pricing/video-editing/page.tsx
// import PricingExperience from '../_components/PricingExperience'
// import { getPricingMetadata, pricingPages } from '../pricing-data'

// const page = pricingPages['video-editing']

// export const metadata = getPricingMetadata(page)

// export default function VideoEditingPricingPage() {
//   return <PricingExperience page={page} />
// }










// app/pricing/video-editing/page.tsx
import PricingExperience from '../_components/PricingExperience'
import { getPricingMetadata, pricingPages } from '../pricing-data'
import type { Metadata } from 'next'

const page = pricingPages['video-editing']

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  ...getPricingMetadata(page),
  title: { absolute: 'Video Editing Charges in India & Pricing Plans | SniperCoders' },
  description: 'Explore video editing prices and packages with SniperCoders. Get professional Reels, YouTube Shorts, captions, hooks, motion graphics, and monthly editing plans for creators and brands.',
  keywords: [
    'video editing pricing',
    'video editing services cost',
    'short-form video editing pricing',
    'Instagram reel editing cost',
    'professional video editing packages',
    'SniperCoders pricing',
    'video editing agency India',
    'content creation pricing',
    'video editing charges in India',
    'video editing price',
    'video editing cost in India',
    'video editing price list in India',
    'video editing rates in India',
    'monthly video editing packages',
    'Reels editing prices',
    'YouTube Shorts editing services',
    'short-form video editing services',
    'video editing subscription',
    'social media video editing packages',
    'international video editing services',
  ],
  openGraph: {
    title: 'Video Editing Charges in India & Pricing Plans | SniperCoders',
    description: 'Compare monthly video editing packages for Reels, YouTube Shorts, captions, hooks, and more. India and international pricing available.',
    url: 'https://www.snipercoders.in/pricing/video-editing',
    siteName: 'SniperCoders',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.snipercoders.in/pricing/video-editing',
  },
}

export default function VideoEditingPricingPage() {
  return <PricingExperience page={page} />
}
