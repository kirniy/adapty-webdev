'use client';

/**
 * Autopilot Page - Automated subscription optimization
 *
 * Page structure matches adapty.io/autopilot (scraped 2026-01-21).
 * AI-powered automation for paywall optimization and A/B testing.
 */

import { useHeroVariant, useAutopilotFeaturesVariant } from '~/lib/debug-context';
import { AutopilotHero } from '~/components/sections/autopilot-hero';
import { AutopilotFeatures } from '~/components/sections/autopilot-features';
import {
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

export default function AutopilotPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useAutopilotFeaturesVariant();

  return (
    <>
      {heroVariant !== 'off' && <AutopilotHero />}
      {featuresVariant !== 'off' && <AutopilotFeatures variant={featuresVariant} />}
      <TestimonialsSwitcher />
      <CTASwitcher />
    </>
  );
}
