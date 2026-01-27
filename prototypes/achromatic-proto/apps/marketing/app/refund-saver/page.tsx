'use client';

/**
 * Refund Saver Page - Automated refund recovery
 *
 * Page structure matches adapty.io/refund-saver (scraped 2026-01-21).
 * Reduces subscription refunds with automated win-back flows.
 */
import { RefundSaverFAQ } from '~/components/sections/refund-saver-faq';
import { RefundSaverFeatures } from '~/components/sections/refund-saver-features';
import { RefundSaverHero } from '~/components/sections/refund-saver-hero';
import {
  CTASwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import {
  useHeroVariant,
  useRefundSaverFeaturesVariant
} from '~/lib/debug-context';

export default function RefundSaverPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useRefundSaverFeaturesVariant();

  return (
    <>
      {heroVariant !== 'off' && <RefundSaverHero />}
      {featuresVariant !== 'off' && (
        <RefundSaverFeatures variant={featuresVariant} />
      )}
      <RefundSaverFAQ />
      <TestimonialsSwitcher />
      <CTASwitcher />
    </>
  );
}
