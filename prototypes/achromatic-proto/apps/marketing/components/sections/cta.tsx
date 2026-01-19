'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, SparklesIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
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

export function CTA(): React.JSX.Element {
  const [primaryHovered, setPrimaryHovered] = React.useState(false);
  const [secondaryHovered, setSecondaryHovered] = React.useState(false);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={500} />
      <div className="container py-16 lg:py-24 relative z-10">
        <div className="mx-auto max-w-3xl">
          {/* Badge */}
          <BlurFade className="flex justify-center mb-6">
            <Badge variant="outline" className="rounded-full px-4 py-1.5">
              <SparklesIcon className="mr-2 size-3.5" />
              Start growing today
            </Badge>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.1} className="text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Ready to double your
              <br />
              <span className="text-primary">subscription revenue?</span>
            </h2>
          </BlurFade>

          {/* Subtext */}
          <BlurFade delay={0.2} className="text-center">
            <p className="mb-8 text-muted-foreground text-lg max-w-xl mx-auto">
              Join 15,000+ apps using Adapty to optimize paywalls, run A/B tests, and understand their subscription metrics.
            </p>
          </BlurFade>

          {/* Value Props */}
          <BlurFade delay={0.25} className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {VALUE_PROPS.map((prop) => (
                <div key={prop} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckIcon className="size-4 text-primary" />
                  <span>{prop}</span>
                </div>
              ))}
            </div>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.div
                onMouseEnter={() => setPrimaryHovered(true)}
                onMouseLeave={() => setPrimaryHovered(false)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="https://app.adapty.io/registration"
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'rounded-xl px-8 shadow-lg hover:shadow-xl transition-all duration-200'
                  )}
                >
                  Start for free
                  <motion.span
                    animate={{ x: primaryHovered ? 4 : 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <ArrowRightIcon className="ml-2 size-4" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                onMouseEnter={() => setSecondaryHovered(true)}
                onMouseLeave={() => setSecondaryHovered(false)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="https://adapty.io/schedule-demo/"
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-200'
                  )}
                >
                  Talk to sales
                  <motion.span
                    animate={{ x: secondaryHovered ? 4 : 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <ArrowRightIcon className="ml-2 size-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </BlurFade>

          {/* Social Proof Stats */}
          <BlurFade delay={0.4} className="mt-12">
            <div className="grid grid-cols-3 gap-8 border-t pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">$2B+</div>
                <div className="text-xs text-muted-foreground">Revenue tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">15,000+</div>
                <div className="text-xs text-muted-foreground">Apps powered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.99%</div>
                <div className="text-xs text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
