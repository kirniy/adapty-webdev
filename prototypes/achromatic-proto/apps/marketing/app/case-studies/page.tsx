'use client';

import * as React from 'react';

import { CaseStudiesGrid } from '~/components/sections/case-studies-grid';
import { CaseStudiesHero } from '~/components/sections/case-studies-hero';
import {
  CTASwitcher,
  LogosSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useFeaturesVariant, useHeroVariant } from '~/lib/debug-context';

// Case Studies page: Customer success stories
export default function CaseStudiesPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Case studies hero */}
      {heroVariant !== 'off' && <CaseStudiesHero />}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* Case studies grid */}
      {featuresVariant !== 'off' && <CaseStudiesGrid />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
