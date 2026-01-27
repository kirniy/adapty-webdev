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

// EXACT content from adapty.io/compare/revenuecat (scraped 2026-01-21)

// Comparison table data
const COMPARISON_ITEMS = [
  {
    feature: 'Infrastructure',
    adapty: {
      status: 'check',
      description:
        'The fastest paywall loading speed thanks to optimized CDN. Global distributed cache in 400 locations. Handles 3B+ requests per day'
    },
    competitor: {
      status: 'check',
      description: 'Standard infrastructure with reported latency issues'
    }
  },
  {
    feature: 'Integrations',
    adapty: { status: 'check', description: '22 integrations' },
    competitor: { status: 'check', description: '~30 integrations' }
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
        "Basic overview. Data isn't real-time. Charts require additional tinkering to get useful insights. Limited grouping options. 3 conversion metrics only"
    }
  },
  {
    feature: 'Predictive analytics',
    adapty: {
      status: 'check',
      description:
        'Sophisticated AI-powered revenue & LTV predictions used by 15,000+ apps generating $1.9B+ in revenue'
    },
    competitor: {
      status: 'no',
      description: 'No revenue prediction; LTV prediction in beta'
    }
  },
  {
    feature: 'No-code Paywall Builder',
    adapty: {
      status: 'check',
      description:
        'Huge template library and best-in-class Paywall Builder. Fastest paywall loading in the industry. Advanced widgets (timer, trial toggle), support for video/animated buttons. AI Paywall Generator'
    },
    competitor: {
      status: 'partial',
      description:
        "Paywalls don't support video, lack timers, trial toggles, and other conversion-driven widgets. No AI tools"
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
      description: 'Limited to 2 paywalls with 50/50 weight distribution'
    }
  },
  {
    feature: 'Advanced targeting',
    adapty: {
      status: 'check',
      description:
        'Target by any custom attribute, including ASA attribution (without MMP), revenue, subscription product, device type, and many other'
    },
    competitor: {
      status: 'partial',
      description:
        'Targeting limited to app version, country, platform, and a few other parameters'
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
    feature: 'Support chat',
    adapty: {
      status: 'check',
      description:
        'Live chat support for all paid plans, Slack support, dedicated Customer Success team, and Solution Engineers for enterprise'
    },
    competitor: {
      status: 'partial',
      description: 'Community forum only. Live chat requires enterprise plans'
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

// Migration mapping
const MIGRATION_MAPPING = [
  { from: 'Purchases.configure', to: 'Adapty.activate' },
  { from: 'getOfferings()', to: 'getPaywall(placement)' },
  { from: 'purchase()', to: 'makePurchase()' },
  { from: 'entitlements', to: 'accessLevels' },
  { from: 'restorePurchases()', to: 'restorePurchases()' },
  { from: 'isAnonymous', to: 'profile.customerUserId' }
];

// FAQs
const FAQS = [
  {
    question: 'What is the best way to implement in-app purchases?',
    answer:
      'You can: (1) build in-house (3-6 months dev time), (2) use backend services like Firebase (basic validation, but you still build paywalls, analytics, A/B tests), or (3) use a subscription platform like Adapty. Specialized platforms handle the full lifecycle (paywalls, analytics, optimization), so you launch faster (days vs. months) and usually get higher conversion rates.'
  },
  {
    question:
      'Does Adapty support the same platforms and integrations as RevenueCat?',
    answer:
      'Yes. Adapty supports iOS, Android, Flutter, React Native, Unity, plus 20+ analytics/marketing integrations (Amplitude, Mixpanel, AppsFlyer, Firebase, etc.). Both handle cross-platform sync and provide App Store and Google Play integrations. Adapty adds extras like Onboarding Builder, advanced targeting and A/B testing, and snappier analytics.'
  },
  {
    question: "What features does Adapty offer that RevenueCat doesn't have?",
    answer:
      'AI-powered predictive analytics; Paywall Builder with templates, video, trial toggles, and other widgets; Unlimited A/B tests with custom weight distribution; Advanced targeting (by attribution source, device, subscription history); No-code onboarding flow builder; Live chat support on all paid plans.'
  },
  {
    question:
      "How does Adapty's A/B testing compare to RevenueCat's paywall experiments?",
    answer:
      'Adapty: unlimited tests, custom traffic splits (20/30/50, etc.), test on existing users, advanced targeting. RevenueCat: only 2 variants, fixed 50/50, and only new users.'
  },
  {
    question: 'How difficult is it to migrate from RevenueCat to Adapty?',
    answer:
      'Most migrations finish in one day. Adapty provides code examples, SDK updates, and server-side notification setup. Free migration support and live chat help you transfer historical data.'
  },
  {
    question:
      'What happens to my data and analytics if I switch from RevenueCat to Adapty?',
    answer:
      'You can export your RevenueCat data (CSV) and Adapty will import it, including integration IDs (Amplitude, Mixpanel, AppsFlyer, etc.). From migration onward, new data flows directly into Adapty.'
  }
];

// Case studies
const CASE_STUDIES = [
  {
    name: 'Impala Studios',
    category: 'Publishing company',
    result: 'Migrated in 1 week',
    description:
      'After years with RevenueCat, Impala hit scaling roadblocks. Missing features and long-standing technical issues pushed the team to switch. With Adapty, they migrated in just one week, launching new paywalls twice as fast and cutting A/B test launch times in half.',
    quote:
      "Adapty goes beyond simple subscription management. It's a comprehensive platform that empowers developers to optimize every aspect of their app's monetization strategy. Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
    author: 'Sergey Lagutyonok',
    authorTitle: 'Product Manager at Impala Studios',
    link: '/case-studies/impala/'
  },
  {
    name: 'GlowUp - Makeup & Beauty',
    category: 'Lifestyle',
    result: 'Hit $1.2M ARR in 3 months',
    description:
      'GlowUp outgrew RevenueCat, no advanced A/B testing, limited data, no control over paywalls. Switching to Adapty changed everything. They won 77% of refund requests, tripled daily revenue, and scaled to $1.2M ARR in 3 months with the same installs.',
    quote:
      "RevenueCat wasn't the best for us, when we were looking at the A/B test paywall to see which pay wall that user would like to buy the most. We couldn't figure it out with RevenueCat because we're using Flutterflow and it's quite different.",
    author: 'Louis-David Paul-Hus',
    authorTitle: 'Co-founder & CTO of GlowUp',
    link: '/case-studies/glam-ai/'
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

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Comparison scale animation showing Adapty winning
function CompareScaleMagic() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center gap-2 justify-center py-4">
        <div className="w-20 h-3 bg-primary rounded-full" />
        <span className="text-xs text-muted-foreground">vs</span>
        <div className="w-12 h-3 bg-muted-foreground/30 rounded-full" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 justify-center py-4">
      <motion.div
        className="h-3 bg-primary rounded-full"
        animate={{ width: [60, 80, 70, 80] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span className="text-xs text-muted-foreground">vs</span>
      <motion.div
        className="h-3 bg-muted-foreground/30 rounded-full"
        animate={{ width: [50, 40, 45, 40] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

// Migration progress animation
function MigrationMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 150);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full w-full bg-primary" />
        </div>
        <CheckIcon className="size-4 text-primary" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <AnimatePresence mode="wait">
        {progress >= 100 ? (
          <motion.div
            key="check"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <CheckIcon className="size-4 text-primary" />
          </motion.div>
        ) : (
          <motion.span
            key="percent"
            className="text-xs text-muted-foreground tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {progress}%
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

// Revenue growth visualization
function RevenueMagic() {
  const shouldReduceMotion = useReducedMotion();
  const bars = [30, 45, 40, 60, 55, 80, 75, 95];

  if (shouldReduceMotion) {
    return (
      <div className="flex items-end gap-1 h-8">
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
    <div className="flex items-end gap-1 h-8">
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
        <div className="flex size-6 items-center justify-center rounded-full bg-primary/10">
          <CheckIcon className="size-4 text-green-500" />
        </div>
      );
    case 'partial':
      return (
        <div className="flex size-6 items-center justify-center rounded-full bg-yellow-500/20">
          <MinusIcon className="size-4 text-yellow-500" />
        </div>
      );
    case 'no':
      return (
        <div className="flex size-6 items-center justify-center rounded-full bg-red-500/20">
          <XIcon className="size-4 text-red-500" />
        </div>
      );
  }
}

export function CompareRevenueCat(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);
  const [hoveredCaseStudy, setHoveredCaseStudy] = React.useState<number | null>(
    null
  );
  const [hoveredQuote, setHoveredQuote] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={4000} />
      <div className="container relative z-10">
        {/* Hero */}
        <div className="py-16 md:py-24 text-center">
          <BlurFade delay={0.05}>
            <SiteHeading
              badge="vs RevenueCat"
              title="The RevenueCat alternative that actually grows your revenue"
              description="Find out why RevenueCat customers switch to Adapty and never look back"
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
            <CompareScaleMagic />
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
                <span>Enterprise-ready</span>
              </motion.div>
            </div>
          </BlurFade>
        </div>

        {/* Comparison Table */}
        <BlurFade delay={0.2}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Upgrade from RevenueCat to Adapty
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              While RevenueCat focuses on basic subscription infrastructure,
              Adapty is built as a complete revenue growth platform. That's why
              the world's leading app publishers like AppNation, Almus, and HubX
              choose Adapty.
            </p>

            <div className="overflow-x-auto rounded-xl border bg-card/50 relative">
              <BorderBeam
                size={200}
                duration={15}
                borderWidth={1}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-40"
              />
              <table className="w-full border-collapse relative z-10">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left py-4 px-6 font-semibold">
                      Feature
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-primary">
                      Adapty
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                      RevenueCat
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
                          <span className="text-sm text-muted-foreground">
                            {item.adapty.description}
                          </span>
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
                          <span className="text-sm text-muted-foreground">
                            {item.competitor.description}
                          </span>
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
        <BlurFade delay={0.25}>
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

        {/* Migration Section */}
        <BlurFade delay={0.3}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              Migrate from RevenueCat in one day
            </h2>
            <h3 className="text-xl font-semibold text-center mb-4">
              No worries, we'll guide you
            </h3>
            <div className="flex justify-center mb-6">
              <MigrationMagic />
            </div>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Many RevenueCat customers have already switched to Adapty. Most
              migrations take less than 24 hours, made even faster with our
              AI-optimized, MCP-ready docs.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div className="text-center font-semibold text-muted-foreground">
                  RevenueCat
                </div>
                <div></div>
                <div className="text-center font-semibold text-primary">
                  Adapty
                </div>
              </div>
              {MIGRATION_MAPPING.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center py-2"
                >
                  <code className="text-sm bg-muted/50 px-3 py-1 rounded text-right">
                    {item.from}
                  </code>
                  <ArrowRightIcon className="size-4 text-muted-foreground" />
                  <code className="text-sm bg-primary/10 px-3 py-1 rounded text-primary">
                    {item.to}
                  </code>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Button asChild>
                <Link href="https://app.adapty.io/registration">Sign up</Link>
              </Button>
              <Button
                asChild
                variant="outline"
              >
                <Link href="https://adapty.io/docs/migration-from-revenuecat">
                  Read the docs
                </Link>
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* Support Section */}
        <BlurFade delay={0.35}>
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
                    {hoveredQuote === index && (
                      <BorderBeam
                        size={100}
                        duration={6}
                        borderWidth={1.5}
                        colorFrom="hsl(var(--primary))"
                        colorTo="hsl(var(--primary)/0)"
                      />
                    )}
                    <Spotlight
                      className="from-primary/10 via-transparent to-transparent"
                      size={200}
                    />
                    <CardContent className="p-4 relative z-10">
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

        {/* Case Studies */}
        <BlurFade delay={0.4}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              You'll never look back
            </h2>
            <div className="flex justify-center mb-8">
              <RevenueMagic />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {CASE_STUDIES.map((study, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredCaseStudy(index)}
                  onMouseLeave={() => setHoveredCaseStudy(null)}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: hoveredCaseStudy === index ? -8 : 0,
                          scale: hoveredCaseStudy === index ? 1.02 : 1
                        }
                  }
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <Card
                    className={cn(
                      'h-full relative overflow-hidden transition-all duration-200',
                      hoveredCaseStudy === index && 'border-primary/50 '
                    )}
                  >
                    {hoveredCaseStudy === index && (
                      <BorderBeam
                        size={150}
                        duration={8}
                        borderWidth={1.5}
                        colorFrom="hsl(var(--primary))"
                        colorTo="hsl(var(--primary)/0)"
                      />
                    )}
                    <Spotlight
                      className="from-primary/15 via-primary/5 to-transparent"
                      size={350}
                    />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center font-bold text-lg text-primary"
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  scale: hoveredCaseStudy === index ? 1.1 : 1
                                }
                          }
                          transition={{ type: 'spring', duration: 0.2 }}
                        >
                          {study.name.charAt(0)}
                        </motion.div>
                        <div>
                          <h3 className="font-semibold">{study.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {study.category}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        className="text-lg font-bold text-primary mb-4"
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: hoveredCaseStudy === index ? 1.02 : 1
                              }
                        }
                      >
                        {study.result}
                      </motion.div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {study.description}
                      </p>
                      <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground mb-4">
                        "{study.quote}"
                      </blockquote>
                      <p className="text-sm font-semibold">{study.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {study.authorTitle}
                      </p>
                      <Link
                        href={study.link}
                        className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline group"
                      >
                        Read full story
                        <motion.span
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  x: hoveredCaseStudy === index ? 4 : 0
                                }
                          }
                          transition={{ duration: 0.15 }}
                        >
                          <ArrowRightIcon className="size-4" />
                        </motion.span>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* FAQs */}
        <BlurFade delay={0.45}>
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
