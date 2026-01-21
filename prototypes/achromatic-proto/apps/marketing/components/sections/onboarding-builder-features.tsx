'use client';

import * as React from 'react';
import {
  MousePointer2Icon,
  UserIcon,
  FlaskConicalIcon,
  BarChart3Icon,
  GlobeIcon,
  LayoutIcon,
  TrendingUpIcon
} from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/onboarding-builder (scraped 2026-01-21)
// 5 main features with titles and descriptions
const FEATURES = [
  {
    icon: MousePointer2Icon,
    title: 'Drag-and-drop',
    subtitle: 'If you can picture it, you can build it',
    description: "Create exactly what you imagined - from video backgrounds and custom loaders to animated buttons, multi-step quizzes, and anything else you need."
  },
  {
    icon: UserIcon,
    title: 'Personalization',
    subtitle: 'Relevance is how you convert',
    description: "Ask what matters to them, then show it. Build flows that fork and adapt in real-time instead of dragging everyone through the same one-size-fits-nobody journey."
  },
  {
    icon: FlaskConicalIcon,
    title: 'A/B testing',
    subtitle: 'Testing turns hypotheses into revenue',
    description: "Compare variants, track the impact, and double down on what proves profitable. Keep iterating, because user behavior changes fast."
  },
  {
    icon: BarChart3Icon,
    title: 'Analytics',
    subtitle: 'What gets measured, gets maximized',
    description: "Track 20+ onboarding metrics: completion rates, revenue, trial and payment conversions, ARPU, and more. Real-time data that show where users fall off and how to fix it."
  },
  {
    icon: GlobeIcon,
    title: 'Localization',
    subtitle: 'Talk to users in their language',
    description: "Use manual translation when you need precision, and AI localization when you need speed. Give every user a smooth, native experience, wherever they are."
  }
];

// Case study from adapty.io/onboarding-builder
const CASE_STUDY = {
  title: 'How a new onboarding drove 50% revenue growth',
  description: 'A travel app rebuilt onboarding in Adapty, tested a variant, and shipped the winner.',
  results: [
    { label: 'ARPU', value: '+102%' },
    { label: 'Purchase conversion', value: '+30%' },
    { label: 'Revenue', value: '+50%' }
  ],
  note: 'All without engineering'
};

export function OnboardingBuilderFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="From install to revenue in one platform"
            description="Adapty handles everything between first open and first payment: onboarding flows that convert, paywalls that sell, and analytics that tell you why."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.02}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="size-6" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">{feature.title}</p>
                      <h3 className="font-semibold text-lg mb-2">{feature.subtitle}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}

          {/* Case study card */}
          <BlurFade delay={0.22}>
            <Card className="h-full bg-primary/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-150 ease-out motion-reduce:transition-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <TrendingUpIcon className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Case Study</p>
                    <h3 className="font-semibold text-lg mb-2">{CASE_STUDY.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{CASE_STUDY.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {CASE_STUDY.results.map((result, idx) => (
                        <div key={idx}>
                          <p className="text-lg font-bold text-primary">{result.value}</p>
                          <p className="text-xs text-muted-foreground">{result.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 italic">{CASE_STUDY.note}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
