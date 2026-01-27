'use client';

import * as React from 'react';

import { RemoteConfigFeatures } from '~/components/sections/remote-config-features';
import { RemoteConfigHero } from '~/components/sections/remote-config-hero';
import {
  CTASwitcher,
  FAQSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useFeaturesVariant, useHeroVariant } from '~/lib/debug-context';

// Remote Config page: On-the-fly paywall customization
export default function RemoteConfigPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Remote config hero */}
      {heroVariant !== 'off' && <RemoteConfigHero />}

      {/* Remote config features */}
      {featuresVariant !== 'off' && <RemoteConfigFeatures />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
