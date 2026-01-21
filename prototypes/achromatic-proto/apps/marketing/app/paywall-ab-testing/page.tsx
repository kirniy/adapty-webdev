'use client'

import * as React from 'react'

// Components
import { ABTestingHero, type ABTestingHeroVariant } from '~/components/sections/ab-testing-hero'
import { ABTestingFeatures, type ABTestingFeaturesVariant } from '~/components/sections/ab-testing-features'
import { CaseStudiesGrid } from '~/components/sections/case-studies-grid'
import { CTA } from '~/components/sections/cta'

// Content
import { PAYWALL_AB_TESTING_CONTENT } from '~/lib/content'

// Debug
import {
  useHeroVariant,
  useFeaturesVariant,
  useCtaVariant
} from '~/lib/debug-context'

// Map global Hero variant to ABTestingHero variant
function mapHeroVariant(globalVariant: string): ABTestingHeroVariant {
  switch (globalVariant) {
    case 'marketing': return 'centered'
    case 'split': return 'split'
    case 'pricing': return 'showcase'
    default: return 'split'
  }
}

// Map global Features variant to ABTestingFeatures variant
function mapFeaturesVariant(globalVariant: string): ABTestingFeaturesVariant {
  switch (globalVariant) {
    case 'solution': return 'grid'
    case 'tabbed': return 'tabs'
    case 'bento-tabs': return 'bento'
    default: return 'grid'
  }
}

export default function PaywallAbTestingPage() {
  const heroVariant = useHeroVariant()
  const featuresVariant = useFeaturesVariant()
  const ctaVariant = useCtaVariant()

  return (
    <>
      {heroVariant !== 'off' && (
        <ABTestingHero variant={mapHeroVariant(heroVariant)} />
      )}

      {featuresVariant !== 'off' && (
        <ABTestingFeatures variant={mapFeaturesVariant(featuresVariant)} />
      )}

      <CaseStudiesGrid />

      {ctaVariant !== 'off' && <CTA />}
    </>
  )
}
