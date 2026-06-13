//app/pricing/social-media-marketing/page.tsx

import PricingExperience from '../_components/PricingExperience'
import { getPricingMetadata, pricingPages } from '../pricing-data'

const page = pricingPages['social-media-marketing']

export const metadata = getPricingMetadata(page)

export default function SocialMediaMarketingPricingPage() {
  return <PricingExperience page={page} />
}
