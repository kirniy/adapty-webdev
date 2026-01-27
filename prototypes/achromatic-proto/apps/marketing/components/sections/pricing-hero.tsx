'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, SparklesIcon, ZapIcon, BuildingIcon, UsersIcon, TrendingUpIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';
import { PricingTable } from '@workspace/billing/components/pricing-table';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { SlideIn } from '~/components/fragments/slide-in';
import { ScaleOnHover } from '~/components/fragments/scale-on-hover';
import { Spotlight } from '~/components/fragments/spotlight';

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Magic animation: Apps counter badge
function AppsTrustMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [apps, setApps] = React.useState(0);
  const targetApps = 15000;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setApps(targetApps);
      return;
    }
    const duration = 2500;
    const steps = 40;
    const stepValue = targetApps / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += stepValue;
      if (current >= targetApps) {
        setApps(targetApps);
        clearInterval(interval);
      } else {
        setApps(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border bg-background/95 px-4 py-2 shadow-sm backdrop-blur-sm">
      <UsersIcon className="size-4 text-primary" />
      <motion.span
        className="text-sm font-semibold tabular-nums"
        key={apps}
        initial={shouldReduceMotion ? undefined : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {apps.toLocaleString()}+
      </motion.span>
      <span className="text-xs text-muted-foreground">apps trust us</span>
    </div>
  );
}

// Magic animation: Savings calculator badge
function SavingsBadgeMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [savings, setSavings] = React.useState(0);
  const targetSavings = 40;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setSavings(targetSavings);
      return;
    }
    const duration = 2000;
    const steps = 20;
    const stepValue = targetSavings / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += stepValue;
      if (current >= targetSavings) {
        setSavings(targetSavings);
        clearInterval(interval);
      } else {
        setSavings(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900 px-4 py-2 shadow-sm">
      <TrendingUpIcon className="size-4 text-green-600 dark:text-green-400" />
      <motion.span
        className="text-sm font-semibold tabular-nums text-green-600 dark:text-green-400"
        key={savings}
        initial={shouldReduceMotion ? undefined : { scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {savings}%
      </motion.span>
      <span className="text-xs text-green-600/80 dark:text-green-400/80">avg. cost savings</span>
    </div>
  );
}

// Pricing plans from adapty.io/pricing (scraped 2026-01-22)
const PRICING_PLANS = [
  {
    id: 'free',
    name: 'Free',
    description: 'For apps just getting started',
    price: '$0',
    period: 'forever',
    mtr: 'Up to $10K MTR',
    cta: 'Start for free',
    ctaLink: 'https://app.adapty.io/registration',
    highlighted: false,
    features: [
      'Purchase SDKs for all platforms',
      'No-code paywall builder',
      'Subscription analytics',
      'Basic integrations',
      '1 seat',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing apps',
    price: '0.6%',
    period: 'of MTR',
    mtr: 'Above $10K MTR',
    cta: 'Start Pro trial',
    ctaLink: 'https://app.adapty.io/registration',
    highlighted: true,
    badge: 'Most popular',
    features: [
      'Everything in Free, plus:',
      'A/B testing',
      'Custom audiences',
      'LTV & Cohort analytics',
      'All integrations',
      '3 seats',
    ],
  },
  {
    id: 'proPlus',
    name: 'Pro+',
    description: 'For scaling apps',
    price: '0.9%',
    period: 'of MTR',
    mtr: 'Above $10K MTR',
    cta: 'Start Pro+ trial',
    ctaLink: 'https://app.adapty.io/registration',
    highlighted: false,
    features: [
      'Everything in Pro, plus:',
      'Predictive analytics',
      'CRM & Push notifications',
      'BigQuery, Redshift, S3',
      'Priority support',
      '6 seats',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: 'pricing',
    mtr: 'Volume discounts',
    cta: 'Contact sales',
    ctaLink: '/contact',
    highlighted: false,
    features: [
      'Everything in Pro+, plus:',
      'SSO authentication',
      'Custom SLA',
      'Dedicated support manager',
      'Unlimited seats',
    ],
  },
];

const TRUST_BADGES = [
  'SOC 2 Type II',
  'GDPR Compliant',
  '99.99% Uptime SLA',
  'No hidden fees',
];

// =============================================================================
// VARIANT: TABLE - Uses the PricingTable component (default)
// =============================================================================
function TableHero() {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container space-y-12 py-20 relative z-10">
        <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={400} />
        <SlideIn delay={0.05} direction="up">
          <SiteHeading
            badge="Pricing"
            title="Start for free or go Pro"
            description="Trusted by 15,000+ apps and the world's largest app publishers"
          />
          {/* Magic badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <AppsTrustMagic />
            <SavingsBadgeMagic />
          </div>
        </SlideIn>
        <SlideIn delay={0.1} direction="up" duration={0.6}>
          <PricingTable />
        </SlideIn>
        <SlideIn delay={0.15} direction="up">
          <div className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            <p>
              All plans include unlimited paywalls, SDK integration, and real-time analytics.
              Need a custom solution?{' '}
              <Link href="/contact" className="text-primary transition-colors duration-150 ease-out hover:underline motion-reduce:transition-none">
                Contact our sales team
              </Link>
              .
            </p>
          </div>
        </SlideIn>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: CARDS - Card-based pricing with hover effects
// =============================================================================
function CardsHero() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={400} />
        <SlideIn delay={0.05} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="rounded-full px-4 py-1.5 mb-6">
              Simple, transparent pricing
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Start for free, scale as you grow
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Pay only for what you use. No hidden fees, no long-term contracts.
            </p>
          </div>
        </SlideIn>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {PRICING_PLANS.map((plan, index) => (
            <SlideIn key={plan.id} delay={0.1 + index * 0.05} direction="up" className="h-full">
              <ScaleOnHover
                className="h-full"
                scale={1.02}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className={cn(
                  "h-full flex flex-col transition-all duration-200 relative overflow-hidden",
                  plan.highlighted
                    ? "border-primary/50 bg-primary/5 shadow-lg"
                    : "border-border/50 hover:border-primary/30",
                  hoveredIndex === index && "shadow-xl"
                )}>
                  <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={200} />
                  {(plan.highlighted || hoveredIndex === index) && (
                    <BorderBeam
                      size={plan.highlighted ? 200 : 150}
                      duration={plan.highlighted ? 12 : 8}
                      delay={plan.highlighted ? 9 : 0}
                      borderWidth={plan.highlighted ? 2 : 1.5}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--primary)/0)"
                      className={plan.highlighted ? "opacity-70" : ""}
                    />
                  )}
                  <CardHeader className="pb-4 relative z-10">
                    {plan.badge && (
                      <Badge className="w-fit mb-2 bg-primary text-primary-foreground">
                        {plan.badge}
                      </Badge>
                    )}
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 relative z-10">
                    <div className="mb-6">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                      <p className="text-sm text-muted-foreground mt-1">{plan.mtr}</p>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckIcon className="size-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative z-10">
                    <Link
                      href={plan.ctaLink}
                      className={cn(
                        buttonVariants({ variant: plan.highlighted ? 'default' : 'outline', size: 'lg' }),
                        "w-full rounded-xl"
                      )}
                    >
                      {plan.cta}
                    </Link>
                  </CardFooter>
                </Card>
              </ScaleOnHover>
            </SlideIn>
          ))}
        </div>

        {/* Trust badges */}
        <BlurFade delay={0.35}>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {TRUST_BADGES.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckIcon className="size-4 text-primary" />
                {badge}
              </div>
            ))}
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mt-8">
            <p>
              All plans include unlimited paywalls, SDK integration, and real-time analytics.
              Need a custom solution?{' '}
              <Link href="/contact" className="text-primary transition-colors duration-150 ease-out hover:underline motion-reduce:transition-none">
                Contact our sales team
              </Link>
              .
            </p>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: COMPACT - Minimal pricing display with highlighted popular plan
// =============================================================================
function CompactHero() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-20 relative z-10">
        <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={350} />
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={0.05}>
            <Badge variant="outline" className="rounded-full px-4 py-1.5 mb-6">
              Pricing
            </Badge>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Simple pricing that scales with you
            </h1>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free with up to $10K monthly tracked revenue. Pay only 0.6% of MTR as you grow.
            </p>
          </BlurFade>

          {/* Quick pricing summary */}
          <BlurFade delay={0.2}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Free tier */}
              <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <SparklesIcon className="size-5 text-muted-foreground" />
                  <span className="font-semibold">Free</span>
                </div>
                <p className="text-3xl font-bold">$0</p>
                <p className="text-sm text-muted-foreground mt-1">Up to $10K MTR</p>
              </div>

              {/* Pro tier (highlighted) */}
              <div className="p-6 rounded-xl border-2 border-primary bg-primary/5 relative">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most popular
                </Badge>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <ZapIcon className="size-5 text-primary" />
                  <span className="font-semibold">Pro</span>
                </div>
                <p className="text-3xl font-bold">0.6%</p>
                <p className="text-sm text-muted-foreground mt-1">of MTR above $10K</p>
                <BorderBeam
                  size={150}
                  duration={12}
                  delay={9}
                  borderWidth={2}
                  className="opacity-70"
                />
              </div>

              {/* Enterprise tier */}
              <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <BuildingIcon className="size-5 text-muted-foreground" />
                  <span className="font-semibold">Enterprise</span>
                </div>
                <p className="text-3xl font-bold">Custom</p>
                <p className="text-sm text-muted-foreground mt-1">Volume discounts</p>
              </div>
            </div>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ScaleOnHover
                onMouseEnter={() => setIsHovered('start')}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Link
                  href="https://app.adapty.io/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl px-8')}
                >
                  Start for free
                  <motion.span
                    animate={shouldReduceMotion ? undefined : { x: isHovered === 'start' ? 3 : 0 }}
                    transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <ArrowRightIcon className="ml-2 size-4" />
                  </motion.span>
                </Link>
              </ScaleOnHover>

              <ScaleOnHover
                onMouseEnter={() => setIsHovered('demo')}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Link
                  href="/schedule-demo"
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-xl px-8')}
                >
                  Book a demo
                </Link>
              </ScaleOnHover>
            </div>
          </BlurFade>

          {/* Trust badges */}
          <BlurFade delay={0.3}>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {TRUST_BADGES.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckIcon className="size-4 text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type PricingHeroVariant = 'table' | 'cards' | 'compact';

type Props = {
  variant?: PricingHeroVariant;
};

export function PricingHero({ variant = 'table' }: Props): React.JSX.Element {
  switch (variant) {
    case 'cards':
      return <CardsHero />;
    case 'compact':
      return <CompactHero />;
    case 'table':
    default:
      return <TableHero />;
  }
}
