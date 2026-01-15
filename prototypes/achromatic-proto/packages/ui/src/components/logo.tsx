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
        {/* Full Adapty logo with wordmark - light mode */}
        <Image
          src="/logos/adapty-logo-color.svg"
          alt="Adapty"
          width={120}
          height={32}
          className="h-8 w-auto dark:hidden"
          priority
        />
        {/* Full Adapty logo - dark mode (white version) */}
        <Image
          src="/logos/adapty-logo-white.svg"
          alt="Adapty"
          width={120}
          height={32}
          className="hidden h-8 w-auto dark:block"
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
      <Image
        src="/logos/adapty-symbol.svg"
        alt="Adapty"
        width={32}
        height={32}
        className="size-8"
        priority
      />
    </div>
  );
}
