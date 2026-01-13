"use client";

import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";
import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";
import { SoftCornerGradient } from "~/components/textures/SoftCornerGradient";
import { MoireInterference } from "~/components/textures/MoireInterference";
import { InfiniteFloor } from "~/components/textures/InfiniteFloor";

interface StatsProps {
  variant?: "default" | "bold";
  ds?: "ds1" | "ds2" | "ds3" | "ds4" | "ds5";
}

export function Stats({ variant = "default", ds }: StatsProps) {
  const { stats } = content;

  return (
    <Section className="relative border-y border-[var(--border-subtle)] bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] overflow-hidden">
      {/* DS2: Soft Corner Gradient */}
      {ds === "ds2" && <SoftCornerGradient opacity={0.4} />}

      {/* DS3: Moiré Interference */}
      {ds === "ds3" && <MoireInterference opacity={0.1} />}

      {/* DS4: Infinite Floor */}
      {ds === "ds4" && (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <InfiniteFloor />
        </div>
      )}

      <Container className="relative z-10">
        <h2 className={cn(
          "mb-12 text-center text-2xl font-bold tracking-tight md:text-3xl",
          ds === "ds1" && "heading-metallic"
        )}>
          <span className={ds === "ds1" ? "" : "text-[var(--text-primary)]"}>{stats.headline.primary}</span>
          <br className="hidden sm:block" />
          <span className={ds === "ds1" ? "opacity-60" : "text-[var(--text-muted)]"}>{stats.headline.secondary}</span>
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.items.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <AnimatedNumber
                value={stat.value}
                prefix={"prefix" in stat ? stat.prefix : undefined}
                suffix={stat.suffix}
                decimalPlaces={stat.decimalPlaces}
                delay={index * 100}
                className={
                  variant === "bold"
                    ? "text-5xl font-bold text-[var(--color-primary)] md:text-6xl"
                    : "text-4xl font-bold text-[var(--text-primary)] md:text-5xl"
                }
              />
              <p className="mt-2 text-sm text-[var(--text-secondary)] md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
  delay?: number;
  className?: string;
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
  delay = 0,
  className,
}: AnimatedNumberProps) {
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
