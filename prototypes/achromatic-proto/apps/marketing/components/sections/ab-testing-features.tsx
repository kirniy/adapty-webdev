'use client';

import * as React from 'react';
import {
  BarChart3Icon,
  BrainCircuitIcon,
  ChevronRightIcon,
  FlaskConicalIcon,
  GlobeIcon,
  LinkIcon,
  PlayIcon,
  SlidersHorizontalIcon,
  TargetIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';

// MATCHES ADAPTY.IO CONTENT EXACTLY
const FEATURES = [
  {
    id: 'abc-testing',
    icon: FlaskConicalIcon,
    title: 'A/B/C testing',
    description:
      'Compare several paywalls simultaneously. Test multiple variants at once to find the winning combination faster.',
    category: 'testing'
  },
  {
    id: 'metrics',
    icon: BarChart3Icon,
    title: '20+ metrics calculated automatically',
    description:
      'Track conversion rates, ARPU, LTV, trial starts, and more. All metrics are calculated in real-time without manual work.',
    category: 'analytics'
  },
  {
    id: 'bayesian',
    icon: BrainCircuitIcon,
    title: 'Bayesian statistics',
    description:
      'Our machine learning algorithms use Bayesian statistics to determine winners with high confidence and statistical significance.',
    category: 'analytics'
  },
  {
    id: 'control',
    icon: PlayIcon,
    title: 'Start and stop tests anytime',
    description:
      'Full control over your experiments. Pause, resume, or stop tests whenever you need without losing data.',
    category: 'testing'
  },
  {
    id: 'targeting',
    icon: TargetIcon,
    title: 'Audience targeting',
    description:
      'Run tests for specific user segments based on country, subscription status, custom attributes, and more.',
    category: 'targeting'
  },
  {
    id: 'traffic',
    icon: SlidersHorizontalIcon,
    title: 'Traffic allocation',
    description:
      'Control how much traffic each variant receives. Start with small percentages and scale up winning variants.',
    category: 'testing'
  },
  {
    id: 'localization',
    icon: GlobeIcon,
    title: 'Localization testing',
    description:
      'Test different paywall designs and copy for different locales. Find what works best in each market.',
    category: 'localization'
  },
  {
    id: 'integration',
    icon: LinkIcon,
    title: 'Seamless integration',
    description:
      'Works with Paywall Builder and Remote Config. No additional setup required to start testing.',
    category: 'integration'
  }
];

const CATEGORIES = [
  'all',
  'testing',
  'analytics',
  'targeting',
  'localization',
  'integration'
] as const;
type Category = (typeof CATEGORIES)[number];

// Related features from adapty.io/paywall-ab-testing
const RELATED_FEATURES = [
  {
    name: 'Remote Config',
    description: 'Update app behavior without releases'
  },
  { name: 'Localize', description: 'Translate paywalls for any locale' },
  {
    name: 'Targeting',
    description: 'Show different paywalls to different users'
  },
  { name: 'Paywall Builder', description: 'Create paywalls without coding' }
];

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// 1. A/B/C TESTING MAGIC - Enhanced with winner animation
function ABCMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [winner, setWinner] = React.useState(1);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setWinner((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 flex gap-3 justify-center items-end h-[60px]">
        {['A', 'B', 'C'].map((variant, i) => (
          <div
            key={variant}
            className={cn(
              'w-12 h-[60%] rounded-t-md border border-b-0 flex items-center justify-center text-xs font-bold',
              i === 1
                ? 'bg-primary/20 border-primary/50 text-primary'
                : 'bg-muted/50 border-border'
            )}
          >
            {variant}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 flex gap-3 justify-center items-end h-[60px]">
      {['A', 'B', 'C'].map((variant, i) => (
        <motion.div
          key={variant}
          animate={{
            height: winner === i ? '100%' : '45%',
            opacity: winner === i ? 1 : 0.5
          }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
          className={cn(
            'w-12 rounded-t-md border border-b-0 flex items-center justify-center text-xs font-bold relative overflow-hidden',
            winner === i
              ? 'bg-primary/20 border-primary/50 text-primary'
              : 'bg-muted/50 border-border'
          )}
        >
          {variant}
          {winner === i && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// 2. METRICS MAGIC - Enhanced with real metric names
function MetricsMagic() {
  const shouldReduceMotion = useReducedMotion();
  const metrics = [
    { label: 'Conv.', value: '+12%', width: 75 },
    { label: 'ARPU', value: '+8%', width: 60 }
  ];

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 grid grid-cols-2 gap-2">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="bg-background/50 rounded p-2 border flex flex-col gap-1"
          >
            <div className="text-[9px] text-muted-foreground">{m.label}</div>
            <div className="h-1.5 bg-muted rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${m.width}%` }}
              />
            </div>
            <div className="text-[9px] font-mono text-primary text-right">
              {m.value}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="bg-background/50 rounded p-2 border flex flex-col gap-1"
        >
          <div className="text-[9px] text-muted-foreground">{m.label}</div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              animate={{
                width: [
                  '0%',
                  `${m.width}%`,
                  `${m.width - 10}%`,
                  `${m.width + 5}%`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              className="h-full bg-primary rounded-full"
            />
          </div>
          <div className="flex justify-between items-end mt-1">
            <div className="h-3 w-8 bg-muted/30 rounded" />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[9px] font-mono text-primary"
            >
              {m.value}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}

// 3. BAYESIAN MAGIC - Enhanced with confidence building
function BayesianMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [confidence, setConfidence] = React.useState(75);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setConfidence((prev) => {
        if (prev >= 99) return 75;
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 relative h-[50px] w-full flex items-end justify-center px-4">
        <div className="absolute bottom-0 left-[20%] w-[30%] h-[80%] bg-muted rounded-t-full blur-sm opacity-30" />
        <div className="absolute bottom-0 right-[20%] w-[30%] h-full bg-primary/20 border-t-2 border-primary rounded-t-full" />
        <div className="absolute top-0 right-[35%] bg-primary text-[9px] text-white px-1.5 py-0.5 rounded-full">
          99%
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 relative h-[50px] w-full flex items-end justify-center px-4">
      {/* Curve 1 - Loser */}
      <motion.div
        animate={{ opacity: 0.3, scaleY: [0.8, 0.9, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-0 left-[20%] w-[30%] h-full bg-muted rounded-t-full blur-sm origin-bottom"
      />
      {/* Curve 2 - Winner */}
      <motion.div
        animate={{ scaleY: [0.9, 1.1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-0 right-[20%] w-[30%] h-full bg-primary/20 border-t-2 border-primary rounded-t-full origin-bottom"
      />
      <motion.div
        animate={{ y: [0, -3, 0], scale: confidence >= 95 ? [1, 1.1, 1] : 1 }}
        transition={{ duration: 1, repeat: Infinity }}
        className={cn(
          'absolute top-0 right-[35%] text-[9px] text-white px-1.5 py-0.5 rounded-full',
          confidence >= 95 ? 'bg-primary' : 'bg-muted'
        )}
      >
        {Math.min(confidence, 99)}%
      </motion.div>
    </div>
  );
}

// 4. CONTROL MAGIC - Enhanced with state transitions
function ControlMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [state, setState] = React.useState<'playing' | 'paused' | 'stopped'>(
    'playing'
  );

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setState((prev) => {
        if (prev === 'playing') return 'paused';
        if (prev === 'paused') return 'stopped';
        return 'playing';
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="mt-4 flex justify-center gap-4 items-center">
        <button className="size-8 rounded-full bg-muted flex items-center justify-center opacity-50">
          <div className="size-3 bg-foreground rounded-[1px]" />
        </button>
        <button className="size-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground ">
          <PlayIcon className="size-4 fill-current" />
        </button>
        <button className="size-8 rounded-full bg-muted flex items-center justify-center opacity-50">
          <div className="size-3 bg-foreground rounded-full" />
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4 flex justify-center gap-4 items-center">
      {/* Stop button */}
      <motion.div
        animate={{
          opacity: state === 'stopped' ? 1 : 0.5,
          scale: state === 'stopped' ? 1.1 : 1
        }}
        className={cn(
          'size-8 rounded-full flex items-center justify-center transition-colors',
          state === 'stopped' ? 'bg-red-500/20' : 'bg-muted'
        )}
      >
        <div
          className={cn(
            'size-3 rounded-[1px]',
            state === 'stopped' ? 'bg-red-500' : 'bg-foreground'
          )}
        />
      </motion.div>

      {/* Play/Pause button */}
      <motion.div
        animate={{
          scale: state === 'playing' ? [1, 1.1, 1] : 1,
          boxShadow:
            state === 'playing'
              ? [
                  '0 0 0 0px rgba(0,0,0,0)',
                  '0 0 0 4px rgba(var(--primary), 0.2)',
                  '0 0 0 0px rgba(0,0,0,0)'
                ]
              : '0 0 0 0px rgba(0,0,0,0)'
        }}
        transition={{
          duration: 1.5,
          repeat: state === 'playing' ? Infinity : 0
        }}
        className={cn(
          'size-10 rounded-full flex items-center justify-center ',
          state === 'playing'
            ? 'bg-primary'
            : state === 'paused'
              ? 'bg-amber-500'
              : 'bg-muted'
        )}
      >
        {state === 'paused' ? (
          <div className="flex gap-0.5">
            <div className="w-1 h-4 bg-white rounded-sm" />
            <div className="w-1 h-4 bg-white rounded-sm" />
          </div>
        ) : (
          <PlayIcon
            className={cn(
              'size-4',
              state === 'playing'
                ? 'text-primary-foreground fill-current'
                : 'text-foreground'
            )}
          />
        )}
      </motion.div>

      {/* Reset button */}
      <div className="size-8 rounded-full bg-muted flex items-center justify-center opacity-50">
        <div className="size-3 bg-foreground rounded-full" />
      </div>
    </div>
  );
}

// 5. TARGETING MAGIC
function TargetingMagic() {
  return (
    <div className="mt-4 flex justify-center items-center gap-2">
      <div className="flex -space-x-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="size-6 rounded-full bg-muted border-2 border-background"
          />
        ))}
      </div>
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronRightIcon className="size-4 text-muted-foreground" />
      </motion.div>
      <div className="h-8 px-3 rounded-md border border-primary/30 bg-primary/5 flex items-center gap-2">
        <span className="text-[10px] font-medium text-primary">Verified</span>
      </div>
    </div>
  );
}

// 6. TRAFFIC MAGIC
function TrafficMagic() {
  return (
    <div className="mt-4 space-y-3 w-full px-2">
      <div className="space-y-1">
        <div className="flex justify-between text-[9px] text-muted-foreground">
          <span>A: Control</span>
          <span>20%</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full">
          <motion.div
            animate={{ width: ['50%', '20%', '20%'] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 1] }}
            className="h-full bg-muted-foreground rounded-full"
          />
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-[9px] text-primary font-medium">
          <span>B: New Pricing</span>
          <span>80%</span>
        </div>
        <div className="h-1.5 w-full bg-primary/20 rounded-full">
          <motion.div
            animate={{ width: ['50%', '80%', '80%'] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 1] }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

// 7. LOCALIZATION MAGIC
function LocalizationMagic() {
  const WORDS = ['Price', 'Prix', 'Preis', 'Precio'];
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
          {WORDS[index]} $9.99
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// 8. INTEGRATION MAGIC
function IntegrationMagic() {
  return (
    <div className="mt-4 flex justify-center items-center gap-3 opacity-80">
      <div className="size-8 rounded-lg bg-background border flex items-center justify-center">
        <div className="size-4 bg-primary/20 rounded-full" />
      </div>
      <div className="flex gap-0.5">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            className="size-1 rounded-full bg-primary"
          />
        ))}
      </div>
      <div className="size-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
        <LinkIcon className="size-4 text-primary" />
      </div>
    </div>
  );
}

const MAGIC_MAP: Record<string, React.ComponentType> = {
  'abc-testing': ABCMagic,
  metrics: MetricsMagic,
  bayesian: BayesianMagic,
  control: ControlMagic,
  targeting: TargetingMagic,
  traffic: TrafficMagic,
  localization: LocalizationMagic,
  integration: IntegrationMagic
};

function MagicArea({ id }: { id: string }) {
  const Component = MAGIC_MAP[id];
  if (!Component) return <div className="mt-8" />; // Spacer fallback
  return <Component />;
}

// =============================================================================
// VARIANT: GRID - Classic 2-column grid of cards with magic animations
// =============================================================================

function GridFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-16 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need for paywall experiments"
            description="Powerful A/B testing tools designed specifically for subscription apps."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, index) => (
            <BlurFade
              key={feature.id}
              delay={0.1 + index * 0.02}
            >
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: hoveredIndex === index ? -8 : 0,
                        scale: hoveredIndex === index ? 1.02 : 1
                      }
                }
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                className={cn(
                  'group relative h-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm transition-all duration-150 ease-out cursor-pointer',
                  hoveredIndex === index && 'border-primary/50 '
                )}
              >
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: hoveredIndex === index ? 1.15 : 1,
                              rotate: hoveredIndex === index ? 8 : 0
                            }
                      }
                      transition={{
                        type: 'spring',
                        duration: 0.3,
                        bounce: 0.2
                      }}
                      className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    >
                      <feature.icon className="size-6" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Magic animation area */}
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <MagicArea id={feature.id} />
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
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
  const featured = FEATURES.slice(0, 2);
  const regular = FEATURES.slice(2);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-16 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need for paywall experiments"
            description="Powerful A/B testing tools designed specifically for subscription apps."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured cards - span 2 cols on lg */}
          {featured.map((feature, index) => (
            <BlurFade
              key={feature.id}
              delay={0.1 + index * 0.05}
            >
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: hoveredIndex === index ? -6 : 0,
                        scale: hoveredIndex === index ? 1.01 : 1
                      }
                }
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                className={cn('lg:col-span-1', index === 0 && 'lg:row-span-2')}
              >
                <div
                  className={cn(
                    'relative h-full rounded-xl border bg-gradient-to-br from-primary/5 to-background border-primary/20 transition-all duration-200 cursor-pointer group flex flex-col',
                    hoveredIndex === index && 'border-primary/50',
                    index === 0 && 'min-h-[300px]'
                  )}
                >
                  <div className="p-8 h-full flex flex-col">
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: hoveredIndex === index ? 1.15 : 1,
                              rotate: hoveredIndex === index ? 5 : 0
                            }
                      }
                      transition={{
                        type: 'spring',
                        duration: 0.3,
                        bounce: 0.2
                      }}
                      className={cn(
                        'flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 transition-colors',
                        hoveredIndex === index && 'bg-primary/20'
                      )}
                    >
                      <feature.icon className="size-7" />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {feature.description}
                    </p>

                    {/* Magic Area */}
                    <div className="mt-auto pt-6">
                      <MagicArea id={feature.id} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}

          {/* Regular cards */}
          {regular.map((feature, index) => (
            <BlurFade
              key={feature.id}
              delay={0.15 + index * 0.03}
            >
              <motion.div
                onMouseEnter={() => setHoveredIndex(index + featured.length)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: hoveredIndex === index + featured.length ? -4 : 0
                      }
                }
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <div
                  className={cn(
                    'relative h-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-150 cursor-pointer group flex flex-col',
                    hoveredIndex === index + featured.length &&
                      'border-primary/30 '
                  )}
                >
                  <div className="p-6 relative z-10 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 flex-1">
                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale:
                                  hoveredIndex === index + featured.length
                                    ? 1.1
                                    : 1,
                                rotate:
                                  hoveredIndex === index + featured.length
                                    ? 3
                                    : 0
                              }
                        }
                        transition={{
                          type: 'spring',
                          duration: 0.2,
                          bounce: 0.2
                        }}
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                      >
                        <feature.icon className="size-5" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Magic Area */}
                    <div className="mt-4 pt-2 border-t border-border/30">
                      <MagicArea id={feature.id} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
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

  const filteredFeatures =
    activeCategory === 'all'
      ? FEATURES
      : FEATURES.filter((f) => f.category === activeCategory);

  const categoryLabels: Record<Category, string> = {
    all: 'All Features',
    testing: 'Testing',
    analytics: 'Analytics',
    targeting: 'Targeting',
    localization: 'Localization',
    integration: 'Integration'
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-16 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need for paywall experiments"
            description="Powerful A/B testing tools designed specifically for subscription apps."
          />
        </BlurFade>

        {/* Category tabs */}
        <BlurFade delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150',
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                )}
              >
                {categoryLabels[category]}
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Features grid with animation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                layout
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.9 }
                }
                animate={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
                }
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.2, delay: index * 0.02 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className={cn(
                    'h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-150 cursor-pointer',
                    hoveredIndex === index && 'border-primary/50 -translate-y-1'
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  scale: hoveredIndex === index ? 1.1 : 1
                                }
                          }
                          transition={{
                            type: 'spring',
                            duration: 0.2,
                            bounce: 0.2
                          }}
                          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                        >
                          <feature.icon className="size-5" />
                        </motion.div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {categoryLabels[feature.category as Category]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type ABTestingFeaturesVariant = 'grid' | 'bento' | 'tabs';

type Props = {
  variant?: ABTestingFeaturesVariant;
};

export function ABTestingFeatures({
  variant = 'grid'
}: Props): React.JSX.Element {
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
