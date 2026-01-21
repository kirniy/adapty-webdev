import type { Metadata } from "next";

import { PredictiveAnalyticsHero } from "~/components/sections/predictive-analytics-hero";
import { PredictiveAnalyticsFeatures } from "~/components/sections/predictive-analytics-features";
import { Testimonials } from "~/components/sections/testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Predictive LTV Analytics with AI-Driven Insights | Adapty",
  description:
    "Adapty's predictive LTV analytics empower you to drive revenue growth by forecasting future revenue streams with precision.",
};

export default function PredictiveAnalyticsPage(): React.JSX.Element {
  return (
    <>
      <PredictiveAnalyticsHero />
      <PredictiveAnalyticsFeatures />
      <Testimonials />
      <CTA />
    </>
  );
}
