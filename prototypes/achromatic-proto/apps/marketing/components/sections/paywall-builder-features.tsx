'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  RefreshCwIcon,
  ZapIcon,
  FlaskConicalIcon,
  LayoutGridIcon,
  SlidersHorizontalIcon,
  GlobeIcon,
  SmartphoneIcon,
  BoxIcon,
  ChevronRightIcon,
  ArrowRightIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { paywallBuilderContent } from '~/lib/content';

// Animation constants following Emil Kowalski principles
const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const;

// Content from centralized content file
const { features } = paywallBuilderContent;

// Icon mapping
const FEATURE_ICONS = {
  RefreshCw: RefreshCwIcon,
  Zap: ZapIcon,
  FlaskConical: FlaskConicalIcon,
  LayoutGrid: LayoutGridIcon,
  SlidersHorizontal: SlidersHorizontalIcon,
  Globe: GlobeIcon,
  Smartphone: SmartphoneIcon,
  Box: BoxIcon,
} as const;

const CATEGORIES = ['all', 'builder', 'testing', 'customization', 'localization', 'performance'] as const;
type Category = typeof CATEGORIES[number];

const categoryLabels: Record<Category, string> = {
  all: 'All Features',
  builder: 'Builder',
  testing: 'A/B Testing',
  customization: 'Customization',
  localization: 'Localization',
  performance: 'Performance',
};

// Feature card component with rich micro-interactions
function FeatureCard({
  feature,
  index,
  isHovered,
  onHover,
  compact = false
}: {
  feature: typeof features.items[0];
  index: number;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  compact?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = FEATURE_ICONS[feature.icon as keyof typeof FEATURE_ICONS];

  return (
    <motion.div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ delay: shouldReduceMotion ? 0 : 0.05 + index * 0.03, duration: 0.2, ease: EASE_OUT_QUART }}
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : {
          y: isHovered ? -4 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
      >
        <Card className={cn(
          "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200 cursor-pointer group",
          isHovered && "border-primary/40 shadow-lg shadow-primary/5"
        )}>
          <CardContent className={cn("p-6", compact && "p-4")}>
            <div className="flex items-start gap-4">
              <motion.div
                animate={shouldReduceMotion ? undefined : {
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0,
                }}
                transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
                className={cn(
                  "flex shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors",
                  isHovered && "bg-primary/15",
                  compact ? "size-10" : "size-12"
                )}
              >
                <Icon className={compact ? "size-5" : "size-6"} />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className={cn("font-semibold group-hover:text-primary transition-colors", compact ? "text-sm" : "text-lg")}>
                    {feature.title}
                  </h3>
                  <motion.div
                    animate={shouldReduceMotion ? undefined : {
                      x: isHovered ? 2 : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.15 }}
                  >
                    <ChevronRightIcon className="size-4 text-primary shrink-0 mt-0.5" />
                  </motion.div>
                </div>
                <p className={cn("text-muted-foreground leading-relaxed mt-1", compact ? "text-xs" : "text-sm")}>
                  {feature.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// =============================================================================
// VARIANT: GRID - Classic 2-column grid of cards
// =============================================================================
function GridFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title={features.headline}
            description={features.description}
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.items.map((feature, index) => (
            <BlurFade key={feature.id} delay={0.1 + index * 0.02}>
              <FeatureCard
                feature={feature}
                index={index}
                isHovered={hoveredIndex === index}
                onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
              />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Start with a template or from scratch</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Pick one of our pre-made industry-tested templates or start from a blank page.
            </p>
            <Link
              href="/schedule-demo"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Schedule a demo
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: BENTO - Asymmetric bento grid with featured cards
// =============================================================================
function BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // Featured items get larger cards
  const featured = features.items.slice(0, 2);
  const regular = features.items.slice(2);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title={features.headline}
            description={features.description}
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured cards - span 2 cols on lg */}
          {featured.map((feature, index) => {
            const Icon = FEATURE_ICONS[feature.icon as keyof typeof FEATURE_ICONS];
            const isHovered = hoveredIndex === index;

            return (
              <BlurFade key={feature.id} delay={0.1 + index * 0.05}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: isHovered ? -6 : 0,
                    scale: isHovered ? 1.01 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  className={cn(
                    "lg:col-span-1",
                    index === 0 && "lg:row-span-2"
                  )}
                >
                  <Card className={cn(
                    "h-full bg-gradient-to-br from-primary/5 to-background border-primary/20 transition-all duration-200 cursor-pointer group",
                    isHovered && "border-primary/50 shadow-xl shadow-primary/10",
                    index === 0 && "min-h-[300px]"
                  )}>
                    <CardContent className="p-8 h-full flex flex-col">
                      <motion.div
                        animate={shouldReduceMotion ? undefined : {
                          scale: isHovered ? 1.15 : 1,
                          rotate: isHovered ? 5 : 0,
                        }}
                        transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                        className={cn(
                          "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 transition-colors",
                          isHovered && "bg-primary/20"
                        )}
                      >
                        <Icon className="size-7" />
                      </motion.div>
                      <Badge variant="secondary" className="w-fit mb-3 text-xs">
                        {categoryLabels[feature.category as Category] || feature.category}
                      </Badge>
                      <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">{feature.description}</p>
                      <motion.div
                        animate={shouldReduceMotion ? undefined : {
                          x: isHovered ? 4 : 0,
                          opacity: isHovered ? 1 : 0.6,
                        }}
                        transition={{ duration: 0.15 }}
                        className="mt-4 flex items-center text-sm font-medium text-primary"
                      >
                        Learn more <ChevronRightIcon className="ml-1 size-4" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </BlurFade>
            );
          })}

          {/* Regular cards */}
          {regular.map((feature, index) => {
            const Icon = FEATURE_ICONS[feature.icon as keyof typeof FEATURE_ICONS];
            const isHovered = hoveredIndex === index + featured.length;

            return (
              <BlurFade key={feature.id} delay={0.15 + index * 0.03}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index + featured.length)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: isHovered ? -4 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Card className={cn(
                    "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-150 cursor-pointer group",
                    isHovered && "border-primary/30 shadow-lg"
                  )}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: isHovered ? 1.1 : 1,
                            rotate: isHovered ? 3 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                        >
                          <Icon className="size-5" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TABS - Tabbed content with category filter
// =============================================================================
function TabsFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = React.useState<Category>('all');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [hoveredTab, setHoveredTab] = React.useState<Category | null>(null);

  const filteredFeatures = activeCategory === 'all'
    ? features.items
    : features.items.filter(f => f.category === activeCategory);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title={features.headline}
            description={features.description}
          />
        </BlurFade>

        {/* Category tabs */}
        <BlurFade delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                onMouseEnter={() => setHoveredTab(category)}
                onMouseLeave={() => setHoveredTab(null)}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                animate={shouldReduceMotion ? undefined : {
                  scale: hoveredTab === category && activeCategory !== category ? 1.05 : 1,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer",
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                )}
              >
                {categoryLabels[category]}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-foreground rounded-full -z-10"
                    transition={{ type: 'spring', duration: 0.3, bounce: 0.15 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Features grid with animation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feature, index) => {
              const Icon = FEATURE_ICONS[feature.icon as keyof typeof FEATURE_ICONS];
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={feature.id}
                  layout
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 10 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.2, delay: index * 0.02, ease: EASE_OUT_QUART }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    animate={shouldReduceMotion ? undefined : {
                      y: isHovered ? -4 : 0,
                    }}
                    transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                  >
                    <Card className={cn(
                      "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200 cursor-pointer group",
                      isHovered && "border-primary/40 shadow-lg shadow-primary/5"
                    )}>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between">
                            <motion.div
                              animate={shouldReduceMotion ? undefined : {
                                scale: isHovered ? 1.1 : 1,
                                rotate: isHovered ? 5 : 0,
                              }}
                              transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                              className={cn(
                                "flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors",
                                isHovered && "bg-primary/15"
                              )}
                            >
                              <Icon className="size-5" />
                            </motion.div>
                            <Badge variant="outline" className="text-xs">
                              {categoryLabels[feature.category as Category]}
                            </Badge>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <BlurFade delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Start with a template or from scratch</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Pick one of our pre-made industry-tested templates or start from a blank page.
            </p>
            <Link
              href="/schedule-demo"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Schedule a demo
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type PaywallBuilderFeaturesVariant = 'grid' | 'bento' | 'tabs';

type Props = {
  variant?: PaywallBuilderFeaturesVariant;
};

export function PaywallBuilderFeatures({ variant = 'grid' }: Props): React.JSX.Element {
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
