'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  CheckIcon,
  XIcon,
  BarChart3Icon,
  BanknoteIcon,
  LayoutDashboardIcon,
  BrainCircuitIcon,
  ScaleIcon,
  RocketIcon,
  ArrowRightIcon,
  ZapIcon,
  TrendingUpIcon,
  TargetIcon,
  FlaskConicalIcon,
  LineChartIcon,
  SparklesIcon,
  DatabaseIcon,
  BeakerIcon,
  ChartBarIcon,
  LightbulbIcon,
  CpuIcon,
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { BorderBeam } from '~/components/fragments/border-beam';
import { Spotlight } from '~/components/fragments/spotlight';
import { SectionBackground } from '~/components/fragments/section-background';

import { Button, buttonVariants } from '@workspace/ui/components/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@workspace/ui/components/accordion';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// AI Brain analyzing data - neurons pulsing with insights
function AIBrainMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNeuron, setActiveNeuron] = React.useState(0);

  const neurons = [
    { x: 50, y: 25, label: 'Analyze' },
    { x: 25, y: 50, label: 'Learn' },
    { x: 75, y: 50, label: 'Predict' },
    { x: 50, y: 75, label: 'Optimize' },
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveNeuron((prev) => (prev + 1) % neurons.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, neurons.length]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center h-24">
        <BrainCircuitIcon className="size-12 text-primary" />
      </div>
    );
  }

  return (
    <div className="relative h-24 w-full">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Connection lines */}
        <motion.line x1="50" y1="25" x2="25" y2="50" stroke="currentColor" strokeWidth="1" className="text-border" />
        <motion.line x1="50" y1="25" x2="75" y2="50" stroke="currentColor" strokeWidth="1" className="text-border" />
        <motion.line x1="25" y1="50" x2="50" y2="75" stroke="currentColor" strokeWidth="1" className="text-border" />
        <motion.line x1="75" y1="50" x2="50" y2="75" stroke="currentColor" strokeWidth="1" className="text-border" />

        {/* Neurons */}
        {neurons.map((neuron, index) => (
          <g key={index}>
            <motion.circle
              cx={neuron.x}
              cy={neuron.y}
              r={activeNeuron === index ? 8 : 5}
              className={activeNeuron === index ? 'fill-primary' : 'fill-muted-foreground/30'}
              animate={{ scale: activeNeuron === index ? [1, 1.3, 1] : 1 }}
              transition={{ duration: 0.6 }}
            />
            {activeNeuron === index && (
              <motion.circle
                cx={neuron.x}
                cy={neuron.y}
                r="12"
                className="fill-none stroke-primary"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0.8, 0], scale: [1, 2] }}
                transition={{ duration: 0.8 }}
              />
            )}
          </g>
        ))}
      </svg>
      <motion.div
        className="absolute inset-x-0 bottom-0 text-center text-xs font-medium text-primary"
        key={activeNeuron}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
      >
        {neurons[activeNeuron].label}
      </motion.div>
    </div>
  );
}

// Data flow visualization - market data streaming in
function DataFlowMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [particles, setParticles] = React.useState<number[]>([0, 1, 2, 3]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center h-24">
        <DatabaseIcon className="size-12 text-primary" />
      </div>
    );
  }

  return (
    <div className="relative h-24 w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between px-4">
        {/* Source: Multiple apps */}
        <div className="flex flex-col gap-1">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-sm bg-muted-foreground/30"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Flow particles */}
        {particles.map((id) => (
          <motion.div
            key={id}
            className="absolute size-2 rounded-full bg-primary"
            initial={{ left: '10%', opacity: 0 }}
            animate={{ left: '85%', opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2,
              delay: id * 0.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Destination: Autopilot */}
        <motion.div
          className="size-10 rounded-lg bg-primary/20 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <BrainCircuitIcon className="size-5 text-primary" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 inset-x-0 text-center text-xs text-muted-foreground">
        15K+ apps feeding insights
      </div>
    </div>
  );
}

// Experiment runner - A/B test visualization with winner
function ExperimentMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = React.useState<'running' | 'analyzing' | 'winner'>('running');
  const [variantA, setVariantA] = React.useState(45);
  const [variantB, setVariantB] = React.useState(38);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setPhase((prev) => {
        if (prev === 'running') return 'analyzing';
        if (prev === 'analyzing') return 'winner';
        // Reset for next cycle
        setVariantA(Math.floor(Math.random() * 20) + 40);
        setVariantB(Math.floor(Math.random() * 20) + 30);
        return 'running';
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center h-24">
        <FlaskConicalIcon className="size-12 text-primary" />
      </div>
    );
  }

  return (
    <div className="relative h-24 w-full">
      <div className="flex items-end justify-center gap-6 h-20">
        {/* Variant A */}
        <div className="flex flex-col items-center gap-1">
          <motion.div
            className={`w-8 rounded-t ${phase === 'winner' && variantA > variantB ? 'bg-emerald-500' : 'bg-blue-500'}`}
            animate={{ height: `${variantA}%` }}
            transition={{ type: 'spring', bounce: 0.2 }}
          />
          <span className="text-xs font-medium">A</span>
        </div>

        {/* VS */}
        <motion.div
          className="text-xs text-muted-foreground font-medium"
          animate={{ scale: phase === 'analyzing' ? [1, 1.2, 1] : 1 }}
        >
          VS
        </motion.div>

        {/* Variant B */}
        <div className="flex flex-col items-center gap-1">
          <motion.div
            className={`w-8 rounded-t ${phase === 'winner' && variantB > variantA ? 'bg-emerald-500' : 'bg-purple-500'}`}
            animate={{ height: `${variantB}%` }}
            transition={{ type: 'spring', bounce: 0.2 }}
          />
          <span className="text-xs font-medium">B</span>
        </div>
      </div>

      {/* Phase indicator */}
      <motion.div
        className="absolute bottom-0 inset-x-0 text-center text-xs font-medium"
        key={phase}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {phase === 'running' && <span className="text-blue-500">Running...</span>}
        {phase === 'analyzing' && <span className="text-amber-500">Analyzing...</span>}
        {phase === 'winner' && <span className="text-emerald-500">Winner: {variantA > variantB ? 'A' : 'B'}!</span>}
      </motion.div>
    </div>
  );
}

// Benchmark comparison - your app vs market
function BenchmarkMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [yourScore, setYourScore] = React.useState(65);
  const [marketAvg, setMarketAvg] = React.useState(50);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setYourScore(Math.floor(Math.random() * 30) + 60);
      setMarketAvg(Math.floor(Math.random() * 15) + 45);
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center h-24">
        <ScaleIcon className="size-12 text-primary" />
      </div>
    );
  }

  return (
    <div className="relative h-24 w-full px-4">
      <div className="space-y-3 pt-2">
        {/* Your app */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="font-medium text-primary">Your App</span>
            <span className="text-muted-foreground">{yourScore}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: `${yourScore}%` }}
              transition={{ type: 'spring', bounce: 0.2 }}
            />
          </div>
        </div>

        {/* Market average */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Market Avg</span>
            <span className="text-muted-foreground">{marketAvg}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-muted-foreground/50 rounded-full"
              animate={{ width: `${marketAvg}%` }}
              transition={{ type: 'spring', bounce: 0.2 }}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 inset-x-0 text-center text-xs font-medium text-emerald-500"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        +{yourScore - marketAvg}% above market
      </motion.div>
    </div>
  );
}

// Growth trajectory - MRR climbing
function GrowthMagic() {
  const shouldReduceMotion = useReducedMotion();
  const points = [20, 25, 22, 35, 40, 55, 65, 80];
  const [activePoint, setActivePoint] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % points.length);
    }, 500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, points.length]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center h-24">
        <TrendingUpIcon className="size-12 text-emerald-500" />
      </div>
    );
  }

  const pathData = points.map((y, i) => {
    const x = (i / (points.length - 1)) * 100;
    const yPos = 90 - y;
    return `${i === 0 ? 'M' : 'L'} ${x} ${yPos}`;
  }).join(' ');

  return (
    <div className="relative h-24 w-full">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid lines */}
        {[25, 50, 75].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="currentColor" strokeWidth="0.5" className="text-border" />
        ))}

        {/* Growth line */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-emerald-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: (activePoint + 1) / points.length }}
          transition={{ duration: 0.5 }}
        />

        {/* Active point */}
        {activePoint < points.length && (
          <motion.circle
            cx={(activePoint / (points.length - 1)) * 100}
            cy={90 - points[activePoint]}
            r="4"
            className="fill-emerald-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        )}
      </svg>

      <motion.div
        className="absolute top-1 right-2 text-xs font-bold text-emerald-500"
        animate={{ scale: activePoint === points.length - 1 ? [1, 1.2, 1] : 1 }}
      >
        +74% MRR
      </motion.div>
    </div>
  );
}

// Insight lightbulb - idea generation
function InsightMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [isLit, setIsLit] = React.useState(false);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIsLit((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center h-24">
        <LightbulbIcon className="size-12 text-amber-500" />
      </div>
    );
  }

  return (
    <div className="relative h-24 w-full flex items-center justify-center">
      <motion.div
        className="relative"
        animate={{ scale: isLit ? 1.1 : 1 }}
        transition={{ type: 'spring', bounce: 0.3 }}
      >
        <LightbulbIcon
          className={`size-12 transition-colors duration-300 ${isLit ? 'text-amber-500' : 'text-muted-foreground/50'}`}
        />

        {isLit && (
          <>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2, opacity: [0, 0.5, 0] }}
              transition={{ duration: 1 }}
            />

            {/* Sparkles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * 30,
                  y: Math.sin((angle * Math.PI) / 180) * 30,
                  opacity: 0,
                }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              />
            ))}
          </>
        )}
      </motion.div>

      <motion.div
        className="absolute bottom-0 text-xs font-medium text-center"
        animate={{ opacity: isLit ? 1 : 0.5 }}
      >
        {isLit ? <span className="text-amber-500">New insight!</span> : <span className="text-muted-foreground">Analyzing...</span>}
      </motion.div>
    </div>
  );
}

// Feature to magic mapping
const FEATURE_MAGIC: Record<string, React.FC> = {
  'AI-Powered Insights': AIBrainMagic,
  'Smart Experiments': ExperimentMagic,
  'Revenue Analytics': GrowthMagic,
  'Competitor Benchmarks': BenchmarkMagic,
  'Quick Launch': InsightMagic,
  'Growth Tracking': GrowthMagic,
};

// =============================================================================
// SHARED DATA
// =============================================================================

const COMPARISON_DATA = {
  withAutopilot: {
    title: 'Testing with market intelligence',
    confidence: 'High - backed by market data',
    successRate: '3x more wins',
    timeToUplift: 'Weeks',
  },
  goingSolo: {
    title: 'Testing by guessing',
    confidence: 'Low - "Hope this works"',
    successRate: '1 out of 5 experiments',
    timeToUplift: 'Months',
  },
};

const MARKET_ADVANTAGES = [
  {
    icon: LayoutDashboardIcon,
    title: 'Expertise based on data from 15K+ apps',
    description: 'Learn from the collective wisdom of thousands of successful subscription apps.',
  },
  {
    icon: BanknoteIcon,
    title: '$2.1B revenue processed',
    description: 'Our recommendations are backed by real revenue data, not just theory.',
  },
  {
    icon: BarChart3Icon,
    title: 'Up-to-date benchmarks',
    description: 'Compare your performance against current industry standards.',
  },
];

const PROCESS_STEPS = [
  {
    step: 'Step 1',
    title: 'AI Analyzes Your Performance',
    description: 'Autopilot reviews your app and sums up your key metrics in one place.',
    icon: BrainCircuitIcon,
  },
  {
    step: 'Step 2',
    title: 'Competitor Benchmarks',
    description: 'Get a report that compares your paywall pricing strategy with your peers.',
    icon: TargetIcon,
  },
  {
    step: 'Step 3',
    title: 'Personalized Growth Plan',
    description: 'Receive a set of A/B test ideas with the highest growth potential, tailored to your app.',
    icon: RocketIcon,
  },
];

const CASE_STUDIES = [
  {
    name: 'Text on Pic',
    category: 'Health & Fitness',
    results: ['Over 30% MRR growth', 'Around 50% growth in ARPU'],
    href: '/case-studies/photo-editing-app-and-autopilot',
  },
  {
    name: 'iOS productivity app',
    category: 'Productivity',
    results: ['+50% revenue with Adapty Autopilot', 'MRR up by 18%'],
    href: '/case-studies/productivity-app-and-autopilot',
  },
];

const FEATURES = [
  {
    icon: BrainCircuitIcon,
    title: 'AI-Powered Insights',
    description: 'Get personalized recommendations based on your app data and market intelligence.',
    category: 'intelligence',
  },
  {
    icon: FlaskConicalIcon,
    title: 'Smart Experiments',
    description: 'Launch data-driven A/B tests that are 3x more likely to succeed.',
    category: 'testing',
  },
  {
    icon: LineChartIcon,
    title: 'Revenue Analytics',
    description: 'Track MRR, ARPU, and other key metrics with real-time dashboards.',
    category: 'analytics',
  },
  {
    icon: TargetIcon,
    title: 'Competitor Benchmarks',
    description: 'See how your paywall performs against similar apps in your category.',
    category: 'intelligence',
  },
  {
    icon: ZapIcon,
    title: 'Quick Launch',
    description: 'Go from insight to experiment in just a few clicks.',
    category: 'testing',
  },
  {
    icon: TrendingUpIcon,
    title: 'Growth Tracking',
    description: 'Monitor the impact of every experiment on your bottom line.',
    category: 'analytics',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Features' },
  { id: 'intelligence', label: 'Intelligence' },
  { id: 'testing', label: 'Testing' },
  { id: 'analytics', label: 'Analytics' },
];

// =============================================================================
// VARIANT: GRID - Original layout with comparison cards
// =============================================================================
function GridFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredAdvantage, setHoveredAdvantage] = React.useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = React.useState<number | null>(null);
  const [hoveredCaseStudy, setHoveredCaseStudy] = React.useState<number | null>(null);
  const [hoveredComparison, setHoveredComparison] = React.useState<'autopilot' | 'solo' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1800} />
      <div className="container relative py-16 md:py-24 z-10">
        {/* You guess. Autopilot knows. */}
        <BlurFade delay={0.1}>
          <SiteHeading
            title="You guess. Autopilot knows."
            description="Stop relying on intuition. Make data-driven decisions backed by market intelligence."
          />
        </BlurFade>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* With Autopilot */}
          <BlurFade delay={0.2}>
            <motion.div
              onMouseEnter={() => setHoveredComparison('autopilot')}
              onMouseLeave={() => setHoveredComparison(null)}
              animate={shouldReduceMotion ? undefined : {
                y: hoveredComparison === 'autopilot' ? -8 : 0,
                scale: hoveredComparison === 'autopilot' ? 1.02 : 1,
              }}
              transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
              className="relative rounded-2xl border border-primary/20 bg-primary/5 p-8 h-full overflow-hidden"
            >
              <Spotlight className="from-primary/30 via-primary/10 to-transparent" size={400} />

              {/* AI brain animation */}
              <div className="absolute top-4 right-4 opacity-20">
                <AIBrainMagic />
              </div>

              <div className="relative">
                <div className="text-sm font-medium text-primary">With Autopilot</div>
                <h3 className="mt-2 text-xl font-semibold">{COMPARISON_DATA.withAutopilot.title}</h3>
                <div className="mt-6 space-y-4">
                  {[
                    { label: 'Confidence', value: COMPARISON_DATA.withAutopilot.confidence },
                    { label: 'Success rate', value: COMPARISON_DATA.withAutopilot.successRate },
                    { label: 'Time to uplift', value: COMPARISON_DATA.withAutopilot.timeToUplift },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <motion.div
                        className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20"
                        animate={shouldReduceMotion ? undefined : {
                          scale: hoveredComparison === 'autopilot' ? [1, 1.2, 1] : 1,
                        }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <CheckIcon className="size-4 text-emerald-500" />
                      </motion.div>
                      <span className="text-muted-foreground">
                        {item.label}: {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button asChild size="sm">
                    <Link href="/schedule-demo">Get a free audit</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </BlurFade>

          {/* Going Solo */}
          <BlurFade delay={0.3}>
            <motion.div
              onMouseEnter={() => setHoveredComparison('solo')}
              onMouseLeave={() => setHoveredComparison(null)}
              animate={shouldReduceMotion ? undefined : {
                y: hoveredComparison === 'solo' ? -4 : 0,
              }}
              transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
              className="relative rounded-2xl border bg-card p-8 h-full overflow-hidden"
            >
              <Spotlight className="from-muted/50 via-transparent to-transparent" size={300} />

              <div className="relative">
                <div className="text-sm font-medium text-muted-foreground">Going Solo</div>
                <h3 className="mt-2 text-xl font-semibold">{COMPARISON_DATA.goingSolo.title}</h3>
                <div className="mt-6 space-y-4">
                  {[
                    { label: 'Confidence', value: COMPARISON_DATA.goingSolo.confidence },
                    { label: 'Success rate', value: COMPARISON_DATA.goingSolo.successRate },
                    { label: 'Time to uplift', value: COMPARISON_DATA.goingSolo.timeToUplift },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                        <XIcon className="size-4 text-red-500" />
                      </div>
                      <span className="text-muted-foreground">
                        {item.label}: {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </BlurFade>
        </div>

        {/* +74% Revenue stat with growth animation */}
        <BlurFade delay={0.4}>
          <motion.div
            className="relative mt-16 rounded-2xl border bg-card p-8 md:p-12 overflow-hidden"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            transition={{ type: 'spring', bounce: 0 }}
          >
            <Spotlight className="from-primary/20 via-primary/5 to-transparent" size={500} />

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Growth chart animation */}
              <div className="w-48 h-32 hidden md:block">
                <GrowthMagic />
              </div>

              <div className="text-center">
                <motion.div
                  className="text-5xl font-bold text-primary md:text-6xl"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', bounce: 0.3 }}
                  viewport={{ once: true }}
                >
                  +74%
                </motion.div>
                <div className="mt-2 text-xl font-semibold">Higher MRR</div>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  on average for apps that run paywall tests, based on Adapty's data.
                </p>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Unfair advantage */}
        <BlurFade delay={0.5}>
          <div className="mt-20">
            <SiteHeading
              title="Unfair advantage of market-wide data"
              description="Leverage insights from the entire Adapty ecosystem."
            />
          </div>
        </BlurFade>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {MARKET_ADVANTAGES.map((advantage, index) => (
            <BlurFade key={index} delay={0.6 + index * 0.1}>
              <motion.div
                onMouseEnter={() => setHoveredAdvantage(index)}
                onMouseLeave={() => setHoveredAdvantage(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredAdvantage === index ? -8 : 0,
                  scale: hoveredAdvantage === index ? 1.02 : 1,
                }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                className="group relative flex flex-col items-center rounded-xl border bg-card p-8 text-center h-full cursor-default overflow-hidden"
              >
                <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={250} />

                <motion.div
                  animate={shouldReduceMotion ? undefined : {
                    scale: hoveredAdvantage === index ? 1.15 : 1,
                    rotate: hoveredAdvantage === index ? 8 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2 }}
                  className="relative flex size-12 items-center justify-center rounded-full bg-primary/10"
                >
                  <advantage.icon className="size-6 text-primary" />
                </motion.div>
                <p className="relative mt-4 font-medium">{advantage.title}</p>
                <p className="relative mt-2 text-sm text-muted-foreground">{advantage.description}</p>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* 3-step process */}
        <BlurFade delay={0.7}>
          <div className="mt-20">
            <SiteHeading
              title="3-step data-driven process"
              description="Autopilot takes a holistic approach to generate personalized test recommendations."
            />
          </div>
        </BlurFade>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => (
            <BlurFade key={index} delay={0.8 + index * 0.1}>
              <motion.div
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredStep === index ? -8 : 0,
                  scale: hoveredStep === index ? 1.02 : 1,
                }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                className="group relative rounded-2xl border bg-card p-8 h-full overflow-hidden"
              >
                <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={280} />

                {/* Step number badge */}
                <motion.div
                  className="absolute top-4 right-4 text-6xl font-bold text-primary/5"
                  animate={shouldReduceMotion ? undefined : {
                    scale: hoveredStep === index ? 1.2 : 1,
                    opacity: hoveredStep === index ? 0.15 : 0.05,
                  }}
                >
                  {index + 1}
                </motion.div>

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: hoveredStep === index ? 1.15 : 1,
                        rotate: hoveredStep === index ? 8 : 0,
                      }}
                      transition={{ type: 'spring', duration: 0.2 }}
                      className="flex size-10 items-center justify-center rounded-lg bg-primary/10"
                    >
                      <step.icon className="size-5 text-primary" />
                    </motion.div>
                    <div className="text-sm font-medium text-primary">{step.step}</div>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.9}>
          <div className="mt-8 text-center">
            <Link
              href="https://app.adapty.io/registration"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl')}
            >
              Try Autopilot for free
            </Link>
          </div>
        </BlurFade>

        {/* Case Studies */}
        <BlurFade delay={1.0}>
          <div className="mt-20">
            <SiteHeading
              title="Real growth powered by Autopilot"
              description="See how other apps have transformed their revenue with data-driven experiments."
            />
          </div>
        </BlurFade>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((caseStudy, index) => (
            <BlurFade key={index} delay={1.1 + index * 0.1}>
              <motion.div
                onMouseEnter={() => setHoveredCaseStudy(index)}
                onMouseLeave={() => setHoveredCaseStudy(null)}
              >
                <Link
                  href={caseStudy.href}
                  className="group block rounded-2xl border bg-card p-8 transition-colors hover:border-primary/50"
                >
                  <div className="text-sm text-muted-foreground">{caseStudy.category}</div>
                  <h3 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                    {caseStudy.name}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {caseStudy.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-2 text-muted-foreground">
                        <CheckIcon className="size-4 text-emerald-500" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                    Read more
                    <motion.span
                      animate={shouldReduceMotion ? undefined : {
                        x: hoveredCaseStudy === index ? 4 : 0,
                      }}
                      transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <ArrowRightIcon className="size-4" />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={1.2}>
          <motion.div
            className="relative mt-20 rounded-2xl border bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12 overflow-hidden"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            transition={{ type: 'spring', bounce: 0 }}
          >
            <Spotlight className="from-primary/30 via-primary/10 to-transparent" size={600} />

            {/* Floating elements */}
            {!shouldReduceMotion && (
              <>
                <motion.div
                  className="absolute top-8 left-8 size-3 rounded-full bg-primary/30"
                  animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-12 right-12 size-4 rounded-full bg-primary/20"
                  animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/2 right-8 size-2 rounded-full bg-primary/40"
                  animate={{ x: [0, 5, 0], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                />
              </>
            )}

            <div className="relative text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Get clear steps mapped out for you
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Stop guessing. Start growing with data-driven paywall experiments.
              </p>
              <div className="mt-8">
                <Link
                  href="/schedule-demo"
                  className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl group')}
                >
                  Boost your growth with Autopilot
                  <motion.span
                    className="ml-2"
                    animate={shouldReduceMotion ? undefined : { x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="size-4" />
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: BENTO - Bento grid layout with magic animations
// =============================================================================
function BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container relative py-16 md:py-24 z-10">
        <BlurFade delay={0.1}>
          <SiteHeading
            badge="Autopilot Features"
            title="Everything you need to optimize paywalls"
            description="AI-powered tools that turn guesswork into data-driven growth."
          />
        </BlurFade>

        {/* Bento grid with magic animations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, index) => {
            const MagicComponent = FEATURE_MAGIC[feature.title];
            const isLargeCard = index === 0 || index === 3;

            return (
              <BlurFade key={index} delay={0.15 + index * 0.05}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: hoveredIndex === index ? -8 : 0,
                    scale: hoveredIndex === index ? 1.02 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  className={cn(
                    "group relative rounded-xl border bg-card overflow-hidden h-full",
                    hoveredIndex === index && "border-primary/50 shadow-lg shadow-primary/5",
                    isLargeCard && "lg:col-span-2"
                  )}
                >
                  <Spotlight className="from-primary/20 via-primary/5 to-transparent" size={300} />
                  {hoveredIndex === index && (
                    <BorderBeam
                      size={isLargeCard ? 160 : 120}
                      duration={8}
                      borderWidth={1.5}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--primary)/0)"
                    />
                  )}

                  <div className={cn("p-6 relative z-10", isLargeCard && "lg:flex lg:items-start lg:gap-8")}>
                    {/* Magic animation for large cards */}
                    {isLargeCard && MagicComponent && (
                      <div className="mb-4 lg:mb-0 lg:w-48 lg:shrink-0">
                        <MagicComponent />
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: hoveredIndex === index ? 1.15 : 1,
                            rotate: hoveredIndex === index ? 8 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.2 }}
                          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                        >
                          <feature.icon className="size-5 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{feature.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>

                      {/* Magic animation inline for small cards */}
                      {!isLargeCard && MagicComponent && (
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <MagicComponent />
                        </div>
                      )}

                      {/* Expanded details always shown on large cards */}
                      {isLargeCard && (
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <p className="text-sm text-muted-foreground">
                            Powered by data from 15K+ apps and $2.1B in processed revenue.
                          </p>
                          <Link
                            href="/schedule-demo"
                            className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary hover:underline"
                          >
                            Learn more
                            <motion.span
                              animate={shouldReduceMotion ? undefined : {
                                x: hoveredIndex === index ? 4 : 0,
                              }}
                            >
                              <ArrowRightIcon className="size-3" />
                            </motion.span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Stats highlight with animations */}
        <BlurFade delay={0.5}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '+74%', label: 'Higher MRR on average', highlight: true },
              { value: '3x', label: 'More winning experiments', highlight: false },
              { value: '15K+', label: 'Apps powering insights', highlight: false },
            ].map((stat, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredStat === index ? -4 : 0,
                  scale: hoveredStat === index ? 1.02 : 1,
                }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                className={cn(
                  "relative rounded-xl border p-6 text-center overflow-hidden",
                  stat.highlight ? "bg-primary/5 border-primary/20" : "bg-card"
                )}
              >
                <Spotlight className="from-primary/10 via-transparent to-transparent" size={200} />
                <motion.div
                  className={cn("text-4xl font-bold", stat.highlight && "text-primary")}
                  animate={shouldReduceMotion ? undefined : {
                    scale: hoveredStat === index ? 1.1 : 1,
                  }}
                  transition={{ type: 'spring', bounce: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.6}>
          <div className="mt-12 text-center">
            <Link
              href="/schedule-demo"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl group')}
            >
              Get a free audit
              <motion.span
                className="ml-2"
                animate={shouldReduceMotion ? undefined : { x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRightIcon className="size-4" />
              </motion.span>
            </Link>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TABS - Tabbed interface with category filtering
// =============================================================================
function TabsFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(null);

  const filteredFeatures = activeCategory === 'all'
    ? FEATURES
    : FEATURES.filter(f => f.category === activeCategory);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container relative py-16 md:py-24 z-10">
        <BlurFade delay={0.1}>
          <SiteHeading
            badge="Autopilot Features"
            title="Powerful tools for paywall optimization"
            description="Explore features by category to find exactly what you need."
          />
        </BlurFade>

        {/* Category tabs */}
        <BlurFade delay={0.15}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  activeCategory === category.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="autopilot-active-tab"
                    className="absolute inset-0 bg-primary rounded-lg"
                    transition={{ type: 'spring', duration: 0.3, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Features grid with animation */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: hoveredFeature === index ? -8 : 0,
                    scale: hoveredFeature === index ? 1.02 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  className={cn(
                    "group relative rounded-xl border bg-card p-6 h-full overflow-hidden",
                    hoveredFeature === index && "border-primary/50 shadow-lg shadow-primary/5"
                  )}
                >
                  <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={250} />
                  {hoveredFeature === index && (
                    <BorderBeam
                      size={120}
                      duration={8}
                      borderWidth={1.5}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--primary)/0)"
                    />
                  )}

                  <motion.div
                    animate={shouldReduceMotion ? undefined : {
                      scale: hoveredFeature === index ? 1.15 : 1,
                      rotate: hoveredFeature === index ? 8 : 0,
                    }}
                    transition={{ type: 'spring', duration: 0.2 }}
                    className="relative flex size-12 items-center justify-center rounded-lg bg-primary/10 z-10"
                  >
                    <feature.icon className="size-6 text-primary" />
                  </motion.div>
                  <h3 className="relative mt-4 font-semibold z-10">{feature.title}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground z-10">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Process steps */}
        <BlurFade delay={0.4}>
          <div className="mt-20">
            <SiteHeading
              title="How Autopilot works"
              description="Three simple steps to data-driven growth."
            />
          </div>
        </BlurFade>

        <div className="mt-10 relative">
          {/* Connection line */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] h-0.5 bg-border hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <BlurFade key={index} delay={0.5 + index * 0.1}>
                <div className="relative text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold relative z-10">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* CTA */}
        <BlurFade delay={0.7}>
          <div className="mt-16 text-center">
            <Link
              href="/schedule-demo"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl')}
            >
              Start your free audit
              <ArrowRightIcon className="ml-2 size-4" />
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
export type AutopilotFeaturesVariant = 'grid' | 'bento' | 'tabs';
export const AUTOPILOT_FEATURES_VARIANTS = ['grid', 'bento', 'tabs'] as const;

type Props = {
  variant?: AutopilotFeaturesVariant;
};

export function AutopilotFeatures({ variant = 'grid' }: Props): React.JSX.Element {
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
