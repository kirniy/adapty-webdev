'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRightIcon,
  CopyIcon,
  CheckIcon
} from 'lucide-react';

import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@workspace/ui/components/tabs';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

// SDK Languages with their code snippets
const SDK_SNIPPETS = {
  swift: {
    name: 'Swift',
    label: 'iOS',
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.98 14.316c.032-.503.048-1.013.048-1.527 0-5.63-4.008-10.314-9.324-11.373C12.45.972 12.22.949 12 .949c-5.525 0-10.001 4.476-10.001 10.001 0 .22.023.45.067.704 1.06 5.316 5.743 9.324 11.373 9.324.514 0 1.024-.016 1.527-.048 1.395-.088 2.73-.36 3.978-.795a11.99 11.99 0 003.036-1.695.75.75 0 00-.92-1.185 10.49 10.49 0 01-2.657 1.483c-1.092.381-2.256.62-3.478.698-.44.028-.885.042-1.337.042-4.935 0-9.053-3.51-9.974-8.162a8.49 8.49 0 01-.048-.566c0-4.694 3.806-8.501 8.5-8.501.188 0 .394.02.616.062 4.652.92 8.162 5.039 8.162 9.974 0 .452-.014.897-.042 1.337a10.49 10.49 0 01-.698 3.478 10.49 10.49 0 01-1.483 2.657.75.75 0 001.185.92 11.99 11.99 0 001.695-3.036c.435-1.248.707-2.583.795-3.978z"/>
        <path d="M12 6.949a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5a.75.75 0 01.75-.75z"/>
      </svg>
    ),
    code: `import Adapty

// Initialize Adapty SDK
Adapty.activate("YOUR_SDK_KEY")

// Get paywall
let paywall = try await Adapty.getPaywall("premium")

// Make purchase
let result = try await Adapty.makePurchase(product)
print("Purchase successful: \\(result.profile)")`,
    docsUrl: 'https://docs.adapty.io/docs/ios-sdk'
  },
  kotlin: {
    name: 'Kotlin',
    label: 'Android',
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 24H0V0h24L12 12z"/>
      </svg>
    ),
    code: `import io.adapty.Adapty

// Initialize Adapty SDK
Adapty.activate(applicationContext, "YOUR_SDK_KEY")

// Get paywall
Adapty.getPaywall("premium") { result ->
    result.onSuccess { paywall ->
        // Show paywall UI
    }
}

// Make purchase
Adapty.makePurchase(activity, product) { result ->
    result.onSuccess { profile ->
        println("Purchase successful")
    }
}`,
    docsUrl: 'https://docs.adapty.io/docs/android-sdk'
  },
  reactNative: {
    name: 'React Native',
    label: 'RN',
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467z"/>
      </svg>
    ),
    code: `import { adapty } from 'react-native-adapty';

// Initialize Adapty SDK
await adapty.activate('YOUR_SDK_KEY');

// Get paywall
const paywall = await adapty.getPaywall('premium');
const products = await adapty.getPaywallProducts(paywall);

// Make purchase
const result = await adapty.makePurchase(products[0]);
console.log('Purchase successful:', result.profile);`,
    docsUrl: 'https://docs.adapty.io/docs/react-native-sdk'
  },
  flutter: {
    name: 'Flutter',
    label: 'Flutter',
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
      </svg>
    ),
    code: `import 'package:adapty_flutter/adapty_flutter.dart';

// Initialize Adapty SDK
await Adapty().activate('YOUR_SDK_KEY');

// Get paywall
final paywall = await Adapty().getPaywall('premium');
final products = await Adapty().getPaywallProducts(paywall);

// Make purchase
final result = await Adapty().makePurchase(products.first);
print('Purchase successful: \${result.profile}');`,
    docsUrl: 'https://docs.adapty.io/docs/flutter-sdk'
  },
  unity: {
    name: 'Unity',
    label: 'Unity',
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.4 17.8l-6.7-4V8.5l6.7 4.6v4.7zM11.2 12l-6.7-4.6L11.2 3l6.7 4.4-6.7 4.6zm6.7 1.8l-6.7 4.6v-4.7l6.7-4.6v4.7zM24 5.6v12.8l-11.2 6.4L1.6 18.4V5.6L12.8-.8 24 5.6z"/>
      </svg>
    ),
    code: `using AdaptySDK;

// Initialize Adapty SDK
Adapty.Activate("YOUR_SDK_KEY");

// Get paywall
var paywall = await Adapty.GetPaywall("premium");
var products = await Adapty.GetPaywallProducts(paywall);

// Make purchase
var result = await Adapty.MakePurchase(products[0]);
Debug.Log($"Purchase successful: {result.Profile}");`,
    docsUrl: 'https://docs.adapty.io/docs/unity-sdk'
  }
};

type Language = keyof typeof SDK_SNIPPETS;

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="absolute right-2 top-2 h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
    >
      {copied ? (
        <CheckIcon className="size-4 text-green-500" />
      ) : (
        <CopyIcon className="size-4" />
      )}
    </Button>
  );
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <CopyButton code={code} />
      <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm leading-relaxed text-zinc-100 dark:bg-zinc-900">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}

export function SDKCode(): React.JSX.Element {
  const [activeTab, setActiveTab] = React.useState<Language>('swift');

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={600} />
      <div className="container py-16 lg:py-24 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <BlurFade>
              <Badge variant="outline" className="w-fit rounded-full">
                Developer-First SDK
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                10 lines of code.
                <br />
                <span className="text-muted-foreground">All platforms.</span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="max-w-md text-lg text-muted-foreground">
                Integrate in-app purchases in minutes with our battle-tested SDKs.
                Works seamlessly across iOS, Android, React Native, Flutter, and Unity.
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-primary" />
                  Server-side receipt validation
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-primary" />
                  Automatic subscription status sync
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-primary" />
                  Built-in analytics and attribution
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-primary" />
                  Remote paywall configuration
                </li>
              </ul>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="https://docs.adapty.io/"
                  className={cn(
                    'inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
                  )}
                >
                  View Documentation
                  <ArrowRightIcon className="size-4" />
                </Link>
                <Link
                  href={SDK_SNIPPETS[activeTab].docsUrl}
                  className="inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors hover:bg-accent"
                >
                  {SDK_SNIPPETS[activeTab].name} SDK Guide
                </Link>
              </div>
            </BlurFade>
          </div>

          {/* Right: Code */}
          <BlurFade delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border bg-card shadow-lg overflow-hidden"
            >
              <Tabs
                value={activeTab}
                onValueChange={(value) => setActiveTab(value as Language)}
                className="w-full"
              >
                <div className="border-b bg-muted/50 px-4">
                  <TabsList className="h-12 bg-transparent gap-1">
                    {(Object.entries(SDK_SNIPPETS) as [Language, typeof SDK_SNIPPETS.swift][]).map(
                      ([key, snippet]) => (
                        <TabsTrigger
                          key={key}
                          value={key}
                          className="data-[state=active]:bg-background rounded-md px-3 py-1.5 text-xs font-medium"
                        >
                          <span className="mr-1.5">{snippet.icon}</span>
                          {snippet.label}
                        </TabsTrigger>
                      )
                    )}
                  </TabsList>
                </div>

                {(Object.entries(SDK_SNIPPETS) as [Language, typeof SDK_SNIPPETS.swift][]).map(
                  ([key, snippet]) => (
                    <TabsContent key={key} value={key} className="m-0">
                      <CodeBlock code={snippet.code} language={key} />
                    </TabsContent>
                  )
                )}
              </Tabs>
            </motion.div>
          </BlurFade>
        </div>

        {/* SDK Platform Links */}
        <BlurFade delay={0.5}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium">Available for:</span>
            {[
              { name: 'iOS', href: 'https://docs.adapty.io/docs/ios-sdk' },
              { name: 'Android', href: 'https://docs.adapty.io/docs/android-sdk' },
              { name: 'React Native', href: 'https://docs.adapty.io/docs/react-native-sdk' },
              { name: 'Flutter', href: 'https://docs.adapty.io/docs/flutter-sdk' },
              { name: 'Unity', href: 'https://docs.adapty.io/docs/unity-sdk' },
              { name: 'Web', href: 'https://docs.adapty.io/docs/web' },
            ].map((platform, i) => (
              <React.Fragment key={platform.name}>
                {i > 0 && <span className="text-border">|</span>}
                <Link
                  href={platform.href}
                  className="transition-colors hover:text-foreground"
                >
                  {platform.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
