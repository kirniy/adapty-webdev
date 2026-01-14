"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue, useInView } from "motion/react";
import { useRef } from "react";

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
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    mass: 1, // slightly heavier feel
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay);
    }
  }, [isInView, value, delay, motionValue]);

  // Use useTransform to format the number as it changes
  const displayValue = useTransform(springValue, (latest) => {
    return latest.toFixed(decimalPlaces);
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-y border-stone-200 bg-white relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`space-y-2 ${
              index > 0 ? "border-l border-stone-100" : ""
            }`}
          >
            <div className="text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-sans tabular-nums">
              <AnimatedNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimalPlaces={stat.decimalPlaces}
                delay={index * 150}
              />
            </div>

            <div className="text-sm font-medium text-stone-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
