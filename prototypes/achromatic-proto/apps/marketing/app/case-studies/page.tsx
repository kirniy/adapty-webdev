'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { CaseStudiesHero } from '~/components/sections/case-studies-hero';
import { CaseStudiesGrid } from '~/components/sections/case-studies-grid';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

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
