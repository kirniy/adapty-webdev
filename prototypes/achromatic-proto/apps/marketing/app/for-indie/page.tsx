'use client';

import * as React from 'react';

import { ForIndieFeatures } from '~/components/sections/for-indie-features';
import { ForIndieHero } from '~/components/sections/for-indie-hero';
import type { ForIndieHeroVariant } from '~/components/sections/for-indie-hero';
import {
  CTASwitcher,
  FAQSwitcher,
  LogosSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import {
  useForIndieFeaturesVariant,
  useHeroVariant
} from '~/lib/debug-context';

// Map global Hero variant to page-specific variants
function mapHeroVariant(globalVariant: string): ForIndieHeroVariant {
  switch (globalVariant) {
    case 'marketing':
      return 'centered';
    case 'story':
      return 'startup';
    case 'split':
      return 'split';
    default:
      return 'split';
  }
}

// For Indie Developers page: Startup-friendly features
export default function ForIndiePage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useForIndieFeaturesVariant();

  return (
    <>
      {/* Indie developer focused hero */}
      {heroVariant !== 'off' && (
        <ForIndieHero variant={mapHeroVariant(heroVariant)} />
      )}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* Indie-friendly features */}
      {featuresVariant !== 'off' && (
        <ForIndieFeatures variant={featuresVariant} />
      )}

      {/* FAQ - pricing questions for indie devs */}
      <FAQSwitcher />

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
