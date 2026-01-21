'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CodeIcon,
  GlobeIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
  DatabaseIcon
} from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/sdk (scraped 2026-01-21)

// SDK platforms
const SDKS = [
  { name: 'Swift SDK', link: '/sdk/ios/', platform: 'iOS' },
  { name: 'Kotlin SDK', link: '/sdk/android/', platform: 'Android' },
  { name: 'React Native SDK', link: '/sdk/react-native/', platform: 'Cross-platform' },
  { name: 'Unity SDK', link: '/sdk/unity/', platform: 'Game engines' },
  { name: 'Flutter SDK', link: '/sdk/flutter/', platform: 'Cross-platform' },
  { name: 'Capacitor SDK', link: '/sdk/capacitor/', platform: 'Cross-platform' },
  { name: 'KMP SDK', link: '/sdk/kmp/', platform: 'Kotlin Multiplatform' },
  { name: 'FlutterFlow', link: '/sdk/flutterflow/', platform: 'Low-code' },
  { name: 'Web API', link: '/sdk/web/', platform: 'Web' },
  { name: 'Stripe', link: '/integrations/stripe/', platform: 'Payments' }
];

// Code examples from adapty.io/sdk
const CODE_EXAMPLES = {
  swift: `// Your app's code
import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")

  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
  kotlin: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
  when (result) {
    is AdaptyResult.Success -> {
      if (result.value is AdaptyPurchaseResult.Success)
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

try {
  await Adapty().activate();

  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
  unity: `// Your app's code
using AdaptySDK;

Adapty.makePurchase(product, (profile, error) => {
  if (error == null) {
    // successful purchase
  }
});`
};

// Features from adapty.io/sdk
const FEATURES = [
  {
    icon: GlobeIcon,
    title: 'Fast API with worldwide CDN',
    description: 'Whenever your user is in the world, Adapty API will work blazingly fast, minimizing friction with payments.'
  },
  {
    icon: RefreshCwIcon,
    title: 'Cross-platform subscriber sync',
    description: "Adapty syncs your subscribers' state across iOS, Android, and Web. Use Adapty as a source of truth to safely grant premium access to your users.",
    link: '/subscription-sync/',
    linkText: 'Learn more about sync'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Server-side receipt verification',
    description: "You don't need to write server processing for receipt verification, we've done it for you."
  },
  {
    icon: DatabaseIcon,
    title: 'Ready-to-go subscription data lake',
    description: 'Adapty collects and enriches subscription events from subscribers and can push them to 3rd party services or your ETL.',
    link: '/integrations/',
    linkText: 'Learn more about integrations'
  }
];

// Testimonials from adapty.io/sdk
const TESTIMONIALS = [
  {
    quote: "The server-side API for subscribers is a game-changer, allowing us to check subscriber states and manage user attributes effortlessly.",
    name: 'Yana Belenkaya',
    title: 'Product manager at Locals'
  },
  {
    quote: "They have a great external API that makes it easy to pass related events to other analytics tools such as Amplitude and Mixpanel.",
    name: 'Chris Bick',
    title: 'Founder and CEO, Bickster'
  }
];

// Stats from adapty.io/sdk
const STATS = [
  { value: '500M', label: 'subscription events / month' },
  { value: '1.4B', label: 'users' },
  { value: '2.8M', label: 'subscribers / month' },
  { value: '9B', label: 'API calls / month' }
];

// Related pages
const RELATED_PAGES = [
  { title: 'Fallback paywalls', link: '/fallback-paywalls/' },
  { title: 'Subscriber sync', link: '/subscription-sync/' }
];

export function SDKFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2400} />
      <div className="container py-20 relative z-10">
        {/* SDK Picker */}
        <BlurFade delay={0.05}>
          <SiteHeading title="Pick the SDK for your platform" />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
        </BlurFade>

        {/* Developer-friendly SDK with code examples */}
        <BlurFade delay={0.15}>
          <div className="mt-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Developer-friendly SDK</h3>
              <p className="text-muted-foreground">
                Get started with in-app payments in a couple of hours, even if you do it from scratch. You only need 3 SDK methods to begin.
              </p>
              <Link
                href="https://adapty.io/docs/quickstart-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1 mt-2"
              >
                Get started with SDK
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>

            <Tabs defaultValue="swift" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="swift">Swift</TabsTrigger>
                <TabsTrigger value="kotlin">Kotlin</TabsTrigger>
                <TabsTrigger value="reactNative">React Native</TabsTrigger>
                <TabsTrigger value="flutter">Flutter</TabsTrigger>
                <TabsTrigger value="unity">Unity</TabsTrigger>
              </TabsList>
              {Object.entries(CODE_EXAMPLES).map(([key, code]) => (
                <TabsContent key={key} value={key}>
                  <Card className="bg-zinc-950 border-border/50">
                    <CardContent className="p-4">
                      <pre className="text-sm text-zinc-300 overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-zinc-500">100% Open Source</span>
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

        {/* Features grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.05}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none">
                <CardContent className="p-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <feature.icon className="size-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
                  {feature.link && feature.linkText && (
                    <Link
                      href={feature.link}
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {feature.linkText}
                      <ArrowRightIcon className="size-3" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* Testimonials */}
        <BlurFade delay={0.4}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </BlurFade>

        {/* Stats section */}
        <BlurFade delay={0.45}>
          <div className="mt-20">
            <SiteHeading title="Enterprise-grade battle-tested solution" />
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Learn more section */}
        <BlurFade delay={0.5}>
          <div className="mt-20">
            <SiteHeading title="Learn more" />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <Link
                  key={index}
                  href={page.link}
                  className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50 font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150 ease-out motion-reduce:transition-none inline-flex items-center gap-2"
                >
                  {page.title}
                  <ArrowRightIcon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
