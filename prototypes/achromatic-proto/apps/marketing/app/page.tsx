'use client';

import * as React from 'react';
import {
  useHeroVariant,
  useLogosVariant,
  useFeaturesVariant,
  useStatsVariant,
  useTestimonialsVariant,
  useFaqVariant,
  useCtaVariant,
  useBlogVariant,
} from '~/lib/debug-context';

// Original Achromatic Template Hero Components
import { Hero } from '~/components/sections/hero';
import { PricingHero } from '~/components/sections/pricing-hero';
import { StoryHero } from '~/components/sections/story-hero';
import { Contact } from '~/components/sections/contact';

// Logos
import { Logos } from '~/components/sections/logos';

// Original Achromatic Features Components
import { Problem } from '~/components/sections/problem';
import { Solution } from '~/components/sections/solution';
import { StoryValues } from '~/components/sections/story-values';
import { StoryVision } from '~/components/sections/story-vision';
import { CareersBenefits } from '~/components/sections/careers-benefits';
import { FeaturesStickyScroll } from '~/components/sections/features-sticky-scroll';

// Original Achromatic Stats Components
import { Stats } from '~/components/sections/stats';
import { StoryTimeline } from '~/components/sections/story-timeline';

// Original Achromatic Testimonials Components
import { Testimonials } from '~/components/sections/testimonials';
import { StoryTeam } from '~/components/sections/story-team';

// Original Achromatic FAQ Components
import { FAQ } from '~/components/sections/faq';
import { PricingFAQ } from '~/components/sections/pricing-faq';

// Original Achromatic CTA Components
import { CTA } from '~/components/sections/cta';
import { CareersPositions } from '~/components/sections/careers-positions';

// Original Achromatic Blog Components
import { BlogPosts } from '~/components/sections/blog-posts';

// ============================================================================
// VARIANT SWITCHER COMPONENTS
// All sections are now switchable via the debug menu
// ============================================================================

function HeroSection() {
  const variant = useHeroVariant();
  switch (variant) {
    case 'off':
      return null;
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
    case 'problem':
      return <Problem />;
    case 'sticky-scroll':
      return <FeaturesStickyScroll />;
    case 'values':
      return <StoryValues />;
    case 'vision':
      return <StoryVision />;
    case 'benefits':
      return <CareersBenefits />;
    case 'solution':
    default:
      return <Solution />;
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
    case 'team':
      return <StoryTeam />;
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
    case 'default':
    default:
      return <BlogPosts />;
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

      {/* 4. Stats Section */}
      <StatsSection />

      {/* 5. Testimonials Section */}
      <TestimonialsSection />

      {/* 6. Blog Section */}
      <BlogSection />

      {/* 7. FAQ Section */}
      <FaqSection />

      {/* 8. CTA Section */}
      <CtaSection />
    </>
  );
}
