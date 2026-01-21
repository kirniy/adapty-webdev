'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { StateOfSubscriptionsHero } from '~/components/sections/state-of-subscriptions-hero';
import { StateOfSubscriptionsFeatures } from '~/components/sections/state-of-subscriptions-features';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

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
