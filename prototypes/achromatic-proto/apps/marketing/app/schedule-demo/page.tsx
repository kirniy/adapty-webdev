import * as React from 'react';
import type { Metadata } from 'next';

import { ScheduleDemoHero } from '~/components/sections/schedule-demo-hero';
import { Testimonials } from '~/components/sections/testimonials';
import { Logos } from '~/components/sections/logos';
import { createTitle } from '~/lib/formatters';

export const metadata: Metadata = {
  title: createTitle('Schedule a Demo'),
  description: 'See how Adapty can help grow your subscription business. Schedule a personalized demo with our team.'
};

export default function ScheduleDemoPage(): React.JSX.Element {
  return (
    <>
      <ScheduleDemoHero />
      <Logos />
      <Testimonials />
    </>
  );
}
