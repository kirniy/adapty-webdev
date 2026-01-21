'use client';

import * as React from 'react';

import { PageDebugMenu } from '~/components/debug/page-debug-menu';
import { Logos } from '~/components/sections/logos';
import { PaywallBuilderHero, type PaywallBuilderHeroVariant } from '~/components/sections/paywall-builder-hero';
import { PaywallBuilderFeatures, type PaywallBuilderFeaturesVariant } from '~/components/sections/paywall-builder-features';
import { PaywallBuilderCustomization, type PaywallBuilderCustomizationVariant } from '~/components/sections/paywall-builder-customization';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

const HERO_VARIANTS = ['split', 'centered', 'showcase'] as const;
const FEATURES_VARIANTS = ['grid', 'bento', 'tabs'] as const;
const CUSTOMIZATION_VARIANTS = ['grid', 'carousel', 'expandable'] as const;

export function PaywallBuilderPageClient(): React.JSX.Element {
  const [heroVariant, setHeroVariant] = React.useState<PaywallBuilderHeroVariant>('split');
  const [featuresVariant, setFeaturesVariant] = React.useState<PaywallBuilderFeaturesVariant>('grid');
  const [customizationVariant, setCustomizationVariant] = React.useState<PaywallBuilderCustomizationVariant>('grid');

  return (
    <>
      <PageDebugMenu
        pageId="paywall-builder"
        sections={[
          {
            name: 'Hero',
            current: heroVariant,
            variants: HERO_VARIANTS,
            onChange: setHeroVariant as (value: string) => void,
          },
          {
            name: 'Features',
            current: featuresVariant,
            variants: FEATURES_VARIANTS,
            onChange: setFeaturesVariant as (value: string) => void,
          },
          {
            name: 'Customization',
            current: customizationVariant,
            variants: CUSTOMIZATION_VARIANTS,
            onChange: setCustomizationVariant as (value: string) => void,
          },
        ]}
      />
      <PaywallBuilderHero variant={heroVariant} />
      <Logos />
      <PaywallBuilderCustomization variant={customizationVariant} />
      <PaywallBuilderFeatures variant={featuresVariant} />
      <Testimonials />
      <CTA />
    </>
  );
}
