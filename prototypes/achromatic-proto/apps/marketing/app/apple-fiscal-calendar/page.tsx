'use client';

import * as React from 'react';

import { AppleFiscalCalendarFeatures } from '~/components/sections/apple-fiscal-calendar-features';
import { AppleFiscalCalendarHero } from '~/components/sections/apple-fiscal-calendar-hero';
import {
  CTASwitcher,
  LogosSwitcher
} from '~/components/sections/section-switchers';
import { useFeaturesVariant, useHeroVariant } from '~/lib/debug-context';

// Apple Fiscal Calendar page: Payment dates and calendar
export default function AppleFiscalCalendarPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Calendar hero */}
      {heroVariant !== 'off' && <AppleFiscalCalendarHero />}

      {/* Calendar features */}
      {featuresVariant !== 'off' && <AppleFiscalCalendarFeatures />}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
