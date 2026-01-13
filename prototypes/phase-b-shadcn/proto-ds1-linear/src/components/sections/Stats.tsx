"use client";

import * as React from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { linearEasing, transition } from "@/lib/animations";

const stats = [
  { value: "$2B+", label: "Processed subscription revenue", numericValue: 2 },
  { value: "15,000+", label: "Apps powered by Adapty", numericValue: 15000 },
  { value: "99.99%", label: "Uptime SLA", numericValue: 99.99 },
  { value: "200M+", label: "Monthly API requests", numericValue: 200 },
];

interface AnimatedCounterProps {
  value: string;
  numericValue: number;
  inView: boolean;
  delay: number;
}

function AnimatedCounter({ value, numericValue, inView, delay }: AnimatedCounterProps) {
  // Determine if it's a currency, percentage, or plain number
  const isCurrency = value.startsWith("$");
  const isPercentage = value.includes("%");
  const hasPlus = value.includes("+");
  const hasMillion = value.includes("M");

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        spring.set(numericValue);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, numericValue, spring, delay]);

  const displayValue = useTransform(spring, (latest) => {
    if (isCurrency) {
      return `$${Math.round(latest)}B${hasPlus ? "+" : ""}`;
    }
    if (isPercentage) {
      return `${latest.toFixed(2)}%`;
    }
    if (hasMillion) {
      return `${Math.round(latest)}M${hasPlus ? "+" : ""}`;
    }
    return `${latest.toLocaleString("en-US", { maximumFractionDigits: 0 })}${hasPlus ? "+" : ""}`;
  });

  return (
    <motion.span>{displayValue}</motion.span>
  );
}

export function Stats() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="py-[var(--section-padding)] border-y border-[var(--border-subtle)]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center pt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: linearEasing.dramatic,
              }}
            >
              <motion.div
                className={cn(
                  "text-4xl sm:text-5xl lg:text-6xl",
                  "font-semibold",
                  "text-gradient-accent",
                  "mb-2",
                  "tracking-[var(--letter-spacing-tight)]",
                  "leading-none"
                )}
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : { scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: index * 0.1 + 0.2,
                }}
              >
                <AnimatedCounter
                  value={stat.value}
                  numericValue={stat.numericValue}
                  inView={isInView}
                  delay={index * 0.1 + 0.3}
                />
              </motion.div>
              <motion.p
                className="text-sm sm:text-base text-[var(--text-muted)]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.5,
                }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Stats;
