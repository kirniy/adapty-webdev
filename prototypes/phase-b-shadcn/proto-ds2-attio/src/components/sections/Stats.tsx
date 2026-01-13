"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "$6B+", label: "Revenue processed", emphasis: "processed" },
  { value: "70M+", label: "Paying subscribers", emphasis: "subscribers" },
  { value: "15,000+", label: "Apps worldwide", emphasis: "worldwide" },
  { value: "99.99%", label: "Uptime guarantee", emphasis: "uptime" },
];

export function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      {/* DS2 ATTIO: Section number */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-16">
        <span className="section-number">[03]</span>
      </div>

      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section header - DS2 editorial style */}
        <div className="text-center mb-16">
          <h2 className="headline-attio text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
            Powering the{" "}
            <span className="text-serif italic text-[var(--color-accent)]">
              best
            </span>{" "}
            mobile apps
          </h2>
          <p className="body-attio text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Industry-leading infrastructure for subscription management
          </p>
        </div>

        {/* Stats grid - DS2 with subtle borders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[var(--border-subtle)] rounded-[var(--card-radius)] overflow-hidden">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "text-center py-10 px-4",
                "border-[var(--border-subtle)]",
                index % 2 === 0 ? "border-r" : "",
                index < 2 ? "border-b md:border-b-0" : "",
                index < 2 ? "" : "md:border-l"
              )}
            >
              <div
                className={cn(
                  "text-4xl sm:text-5xl lg:text-6xl",
                  "font-semibold",
                  "text-[var(--text-primary)]",
                  "mb-3 pt-2",
                  "tracking-[var(--letter-spacing-tight)]",
                  "leading-none"
                )}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider body-attio">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
