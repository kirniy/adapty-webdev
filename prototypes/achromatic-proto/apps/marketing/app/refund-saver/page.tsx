'use client';

/**
 * Refund Saver Page - Automated refund recovery
 *
 * Page structure matches adapty.io/refund-saver (scraped 2026-01-21).
 * Reduces subscription refunds with automated win-back flows.
 */

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { RefundSaverHero } from '~/components/sections/refund-saver-hero';
import { RefundSaverFeatures } from '~/components/sections/refund-saver-features';
import { RefundSaverFAQ } from '~/components/sections/refund-saver-faq';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

export default function RefundSaverPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {heroVariant !== 'off' && <RefundSaverHero />}
      <LogosSwitcher />
      {featuresVariant !== 'off' && <RefundSaverFeatures />}
      <RefundSaverFAQ />
      <TestimonialsSwitcher />
      <CTASwitcher />
    </>
  );
}
