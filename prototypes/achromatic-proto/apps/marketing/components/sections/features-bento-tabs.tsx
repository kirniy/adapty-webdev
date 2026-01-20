'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  LayoutIcon,
  PlayIcon,
  BarChart3Icon,
  CodeIcon,
  ArrowRightIcon,
  CheckIcon,
  PaletteIcon,
  GlobeIcon,
  ZapIcon,
  TrendingUpIcon,
  PieChartIcon,
  TargetIcon,
  ServerIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  UsersIcon,
  SparklesIcon,
  LineChartIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

// Layout types for visual variety
type LayoutType = 'image-right' | 'image-left' | 'image-top' | 'bento-grid';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  stat: string;
}

interface FeatureTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  layout: LayoutType;
  image: string;
  imageDark: string;
  features: FeatureItem[];
  cta: { label: string; href: string };
}

// Feature tabs with DIFFERENT layouts for visual variety
const FEATURE_TABS: FeatureTab[] = [
  {
    id: 'paywall-builder',
    label: 'Paywall Builder',
    icon: LayoutIcon,
    tagline: 'No-code paywall design',
    description: 'Create conversion-optimized paywalls without engineering. Update instantly, no app releases needed.',
    layout: 'image-right', // Standard: content left, image right
    image: '/assets/hero/light-feature1.webp',
    imageDark: '/assets/hero/dark-feature1.webp',
    features: [
      { id: 'visual-editor', title: 'Visual Editor', description: 'Drag-and-drop builder with real-time preview', icon: PaletteIcon, stat: '50+ templates' },
      { id: 'localization', title: 'Auto-Localization', description: '50+ languages with custom overrides', icon: GlobeIcon, stat: '50+ languages' },
      { id: 'instant-updates', title: 'Instant Updates', description: 'Change paywalls without app store review', icon: ZapIcon, stat: '<1s load' },
      { id: 'native', title: 'Native Experience', description: 'Fully native on iOS and Android', icon: SmartphoneIcon, stat: '30% avg lift' },
    ],
    cta: { label: 'Explore Paywall Builder', href: 'https://adapty.io/paywall-builder/' }
  },
  {
    id: 'ab-testing',
    label: 'A/B Testing',
    icon: PlayIcon,
    tagline: 'Data-driven optimization',
    description: 'Run experiments on paywalls, pricing, and offers. Know when results are statistically significant.',
    layout: 'image-left', // Reversed: image left, content right
    image: '/assets/hero/light-feature2.webp',
    imageDark: '/assets/hero/dark-feature2.webp',
    features: [
      { id: 'experiments', title: 'Multi-Variant Tests', description: 'Test unlimited variants with auto traffic allocation', icon: TargetIcon, stat: '+40% revenue' },
      { id: 'significance', title: 'Statistical Significance', description: 'Bayesian analysis for faster insights', icon: TrendingUpIcon, stat: '95% confidence' },
      { id: 'segments', title: 'Audience Targeting', description: 'Test on specific user segments', icon: UsersIcon, stat: '3x faster' },
      { id: 'rollout', title: 'One-Click Rollout', description: 'Push winning variants instantly', icon: ZapIcon, stat: 'Instant' },
    ],
    cta: { label: 'Explore A/B Testing', href: 'https://adapty.io/ab-testing/' }
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3Icon,
    tagline: 'Understand your revenue',
    description: 'Real-time subscription analytics with LTV predictions, cohort analysis, and churn monitoring.',
    layout: 'image-top', // Hero image on top, features below in row
    image: '/assets/hero/light-feature3.webp',
    imageDark: '/assets/hero/dark-feature3.webp',
    features: [
      { id: 'dashboard', title: 'Revenue Dashboard', description: 'MRR, ARR, trials, conversions at a glance', icon: PieChartIcon, stat: '$2B+ tracked' },
      { id: 'ltv', title: 'LTV Predictions', description: 'AI-powered lifetime value forecasting', icon: SparklesIcon, stat: 'AI-powered' },
      { id: 'cohorts', title: 'Cohort Analysis', description: 'Track retention by cohort over time', icon: LineChartIcon, stat: '50+ metrics' },
      { id: 'attribution', title: 'Attribution', description: 'Connect revenue to marketing channels', icon: TargetIcon, stat: 'Real-time' },
    ],
    cta: { label: 'Explore Analytics', href: 'https://adapty.io/analytics/' }
  },
  {
    id: 'sdk',
    label: 'SDK',
    icon: CodeIcon,
    tagline: 'Developer-first integration',
    description: 'Battle-tested SDKs for all platforms with server-side receipt validation and automatic sync.',
    layout: 'bento-grid', // Bento grid with mixed sizes
    image: '/assets/hero/light-feature4.webp',
    imageDark: '/assets/hero/dark-feature4.webp',
    features: [
      { id: 'validation', title: 'Server Validation', description: 'Secure receipt validation without exposing secrets', icon: ServerIcon, stat: '99.99% uptime' },
      { id: 'offline', title: 'Offline Support', description: 'Works reliably with poor network', icon: ShieldCheckIcon, stat: 'Offline-first' },
      { id: 'platforms', title: 'All Platforms', description: 'iOS, Android, React Native, Flutter, Unity', icon: SmartphoneIcon, stat: '5 platforms' },
      { id: 'sync', title: 'Auto Sync', description: 'Subscription status across devices', icon: ZapIcon, stat: 'Real-time' },
    ],
    cta: { label: 'View Documentation', href: 'https://docs.adapty.io/' }
  },
];

// Feature card component
function FeatureCard({ feature, index, compact = false }: { feature: FeatureItem; index: number; compact?: boolean }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
      className={cn(
        'group flex gap-4 rounded-xl border bg-card p-4 transition-all duration-200 cursor-pointer',
        isHovered && 'border-primary/30 shadow-md',
        compact && 'p-3'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={cn(
          'flex shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary',
          compact ? 'size-9' : 'size-10'
        )}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <Icon className={compact ? 'size-4' : 'size-5'} />
      </motion.div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className={cn('font-medium', compact ? 'text-sm' : 'text-base')}>{feature.title}</h4>
          <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {feature.stat}
          </span>
        </div>
        <p className={cn('text-muted-foreground mt-0.5', compact ? 'text-xs' : 'text-sm')}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

// Image component with hover effect
function FeatureImage({ tab, className }: { tab: FeatureTab; className?: string }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();

  return (
    <motion.div
      className={cn(
        'overflow-hidden rounded-xl border bg-card shadow-lg',
        monochromeMode && 'grayscale hover:grayscale-0 transition-[filter] duration-500',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15, duration: 0.4 }}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={getImagePath(tab.image, imageSet)}
          alt={`${tab.label} screenshot`}
          width={1328}
          height={727}
          className="w-full dark:hidden"
        />
        <Image
          src={getImagePath(tab.imageDark, imageSet)}
          alt={`${tab.label} screenshot`}
          width={1328}
          height={727}
          className="hidden w-full dark:block"
        />
      </motion.div>
    </motion.div>
  );
}

// Layout: Image on RIGHT (default) - content left, image right
function LayoutImageRight({ tab }: { tab: FeatureTab }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
      {/* Left: Features */}
      <div className="flex flex-col gap-4">
        <BlurFade delay={0.1}>
          <p className="text-sm font-medium text-primary mb-1">{tab.tagline}</p>
          <p className="text-muted-foreground mb-4">{tab.description}</p>
        </BlurFade>
        <div className="grid gap-3">
          {tab.features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <FeatureImage tab={tab} />
    </div>
  );
}

// Layout: Image on LEFT (reversed) - image left, content right
function LayoutImageLeft({ tab }: { tab: FeatureTab }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
      {/* Left: Image */}
      <FeatureImage tab={tab} className="order-2 lg:order-1" />

      {/* Right: Features */}
      <div className="flex flex-col gap-4 order-1 lg:order-2">
        <BlurFade delay={0.1}>
          <p className="text-sm font-medium text-primary mb-1">{tab.tagline}</p>
          <p className="text-muted-foreground mb-4">{tab.description}</p>
        </BlurFade>
        <div className="grid gap-3">
          {tab.features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout: Image on TOP - full-width image, features in row below
function LayoutImageTop({ tab }: { tab: FeatureTab }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Top: Full-width image */}
      <FeatureImage tab={tab} className="w-full" />

      {/* Bottom: Description + Features in 4-column grid */}
      <div>
        <BlurFade delay={0.1} className="text-center mb-6">
          <p className="text-sm font-medium text-primary mb-1">{tab.tagline}</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">{tab.description}</p>
        </BlurFade>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tab.features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} compact />
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout: Bento Grid - mixed sizes, image prominent
function LayoutBentoGrid({ tab }: { tab: FeatureTab }) {
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();

  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
      {/* Large: Main image spanning 8 cols, 2 rows */}
      <motion.div
        className={cn(
          "lg:col-span-8 lg:row-span-2 overflow-hidden rounded-xl border bg-card shadow-lg",
          monochromeMode && 'grayscale hover:grayscale-0 transition-[filter] duration-500'
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="p-5 pb-0">
          <p className="text-sm font-medium text-primary mb-1">{tab.tagline}</p>
          <h3 className="text-xl font-bold mb-2">10 Lines of Code</h3>
          <p className="text-sm text-muted-foreground">{tab.description}</p>
        </div>
        <div className="p-5">
          <Image
            src={getImagePath(tab.image, imageSet)}
            alt={`${tab.label} screenshot`}
            width={1328}
            height={727}
            className="w-full rounded-lg border dark:hidden"
          />
          <Image
            src={getImagePath(tab.imageDark, imageSet)}
            alt={`${tab.label} screenshot`}
            width={1328}
            height={727}
            className="hidden w-full rounded-lg border dark:block"
          />
        </div>
      </motion.div>

      {/* Right column: 4 feature cards stacked (4 cols, 2 rows = 2 per row) */}
      {tab.features.map((feature, index) => {
        const Icon = feature.icon;
        const isHovered = hoveredCard === feature.id;

        return (
          <motion.div
            key={feature.id}
            className={cn(
              'lg:col-span-4 flex flex-col gap-2 rounded-xl border bg-card p-4 transition-all duration-200 cursor-pointer',
              isHovered && 'border-primary/30 shadow-md'
            )}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
            onMouseEnter={() => setHoveredCard(feature.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start justify-between">
              <motion.div
                className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.15 }}
              >
                <Icon className="size-4" />
              </motion.div>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                {feature.stat}
              </span>
            </div>
            <div>
              <h4 className="text-sm font-medium">{feature.title}</h4>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Tab button component
function TabButton({
  tab,
  isActive,
  onClick,
}: {
  tab: FeatureTab;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = tab.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer',
        isActive
          ? 'bg-primary text-primary-foreground shadow-md'
          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
      )}
    >
      <Icon className="size-4" />
      <span>{tab.label}</span>
    </button>
  );
}

// Render the appropriate layout based on tab config
function TabContent({ tab }: { tab: FeatureTab }) {
  switch (tab.layout) {
    case 'image-left':
      return <LayoutImageLeft tab={tab} />;
    case 'image-top':
      return <LayoutImageTop tab={tab} />;
    case 'bento-grid':
      return <LayoutBentoGrid tab={tab} />;
    case 'image-right':
    default:
      return <LayoutImageRight tab={tab} />;
  }
}

export function FeaturesBentoTabs(): React.JSX.Element {
  const [activeTab, setActiveTab] = React.useState(FEATURE_TABS[0].id);
  const activeFeature = FEATURE_TABS.find(t => t.id === activeTab) ?? FEATURE_TABS[0];

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-16 lg:py-24 relative z-10">
        {/* Section Header */}
        <BlurFade className="mb-10 text-center">
          <Badge variant="outline" className="mb-4 rounded-full">
            Platform Features
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to grow
            <br />
            <span className="text-muted-foreground">subscription revenue</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From no-code paywall design to AI-powered analytics, Adapty gives you the complete toolkit.
          </p>
        </BlurFade>

        {/* Prominent Tab Bar */}
        <BlurFade delay={0.1}>
          <div className="mb-10 flex justify-center">
            <div className="inline-flex gap-2 rounded-xl bg-muted/50 p-1.5 backdrop-blur-sm">
              {FEATURE_TABS.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Tab Content - Different layout per tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TabContent tab={activeFeature} />

            {/* CTA Link */}
            <BlurFade delay={0.4} className="mt-8 text-center">
              <Link
                href={activeFeature.cta.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {activeFeature.cta.label}
                <ArrowRightIcon className="size-4" />
              </Link>
            </BlurFade>
          </motion.div>
        </AnimatePresence>
      </div>
    </GridSection>
  );
}
