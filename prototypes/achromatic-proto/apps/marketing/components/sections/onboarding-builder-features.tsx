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

import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';

// EXACT content from adapty.io/onboarding-builder (scraped 2026-01-21)
// 5 main features with titles and descriptions
const FEATURES = [
  {
    id: 'drag-drop',
    icon: MousePointer2Icon,
    title: 'Drag-and-drop',
    subtitle: 'If you can picture it, you can build it',
    description: "Create exactly what you imagined - from video backgrounds and custom loaders to animated buttons, multi-step quizzes, and anything else you need.",
    category: 'builder'
  },
  {
    id: 'personalization',
    icon: UserIcon,
    title: 'Personalization',
    subtitle: 'Relevance is how you convert',
    description: "Ask what matters to them, then show it. Build flows that fork and adapt in real-time instead of dragging everyone through the same one-size-fits-nobody journey.",
    category: 'personalization'
  },
  {
    id: 'ab-testing',
    icon: FlaskConicalIcon,
    title: 'A/B testing',
    subtitle: 'Testing turns hypotheses into revenue',
    description: "Compare variants, track the impact, and double down on what proves profitable. Keep iterating, because user behavior changes fast.",
    category: 'testing'
  },
  {
    id: 'analytics',
    icon: BarChart3Icon,
    title: 'Analytics',
    subtitle: 'What gets measured, gets maximized',
    description: "Track 20+ onboarding metrics: completion rates, revenue, trial and payment conversions, ARPU, and more. Real-time data that show where users fall off and how to fix it.",
    category: 'analytics'
  },
  {
    id: 'localization',
    icon: GlobeIcon,
    title: 'Localization',
    subtitle: 'Talk to users in their language',
    description: "Use manual translation when you need precision, and AI localization when you need speed. Give every user a smooth, native experience, wherever they are.",
    category: 'localization'
  }
];

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// 1. DRAG-DROP MAGIC - Visual builder blocks being rearranged
function DragDropMagic() {
  return (
    <div className="mt-4 flex justify-center items-center gap-2 h-[60px]">
      <div className="flex flex-col gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{
              x: i === 1 ? [0, 20, 0] : 0,
              scale: i === 1 ? [1, 1.05, 1] : 1,
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className={cn(
              "h-3 rounded-sm border",
              i === 1
                ? "w-16 bg-primary/20 border-primary/50"
                : "w-12 bg-muted/50 border-border"
            )}
          />
        ))}
      </div>
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-muted-foreground"
      >
        <MousePointer2Icon className="size-4" />
      </motion.div>
    </div>
  );
}

// 2. PERSONALIZATION MAGIC - Branching flow visualization
function PersonalizationMagic() {
  return (
    <div className="mt-4 flex justify-center items-center gap-1 h-[60px]">
      <div className="size-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
        <UserIcon className="size-3 text-muted-foreground" />
      </div>
      <motion.div
        animate={{ scaleX: [0, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
        className="w-4 h-0.5 bg-muted origin-left"
      />
      <div className="flex flex-col gap-1">
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="h-5 w-14 rounded bg-primary/10 border border-primary/30 flex items-center justify-center"
        >
          <span className="text-[8px] font-medium text-primary">Path A</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="h-5 w-14 rounded bg-muted/50 border border-border flex items-center justify-center"
        >
          <span className="text-[8px] text-muted-foreground">Path B</span>
        </motion.div>
      </div>
    </div>
  );
}

// 3. A/B TESTING MAGIC - Variant comparison animation
function ABTestMagic() {
  return (
    <div className="mt-4 flex gap-3 justify-center items-end h-[60px]">
      {['A', 'B'].map((variant, i) => (
        <motion.div
          key={variant}
          initial={{ height: '50%' }}
          animate={{
            height: i === 0 ? ['50%', '60%', '50%'] : ['50%', '80%', '50%'],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "w-10 rounded-t-md border border-b-0 flex items-end justify-center pb-1 text-[10px] font-bold",
            i === 1
              ? "bg-primary/15 border-primary/50 text-primary"
              : "bg-muted/50 border-border text-muted-foreground"
          )}
        >
          {variant}
        </motion.div>
      ))}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="ml-2 bg-green-500/10 text-green-600 text-[9px] px-2 py-0.5 rounded-full border border-green-500/30"
      >
        +30%
      </motion.div>
    </div>
  );
}

// 4. ANALYTICS MAGIC - Live metrics dashboard
function AnalyticsMagic() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      {[{ label: 'Conv.', delta: '+12%' }, { label: 'ARPU', delta: '+8%' }].map((metric, i) => (
        <div key={i} className="bg-background/50 rounded p-2 border">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[8px] text-muted-foreground">{metric.label}</span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              className="text-[9px] font-mono text-primary"
            >
              {metric.delta}
            </motion.span>
          </div>
          <motion.div
            animate={{ width: ["30%", "70%", "50%"] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            className="h-1 bg-primary rounded-full"
          />
        </div>
      ))}
    </div>
  );
}

// 5. LOCALIZATION MAGIC - Language switching animation
function OnboardingLocalizationMagic() {
  const LANGS = [
    { code: 'EN', text: 'Welcome' },
    { code: 'ES', text: 'Bienvenido' },
    { code: 'DE', text: 'Willkommen' },
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % LANGS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 h-[50px] flex items-center justify-center gap-3">
      <div className="flex gap-1">
        {LANGS.map((lang, i) => (
          <motion.div
            key={lang.code}
            animate={{
              scale: i === index ? 1.1 : 1,
              opacity: i === index ? 1 : 0.4
            }}
            className={cn(
              "size-6 rounded-full border flex items-center justify-center text-[8px] font-bold",
              i === index
                ? "bg-primary/10 border-primary/50 text-primary"
                : "bg-muted/30 border-border text-muted-foreground"
            )}
          >
            {lang.code}
          </motion.div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="text-sm font-medium"
        >
          {LANGS[index].text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

const MAGIC_MAP: Record<string, React.ComponentType> = {
  'drag-drop': DragDropMagic,
  'personalization': PersonalizationMagic,
  'ab-testing': ABTestMagic,
  'analytics': AnalyticsMagic,
  'localization': OnboardingLocalizationMagic,
};

function MagicArea({ id }: { id: string }) {
  const Component = MAGIC_MAP[id];
  if (!Component) return <div className="mt-6" />; // Spacer fallback
  return <Component />;
}

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
// VARIANT: GRID - Classic grid layout with Spotlight (default)
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
            <BlurFade key={feature.id || index} delay={0.1 + index * 0.02}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredIndex === index ? -4 : 0,
                }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <div className={cn(
                  "relative h-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-200 cursor-pointer group",
                  hoveredIndex === index && "border-primary/30 shadow-lg"
                )}>
                  {hoveredIndex === index && (
                    <BorderBeam
                      size={120}
                      duration={8}
                      borderWidth={1.5}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--primary)/0)"
                    />
                  )}
                  <Spotlight
                    className="from-primary/20 via-primary/10 to-transparent"
                    size={200}
                  />
                  <div className="p-6 relative z-10">
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
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{feature.subtitle}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}

          {/* Case study card */}
          <BlurFade delay={0.22}>
            <motion.div
              onMouseEnter={() => setHoveredIndex(99)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={shouldReduceMotion ? undefined : {
                y: hoveredIndex === 99 ? -4 : 0,
              }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
            >
              <div className={cn(
                "relative h-full overflow-hidden rounded-xl bg-primary/5 backdrop-blur-sm border border-primary/20 transition-all duration-150 cursor-pointer group",
                hoveredIndex === 99 && "border-primary/40 shadow-lg"
              )}>
                <Spotlight
                  className="from-primary/20 via-primary/10 to-transparent"
                  size={200}
                />
                <div className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: hoveredIndex === 99 ? 1.1 : 1,
                      }}
                      transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                      className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    >
                      <TrendingUpIcon className="size-6" />
                    </motion.div>
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Case Study</p>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{CASE_STUDY.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{CASE_STUDY.description}</p>
                      <div className="flex flex-wrap gap-4">
                        {CASE_STUDY.results.map((result, idx) => (
                          <div key={idx}>
                            <motion.p
                              animate={shouldReduceMotion ? undefined : {
                                scale: hoveredIndex === 99 ? 1.05 : 1,
                              }}
                              transition={{ delay: idx * 0.05 }}
                              className="text-lg font-bold text-primary"
                            >
                              {result.value}
                            </motion.p>
                            <p className="text-xs text-muted-foreground">{result.label}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3 italic">{CASE_STUDY.note}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: BENTO - Asymmetric bento grid with magic animations
// =============================================================================
function BentoFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // Featured items get larger cards
  const featured = FEATURES.slice(0, 2);
  const regular = FEATURES.slice(2);

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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured cards */}
          {featured.map((feature, index) => (
            <BlurFade key={feature.id || index} delay={0.1 + index * 0.05}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredIndex === index ? -6 : 0,
                  scale: hoveredIndex === index ? 1.01 : 1,
                }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                className={cn(
                  "lg:col-span-1",
                  index === 0 && "lg:row-span-2"
                )}
              >
                <div className={cn(
                  "relative h-full overflow-hidden rounded-xl border bg-gradient-to-br from-primary/5 to-background border-primary/20 transition-all duration-200 cursor-pointer group flex flex-col",
                  hoveredIndex === index && "border-primary/50 shadow-xl",
                  index === 0 && "min-h-[300px]"
                )}>
                  <Spotlight
                    className="from-primary/20 via-primary/10 to-transparent"
                    size={350}
                  />

                  <div className="p-8 h-full flex flex-col relative z-10">
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: hoveredIndex === index ? 1.15 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                      className={cn(
                        "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 transition-colors",
                        hoveredIndex === index && "bg-primary/20"
                      )}
                    >
                      <feature.icon className="size-7" />
                    </motion.div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-2">{feature.title}</p>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{feature.subtitle}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">{feature.description}</p>

                    {/* Magic Area */}
                    <div className="mt-auto pt-6">
                      <MagicArea id={feature.id || ''} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}

          {/* Regular cards */}
          {regular.map((feature, i) => {
            const index = i + featured.length;
            return (
              <BlurFade key={feature.id || index} delay={0.15 + i * 0.03}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: hoveredIndex === index ? -4 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <div className={cn(
                    "relative h-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-150 cursor-pointer group flex flex-col",
                    hoveredIndex === index && "border-primary/30 shadow-lg"
                  )}>
                    <Spotlight
                      className="from-primary/20 via-primary/10 to-transparent"
                      size={200}
                    />
                    <div className="p-6 relative z-10 flex-1 flex flex-col">
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: hoveredIndex === index ? 1.1 : 1,
                            rotate: hoveredIndex === index ? 3 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                        >
                          <feature.icon className="size-5" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">{feature.title}</p>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{feature.subtitle}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>

                      {/* Magic Area */}
                      <div className="mt-4 pt-2 border-t border-border/30">
                        <MagicArea id={feature.id || ''} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}

          {/* Case study card at the end */}
          <BlurFade delay={0.28}>
            <motion.div
              onMouseEnter={() => setHoveredIndex(99)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={shouldReduceMotion ? undefined : {
                y: hoveredIndex === 99 ? -4 : 0,
              }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
            >
              <div className={cn(
                "relative h-full overflow-hidden rounded-xl bg-primary/5 backdrop-blur-sm border border-primary/20 transition-all duration-150 cursor-pointer group",
                hoveredIndex === 99 && "border-primary/40 shadow-lg"
              )}>
                <Spotlight
                  className="from-primary/20 via-primary/10 to-transparent"
                  size={180}
                />
                <div className="p-6 relative z-10">
                  <motion.div
                    animate={shouldReduceMotion ? undefined : {
                      scale: hoveredIndex === 99 ? 1.1 : 1,
                    }}
                    transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                    className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4"
                  >
                    <TrendingUpIcon className="size-5" />
                  </motion.div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Case Study</p>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{CASE_STUDY.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{CASE_STUDY.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {CASE_STUDY.results.map((result, idx) => (
                      <div key={idx}>
                        <motion.p
                          animate={shouldReduceMotion ? undefined : {
                            scale: hoveredIndex === 99 ? 1.05 : 1,
                          }}
                          transition={{ delay: idx * 0.05 }}
                          className="text-lg font-bold text-primary"
                        >
                          {result.value}
                        </motion.p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TABS - Category tabs with filtered features and Spotlight
// =============================================================================
function TabsFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = React.useState<typeof CATEGORIES[number]['id']>('all');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const filteredFeatures = activeCategory === 'all'
    ? FEATURES
    : FEATURES.filter(f => f.category === activeCategory);

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
                >
                  <motion.div
                    animate={shouldReduceMotion ? undefined : {
                      y: hoveredIndex === index ? -4 : 0,
                    }}
                    transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                  >
                    <div className={cn(
                      "relative h-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-200 cursor-pointer group",
                      hoveredIndex === index && "border-primary/30 shadow-lg"
                    )}>
                      <Spotlight
                        className="from-primary/20 via-primary/10 to-transparent"
                        size={180}
                      />
                      <div className="p-6 relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div
                            animate={shouldReduceMotion ? undefined : {
                              scale: hoveredIndex === index ? 1.1 : 1,
                              rotate: hoveredIndex === index ? 3 : 0,
                            }}
                            transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                          >
                            <feature.icon className="size-6" />
                          </motion.div>
                          <div>
                            <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">{feature.title}</p>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{feature.subtitle}</h3>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Show case study only on 'all' tab */}
              {activeCategory === 'all' && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: filteredFeatures.length * 0.05, duration: 0.3 }}
                  onMouseEnter={() => setHoveredIndex(99)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    animate={shouldReduceMotion ? undefined : {
                      y: hoveredIndex === 99 ? -4 : 0,
                    }}
                    transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                  >
                    <div className={cn(
                      "relative h-full overflow-hidden rounded-xl bg-primary/5 backdrop-blur-sm border border-primary/20 transition-all duration-150 cursor-pointer group",
                      hoveredIndex === 99 && "border-primary/40 shadow-lg"
                    )}>
                      <Spotlight
                        className="from-primary/20 via-primary/10 to-transparent"
                        size={180}
                      />
                      <div className="p-6 relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div
                            animate={shouldReduceMotion ? undefined : {
                              scale: hoveredIndex === 99 ? 1.1 : 1,
                            }}
                            transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                          >
                            <TrendingUpIcon className="size-6" />
                          </motion.div>
                          <div>
                            <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Case Study</p>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{CASE_STUDY.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{CASE_STUDY.description}</p>
                        <div className="flex flex-wrap gap-4">
                          {CASE_STUDY.results.map((result, idx) => (
                            <div key={idx}>
                              <motion.p
                                animate={shouldReduceMotion ? undefined : {
                                  scale: hoveredIndex === 99 ? 1.05 : 1,
                                }}
                                transition={{ delay: idx * 0.05 }}
                                className="text-lg font-bold text-primary"
                              >
                                {result.value}
                              </motion.p>
                              <p className="text-xs text-muted-foreground">{result.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
