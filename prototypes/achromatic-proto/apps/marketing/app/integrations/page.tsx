'use client';

/**
 * Integrations Page - Third-party integrations showcase
 *
 * Displays 20+ supported integrations for analytics, messaging, and cloud tools.
 * Helps users create convenient workflows with their existing tools.
 */
import { IntegrationsCarousel } from '~/components/sections/integrations-carousel';
import { IntegrationsHero } from '~/components/sections/integrations-hero';
import {
  CTASwitcher,
  LogosSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';

export default function IntegrationsPage(): React.JSX.Element {
  return (
    <>
      <IntegrationsHero />
      <IntegrationsCarousel />
      <LogosSwitcher />
      <TestimonialsSwitcher />
      <CTASwitcher />
    </>
  );
}
