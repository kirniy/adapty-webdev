'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CalendarIcon, DownloadIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/apple-fiscal-calendar (scraped 2026-01-21)
// Title: "Apple fiscal calendar and payment dates 2026"
// Description: "Apple's fiscal calendar determines when you get paid for your App Store earnings. See all the payment dates for 2026."

export function AppleFiscalCalendarHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'pdf' | 'gcal' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BlurFade delay={0.05}>
            <SiteHeading
              badge="Developer Tools"
              title="Apple fiscal calendar and payment dates 2026"
              description="Apple's fiscal calendar determines when you get paid for your App Store earnings. See all the payment dates for 2026."
            />
          </BlurFade>

          <BlurFade delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHovered('pdf')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'pdf' ? -2 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://uploads.adapty.io/apple-fiscal-calendar-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  <DownloadIcon className="mr-2 size-4" />
                  Download as PDF
                </Link>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHovered('gcal')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'gcal' ? -2 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://adapty.io/apple-fiscal-calendar/in-google-calendar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  Add to Google Calendar
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
