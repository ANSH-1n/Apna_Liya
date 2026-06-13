//app/pricing/video-editing/page.tsx
import PricingExperience from '../_components/PricingExperience'
import { getPricingMetadata, pricingPages } from '../pricing-data'

const page = pricingPages['video-editing']

export const metadata = getPricingMetadata(page)

export default function VideoEditingPricingPage() {
  return <PricingExperience page={page} />
}
