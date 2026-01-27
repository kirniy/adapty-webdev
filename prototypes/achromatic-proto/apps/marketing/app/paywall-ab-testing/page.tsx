'use client';

import * as React from 'react';

import { ABTestingFeatures } from '~/components/sections/ab-testing-features';
// Components
import {
  ABTestingHero,
  type ABTestingHeroVariant
} from '~/components/sections/ab-testing-hero';
import { CaseStudiesGrid } from '~/components/sections/case-studies-grid';
// Shared section switchers
import {
  CTASwitcher,
  FAQSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
// Debug
import {
  useAbTestingFeaturesVariant,
  useHeroVariant
} from '~/lib/debug-context';

// Map global Hero variant to ABTestingHero variant
function mapHeroVariant(globalVariant: string): ABTestingHeroVariant {
  switch (globalVariant) {
    case 'marketing':
      return 'centered';
    case 'split':
      return 'split';
    case 'pricing':
      return 'showcase';
    default:
      return 'split';
  }
}

// Paywall A/B Testing page: Experiment features and case studies
export default function PaywallAbTestingPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useAbTestingFeaturesVariant();

  return (
    <>
      {/* A/B Testing hero */}
      {heroVariant !== 'off' && (
        <ABTestingHero variant={mapHeroVariant(heroVariant)} />
      )}

      {/* A/B Testing features */}
      {featuresVariant !== 'off' && (
        <ABTestingFeatures variant={featuresVariant} />
      )}

      {/* Case studies */}
      <CaseStudiesGrid />

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
