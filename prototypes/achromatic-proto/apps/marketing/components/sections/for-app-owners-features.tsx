'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  RocketIcon,
  CodeIcon,
  BarChart3Icon,
  TrendingUpIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/for-app-owners (scraped 2026-01-21)
const FEATURES = [
  {
    icon: RocketIcon,
    title: 'Increase marketing speed',
    description: 'Use Adapty to launch app updates faster, reduce costs, and minimize reliance on development team.',
    details: [
      'Easily edit pricing and products with a user-friendly dashboard',
      'Update paywalls in real time without releasing a new app version',
      'Run A/B tests to optimize conversion and make data-driven decisions'
    ]
  },
  {
    icon: CodeIcon,
    title: 'Save dev team efforts',
    description: 'Reduce development time and costs with simple integration and no-code tools.',
    details: [
      'Integrate in hours, not weeks, with just a few SDK methods',
      'Cross-platform subscriber sync across iOS, Android, and Web',
      'Well-maintained SDKs for every major platform'
    ]
  },
  {
    icon: BarChart3Icon,
    title: 'Clear subscription reporting',
    description: 'Get a complete picture of your subscription business with real-time analytics.',
    details: [
      'Track MRR, LTV, churn, and 20+ other key metrics',
      'Cohort analysis and funnel reports for deep insights',
      'Export data to your BI tools or data warehouse'
    ]
  },
  {
    icon: TrendingUpIcon,
    title: 'Predict revenue for 4 quarters',
    description: 'Use Adapty Forecast to predict subscription revenue and plan your business growth.',
    details: [
      'AI-powered revenue predictions based on your data',
      'Scenario modeling for different growth strategies',
      'Track actual vs predicted to improve accuracy'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: 'Access rights',
    description: 'Control who can access what with granular permissions and role-based access.',
    details: [
      'Role-based access control for team members',
      'Separate environments for development and production',
      'Audit logs for compliance and security'
    ]
  }
];

// Related roles from adapty.io/for-app-owners
const RELATED_ROLES = [
  {
    title: 'For developers',
    description: 'Integrate and deploy in-app purchases in minutes with a single line of code.',
    link: '/for-developers'
  },
  {
    title: 'For marketers',
    description: 'Build, manage, and target paywalls without leaving the dashboard.',
    link: '/for-marketers'
  }
];

export function ForAppOwnersFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need to run a subscription business"
            description="From analytics to access control, Adapty provides the tools you need to grow."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.02}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none">
                <CardContent className="p-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <feature.icon className="size-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
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
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2">
                        {role.title}
                        <ArrowRightIcon className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
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
