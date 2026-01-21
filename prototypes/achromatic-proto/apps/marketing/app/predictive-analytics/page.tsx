'use client';

/**
 * Predictive Analytics Page - AI-driven LTV forecasting
 *
 * Adapty's predictive LTV analytics for forecasting future revenue streams.
 * Uses AI-driven insights to help drive revenue growth.
 */

import { PredictiveAnalyticsHero } from '~/components/sections/predictive-analytics-hero';
import { PredictiveAnalyticsFeatures } from '~/components/sections/predictive-analytics-features';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

export default function PredictiveAnalyticsPage(): React.JSX.Element {
  return (
    <>
      <PredictiveAnalyticsHero />
      <PredictiveAnalyticsFeatures />
      <LogosSwitcher />
      <TestimonialsSwitcher />
      <CTASwitcher />
    </>
  );
}
