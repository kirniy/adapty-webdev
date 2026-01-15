import * as React from 'react';
import Link from 'next/link';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { TextGenerateEffect } from '~/components/fragments/text-generate-effect';

export function CTA(): React.JSX.Element {
  return (
    <GridSection className="bg-diagonal-lines">
      <div className="container flex flex-col items-center justify-between gap-6 bg-background py-16 text-center">
        <h3 className="m-0 max-w-fit text-3xl font-semibold md:text-4xl">
          <TextGenerateEffect words="Get started today or schedule a demo" />
        </h3>
        <p className="text-muted-foreground">for your personal onboarding</p>
        <BlurFade
          inView
          delay={0.6}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="https://app.adapty.io/registration"
            target="_blank"
            className={cn(buttonVariants({ variant: 'default' }), 'rounded-xl')}
          >
            Start for free
          </Link>
          <Link
            href="https://adapty.io/schedule-demo/"
            target="_blank"
            className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}
          >
            Schedule a demo
          </Link>
        </BlurFade>
      </div>
    </GridSection>
  );
}
