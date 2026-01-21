'use client';

import * as React from 'react';

import {
  useHeroVariant,
  useFeaturesVariant,
  useCustomizationVariant,
  useLogosVariant,
  useFaqVariant,
  useTestimonialsVariant,
  useCtaVariant
} from '~/lib/debug-context';

// Page-specific components
import { PaywallBuilderHero, type PaywallBuilderHeroVariant } from '~/components/sections/paywall-builder-hero';
import { PaywallBuilderFeatures, type PaywallBuilderFeaturesVariant } from '~/components/sections/paywall-builder-features';
import { PaywallBuilderCustomization } from '~/components/sections/paywall-builder-customization';

// Global components with variants
import { Logos } from '~/components/sections/logos';
import { LogosLinear } from '~/components/sections/logos-linear';
import { LogosMarquee } from '~/components/sections/logos-marquee';
import { FAQ } from '~/components/sections/faq';
import { PricingFAQ } from '~/components/sections/pricing-faq';
import { Testimonials } from '~/components/sections/testimonials';
import { TestimonialsEditorial } from '~/components/sections/testimonials-editorial';
import { TestimonialsClean } from '~/components/sections/testimonials-clean';
import { CTA } from '~/components/sections/cta';
import { CareersPositions } from '~/components/sections/careers-positions';

// Map global hero variants to PaywallBuilderHero variants
function mapHeroVariant(globalVariant: string): PaywallBuilderHeroVariant {
  switch (globalVariant) {
    case 'marketing': return 'centered';
    case 'split': return 'split';
    case 'pricing': return 'showcase';
    case 'story': return 'centered';
    case 'contact': return 'split';
    default: return 'split';
  }
}

// Map global features variants to PaywallBuilderFeatures variants
function mapFeaturesVariant(globalVariant: string): PaywallBuilderFeaturesVariant {
  switch (globalVariant) {
    case 'bento-tabs': return 'tabs';
    case 'solution': return 'bento';
    case 'tabbed': return 'tabs';
    default: return 'grid';
  }
}

// Section wrapper components (same pattern as homepage)
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

function TestimonialsSection() {
  const variant = useTestimonialsVariant();
  switch (variant) {
    case 'off':
      return null;
    case 'editorial':
      return <TestimonialsEditorial />;
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

export default function PaywallBuilderPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const customizationVariant = useCustomizationVariant();

  return (
    <>
      {heroVariant !== 'off' && <PaywallBuilderHero variant={mapHeroVariant(heroVariant)} />}
      <LogosSection />
      {featuresVariant !== 'off' && (
        <>
          <PaywallBuilderFeatures variant={mapFeaturesVariant(featuresVariant)} />
          {customizationVariant !== 'off' && (
            <PaywallBuilderCustomization variant={customizationVariant} />
          )}
        </>
      )}
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
