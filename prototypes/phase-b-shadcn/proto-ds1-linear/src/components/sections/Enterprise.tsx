"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle,
  Clock,
  Headphones,
  FileText,
  Buildings,
} from "@phosphor-icons/react";
import {
  linearEasing,
  transition,
  hoverScale,
  tapScale,
  staggerContainer,
} from "@/lib/animations";

const features = [
  {
    icon: Shield,
    title: "SOC 2 Type II certified",
  },
  {
    icon: CheckCircle,
    title: "GDPR compliant",
  },
  {
    icon: Clock,
    title: "99.99% uptime SLA",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
  },
  {
    icon: FileText,
    title: "Custom contracts",
  },
  {
    icon: Buildings,
    title: "Enterprise SSO",
  },
];

export function Enterprise() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <motion.div
          className={cn(
            "relative overflow-hidden",
            "rounded-[var(--card-radius)]",
            "bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--color-accent)]/5",
            "border border-[var(--border-subtle)]",
            "p-8 md:p-12 lg:p-16"
          )}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: linearEasing.dramatic }}
        >
          {/* Background Glow - Animated */}
          <motion.div
            className={cn(
              "absolute top-0 right-0 w-96 h-96",
              "bg-[var(--color-accent)]/10 blur-3xl",
              "rounded-full -translate-y-1/2 translate-x-1/2"
            )}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Badge */}
            <motion.span
              className={cn(
                "inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full",
                "border border-[var(--color-accent)]/30",
                "bg-[var(--color-accent)]/10",
                "text-[var(--color-accent)] text-sm font-medium"
              )}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Enterprise
            </motion.span>

            {/* Header */}
            <motion.h2
              className="heading-linear text-3xl md:text-4xl text-[var(--text-primary)] mb-4 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5, ease: linearEasing.dramatic }}
            >
              Enterprise-ready infrastructure
            </motion.h2>
            <motion.p
              className="text-lg text-[var(--text-secondary)] mb-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5, ease: linearEasing.dramatic }}
            >
              Built for scale, security, and compliance. Trusted by the world's
              largest app publishers.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center gap-3 text-[var(--text-secondary)]"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: linearEasing.snappy,
                      },
                    },
                  }}
                  whileHover={{ x: 4 }}
                  transition={transition.snappy}
                >
                  <motion.div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-lg",
                      "bg-[var(--bg-elevated)] border border-[var(--border-subtle)]",
                      "flex items-center justify-center"
                    )}
                    whileHover={{
                      borderColor: "rgba(94, 106, 210, 0.4)",
                      boxShadow: "0 0 15px rgba(94, 106, 210, 0.3)",
                    }}
                    transition={transition.snappy}
                  >
                    <feature.icon size={16} weight="duotone" className="text-[var(--color-accent)]" />
                  </motion.div>
                  <span className="text-sm font-medium">{feature.title}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              whileHover={hoverScale}
              whileTap={tapScale}
            >
              <Button
                size="lg"
                className={cn(
                  "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]",
                  "text-white font-medium",
                  "rounded-[var(--button-radius)]",
                  "transition-all duration-[var(--duration-normal)]",
                  "shadow-[0_0_20px_rgba(94,106,210,0.3)]",
                  "hover:shadow-[0_0_40px_rgba(94,106,210,0.5)]"
                )}
              >
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Enterprise;
