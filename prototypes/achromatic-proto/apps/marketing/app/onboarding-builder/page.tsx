'use client';

import * as React from 'react';

import { OnboardingBuilderFAQ } from '~/components/sections/onboarding-builder-faq';
import { OnboardingBuilderFeatures } from '~/components/sections/onboarding-builder-features';
import { OnboardingBuilderHero } from '~/components/sections/onboarding-builder-hero';
import {
  CTASwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import {
  useFaqVariant,
  useHeroVariant,
  useOnboardingBuilderFeaturesVariant
} from '~/lib/debug-context';

// Onboarding Builder page: No-code onboarding flow creation
export default function OnboardingBuilderPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useOnboardingBuilderFeaturesVariant();
  const faqVariant = useFaqVariant();

  return (
    <>
      {/* Onboarding Builder hero */}
      {heroVariant !== 'off' && <OnboardingBuilderHero />}

      {/* Onboarding features */}
      {featuresVariant !== 'off' && (
        <OnboardingBuilderFeatures variant={featuresVariant} />
      )}

      {/* Page-specific FAQ (uses OnboardingBuilderFAQ when not 'off') */}
      {faqVariant !== 'off' && <OnboardingBuilderFAQ />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
