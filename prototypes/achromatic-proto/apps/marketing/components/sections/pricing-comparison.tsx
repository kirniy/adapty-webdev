'use client';

import * as React from 'react';
import { CheckIcon, MinusIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// Feature comparison data from adapty.io/pricing (scraped 2026-01-21)
// Each category with features and tier availability: Free, Pro, Pro+, Enterprise
type FeatureAvailability = boolean | string;

interface Feature {
  name: string;
  free: FeatureAvailability;
  pro: FeatureAvailability;
  proPlus: FeatureAvailability;
  enterprise: FeatureAvailability;
}

interface FeatureCategory {
  name: string;
  features: Feature[];
}

const COMPARISON_DATA: FeatureCategory[] = [
  {
    name: 'Purchases Infrastructure',
    features: [
      { name: 'Purchase SDKs for all platforms', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Server-to-server notifications', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Subscription events webhooks', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Grace period', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Promotional offers', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Offer codes', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Win-back offers', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Promo campaigns', free: true, pro: true, proPlus: true, enterprise: true },
    ],
  },
  {
    name: 'Integrations',
    features: [
      { name: 'Amplitude', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Mixpanel', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Appmetrica', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'AppsFlyer', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Adjust', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Branch', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Singular', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Tenjin', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Firebase', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'OneSignal', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Pushwoosh', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Airbridge', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Slack', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'BigQuery', free: false, pro: false, proPlus: true, enterprise: true },
      { name: 'Redshift', free: false, pro: false, proPlus: true, enterprise: true },
      { name: 'AWS S3', free: false, pro: false, proPlus: true, enterprise: true },
    ],
  },
  {
    name: 'Paywall management',
    features: [
      { name: 'No-code paywall builder', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Custom fonts', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Custom paywall templates', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Carousel and pickers', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Paywall localization', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Remote config', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Placements', free: true, pro: true, proPlus: true, enterprise: true },
    ],
  },
  {
    name: 'Analytics',
    features: [
      { name: 'Subscription analytics', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Paywall analytics', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Charts', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Cohorts', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'LTV analytics', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Funnels', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Predictive analytics', free: false, pro: false, proPlus: true, enterprise: true },
    ],
  },
  {
    name: 'Monetization experiments',
    features: [
      { name: 'A/B tests', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'A/B test results', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Custom audiences', free: false, pro: true, proPlus: true, enterprise: true },
    ],
  },
  {
    name: 'CRM',
    features: [
      { name: 'Subscriber profiles', free: false, pro: false, proPlus: true, enterprise: true },
      { name: 'Subscriber segmentation', free: false, pro: false, proPlus: true, enterprise: true },
      { name: 'Push notifications', free: false, pro: false, proPlus: true, enterprise: true },
    ],
  },
  {
    name: 'Security & Compliance',
    features: [
      { name: 'SOC 2 Type II', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'GDPR', free: true, pro: true, proPlus: true, enterprise: true },
      { name: '2FA', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'SSO', free: false, pro: false, proPlus: false, enterprise: true },
    ],
  },
  {
    name: 'Admin controls',
    features: [
      { name: 'Seats', free: '1', pro: '3', proPlus: '6', enterprise: 'Unlimited' },
    ],
  },
  {
    name: 'Customer service',
    features: [
      { name: 'Self-serve resources', free: true, pro: true, proPlus: true, enterprise: true },
      { name: 'Chat support', free: false, pro: true, proPlus: true, enterprise: true },
      { name: 'Priority chat support', free: false, pro: false, proPlus: true, enterprise: true },
      { name: 'Dedicated support manager', free: false, pro: false, proPlus: false, enterprise: true },
      { name: 'Custom SLA', free: false, pro: false, proPlus: false, enterprise: true },
    ],
  },
];

const TIERS = [
  { id: 'free', name: 'Free' },
  { id: 'pro', name: 'Pro' },
  { id: 'proPlus', name: 'Pro+' },
  { id: 'enterprise', name: 'Enterprise' },
] as const;

function FeatureCell({ value }: { value: FeatureAvailability }) {
  if (typeof value === 'string') {
    return <span className="text-sm font-medium">{value}</span>;
  }
  if (value) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckIcon className="w-3 h-3 text-primary" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <MinusIcon className="w-4 h-4 text-muted-foreground/40" />
    </div>
  );
}

export function PricingComparison(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Choose a plan that works for you"
            description="Compare features across all plans"
          />
        </BlurFade>
        <BlurFade delay={0.1}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-4 text-left text-sm font-medium text-muted-foreground w-[280px]">
                    Features
                  </th>
                  {TIERS.map((tier) => (
                    <th
                      key={tier.id}
                      className={cn(
                        'py-4 px-4 text-center text-sm font-semibold',
                        tier.id === 'pro' && 'text-primary'
                      )}
                    >
                      {tier.name}
                      {tier.id === 'pro' && (
                        <span className="ml-2 text-xs font-normal text-primary/70">(Most popular)</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((category, categoryIndex) => (
                  <React.Fragment key={category.name}>
                    <tr className="bg-muted/30">
                      <td
                        colSpan={5}
                        className="py-3 px-4 text-sm font-semibold text-foreground"
                      >
                        {category.name}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr
                        key={feature.name}
                        className={cn(
                          'border-b border-border/50',
                          featureIndex % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                        )}
                      >
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          {feature.name}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <FeatureCell value={feature.free} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <FeatureCell value={feature.pro} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <FeatureCell value={feature.proPlus} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <FeatureCell value={feature.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
