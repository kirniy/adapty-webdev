'use client';

import * as React from 'react';

import { CTASwitcher } from '~/components/sections/section-switchers';
import { StoryHero } from '~/components/sections/story-hero';
import { StoryTeam } from '~/components/sections/story-team';
import { StoryTimeline } from '~/components/sections/story-timeline';
import { StoryValues } from '~/components/sections/story-values';
import { StoryVision } from '~/components/sections/story-vision';
import {
  useHeroVariant,
  useStatsVariant,
  useTestimonialsVariant
} from '~/lib/debug-context';

// Story page: Company history and team
// Uses story-specific sections with shared CTA
export default function StoryPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const statsVariant = useStatsVariant();
  const testimonialsVariant = useTestimonialsVariant();

  return (
    <>
      {/* Hero - Story style */}
      {heroVariant !== 'off' && <StoryHero />}

      {/* Vision section */}
      <StoryVision />

      {/* Team section (controlled by testimonials variant) */}
      {testimonialsVariant !== 'off' && <StoryTeam />}

      {/* Timeline (controlled by stats variant) */}
      {statsVariant !== 'off' && <StoryTimeline />}

      {/* Values section */}
      <StoryValues />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
