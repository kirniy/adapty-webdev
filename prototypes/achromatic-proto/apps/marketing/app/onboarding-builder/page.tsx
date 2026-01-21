import * as React from 'react';
import type { Metadata } from 'next';

import { Logos } from '~/components/sections/logos';
import { OnboardingBuilderHero } from '~/components/sections/onboarding-builder-hero';
import { OnboardingBuilderFeatures } from '~/components/sections/onboarding-builder-features';
import { OnboardingBuilderFAQ } from '~/components/sections/onboarding-builder-faq';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';
import { createTitle } from '~/lib/formatters';

export const metadata: Metadata = {
  title: createTitle('Onboarding Builder'),
  description: 'Design and test onboarding flows, run A/B tests, and optimize conversion with Adapty\'s no-code onboarding builder and real-time analytics.'
};

// Page structure matches adapty.io/onboarding-builder (scraped 2026-01-21)
export default function OnboardingBuilderPage(): React.JSX.Element {
  return (
    <>
      <OnboardingBuilderHero />
      <Logos />
      <OnboardingBuilderFeatures />
      <OnboardingBuilderFAQ />
      <Testimonials />
      <CTA />
    </>
  );
}
