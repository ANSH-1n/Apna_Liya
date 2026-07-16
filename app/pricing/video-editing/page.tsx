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
  title: 'Video Editing Pricing | Professional Video Editing Services | SniperCoders',
  description: 'Transparent pricing for professional video editing services including short-form video editing, reels, captions, and social media content. Packages start at $500/month.',
  keywords: [
    'video editing pricing',
    'video editing services cost',
    'short-form video editing pricing',
    'Instagram reel editing cost',
    'professional video editing packages',
    'SniperCoders pricing',
    'video editing agency India',
    'content creation pricing',
  ],
  openGraph: {
    title: 'Video Editing Pricing | SniperCoders',
    description: 'Transparent pricing for professional video editing services including reels, captions, and social media content.',
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