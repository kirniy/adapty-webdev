'use client';

import * as React from 'react';
import { useFooterVariant } from '~/lib/debug-context';
import { Footer } from '~/components/footer';

export function FooterSection(): React.JSX.Element | null {
  const variant = useFooterVariant();

  if (variant === 'off') {
    return null;
  }

  return <Footer />;
}
