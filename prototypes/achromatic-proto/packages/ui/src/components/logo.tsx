'use client';

import * as React from 'react';
import Image from 'next/image';

import { cn } from '@workspace/ui/lib/utils';

export type LogoElement = React.ComponentRef<'div'>;
export type LogoProps = React.ComponentPropsWithoutRef<'div'> & {
  hideSymbol?: boolean;
  hideWordmark?: boolean;
};

export function Logo({
  hideSymbol,
  hideWordmark,
  className,
  ...other
}: LogoProps): React.JSX.Element {
  // Use the full Adapty logo (includes wordmark)
  if (!hideWordmark) {
    return (
      <div
        className={cn('flex items-center', className)}
        {...other}
      >
        {/* Full Adapty logo - black in light mode, inverted (white) in dark mode */}
        <Image
          src="/logos/adapty-logo-black.svg"
          alt="Adapty"
          width={120}
          height={32}
          className="h-8 w-auto dark:invert"
          priority
        />
      </div>
    );
  }

  // Symbol only
  return (
    <div
      className={cn('flex items-center', className)}
      {...other}
    >
      {/* Symbol - invert for dark mode */}
      <Image
        src="/logos/adapty-symbol.svg"
        alt="Adapty"
        width={32}
        height={32}
        className="size-8 dark:invert"
        priority
      />
    </div>
  );
}
