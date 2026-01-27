'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { Spotlight } from '~/components/fragments/spotlight';

// EXACT content from adapty.io/pricing (scraped 2026-01-21)
// Headline: "Startup with less than $5K MTR?"
// Subheadline: "Get a discount on our Pro and Pro+ plans today."
// CTA: "Apply for discount" -> https://startups.adapty.io/en/startup-plan-application

// Magic animation: Startup discount badge
function StartupDiscountMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <motion.div
        className="size-2 rounded-full bg-primary"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span>Special offer</span>
    </motion.div>
  );
}

export function StartupCallout(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <GridSection className="relative">
      <div className="container py-12">
        <BlurFade>
          <div className="mx-auto max-w-2xl rounded-xl border bg-muted/30 p-8 text-center relative overflow-hidden">
            <BorderBeam size={200} duration={10} borderWidth={1.5} colorFrom="hsl(var(--primary))" colorTo="rgb(34 197 94)" />
            <Spotlight className="from-green-500/15 via-green-500/5 to-transparent" size={300} />
            <div className="relative">
              <StartupDiscountMagic />
            </div>
            <h3 className="mb-2 text-xl font-semibold tracking-tight sm:text-2xl relative">
              Startup with less than $5K MTR?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Get a discount on our Pro and Pro+ plans today.
            </p>
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                y: shouldReduceMotion ? 0 : isHovered ? -2 : 0,
              }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              className="inline-block"
            >
              <Link
                href="https://startups.adapty.io/en/startup-plan-application"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'rounded-xl px-6 transition-all duration-150 ease-out motion-reduce:transition-none'
                )}
              >
                Apply for discount
                <motion.span
                  animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                >
                  <ArrowRightIcon className="ml-2 size-4" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
