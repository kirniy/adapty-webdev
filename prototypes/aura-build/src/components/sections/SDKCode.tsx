"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";
import {
  SchematicLine,
  ConnectionNode,
  SVGBeam,
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
  { name: "iOS", src: "/images/sdks/swift.svg" },
  { name: "Android", src: "/images/sdks/kotlin.svg" },
  { name: "Flutter", src: "/images/sdks/flutter.svg" },
  { name: "React Native", src: "/images/sdks/react-native.svg" },
  { name: "Unity", src: "/images/sdks/unity.svg" },
  { name: "Stripe", src: "/images/sdks/stripe.svg" },
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
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">
        
        {/* ══════════════════════════════════════════════════════════════
           SCHEMATIC DECORATIONS
           ══════════════════════════════════════════════════════════════ */}

        {/* Vertical Rail Left */}
        <div className="absolute left-0 top-0 bottom-0 hidden xl:block">
          <SchematicLine direction="vertical" length="100%" solid delay={0.2} className="border-l border-stone-200/50" />
        </div>

        {/* Vertical Rail Right */}
        <div className="absolute right-0 top-0 bottom-0 hidden xl:block">
          <SchematicLine direction="vertical" length="100%" solid delay={0.2} className="border-l border-stone-200/50" />
        </div>

        {/* Cross Dotted Line */}
        <div className="absolute top-12 left-0 right-0 hidden lg:block opacity-50">
          <SchematicLine direction="horizontal" length="100%" delay={0.3} />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center relative z-10">
          
          {/* Content */}
          <div className="lg:w-1/2 space-y-8 stagger-children">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 animate-intro-blur">
                One SDK for every platform
              </h2>
              <p className="text-stone-500 text-lg animate-intro-blur delay-100 max-w-md">
                Integrate Adapty in minutes with native SDKs. Robust, typed, and
                developer-friendly.
              </p>
            </div>

            {/* Platform icons */}
            <div className="flex flex-wrap gap-6 pt-4 relative animate-intro-blur delay-200">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className="relative w-8 h-8 opacity-60 hover:opacity-100 transition-opacity group cursor-pointer"
                  title={platform.name}
                >
                  <Image
                    src={platform.src}
                    alt={platform.name}
                    fill
                    className="object-contain"
                  />
                  {/* Subtle hover pulse */}
                  <div className="absolute -inset-2 bg-stone-100 rounded-full opacity-0 group-hover:opacity-100 -z-10 transition-opacity scale-90 group-hover:scale-100 duration-300" />
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-stone-900 font-semibold group animate-intro-blur delay-300"
            >
              <span className="border-b border-stone-300 group-hover:border-stone-900 transition-colors">
                Read documentation
              </span>
              <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Code block with "Noodle" Beam */}
          <div className="lg:w-1/2 w-full relative animate-intro-blur delay-200">
            
            {/* SVG Beam Connector - flowing from text to code */}
            <div className="absolute -left-32 top-1/2 w-32 h-24 hidden lg:block -translate-y-1/2 pointer-events-none">
              <SVGBeam 
                width={128} 
                height={96} 
                from={{x: 0, y: 48}} 
                to={{x: 128, y: 48}} 
                curvature={0.5} 
                duration={2.5}
              />
            </div>

            {/* Connection Node at Code Entry */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
               <ConnectionNode size="sm" filled accent pulse />
            </div>

            <div className="bg-[#0d1117] rounded-xl shadow-2xl overflow-hidden border border-stone-800/60 relative group text-stone-300 transform transition-all hover:scale-[1.01] duration-500">
              {/* Corner schematic nodes */}
              <div className="absolute top-3 left-3 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                <ConnectionNode size="xs" accent />
              </div>
              <div className="absolute bottom-3 right-3 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                <ConnectionNode size="xs" accent filled pulse />
              </div>

              {/* Tabs */}
              <div className="flex items-center border-b border-white/5 px-2 overflow-x-auto no-scrollbar bg-white/5">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "px-4 py-3 text-xs font-medium whitespace-nowrap transition-all relative",
                      activeTab === tab.id
                        ? "text-white bg-white/5"
                        : "text-stone-500 hover:text-stone-300"
                    )}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-lime shadow-[0_0_8px_rgba(193,255,114,0.6)]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-[#0d1117]">
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
      </div>
    </section>
  );
}
