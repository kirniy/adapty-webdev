'use client';

import * as React from 'react';

import { Footer } from '~/components/footer';
import { FlickeringFooter } from '~/components/footer-flickering';
import { useFooterVariant } from '~/lib/debug-context';

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
