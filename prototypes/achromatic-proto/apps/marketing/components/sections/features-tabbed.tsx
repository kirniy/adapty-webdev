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
import { motion, AnimatePresence } from 'motion/react';

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
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

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
    cta: { label: 'Explore Paywall Builder', href: 'https://adapty.io/paywall-builder/' }
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1 }}
      className="flex gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50"
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <feature.icon className="size-5" />
      </div>
      <div>
        <h4 className="font-medium">{feature.title}</h4>
        <p className="text-sm text-muted-foreground">{feature.description}</p>
      </div>
    </motion.div>
  );
}

function StatItem({ stat, index }: { stat: { value: string; label: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + index * 0.1 }}
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
        </BlurFade>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="mb-8 flex justify-center">
            <TabsList className="h-auto flex-wrap gap-2 bg-muted/50 p-2">
              {FEATURE_TABS.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-2 rounded-lg px-4 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <tab.icon className="size-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            {FEATURE_TABS.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="m-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  {/* Left: Content */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="mb-2 text-sm font-medium text-primary">{tab.tagline}</p>
                      <h3 className="mb-3 text-2xl font-bold">{tab.label}</h3>
                      <p className="text-muted-foreground">{tab.description}</p>
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
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="overflow-hidden rounded-xl border bg-card shadow-lg"
                    >
                      <Image
                        src={tab.image}
                        alt={`${tab.label} screenshot`}
                        width={1328}
                        height={727}
                        className="block w-full dark:hidden"
                      />
                      <Image
                        src={tab.imageDark}
                        alt={`${tab.label} screenshot`}
                        width={1328}
                        height={727}
                        className="hidden w-full dark:block"
                      />
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
