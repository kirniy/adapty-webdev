'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  CodeIcon,
  ZapIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
  LayoutGridIcon,
  SendIcon,
  SlidersHorizontalIcon,
  WebhookIcon,
  ArrowRightIcon
} from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/for-developers (scraped 2026-01-21)
const FEATURES = [
  {
    icon: CodeIcon,
    title: 'Just 5 SDK methods to integrate monetization',
    description: "Fetch Paywalls, make purchases, and check the subscription status - that's all you need to get started quickly.",
    link: 'https://adapty.io/docs/quickstart-sdk',
    linkText: 'Get started with SDK'
  },
  {
    icon: ZapIcon,
    title: 'Quick integration in just a couple of hours',
    description: "Add products from AppStore Connect, Google Play, or Stripe. Then, create Adapty paywalls, and you're good to go.",
    link: null,
    linkText: null
  },
  {
    icon: RefreshCwIcon,
    title: 'Cross-platform subscriber sync',
    description: 'Adapty SDKs automatically sync subscribers across all platforms. Use Adapty as a single source of truth for your customers.',
    link: null,
    linkText: 'Read more about sync'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Highest SLA in the industry: 99.99% and growing',
    description: "Adapty SDK and servers are battle-tested by some of the largest apps in the world. Reach 100% fault tolerance with fallback paywalls.",
    link: null,
    linkText: null
  },
  {
    icon: LayoutGridIcon,
    title: 'Well-maintained SDK for each platform',
    description: 'We regularly update our SDKs, consistently releasing new features and optimizing performance.',
    link: null,
    linkText: 'Learn more'
  },
  {
    icon: SendIcon,
    title: 'Simple 3rd-party integrations',
    description: "Just add an extra line of code, turn on the integration, and Adapty will automatically send data to the 3rd-party service.",
    link: null,
    linkText: 'Learn more'
  },
  {
    icon: SlidersHorizontalIcon,
    title: 'Flexible paywall management architecture',
    description: 'Adapty Placements make it easy to change paywalls remotely and run testing with neither coding nor app releases required.',
    link: null,
    linkText: null
  },
  {
    icon: WebhookIcon,
    title: 'Raw data export',
    description: 'Save raw vendor data in real-time to your servers with Raw Webhook or get the processed and enriched data events from Webhook integration.',
    link: null,
    linkText: null
  }
];

// SDK list from adapty.io/for-developers
const SDKS = [
  { name: 'Swift SDK', stars: '441', platform: 'iOS' },
  { name: 'Kotlin SDK', stars: '101', platform: 'Android' },
  { name: 'React Native SDK', stars: '157', platform: 'Cross-platform' },
  { name: 'Unity SDK', stars: '59', platform: 'Game engines' },
  { name: 'Flutter SDK', stars: '122', platform: 'Cross-platform' },
  { name: 'FlutterFlow', platform: 'Low-code' },
  { name: 'Capacitor SDK', stars: '5', platform: 'Cross-platform' },
  { name: 'KMP SDK', stars: '16', platform: 'Kotlin Multiplatform' },
  { name: 'Stripe SDK', platform: 'Web' }
];

// Related roles from adapty.io/for-developers
const RELATED_ROLES = [
  {
    title: 'For marketers',
    description: 'Double subscription revenue with A/B testing paywalls and 3rd party integrations.',
    link: '/for-marketers'
  },
  {
    title: 'For app owners',
    description: 'Instantly available cross-platform subscription analytics.',
    link: '/for-app-owners'
  }
];

export function ForDevelopersFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
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

        {/* SDKs section */}
        <BlurFade delay={0.2}>
          <div className="mt-16">
            <SiteHeading
              title="100% Open Source SDKs"
              description="Well-maintained SDKs for every major platform."
            />
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SDKS.map((sdk, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50 text-center">
                  <p className="font-medium text-foreground text-sm">{sdk.name}</p>
                  {sdk.stars && (
                    <p className="text-xs text-muted-foreground mt-1">{sdk.stars} stars on GitHub</p>
                  )}
                  <p className="text-xs text-primary mt-1">{sdk.platform}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

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
