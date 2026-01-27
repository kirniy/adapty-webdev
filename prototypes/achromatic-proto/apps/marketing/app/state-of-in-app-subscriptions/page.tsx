'use client';

import * as React from 'react';

import {
  CTASwitcher,
  LogosSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { StateOfSubscriptionsFeatures } from '~/components/sections/state-of-subscriptions-features';
import { StateOfSubscriptionsHero } from '~/components/sections/state-of-subscriptions-hero';
import { useFeaturesVariant, useHeroVariant } from '~/lib/debug-context';

// State of In-App Subscriptions page: Annual industry report
export default function StateOfInAppSubscriptionsPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Report hero */}
      {heroVariant !== 'off' && <StateOfSubscriptionsHero />}

      {/* Report features/highlights */}
      {featuresVariant !== 'off' && <StateOfSubscriptionsFeatures />}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
