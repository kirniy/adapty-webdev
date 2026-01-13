"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Handshake, Lightning, Heart } from "@phosphor-icons/react";

const badges = [
  {
    title: "High Performer",
    subtitle: "Enterprise",
    icon: Trophy,
  },
  {
    title: "Easiest to Use",
    subtitle: "Winter 2025",
    icon: Star,
  },
  {
    title: "Best Support",
    subtitle: "Mid-Market",
    icon: Handshake,
  },
  {
    title: "Fastest Implementation",
    subtitle: "Enterprise",
    icon: Lightning,
  },
  {
    title: "Users Love Us",
    subtitle: "2025",
    icon: Heart,
  },
];

export function G2Badges() {
  return (
    <section className="py-16 bg-[var(--bg-primary)] border-y border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className={cn(
              "mb-4 px-3 py-1",
              "border-[var(--color-accent)]/30 text-[var(--color-accent)]",
              "bg-[var(--color-accent)]/10"
            )}
          >
            Top-rated on G2
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-[var(--letter-spacing-heading)]">
            Recognized by G2 | Winter 2025
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className={cn(
                "flex flex-col items-center gap-3",
                "p-6 rounded-[var(--card-radius)]",
                "bg-[var(--bg-secondary)] border border-[var(--border-subtle)]",
                "hover:border-[var(--border-default)]",
                "hover:shadow-[var(--shadow-card)]",
                "transition-all duration-[var(--duration-normal)]",
                "w-36 md:w-40"
              )}
            >
              {/* Badge Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-xl",
                  "bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5",
                  "border border-[var(--color-accent)]/20",
                  "flex items-center justify-center"
                )}
              >
                <badge.icon size={28} weight="duotone" className="text-[var(--color-accent)]" />
              </div>

              {/* Badge Text */}
              <div className="text-center">
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-0.5">
                  {badge.title}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {badge.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default G2Badges;
