'use client';

import * as React from 'react';
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

// Original Achromatic Template Hero Components
import { Hero } from '~/components/sections/hero';
import { HeroSplit } from '~/components/sections/hero-split';
import { PricingHero } from '~/components/sections/pricing-hero';
import { StoryHero } from '~/components/sections/story-hero';
import { Contact } from '~/components/sections/contact';

// Logos
import { Logos } from '~/components/sections/logos';
import { LogosLinear } from '~/components/sections/logos-linear';
import { LogosMarquee } from '~/components/sections/logos-marquee';

// Feature Section Components
import { Solution } from '~/components/sections/solution';
import { FeaturesTabbed } from '~/components/sections/features-tabbed';
import { FeaturesBentoTabs } from '~/components/sections/features-bento-tabs';

// Roles Section (separate from Features)
import { Roles } from '~/components/sections/roles';

// Original Achromatic Stats Components
import { Stats } from '~/components/sections/stats';
import { StoryTimeline } from '~/components/sections/story-timeline';

// Original Achromatic Testimonials Components
import { Testimonials } from '~/components/sections/testimonials';
import { TestimonialsEditorial } from '~/components/sections/testimonials-editorial';
import { TestimonialsClean } from '~/components/sections/testimonials-clean';
import { StoryTeam } from '~/components/sections/story-team';

// Original Achromatic FAQ Components
import { FAQ } from '~/components/sections/faq';
import { PricingFAQ } from '~/components/sections/pricing-faq';

// Original Achromatic CTA Components
import { CTA } from '~/components/sections/cta';
import { CareersPositions } from '~/components/sections/careers-positions';

// Original Achromatic Blog Components
import { BlogPosts } from '~/components/sections/blog-posts';
import { BlogPostsFeatured } from '~/components/sections/blog-posts-featured';

// SDK Code section
import { SDKCode } from '~/components/sections/sdk-code';

// ============================================================================
// VARIANT SWITCHER COMPONENTS
// All sections are now switchable via the debug menu
// ============================================================================

function HeroSection() {
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

function LogosSection() {
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

function FeaturesSection() {
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

function RolesSection() {
  const variant = useRolesVariant();
  switch (variant) {
    case 'off':
      return null;
    case 'cards':
    case 'bento':
    case 'stacked':
    default:
      return <Roles />;
  }
}

function StatsSection() {
  const variant = useStatsVariant();
  switch (variant) {
    case 'off':
      return null;
    case 'timeline':
      return <StoryTimeline />;
    case 'default':
    default:
      return <Stats />;
  }
}

function TestimonialsSection() {
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

function FaqSection() {
  const variant = useFaqVariant();
  switch (variant) {
    case 'off':
      return null;
    case 'pricing':
      return <PricingFAQ />;
    case 'default':
    default:
      return <FAQ />;
  }
}

function CtaSection() {
  const variant = useCtaVariant();
  switch (variant) {
    case 'off':
      return null;
    case 'careers':
      return <CareersPositions />;
    case 'default':
    default:
      return <CTA />;
  }
}

function BlogSection() {
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

function SdkSection() {
  const variant = useSdkVariant();
  switch (variant) {
    case 'off':
      return null;
    case 'default':
    default:
      return <SDKCode />;
  }
}

// ============================================================================
// MAIN PAGE - Only template sections, all switchable via debug menu
// ============================================================================

export default function IndexPage(): React.JSX.Element {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Logos Section */}
      <LogosSection />

      {/* 3. Features Section (Problem/Solution) */}
      <FeaturesSection />

      {/* 4. Roles Section (For Developers/Marketers/Owners) */}
      <RolesSection />

      {/* 5. SDK Code Section */}
      <SdkSection />

      {/* 5. Stats Section */}
      <StatsSection />

      {/* 6. Testimonials Section */}
      <TestimonialsSection />

      {/* 7. Blog Section */}
      <BlogSection />

      {/* 8. FAQ Section */}
      <FaqSection />

      {/* 9. CTA Section */}
      <CtaSection />
    </>
  );
}
