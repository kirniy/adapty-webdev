'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { AppleFiscalCalendarHero } from '~/components/sections/apple-fiscal-calendar-hero';
import { AppleFiscalCalendarFeatures } from '~/components/sections/apple-fiscal-calendar-features';
import {
  LogosSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

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
