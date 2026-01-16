import * as React from 'react';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';

export function StoryHero(): React.JSX.Element {
  return (
    <GridSection hideVerticalGridLines className="relative overflow-hidden">
      <SectionBackground height={600} />
      <div className="container py-24 md:py-32 relative z-10">
        <SiteHeading
          badge="Our Story"
          title="Reinventing CRM in the AI era"
          description="From a bold vision to revolutionize CRM to the fastest-growing platform in history. We're building the intelligent CRM that works for you, not the other way around."
        />
      </div>
    </GridSection>
  );
}
