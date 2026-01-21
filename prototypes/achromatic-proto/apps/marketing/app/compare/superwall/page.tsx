import type { Metadata } from "next";

import { CompareSuperwall } from "~/components/sections/compare-superwall";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Superwall Alternative for App Revenue Growth | Adapty",
  description:
    "Looking for a Superwall alternative? Compare Adapty vs Superwall to see why Adapty is the best choice for app revenue growth, subscription analytics, and paywall optimization.",
};

// Page structure matches adapty.io/compare/superwall (scraped 2026-01-21)
export default function CompareSuperwallPage(): React.JSX.Element {
  return (
    <>
      <CompareSuperwall />
      <CTA />
    </>
  );
}
