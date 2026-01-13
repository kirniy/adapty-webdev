"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Trophy, Star, Handshake, Lightning, Heart } from "@phosphor-icons/react";
import {
  linearEasing,
  transition,
  staggerContainer,
} from "@/lib/animations";

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 bg-[var(--bg-primary)] border-y border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: linearEasing.dramatic }}
        >
          <motion.span
            className={cn(
              "inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full",
              "border border-[var(--color-accent)]/30",
              "bg-[var(--color-accent)]/10",
              "text-[var(--color-accent)] text-sm font-medium"
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Top-rated on G2
          </motion.span>
          <h2 className="heading-linear text-2xl md:text-3xl text-[var(--text-primary)]">
            Recognized by G2 | Winter 2025
          </h2>
        </motion.div>

        {/* Badges Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: linearEasing.snappy,
                  },
                },
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 0 30px rgba(94, 106, 210, 0.25), 0 8px 24px rgba(0, 0, 0, 0.4)",
              }}
              transition={transition.spring}
              className={cn(
                "flex flex-col items-center gap-3",
                "p-6 rounded-[var(--card-radius)]",
                "bg-[var(--bg-secondary)] border border-[var(--border-subtle)]",
                "w-36 md:w-40",
                "cursor-default"
              )}
            >
              {/* Badge Icon */}
              <motion.div
                className={cn(
                  "w-14 h-14 rounded-xl",
                  "bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5",
                  "border border-[var(--color-accent)]/20",
                  "flex items-center justify-center"
                )}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(94, 106, 210, 0.4)",
                }}
                transition={transition.snappy}
              >
                <badge.icon size={28} weight="duotone" className="text-[var(--color-accent)]" />
              </motion.div>

              {/* Badge Text */}
              <div className="text-center">
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-0.5">
                  {badge.title}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {badge.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default G2Badges;
