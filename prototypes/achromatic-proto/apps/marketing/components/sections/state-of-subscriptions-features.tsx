'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  DownloadIcon,
  GlobeIcon,
  TrendingUpIcon,
  UsersIcon,
  BarChart3Icon,
  RefreshCwIcon,
  ReceiptIcon,
  TestTubesIcon
} from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/state-of-in-app-subscriptions (scraped 2026-01-21)

// Key stats from the report
const KEY_STATS = [
  { value: '$1.9B', label: 'subscription revenue' },
  { value: '$1.7B', label: 'users' },
  { value: '73K', label: 'real-world paywalls' }
];

// Report sections/chapters from adapty.io
const REPORT_SECTIONS = [
  {
    icon: GlobeIcon,
    title: 'Adapty pricing index',
    description: 'See where revenue comes from by region and plan to prioritize what converts best.'
  },
  {
    icon: BarChart3Icon,
    title: 'Subscription market breakdown',
    description: 'Compare revenue share across regions and plan types to prioritize what converts where.'
  },
  {
    icon: TrendingUpIcon,
    title: 'Conversion benchmarks',
    description: "Spot funnel drop-offs by plan, price, and trial - and fix what's slowing users down."
  },
  {
    icon: UsersIcon,
    title: 'LTV & profitability',
    description: 'Find the most profitable plans by region, price, and trial to monetize smarter.'
  },
  {
    icon: RefreshCwIcon,
    title: 'Retention and renewals',
    description: 'Explore how trials and plan types impact retention - and focus on what drives renewals.'
  },
  {
    icon: ReceiptIcon,
    title: 'Refund trends',
    description: 'Break down refund rates by price and plan to reduce churn before it spikes.'
  },
  {
    icon: TestTubesIcon,
    title: 'A/B experiments and paywalls',
    description: 'Discover which paywalls convert best, what drives uplift, and how testing impacts revenue at scale.'
  }
];

// Key insights from the A/B testing section
const KEY_INSIGHTS = [
  'Three-plan paywalls (weekly, monthly, yearly) deliver the highest LTV.',
  'Simple weekly plans with short trials convert best.',
  'Annual + weekly combos create a clear upgrade path.'
];

// Revenue share by region
const REVENUE_BY_REGION = [
  { region: 'US', share: '48.9%' },
  { region: 'Europe', share: '24.8%' },
  { region: 'APAC', share: '10.3%' },
  { region: 'MEA', share: '6.6%' },
  { region: 'North America (excl. US)', share: '5.0%' },
  { region: 'LATAM', share: '4.5%' }
];

export function StateOfSubscriptionsFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2500} />
      <div className="container py-20 relative z-10">
        {/* Key stats */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="15,000+ apps' data, distilled into growth moves you can copy today"
          />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {KEY_STATS.map((stat, index) => (
              <Card
                key={index}
                className="bg-background/50 backdrop-blur-sm border-border/50 text-center"
              >
                <CardContent className="p-6">
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </BlurFade>

        {/* Report sections */}
        <BlurFade delay={0.15}>
          <div className="mt-20">
            <SiteHeading
              title="Designed to make every decision easier and faster"
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REPORT_SECTIONS.map((section, index) => (
                <Card
                  key={index}
                  className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none"
                >
                  <CardContent className="p-6">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <section.icon className="size-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Revenue by region snapshot */}
        <BlurFade delay={0.2}>
          <div className="mt-20">
            <SiteHeading
              title="Subscription revenue share by region"
              description="Where does subscription revenue come from globally?"
            />

            <div className="mt-8 max-w-2xl mx-auto">
              <div className="space-y-3">
                {REVENUE_BY_REGION.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border/30">
                    <span className="font-medium">{item.region}</span>
                    <span className="text-primary font-bold">{item.share}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Key insights */}
        <BlurFade delay={0.25}>
          <div className="mt-20">
            <SiteHeading
              title="Key insights from A/B testing"
            />

            <div className="mt-8 max-w-2xl mx-auto">
              <ul className="space-y-4">
                {KEY_INSIGHTS.map((insight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/30"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BlurFade>

        {/* Final CTA */}
        <BlurFade delay={0.3}>
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-2xl bg-muted/50 border border-border/50 max-w-2xl">
              <h3 className="text-xl font-semibold mb-2">Your next growth decision starts with better data</h3>
              <p className="text-muted-foreground mb-6">
                For teams making pricing, paywall, and monetization decisions today.
              </p>
              <Link
                href="https://uploads.adapty.io/state_of_in_app_subscriptions_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'rounded-xl px-8'
                )}
              >
                <DownloadIcon className="mr-2 size-4" />
                Download the report
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
