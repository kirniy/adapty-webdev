'use client';

import * as React from 'react';
import { useFooterVariant } from '~/lib/debug-context';
import { Footer } from '~/components/footer';
import { FlickeringFooter } from '~/components/footer-flickering';

export function FooterSection(): React.JSX.Element | null {
  const variant = useFooterVariant();

  if (variant === 'off') {
    return null;
  }

  if (variant === 'flickering') {
    return <FlickeringFooter />;
  }

  return <Footer />;
}
