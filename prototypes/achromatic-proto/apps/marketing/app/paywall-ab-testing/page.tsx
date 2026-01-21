'use client';

import * as React from 'react';

// Components
import { ABTestingHero, type ABTestingHeroVariant } from '~/components/sections/ab-testing-hero';
import { ABTestingFeatures, type ABTestingFeaturesVariant } from '~/components/sections/ab-testing-features';
import { CaseStudiesGrid } from '~/components/sections/case-studies-grid';

// Shared section switchers
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Debug
import {
  useHeroVariant,
  useFeaturesVariant,
} from '~/lib/debug-context';

// Map global Hero variant to ABTestingHero variant
function mapHeroVariant(globalVariant: string): ABTestingHeroVariant {
  switch (globalVariant) {
    case 'marketing': return 'centered';
    case 'split': return 'split';
    case 'pricing': return 'showcase';
    default: return 'split';
  }
}

// Map global Features variant to ABTestingFeatures variant
function mapFeaturesVariant(globalVariant: string): ABTestingFeaturesVariant {
  switch (globalVariant) {
    case 'solution': return 'grid';
    case 'tabbed': return 'tabs';
    case 'bento-tabs': return 'bento';
    default: return 'grid';
  }
}

// Paywall A/B Testing page: Experiment features and case studies
export default function PaywallAbTestingPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* A/B Testing hero */}
      {heroVariant !== 'off' && (
        <ABTestingHero variant={mapHeroVariant(heroVariant)} />
      )}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* A/B Testing features */}
      {featuresVariant !== 'off' && (
        <ABTestingFeatures variant={mapFeaturesVariant(featuresVariant)} />
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
