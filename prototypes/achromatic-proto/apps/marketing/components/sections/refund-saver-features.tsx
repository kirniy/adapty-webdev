'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  DownloadIcon,
  ToggleRightIcon,
  TrendingUpIcon,
  ScissorsIcon,
  SparklesIcon,
  DollarSignIcon,
  ShieldIcon,
  ChevronDownIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/refund-saver (scraped 2026-01-21)

// "Start saving refunds with just one click" - 3 steps
const STEPS = [
  {
    number: '1',
    icon: DownloadIcon,
    title: 'Install the Adapty SDK',
    description: 'Use Adapty as your subscription infrastructure.',
    link: 'https://adapty.io/docs/installation-of-adapty-sdks',
    linkText: 'Install the Adapty SDK'
  },
  {
    number: '2',
    icon: ToggleRightIcon,
    title: 'Turn on Refund Saver',
    description: 'Let Adapty handle refund requests by sharing key app usage info with Apple.',
    link: null,
    linkText: null
  },
  {
    number: '3',
    icon: TrendingUpIcon,
    title: 'Win back up to 5% of MRR',
    description: 'Get extra revenue back with zero effort.',
    link: null,
    linkText: null
  }
];

// "Why Adapty Refund Saver?" - 4 benefits
const BENEFITS = [
  {
    icon: ScissorsIcon,
    title: 'Cut refunds by 40%',
    description: 'Keep more of your hard-earned revenue with smarter refund handling.'
  },
  {
    icon: SparklesIcon,
    title: 'Zero extra effort',
    description: "It's fully automated - sit back and let it do the work for you."
  },
  {
    icon: DollarSignIcon,
    title: 'Adapty pays for itself',
    description: "Recover enough revenue, and Adapty can practically cost you nothing."
  },
  {
    icon: ShieldIcon,
    title: 'No legal consequences',
    description: "Refund Saver automates everything, while Apple makes the final decision - no legal responsibility on your side."
  }
];

// SDKs from adapty.io/refund-saver
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

// Case studies from adapty.io/refund-saver
const CASE_STUDIES = [
  {
    name: 'Fotorama',
    category: 'Photo & Video',
    result: 'Refund rate dropped 40%',
    description: 'How to decrease the refund rate with Adapty.',
    link: '/case-studies/fotorama/'
  },
  {
    name: 'Pepapp',
    category: 'Health & Fitness',
    result: '400% ROI on Adapty',
    description: 'How to make Adapty for free with Refund Saver.',
    link: '/case-studies/pepapp/'
  }
];

export type RefundSaverFeaturesVariant = 'grid' | 'bento' | 'tabs';

export const REFUND_SAVER_FEATURES_VARIANTS = ['grid', 'bento', 'tabs'] as const;

type Props = {
  variant?: RefundSaverFeaturesVariant;
};

// =============================================================================
// VARIANT: GRID - Classic grid layout (default)
// =============================================================================
function GridFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1600} />
      <div className="container py-20 relative z-10">
        {/* How it works - 3 steps */}
        <BlurFade delay={0.05}>
          <SiteHeading title="Start saving refunds with just one click" />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05}>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    {step.link ? (
                      <Link
                        href={step.link}
                        className="font-semibold text-lg mb-2 hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        {step.title}
                        <ArrowRightIcon className="size-4" />
                      </Link>
                    ) : (
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    )}
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* SDK list */}
        <BlurFade delay={0.25}>
          <div className="mt-16">
            <div className="flex flex-wrap justify-center gap-3">
              {SDKS.map((sdk, index) => (
                <motion.div key={index} whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}>
                  <Link
                    href={sdk.link}
                    className="block px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150"
                  >
                    {sdk.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Why Adapty Refund Saver? - 4 benefits */}
        <BlurFade delay={0.35}>
          <div className="mt-20">
            <SiteHeading title="Why Adapty Refund Saver?" />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFITS.map((benefit, index) => (
            <BlurFade key={index} delay={0.4 + index * 0.05}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              >
                <Card className={cn(
                  "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200",
                  hoveredIndex === index && "border-primary/30 shadow-lg"
                )}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={shouldReduceMotion ? undefined : {
                          scale: hoveredIndex === index ? 1.1 : 1,
                          rotate: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                        className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                      >
                        <benefit.icon className="size-6" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Case studies section */}
        <BlurFade delay={0.6}>
          <div className="mt-20">
            <SiteHeading title="Real success stories" />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {CASE_STUDIES.map((study, index) => (
            <BlurFade key={index} delay={0.65 + index * 0.05}>
              <Link href={study.link} className="group">
                <motion.div whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
                  <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150">
                    <CardContent className="p-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{study.category}</p>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{study.name}</h3>
                      <p className="text-primary font-semibold mb-2">{study.result}</p>
                      <p className="text-sm text-muted-foreground">{study.description}</p>
                      <p className="text-sm text-primary mt-3 inline-flex items-center gap-1 group-hover:underline">
                        Read more
                        <ArrowRightIcon className="size-3" />
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: BENTO - Asymmetric bento grid
// =============================================================================
function BentoFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-20 relative z-10">
        {/* Steps as a wide card */}
        <BlurFade delay={0.05}>
          <SiteHeading title="Start saving refunds with just one click" />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-background/80 to-background/50 backdrop-blur-sm border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STEPS.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg"
                  >
                    {step.number}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Benefits grid */}
        <BlurFade delay={0.2}>
          <div className="mt-20">
            <SiteHeading title="Why Adapty Refund Saver?" />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS.map((benefit, index) => (
            <BlurFade key={index} delay={0.25 + index * 0.03}>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Card
                  className={cn(
                    "h-full bg-background/50 backdrop-blur-sm border-border/50 cursor-pointer transition-all duration-200",
                    expandedIndex === index && "border-primary/30 shadow-lg"
                  )}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <benefit.icon className="size-5" />
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        className="text-muted-foreground"
                      >
                        <ChevronDownIcon className="size-4" />
                      </motion.div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                            {benefit.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Case studies */}
        <BlurFade delay={0.4}>
          <div className="mt-20">
            <SiteHeading title="Real success stories" />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {CASE_STUDIES.map((study, index) => (
            <BlurFade key={index} delay={0.45 + index * 0.05}>
              <Link href={study.link} className="group">
                <motion.div whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
                  <Card className="h-full bg-primary/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-150">
                    <CardContent className="p-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{study.category}</p>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{study.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-2">{study.result}</p>
                      <p className="text-sm text-muted-foreground">{study.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TABS - Section tabs for different content areas
// =============================================================================
function TabsFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = React.useState<'steps' | 'benefits' | 'stories'>('steps');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const TABS = [
    { id: 'steps', label: 'How it works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'stories', label: 'Success Stories' },
  ] as const;

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need to save refunds"
            description="Automated refund protection that pays for itself."
          />
        </BlurFade>

        {/* Tabs */}
        <BlurFade delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {TABS.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200",
                  activeTab === tab.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeRefundTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Tab content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {activeTab === 'steps' && (
              <motion.div
                key="steps"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {STEPS.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    className="p-6 rounded-xl border bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
                  >
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'benefits' && (
              <motion.div
                key="benefits"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  >
                    <Card className={cn(
                      "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200",
                      hoveredIndex === index && "border-primary/30 shadow-lg"
                    )}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <motion.div
                            animate={shouldReduceMotion ? undefined : {
                              scale: hoveredIndex === index ? 1.1 : 1,
                            }}
                            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                          >
                            <benefit.icon className="size-6" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'stories' && (
              <motion.div
                key="stories"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
              >
                {CASE_STUDIES.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link href={study.link} className="group">
                      <motion.div whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
                        <Card className="h-full bg-primary/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-150">
                          <CardContent className="p-6">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{study.category}</p>
                            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{study.name}</h3>
                            <p className="text-2xl font-bold text-primary mb-2">{study.result}</p>
                            <p className="text-sm text-muted-foreground">{study.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export function RefundSaverFeatures({ variant = 'grid' }: Props): React.JSX.Element {
  switch (variant) {
    case 'bento':
      return <BentoFeatures />;
    case 'tabs':
      return <TabsFeatures />;
    case 'grid':
    default:
      return <GridFeatures />;
  }
}
