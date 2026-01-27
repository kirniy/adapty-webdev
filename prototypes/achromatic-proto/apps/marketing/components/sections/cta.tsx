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
      <div className="container py-16 relative z-10">
        {/* Linear style: single line with buttons on the right */}
        <BlurFade>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            {/* One line of text */}
            <p className="text-lg sm:text-xl font-medium text-foreground text-center sm:text-left">
              Build paywalls. Run experiments. Grow revenue.
            </p>

            {/* Two buttons */}
            <div className="flex gap-3 shrink-0">
              <Link
                href="/schedule-demo"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'rounded-lg px-5'
                )}
              >
                Contact Sales
              </Link>
              <Link
                href="https://app.adapty.io/registration"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'rounded-lg px-5'
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
