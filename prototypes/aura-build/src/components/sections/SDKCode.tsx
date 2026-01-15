"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";

const tabs = [
  { id: "swift", label: "Swift" },
  { id: "kotlin", label: "Kotlin" },
  { id: "react-native", label: "React Native" },
  { id: "flutter", label: "Flutter" },
  { id: "unity", label: "Unity" },
];

const codeSnippets: Record<string, { code: string; lines: CodeLine[] }> = {
  swift: {
    code: "",
    lines: [
      { type: "import", content: ["import", " Adapty"] },
      { type: "empty", content: [] },
      { type: "comment", content: ["// Activate Adapty on app start"] },
      { type: "code", content: ["Adapty.", "activate", "(", "\"YOUR_API_KEY\"", ")"] },
      { type: "empty", content: [] },
      { type: "code", content: ["Adapty.", "getProfile", " { result ", "in"] },
      { type: "code", content: ["    ", "let", " isPremium = result.value?.accessLevels[", "\"premium\"", "]?.isActive"] },
      { type: "code", content: ["}"] },
    ]
  },
  kotlin: {
    code: "",
    lines: [
      { type: "import", content: ["import", " com.adapty.Adapty"] },
      { type: "empty", content: [] },
      { type: "comment", content: ["// Activate Adapty on app start"] },
      { type: "code", content: ["Adapty.", "activate", "(applicationContext, ", "\"YOUR_API_KEY\"", ")"] },
      { type: "empty", content: [] },
      { type: "code", content: ["Adapty.", "getProfile", " { result ->"] },
      { type: "code", content: ["    ", "val", " isPremium = result.getOrNull()?.accessLevels[", "\"premium\"", "]?.isActive"] },
      { type: "code", content: ["}"] },
    ]
  },
  "react-native": {
    code: "",
    lines: [
      { type: "import", content: ["import", " { adapty } ", "from", " ", "'react-native-adapty'", ";"] },
      { type: "empty", content: [] },
      { type: "comment", content: ["// Activate Adapty on app start"] },
      { type: "code", content: ["await", " adapty.", "activate", "(", "'YOUR_API_KEY'", ");"] },
      { type: "empty", content: [] },
      { type: "code", content: ["const", " profile = ", "await", " adapty.", "getProfile", "();"] },
      { type: "code", content: ["const", " isPremium = profile.accessLevels.premium?.isActive;"] },
    ]
  },
  flutter: {
    code: "",
    lines: [
      { type: "import", content: ["import", " ", "'package:adapty_flutter/adapty_flutter.dart'", ";"] },
      { type: "empty", content: [] },
      { type: "comment", content: ["// Activate Adapty on app start"] },
      { type: "code", content: ["await", " Adapty().", "activate", "(", "'YOUR_API_KEY'", ");"] },
      { type: "empty", content: [] },
      { type: "code", content: ["final", " profile = ", "await", " Adapty().", "getProfile", "();"] },
      { type: "code", content: ["final", " isPremium = profile.accessLevels[", "'premium'", "]?.isActive;"] },
    ]
  },
  unity: {
    code: "",
    lines: [
      { type: "import", content: ["using", " AdaptySDK;"] },
      { type: "empty", content: [] },
      { type: "comment", content: ["// Activate Adapty on app start"] },
      { type: "code", content: ["Adapty.", "Activate", "(", "\"YOUR_API_KEY\"", ");"] },
      { type: "empty", content: [] },
      { type: "code", content: ["Adapty.", "GetProfile", "((profile, error) => {"] },
      { type: "code", content: ["    ", "var", " isPremium = profile?.AccessLevels[", "\"premium\"", "]?.IsActive;"] },
      { type: "code", content: ["});"] },
    ]
  },
};

type CodeLine = {
  type: "import" | "comment" | "code" | "empty";
  content: string[];
};

const platforms = [
  { name: "iOS", src: "/images/sdks/swift.svg", color: "bg-orange-50 border-orange-200" },
  { name: "Android", src: "/images/sdks/kotlin.svg", color: "bg-purple-50 border-purple-200" },
  { name: "Flutter", src: "/images/sdks/flutter.svg", color: "bg-sky-50 border-sky-200" },
  { name: "React Native", src: "/images/sdks/react-native.svg", color: "bg-cyan-50 border-cyan-200" },
  { name: "Unity", src: "/images/sdks/unity.svg", color: "bg-stone-800 border-stone-700 text-white" },
  { name: "Stripe", src: "/images/sdks/stripe.svg", color: "bg-indigo-50 border-indigo-200" },
];

// Keywords to highlight
const keywords = ["import", "from", "await", "const", "let", "var", "async", "final", "func", "in", "val", "using"];
const functions = ["activate", "getProfile", "getPaywall", "Activate", "GetProfile"];

function tokenize(part: string): React.ReactNode {
  if (keywords.includes(part)) {
    return <span className="text-[#ff7b72]">{part}</span>;
  }
  if (functions.includes(part)) {
    return <span className="text-[#d2a8ff]">{part}</span>;
  }
  if ((part.startsWith("'") && part.endsWith("'")) || (part.startsWith('"') && part.endsWith('"'))) {
    return <span className="text-[#a5d6ff]">{part}</span>;
  }
  return <span className="text-[#c9d1d9]">{part}</span>;
}

function renderLine(line: CodeLine, index: number): React.ReactNode {
  if (line.type === "empty") {
    return <div key={index} className="h-5" />;
  }
  if (line.type === "comment") {
    return (
      <div key={index} className="text-[#8b949e]">
        {line.content[0]}
      </div>
    );
  }
  return (
    <div key={index}>
      {line.content.map((part, i) => (
        <span key={i}>{tokenize(part)}</span>
      ))}
    </div>
  );
}

export function SDKCode() {
  const [activeTab, setActiveTab] = useState("swift");

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          {/* Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 animate-intro-blur text-balance">
                One SDK for every platform
              </h2>
              <p className="text-stone-500 text-lg animate-intro-blur delay-100 max-w-md">
                Integrate Adapty in minutes with native SDKs. Robust, typed, and
                developer-friendly.
              </p>
            </div>

            {/* Platform icons - REDESIGNED as cards with names */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-4 animate-intro-blur delay-200">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-xl border transition-all cursor-pointer group",
                    platform.color,
                    "hover:scale-105 hover:shadow-md"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative w-8 h-8 mb-2 group-hover:scale-110 transition-transform">
                    <Image
                      src={platform.src}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className={cn("text-xs font-medium", platform.color.includes("text-white") ? "text-white" : "text-stone-600")}>{platform.name}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 font-semibold text-stone-700 hover:bg-stone-50 transition-colors bg-white/60 backdrop-blur-sm animate-intro-blur delay-300 group">
              Read documentation
              <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Code block */}
          <div className="lg:w-1/2 w-full animate-intro-blur delay-200">
            <div className="bg-[#0d1117] rounded-2xl shadow-2xl overflow-hidden border border-stone-800/60 transform transition-all hover:scale-[1.01] duration-500">
              {/* Tabs - FULL WIDTH */}
              <div className="grid grid-cols-5 border-b border-white/10 bg-[#161b22]">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium transition-all relative text-center",
                      activeTab === tab.id
                        ? "text-white bg-[#0d1117]"
                        : "text-stone-400 hover:text-stone-200 hover:bg-white/5"
                    )}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-lime shadow-[0_0_8px_rgba(193,255,114,0.6)]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Code - NO SCROLL */}
              <div className="p-6 font-mono text-sm leading-relaxed bg-[#0d1117]">
                <pre className="whitespace-pre-wrap">
                  {codeSnippets[activeTab]?.lines.map((line, i) => renderLine(line, i))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
