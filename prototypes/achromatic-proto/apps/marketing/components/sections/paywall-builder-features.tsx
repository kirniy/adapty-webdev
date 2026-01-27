'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  RefreshCwIcon,
  ZapIcon,
  FlaskConicalIcon,
  LayoutGridIcon,
  LayoutIcon,
  SlidersHorizontalIcon,
  GlobeIcon,
  SmartphoneIcon,
  BoxIcon,
  ChevronRightIcon,
  ArrowRightIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Autoplay
} from '@workspace/ui/components/carousel';
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

// Paywall scenarios for carousel animations
const PAYWALL_SCENARIOS = [
  { title: 'Onboarding', status: 'Live', viewers: '1.2k' },
  { title: 'Black Friday', status: 'Scheduled', viewers: '-' },
  { title: 'Win-back', status: 'Live', viewers: '850' },
  { title: 'Holiday Special', status: 'Draft', viewers: '-' },
  { title: 'Summer Sale', status: 'Ended', viewers: '3.4k' },
  { title: 'New Features', status: 'Live', viewers: '2.1k' },
];

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
          "relative h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200 cursor-pointer group",
          isHovered && "border-primary/40"
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
// MAGIC ANIMATIONS
// =============================================================================

// 1. CAROUSEL MAGIC (Scale Paywall)
function CarouselMagic() {
  return (
    <div className="mt-auto relative w-full overflow-hidden pb-4 pt-4">
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent z-10" />
      <Carousel
        opts={{ align: 'start', skipSnaps: true, loop: true, dragFree: true }}
        plugins={[Autoplay({ delay: 2000 })]}
        orientation="vertical"
        className="pointer-events-none w-full select-none"
      >
        <CarouselContent className="pointer-events-none -mt-1 h-[150px] select-none">
          {PAYWALL_SCENARIOS.map((scenario, i) => (
            <CarouselItem key={i} className="pointer-events-none basis-1/3 select-none pt-1">
              <div className="mx-6 p-3 rounded-lg border bg-background/50 backdrop-blur-sm flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <BoxIcon className="size-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{scenario.title}</div>
                    <div className="text-[10px] text-muted-foreground">{scenario.status}</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-muted-foreground">{scenario.viewers}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
}

// 2. SYNC MAGIC (Real-time Changes)
function SyncMagic() {
  return (
    <div className="mt-auto relative h-[150px] w-full flex items-center justify-center overflow-hidden">
      {/* Connecting Beam */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[60%] h-[2px] bg-border relative">
          <motion.div
            animate={{ x: [-100, 200], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-[40px] h-full bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>
      </div>

      {/* Nodes */}
      <div className="flex justify-between w-[80%] relative z-10">
        <div className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-xl bg-background border shadow-sm flex items-center justify-center">
            <LayoutGridIcon className="size-6 text-muted-foreground" />
          </div>
          <span className="text-[10px] font-mono text-muted-foreground">Config</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 shadow-sm flex items-center justify-center relative">
            <SmartphoneIcon className="size-6 text-primary" />
            <span className="absolute -top-1 -right-1 flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex size-2.5 rounded-full bg-primary"></span>
            </span>
          </div>
          <span className="text-[10px] font-mono text-primary font-medium">Updated</span>
        </div>
      </div>
    </div>
  );
}

// 3. A/B TEST MAGIC (Testing)
function ABTestMagic() {
  return (
    <div className="mt-4 space-y-3 w-full">
      <div className="space-y-1.5">
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>Variant A</span>
          <span>12%</span>
        </div>
        <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "30%" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="h-full bg-muted-foreground/30"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between text-[10px]">
          <span className="font-medium text-primary">Variant B</span>
          <span className="font-bold text-primary">48%</span>
        </div>
        <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "75%" }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="h-full bg-primary"
          />
        </div>
      </div>
    </div>
  );
}

// 4. SLIDERS MAGIC (Customization)
function SlidersMagic() {
  return (
    <div className="mt-4 space-y-2 w-full">
      {[0.7, 0.4, 0.8].map((val, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-1 flex-1 bg-muted/50 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: ["0%", "50%", "20%", "70%"] }}
              transition={{ duration: 4 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute top-0 left-0 w-3 h-full bg-primary rounded-full"
              style={{ left: `${val * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// 5. LOCALIZATION MAGIC (Localization)
function LocalizationMagic() {
  const WORDS = ["Paywall", "Paiement", "Bezahlmauer", "Pagos"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 h-[40px] flex items-center justify-center bg-muted/30 rounded-lg border border-border/50">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="text-sm font-medium"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// 6. LAYOUT MAGIC (Structure)
function LayoutMagic() {
  return (
    <div className="mt-4 flex gap-1.5 justify-center opacity-80">
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        className="w-12 h-16 rounded border bg-background shadow-sm"
      />
      <div className="space-y-1.5">
        <motion.div
          animate={{ scale: [1, 0.95, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="w-12 h-8 rounded border bg-primary/10"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="w-12 h-6 rounded border bg-muted"
        />
      </div>
    </div>
  );
}

// Map IDs to components
const MAGIC_MAP: Record<string, React.ComponentType> = {
  'scale-paywall': CarouselMagic,
  'real-time-changes': SyncMagic,
  'ab-testing': ABTestMagic,
  'customizable-structure': LayoutMagic,
  'flexible-adjustments': SlidersMagic,
  'localization': LocalizationMagic,
};

function MagicArea({ id }: { id: string }) {
  const Component = MAGIC_MAP[id];
  if (!Component) return null;
  return <Component />;
}

function GridFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-24 relative z-10">
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
      <div className="container py-24 relative z-10">
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
                  <div className={cn(
                    "relative h-full rounded-xl border bg-gradient-to-br from-primary/5 to-background border-primary/20 transition-all duration-200 cursor-pointer group flex flex-col",
                    isHovered && "border-primary/50",
                    index === 0 && "min-h-[300px]"
                  )}>
                    <div className="p-8 pb-0 flex-1">
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
                      <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>

                    {/* Magic Area at Bottom - No Active Badge anymore */}
                    <div className="relative z-10">
                      <MagicArea id={feature.id} />
                    </div>
                  </div>
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
                  <div className={cn(
                    "relative h-full rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-150 cursor-pointer group flex flex-col",
                    isHovered && "border-primary/30"
                  )}>
                    <div className="p-6 flex-1">
                      <div className="flex flex-col gap-4">
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: isHovered ? 1.1 : 1,
                            rotate: isHovered ? 3 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary self-start"
                        >
                          <Icon className="size-5" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Magic Area */}
                    <div className="px-6 pb-6 relative z-10">
                      <MagicArea id={feature.id} />
                    </div>
                  </div>
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
      <div className="container py-24 relative z-10">
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
                      "relative h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200 cursor-pointer group",
                      isHovered && "border-primary/40"
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
