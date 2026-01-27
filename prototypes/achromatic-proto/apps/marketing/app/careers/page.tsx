'use client';

import * as React from 'react';

import { CareersBenefits } from '~/components/sections/careers-benefits';
import { CareersPositions } from '~/components/sections/careers-positions';
import {
  FAQSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useCtaVariant, useFeaturesVariant } from '~/lib/debug-context';

// Careers page: Benefits and open positions
export default function CareersPage(): React.JSX.Element {
  const featuresVariant = useFeaturesVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {/* Benefits section (controlled by features variant) */}
      {featuresVariant !== 'off' && <CareersBenefits />}

      {/* Testimonials - team culture */}
      <TestimonialsSwitcher />

      {/* Open positions (controlled by CTA variant) */}
      {ctaVariant !== 'off' && <CareersPositions />}

      {/* FAQ about working here */}
      <FAQSwitcher />
    </>
  );
}
