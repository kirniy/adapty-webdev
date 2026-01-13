"use client";

import * as React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  linearEasing,
  transition,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = React.useState("javascript");

  return (
    <section ref={ref} className="py-24 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: linearEasing.dramatic }}
        >
          <h2 className="heading-linear text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            One SDK for every platform
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Integrate Adapty in minutes with native SDKs
          </p>
        </motion.div>

        {/* Code Tabs */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2, ease: linearEasing.dramatic }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList
              className={cn(
                "grid w-full grid-cols-4 mb-6",
                "bg-[var(--bg-secondary)] border border-[var(--border-subtle)]",
                "rounded-[var(--card-radius)] p-1"
              )}
            >
              {["javascript", "reactNative", "flutter", "swift"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={cn(
                    "relative rounded-lg text-sm font-medium",
                    "data-[state=active]:text-[var(--text-primary)]",
                    "data-[state=inactive]:text-[var(--text-muted)]",
                    "transition-all duration-[var(--duration-fast)]"
                  )}
                >
                  {tab === "reactNative" ? "React Native" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[var(--bg-elevated)] rounded-lg -z-10"
                      transition={transition.snappy}
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              {Object.entries(codeSnippets).map(([key, code]) => (
                <TabsContent key={key} value={key} forceMount>
                  {activeTab === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: linearEasing.snappy }}
                      className={cn(
                        "rounded-[var(--card-radius)] overflow-hidden",
                        "bg-[var(--bg-secondary)] border border-[var(--border-subtle)]",
                        "shadow-[var(--shadow-card)]"
                      )}
                    >
                      {/* Code Header */}
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-tertiary)]">
                        <div className="flex gap-1.5">
                          <motion.div
                            className="w-3 h-3 rounded-full bg-[#ff5f56]"
                            whileHover={{ scale: 1.2 }}
                            transition={transition.snappy}
                          />
                          <motion.div
                            className="w-3 h-3 rounded-full bg-[#ffbd2e]"
                            whileHover={{ scale: 1.2 }}
                            transition={transition.snappy}
                          />
                          <motion.div
                            className="w-3 h-3 rounded-full bg-[#27c93f]"
                            whileHover={{ scale: 1.2 }}
                            transition={transition.snappy}
                          />
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
                    </motion.div>
                  )}
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </motion.div>

        {/* Platform Icons */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-[var(--text-muted)] mb-6">
            Available on 10+ platforms
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                variants={staggerItem}
                className={cn(
                  "flex flex-col items-center gap-2",
                  "cursor-default"
                )}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={transition.snappy}
              >
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-xl",
                    "bg-[var(--bg-secondary)] border border-[var(--border-subtle)]",
                    "flex items-center justify-center",
                    "p-2"
                  )}
                  whileHover={{
                    borderColor: "rgba(94, 106, 210, 0.4)",
                    boxShadow: "0 0 20px rgba(94, 106, 210, 0.2)",
                  }}
                  transition={transition.snappy}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
                <span className="text-xs text-[var(--text-muted)]">
                  {platform.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default SDKCodeSnippet;
