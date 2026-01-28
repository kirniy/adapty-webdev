'use client';

import * as React from 'react';

import { AnalyticsProvider } from '@workspace/analytics/hooks/use-analytics';
import { TooltipProvider } from '@workspace/ui/components/tooltip';
import { ThemeProvider } from '@workspace/ui/hooks/use-theme';

import { DebugProvider } from '~/lib/debug-context';

export function Providers({
  children
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <AnalyticsProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
      >
        <TooltipProvider>
          <DebugProvider>{children}</DebugProvider>
        </TooltipProvider>
      </ThemeProvider>
    </AnalyticsProvider>
  );
}
