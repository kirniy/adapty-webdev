'use client';

/**
 * SDK Page - Adapty SDK documentation and features
 *
 * Showcases Adapty's SDK capabilities for in-app purchases and subscriptions.
 * Install with 3 lines of code, no server code required.
 */
import { SDKFeatures } from '~/components/sections/sdk-features';
import { SDKHero } from '~/components/sections/sdk-hero';
import {
  CTASwitcher,
  LogosSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';

export default function SDKPage(): React.JSX.Element {
  return (
    <>
      <SDKHero />
      <SDKFeatures />
      <LogosSwitcher />
      <TestimonialsSwitcher />
      <CTASwitcher />
    </>
  );
}
