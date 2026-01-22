'use client';

import * as React from 'react';

import { useHeroVariant, useForDevelopersFeaturesVariant } from '~/lib/debug-context';
import { ForDevelopersHero } from '~/components/sections/for-developers-hero';
import { ForDevelopersFeatures } from '~/components/sections/for-developers-features';
import type { ForDevelopersHeroVariant } from '~/components/sections/for-developers-hero';
import {
  LogosSwitcher,
  SDKSwitcher,
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Map global Hero variant to page-specific variants
function mapHeroVariant(globalVariant: string): ForDevelopersHeroVariant {
  switch (globalVariant) {
    case 'marketing': return 'centered';
    case 'story': return 'terminal';
    case 'split': return 'split';
    default: return 'split';
  }
}

// For Developers page: SDK integration and developer features
export default function ForDevelopersPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useForDevelopersFeaturesVariant();

  return (
    <>
      {/* Developer-focused hero */}
      {heroVariant !== 'off' && <ForDevelopersHero variant={mapHeroVariant(heroVariant)} />}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* Developer features */}
      {featuresVariant !== 'off' && <ForDevelopersFeatures variant={featuresVariant} />}

      {/* SDK Code examples - shared switcher */}
      <SDKSwitcher />

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
