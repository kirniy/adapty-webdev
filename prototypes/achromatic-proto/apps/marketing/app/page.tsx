'use client';

import * as React from 'react';

// Import all section switchers from the shared module
import {
  HeroSwitcher,
  LogosSwitcher,
  FeaturesSwitcher,
  RolesSwitcher,
  SDKSwitcher,
  StatsSwitcher,
  TestimonialsSwitcher,
  BlogSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// ============================================================================
// MAIN PAGE - Using shared section switchers for consistent variant handling
// ============================================================================

export default function IndexPage(): React.JSX.Element {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSwitcher />

      {/* 2. Logos Section */}
      <LogosSwitcher />

      {/* 3. Features Section (Problem/Solution) */}
      <FeaturesSwitcher />

      {/* 4. Roles Section (For Developers/Marketers/Owners) */}
      <RolesSwitcher />

      {/* 5. SDK Code Section */}
      <SDKSwitcher />

      {/* 6. Stats Section */}
      <StatsSwitcher />

      {/* 7. Testimonials Section */}
      <TestimonialsSwitcher />

      {/* 8. Blog Section */}
      <BlogSwitcher />

      {/* 9. FAQ Section */}
      <FAQSwitcher />

      {/* 10. CTA Section */}
      <CTASwitcher />
    </>
  );
}
