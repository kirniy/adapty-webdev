'use client';

import * as React from 'react';

import { useHeroVariant, useOnboardingBuilderFeaturesVariant, useFaqVariant } from '~/lib/debug-context';
import { OnboardingBuilderHero } from '~/components/sections/onboarding-builder-hero';
import { OnboardingBuilderFeatures } from '~/components/sections/onboarding-builder-features';
import { OnboardingBuilderFAQ } from '~/components/sections/onboarding-builder-faq';
import {
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

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
      {featuresVariant !== 'off' && <OnboardingBuilderFeatures variant={featuresVariant} />}

      {/* Page-specific FAQ (uses OnboardingBuilderFAQ when not 'off') */}
      {faqVariant !== 'off' && <OnboardingBuilderFAQ />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
