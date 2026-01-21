'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  DownloadIcon,
  ToggleRightIcon,
  TrendingUpIcon,
  ScissorsIcon,
  SparklesIcon,
  DollarSignIcon,
  ShieldIcon
} from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/refund-saver (scraped 2026-01-21)

// "Start saving refunds with just one click" - 3 steps
const STEPS = [
  {
    number: '1',
    icon: DownloadIcon,
    title: 'Install the Adapty SDK',
    description: 'Use Adapty as your subscription infrastructure.',
    link: 'https://adapty.io/docs/installation-of-adapty-sdks',
    linkText: 'Install the Adapty SDK'
  },
  {
    number: '2',
    icon: ToggleRightIcon,
    title: 'Turn on Refund Saver',
    description: 'Let Adapty handle refund requests by sharing key app usage info with Apple.',
    link: null,
    linkText: null
  },
  {
    number: '3',
    icon: TrendingUpIcon,
    title: 'Win back up to 5% of MRR',
    description: 'Get extra revenue back with zero effort.',
    link: null,
    linkText: null
  }
];

// "Why Adapty Refund Saver?" - 4 benefits
const BENEFITS = [
  {
    icon: ScissorsIcon,
    title: 'Cut refunds by 40%',
    description: 'Keep more of your hard-earned revenue with smarter refund handling.'
  },
  {
    icon: SparklesIcon,
    title: 'Zero extra effort',
    description: "It's fully automated - sit back and let it do the work for you."
  },
  {
    icon: DollarSignIcon,
    title: 'Adapty pays for itself',
    description: "Recover enough revenue, and Adapty can practically cost you nothing."
  },
  {
    icon: ShieldIcon,
    title: 'No legal consequences',
    description: "Refund Saver automates everything, while Apple makes the final decision - no legal responsibility on your side."
  }
];

// SDKs from adapty.io/refund-saver
const SDKS = [
  { name: 'Swift SDK', link: '/sdk/ios/' },
  { name: 'Kotlin SDK', link: '/sdk/android/' },
  { name: 'React Native SDK', link: '/sdk/react-native/' },
  { name: 'Unity SDK', link: '/sdk/unity/' },
  { name: 'Flutter SDK', link: '/sdk/flutter/' },
  { name: 'Capacitor SDK', link: '/sdk/capacitor/' },
  { name: 'KMP SDK', link: '/sdk/kmp/' },
  { name: 'FlutterFlow', link: '/sdk/flutterflow/' },
  { name: 'Web API', link: '/sdk/web/' },
  { name: 'Stripe', link: '/integrations/stripe/' }
];

// Case studies from adapty.io/refund-saver
const CASE_STUDIES = [
  {
    name: 'Fotorama',
    category: 'Photo & Video',
    result: 'Refund rate dropped 40%',
    description: 'How to decrease the refund rate with Adapty.',
    link: '/case-studies/fotorama/'
  },
  {
    name: 'Pepapp',
    category: 'Health & Fitness',
    result: '400% ROI on Adapty',
    description: 'How to make Adapty for free with Refund Saver.',
    link: '/case-studies/pepapp/'
  }
];

export function RefundSaverFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1600} />
      <div className="container py-20 relative z-10">
        {/* How it works - 3 steps */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Start saving refunds with just one click"
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05}>
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    {step.link ? (
                      <Link
                        href={step.link}
                        className="font-semibold text-lg mb-2 hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        {step.title}
                        <ArrowRightIcon className="size-4" />
                      </Link>
                    ) : (
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    )}
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* SDK list */}
        <BlurFade delay={0.25}>
          <div className="mt-16">
            <div className="flex flex-wrap justify-center gap-3">
              {SDKS.map((sdk, index) => (
                <Link
                  key={index}
                  href={sdk.link}
                  className="px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150 ease-out motion-reduce:transition-none"
                >
                  {sdk.name}
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Refund calculator CTA */}
        <BlurFade delay={0.3}>
          <div className="mt-16 text-center">
            <div className="inline-block p-8 rounded-2xl bg-muted/50 border border-border/50">
              <h3 className="text-xl font-semibold mb-2">Check your app refund saving potential</h3>
              <p className="text-muted-foreground mb-4">
                Do you want to reduce the number of refunds? Let's calculate how much you can save!
              </p>
              <Link
                href="https://adapty.io/refund-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Refund calculator
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </BlurFade>

        {/* Why Adapty Refund Saver? - 4 benefits */}
        <BlurFade delay={0.35}>
          <div className="mt-20">
            <SiteHeading
              title="Why Adapty Refund Saver?"
            />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFITS.map((benefit, index) => (
            <BlurFade key={index} delay={0.4 + index * 0.05}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <benefit.icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* Case studies section */}
        <BlurFade delay={0.6}>
          <div className="mt-20">
            <SiteHeading
              title="Real success stories"
            />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {CASE_STUDIES.map((study, index) => (
            <BlurFade key={index} delay={0.65 + index * 0.05}>
              <Link href={study.link} className="group">
                <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none">
                  <CardContent className="p-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{study.category}</p>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{study.name}</h3>
                    <p className="text-primary font-semibold mb-2">{study.result}</p>
                    <p className="text-sm text-muted-foreground">{study.description}</p>
                    <p className="text-sm text-primary mt-3 inline-flex items-center gap-1 group-hover:underline">
                      Read more
                      <ArrowRightIcon className="size-3" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}
