'use client';

import * as React from 'react';
import {
  FlaskConicalIcon,
  BarChart3Icon,
  BrainCircuitIcon,
  PlayIcon,
  TargetIcon,
  SlidersHorizontalIcon,
  GlobeIcon,
  LinkIcon
} from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/paywall-ab-testing (scraped 2026-01-21)
// Feature section with detailed capabilities
const FEATURES = [
  {
    icon: FlaskConicalIcon,
    title: 'A/B/C testing',
    description: 'Compare several paywalls simultaneously. Test multiple variants at once to find the winning combination faster.'
  },
  {
    icon: BarChart3Icon,
    title: '20+ metrics calculated automatically',
    description: 'Track conversion rates, ARPU, LTV, trial starts, and more. All metrics are calculated in real-time without manual work.'
  },
  {
    icon: BrainCircuitIcon,
    title: 'Bayesian statistics',
    description: 'Our machine learning algorithms use Bayesian statistics to determine winners with high confidence and statistical significance.'
  },
  {
    icon: PlayIcon,
    title: 'Start and stop tests anytime',
    description: 'Full control over your experiments. Pause, resume, or stop tests whenever you need without losing data.'
  },
  {
    icon: TargetIcon,
    title: 'Audience targeting',
    description: 'Run tests for specific user segments based on country, subscription status, custom attributes, and more.'
  },
  {
    icon: SlidersHorizontalIcon,
    title: 'Traffic allocation',
    description: 'Control how much traffic each variant receives. Start with small percentages and scale up winning variants.'
  },
  {
    icon: GlobeIcon,
    title: 'Localization testing',
    description: 'Test different paywall designs and copy for different locales. Find what works best in each market.'
  },
  {
    icon: LinkIcon,
    title: 'Seamless integration',
    description: 'Works with Paywall Builder and Remote Config. No additional setup required to start testing.'
  }
];

// Related features from adapty.io/paywall-ab-testing
const RELATED_FEATURES = [
  { name: 'Remote Config', description: 'Update app behavior without releases' },
  { name: 'Localize', description: 'Translate paywalls for any locale' },
  { name: 'Targeting', description: 'Show different paywalls to different users' },
  { name: 'Paywall Builder', description: 'Create paywalls without coding' }
];

export function ABTestingFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need for paywall experiments"
            description="Powerful A/B testing tools designed specifically for subscription apps."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.02}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* Related features section */}
        <BlurFade delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Works seamlessly with</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              A/B testing integrates with all Adapty features for a complete monetization solution.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {RELATED_FEATURES.map((feature, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                  <p className="font-medium text-foreground">{feature.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
