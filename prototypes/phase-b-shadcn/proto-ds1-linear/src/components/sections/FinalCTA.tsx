"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "@phosphor-icons/react";
import {
  linearEasing,
  transition,
  hoverScale,
  tapScale,
} from "@/lib/animations";

export function FinalCTA() {
  const [email, setEmail] = React.useState("");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-[var(--section-padding)] relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(94, 106, 210, 0.15), transparent),
            linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))
          `,
        }}
        aria-hidden="true"
      />

      {/* Floating accent orbs */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, ease: linearEasing.dramatic }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(94, 106, 210, 0.2) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <motion.div
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.7,
            ease: linearEasing.dramatic,
          }}
        >
          <motion.h2
            className={cn(
              "heading-linear",
              "text-3xl sm:text-4xl lg:text-5xl",
              "text-[var(--text-primary)] mb-6"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              ease: linearEasing.dramatic,
              delay: 0.1,
            }}
          >
            Get started today or schedule a demo for your personal onboarding
          </motion.h2>

          {/* Email CTA with stagger */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              ease: linearEasing.snappy,
              delay: 0.3,
            }}
          >
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "h-12 px-4",
                "bg-[var(--bg-tertiary)] border-[var(--border)]",
                "text-[var(--text-primary)] placeholder:text-[var(--text-muted)]",
                "rounded-[var(--input-radius)]",
                "focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20",
                "transition-all duration-[var(--duration-normal)]"
              )}
            />
            <motion.div whileHover={hoverScale} whileTap={tapScale}>
              <Button
                size="lg"
                className={cn(
                  "h-12 px-8",
                  "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]",
                  "text-white font-medium",
                  "rounded-[var(--button-radius)]",
                  "transition-colors duration-[var(--duration-normal)]",
                  "shadow-[0_0_20px_rgba(94,106,210,0.4)]",
                  "hover:shadow-[0_0_40px_rgba(94,106,210,0.6)]"
                )}
              >
                Start for free
              </Button>
            </motion.div>
          </motion.div>

          {/* Secondary Link */}
          <motion.button
            className={cn(
              "text-[var(--text-secondary)]",
              "hover:text-[var(--text-primary)]",
              "transition-colors duration-[var(--duration-normal)]",
              "flex items-center gap-2 group"
            )}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ x: 4 }}
          >
            Or schedule a demo
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={transition.snappy}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
