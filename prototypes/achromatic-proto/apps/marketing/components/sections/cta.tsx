'use client';

import * as React from 'react';
import Link from 'next/link';
import { CheckIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

const VALUE_PROPS = [
  'Free tier with 10K MTR',
  'No credit card required',
  'Setup in under 30 minutes',
  'Cancel anytime',
];

// Simple button - no glow, pulse, or beam effects (per cleanup)
function CTAButton({
  href,
  variant = 'default',
  children,
  className,
}: {
  href: string;
  variant?: 'default' | 'outline';
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant, size: 'lg' }),
        'min-h-[44px] rounded-xl px-8',
        className
      )}
    >
      {children}
    </Link>
  );
}

// Value prop with check icon
function ValueProp({ prop, index }: { prop: string; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? undefined : {
        duration: 0.25,
        delay: 0.2 + index * 0.05,
        ease: [0.32, 0.72, 0, 1],
      }}
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      <div className="flex size-5 items-center justify-center rounded-full border border-primary/30">
        <CheckIcon className="size-3 text-primary" />
      </div>
      <span>{prop}</span>
    </motion.div>
  );
}

// Simple stat display
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

export function CTA(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={500} />
      <div className="container py-24 relative z-10">
        <div className="mx-auto max-w-3xl relative">
          {/* Headline */}
          <BlurFade className="text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Ready to double your
              <br />
              <span className="text-primary">subscription revenue?</span>
            </h2>
          </BlurFade>

          {/* Subtext */}
          <BlurFade delay={0.1} className="text-center">
            <p className="mb-8 text-muted-foreground text-lg max-w-xl mx-auto">
              Join 15,000+ apps using Adapty to optimize paywalls, run A/B tests, and understand their subscription metrics.
            </p>
          </BlurFade>

          {/* Value Props */}
          <BlurFade delay={0.15} className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {VALUE_PROPS.map((prop, index) => (
                <ValueProp key={prop} prop={prop} index={index} />
              ))}
            </div>
          </BlurFade>

          {/* CTA Buttons - simple, no effects */}
          <BlurFade delay={0.2}>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <CTAButton href="https://app.adapty.io/registration" variant="default">
                Start for free
              </CTAButton>
              <CTAButton href="/schedule-demo" variant="outline">
                Talk to sales
              </CTAButton>
            </div>
          </BlurFade>

          {/* Social Proof Stats */}
          <BlurFade delay={0.25} className="mt-12">
            <div className="grid grid-cols-3 gap-8 border-t pt-8">
              <Stat value="$2B+" label="Revenue tracked" />
              <Stat value="15,000+" label="Apps powered" />
              <Stat value="99.99%" label="Uptime SLA" />
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
