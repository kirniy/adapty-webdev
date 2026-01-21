import type { Metadata } from 'next';

import { LTVAnalyticsHero } from '~/components/sections/ltv-analytics-hero';
import { LTVAnalyticsFeatures } from '~/components/sections/ltv-analytics-features';
import { Logos } from '~/components/sections/logos';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

export const metadata: Metadata = {
  title: 'App LTV Analytics: Maximize ROI with LTV Prediction',
  description:
    "Gain valuable insights into subscriber lifetime value with Adapty's real-time LTV chart. Break down LTV by user groups, paywalls, or A/B tests."
};

export default function LTVAnalyticsPage(): React.JSX.Element {
  return (
    <>
      <LTVAnalyticsHero />
      <LTVAnalyticsFeatures />
      <Logos />
      <Testimonials />
      <CTA />
    </>
  );
}
