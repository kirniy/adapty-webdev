'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { RemoteConfigHero } from '~/components/sections/remote-config-hero';
import { RemoteConfigFeatures } from '~/components/sections/remote-config-features';
import {
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

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
