import type { Metadata } from "next";

import { CompareQonversion } from "~/components/sections/compare-qonversion";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Top Qonversion Alternative in 2025 | Adapty",
  description:
    "Discover Adapty - the leading alternative to Qonversion for accelerating app revenue growth. Unleash powerful analytics, A/B testing, and in-app subscription management tools designed to optimize your mobile app's performance and maximize earnings.",
};

// Page structure matches adapty.io/compare/qonversion (scraped 2026-01-21)
export default function CompareQonversionPage(): React.JSX.Element {
  return (
    <>
      <CompareQonversion />
      <CTA />
    </>
  );
}
