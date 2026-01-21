import type { Metadata } from 'next';

import { CaseStudiesHero } from '~/components/sections/case-studies-hero';
import { CaseStudiesGrid } from '~/components/sections/case-studies-grid';
import { CTA } from '~/components/sections/cta';

export const metadata: Metadata = {
  title: 'Adapty Case Studies and User Stories',
  description:
    'Check out the success stories of our clients who managed to achieve high results with the help of Adapty. Learn how easily you can grow too!'
};

export default function CaseStudiesPage(): React.JSX.Element {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CTA />
    </>
  );
}
