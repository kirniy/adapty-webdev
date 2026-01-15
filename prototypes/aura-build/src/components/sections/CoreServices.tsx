"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Palette,
  ChartLineUp,
  Flask,
  Gauge,
  CaretRight
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";
import { BlueprintNode } from "@/components/ui/BlueprintElements";
import { motion, useInView, useMotionTemplate, useMotionValue } from "motion/react";
import { useRef } from "react";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { FadeIn } from "@/components/ui/MotionPrimitives";

export function CoreServices() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    // Spotlight Effect Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = containerRef.current!.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

  return (
    <section 
        ref={containerRef} 
        onMouseMove={handleMouseMove}
        id="services" 
        className="lg:px-12 lg:mb-20 max-w-[1600px] mx-auto mb-12 px-6 relative group/spotlight"
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Background Blueprint Grid - Vertical & Horizontal */}
      <div className="absolute inset-0 pointer-events-none -mx-[50vw] left-[50%] right-[50%] w-[100vw] bg-blueprint-grid opacity-[0.4]" />
      
      <FadeIn>
        <h2 className="headline-editorial text-3xl lg:text-5xl text-stone-900 mb-10 lg:mb-12 text-balance relative z-10">
            Everything you need to <span className="serif-accent text-stone-500">grow</span> revenue
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr relative">
        
        {/* Schematic Connectors - SVG Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-visible hidden lg:block">
          {/* Connector 1: Cloud -> ERP */}
          <svg className="absolute w-full h-full overflow-visible">
            <motion.path
              d="M 320 150 C 350 150, 350 200, 380 200 L 400 200"
              fill="none"
              stroke="#d6d3d1"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
            {/* Visual connector circles */}
            <motion.circle 
                cx="320" cy="150" r="3" fill="white" stroke="#d6d3d1" strokeWidth="1.5" 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5 }}
            />
          </svg>
        </div>

        {/* Card 1: Paywall Builder (Dark Blue) */}
        <FadeIn delay={0.2} className="row-span-1 lg:row-span-2 h-full">
            <motion.div
                whileHover={{ y: -5 }}
                className="group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-all duration-300 bg-[#002f43] border-[#002f43] border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative justify-between z-10 h-full"
            >

            {/* Visual Anchor (Top) */}
            <div className="z-20 mt-auto relative">
                <div className="flex text-white bg-white/10 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
                <Palette size={24} weight="duotone" />
                </div>
                <h3 className="lg:text-3xl text-2xl font-bold text-white font-sans mb-3">Paywall Builder</h3>
                <p className="text-stone-300 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
                No-code visual builder with 50+ templates. Design, customize, and ship paywalls without developers.
                </p>
                <Link href="#" className="inline-flex items-center text-white font-medium text-sm group/link">
                <span className="link-underline">Explore Paywall Builder</span>
                <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>

            <div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none" />

                {/* Floating Card UI - Paywall Preview */}
                <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="bg-white w-full max-w-[280px] z-10 rounded-xl pt-5 pr-5 pb-5 pl-5 relative shadow-2xl border border-stone-200"
                >
                {/* Paywall Preview Header */}
                <div className="text-center mb-4">
                    <div className="text-xs text-stone-400 mb-1">Premium</div>
                    <div className="text-2xl font-bold text-stone-900">$9.99<span className="text-sm font-normal text-stone-400">/mo</span></div>
                </div>
                {/* Features List */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-stone-600">
                        <Check size={14} weight="bold" className="text-brand-lime" />
                        Unlimited access
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-600">
                        <Check size={14} weight="bold" className="text-brand-lime" />
                        No ads ever
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-600">
                        <Check size={14} weight="bold" className="text-brand-lime" />
                        Priority support
                    </div>
                </div>
                {/* CTA Button */}
                <div className="bg-brand-lime text-stone-900 font-bold text-sm py-3 rounded-lg text-center">
                    Start Free Trial
                </div>
                {/* Badge */}
                <div className="absolute -top-2 -right-2 bg-brand-lime text-stone-900 text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
                    $13M+
                </div>
                </motion.div>

                {/* Blueprint connector node */}
                <BlueprintNode className="absolute top-1/2 left-[30%] hidden lg:block" />
            </div>
            </motion.div>
        </FadeIn>

        {/* Card 2: A/B Testing (Wide - Cyan/Lime) */}
        <FadeIn delay={0.3} className="col-span-1 md:col-span-2 h-full">
            <motion.div
                whileHover={{ y: -5 }}
                className="group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-all duration-300 bg-lime-300 border-lime-300 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-between z-10 h-full"
            >

            {/* Text Side */}
            <div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
                <div>
                <div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 text-stone-900">
                    <Flask size={24} weight="duotone" />
                </div>
                <h3 className="lg:text-3xl text-2xl font-bold text-stone-900 font-sans mb-3">A/B Testing</h3>
                <p className="text-stone-800 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                    Bayesian statistics for faster results. Run multi-variant experiments with ML-powered predictions.
                </p>
                </div>
                <Link href="#" className="inline-flex items-center text-stone-900 font-bold text-sm group/link">
                <span className="link-underline">Start Experimenting</span>
                <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>

            {/* Visual Side (A/B Test Results) */}
            <div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-end">
                {/* Tilted Container for dynamic effect */}
                <motion.div
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute right-[-20px] md:right-[-40px] w-[120%] md:w-[110%]"
                >
                <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-lime-400/50 p-4 relative overflow-hidden">
                    {/* Blueprint grid inside the card */}
                    <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

                    {/* A/B Test Variants */}
                    <div className="flex gap-3 relative z-10">
                    {/* Variant A */}
                    <div className="flex-1 bg-stone-50 rounded-lg p-3 border border-stone-100">
                        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                        Variant A
                        </div>
                        <div className="bg-white p-2 rounded border border-stone-100 shadow-sm mb-2">
                        <div className="text-lg font-bold text-stone-900">$9.99</div>
                        <div className="text-[9px] text-stone-400">Monthly</div>
                        </div>
                        <div className="text-[10px] text-stone-500">Conv: <span className="font-bold text-stone-700">4.2%</span></div>
                    </div>
                    {/* Variant B (Winner) */}
                    <div className="flex-1 bg-lime-100 rounded-lg p-3 border border-lime-500 relative">
                        <div className="absolute -top-1 -right-1 bg-brand-lime text-[8px] font-bold px-1.5 py-0.5 rounded text-stone-900">WINNER</div>
                        <div className="text-[10px] font-bold text-stone-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-lime-500" />
                        Variant B
                        </div>
                        <div className="bg-white p-2 rounded border border-lime-300 shadow-sm mb-2">
                        <div className="text-lg font-bold text-stone-900">$14.99</div>
                        <div className="text-[9px] text-stone-400">Annual</div>
                        </div>
                        <div className="text-[10px] text-stone-600">Conv: <span className="font-bold text-lime-700">6.8%</span></div>
                    </div>
                    {/* Confidence */}
                    <div className="flex-1 bg-stone-50 rounded-lg p-3 border border-stone-100">
                        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">Confidence</div>
                        <div className="text-2xl font-bold text-stone-900 mb-1">95%</div>
                        <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-lime rounded-full" style={{width: '95%'}} />
                        </div>
                    </div>
                    </div>
                </div>
                </motion.div>
            </div>
            </motion.div>
        </FadeIn>

        {/* Card 3: Analytics (Mint) */}
        <FadeIn delay={0.4} className="h-full">
            <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden bg-lime-100/80 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-all duration-300 border border-lime-200 z-10 h-full"
            >

            {/* Visuals - Chart Mockup */}
            <div className="relative w-full h-32 mb-4">
                {/* Blueprint node connector */}
                <BlueprintNode className="absolute -top-1 left-[37px]" />

                <div className="absolute right-0 top-0 space-y-3 w-full max-w-[220px]">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-xs text-stone-600 ml-auto w-fit transform group-hover:-translate-x-1 transition-transform delay-75 border border-stone-100 relative">
                    <div className="flex items-center gap-2">
                    <ChartLineUp className="text-brand-lime" size={16} weight="fill" />
                    <span className="font-bold text-stone-900">+23.4%</span> MRR
                    </div>
                </div>
                <div className="bg-[#002f43] p-3 rounded-2xl shadow-sm text-xs text-white w-fit transform group-hover:translate-x-1 transition-transform delay-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-hatch opacity-10" />
                    <div className="flex items-center gap-2 relative z-10">
                    <ArrowRight className="text-brand-lime" size={16} />
                    Real-time updates
                    </div>
                </div>
                </div>
            </div>

            <div className="mt-auto relative z-20">
                <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
                <ChartLineUp size={20} weight="duotone" />
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-sans mb-2">Real-time Analytics</h3>
                <p className="text-stone-700 text-sm mb-4 leading-relaxed">Track MRR, LTV, churn, and cohorts. Sync data to your favorite analytics tools.</p>
                <Link href="#" className="inline-flex items-center text-stone-900 font-bold text-xs uppercase tracking-wide group/link">
                <span className="link-underline">View Dashboard</span>
                <CaretRight size={14} className="ml-1 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                </Link>
            </div>
            </motion.div>
        </FadeIn>

        {/* Card 4: Remote Config (Sky Blue) */}
        <FadeIn delay={0.5} className="h-full">
            <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden bg-sky-50 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-all duration-300 border border-sky-100 z-10 h-full"
            >

            {/* Remote Config Visual */}
            <div className="flex w-full h-32 relative justify-end">
                <motion.div
                    whileHover={{ rotate: 6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative origin-bottom-right"
                >
                <div className="bg-white p-3 rounded-xl shadow-lg border border-sky-100 w-40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blueprint-grid opacity-10" />
                    <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] text-stone-500">trial_days</span>
                        <span className="text-[9px] font-bold text-stone-900 bg-sky-100 px-1.5 py-0.5 rounded">7</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] text-stone-500">show_sale</span>
                        <span className="text-[9px] font-bold text-brand-lime bg-lime-100 px-1.5 py-0.5 rounded">true</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] text-stone-500">discount</span>
                        <span className="text-[9px] font-bold text-stone-900 bg-sky-100 px-1.5 py-0.5 rounded">20%</span>
                    </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-brand-lime text-[8px] font-bold px-1.5 py-0.5 rounded text-stone-900 shadow-md">
                    LIVE
                    </div>
                </div>
                </motion.div>
            </div>

            <div className="z-20 mt-auto relative">
                <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
                <Gauge size={20} weight="duotone" />
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-sans mb-2">Remote Config</h3>
                <p className="text-stone-700 text-sm mb-4 leading-relaxed">Update pricing, features, and offers instantly. No app updates required.</p>
                <Link href="#" className="inline-flex items-center text-stone-900 font-bold text-xs uppercase tracking-wide group/link">
                <span className="link-underline">Explore Config</span>
                <CaretRight size={14} className="ml-1 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                </Link>
            </div>
            </motion.div>
        </FadeIn>

      </div>
    </section>
  );
}
