'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  MousePointer2Icon,
  UserIcon,
  FlaskConicalIcon,
  BarChart3Icon,
  GlobeIcon,
  TrendingUpIcon,
  ChevronDownIcon,
  ArrowRightIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/onboarding-builder (scraped 2026-01-21)
// 5 main features with titles and descriptions
const FEATURES = [
  {
    icon: MousePointer2Icon,
    title: 'Drag-and-drop',
    subtitle: 'If you can picture it, you can build it',
    description: "Create exactly what you imagined - from video backgrounds and custom loaders to animated buttons, multi-step quizzes, and anything else you need."
  },
  {
    icon: UserIcon,
    title: 'Personalization',
    subtitle: 'Relevance is how you convert',
    description: "Ask what matters to them, then show it. Build flows that fork and adapt in real-time instead of dragging everyone through the same one-size-fits-nobody journey."
  },
  {
    icon: FlaskConicalIcon,
    title: 'A/B testing',
    subtitle: 'Testing turns hypotheses into revenue',
    description: "Compare variants, track the impact, and double down on what proves profitable. Keep iterating, because user behavior changes fast."
  },
  {
    icon: BarChart3Icon,
    title: 'Analytics',
    subtitle: 'What gets measured, gets maximized',
    description: "Track 20+ onboarding metrics: completion rates, revenue, trial and payment conversions, ARPU, and more. Real-time data that show where users fall off and how to fix it."
  },
  {
    icon: GlobeIcon,
    title: 'Localization',
    subtitle: 'Talk to users in their language',
    description: "Use manual translation when you need precision, and AI localization when you need speed. Give every user a smooth, native experience, wherever they are.",
    category: 'localization'
  }
];

// Add category to existing features
FEATURES[0] = { ...FEATURES[0], category: 'builder' };
FEATURES[1] = { ...FEATURES[1], category: 'personalization' };
FEATURES[2] = { ...FEATURES[2], category: 'testing' };
FEATURES[3] = { ...FEATURES[3], category: 'analytics' };

// Categories for tabs variant
const CATEGORIES = [
  { id: 'all', label: 'All Features' },
  { id: 'builder', label: 'Builder' },
  { id: 'personalization', label: 'Personalization' },
  { id: 'testing', label: 'Testing' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'localization', label: 'Localization' },
] as const;

// Case study from adapty.io/onboarding-builder
const CASE_STUDY = {
  title: 'How a new onboarding drove 50% revenue growth',
  description: 'A travel app rebuilt onboarding in Adapty, tested a variant, and shipped the winner.',
  results: [
    { label: 'ARPU', value: '+102%' },
    { label: 'Purchase conversion', value: '+30%' },
    { label: 'Revenue', value: '+50%' }
  ],
  note: 'All without engineering'
};

export type OnboardingBuilderFeaturesVariant = 'grid' | 'bento' | 'tabs';

export const ONBOARDING_BUILDER_FEATURES_VARIANTS = ['grid', 'bento', 'tabs'] as const;

type Props = {
  variant?: OnboardingBuilderFeaturesVariant;
};

// =============================================================================
// VARIANT: GRID - Classic grid layout (default)
// =============================================================================
function GridFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="From install to revenue in one platform"
            description="Adapty handles everything between first open and first payment: onboarding flows that convert, paywalls that sell, and analytics that tell you why."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.02}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
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
                        <feature.icon className="size-6" />
                      </motion.div>
                      <div>
                        <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">{feature.title}</p>
                        <h3 className="font-semibold text-lg mb-2">{feature.subtitle}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}

          {/* Case study card */}
          <BlurFade delay={0.22}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            >
              <Card className="h-full bg-primary/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-150">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <TrendingUpIcon className="size-6" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Case Study</p>
                      <h3 className="font-semibold text-lg mb-2">{CASE_STUDY.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{CASE_STUDY.description}</p>
                      <div className="flex flex-wrap gap-4">
                        {CASE_STUDY.results.map((result, idx) => (
                          <div key={idx}>
                            <p className="text-lg font-bold text-primary">{result.value}</p>
                            <p className="text-xs text-muted-foreground">{result.label}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3 italic">{CASE_STUDY.note}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: BENTO - Asymmetric bento grid with expandable cards
// =============================================================================
function BentoFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="From install to revenue in one platform"
            description="Adapty handles everything between first open and first payment."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large featured card - first feature */}
          <BlurFade delay={0.1} className="md:col-span-2 lg:row-span-2">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
              className="h-full"
            >
              <Card
                className={cn(
                  "h-full bg-gradient-to-br from-primary/5 via-background/80 to-background/50 backdrop-blur-sm border-primary/20 cursor-pointer transition-all duration-200",
                  expandedIndex === 0 && "ring-2 ring-primary/30"
                )}
                onClick={() => setExpandedIndex(expandedIndex === 0 ? null : 0)}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <MousePointer2Icon className="size-7" />
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === 0 ? 180 : 0 }}
                      className="text-muted-foreground"
                    >
                      <ChevronDownIcon className="size-5" />
                    </motion.div>
                  </div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wide mb-2">{FEATURES[0].title}</p>
                  <h3 className="font-bold text-2xl mb-3">{FEATURES[0].subtitle}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{FEATURES[0].description}</p>

                  <AnimatePresence>
                    {expandedIndex === 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t">
                          <div className="flex flex-wrap gap-4">
                            {CASE_STUDY.results.map((result, idx) => (
                              <div key={idx} className="text-center">
                                <p className="text-2xl font-bold text-primary">{result.value}</p>
                                <p className="text-xs text-muted-foreground">{result.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>

          {/* Remaining features */}
          {FEATURES.slice(1).map((feature, i) => {
            const index = i + 1;
            return (
              <BlurFade key={index} delay={0.12 + i * 0.02}>
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
                          <feature.icon className="size-5" />
                        </div>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          className="text-muted-foreground"
                        >
                          <ChevronDownIcon className="size-4" />
                        </motion.div>
                      </div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">{feature.title}</p>
                      <h3 className="font-semibold text-lg mb-2">{feature.subtitle}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </BlurFade>
            );
          })}

          {/* Case study card at the end */}
          <BlurFade delay={0.24}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
            >
              <Card className="h-full bg-primary/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-150">
                <CardContent className="p-6">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <TrendingUpIcon className="size-5" />
                  </div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Case Study</p>
                  <h3 className="font-semibold text-lg mb-2">{CASE_STUDY.title}</h3>
                  <p className="text-sm text-muted-foreground">{CASE_STUDY.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TABS - Category tabs with filtered features
// =============================================================================
function TabsFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = React.useState<typeof CATEGORIES[number]['id']>('all');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const filteredFeatures = activeCategory === 'all'
    ? FEATURES
    : FEATURES.filter(f => (f as any).category === activeCategory);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="From install to revenue in one platform"
            description="Adapty handles everything between first open and first payment."
          />
        </BlurFade>

        {/* Category tabs */}
        <BlurFade delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                  activeCategory === category.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeOnboardingTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Feature cards */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                >
                  <Card className={cn(
                    "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200",
                    hoveredIndex === index && "border-primary/30 shadow-lg"
                  )}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: hoveredIndex === index ? 1.1 : 1,
                          }}
                          className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                        >
                          <feature.icon className="size-6" />
                        </motion.div>
                        <div>
                          <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">{feature.title}</p>
                          <h3 className="font-semibold text-lg">{feature.subtitle}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Show case study only on 'all' tab */}
              {activeCategory === 'all' && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: filteredFeatures.length * 0.05, duration: 0.3 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                >
                  <Card className="h-full bg-primary/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-150">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <TrendingUpIcon className="size-6" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Case Study</p>
                          <h3 className="font-semibold text-lg">{CASE_STUDY.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{CASE_STUDY.description}</p>
                      <div className="flex flex-wrap gap-4">
                        {CASE_STUDY.results.map((result, idx) => (
                          <div key={idx}>
                            <p className="text-lg font-bold text-primary">{result.value}</p>
                            <p className="text-xs text-muted-foreground">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export function OnboardingBuilderFeatures({ variant = 'grid' }: Props): React.JSX.Element {
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
