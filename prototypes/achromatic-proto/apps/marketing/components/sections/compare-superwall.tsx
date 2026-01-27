'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CheckIcon,
  MinusIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  XIcon,
  ZapIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordion';
import { Button } from '@workspace/ui/components/button';
import { Card, CardContent } from '@workspace/ui/components/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@workspace/ui/components/tabs';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { Spotlight } from '~/components/fragments/spotlight';

// EXACT content from adapty.io/compare/superwall (scraped 2026-01-21)

// Comparison table data
const COMPARISON_ITEMS = [
  {
    feature: 'Infrastructure',
    adapty: {
      status: 'check',
      description:
        'Complete subscription backend. Global distributed cache in 400 locations. Handles 3B+ requests per day'
    },
    competitor: {
      status: 'no',
      description: 'Paywall-only solution'
    }
  },
  {
    feature: 'Integrations',
    adapty: {
      status: 'check',
      description:
        '22 out-of-the-box integrations with analytics, attribution, and marketing tools'
    },
    competitor: {
      status: 'partial',
      description:
        'A handful of built-in integrations, custom implementation required for most tools'
    }
  },
  {
    feature: 'Advanced analytics',
    adapty: {
      status: 'check',
      description:
        'Detailed overview dashboard with real-time data. Installs to purchase funnel. Group and filter by multiple parameters, including offer type, paywall variant, user segments, and other key dimensions. 10 conversion metrics plus historical comparisons'
    },
    competitor: {
      status: 'partial',
      description:
        'Basic conversion analytics without predictions. Available only for iOS. Android analytics in private beta'
    }
  },
  {
    feature: 'Predictive analytics',
    adapty: {
      status: 'check',
      description:
        'Sophisticated AI-powered revenue & LTV predictions used by 15,000+ apps generating $1.9B+ in revenue'
    },
    competitor: { status: 'no', description: '' }
  },
  {
    feature: 'No-code Paywall Builder',
    adapty: {
      status: 'check',
      description:
        'Huge template library and best-in-class Paywall Builder. Fastest paywall loading in the industry. Advanced widgets (timer, trial toggle), support for video/animated buttons. AI Paywall Generator'
    },
    competitor: {
      status: 'check',
      description:
        'Paywall design is slightly more flexible due to WebView. The trade-off is a much slower paywall loading'
    }
  },
  {
    feature: 'Paywall implementation',
    adapty: {
      status: 'check',
      description:
        'Fastest paywall loading in the industry thanks to native implementation and optimized CDN. Fallback paywalls for 100% availability, even offline'
    },
    competitor: {
      status: 'no',
      description:
        'WebView rendering. Paywalls can load up to 5x slower, hurting conversion. No fallback support'
    }
  },
  {
    feature: 'A/B testing',
    adapty: {
      status: 'check',
      description:
        'Test unlimited paywalls with custom weight distribution. Run app-wide pricing tests or target a specific user touchpoint like settings or onboarding. Can test on existing customer base. AI-powered winner predictions'
    },
    competitor: {
      status: 'partial',
      description:
        'Decent A/B tests, but no cross-placement support and no predictions'
    }
  },
  {
    feature: 'No-code Onboarding Builder',
    adapty: {
      status: 'check',
      description: 'Fully customizable with A/B testing and advanced targeting'
    },
    competitor: { status: 'no', description: '' }
  },
  {
    feature: 'Ads Intelligence',
    adapty: {
      status: 'check',
      description:
        'Advanced analytics and campaign management for Apple Ads. Provides near real-time performance data, full-funnel attribution (no MMP), cohort-based ROAS tracking, and automation for managing keywords'
    },
    competitor: { status: 'no', description: '' }
  },
  {
    feature: 'Pricing',
    adapty: {
      status: 'check',
      description:
        'Core features free up to $10K MTR. Then 1% of MTR unlocks the full toolkit. Special rates for startups'
    },
    competitor: {
      status: 'partial',
      description:
        'Conversion-based pricing. Free up to 250 conversions per month, then $0.2 per conversion - expensive at scale'
    }
  },
  {
    feature: 'Customer support',
    adapty: {
      status: 'check',
      description:
        'Live chat support for all paid plans, Slack support, dedicated Customer Success team, and Solution Engineers for enterprise'
    },
    competitor: {
      status: 'check',
      description:
        'Knowledge base, AI search, and chat support. Dedicated Slack support and growth meetings for enterprise'
    }
  }
];

// Code examples
const CODE_EXAMPLES = {
  swift: `// Your app's code
import Adapty
Adapty.activate("PUBLIC_SDK_KEY")

// Make a purchase, Adapty handles the rest
do {
  let purchasedInfo = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
  kotlin: `// Your app's code
Adapty.activate(this, "YOUR_APP_KEY")

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
  when (result) {
    is AdaptyResult.Success -> {
      // successful purchase
    }
    is AdaptyResult.Error -> {
      // handle the error
    }
  }
}`,
  reactNative: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');

// Make a purchase, Adapty handles the rest
try {
  const profile = await adapty.makePurchase(product);
  // successful purchase
} catch (error) {
  // handle the error
}`,
  flutter: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';
Adapty().activate();

// Make a purchase, Adapty handles the rest
try {
  final profile = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle another errors
}`,
  unity: `// Your app's code
using AdaptySDK;

Adapty.makePurchase(product, (profile, error) => {
  if (error == null) {
    // successful purchase
  }
});`
};

// Feature sections
const FEATURE_SECTIONS = [
  {
    title: 'Create paywalls that actually make money',
    description:
      "Adapty's best-in-class Paywall Builder lets you design and deploy paywalls without coding and updating the app.",
    bullets: [
      'Use dozens of proven templates, AI Generator, or build from scratch',
      'Increase conversion with videos and advanced widgets like timer or trial toggle',
      'Localize and target paywalls by region, user segment, or custom attributes'
    ],
    link: '/paywall-builder',
    linkText: 'Build a paywall'
  },
  {
    title: 'Boost conversion rates',
    description:
      'Find wins faster with the most advanced A/B testing for mobile apps.',
    bullets: [
      'Test unlimited paywalls with custom weight distribution',
      'Get AI-powered insights to find out the most probable winner with limited data',
      "Run A/B tests across all placements to evaluate your app's overall monetization strategy"
    ],
    link: '/paywall-ab-testing',
    linkText: 'Explore A/B testing'
  },
  {
    title: "Personalize every user's journey to purchase",
    description:
      "Adapty's no-code Onboarding Builder lets you design fully customized onboarding flow, just like paywalls, and A/B test every step.",
    bullets: [
      'Animated charts, quizzes, videos, carousels, and more out of the box',
      'Variables to personalize onboarding for different user groups',
      'Detailed analytics: proceeds, ARPPU, conversion rate to purchase, and dozens of revenue metrics'
    ],
    link: 'https://adapty.io/docs/onboardings',
    linkText: 'Read the docs'
  }
];

// FAQs
const FAQS = [
  {
    question: 'What makes Adapty different from Superwall?',
    answer:
      'Superwall handles paywalls but lacks subscription management infrastructure, forcing you to integrate additional tools like RevenueCat. Adapty is an all-in-one platform with subscription backend, paywalls, analytics, predictive insights, and tests, everything in one SDK. The key difference: Adapty scales from launch to millions without requiring additional tools.'
  },
  {
    question: "How does Adapty's paywalls compare to Superwall?",
    answer:
      'Both offer customizable builders. Superwall uses WebView (flexible, but slower). Adapty uses native rendering for faster, smoother paywalls, even offline. Plus, Adapty adds AI paywall generation, predictive A/B testing, and app-wide analytics. Main difference: with Adapty, paywalls are part of a complete monetization system, not a standalone tool.'
  },
  {
    question: 'Does Adapty have React Native SDK?',
    answer:
      'Yes. Full support for React Native, iOS, Android, Flutter, and Unity. Includes subscription management, paywall presentation, analytics, and A/B testing. Works with both bare RN and Expo.'
  },
  {
    question: "Can I use Superwall for my app's subscription analytics?",
    answer:
      "Only basic conversion-focused analytics. No LTV predictions, cohort analysis, or full revenue tracking. For that, you'd need additional tools."
  },
  {
    question:
      'What happens to my data and analytics if I switch from Superwall to Adapty?',
    answer:
      'Adapty provides free migration assistance, including historical data import. Transition usually takes <24h: install SDK, test, release. All active subscriptions sync automatically once the app is updated.'
  },
  {
    question: 'Do I need RevenueCat if I use Superwall?',
    answer:
      "Yes. Superwall only handles paywall presentation. For subscription lifecycle, receipt validation, purchases, status tracking, you'll need RevenueCat or similar, meaning two separate SDKs, dashboards, and integration points."
  },
  {
    question: 'How much does Adapty cost compared to Superwall?',
    answer:
      'Adapty: free up to $10K MTR, then 1% of tracked revenue. Superwall: $0.20 per conversion after 250 free. At 10K monthly conversions, ~$2,000/month. With Adapty, you pay based on revenue, not conversions, usually more cost-effective as you grow.'
  }
];

// Support testimonials
const SUPPORT_QUOTES = [
  {
    quote:
      "My experience with your support was excellent... Super fast responses... But the most important thing for me... was that I felt like I'm dealing with a person with Patience and Knowledge... Keep doing this... We need you!!!",
    name: 'Vassilis'
  },
  {
    quote:
      "Lightning fast response and great guidance for this spaghetti-code programmer that doesn't understand most of this mumbo-jumbo high-tech stuff.",
    name: 'John'
  },
  {
    quote:
      'Unexpectedly good support, solved tricky issue within one working day.',
    name: 'Arturs'
  },
  {
    quote:
      'The responses were fast and accurate, I got my doubt resolved under 15 minutes. Thanks for the quick response.',
    name: 'Kosma'
  },
  { quote: 'Amazing. Fast and helpful.', name: 'Poliany' }
];

// Case study
const CASE_STUDY = {
  name: 'Wave: AI Note Taker',
  category: 'Productivity',
  result: '$2M ARR in 6 months',
  description:
    'Josh Mohrer, former head of Uber NY, went solo to build Wave. His first setup was a patchwork of tools - one for paywalls, another for analytics, and A/B testing somewhere else. Nothing connected, and revenue optimization turned into endless debugging.',
  impact:
    'Switching to Adapty changed everything. With paywalls, analytics, and A/B testing all in one place, Josh could launch and iterate paywall tests in days, not weeks.',
  finalResult:
    'The result: Wave scaled from $0 to $4M MRR in just 8 months, and is still going strong.',
  link: '/case-studies/wave/'
};

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// All-in-one platform visualization
function AllInOneMagic() {
  const shouldReduceMotion = useReducedMotion();
  const items = ['Paywalls', 'Analytics', 'A/B Tests', 'SDK'];

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center gap-2 py-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="px-2 py-1 text-xs bg-primary/10 rounded text-primary"
          >
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="px-2 py-1 text-xs bg-primary/10 rounded text-primary"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut'
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}

// Speedometer showing faster loading
function SpeedMagic() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="text-center">
          <div className="text-xl font-bold text-primary">200ms</div>
          <div className="text-xs text-muted-foreground">Adapty</div>
        </div>
        <div className="text-muted-foreground">vs</div>
        <div className="text-center">
          <div className="text-xl font-bold text-muted-foreground">1000ms</div>
          <div className="text-xs text-muted-foreground">WebView</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <motion.div
        className="text-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="text-xl font-bold text-primary"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          200ms
        </motion.div>
        <div className="text-xs text-muted-foreground">Adapty</div>
      </motion.div>
      <div className="text-muted-foreground">vs</div>
      <div className="text-center opacity-50">
        <div className="text-xl font-bold text-muted-foreground">1000ms</div>
        <div className="text-xs text-muted-foreground">WebView</div>
      </div>
    </div>
  );
}

// Revenue chart animation
function RevenueMagic() {
  const shouldReduceMotion = useReducedMotion();
  const bars = [25, 40, 35, 55, 50, 70, 65, 90];

  if (shouldReduceMotion) {
    return (
      <div className="flex items-end gap-1 h-8 justify-center">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-2 bg-primary/60 rounded-sm"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-end gap-1 h-8 justify-center">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-2 bg-primary/60 rounded-sm"
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{
            duration: 0.5,
            delay: i * 0.08,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 2
          }}
        />
      ))}
    </div>
  );
}

function StatusIcon({
  status
}: {
  status: 'check' | 'partial' | 'no';
}): React.JSX.Element {
  switch (status) {
    case 'check':
      return (
        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <CheckIcon className="size-4 text-primary" />
        </div>
      );
    case 'partial':
      return (
        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-yellow-500/20">
          <MinusIcon className="size-4 text-yellow-500" />
        </div>
      );
    case 'no':
      return (
        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
          <XIcon className="size-4 text-red-500" />
        </div>
      );
  }
}

export function CompareSuperwall(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(
    null
  );
  const [hoveredQuote, setHoveredQuote] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={6000} />
      <div className="container relative z-10">
        {/* Hero */}
        <div className="py-16 md:py-24 text-center">
          <BlurFade delay={0.05}>
            <SiteHeading
              badge="vs Superwall"
              title="Superwall vs Adapty: Why betting on just paywalls is risky"
              description="Choose the all-in-one platform you'll never outgrow"
            />
          </BlurFade>
          <BlurFade delay={0.1}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                >
                  <Link href="/schedule-demo">Book a demo</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <Link href="https://app.adapty.io/registration">
                    Start for free
                  </Link>
                </Button>
              </motion.div>
            </div>
          </BlurFade>
          <BlurFade delay={0.12}>
            <AllInOneMagic />
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <motion.div
                className="flex items-center gap-2"
                animate={
                  shouldReduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }
                }
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUpIcon className="size-4 text-primary" />
                <span>15,000+ apps</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                animate={
                  shouldReduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }
                }
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <ZapIcon className="size-4 text-primary" />
                <span>$1.9B+ revenue</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                animate={
                  shouldReduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }
                }
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <ShieldCheckIcon className="size-4 text-primary" />
                <span>All-in-one</span>
              </motion.div>
            </div>
          </BlurFade>
        </div>

        {/* Problem statement */}
        <BlurFade delay={0.2}>
          <div className="py-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">
              Superwall works great. Until it doesn't
            </h2>
            <SpeedMagic />
            <p className="text-muted-foreground text-center mt-4">
              With Superwall, you're only solving half the problem. You still
              need additional infrastructure tools for subscription management
              meaning two SDKs, two dashboards, two support teams, and zero
              unified view of your revenue.
            </p>
            <p className="text-muted-foreground text-center mt-4">
              Adapty gives you everything in one platform: paywalls that
              convert, subscription management that scales to millions,
              analytics that predict churn before it happens, and A/B tests that
              run themselves. Built by developers who were tired of duct-taping
              tools together.
            </p>
          </div>
        </BlurFade>

        {/* Comparison Table */}
        <BlurFade delay={0.25}>
          <div className="py-16">
            <div className="overflow-x-auto rounded-xl border bg-card/50 relative">
              <BorderBeam
                size={200}
                duration={15}
                borderWidth={1}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-40"
              />
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left py-4 px-6 font-semibold">
                      Feature
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-primary">
                      Adapty
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                      Superwall
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ITEMS.map((item, index) => (
                    <motion.tr
                      key={index}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={cn(
                        'border-b border-border/50 transition-colors cursor-default',
                        hoveredRow === index && 'bg-primary/5'
                      )}
                    >
                      <td className="py-4 px-6 font-medium">{item.feature}</td>
                      <td className="py-4 px-6">
                        <motion.div
                          className="flex items-start gap-3"
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  x: hoveredRow === index ? 4 : 0
                                }
                          }
                          transition={{
                            type: 'spring',
                            duration: 0.2,
                            bounce: 0
                          }}
                        >
                          <StatusIcon
                            status={
                              item.adapty.status as 'check' | 'partial' | 'no'
                            }
                          />
                          {item.adapty.description && (
                            <span className="text-sm text-muted-foreground">
                              {item.adapty.description}
                            </span>
                          )}
                        </motion.div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-start gap-3">
                          <StatusIcon
                            status={
                              item.competitor.status as
                                | 'check'
                                | 'partial'
                                | 'no'
                            }
                          />
                          {item.competitor.description && (
                            <span className="text-sm text-muted-foreground">
                              {item.competitor.description}
                            </span>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Button
                asChild
                size="lg"
              >
                <Link href="/schedule-demo">Book a demo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <Link href="https://app.adapty.io/registration">
                  Start for free
                </Link>
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* SDK Section */}
        <BlurFade delay={0.3}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              From zero to revenue insights in under 2 hours
            </h2>
            <h3 className="text-xl font-semibold text-center mb-8">
              Code less, earn more
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Integrate in-app purchases quickly without server coding. Adapty
              automatically manages subscription states behind the scenes,
              handling free trials, renewals, refunds, and more through a
              simple, developer-friendly SDK.
            </p>

            <Tabs
              defaultValue="swift"
              className="max-w-3xl mx-auto"
            >
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="swift">Swift</TabsTrigger>
                <TabsTrigger value="kotlin">Kotlin</TabsTrigger>
                <TabsTrigger value="reactNative">React Native</TabsTrigger>
                <TabsTrigger value="flutter">Flutter</TabsTrigger>
                <TabsTrigger value="unity">Unity</TabsTrigger>
              </TabsList>
              {Object.entries(CODE_EXAMPLES).map(([key, code]) => (
                <TabsContent
                  key={key}
                  value={key}
                >
                  <Card className="bg-muted/30 border-border/50">
                    <CardContent className="p-4">
                      <pre className="text-sm text-zinc-300 overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-zinc-500">
                          100% Open Source
                        </span>
                        <Link
                          href="https://github.com/adaptyteam"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline"
                        >
                          Go to GitHub
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </BlurFade>

        {/* Feature Sections */}
        <BlurFade delay={0.35}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-12">
              Build, test, and optimize your way to 2x revenue
            </h2>
            <div className="space-y-16">
              {FEATURE_SECTIONS.map((section, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {section.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          className="flex items-start gap-3"
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  x: hoveredFeature === index ? 4 : 0
                                }
                          }
                          transition={{
                            type: 'spring',
                            duration: 0.2,
                            bounce: 0,
                            delay: bulletIndex * 0.05
                          }}
                        >
                          <CheckIcon className="size-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {bullet}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      href={section.link}
                      className="inline-flex items-center gap-2 text-primary hover:underline group"
                    >
                      {section.linkText}
                      <motion.span
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                x: hoveredFeature === index ? 4 : 0
                              }
                        }
                        transition={{ duration: 0.15 }}
                      >
                        <ArrowRightIcon className="size-4" />
                      </motion.span>
                    </Link>
                  </div>
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: hoveredFeature === index ? 1.02 : 1
                          }
                    }
                    transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
                    className={cn(
                      'relative h-64 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden',
                      hoveredFeature === index && ''
                    )}
                  >
                    <Spotlight
                      className="from-primary/20 via-primary/10 to-transparent"
                      size={300}
                    />
                    {hoveredFeature === index && (
                      <BorderBeam
                        size={160}
                        duration={10}
                        borderWidth={1.5}
                        colorFrom="hsl(var(--primary))"
                        colorTo="hsl(var(--primary)/0)"
                      />
                    )}
                    <motion.div
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary/30 relative z-10"
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: hoveredFeature === index ? 1.1 : 1
                            }
                      }
                      transition={{ type: 'spring', duration: 0.3 }}
                    >
                      {index === 0
                        ? 'Paywalls'
                        : index === 1
                          ? 'A/B Tests'
                          : 'Onboarding'}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Analytics */}
        <BlurFade delay={0.4}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              Identify revenue opportunities faster and predict churn
            </h2>
            <h3 className="text-xl font-semibold text-center mb-8">
              Make smarter decisions with predictive insights
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Enjoy a full set of metrics and tools to optimize your
              monetization strategy and ensure future growth.
            </p>
            <ul className="max-w-2xl mx-auto space-y-3">
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Real-time cross-platform analytics: funnels, cohorts,
                  retention, LTV, and more
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Powerful segmentation: compare and group data to identify gaps
                  and growth opportunities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Predict LTV and revenue up to 12 months ahead to single out
                  your most profitable cohorts and adjust strategy
                </span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <Link
                href="/revenue-analytics"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Explore analytics
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </BlurFade>

        {/* Migration */}
        <BlurFade delay={0.45}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              Migrate from Superwall in one day
            </h2>
            <h3 className="text-xl font-semibold text-center mb-8">
              No worries, we'll guide you
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Many Superwall customers have already switched to Adapty. Most
              migrations take less than 24 hours, made even faster with our
              AI-optimized, MCP-ready docs.
            </p>
            <div className="max-w-2xl mx-auto">
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                    1
                  </span>
                  <span className="text-muted-foreground pt-1">
                    Install Adapty SDK and tweak a few parameters.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                    2
                  </span>
                  <span className="text-muted-foreground pt-1">
                    Test and release your app.
                  </span>
                </li>
              </ol>
              <p className="text-muted-foreground mt-6">
                If you want to import your historical data into Adapty, we can
                help with that too. Our team will make sure your migration is
                smooth and stress-free.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link href="https://app.adapty.io/registration">Sign up</Link>
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* Support Section */}
        <BlurFade delay={0.5}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              When you need help, we're already there
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Support isn't an afterthought, it's what makes everything work.
              Our team knows why your Android conversions dropped, what that
              obscure Apple receipt error means, or how to fix an edge case
              affecting 0.1% of users.
            </p>
            <ul className="max-w-md mx-auto space-y-2 mb-8">
              <li className="flex items-center gap-3">
                <CheckIcon className="size-5 text-primary" />
                <span className="text-muted-foreground">
                  Live chat for quick fixes
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon className="size-5 text-green-500" />
                <span className="text-muted-foreground">
                  Slack for ongoing help
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon className="size-5 text-green-500" />
                <span className="text-muted-foreground">
                  Dedicated Customer Support Managers when you're scaling
                </span>
              </li>
            </ul>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {SUPPORT_QUOTES.slice(0, 3).map((item, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredQuote(index)}
                  onMouseLeave={() => setHoveredQuote(null)}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: hoveredQuote === index ? -4 : 0,
                          scale: hoveredQuote === index ? 1.02 : 1
                        }
                  }
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <Card
                    className={cn(
                      'h-full relative overflow-hidden transition-all duration-200',
                      hoveredQuote === index && 'border-primary/50 '
                    )}
                  >
                    <Spotlight
                      className="from-primary/10 via-transparent to-transparent"
                      size={200}
                    />
                    <CardContent className="p-4 relative">
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "{item.quote}"
                      </p>
                      <p className="text-sm font-semibold">{item.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Case Study */}
        <BlurFade delay={0.55}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              You'll never look back
            </h2>
            <div className="flex justify-center mb-8">
              <RevenueMagic />
            </div>
            <Card className="max-w-3xl mx-auto bg-card/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="size-16 rounded-xl bg-muted flex items-center justify-center font-bold text-xl">
                    W
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{CASE_STUDY.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {CASE_STUDY.category}
                    </p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-4">
                  {CASE_STUDY.result}
                </div>
                <p className="text-muted-foreground mb-4">
                  {CASE_STUDY.description}
                </p>
                <p className="text-muted-foreground mb-4">
                  {CASE_STUDY.impact}
                </p>
                <p className="font-semibold text-primary">
                  {CASE_STUDY.finalResult}
                </p>
                <Link
                  href={CASE_STUDY.link}
                  className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Read full story
                  <ArrowRightIcon className="size-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </BlurFade>

        {/* FAQs */}
        <BlurFade delay={0.6}>
          <div className="py-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
