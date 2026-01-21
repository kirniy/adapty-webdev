'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  LineChartIcon,
  UsersIcon,
  CalendarIcon,
  ReceiptIcon,
  SparklesIcon
} from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/ltv-analytics (scraped 2026-01-21)

const FEATURES = [
  {
    icon: LineChartIcon,
    title: 'Real-time LTV chart',
    description: "Keep track of your subscriber's lifetime value either by subscription periods or by days. Use it to adjust your CPA and paid campaigns."
  },
  {
    icon: UsersIcon,
    title: 'Know the LTV of any group of users',
    description: 'Break down LTV by any group of users, any paywall, or A/B test. Find the most performed segments and grow them.'
  },
  {
    icon: CalendarIcon,
    title: 'Get cumulative lifetime value by days or renewals',
    description: 'Switch LTV calculations by charging periods or by days.'
  },
  {
    icon: ReceiptIcon,
    title: 'Deduct taxes and commissions',
    description: 'View revenue data considering taxes and store commissions to know your true earnings.'
  },
  {
    icon: SparklesIcon,
    title: 'Predict LTV growth',
    description: 'Predict your LTV and revenue data for up to 12 months to see when your traffic starts to pay off.',
    link: '/predictive-analytics/',
    linkText: 'More about AI prediction'
  }
];

// Testimonial from adapty.io/ltv-analytics
const FEATURED_TESTIMONIAL = {
  quote: "Adapty's analytics platform has become an invaluable asset for optimizing our app's monetization strategy. The detailed subscription metrics and LTV prediction tools provide us with real insights to drive our revenue growth.",
  name: 'Burak Berber',
  title: 'Marketing Team Lead at Appnation'
};

// Related pages from adapty.io/ltv-analytics
const RELATED_PAGES = [
  {
    title: 'AI LTV and revenue predictions',
    link: '/predictive-analytics/'
  },
  {
    title: 'Revenue analytics',
    link: '/revenue-analytics/'
  }
];

export function LTVAnalyticsFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-20 relative z-10">
        {/* Featured testimonial */}
        <BlurFade delay={0.05}>
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-foreground italic mb-6">
                  "{FEATURED_TESTIMONIAL.quote}"
                </p>
                <p className="font-semibold">{FEATURED_TESTIMONIAL.name}</p>
                <p className="text-sm text-muted-foreground">{FEATURED_TESTIMONIAL.title}</p>
              </CardContent>
            </Card>
          </div>
        </BlurFade>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none">
                <CardContent className="p-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <feature.icon className="size-6" />
                  </div>
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
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* Migration CTA */}
        <BlurFade delay={0.35}>
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-2xl bg-muted/50 border border-border/50 max-w-2xl">
              <h3 className="text-xl font-semibold mb-2">Using another or in-house solution for subscriptions?</h3>
              <p className="text-muted-foreground mb-4">
                We've got you covered and will help you move your data securely and seamlessly without losing a single subscriber.
              </p>
              <Link
                href="/schedule-demo"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Schedule a call to know more
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </BlurFade>

        {/* Learn more section */}
        <BlurFade delay={0.4}>
          <div className="mt-16">
            <SiteHeading title="Learn more" />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <Link
                  key={index}
                  href={page.link}
                  className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50 font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150 ease-out motion-reduce:transition-none inline-flex items-center gap-2"
                >
                  {page.title}
                  <ArrowRightIcon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
