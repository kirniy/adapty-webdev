'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';

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

// Integration card with hover animation
function IntegrationCard({ integration, index }: { integration: typeof INTEGRATIONS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
      className="group h-full"
    >
      <Link href={integration.link} className="block h-full relative">
        <div className="relative h-full overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 text-center transition-colors hover:border-primary/30 hover:shadow-md">
          {isHovered && (
            <BorderBeam
              size={80}
              duration={6}
              borderWidth={1.5}
              colorFrom="hsl(var(--primary))"
              colorTo="hsl(var(--primary)/0)"
            />
          )}
          <Spotlight
            className="from-primary/20 via-primary/10 to-transparent"
            size={120}
          />
          <p className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors relative z-10">
            {integration.name}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

// SDK badge with hover animation
function SDKBadge({ sdk }: { sdk: typeof SDKS[0] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.03 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
    >
      <Link
        href={sdk.link}
        className="block px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm font-medium hover:border-primary/30 hover:text-primary hover:shadow-md transition-all duration-150 ease-out motion-reduce:transition-none"
      >
        {sdk.name}
      </Link>
    </motion.div>
  );
}

// Event type badge with hover animation
function EventBadge({ event }: { event: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.03 }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
      className="inline-block px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm cursor-default hover:border-primary/20 transition-colors duration-150"
    >
      {event}
    </motion.span>
  );
}

// Magic animation: Integration count badge
function IntegrationCountMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(30);
      return;
    }
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 30) return 30;
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.div
        className="size-2 rounded-full bg-emerald-500"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.3, 1],
          opacity: [1, 0.6, 1],
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
        {count}+
      </motion.span>
      <span>integrations</span>
    </motion.div>
  );
}

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
          <div className="mt-4 flex justify-center">
            <IntegrationCountMagic />
          </div>
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
                    <IntegrationCard key={index} integration={integration} index={index} />
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
                <EventBadge key={index} event={event} />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Event feed section */}
        <BlurFade delay={0.45}>
          <div className="mt-20 text-center">
            <div className="relative inline-block p-8 rounded-2xl bg-muted/50 border border-border/50 max-w-2xl overflow-hidden">
              <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={250} />
              <BorderBeam
                size={200}
                duration={12}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-50"
              />
              <h3 className="text-xl font-semibold mb-2 relative z-10">Event feed</h3>
              <p className="text-muted-foreground mb-4 relative z-10">
                Track purchase events, verify SDK installation, check integrations and A/B tests - all with Adapty SDK.
              </p>
              <Link
                href="https://adapty.io/docs/event-feed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1 relative z-10"
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
                <SDKBadge key={index} sdk={sdk} />
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
