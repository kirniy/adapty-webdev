import type { Metadata } from 'next';

import { AppleFiscalCalendarHero } from '~/components/sections/apple-fiscal-calendar-hero';
import { AppleFiscalCalendarFeatures } from '~/components/sections/apple-fiscal-calendar-features';
import { CTA } from '~/components/sections/cta';

export const metadata: Metadata = {
  title: 'Apple Fiscal Calendar and Payment Dates 2026',
  description:
    "Plan your finances with Apple's Fiscal Calendar for 2026. Track payment dates and set up Apple payment notifications for the next payout."
};

export default function AppleFiscalCalendarPage(): React.JSX.Element {
  return (
    <>
      <AppleFiscalCalendarHero />
      <AppleFiscalCalendarFeatures />
      <CTA />
    </>
  );
}
