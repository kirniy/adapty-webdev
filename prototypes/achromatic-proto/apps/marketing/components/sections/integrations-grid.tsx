'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT integrations from adapty.io/integrations (scraped 2026-01-21)
const INTEGRATIONS = [
  { name: 'Airbridge', link: '/integrations/airbridge/', category: 'Attribution' },
  { name: 'Adjust', link: '/integrations/adjust/', category: 'Attribution' },
  { name: 'Amazon S3', link: '/integrations/amazon-s3/', category: 'Cloud Storage' },
  { name: 'Amplitude', link: '/integrations/amplitude/', category: 'Analytics' },
  { name: 'Apple Ads', link: '/integrations/apple-search-ads/', category: 'Ads' },
  { name: 'AppsFlyer', link: '/integrations/appsflyer/', category: 'Attribution' },
  { name: 'AppMetrica', link: '/integrations/appmetrica/', category: 'Analytics' },
  { name: 'Asapty', link: '/integrations/asapty/', category: 'Attribution' },
  { name: 'Branch', link: '/integrations/branch/', category: 'Attribution' },
  { name: 'Braze', link: '/integrations/braze/', category: 'Engagement' },
  { name: 'Facebook Ads', link: '/integrations/facebook-ads/', category: 'Ads' },
  { name: 'Google Analytics', link: '/integrations/google-analytics-firebase/', category: 'Analytics' },
  { name: 'Google Cloud Storage', link: '/integrations/google-cloud-storage/', category: 'Cloud Storage' },
  { name: 'Mixpanel', link: '/integrations/mixpanel/', category: 'Analytics' },
  { name: 'OneSignal', link: '/integrations/onesignal/', category: 'Engagement' },
  { name: 'PostHog', link: '/integrations/posthog/', category: 'Analytics' },
  { name: 'Pushwoosh', link: '/integrations/pushwoosh/', category: 'Engagement' },
  { name: 'SplitMetrics', link: '/integrations/splitmetrics/', category: 'Attribution' },
  { name: 'Singular', link: '/integrations/singular/', category: 'Attribution' },
  { name: 'Stripe', link: '/integrations/stripe/', category: 'Payments' },
  { name: 'Tenjin', link: '/integrations/tenjin/', category: 'Attribution' },
  { name: 'Webhook', link: '/integrations/webhook/', category: 'Custom' }
];

// SDKs from adapty.io/integrations
const SDKS = [
  { name: 'Swift SDK', link: '/sdk/ios/' },
  { name: 'Kotlin SDK', link: '/sdk/android/' },
  { name: 'React Native SDK', link: '/sdk/react-native/' },
  { name: 'Unity SDK', link: '/sdk/unity/' },
  { name: 'Flutter SDK', link: '/sdk/flutter/' },
  { name: 'Capacitor SDK', link: '/sdk/capacitor/' },
  { name: 'KMP SDK', link: '/sdk/kmp/' },
  { name: 'FlutterFlow', link: '/sdk/flutterflow/' },
  { name: 'Web API', link: '/sdk/web/' },
  { name: 'Stripe', link: '/integrations/stripe/' }
];

// Event types from adapty.io/integrations
const EVENT_TYPES = [
  'Starts a trial',
  'Converts from trial',
  'Cancels a subscription',
  'Renews a subscription',
  'Gets a refund',
  'Enters billing retry period',
  'Gets access to premium',
  'Loses access to premium'
];

export function IntegrationsGrid(): React.JSX.Element {
  // Group integrations by category
  const groupedIntegrations = INTEGRATIONS.reduce((acc, integration) => {
    if (!acc[integration.category]) {
      acc[integration.category] = [];
    }
    acc[integration.category].push(integration);
    return acc;
  }, {} as Record<string, typeof INTEGRATIONS>);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1800} />
      <div className="container py-20 relative z-10">
        {/* One-click integrations section */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="One-click integrations"
            description="Forward subscription events to analytics, attribution, and ad services without coding."
          />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mt-8 text-center">
            <Link
              href="https://adapty.io/docs/events/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              Explore integrations
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </BlurFade>

        {/* Integrations grid by category */}
        <div className="mt-12 space-y-12">
          {Object.entries(groupedIntegrations).map(([category, integrations], categoryIndex) => (
            <BlurFade key={category} delay={0.15 + categoryIndex * 0.05}>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {integrations.map((integration, index) => (
                    <Link key={index} href={integration.link} className="group">
                      <Card interactive className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30">
                        <CardContent className="p-4 text-center">
                          <p className="font-medium text-sm group-hover:text-primary transition-colors">
                            {integration.name}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Send subscription events section */}
        <BlurFade delay={0.4}>
          <div className="mt-20">
            <SiteHeading
              title="Send subscription events when a user"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {EVENT_TYPES.map((event, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm"
                >
                  {event}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Event feed section */}
        <BlurFade delay={0.45}>
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-2xl bg-muted/50 border border-border/50 max-w-2xl">
              <h3 className="text-xl font-semibold mb-2">Event feed</h3>
              <p className="text-muted-foreground mb-4">
                Track purchase events, verify SDK installation, check integrations and A/B tests - all with Adapty SDK.
              </p>
              <Link
                href="https://adapty.io/docs/event-feed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Read the docs
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </BlurFade>

        {/* SDK section */}
        <BlurFade delay={0.5}>
          <div className="mt-20">
            <SiteHeading
              title="Get the SDK for your platform"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {SDKS.map((sdk, index) => (
                <Link
                  key={index}
                  href={sdk.link}
                  className="px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150 ease-out motion-reduce:transition-none"
                >
                  {sdk.name}
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* G2 Awards section */}
        <BlurFade delay={0.55}>
          <div className="mt-20 text-center">
            <h3 className="text-lg font-semibold mb-2">Trusted for usability and customer service</h3>
            <Link
              href="https://www.g2.com/products/adapty-io/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Based on 500+ reviews
            </Link>
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              <div className="px-4 py-2 rounded-lg bg-muted/30 text-sm">Best Results Winter 2025</div>
              <div className="px-4 py-2 rounded-lg bg-muted/30 text-sm">High Performer Winter 2025</div>
              <div className="px-4 py-2 rounded-lg bg-muted/30 text-sm">Best Usability Winter 2025</div>
              <div className="px-4 py-2 rounded-lg bg-muted/30 text-sm">Best Relationship Winter 2025</div>
              <div className="px-4 py-2 rounded-lg bg-muted/30 text-sm">Most Implementable Winter 2025</div>
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
