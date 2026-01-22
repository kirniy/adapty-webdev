'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  LayoutIcon,
  PlayIcon,
  BarChartIcon,
  CodeIcon,
  ArrowRightIcon,
  CheckIcon,
  PaletteIcon,
  GlobeIcon,
  UsersIcon,
  ZapIcon,
  TrendingUpIcon,
  PieChartIcon,
  TargetIcon,
  ServerIcon,
  ShieldCheckIcon,
  SmartphoneIcon
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@workspace/ui/components/tabs';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { ScaleOnHover } from '~/components/fragments/scale-on-hover';
import { Spotlight } from '~/components/fragments/spotlight';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

// Magic animation: Platform capabilities badge
function PlatformCapabilitiesMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
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
      <span>4 core capabilities</span>
    </motion.div>
  );
}

// Feature tabs configuration
const FEATURE_TABS = [
  {
    id: 'paywall-builder',
    label: 'Paywall Builder',
    icon: LayoutIcon,
    tagline: 'Design beautiful paywalls',
    description: 'Create and deploy conversion-optimized paywalls without writing code or releasing app updates.',
    features: [
      { icon: PaletteIcon, title: 'No-Code Builder', description: 'Drag-and-drop paywall designer with real-time preview' },
      { icon: GlobeIcon, title: 'Localization', description: 'Automatic translation to 50+ languages with custom overrides' },
      { icon: ZapIcon, title: 'Instant Updates', description: 'Change paywalls instantly without app store review' },
      { icon: SmartphoneIcon, title: 'Native Experience', description: 'Fully native paywalls on iOS and Android' },
    ],
    stats: [
      { value: '50+', label: 'Templates' },
      { value: '30%', label: 'Avg. conversion lift' },
      { value: '<1s', label: 'Load time' },
    ],
    image: '/assets/hero/light-feature1.webp',
    imageDark: '/assets/hero/dark-feature1.webp',
    cta: { label: 'Explore Paywall Builder', href: '/paywall-builder' }
  },
  {
    id: 'ab-testing',
    label: 'A/B Testing',
    icon: PlayIcon,
    tagline: 'Data-driven optimization',
    description: 'Run experiments on paywalls, pricing, and messaging to find what converts best for your audience.',
    features: [
      { icon: TargetIcon, title: 'Statistical Significance', description: 'Know when results are ready with automated significance detection' },
      { icon: UsersIcon, title: 'Audience Targeting', description: 'Test on specific user segments based on behavior or attributes' },
      { icon: TrendingUpIcon, title: 'Bayesian Analysis', description: 'Get actionable insights faster with Bayesian statistical methods' },
      { icon: ZapIcon, title: 'Instant Rollout', description: 'Push winning variants to 100% of users with one click' },
    ],
    stats: [
      { value: '40%', label: 'Avg. revenue lift' },
      { value: '3x', label: 'Faster iteration' },
      { value: '95%', label: 'Confidence level' },
    ],
    image: '/assets/hero/light-feature2.webp',
    imageDark: '/assets/hero/dark-feature2.webp',
    cta: { label: 'Explore A/B Testing', href: 'https://adapty.io/ab-testing/' }
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChartIcon,
    tagline: 'Understand your revenue',
    description: 'Real-time subscription analytics, LTV predictions, and cohort analysis to optimize your monetization strategy.',
    features: [
      { icon: PieChartIcon, title: 'Revenue Dashboard', description: 'MRR, ARR, trials, conversions, and churn at a glance' },
      { icon: TrendingUpIcon, title: 'LTV Predictions', description: 'AI-powered lifetime value forecasting for better decisions' },
      { icon: UsersIcon, title: 'Cohort Analysis', description: 'Track retention and revenue by user cohort over time' },
      { icon: TargetIcon, title: 'Attribution', description: 'Connect revenue to marketing channels and campaigns' },
    ],
    stats: [
      { value: '$2B+', label: 'Revenue tracked' },
      { value: 'Real-time', label: 'Data updates' },
      { value: '50+', label: 'Metrics' },
    ],
    image: '/assets/hero/light-feature3.webp',
    imageDark: '/assets/hero/dark-feature3.webp',
    cta: { label: 'Explore Analytics', href: 'https://adapty.io/analytics/' }
  },
  {
    id: 'sdk',
    label: 'SDK',
    icon: CodeIcon,
    tagline: 'Developer-first integration',
    description: 'Battle-tested SDKs for all major platforms with server-side receipt validation and automatic subscription sync.',
    features: [
      { icon: ServerIcon, title: 'Server-Side Validation', description: 'Secure receipt validation without exposing shared secrets' },
      { icon: ShieldCheckIcon, title: 'Offline Support', description: 'Works reliably even with poor network conditions' },
      { icon: SmartphoneIcon, title: 'Cross-Platform', description: 'iOS, Android, React Native, Flutter, and Unity SDKs' },
      { icon: ZapIcon, title: 'Automatic Sync', description: 'Subscription status synced automatically across devices' },
    ],
    stats: [
      { value: '10', label: 'Lines of code' },
      { value: '5', label: 'Platforms' },
      { value: '99.99%', label: 'Uptime' },
    ],
    image: '/assets/hero/light-feature4.webp',
    imageDark: '/assets/hero/dark-feature4.webp',
    cta: { label: 'View Documentation', href: 'https://docs.adapty.io/' }
  },
];

function FeatureCard({ feature, index }: { feature: typeof FEATURE_TABS[0]['features'][0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ delay: shouldReduceMotion ? 0 : 0.05 + index * 0.05, duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
    >
      <ScaleOnHover className="flex gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50 cursor-default">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <feature.icon className="size-5" />
        </div>
        <div>
          <h4 className="font-medium">{feature.title}</h4>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      </ScaleOnHover>
    </motion.div>
  );
}

function StatItem({ stat, index }: { stat: { value: string; label: string }; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      transition={{ delay: shouldReduceMotion ? 0 : 0.15 + index * 0.05, duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
      className="text-center"
    >
      <div className="text-2xl font-bold text-primary">{stat.value}</div>
      <div className="text-xs text-muted-foreground">{stat.label}</div>
    </motion.div>
  );
}

export function FeaturesTabbed(): React.JSX.Element {
  const [activeTab, setActiveTab] = React.useState(FEATURE_TABS[0].id);
  const activeFeature = FEATURE_TABS.find(t => t.id === activeTab) ?? FEATURE_TABS[0];
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-16 lg:py-24 relative z-10">
        {/* Section Header */}
        <BlurFade className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 rounded-full">
            Platform Features
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to grow
            <br />
            <span className="text-muted-foreground">subscription revenue</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From no-code paywall design to AI-powered analytics, Adapty gives you the complete toolkit for subscription success.
          </p>
          <div className="mt-4">
            <PlatformCapabilitiesMagic />
          </div>
        </BlurFade>

        {/* Tabs - scrollable on mobile */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="mb-8 -mx-4 px-4 overflow-x-auto scrollbar-hide sm:mx-0 sm:px-0 sm:overflow-visible">
            <div className="flex justify-center min-w-max sm:min-w-0">
              <TabsList className="h-auto gap-2 bg-muted/50 p-2">
                {FEATURE_TABS.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="relative flex shrink-0 items-center gap-2 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm whitespace-nowrap z-10 data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-colors"
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="active-tab-bg"
                        className="absolute inset-0 rounded-lg bg-background shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                    <tab.icon className="size-4" />
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {FEATURE_TABS.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="m-0">
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: shouldReduceMotion ? 0.15 : 0.3, ease: [0.32, 0.72, 0, 1] }}
                  className="grid gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  {/* Left: Content */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-2 text-sm font-medium text-primary"
                      >
                        {tab.tagline}
                      </motion.p>
                      <motion.h3
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-3 text-2xl font-bold"
                      >
                        {tab.label}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-muted-foreground"
                      >
                        {tab.description}
                      </motion.p>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      {tab.features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-around rounded-lg border bg-muted/30 p-4">
                      {tab.stats.map((stat, index) => (
                        <StatItem key={stat.label} stat={stat} index={index} />
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={tab.cta.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      {tab.cta.label}
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  </div>

                  {/* Right: Image */}
                  <div className="relative">
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, rotate: 1 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className={cn(
                        "overflow-hidden rounded-xl border bg-card shadow-lg ring-1 ring-border/50 relative",
                        monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
                      )}
                    >
                      <BorderBeam
                        size={200}
                        duration={12}
                        borderWidth={1.5}
                        colorFrom="hsl(var(--primary))"
                        colorTo="hsl(var(--primary)/0)"
                        className="opacity-50"
                      />
                      <Image
                        src={getImagePath(tab.image, imageSet)}
                        alt={`${tab.label} screenshot`}
                        width={1328}
                        height={727}
                        className="block w-full dark:hidden"
                      />
                      <Image
                        src={getImagePath(tab.imageDark, imageSet)}
                        alt={`${tab.label} screenshot`}
                        width={1328}
                        height={727}
                        className="hidden w-full dark:block"
                      />

                      {/* Glossy overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                    </motion.div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </GridSection>
  );
}
