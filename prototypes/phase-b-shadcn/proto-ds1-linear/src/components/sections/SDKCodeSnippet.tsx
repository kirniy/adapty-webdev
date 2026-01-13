"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const codeSnippets = {
  javascript: `import { adapty } from 'adapty';

await adapty.activate('YOUR_API_KEY');

const profile = await adapty.getProfile();
const isPremium = profile.accessLevels['premium']?.isActive;`,
  reactNative: `import { adapty } from 'react-native-adapty';

await adapty.activate('YOUR_API_KEY');

const profile = await adapty.getProfile();
const isPremium = profile.accessLevels.premium?.isActive;`,
  flutter: `import 'package:adapty_flutter/adapty_flutter.dart';

await Adapty().activate('YOUR_API_KEY');

final profile = await Adapty().getProfile();
final isPremium = profile.accessLevels['premium']?.isActive;`,
  swift: `import Adapty

Adapty.activate("YOUR_API_KEY")

Adapty.getProfile { result in
    let isPremium = result?.accessLevels["premium"]?.isActive
}`,
};

const platforms = [
  { name: "iOS", icon: "/logos/sdk/swift.svg" },
  { name: "Android", icon: "/logos/sdk/kotlin.svg" },
  { name: "Flutter", icon: "/logos/sdk/flutter.svg" },
  { name: "React Native", icon: "/logos/sdk/react-native.svg" },
  { name: "Unity", icon: "/logos/sdk/unity.svg" },
  { name: "Web", icon: "/logos/sdk/web-api.svg" },
  { name: "Stripe", icon: "/logos/sdk/stripe.svg" },
  { name: "Capacitor", icon: "/logos/sdk/capacitor.svg" },
  { name: "KMP", icon: "/logos/sdk/kmp.svg" },
  { name: "FlutterFlow", icon: "/logos/sdk/flutterflow.svg" },
];

export function SDKCodeSnippet() {
  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 tracking-[var(--letter-spacing-heading)]">
            One SDK for every platform
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Integrate Adapty in minutes with native SDKs
          </p>
        </div>

        {/* Code Tabs */}
        <div className="max-w-4xl mx-auto mb-16">
          <Tabs defaultValue="javascript" className="w-full">
            <TabsList
              className={cn(
                "grid w-full grid-cols-4 mb-6",
                "bg-[var(--bg-secondary)] border border-[var(--border-subtle)]",
                "rounded-[var(--card-radius)] p-1"
              )}
            >
              <TabsTrigger
                value="javascript"
                className={cn(
                  "rounded-lg text-sm font-medium",
                  "data-[state=active]:bg-[var(--bg-elevated)]",
                  "data-[state=active]:text-[var(--text-primary)]",
                  "data-[state=inactive]:text-[var(--text-muted)]",
                  "transition-all duration-[var(--duration-fast)]"
                )}
              >
                JavaScript
              </TabsTrigger>
              <TabsTrigger
                value="reactNative"
                className={cn(
                  "rounded-lg text-sm font-medium",
                  "data-[state=active]:bg-[var(--bg-elevated)]",
                  "data-[state=active]:text-[var(--text-primary)]",
                  "data-[state=inactive]:text-[var(--text-muted)]",
                  "transition-all duration-[var(--duration-fast)]"
                )}
              >
                React Native
              </TabsTrigger>
              <TabsTrigger
                value="flutter"
                className={cn(
                  "rounded-lg text-sm font-medium",
                  "data-[state=active]:bg-[var(--bg-elevated)]",
                  "data-[state=active]:text-[var(--text-primary)]",
                  "data-[state=inactive]:text-[var(--text-muted)]",
                  "transition-all duration-[var(--duration-fast)]"
                )}
              >
                Flutter
              </TabsTrigger>
              <TabsTrigger
                value="swift"
                className={cn(
                  "rounded-lg text-sm font-medium",
                  "data-[state=active]:bg-[var(--bg-elevated)]",
                  "data-[state=active]:text-[var(--text-primary)]",
                  "data-[state=inactive]:text-[var(--text-muted)]",
                  "transition-all duration-[var(--duration-fast)]"
                )}
              >
                Swift
              </TabsTrigger>
            </TabsList>

            {Object.entries(codeSnippets).map(([key, code]) => (
              <TabsContent key={key} value={key}>
                <div
                  className={cn(
                    "rounded-[var(--card-radius)] overflow-hidden",
                    "bg-[var(--bg-secondary)] border border-[var(--border-subtle)]",
                    "shadow-[var(--shadow-card)]"
                  )}
                >
                  {/* Code Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-tertiary)]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="ml-2 text-xs text-[var(--text-muted)]">
                      {key === "swift" ? "main.swift" : key === "flutter" ? "main.dart" : "index.js"}
                    </span>
                  </div>
                  {/* Code Block */}
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm font-mono text-[var(--text-secondary)] leading-relaxed">
                      {code}
                    </code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Platform Icons */}
        <div className="text-center">
          <p className="text-sm text-[var(--text-muted)] mb-6">
            Available on 10+ platforms
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className={cn(
                  "flex flex-col items-center gap-2",
                  "opacity-60 hover:opacity-100",
                  "transition-opacity duration-[var(--duration-normal)]",
                  "cursor-default"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl",
                    "bg-[var(--bg-secondary)] border border-[var(--border-subtle)]",
                    "flex items-center justify-center",
                    "p-2"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-xs text-[var(--text-muted)]">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SDKCodeSnippet;
