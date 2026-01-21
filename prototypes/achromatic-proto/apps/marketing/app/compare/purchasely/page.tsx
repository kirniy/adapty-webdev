import type { Metadata } from "next";

import { ComparePurchasely } from "~/components/sections/compare-purchasely";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Purchasely Alternative for App Revenue Growth | Adapty",
  description:
    "Adapty is a Purchasely alternative for growing subscription apps. Level up your app with the paywall builder, paywall A/B testing, subscription analytics, and more.",
};

// Page structure matches adapty.io/compare/purchasely (scraped 2026-01-21)
export default function ComparePurchaselyPage(): React.JSX.Element {
  return (
    <>
      <ComparePurchasely />
      <CTA />
    </>
  );
}
