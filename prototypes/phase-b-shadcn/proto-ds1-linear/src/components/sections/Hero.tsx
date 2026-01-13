"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BookOpen } from "@phosphor-icons/react";
import {
  heroHeadline,
  heroSubheadline,
  heroCTA,
  heroDashboard,
  transition,
  hoverScale,
  tapScale,
  staggerContainer,
  staggerItem,
  linearEasing,
} from "@/lib/animations";

export function Hero() {
  const [email, setEmail] = React.useState("");

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: linearEasing.premium }}
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(94, 106, 210, 0.2), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(94, 106, 210, 0.1), transparent),
            radial-gradient(ellipse 40% 30% at 20% 40%, rgba(113, 112, 255, 0.08), transparent)
          `,
        }}
        aria-hidden="true"
      />

      {/* Floating orbs - ambient animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(94, 106, 210, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <div className="relative mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center">
          {/* Promotional Badge with subtle animation */}
          <motion.span
            className={cn(
              "inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full cursor-pointer group",
              "border border-white/10 bg-white/5",
              "text-[var(--text-secondary)] text-sm font-medium",
              "backdrop-blur-sm",
              "hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/10 hover:text-[var(--text-primary)]",
              "transition-all duration-[var(--duration-normal)]"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: linearEasing.dramatic }}
            whileHover={{ scale: 1.02 }}
          >
            <BookOpen size={16} weight="duotone" className="text-[var(--color-accent)]" />
            Ebook: $100K playbook
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.span>

          {/* Main Headline with dramatic reveal */}
          <motion.h1
            variants={heroHeadline}
            initial="hidden"
            animate="visible"
            className={cn(
              "heading-linear",
              "text-4xl sm:text-5xl md:text-6xl lg:text-[72px]",
              "max-w-4xl mx-auto mb-6",
              "text-[var(--text-primary)]"
            )}
          >
            Revenue management for{" "}
            <span className="text-gradient-accent">in-app purchases</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={heroSubheadline}
            initial="hidden"
            animate="visible"
            className={cn(
              "text-lg sm:text-xl md:text-2xl",
              "text-[var(--text-secondary)]",
              "max-w-2xl mx-auto mb-10",
              "leading-relaxed tracking-[var(--letter-spacing-body)]"
            )}
          >
            Save months on integrating subscriptions and double your app revenue
            with paywall management.
          </motion.p>

          {/* Email CTA with stagger */}
          <motion.div
            variants={heroCTA}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-6"
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
            <motion.div
              whileHover={hoverScale}
              whileTap={tapScale}
            >
              <Button
                size="lg"
                className={cn(
                  "h-12 px-8",
                  "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]",
                  "text-white font-medium",
                  "rounded-[var(--button-radius)]",
                  "transition-colors duration-[var(--duration-normal)]",
                  "shadow-[0_0_20px_rgba(94,106,210,0.3)]",
                  "hover:shadow-[0_0_40px_rgba(94,106,210,0.5)]"
                )}
              >
                Get started
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-sm text-[var(--text-muted)]"
          >
            Trusted by{" "}
            <span className="text-[var(--text-secondary)] font-medium">
              15,000+
            </span>{" "}
            apps worldwide
          </motion.p>

          {/* Hero Dashboard with 3D perspective reveal */}
          <motion.div
            variants={heroDashboard}
            initial="hidden"
            animate="visible"
            className="mt-16 w-full max-w-5xl"
            style={{ perspective: "2000px" }}
          >
            <motion.div
              className={cn(
                "relative rounded-[var(--card-radius)] overflow-hidden",
                "bg-[var(--bg-tertiary)]",
                "shadow-[var(--shadow-card)]",
                "border border-[var(--border-subtle)]",
                "aspect-[16/9]"
              )}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              {/* Glass overlay with gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(
                      to bottom right,
                      rgba(255, 255, 255, 0.08) 0%,
                      transparent 50%
                    )
                  `,
                }}
              />

              {/* Dashboard preview mockup */}
              <div className="absolute inset-6 md:inset-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 backdrop-blur-sm overflow-hidden">
                {/* Top bar with window controls */}
                <div className="h-10 border-b border-[var(--border-subtle)] flex items-center px-4 gap-2 bg-[var(--bg-primary)]/50">
                  <div className="flex gap-1.5">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[#ff5f57]"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[#febc2e]"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[#28c840]"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <div className="ml-4 h-5 w-48 rounded bg-[var(--bg-tertiary)]" />
                </div>

                {/* Content area with staggered metric cards */}
                <motion.div
                  className="p-4 md:p-6 grid grid-cols-3 gap-3 md:gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  transition={{ delayChildren: 0.8 }}
                >
                  {[
                    { label: "MRR", value: "$127K", change: "+12.5%" },
                    { label: "Subscribers", value: "12.4K", change: "+8.2%" },
                    { label: "Conversion", value: "4.2%", change: "+0.3%" },
                  ].map((metric, i) => (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      className="p-3 md:p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]"
                      whileHover={{
                        borderColor: "rgba(94, 106, 210, 0.3)",
                        transition: transition.snappy,
                      }}
                    >
                      <div className="text-[10px] md:text-xs text-[var(--text-muted)] mb-1">
                        {metric.label}
                      </div>
                      <div className="text-base md:text-xl font-semibold text-[var(--text-primary)]">
                        {metric.value}
                      </div>
                      <div className="text-[10px] md:text-xs text-[var(--color-success)]">
                        {metric.change}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Animated chart placeholder */}
                <div className="mx-4 md:mx-6 h-24 md:h-32 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] overflow-hidden relative">
                  {/* Animated chart line */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 100"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M0,80 C50,70 100,40 150,50 C200,60 250,30 300,35 C350,40 400,20 400,25"
                      fill="none"
                      stroke="rgba(94, 106, 210, 0.5)"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        pathLength: { duration: 2, delay: 1, ease: "easeInOut" },
                        opacity: { duration: 0.5, delay: 1 },
                      }}
                    />
                    <motion.path
                      d="M0,80 C50,70 100,40 150,50 C200,60 250,30 300,35 C350,40 400,20 400,25 V100 H0 Z"
                      fill="url(#chartGradient)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(94, 106, 210, 0.5)" />
                        <stop offset="100%" stopColor="rgba(94, 106, 210, 0)" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
