'use client';

/**
 * Integrations Page - Third-party integrations showcase
 *
 * Displays 20+ supported integrations for analytics, messaging, and cloud tools.
 * Helps users create convenient workflows with their existing tools.
 */

import { IntegrationsHero } from '~/components/sections/integrations-hero';
import { IntegrationsGrid } from '~/components/sections/integrations-grid';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

export default function IntegrationsPage(): React.JSX.Element {
  return (
    <>
      <IntegrationsHero />
      <IntegrationsGrid />
      <LogosSwitcher />
      <TestimonialsSwitcher />
      <CTASwitcher />
    </>
  );
}
