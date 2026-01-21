import type { Metadata } from "next";

import { RevenueGrowthHero } from "~/components/sections/revenue-growth-hero";
import { RevenueGrowthFeatures } from "~/components/sections/revenue-growth-features";
import { Testimonials } from "~/components/sections/testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Double Your Subscription Revenue in 3 Months | Adapty",
  description:
    "With Adapty's no-code paywall builder, A/B testing, and analytics, turn your paywalls into powerful revenue tools and maximize subscription growth.",
};

export default function RevenueGrowthPage(): React.JSX.Element {
  return (
    <>
      <RevenueGrowthHero />
      <RevenueGrowthFeatures />
      <Testimonials />
      <CTA />
    </>
  );
}
