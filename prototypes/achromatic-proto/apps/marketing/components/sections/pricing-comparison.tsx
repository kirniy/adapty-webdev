'use client';

import * as React from 'react';
import { CheckIcon, MinusIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';
import { Badge } from '@workspace/ui/components/badge';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';

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

// Magic animation: Features count badge
function FeaturesCountMagic() {
  const shouldReduceMotion = useReducedMotion();
  const totalFeatures = COMPARISON_DATA.reduce((acc, cat) => acc + cat.features.length, 0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(totalFeatures);
      return;
    }
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= totalFeatures) return totalFeatures;
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, totalFeatures]);

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.div
        className="size-2 rounded-full bg-primary"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.span
        key={count}
        initial={shouldReduceMotion ? {} : { y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {count}+ features
      </motion.span>
    </motion.div>
  );
}

function FeatureCell({ value, delay = 0 }: { value: FeatureAvailability, delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  if (typeof value === 'string') {
    return <span className="text-sm font-medium">{value}</span>;
  }
  if (value) {
    return (
      <div className="flex items-center justify-center">
        <motion.div
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 0, opacity: 0 }}
          whileInView={shouldReduceMotion ? { scale: 1 } : { scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay }}
          className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <CheckIcon className="w-3.5 h-3.5 text-primary" />
        </motion.div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <MinusIcon className="w-4 h-4 text-muted-foreground/30" />
    </div>
  );
}

export function PricingComparison(): React.JSX.Element {
  const [hoveredRow, setHoveredRow] = React.useState<string | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={350} />
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Choose a plan that works for you"
            description="Compare features across all plans"
          />
          <div className="mt-4 flex justify-center">
            <FeaturesCountMagic />
          </div>
        </BlurFade>
        <BlurFade delay={0.1}>
          <div className="mt-12 overflow-x-auto pb-4">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-4 text-left text-sm font-medium text-muted-foreground w-[280px]">
                    Features
                  </th>
                  {TIERS.map((tier) => (
                    <th
                      key={tier.id}
                      className={cn(
                        'py-4 px-4 text-center text-sm font-semibold relative',
                        tier.id === 'pro' && 'text-primary'
                      )}
                    >
                      {tier.name}
                      {tier.id === 'pro' && (
                        <>
                          <Badge variant="secondary" className="ml-2 text-[10px] h-5 px-1.5 font-normal text-primary/80 bg-primary/10 hover:bg-primary/20">Popular</Badge>
                          {/* Pro Column Highlight Background */}
                          <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary/5 -z-10 rounded-t-xl" />
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((category, categoryIndex) => (
                  <React.Fragment key={category.name}>
                    <tr className="group">
                      <td
                        colSpan={5}
                        className="py-4 px-4 text-sm font-semibold text-foreground bg-muted/30 group-hover:bg-muted/50 transition-colors rounded-lg"
                      >
                        {category.name}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => {
                      const isHovered = hoveredRow === feature.name;
                      return (
                        <tr
                          key={feature.name}
                          onMouseEnter={() => setHoveredRow(feature.name)}
                          onMouseLeave={() => setHoveredRow(null)}
                          className="group/row transition-colors"
                        >
                          <td className={cn(
                            "py-3 px-4 text-sm text-muted-foreground transition-colors group-hover/row:text-foreground border-b border-border/40",
                            isHovered && "bg-muted/20"
                          )}>
                            {feature.name}
                          </td>
                          {TIERS.map((tier, tierIdx) => (
                            <td
                              key={tier.id}
                              className={cn(
                                "py-3 px-4 text-center border-b border-border/40 relative",
                                isHovered && "bg-muted/20",
                                tier.id === 'pro' && "bg-primary/5 group-hover/row:bg-primary/10"
                              )}
                            >
                              <FeatureCell
                                value={feature[tier.id] as FeatureAvailability}
                                delay={tierIdx * 0.05}
                              />
                            </td>
                          ))}
                        </tr>
                      )
                    })}
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

