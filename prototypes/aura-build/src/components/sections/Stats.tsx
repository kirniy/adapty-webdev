"use client";

import { useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValue, useInView } from "motion/react";
import { useRef } from "react";
import { BlueprintNode } from "@/components/ui/BlueprintElements";

const stats = [
  { value: 2, suffix: "B+", label: "Processed revenue", prefix: "$" },
  { value: 15, suffix: "k+", label: "Apps powered" },
  { value: 99.99, suffix: "%", label: "Uptime SLA", decimalPlaces: 2 },
  { value: 200, suffix: "M+", label: "Monthly requests" },
];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
  delay = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    mass: 1,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay, motionValue]);

  const displayValue = useTransform(springValue, (latest) => {
    return latest.toFixed(decimalPlaces);
  });

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section ref={containerRef} className="relative z-10 overflow-hidden">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      {/* Top border with animated beam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-stone-200">
        <motion.div
          className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-transparent via-brand-lime to-transparent"
          initial={{ x: "-100%" }}
          animate={isInView ? { x: "calc(100vw + 100%)" } : { x: "-100%" }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-stone-200" />

      <div className="max-w-[1440px] mx-auto px-6 py-20 lg:py-24 relative">
        {/* Blueprint connector nodes at corners */}
        <BlueprintNode className="absolute top-6 left-6 hidden lg:block" />
        <BlueprintNode className="absolute top-6 right-6 hidden lg:block" />
        <BlueprintNode className="absolute bottom-6 left-6 hidden lg:block" />
        <BlueprintNode className="absolute bottom-6 right-6 hidden lg:block" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Vertical divider (not on first item) */}
              {index > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px hidden lg:block">
                  <motion.div
                    className="h-full w-full"
                    style={{
                      background: "linear-gradient(to bottom, transparent, #d6d3d1 30%, #d6d3d1 70%, transparent)"
                    }}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  />
                </div>
              )}

              <div className="space-y-3">
                {/* Number with serif accent styling */}
                <div className="text-4xl lg:text-6xl font-bold tracking-tight text-stone-900 font-sans tabular-nums transition-transform duration-300 group-hover:scale-105">
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimalPlaces={stat.decimalPlaces}
                    delay={index * 150 + 400}
                  />
                </div>

                {/* Label with editorial styling */}
                <div className="text-sm font-medium text-stone-500 tracking-wide">
                  {stat.label}
                </div>

                {/* Subtle underline accent on hover */}
                <motion.div
                  className="mx-auto h-0.5 bg-brand-lime rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: 40 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
