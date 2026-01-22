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
  ArrowRightIcon,
  ChevronDownIcon,
  StarIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';

// EXACT content from adapty.io/for-developers (scraped 2026-01-21)
const FEATURES = [
  {
    icon: CodeIcon,
    title: 'Just 5 SDK methods to integrate monetization',
    description: "Fetch Paywalls, make purchases, and check the subscription status - that's all you need to get started quickly.",
    link: 'https://adapty.io/docs/quickstart-sdk',
    linkText: 'Get started with SDK',
    category: 'integration'
  },
  {
    icon: ZapIcon,
    title: 'Quick integration in just a couple of hours',
    description: "Add products from AppStore Connect, Google Play, or Stripe. Then, create Adapty paywalls, and you're good to go.",
    link: null,
    linkText: null,
    category: 'integration'
  },
  {
    icon: RefreshCwIcon,
    title: 'Cross-platform subscriber sync',
    description: 'Adapty SDKs automatically sync subscribers across all platforms. Use Adapty as a single source of truth for your customers.',
    link: null,
    linkText: 'Read more about sync',
    category: 'sync'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Highest SLA in the industry: 99.99% and growing',
    description: "Adapty SDK and servers are battle-tested by some of the largest apps in the world. Reach 100% fault tolerance with fallback paywalls.",
    link: null,
    linkText: null,
    category: 'reliability'
  },
  {
    icon: LayoutGridIcon,
    title: 'Well-maintained SDK for each platform',
    description: 'We regularly update our SDKs, consistently releasing new features and optimizing performance.',
    link: null,
    linkText: 'Learn more',
    category: 'sdk'
  },
  {
    icon: SendIcon,
    title: 'Simple 3rd-party integrations',
    description: "Just add an extra line of code, turn on the integration, and Adapty will automatically send data to the 3rd-party service.",
    link: null,
    linkText: 'Learn more',
    category: 'integration'
  },
  {
    icon: SlidersHorizontalIcon,
    title: 'Flexible paywall management architecture',
    description: 'Adapty Placements make it easy to change paywalls remotely and run testing with neither coding nor app releases required.',
    link: null,
    linkText: null,
    category: 'management'
  },
  {
    icon: WebhookIcon,
    title: 'Raw data export',
    description: 'Save raw vendor data in real-time to your servers with Raw Webhook or get the processed and enriched data events from Webhook integration.',
    link: null,
    linkText: null,
    category: 'data'
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

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// SDK Code Magic - Typewriter effect
function CodeMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = React.useState(0);
  const steps = ['Adapty.getPay', 'Adapty.getPaywall()', 'Adapty.getPaywall("premium")'];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, steps.length]);

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 p-2 bg-zinc-900 rounded font-mono text-[10px] text-emerald-400">
        Adapty.getPaywall("premium")
      </div>
    );
  }

  return (
    <div className="mt-4 p-2 bg-zinc-900 rounded font-mono text-[10px] text-emerald-400 overflow-hidden">
      <motion.span
        key={step}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {steps[step]}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-white"
        >
          |
        </motion.span>
      </motion.span>
    </div>
  );
}

// Quick Integration Magic - Timer countdown
function IntegrationMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [time, setTime] = React.useState(120);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setTime((prev) => (prev <= 0 ? 120 : prev - 1));
    }, 50);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 text-center">
        <div className="text-2xl font-bold text-primary">2:00</div>
        <div className="text-[10px] text-muted-foreground">Minutes to integrate</div>
      </div>
    );
  }

  const mins = Math.floor(time / 60);
  const secs = time % 60;

  return (
    <div className="mt-4 text-center">
      <motion.div
        className="text-2xl font-bold text-primary font-mono"
        key={time}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
      >
        {mins}:{secs.toString().padStart(2, '0')}
      </motion.div>
      <div className="text-[10px] text-muted-foreground">Minutes to integrate</div>
    </div>
  );
}

// Cross-platform Sync Magic
function SyncMagic() {
  const shouldReduceMotion = useReducedMotion();
  const platforms = ['iOS', 'Android', 'Web'];
  const [syncing, setSyncing] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setSyncing((prev) => (prev + 1) % (platforms.length + 1));
    }, 800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, platforms.length]);

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 flex justify-center gap-2">
        {platforms.map((p) => (
          <div key={p} className="px-2 py-1 bg-primary/20 rounded text-[10px] font-medium">{p}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 flex justify-center gap-2">
      {platforms.map((p, i) => (
        <motion.div
          key={p}
          animate={{
            scale: syncing === i ? 1.1 : 1,
            backgroundColor: syncing === platforms.length || syncing === i ? 'hsl(var(--primary) / 0.3)' : 'hsl(var(--muted))',
          }}
          className="px-2 py-1 rounded text-[10px] font-medium"
        >
          {p}
        </motion.div>
      ))}
    </div>
  );
}

// Uptime Magic - 99.99% visualization
function UptimeMagic() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 text-center">
        <div className="text-2xl font-bold text-emerald-500">99.99%</div>
        <div className="text-[10px] text-muted-foreground">Uptime SLA</div>
      </div>
    );
  }

  return (
    <div className="mt-4 text-center">
      <motion.div
        className="text-2xl font-bold text-emerald-500"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        99.99%
      </motion.div>
      <div className="flex justify-center gap-0.5 mt-1">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-3 bg-emerald-500 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
          />
        ))}
      </div>
      <div className="text-[10px] text-muted-foreground mt-1">Uptime SLA</div>
    </div>
  );
}

// Webhook Magic - Data stream
function WebhookMagic() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="size-4 rounded bg-primary/20" />
        <div className="w-8 h-0.5 bg-muted" />
        <div className="size-4 rounded bg-muted" />
      </div>
    );
  }

  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      <div className="size-4 rounded bg-primary/20 flex items-center justify-center">
        <WebhookIcon className="size-2 text-primary" />
      </div>
      <div className="relative w-8 h-0.5 bg-muted overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-y-0 w-2 bg-primary rounded"
        />
      </div>
      <div className="size-4 rounded bg-muted flex items-center justify-center">
        <div className="size-2 bg-muted-foreground/50 rounded" />
      </div>
    </div>
  );
}

// Feature to magic mapping
const FEATURE_MAGIC: Record<string, React.FC> = {
  'Just 5 SDK methods to integrate monetization': CodeMagic,
  'Quick integration in just a couple of hours': IntegrationMagic,
  'Cross-platform subscriber sync': SyncMagic,
  'Highest SLA in the industry: 99.99% and growing': UptimeMagic,
  'Raw data export': WebhookMagic,
};

// =============================================================================
// VARIANT: GRID - Classic 2-column grid with hover effects
// =============================================================================
function GridFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            badge="Developer features"
            title="Everything you need for in-app purchases"
            description="From quick integration to advanced features, we have got you covered."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, index) => {
            const MagicComponent = FEATURE_MAGIC[feature.title];

            return (
              <BlurFade key={index} delay={0.1 + index * 0.02}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: hoveredIndex === index ? -8 : 0,
                    scale: hoveredIndex === index ? 1.02 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  className={cn(
                    "group relative h-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm transition-all duration-150 cursor-pointer",
                    hoveredIndex === index && "border-primary/50 shadow-lg shadow-primary/5"
                  )}
                >
                  {hoveredIndex === index && (
                    <BorderBeam
                      size={120}
                      duration={8}
                      borderWidth={1.5}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--primary)/0)"
                    />
                  )}
                  <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={280} />

                  <div className="relative p-6 z-10">
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={shouldReduceMotion ? undefined : {
                          scale: hoveredIndex === index ? 1.15 : 1,
                          rotate: hoveredIndex === index ? 8 : 0,
                        }}
                        transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                        className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                      >
                        <feature.icon className="size-6" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
                        {feature.link && feature.linkText && (
                          <Link
                            href={feature.link}
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                          >
                            {feature.linkText}
                            <motion.span
                              animate={shouldReduceMotion ? undefined : { x: hoveredIndex === index ? 4 : 0 }}
                            >
                              <ArrowRightIcon className="size-3" />
                            </motion.span>
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Magic animation */}
                    {MagicComponent && (
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <MagicComponent />
                      </div>
                    )}
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* SDKs section */}
        <BlurFade delay={0.3}>
          <div className="mt-16">
            <SiteHeading
              title="100% Open Source SDKs"
              description="Well-maintained SDKs for every major platform."
            />
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SDKS.map((sdk, index) => (
                <motion.div
                  key={index}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -4 }}
                  transition={{ type: 'spring', bounce: 0 }}
                  className="group relative p-4 rounded-lg overflow-hidden bg-muted/50 border border-border/50 text-center cursor-pointer hover:border-primary/30 transition-colors"
                >
                  <Spotlight className="from-primary/10 via-transparent to-transparent" size={150} />
                  <p className="relative font-medium text-foreground text-sm group-hover:text-primary transition-colors">{sdk.name}</p>
                  {sdk.stars && (
                    <p className="relative text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                      <StarIcon className="size-3 text-yellow-500 fill-yellow-500" />
                      {sdk.stars}
                    </p>
                  )}
                  <p className="relative text-xs text-primary mt-1">{sdk.platform}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Related roles section */}
        <BlurFade delay={0.35}>
          <div className="mt-16">
            <SiteHeading title="We're here for your team" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {RELATED_ROLES.map((role, index) => (
                <Link key={index} href={role.link} className="group">
                  <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
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

// =============================================================================
// VARIANT: BENTO - Asymmetric bento grid
// =============================================================================
function BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            badge="Developer features"
            title="Built for developers who ship fast"
            description="Modern SDKs, comprehensive docs, and everything you need."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large featured card */}
          <BlurFade delay={0.1}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -4 }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              className="lg:col-span-2 lg:row-span-2 rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-background p-8 cursor-pointer hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-6">
                  <CodeIcon className="size-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Just 5 SDK methods</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Fetch Paywalls, make purchases, and check subscription status - that&apos;s all you need to get started quickly. Our SDK handles all the complexity.
                </p>
                <div className="mt-auto">
                  <Link
                    href="https://adapty.io/docs/quickstart-sdk"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    Get started with SDK
                    <ArrowRightIcon className="size-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </BlurFade>

          {/* Regular cards */}
          {FEATURES.slice(1, 5).map((feature, index) => (
            <BlurFade key={index} delay={0.15 + index * 0.03}>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -4 }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                className="rounded-xl border bg-background/50 backdrop-blur-sm p-6 cursor-pointer hover:border-primary/50 transition-colors h-full"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            </BlurFade>
          ))}

          {/* Wide card */}
          <BlurFade delay={0.3}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -4 }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              className="lg:col-span-3 rounded-xl border bg-background/50 backdrop-blur-sm p-6 cursor-pointer hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheckIcon className="size-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">99.99% Uptime SLA</h3>
                  <p className="text-muted-foreground">
                    Adapty SDK and servers are battle-tested by some of the largest apps in the world. Reach 100% fault tolerance with fallback paywalls.
                  </p>
                </div>
              </div>
            </motion.div>
          </BlurFade>
        </div>

        {/* SDKs grid */}
        <BlurFade delay={0.35}>
          <div className="mt-16">
            <SiteHeading
              title="100% Open Source SDKs"
              description="Well-maintained SDKs for every major platform."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {SDKS.map((sdk, index) => (
                <motion.div
                  key={index}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-medium cursor-pointer hover:border-primary/30 transition-colors"
                >
                  {sdk.name}
                  {sdk.stars && (
                    <span className="ml-2 text-xs text-muted-foreground">
                      <StarIcon className="inline size-3 text-yellow-500 fill-yellow-500 mr-0.5" />
                      {sdk.stars}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: ACCORDION - Expandable feature list
// =============================================================================
function AccordionFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(0);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1100} />
      <div className="container py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Heading and SDKs */}
          <div className="lg:sticky lg:top-24">
            <BlurFade delay={0.05}>
              <div className="flex flex-col gap-4 mb-8">
                <h2 className="text-pretty text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Developer-first features
                </h2>
                <p className="text-lg text-muted-foreground">
                  Everything you need to integrate and manage in-app purchases. Click each feature to learn more.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.1}>
              <div className="p-6 rounded-xl border bg-muted/30">
                <h3 className="font-semibold mb-4">Supported platforms</h3>
                <div className="grid grid-cols-3 gap-3">
                  {SDKS.slice(0, 6).map((sdk, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-background text-center text-sm border"
                    >
                      <p className="font-medium">{sdk.name.replace(' SDK', '')}</p>
                      {sdk.stars && (
                        <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                          <StarIcon className="size-3 text-yellow-500 fill-yellow-500" />
                          {sdk.stars}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {FEATURES.map((feature, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.02}>
                <motion.div
                  layout
                  className={cn(
                    "rounded-xl border bg-background/50 backdrop-blur-sm overflow-hidden transition-colors duration-200",
                    expandedIndex === index ? "border-primary/50 shadow-lg" : "border-border/50"
                  )}
                >
                  <motion.button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: expandedIndex === index ? 1.1 : 1,
                        rotate: expandedIndex === index ? 5 : 0,
                      }}
                      transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                        expandedIndex === index ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      )}
                    >
                      <feature.icon className="size-5" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{feature.title}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="size-5 text-muted-foreground" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="pl-14">
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                              {feature.description}
                            </p>
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Related roles */}
        <BlurFade delay={0.35}>
          <div className="mt-16">
            <SiteHeading title="We're here for your team" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {RELATED_ROLES.map((role, index) => (
                <Link key={index} href={role.link} className="group">
                  <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
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

// =============================================================================
// MAIN EXPORT
// =============================================================================
export const FOR_DEVELOPERS_FEATURES_VARIANTS = ['grid', 'bento', 'accordion'] as const;
export type ForDevelopersFeaturesVariant = typeof FOR_DEVELOPERS_FEATURES_VARIANTS[number];

type Props = {
  variant?: ForDevelopersFeaturesVariant;
};

export function ForDevelopersFeatures({ variant = 'grid' }: Props): React.JSX.Element {
  switch (variant) {
    case 'bento':
      return <BentoFeatures />;
    case 'accordion':
      return <AccordionFeatures />;
    case 'grid':
    default:
      return <GridFeatures />;
  }
}
