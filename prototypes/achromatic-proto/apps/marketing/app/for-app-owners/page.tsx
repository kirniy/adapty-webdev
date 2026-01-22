'use client';

import * as React from 'react';

import { useHeroVariant, useForAppOwnersFeaturesVariant } from '~/lib/debug-context';
import { ForAppOwnersHero } from '~/components/sections/for-app-owners-hero';
import { ForAppOwnersFeatures } from '~/components/sections/for-app-owners-features';
import type { ForAppOwnersHeroVariant } from '~/components/sections/for-app-owners-hero';
import {
  LogosSwitcher,
  StatsSwitcher,
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Map global Hero variant to page-specific variants
function mapHeroVariant(globalVariant: string): ForAppOwnersHeroVariant {
  switch (globalVariant) {
    case 'marketing': return 'centered';
    case 'story': return 'metrics';
    case 'split': return 'split';
    default: return 'split';
  }
}

// For App Owners page: Business-focused features and metrics
export default function ForAppOwnersPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useForAppOwnersFeaturesVariant();

  return (
    <>
      {/* App owner focused hero */}
      {heroVariant !== 'off' && <ForAppOwnersHero variant={mapHeroVariant(heroVariant)} />}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* Business features */}
      {featuresVariant !== 'off' && <ForAppOwnersFeatures variant={featuresVariant} />}

      {/* Stats - shared switcher (uses orbital, timeline, default) */}
      <StatsSwitcher />

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
