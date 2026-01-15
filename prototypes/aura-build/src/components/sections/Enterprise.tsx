"use client";

import { Shield, Lock, HardDrives, Headset, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BlueprintNode } from "@/components/ui/BlueprintElements";

const features = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: Lock, label: "GDPR Compliant" },
  { icon: HardDrives, label: "99.99% Uptime" },
  { icon: Headset, label: "Dedicated Support" },
];

export function Enterprise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 mb-16 lg:mb-24 relative">
      {/* Blueprint connector */}
      <BlueprintNode className="absolute -top-4 left-1/2 -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card className="p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          {/* Subtle blueprint grid inside card */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

          <div className="max-w-xl relative z-10">
            <motion.h2
              className="headline-editorial text-3xl lg:text-4xl text-stone-900 mb-4 text-balance"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Enterprise-ready <span className="serif-accent text-stone-500">infrastructure</span>
            </motion.h2>
            <motion.p
              className="body-editorial text-stone-500 mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Built for scale, security, and compliance. We support the
              world&apos;s largest publishers.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  className="flex items-center gap-3 text-sm font-medium group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-lime group-hover:scale-110">
                    <feature.icon size={16} className="text-stone-600 transition-colors duration-300 group-hover:text-stone-900" weight="duotone" />
                  </div>
                  <span className="text-stone-700">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-200 font-semibold text-stone-700 hover:border-stone-300 hover:bg-white transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-cinematic hover:shadow-cinematic-md">
              <span>Contact Sales</span>
              <ArrowRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
}
