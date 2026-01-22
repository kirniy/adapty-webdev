'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  FlaskConicalIcon,
  LayoutIcon,
  TargetIcon,
  BrainCircuitIcon,
  BarChart3Icon,
  SendIcon,
  SearchIcon,
  GlobeIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { Spotlight } from '~/components/fragments/spotlight';

// EXACT content from adapty.io/for-marketers (scraped 2026-01-21)
const FEATURES = [
  {
    icon: FlaskConicalIcon,
    title: 'Easy paywall testing without the dev team',
    description: 'Find the optimal paywall with Adapty paywall A/B testing that requires no additional coding. Compare subscriptions, offers, free trials, copy, images, and more.',
    link: '/paywall-ab-testing',
    linkText: 'Paywall A/B testing',
    category: 'testing'
  },
  {
    icon: LayoutIcon,
    title: 'Build and deploy high-quality paywalls with no coding',
    description: 'Use our collection of highly customizable industry-proven paywall templates to change paywall UI and pricing quickly.',
    link: '/paywall-builder',
    linkText: 'Try our Paywall Builder',
    category: 'builder'
  },
  {
    icon: TargetIcon,
    title: 'Target paywalls to user segments',
    description: 'Fine-tune your offers for different groups of users, like selling more expensive products to your power users while promoting a free trial for others.',
    link: '/paywall-targeting',
    linkText: 'More about targeting',
    category: 'targeting'
  },
  {
    icon: BrainCircuitIcon,
    title: 'Stop the guesswork, get accurate LTV prediction',
    description: "With machine learning, Adapty's LTV and revenue prediction will help you understand your profitability for a given cohort.",
    link: null,
    linkText: null,
    category: 'analytics'
  },
  {
    icon: BarChart3Icon,
    title: 'Revenue analytics you can trust',
    description: 'Get real-time vital subscription and revenue analytics. Segment and filter audience, compare time periods, and track your sales funnel with cohort analysis.',
    link: null,
    linkText: null,
    category: 'analytics'
  },
  {
    icon: SendIcon,
    title: 'Send revenue events to MMP and analytics',
    description: "We know it's important to use other services to help you optimize your ad campaigns and user acquisition. Adapty makes it easy to push data to 3rd party services.",
    link: null,
    linkText: null,
    category: 'integrations'
  },
  {
    icon: SearchIcon,
    title: 'Built-in Apple Search Ads analytics',
    description: 'Analyze your ASA performance right in the Adapty dashboard. Get revenue, LTV, and other core metrics on the keyword level.',
    link: null,
    linkText: null,
    category: 'analytics'
  },
  {
    icon: GlobeIcon,
    title: 'Convenient paywall localization',
    description: 'Trying a new traffic source or a country? Localize paywalls for the local audience right in the Adapty dashboard.',
    link: '/paywall-localization',
    linkText: 'Localize paywalls in a few clicks',
    category: 'localization'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Features' },
  { id: 'builder', label: 'Builder' },
  { id: 'testing', label: 'Testing' },
  { id: 'targeting', label: 'Targeting' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'localization', label: 'Localization' },
] as const;

// Related roles from adapty.io/for-marketers
const RELATED_ROLES = [
  {
    title: 'For developers',
    description: 'Integrate in-app purchases in minutes.',
    link: '/for-developers'
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

// A/B Testing Magic - Paywall variants
function TestingMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [winner, setWinner] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setWinner((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 flex gap-2 justify-center">
        {['A', 'B', 'C'].map((v, i) => (
          <div key={v} className={cn("w-10 h-14 rounded border flex items-center justify-center text-xs font-bold", i === 0 ? "bg-primary/20 border-primary" : "bg-muted/50")}>
            {v}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 flex gap-2 justify-center items-end h-16">
      {['A', 'B', 'C'].map((v, i) => (
        <motion.div
          key={v}
          animate={{
            height: winner === i ? '100%' : '60%',
            opacity: winner === i ? 1 : 0.5,
          }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
          className={cn(
            "w-10 rounded border flex items-end justify-center pb-1 text-xs font-bold",
            winner === i ? "bg-emerald-500/20 border-emerald-500 text-emerald-600" : "bg-muted/50 border-border"
          )}
        >
          {v}
          {winner === i && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 text-[8px] bg-emerald-500 text-white px-1 rounded"
            >
              WIN
            </motion.span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Paywall Builder Magic - Visual builder preview
function BuilderMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeBlock, setActiveBlock] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 flex flex-col gap-1 items-center">
        <div className="w-24 h-3 bg-muted rounded" />
        <div className="w-20 h-2 bg-muted/50 rounded" />
        <div className="w-16 h-6 bg-primary/20 rounded mt-1" />
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-1 items-center">
      <motion.div
        animate={{ scale: activeBlock === 0 ? 1.1 : 1, borderColor: activeBlock === 0 ? 'hsl(var(--primary))' : 'transparent' }}
        className="w-24 h-3 bg-muted rounded border-2"
      />
      <motion.div
        animate={{ scale: activeBlock === 1 ? 1.1 : 1, borderColor: activeBlock === 1 ? 'hsl(var(--primary))' : 'transparent' }}
        className="w-20 h-2 bg-muted/50 rounded border-2"
      />
      <motion.div
        animate={{ scale: activeBlock === 2 ? 1.1 : 1, borderColor: activeBlock === 2 ? 'hsl(var(--primary))' : 'transparent' }}
        className="w-16 h-6 bg-primary/20 rounded mt-1 border-2"
      />
      <motion.div
        animate={{ scale: activeBlock === 3 ? 1.1 : 1, borderColor: activeBlock === 3 ? 'hsl(var(--primary))' : 'transparent' }}
        className="w-12 h-2 bg-muted rounded mt-1 border-2"
      />
    </div>
  );
}

// Targeting Magic - User segments
function TargetingMagic() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 flex justify-center gap-3">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="size-6 rounded-full bg-muted border-2 border-background" />
          ))}
        </div>
        <div className="h-6 px-2 rounded bg-primary/20 text-[10px] flex items-center font-medium">Premium</div>
      </div>
    );
  }

  return (
    <div className="mt-4 flex justify-center items-center gap-3">
      <div className="flex -space-x-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="size-6 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 border-2 border-background"
          />
        ))}
      </div>
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronRightIcon className="size-4 text-muted-foreground" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-6 px-2 rounded bg-primary/20 text-[10px] flex items-center font-medium text-primary"
      >
        Premium
      </motion.div>
    </div>
  );
}

// Analytics Magic - Chart visualization
function AnalyticsMagic() {
  const shouldReduceMotion = useReducedMotion();
  const bars = [30, 45, 35, 60, 55, 75, 80];

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 flex items-end justify-center gap-1 h-12">
        {bars.map((h, i) => (
          <div key={i} className="w-3 bg-primary/30 rounded-t" style={{ height: `${h}%` }} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 flex items-end justify-center gap-1 h-12">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
          className="w-3 bg-primary/30 rounded-t"
        />
      ))}
    </div>
  );
}

// Localization Magic - Language switching
function LocalizationMagic() {
  const shouldReduceMotion = useReducedMotion();
  const languages = ['EN $9.99', 'ES $9.99', 'DE $9.99', 'FR $9.99'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % languages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, languages.length]);

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 h-8 flex items-center justify-center bg-muted/30 rounded text-sm font-medium">
        EN $9.99
      </div>
    );
  }

  return (
    <div className="mt-4 h-8 flex items-center justify-center bg-muted/30 rounded overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-sm font-medium"
        >
          {languages[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// Integration Magic - Data flow
function IntegrationMagic() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 flex justify-center items-center gap-2">
        <div className="size-6 rounded bg-primary/20" />
        <div className="w-8 h-0.5 bg-muted" />
        <div className="size-6 rounded bg-muted" />
      </div>
    );
  }

  return (
    <div className="mt-4 flex justify-center items-center gap-2">
      <div className="size-6 rounded bg-primary/20 flex items-center justify-center">
        <SendIcon className="size-3 text-primary" />
      </div>
      <div className="relative w-8 h-0.5 bg-muted overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-y-0 w-3 bg-primary rounded"
        />
      </div>
      <div className="size-6 rounded bg-muted flex items-center justify-center">
        <BarChart3Icon className="size-3 text-muted-foreground" />
      </div>
    </div>
  );
}

// Feature to magic component mapping
const FEATURE_MAGIC: Record<string, React.FC> = {
  'Easy paywall testing without the dev team': TestingMagic,
  'Build and deploy high-quality paywalls with no coding': BuilderMagic,
  'Target paywalls to user segments': TargetingMagic,
  "Stop the guesswork, get accurate LTV prediction": AnalyticsMagic,
  'Revenue analytics you can trust': AnalyticsMagic,
  'Send revenue events to MMP and analytics': IntegrationMagic,
  'Built-in Apple Search Ads analytics': AnalyticsMagic,
  'Convenient paywall localization': LocalizationMagic,
};

export type ForMarketersFeaturesVariant = 'grid' | 'bento' | 'tabs';

export const FOR_MARKETERS_FEATURES_VARIANTS = ['grid', 'bento', 'tabs'] as const;

type Props = {
  variant?: ForMarketersFeaturesVariant;
};

// Variant 1: Grid - Classic 2-column grid layout with magic animations
function GridFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything a marketer needs"
            description="Build, test, and optimize paywalls without writing code."
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
                    "group relative h-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm transition-all duration-200",
                    hoveredIndex === index && "border-primary/30 shadow-lg shadow-primary/5"
                  )}
                >
                  <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={280} />

                  <div className="relative p-6">
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

        {/* Related roles section */}
        <BlurFade delay={0.25}>
          <div className="mt-16">
            <SiteHeading title="We're here for your team" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {RELATED_ROLES.map((role, index) => (
                <Link key={index} href={role.link} className="group">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', bounce: 0 }}
                    className="relative h-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-150"
                  >
                    <Spotlight className="from-primary/10 via-transparent to-transparent" size={200} />
                    <div className="relative p-6">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2">
                        {role.title}
                        <motion.span
                          animate={shouldReduceMotion ? undefined : { x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRightIcon className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.span>
                      </h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// Variant 2: Bento - Asymmetric bento grid with magic animations
function BentoFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // Define grid positions for bento layout
  const getGridClass = (index: number) => {
    switch (index) {
      case 0: return 'md:col-span-2'; // Wide card
      case 1: return 'md:row-span-2'; // Tall card
      default: return '';
    }
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1600} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything a marketer needs"
            description="Build, test, and optimize paywalls without writing code."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((feature, index) => {
            const MagicComponent = FEATURE_MAGIC[feature.title];
            const isLarge = index === 0 || index === 1;

            return (
              <BlurFade key={index} delay={0.1 + index * 0.02} className={getGridClass(index)}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: hoveredIndex === index ? -8 : 0,
                    scale: hoveredIndex === index ? 1.02 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  className="h-full"
                >
                  <div
                    className={cn(
                      "group relative h-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm transition-all duration-200",
                      hoveredIndex === index && "border-primary/30 shadow-lg shadow-primary/5",
                      index === 0 && "bg-gradient-to-br from-primary/5 via-background/80 to-background/50 border-primary/20"
                    )}
                  >
                    <Spotlight className="from-primary/20 via-primary/5 to-transparent" size={isLarge ? 350 : 250} />

                    <div className={cn("relative p-6 h-full flex flex-col", index === 0 && "p-8")}>
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: hoveredIndex === index ? 1.15 : 1,
                            rotate: hoveredIndex === index ? 8 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.2 }}
                          className={cn(
                            "flex items-center justify-center rounded-xl bg-primary/10 text-primary",
                            index === 0 ? "size-14" : "size-10"
                          )}
                        >
                          <feature.icon className={index === 0 ? "size-7" : "size-5"} />
                        </motion.div>
                      </div>
                      <h3 className={cn("font-semibold mb-2 group-hover:text-primary transition-colors", index === 0 ? "text-xl" : "text-lg")}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {feature.description}
                      </p>

                      {/* Magic animation */}
                      {MagicComponent && (
                        <div className="mt-4 pt-4 border-t border-border/30">
                          <MagicComponent />
                        </div>
                      )}

                      {feature.link && feature.linkText && (
                        <div className="mt-4 pt-4 border-t border-border/30">
                          <Link
                            href={feature.link}
                            className="text-sm text-primary hover:underline inline-flex items-center gap-2"
                          >
                            {feature.linkText}
                            <motion.span
                              animate={shouldReduceMotion ? undefined : { x: hoveredIndex === index ? 4 : 0 }}
                            >
                              <ChevronRightIcon className="size-4" />
                            </motion.span>
                          </Link>
                        </div>
                      )}
                    </div>

                    <BorderBeam
                      size={200}
                      duration={12}
                      delay={0}
                      borderWidth={1.5}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--primary)/0)"
                      className="opacity-60"
                    />
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Related roles section */}
        <BlurFade delay={0.3}>
          <div className="mt-16">
            <SiteHeading title="We're here for your team" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {RELATED_ROLES.map((role, index) => (
                <Link key={index} href={role.link} className="group">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2">
                          {role.title}
                          <ArrowRightIcon className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// Variant 3: Tabs - Category tabs with filtered features
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
            title="Everything a marketer needs"
            description="Build, test, and optimize paywalls without writing code."
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
                    layoutId="activeMarketersTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Feature cards with AnimatePresence */}
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
                    "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200 relative overflow-hidden",
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
                    <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={200} />
                    <CardContent className="p-6 relative z-10">
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
                          <h3 className="font-semibold text-lg">{feature.title}</h3>
                          <span className="text-xs text-primary/70 font-medium uppercase tracking-wider">
                            {feature.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>

                      {feature.link && feature.linkText && (
                        <Link
                          href={feature.link}
                          className="text-sm text-primary hover:underline inline-flex items-center gap-1 group"
                        >
                          {feature.linkText}
                          <motion.span
                            animate={shouldReduceMotion ? undefined : { x: hoveredIndex === index ? 3 : 0 }}
                          >
                            <ArrowRightIcon className="size-3" />
                          </motion.span>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Related roles section */}
        <BlurFade delay={0.25}>
          <div className="mt-16">
            <SiteHeading title="We're here for your team" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {RELATED_ROLES.map((role, index) => (
                <Link key={index} href={role.link} className="group">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2">
                          {role.title}
                          <ArrowRightIcon className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

export function ForMarketersFeatures({ variant = 'grid' }: Props): React.JSX.Element {
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
