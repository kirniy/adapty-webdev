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

// EXACT content from adapty.io/case-studies (scraped 2026-01-21)
// Title: "Read our case studies to find out why app developers choose Adapty"
// CTA: "Schedule A Demo"

export function CaseStudiesHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BlurFade delay={0.05}>
            <SiteHeading
              badge="Case Studies"
              title="Read our case studies to find out why app developers choose Adapty"
              description="Check out the success stories of our clients who managed to achieve high results with the help of Adapty. Learn how easily you can grow too!"
            />
          </BlurFade>

          <BlurFade delay={0.1}>
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
                href="/schedule-demo"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                )}
              >
                Schedule A Demo
                <motion.span
                  animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                >
                  <ArrowRightIcon className="ml-2 size-4" />
                </motion.span>
              </Link>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
