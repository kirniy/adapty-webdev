"use client";

import {
  Binary,
  Monitor,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BlueprintNode } from "@/components/ui/BlueprintElements";

const features = [
  {
    icon: Binary,
    title: "We Speak Data",
    description: "No guessing. Every decision is backed by analytics and raw performance metrics.",
  },
  {
    icon: Monitor,
    title: "Full-Stack Visibility",
    description: "We don't just fix the code; we optimize the business outcome across the stack.",
  },
  {
    icon: Users,
    title: "Partner, Not Vendor",
    description: "We integrate with your team via Slack/Teams for real-time collaboration.",
  },
];

export function WhyAdapty() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-16 lg:py-24 max-w-[1600px] mx-auto px-6 lg:px-12 relative">
      {/* Blueprint connector nodes */}
      <BlueprintNode className="absolute top-8 left-1/2 -translate-x-1/2" />

      <div className="text-center max-w-4xl mx-auto space-y-12">
        {/* Section Header with editorial typography */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="headline-editorial text-3xl lg:text-6xl text-stone-900 leading-tight text-balance">
            Why <span className="serif-accent text-stone-500">Adapty</span>?
          </h2>
        </motion.div>

        {/* Connecting line from header to features */}
        <div className="relative h-12 hidden lg:block">
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-px h-full"
            style={{ background: "linear-gradient(to bottom, #d6d3d1, transparent)" }}
            initial={{ scaleY: 0, transformOrigin: "top" }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Horizontal connecting line behind cards (desktop) */}
          <motion.div
            className="absolute top-[60px] left-[16.66%] right-[16.66%] h-px bg-stone-200 hidden lg:block"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />

          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="space-y-4 group cursor-default relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15 + 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Icon with enhanced hover effect */}
              <div className="relative mx-auto">
                {/* Blueprint node connector */}
                <BlueprintNode className="absolute -top-3 left-1/2 -translate-x-1/2 hidden lg:block" />

                <div className="relative mx-auto w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-stone-700 shadow-cinematic border border-stone-100 transition-all duration-300 group-hover:scale-110 group-hover:border-brand-lime group-hover:shadow-[0_0_20px_rgba(193,255,114,0.3)]">
                  <feature.icon size={26} weight="duotone" className="transition-colors duration-300 group-hover:text-stone-900" />
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 mx-auto w-14 h-14 rounded-2xl bg-brand-lime opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-stone-900 tracking-tight">{feature.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>

              {/* Subtle bottom accent line */}
              <motion.div
                className="mx-auto h-0.5 rounded-full bg-stone-200"
                initial={{ width: 24 }}
                whileHover={{ width: 48, backgroundColor: "#c1ff72" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
