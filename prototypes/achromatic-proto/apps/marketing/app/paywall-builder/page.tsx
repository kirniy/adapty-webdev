import * as React from 'react';
import type { Metadata } from 'next';

import { createTitle } from '~/lib/formatters';
import { PaywallBuilderPageClient } from './page-client';

export const metadata: Metadata = {
  title: createTitle('Paywall Builder'),
  description: 'Make the best mobile paywall design with Adapty\'s paywall builder: upload images, change text, pick colors, and run experiments.'
};

// Page structure matches adapty.io/paywall-builder (scraped 2026-01-21)
// Now with per-page debug menu for variant switching
export default function PaywallBuilderPage(): React.JSX.Element {
  return <PaywallBuilderPageClient />;
}
