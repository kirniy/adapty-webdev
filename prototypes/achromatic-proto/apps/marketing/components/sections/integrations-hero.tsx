'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/integrations (scraped 2026-01-21)
// Badge: "Integrations"
// Title: "Sync in-app subscription with external services"
// CTAs: "Book a demo", "Start for free"

export function IntegrationsHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={600} />
      <div className="container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BlurFade delay={0.05}>
            <SiteHeading
              badge="Integrations"
              title="Sync in-app subscription with external services"
            />
          </BlurFade>

          <BlurFade delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHovered('demo')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="/schedule-demo"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  Book a demo
                  <motion.span
                    animate={shouldReduceMotion ? undefined : { x: isHovered === 'demo' ? 3 : 0 }}
                    transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <ArrowRightIcon className="ml-2 size-4" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHovered('start')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://app.adapty.io/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  Start for free
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
