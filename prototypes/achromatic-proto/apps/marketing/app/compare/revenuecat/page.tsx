import type { Metadata } from "next";

import { CompareRevenueCat } from "~/components/sections/compare-revenuecat";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Best RevenueCat Alternative for App Revenue Growth | Adapty",
  description:
    "Looking for a RevenueCat alternative? Compare Adapty vs RevenueCat to see why Adapty is the best choice for tracking in-app purchases, subscription analytics, and paywall optimization.",
};

// Page structure matches adapty.io/compare/revenuecat (scraped 2026-01-21)
export default function CompareRevenueCatPage(): React.JSX.Element {
  return (
    <>
      <CompareRevenueCat />
      <CTA />
    </>
  );
}
