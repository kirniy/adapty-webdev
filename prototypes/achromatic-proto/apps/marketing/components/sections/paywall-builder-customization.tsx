'use client';

import * as React from 'react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LayoutIcon,
  MousePointerClickIcon,
  PaletteIcon,
  SlidersIcon,
  TagIcon,
  TypeIcon,
  type LucideIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { Spotlight } from '~/components/fragments/spotlight';
import { paywallBuilderContent } from '~/lib/content';

// =============================================================================
// ANIMATION CONSTANTS - Emil Kowalski Principles
// =============================================================================
const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const ANIMATION = {
  card: {
    duration: 0.35,
    ease: EASE_OUT_QUART
  },
  icon: {
    duration: 0.4,
    ease: EASE_OUT_EXPO
  },
  expand: {
    duration: 0.3,
    ease: EASE_OUT_QUART
  },
  stagger: {
    base: 0.05,
    multiplier: 0.03
  }
};

// =============================================================================
// ICON MAPPING
// =============================================================================
const ICON_MAP: Record<string, LucideIcon> = {
  Layout: LayoutIcon,
  Type: TypeIcon,
  MousePointerClick: MousePointerClickIcon,
  Palette: PaletteIcon,
  Sliders: SlidersIcon,
  Tag: TagIcon
};

const CUSTOMIZATION_FEATURES = paywallBuilderContent.customization.items.map(
  (item) => ({
    ...item,
    icon: ICON_MAP[item.icon] || LayoutIcon
  })
);

// =============================================================================
// CONTENT
// =============================================================================
const { customization } = paywallBuilderContent;

// Magic animation: Customization options counter
function CustomizationMagic() {
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
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.3, 1]
              }
        }
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <span>{CUSTOMIZATION_FEATURES.length} options</span>
    </motion.div>
  );
}

// =============================================================================
// SHARED COMPONENTS
// =============================================================================

type CustomizationCardProps = {
  icon: string;
  title: string;
  description: string;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  shouldReduceMotion: boolean | null;
};

function CustomizationCard({
  icon,
  title,
  description,
  index,
  isHovered,
  onHover,
  shouldReduceMotion
}: CustomizationCardProps) {
  const IconComponent = ICON_MAP[icon] || LayoutIcon;

  return (
    <motion.div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: isHovered ? -6 : 0
            }
      }
      transition={{
        duration: ANIMATION.card.duration,
        ease: ANIMATION.card.ease
      }}
      className="group relative h-full"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-foreground/5 to-transparent opacity-0 transition-opacity"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div
        className={cn(
          'relative h-full rounded-2xl border bg-background/60 backdrop-blur-sm p-6 transition-all duration-200 overflow-hidden',
          isHovered ? 'border-foreground/20  ' : 'border-border/50'
        )}
      >
        <Spotlight
          className="from-primary/15 via-primary/5 to-transparent"
          size={200}
        />
        {isHovered && (
          <BorderBeam
            size={120}
            duration={8}
            borderWidth={1.5}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--primary)/0)"
          />
        )}
        {/* Icon with micro-interaction */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 6 : 0
                }
          }
          transition={{
            duration: ANIMATION.icon.duration,
            ease: ANIMATION.icon.ease
          }}
          className={cn(
            'mb-4 flex size-12 items-center justify-center rounded-xl transition-colors duration-200 relative z-10',
            isHovered
              ? 'bg-foreground text-background'
              : 'bg-muted/50 text-foreground'
          )}
        >
          <IconComponent
            className="size-6"
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Content */}
        <h3 className="mb-2 text-lg font-semibold tracking-tight relative z-10">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground relative z-10">
          {description}
        </p>

        {/* Subtle indicator line */}
        <motion.div
          className="mt-4 h-px bg-gradient-to-r from-foreground/20 to-transparent relative z-10"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
        />
      </div>
    </motion.div>
  );
}

// =============================================================================
// VARIANT: GRID - 3-column grid with staggered animations
// =============================================================================
function GridCustomization() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container relative z-10 py-20">
        <Spotlight
          className="from-primary/15 via-primary/5 to-transparent"
          size={350}
        />
        <BlurFade delay={ANIMATION.stagger.base}>
          <SiteHeading
            title={customization.headline}
            description={customization.description}
          />
          <div className="mt-4 flex justify-center">
            <CustomizationMagic />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CUSTOMIZATION_FEATURES.map((item, index) => (
            <BlurFade
              key={item.id}
              delay={
                ANIMATION.stagger.base * 2 +
                index * ANIMATION.stagger.multiplier
              }
            >
              <CustomizationCard
                icon={item.icon.displayName || 'LayoutIcon'} // Pass icon name or default
                title={item.title}
                description={item.description}
                index={index}
                isHovered={hoveredIndex === index}
                onHover={setHoveredIndex}
                shouldReduceMotion={shouldReduceMotion}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: CAROUSEL - Horizontally scrolling with navigation
// =============================================================================
function CarouselCustomization() {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = React.useState<number | null>(
    null
  );

  const itemsPerView = 3;
  const maxIndex = Math.max(0, CUSTOMIZATION_FEATURES.length - itemsPerView);

  const goNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const goPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  // Auto-advance when not hovered
  React.useEffect(() => {
    if (isHovered || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex, shouldReduceMotion]);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container relative z-10 py-20">
        <Spotlight
          className="from-primary/15 via-primary/5 to-transparent"
          size={350}
        />
        <BlurFade delay={ANIMATION.stagger.base}>
          <SiteHeading
            title={customization.headline}
            description={customization.description}
          />
          <div className="mt-4 flex justify-center">
            <CustomizationMagic />
          </div>
        </BlurFade>

        <BlurFade delay={ANIMATION.stagger.base * 2}>
          <div
            className="relative mt-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Navigation buttons */}
            <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2">
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                onClick={goPrev}
                disabled={currentIndex === 0}
                className={cn(
                  'flex size-11 items-center justify-center rounded-full border bg-background  transition-all',
                  currentIndex === 0
                    ? 'cursor-not-allowed opacity-40'
                    : 'hover:border-foreground/20 hover:'
                )}
              >
                <ChevronLeftIcon className="size-5" />
              </motion.button>
            </div>

            <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2">
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                onClick={goNext}
                disabled={currentIndex >= maxIndex}
                className={cn(
                  'flex size-11 items-center justify-center rounded-full border bg-background  transition-all',
                  currentIndex >= maxIndex
                    ? 'cursor-not-allowed opacity-40'
                    : 'hover:border-foreground/20 hover:'
                )}
              >
                <ChevronRightIcon className="size-5" />
              </motion.button>
            </div>

            {/* Cards container */}
            <div className="overflow-hidden px-2">
              <motion.div
                animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                transition={{
                  duration: 0.5,
                  ease: EASE_OUT_QUART
                }}
                className="flex gap-6"
              >
                {CUSTOMIZATION_FEATURES.map((item, index) => {
                  const IconComponent = item.icon;
                  const isCardHovered = hoveredCardIndex === index;

                  return (
                    <motion.div
                      key={item.id}
                      className="w-[calc(33.333%-16px)] flex-shrink-0"
                      onMouseEnter={() => setHoveredCardIndex(index)}
                      onMouseLeave={() => setHoveredCardIndex(null)}
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { y: isCardHovered ? -8 : 0 }
                      }
                      transition={{
                        duration: ANIMATION.card.duration,
                        ease: ANIMATION.card.ease
                      }}
                    >
                      <div
                        className={cn(
                          'h-full rounded-2xl border bg-background/60 backdrop-blur-sm p-6 transition-all duration-200 overflow-hidden relative',
                          isCardHovered
                            ? 'border-foreground/20 '
                            : 'border-border/50'
                        )}
                      >
                        <Spotlight
                          className="from-primary/15 via-primary/5 to-transparent"
                          size={200}
                        />
                        {isCardHovered && (
                          <BorderBeam
                            size={120}
                            duration={8}
                            borderWidth={1.5}
                            colorFrom="hsl(var(--primary))"
                            colorTo="hsl(var(--primary)/0)"
                          />
                        )}
                        <motion.div
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  scale: isCardHovered ? 1.1 : 1,
                                  rotate: isCardHovered ? 6 : 0
                                }
                          }
                          transition={{
                            duration: ANIMATION.icon.duration,
                            ease: ANIMATION.icon.ease
                          }}
                          className={cn(
                            'mb-4 flex size-14 items-center justify-center rounded-xl transition-colors duration-200 relative z-10',
                            isCardHovered
                              ? 'bg-foreground text-background'
                              : 'bg-muted/50 text-foreground'
                          )}
                        >
                          <IconComponent
                            className="size-7"
                            strokeWidth={1.5}
                          />
                        </motion.div>
                        <h3 className="mb-2 text-lg font-semibold relative z-10">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground relative z-10">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Progress indicators */}
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="relative h-1.5 overflow-hidden rounded-full"
                  animate={{
                    width: currentIndex === index ? 32 : 8,
                    backgroundColor:
                      currentIndex === index
                        ? 'hsl(var(--foreground))'
                        : 'hsl(var(--muted-foreground) / 0.3)'
                  }}
                  transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
                />
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: EXPANDABLE - Accordion with split layout
// =============================================================================
// =============================================================================
// VARIANT: EXPANDABLE - Accordion with split layout
// =============================================================================
function ExpandableCustomization() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container relative z-10 py-20">
        <Spotlight
          className="from-primary/15 via-primary/5 to-transparent"
          size={350}
        />
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: Sticky heading */}
          <div className="lg:sticky lg:top-24">
            <BlurFade delay={ANIMATION.stagger.base}>
              <div className="flex flex-col gap-4">
                <h2 className="text-pretty text-3xl font-bold sm:text-4xl lg:text-5xl">
                  {paywallBuilderContent.customization.headline}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {paywallBuilderContent.customization.description} Click each
                  option to learn more.
                </p>
                <div className="mt-2">
                  <CustomizationMagic />
                </div>
              </div>
            </BlurFade>

            {/* Visual indicator showing which item is selected */}
            <BlurFade delay={ANIMATION.stagger.base * 2}>
              <div className="mt-8 hidden lg:block">
                <div className="flex gap-2">
                  {customization.items.map((_, index) => (
                    <motion.div
                      key={index}
                      className="h-1 rounded-full"
                      animate={{
                        width: expandedIndex === index ? 40 : 12,
                        backgroundColor:
                          expandedIndex === index
                            ? 'hsl(var(--primary))'
                            : 'hsl(var(--muted-foreground) / 0.2)'
                      }}
                      transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
                    />
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right: Expandable items */}
          <div className="space-y-3">
            {CUSTOMIZATION_FEATURES.map((item, index) => {
              const IconComponent = item.icon;
              const isExpanded = expandedIndex === index;

              return (
                <BlurFade
                  key={item.id}
                  delay={
                    ANIMATION.stagger.base * 2 +
                    index * ANIMATION.stagger.multiplier
                  }
                >
                  <motion.div
                    layout={!shouldReduceMotion}
                    initial={false}
                    animate={{
                      borderColor: isExpanded
                        ? 'hsl(var(--primary) / 0.3)'
                        : 'hsl(var(--border) / 0.5)',
                      backgroundColor: isExpanded
                        ? 'hsl(var(--background) / 0.8)'
                        : 'hsl(var(--background) / 0.4)',
                      boxShadow: isExpanded
                        ? '0 10px 30px -10px hsl(var(--primary) / 0.1)'
                        : 'none'
                    }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      'overflow-hidden rounded-xl border backdrop-blur-sm transition-all'
                    )}
                  >
                    <motion.button
                      onClick={() => toggleExpanded(index)}
                      className="flex w-full items-center gap-4 p-5 text-left focus:outline-none"
                    >
                      {/* Icon */}
                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: isExpanded ? 1.1 : 1,
                                rotate: isExpanded ? 6 : 0
                              }
                        }
                        transition={{
                          duration: ANIMATION.icon.duration,
                          ease: ANIMATION.icon.ease
                        }}
                        className={cn(
                          'flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200',
                          isExpanded
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted/50 text-foreground'
                        )}
                      >
                        <IconComponent
                          className="size-5"
                          strokeWidth={1.5}
                        />
                      </motion.div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <h3
                          className={cn(
                            'font-semibold tracking-tight transition-colors',
                            isExpanded && 'text-primary'
                          )}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={cn(
                            'line-clamp-1 text-sm text-muted-foreground',
                            isExpanded && 'line-clamp-none'
                          )}
                        >
                          {item.description}
                        </p>
                      </div>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{
                          duration: ANIMATION.expand.duration,
                          ease: ANIMATION.expand.ease
                        }}
                        className="shrink-0"
                      >
                        <ChevronDownIcon
                          className={cn(
                            'size-5 transition-colors',
                            isExpanded
                              ? 'text-primary'
                              : 'text-muted-foreground'
                          )}
                        />
                      </motion.div>
                    </motion.button>

                    {/* Expandable content */}
                    <AnimatePresence mode="wait">
                      {isExpanded && (
                        <motion.div
                          initial={
                            shouldReduceMotion
                              ? { opacity: 0 }
                              : { height: 0, opacity: 0 }
                          }
                          animate={
                            shouldReduceMotion
                              ? { opacity: 1 }
                              : { height: 'auto', opacity: 1 }
                          }
                          exit={
                            shouldReduceMotion
                              ? { opacity: 0 }
                              : { height: 0, opacity: 0 }
                          }
                          transition={{
                            duration: ANIMATION.expand.duration,
                            ease: ANIMATION.expand.ease
                          }}
                        >
                          <div className="px-5 pb-5">
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className="ml-[60px] pl-4 border-l-2 border-primary/10"
                            >
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {item.details}
                              </p>
                              {/* Imaginary interactive preview could go here */}
                              <div className="mt-4 flex gap-2">
                                <Badge
                                  variant="outline"
                                  className="text-[10px] opacity-70"
                                >
                                  Feature Preview
                                </Badge>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type PaywallBuilderCustomizationVariant =
  | 'grid'
  | 'carousel'
  | 'expandable';

type Props = {
  variant?: PaywallBuilderCustomizationVariant;
};

export function PaywallBuilderCustomization({
  variant = 'grid'
}: Props): React.JSX.Element {
  switch (variant) {
    case 'carousel':
      return <CarouselCustomization />;
    case 'expandable':
      return <ExpandableCustomization />;
    case 'grid':
    default:
      return <GridCustomization />;
  }
}
