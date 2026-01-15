"use client";

import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr";

export function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 mb-16 lg:mb-24">
      {/* Container with premium dark styling */}
      <motion.div
        className="relative rounded-[32px] overflow-hidden bg-stone-900 border border-stone-800"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Animated gradient glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime opacity-[0.06] blur-[150px] rounded-full pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.04]
          }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Blueprint grid pattern */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.04] pointer-events-none" />

        {/* Floating accent particles */}
        <motion.div
          className="absolute top-20 left-[20%] w-1 h-1 rounded-full bg-brand-lime opacity-40"
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-[25%] w-1.5 h-1.5 rounded-full bg-brand-lime opacity-30"
          animate={{ y: [10, -10, 10], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-[15%] w-0.5 h-0.5 rounded-full bg-brand-lime opacity-50"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 2 }}
        />

        <div className="relative z-10 px-8 py-24 lg:py-32 text-center max-w-3xl mx-auto space-y-10">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium bg-white/5 backdrop-blur-sm border-white/10 text-stone-400"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkle size={14} weight="fill" className="text-brand-lime" />
            <span>Free forever for small apps</span>
          </motion.div>

          {/* Headline with editorial typography */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="headline-editorial text-3xl lg:text-5xl xl:text-6xl text-white leading-[1.1] text-balance">
              Ready to <span className="serif-accent text-brand-lime">grow</span> your revenue?
            </h2>
            <p className="body-editorial text-base lg:text-lg text-stone-400 max-w-xl mx-auto">
              Join 15,000+ apps scaling their subscription infrastructure with Adapty.
            </p>
          </motion.div>

          {/* Form with enhanced styling */}
          <motion.form
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Input
              type="email"
              variant="glass"
              placeholder="Enter your work email"
              className="flex-1 h-14 text-sm"
            />
            {/* Premium CTA button with shimmer */}
            <button
              type="submit"
              className="group relative cursor-pointer outline-none overflow-hidden rounded-full transition-all duration-300 active:scale-[0.97] bg-brand-lime hover:bg-brand-lime-dark shadow-[0_0_40px_rgba(193,255,114,0.4)] hover:shadow-[0_0_60px_rgba(193,255,114,0.5)]"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <span className="flex items-center gap-2 select-none text-base font-semibold text-stone-900 tracking-tight py-4 px-8 relative z-10">
                Start for free
                <ArrowRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </motion.form>

          {/* Secondary link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link
              href="#"
              className="group inline-flex items-center gap-2 text-stone-500 hover:text-white transition-colors text-sm font-medium"
            >
              Or schedule a personalized demo
              <span className="text-brand-lime transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-900/50 to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
}
