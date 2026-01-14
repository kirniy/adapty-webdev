"use client";

import { useEffect, useRef, useState } from "react";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

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
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            const duration = 2000;
            const startTime = Date.now();

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
              setDisplayValue(value * eased);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, delay, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {prefix}
      {displayValue.toFixed(decimalPlaces)}
      {suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section className="border-y border-stone-200 bg-white relative">
      {/* ══════════════════════════════════════════════════════════════
         SCHEMATIC DECORATIONS
         ══════════════════════════════════════════════════════════════ */}

      {/* Left vertical rail */}
      <div className="absolute left-0 top-4 bottom-4 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.2} />
      </div>

      {/* Right vertical rail */}
      <div className="absolute right-0 top-4 bottom-4 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" accent delay={0.3} />
      </div>

      {/* Top connector beam */}
      <div className="absolute top-4 left-12 right-12 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
      </div>

      {/* Bottom connector beam */}
      <div className="absolute bottom-4 left-12 right-12 hidden lg:block">
        <SchematicLine direction="horizontal" length="100%" withNode="both" delay={0.6} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative">
        {/* Horizontal beam connecting all stats */}
        <div className="absolute top-8 left-[15%] w-[70%] hidden lg:block">
          <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.8} />
        </div>

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`space-y-2 relative group ${
              index > 0 ? "border-l border-stone-100" : ""
            }`}
          >
            {/* Top connection node */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 hidden lg:block">
              <ConnectionNode
                size="sm"
                accent={index === 2}
                filled={index === 0}
                pulse={index === 2}
              />
            </div>

            {/* Vertical line from node to value */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 hidden lg:block">
              <SchematicLine
                direction="vertical"
                length="16px"
                accent={index === 2}
                delay={0.4 + index * 0.1}
              />
            </div>

            <AnimatedNumber
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimalPlaces={stat.decimalPlaces}
              delay={index * 100}
              className="text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 pt-4 font-sans"
            />
            
            <div className="text-sm font-medium text-stone-500">
              {stat.label}
            </div>

            {/* Bottom connection node on hover */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
              <ConnectionNode size="xs" accent />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
