"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

const tabs = [
  { id: "javascript", label: "JavaScript" },
  { id: "react-native", label: "React Native" },
  { id: "flutter", label: "Flutter" },
  { id: "swift", label: "Swift" },
];

const codeSnippets: Record<string, string> = {
  javascript: `import { adapty } from 'adapty';

// Activate Adapty on app start
await adapty.activate('YOUR_API_KEY');

const profile = await adapty.getProfile();
const isPremium = profile.accessLevels['premium']?.isActive;`,

  "react-native": `import { adapty } from 'react-native-adapty';

// Activate Adapty on app start
await adapty.activate('YOUR_API_KEY');

const profile = await adapty.getProfile();
const isPremium = profile.accessLevels.premium?.isActive;`,

  flutter: `import 'package:adapty_flutter/adapty_flutter.dart';

// Activate Adapty on app start
await Adapty().activate('YOUR_API_KEY');

final profile = await Adapty().getProfile();
final isPremium = profile.accessLevels['premium']?.isActive;`,

  swift: `import Adapty

// Activate Adapty on app start
Adapty.activate("YOUR_API_KEY")

Adapty.getProfile { result in
    let isPremium = result.value?.accessLevels["premium"]?.isActive
}`,
};

const platforms = [
  { name: "iOS", src: "/logos/sdk/swift.svg" },
  { name: "Android", src: "/logos/sdk/kotlin.svg" },
  { name: "Flutter", src: "/logos/sdk/flutter.svg" },
  { name: "React Native", src: "/logos/sdk/react-native.svg" },
  { name: "Unity", src: "/logos/sdk/unity.svg" },
  { name: "Stripe", src: "/logos/sdk/stripe.svg" },
];

function highlightCode(code: string): string {
  return code
    .replace(
      /(import|from|await|const|let|var|async|final|func)/g,
      '<span class="token-keyword">$1</span>'
    )
    .replace(
      /(\.[a-zA-Z]+)\(/g,
      '.<span class="token-function">$1</span>('
    )
    .replace(
      /(\/\/.+)/g,
      '<span class="token-comment">$1</span>'
    )
    .replace(
      /('[^']*')/g,
      '<span class="token-string">$1</span>'
    )
    .replace(
      /("[^"]*")/g,
      '<span class="token-string">$1</span>'
    );
}

export function SDKCode() {
  const [activeTab, setActiveTab] = useState("javascript");

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-24 relative">
      {/* ══════════════════════════════════════════════════════════════
         SCHEMATIC DECORATIONS
         ══════════════════════════════════════════════════════════════ */}

      {/* Left vertical rail */}
      <div className="absolute left-0 top-12 bottom-12 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.2} />
      </div>

      {/* Right vertical rail */}
      <div className="absolute right-0 top-12 bottom-12 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" accent delay={0.3} />
      </div>

      {/* Top beam connector */}
      <div className="absolute top-6 left-12 right-12 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center relative">
        {/* Connection beam between content and code */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 hidden lg:block">
          <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.8} />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 space-y-6 relative">
          {/* Decorative node cluster */}
          <div className="absolute -left-8 top-0 hidden lg:flex flex-col gap-3 items-center">
            <ConnectionNode size="sm" pulse />
            <SchematicLine direction="vertical" length="40px" accent delay={0.6} />
            <ConnectionNode size="md" accent filled />
          </div>

          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 animate-intro-blur">
            One SDK for every platform
          </h2>
          <p className="text-stone-500 text-lg animate-intro-blur delay-100">
            Integrate Adapty in minutes with native SDKs. Robust, typed, and
            developer-friendly.
          </p>

          {/* Platform icons with connection nodes */}
          <div className="flex flex-wrap gap-4 pt-4 relative animate-intro-blur delay-200">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="relative w-6 h-6 opacity-60 hover:opacity-100 transition-opacity group"
                title={platform.name}
              >
                <Image
                  src={platform.src}
                  alt={platform.name}
                  fill
                  className="object-contain"
                />
                {index % 2 === 0 && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ConnectionNode size="xs" accent />
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 text-stone-900 font-semibold border-b border-stone-900 pb-0.5 hover:opacity-70 transition-opacity animate-intro-blur delay-300"
          >
            Read documentation
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        {/* Code block */}
        <div className="lg:w-1/2 w-full relative">
          {/* Connection node to code block */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden lg:block">
            <ConnectionNode size="md" filled />
          </div>

          <div className="bg-[#0d1117] rounded-xl shadow-2xl overflow-hidden border border-stone-800 relative group">
            {/* Corner schematic nodes */}
            <div className="absolute top-2 left-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" accent />
            </div>
            <div className="absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" accent />
            </div>
            <div className="absolute bottom-2 left-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" accent />
            </div>
            <div className="absolute bottom-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" accent filled pulse />
            </div>

            {/* Tabs */}
            <div className="flex items-center border-b border-stone-800 px-4 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors relative",
                    activeTab === tab.id
                      ? "text-white border-b-2 border-brand-lime"
                      : "text-stone-500 hover:text-stone-300"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                      <ConnectionNode size="xs" accent />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Code */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: highlightCode(codeSnippets[activeTab] || ""),
                  }}
                />
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom beam connector */}
      <div className="absolute bottom-6 left-12 right-12 hidden lg:block">
        <SchematicLine direction="horizontal" length="100%" withNode="both" delay={1} />
      </div>
    </section>
  );
}
