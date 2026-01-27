'use client';

import * as React from 'react';
import Link from 'next/link';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';

// Linear-style CTA: minimal, clean, one line + 2 buttons
export function CTA(): React.JSX.Element {
  return (
    <GridSection className="relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        {/* Linear style: single line with buttons on the right */}
        <BlurFade>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            {/* One line of text */}
            <p className="text-base sm:text-lg font-medium text-foreground text-center sm:text-left leading-tight">
              Build paywalls. Run experiments. Grow revenue.
            </p>

            {/* Two buttons with refined interactions */}
            <div className="flex gap-3 shrink-0">
              <Link
                href="/schedule-demo"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'rounded-lg px-5 h-11',
                  'transition-all duration-150 ease-out',
                  'active:scale-[0.98]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                )}
              >
                Contact Sales
              </Link>
              <Link
                href="https://app.adapty.io/registration"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'rounded-lg px-5 h-11',
                  'transition-all duration-150 ease-out',
                  'active:scale-[0.98]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                )}
              >
                Get Started
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
