"use client";

import { Check, Timer, HardDrives, ArrowRight, TrendDown, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function ResultsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} id="cases" className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-24 mb-16 lg:mb-24">
      <motion.div
        className="overflow-hidden min-h-[500px] lg:min-h-[600px] rounded-[32px] relative shadow-cinematic-xl border bg-stone-900 border-stone-800"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >

        {/* Blueprint Grid Pattern */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />

        {/* Animated glow */}
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brand-lime opacity-[0.05] blur-[120px] rounded-full pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        />

        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Content */}
          <div className="flex-1 lg:p-16 flex flex-col z-10 pt-10 pr-8 pb-8 pl-8 relative justify-center">

            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-brand-lime rounded-full animate-pulse-slow" />
              <span className="text-brand-lime font-mono text-xs uppercase tracking-wider">Verified Results</span>
            </motion.div>

            <motion.h2
              className="headline-editorial lg:text-5xl xl:text-6xl leading-[1.05] lg:mr-6 lg:mb-8 text-3xl text-white mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Results that <span className="serif-accent text-brand-lime">compound</span>.
            </motion.h2>

            <motion.p
              className="body-editorial text-base lg:text-lg text-stone-400 max-w-md mb-8 lg:mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              See how we deliver measurable impact for our partners.
            </motion.p>

            <motion.button
              className="group flex items-center gap-3 bg-brand-lime hover:bg-brand-lime-dark transition-all duration-300 text-sm font-semibold rounded-full px-8 py-4 w-fit shadow-[0_0_30px_rgba(193,255,114,0.4)] hover:shadow-[0_0_50px_rgba(193,255,114,0.5)] text-stone-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Read Case Studies</span>
              <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Right Visual - Code Block with enhanced styling */}
          <div className="flex lg:w-[50%] lg:pt-20 lg:pr-16 lg:pl-0 lg:items-center lg:pb-20 pt-8 pr-4 pb-16 pl-4 relative items-end">
            <motion.div
              className="transform lg:rounded-2xl lg:translate-y-8 text-xs text-stone-400 font-mono bg-slate-950/90 w-full border-stone-800 border rounded-t-xl pt-6 pr-6 pb-10 pl-6 shadow-2xl backdrop-blur-md relative overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >

              {/* Noise Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-hatch" />

              {/* Window Header */}
              <div className="flex items-center justify-between border-b pb-4 mb-5 border-stone-800 relative z-10">
                <span className="text-stone-300 text-[11px] font-medium">performance_metrics.json</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
                <motion.div
                  className="p-4 rounded-xl border bg-stone-900/80 border-stone-800 group hover:border-brand-lime/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-stone-500 text-[10px] uppercase tracking-wider">Cloud Spend</span>
                    <TrendDown size={14} className="text-emerald-400" />
                  </div>
                  <span className="text-2xl font-bold text-white block mb-1 tabular-nums">-40%</span>
                  <span className="text-brand-lime text-[10px]">SaaS Client / Kubernetes</span>
                </motion.div>
                <motion.div
                  className="p-4 rounded-xl border bg-stone-900/80 border-stone-800 group hover:border-brand-lime/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-stone-500 text-[10px] uppercase tracking-wider">Conversion</span>
                    <TrendUp size={14} className="text-brand-lime" />
                  </div>
                  <span className="text-2xl font-bold text-white block mb-1 tabular-nums">+15%</span>
                  <span className="text-brand-lime text-[10px]">Retail Brand / Speed</span>
                </motion.div>
              </div>

              {/* Checklist Items */}
              <div className="space-y-2 relative z-10">
                {[
                  { icon: Timer, text: "Checkout speed increased by 2.5s", delay: 0.8 },
                  { icon: HardDrives, text: "Legacy infrastructure migration complete", delay: 0.9 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg transition-colors border border-transparent hover:border-stone-700 bg-stone-900/50 group"
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    transition={{ delay: item.delay, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={14} className="text-brand-lime" />
                      <span className="text-stone-300 text-[11px]">{item.text}</span>
                    </div>
                    <span className="text-brand-lime"><Check size={14} weight="bold" /></span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
