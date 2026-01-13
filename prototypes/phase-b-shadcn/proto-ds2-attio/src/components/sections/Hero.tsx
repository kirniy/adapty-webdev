"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "@phosphor-icons/react";

export function Hero() {
  const [email, setEmail] = React.useState("");

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      {/* DS2 ATTIO: Section number - editorial style */}
      <div className="absolute top-24 left-6 md:left-12 lg:left-16">
        <span className="section-number">[01]</span>
      </div>

      <div className="relative mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center">
          {/* Promotional Badge - DS2 ghost style */}
          <Badge
            variant="outline"
            className={cn(
              "mb-8 px-4 py-2 rounded-md",
              "border-[var(--border-default)] bg-transparent",
              "text-[var(--text-secondary)] text-sm font-medium",
              "hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]",
              "transition-all duration-[var(--duration-fast)]",
              "cursor-pointer group"
            )}
          >
            <BookOpen size={16} weight="duotone" className="mr-2 inline-block text-[var(--color-accent)]" />
            Ebook: $100K playbook
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Badge>

          {/* Main Headline - DS2 Editorial with Serif Accent */}
          <h1
            className={cn(
              "headline-attio",
              "text-4xl sm:text-5xl md:text-6xl lg:text-[68px]",
              "max-w-4xl mx-auto mb-6",
              "text-[var(--text-primary)]"
            )}
          >
            Revenue management for{" "}
            <span className="text-serif italic text-[var(--color-accent)]">
              in-app purchases
            </span>
          </h1>

          {/* Subheadline - DS2 body weight */}
          <p
            className={cn(
              "body-attio",
              "text-lg sm:text-xl md:text-2xl",
              "text-[var(--text-secondary)]",
              "max-w-2xl mx-auto mb-10",
              "leading-relaxed tracking-[var(--letter-spacing-body)]"
            )}
          >
            Save months on integrating subscriptions and double your app revenue
            with paywall management.
          </p>

          {/* Email CTA - DS2 with BLACK primary button */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-6">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "h-12 px-4",
                "bg-[var(--bg-primary)] border-[var(--border-default)]",
                "text-[var(--text-primary)] placeholder:text-[var(--text-muted)]",
                "rounded-[var(--input-radius)]",
                "focus:border-[var(--text-primary)] focus:ring-[var(--text-primary)]/10",
                "transition-all duration-[var(--duration-fast)]"
              )}
            />
            <Button
              size="lg"
              className={cn(
                "h-12 px-8",
                "bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-hover)]",
                "text-white font-medium",
                "rounded-[var(--button-radius)]",
                "transition-all duration-[var(--duration-fast)]"
              )}
            >
              Get started
            </Button>
          </div>

          {/* Ghost Secondary Button */}
          <Button
            variant="outline"
            className={cn(
              "btn-ghost",
              "h-10 px-6 mb-8",
              "rounded-[var(--button-radius)]"
            )}
          >
            Watch demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          {/* Trust Statement */}
          <p className="text-sm text-[var(--text-muted)] body-attio">
            Trusted by{" "}
            <span className="text-[var(--text-secondary)] font-medium">
              15,000+
            </span>{" "}
            apps worldwide
          </p>

          {/* Hero Visual - DS2 Clean Card Style */}
          <div className="mt-16 w-full max-w-5xl">
            <div
              className={cn(
                "relative rounded-[var(--card-radius)] overflow-hidden",
                "bg-[var(--bg-primary)]",
                "shadow-lg",
                "border border-[var(--border-subtle)]",
                "aspect-[16/9]"
              )}
            >
              {/* Dashboard preview mockup - DS2 light style */}
              <div className="absolute inset-4 md:inset-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                {/* Top bar */}
                <div className="h-10 border-b border-[var(--border-subtle)] flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="ml-4 h-5 w-48 rounded bg-[var(--bg-tertiary)]" />
                </div>

                {/* Content area */}
                <div className="p-4 md:p-6 grid grid-cols-3 gap-4">
                  {/* Metric cards - DS2 cinematic shadow */}
                  {[
                    { label: "MRR", value: "$127K" },
                    { label: "Subscribers", value: "12.4K" },
                    { label: "Conversion", value: "4.2%" },
                  ].map((metric, i) => (
                    <div
                      key={i}
                      className="card-cinematic p-4 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]"
                    >
                      <div className="text-xs text-[var(--text-muted)] mb-1 uppercase tracking-wider">
                        {metric.label}
                      </div>
                      <div className="text-xl font-semibold text-[var(--text-primary)]">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="mx-4 md:mx-6 h-24 md:h-32 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]" />
              </div>

              {/* DS2 ATTIO: Schematic connector line (subtle) */}
              <div className="absolute left-0 top-1/2 w-4 h-px bg-[var(--border-default)]" />
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 connection-node" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
