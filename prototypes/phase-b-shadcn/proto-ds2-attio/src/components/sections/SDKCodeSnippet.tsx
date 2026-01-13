"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const codeSnippets = {
  swift: `import Adapty

// Initialize SDK
Adapty.activate("YOUR_API_KEY")

// Get paywall
let paywall = try await Adapty.getPaywall("premium")

// Make purchase
let profile = try await Adapty.makePurchase(product)`,
  kotlin: `import com.adapty.Adapty

// Initialize SDK
Adapty.activate(context, "YOUR_API_KEY")

// Get paywall
val paywall = Adapty.getPaywall("premium")

// Make purchase
val profile = Adapty.makePurchase(activity, product)`,
  flutter: `import 'package:adapty_flutter/adapty_flutter.dart';

// Initialize SDK
await Adapty().activate('YOUR_API_KEY');

// Get paywall
final paywall = await Adapty().getPaywall('premium');

// Make purchase
final profile = await Adapty().makePurchase(product);`,
  react: `import { Adapty } from 'react-native-adapty';

// Initialize SDK
await Adapty.activate('YOUR_API_KEY');

// Get paywall
const paywall = await Adapty.getPaywall('premium');

// Make purchase
const profile = await Adapty.makePurchase(product);`,
};

export function SDKCodeSnippet() {
  return (
    <section className="relative py-20 md:py-28">
      {/* DS2 ATTIO: Section number */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-16">
        <span className="section-number">[05]</span>
      </div>

      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="headline-attio text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
            Integrate in{" "}
            <span className="text-serif italic text-[var(--color-accent)]">
              minutes
            </span>
          </h2>
          <p className="body-attio text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Our SDK works with all major platforms. Get started with just a few lines of code.
          </p>
        </div>

        {/* Code tabs - DS2 tab bar style */}
        <Tabs defaultValue="swift" className="w-full max-w-3xl mx-auto">
          <TabsList className="tab-bar-attio w-full mb-6 bg-transparent p-0 h-auto">
            {Object.keys(codeSnippets).map((lang) => (
              <TabsTrigger
                key={lang}
                value={lang}
                className={cn(
                  "flex-1 py-3 px-4",
                  "text-sm font-medium capitalize",
                  "text-[var(--text-secondary)]",
                  "bg-transparent",
                  "border-0 rounded-none",
                  "data-[state=active]:bg-[var(--bg-tertiary)]",
                  "data-[state=active]:text-[var(--text-primary)]",
                  "transition-all duration-[var(--duration-fast)]"
                )}
              >
                {lang}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(codeSnippets).map(([lang, code]) => (
            <TabsContent key={lang} value={lang}>
              <div
                className={cn(
                  "rounded-[var(--card-radius)]",
                  "bg-[var(--bg-secondary)]",
                  "border border-[var(--border-subtle)]",
                  "overflow-hidden"
                )}
              >
                {/* Code header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="ml-3 text-xs text-[var(--text-muted)] uppercase">
                      {lang}
                    </span>
                  </div>
                </div>

                {/* Code content */}
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm font-mono text-[var(--text-primary)] leading-relaxed">
                    {code}
                  </code>
                </pre>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* SDK icons */}
        <div className="flex justify-center gap-8 mt-12">
          {["swift", "kotlin", "flutter", "react-native", "unity"].map(
            (sdk, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex items-center justify-center"
              >
                <span className="text-xs text-[var(--text-muted)] uppercase">
                  {sdk.slice(0, 2)}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default SDKCodeSnippet;
