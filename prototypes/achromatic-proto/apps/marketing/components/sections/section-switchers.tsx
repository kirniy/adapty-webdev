'use client';

/**
 * Shared Section Switcher Components
 *
 * These components encapsulate the variant switching logic for each section type.
 * Use these components on any page to get consistent variant switching behavior
 * that responds to the debug menu.
 *
 * Example usage:
 * ```tsx
 * import { LogosSwitcher, TestimonialsSwitcher, CTASwitcher } from '~/components/sections/section-switchers';
 *
 * export default function MyPage() {
 *   return (
 *     <>
 *       <LogosSwitcher />
 *       <TestimonialsSwitcher />
 *       <CTASwitcher />
 *     </>
 *   );
 * }
 * ```
 */

import * as React from 'react';

// Import all variant hooks
import {
  useHeroVariant,
  useLogosVariant,
  useFeaturesVariant,
  useRolesVariant,
  useStatsVariant,
  useTestimonialsVariant,
  useFaqVariant,
  useCtaVariant,
  useBlogVariant,
  useSdkVariant,
} from '~/lib/debug-context';

// Hero components
import { Hero } from '~/components/sections/hero';
import { HeroSplit } from '~/components/sections/hero-split';
import { PricingHero } from '~/components/sections/pricing-hero';
import { StoryHero } from '~/components/sections/story-hero';
import { Contact } from '~/components/sections/contact';

// Logos components
import { Logos } from '~/components/sections/logos';
import { LogosLinear } from '~/components/sections/logos-linear';
import { LogosMarquee } from '~/components/sections/logos-marquee';

// Features components
import { Solution } from '~/components/sections/solution';
import { FeaturesTabbed } from '~/components/sections/features-tabbed';
import { FeaturesBentoTabs } from '~/components/sections/features-bento-tabs';

// Roles
import { Roles } from '~/components/sections/roles';

// Stats components
import { Stats } from '~/components/sections/stats';
import { StatsOrbital } from '~/components/sections/stats-orbital';
import { StoryTimeline } from '~/components/sections/story-timeline';

// Testimonials components
import { Testimonials } from '~/components/sections/testimonials';
import { TestimonialsEditorial } from '~/components/sections/testimonials-editorial';
import { TestimonialsClean } from '~/components/sections/testimonials-clean';
import { StoryTeam } from '~/components/sections/story-team';

// FAQ components
import { FAQ } from '~/components/sections/faq';
import { FAQCards } from '~/components/sections/faq-cards';
import { PricingFAQ } from '~/components/sections/pricing-faq';

// CTA components
import { CTA } from '~/components/sections/cta';
import { CTABeam } from '~/components/sections/cta-beam';
import { CareersPositions } from '~/components/sections/careers-positions';

// Blog components
import { BlogPosts } from '~/components/sections/blog-posts';
import { BlogPostsFeatured } from '~/components/sections/blog-posts-featured';

// SDK
import { SDKCode } from '~/components/sections/sdk-code';

// ============================================================================
// HERO SWITCHER
// ============================================================================

export function HeroSwitcher(): React.JSX.Element | null {
  const variant = useHeroVariant();

  switch (variant) {
    case 'off':
      return null;
    case 'split':
      return <HeroSplit />;
    case 'pricing':
      return <PricingHero />;
    case 'story':
      return <StoryHero />;
    case 'contact':
      return <Contact />;
    case 'marketing':
    default:
      return <Hero />;
  }
}

// ============================================================================
// LOGOS SWITCHER
// ============================================================================

export function LogosSwitcher(): React.JSX.Element | null {
  const variant = useLogosVariant();

  switch (variant) {
    case 'off':
      return null;
    case 'linear':
      return <LogosLinear />;
    case 'marquee':
      return <LogosMarquee />;
    case 'default':
    default:
      return <Logos />;
  }
}

// ============================================================================
// FEATURES SWITCHER
// ============================================================================

export function FeaturesSwitcher(): React.JSX.Element | null {
  const variant = useFeaturesVariant();

  switch (variant) {
    case 'off':
      return null;
    case 'bento-tabs':
      return <FeaturesBentoTabs />;
    case 'tabbed':
      return <FeaturesTabbed />;
    case 'solution':
    default:
      return <Solution />;
  }
}

// ============================================================================
// ROLES SWITCHER
// ============================================================================

export function RolesSwitcher(): React.JSX.Element | null {
  const variant = useRolesVariant();

  switch (variant) {
    case 'off':
      return null;
    case 'cards':
    case 'bento':
    case 'stacked':
    default:
      // Roles component handles variants internally
      return <Roles />;
  }
}

// ============================================================================
// STATS SWITCHER
// ============================================================================

export function StatsSwitcher(): React.JSX.Element | null {
  const variant = useStatsVariant();

  switch (variant) {
    case 'off':
      return null;
    case 'orbital':
      return <StatsOrbital />;
    case 'timeline':
      return <StoryTimeline />;
    case 'default':
    default:
      return <Stats />;
  }
}

// ============================================================================
// TESTIMONIALS SWITCHER
// ============================================================================

export function TestimonialsSwitcher(): React.JSX.Element | null {
  const variant = useTestimonialsVariant();

  switch (variant) {
    case 'off':
      return null;
    case 'editorial':
      return <TestimonialsEditorial />;
    case 'team':
      return <StoryTeam />;
    case 'clean':
      return <TestimonialsClean />;
    case 'default':
    default:
      return <Testimonials />;
  }
}

// ============================================================================
// FAQ SWITCHER
// ============================================================================

export function FAQSwitcher(): React.JSX.Element | null {
  const variant = useFaqVariant();

  switch (variant) {
    case 'off':
      return null;
    case 'cards':
      return <FAQCards />;
    case 'pricing':
      return <PricingFAQ />;
    case 'default':
    default:
      return <FAQ />;
  }
}

// ============================================================================
// CTA SWITCHER
// ============================================================================

export function CTASwitcher(): React.JSX.Element | null {
  const variant = useCtaVariant();

  switch (variant) {
    case 'off':
      return null;
    case 'beam':
      return <CTABeam />;
    case 'careers':
      return <CareersPositions />;
    case 'default':
    default:
      return <CTA />;
  }
}

// ============================================================================
// BLOG SWITCHER
// ============================================================================

export function BlogSwitcher(): React.JSX.Element | null {
  const variant = useBlogVariant();

  switch (variant) {
    case 'off':
      return null;
    case 'featured':
      return <BlogPostsFeatured />;
    case 'default':
    default:
      return <BlogPosts />;
  }
}

// ============================================================================
// SDK SWITCHER
// ============================================================================

export function SDKSwitcher(): React.JSX.Element | null {
  const variant = useSdkVariant();

  switch (variant) {
    case 'off':
      return null;
    case 'default':
    default:
      return <SDKCode />;
  }
}
