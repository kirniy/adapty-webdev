'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  FlaskConicalIcon,
  LayoutIcon,
  TargetIcon,
  BrainCircuitIcon,
  BarChart3Icon,
  SendIcon,
  SearchIcon,
  GlobeIcon,
  ArrowRightIcon
} from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/for-marketers (scraped 2026-01-21)
const FEATURES = [
  {
    icon: FlaskConicalIcon,
    title: 'Easy paywall testing without the dev team',
    description: 'Find the optimal paywall with Adapty paywall A/B testing that requires no additional coding. Compare subscriptions, offers, free trials, copy, images, and more.',
    link: '/paywall-ab-testing',
    linkText: 'Paywall A/B testing'
  },
  {
    icon: LayoutIcon,
    title: 'Build and deploy high-quality paywalls with no coding',
    description: 'Use our collection of highly customizable industry-proven paywall templates to change paywall UI and pricing quickly.',
    link: '/paywall-builder',
    linkText: 'Try our Paywall Builder'
  },
  {
    icon: TargetIcon,
    title: 'Target paywalls to user segments',
    description: 'Fine-tune your offers for different groups of users, like selling more expensive products to your power users while promoting a free trial for others.',
    link: '/paywall-targeting',
    linkText: 'More about targeting'
  },
  {
    icon: BrainCircuitIcon,
    title: 'Stop the guesswork, get accurate LTV prediction',
    description: "With machine learning, Adapty's LTV and revenue prediction will help you understand your profitability for a given cohort.",
    link: null,
    linkText: null
  },
  {
    icon: BarChart3Icon,
    title: 'Revenue analytics you can trust',
    description: 'Get real-time vital subscription and revenue analytics. Segment and filter audience, compare time periods, and track your sales funnel with cohort analysis.',
    link: null,
    linkText: null
  },
  {
    icon: SendIcon,
    title: 'Send revenue events to MMP and analytics',
    description: "We know it's important to use other services to help you optimize your ad campaigns and user acquisition. Adapty makes it easy to push data to 3rd party services.",
    link: null,
    linkText: null
  },
  {
    icon: SearchIcon,
    title: 'Built-in Apple Search Ads analytics',
    description: 'Analyze your ASA performance right in the Adapty dashboard. Get revenue, LTV, and other core metrics on the keyword level.',
    link: null,
    linkText: null
  },
  {
    icon: GlobeIcon,
    title: 'Convenient paywall localization',
    description: 'Trying a new traffic source or a country? Localize paywalls for the local audience right in the Adapty dashboard.',
    link: '/paywall-localization',
    linkText: 'Localize paywalls in a few clicks'
  }
];

// Related roles from adapty.io/for-marketers
const RELATED_ROLES = [
  {
    title: 'For developers',
    description: 'Integrate in-app purchases in minutes.',
    link: '/for-developers'
  },
  {
    title: 'For app owners',
    description: 'Instantly available cross-platform subscription analytics.',
    link: '/for-app-owners'
  }
];

export function ForMarketersFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.05 + index * 0.02}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
                      {feature.link && feature.linkText && (
                        <Link
                          href={feature.link}
                          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {feature.linkText}
                          <ArrowRightIcon className="size-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* Related roles section */}
        <BlurFade delay={0.25}>
          <div className="mt-16">
            <SiteHeading
              title="We're here for your team"
            />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {RELATED_ROLES.map((role, index) => (
                <Link key={index} href={role.link} className="group">
                  <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
