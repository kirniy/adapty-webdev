"use client";

import {
  Code,
  Palette,
  ChartLineUp,
  Lightning,
} from "@phosphor-icons/react/dist/ssr";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/cn";

const WORKFLOW_STEPS = [
  {
    icon: Code,
    title: "Integrate SDK",
    description: "Drop-in SDKs for all platforms in minutes",
    color: "blue",
  },
  {
    icon: Palette,
    title: "Build Paywalls",
    description: "No-code builder with 50+ templates",
    color: "purple",
  },
  {
    icon: Lightning,
    title: "Run A/B Tests",
    description: "Statistical confidence for pricing experiments",
    color: "lime",
  },
  {
    icon: ChartLineUp,
    title: "Grow Revenue",
    description: "Real-time analytics and revenue optimization",
    color: "orange",
  },
];

const colorClasses = {
  blue: "bg-blue-500/10 text-blue-600 border-blue-200",
  purple: "bg-purple-500/10 text-purple-600 border-purple-200",
  lime: "bg-brand-lime/20 text-green-700 border-green-200",
  orange: "bg-orange-500/10 text-orange-600 border-orange-200",
};

export function WorkflowSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 py-24 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          className="headline-editorial text-3xl lg:text-4xl text-stone-900 mb-4 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Simple workflow, <span className="serif-accent text-stone-500">powerful</span> results
        </motion.h2>
        <motion.p
          className="body-editorial text-stone-500 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From integration to optimization in four easy steps
        </motion.p>
      </div>

      {/* Workflow Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
        {WORKFLOW_STEPS.map((step, index) => (
          <motion.div
            key={step.title}
            className="flex flex-col items-center text-center group cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
          >
            {/* Step Number Badge */}
            <div className="text-xs font-bold text-stone-400 mb-4 bg-white px-2 relative z-20">
              Step {index + 1}
            </div>

            {/* Icon Container with Scale Hover */}
            <div
              className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-110 relative bg-white",
                 colorClasses[step.color as keyof typeof colorClasses]
              )}
            >
              <step.icon size={28} weight="duotone" />
              {/* Subtle Glow Behind */}
              <div className={cn(
                  "absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10",
                  step.color === 'lime' ? 'bg-brand-lime' : `bg-${step.color}-400`
              )} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-stone-500">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
