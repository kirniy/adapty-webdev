"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32">
      {/* DS2 ATTIO: Section number */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-16">
        <span className="section-number">[09]</span>
      </div>

      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* DS2 ATTIO: Centered CTA block with editorial styling */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Pre-headline */}
          <p className="text-sm text-[var(--text-muted)] uppercase tracking-[0.2em] mb-6 body-attio">
            Start building today
          </p>

          {/* Main headline with serif accent */}
          <h2 className="headline-attio text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] mb-6">
            Ready to grow your{" "}
            <span className="text-serif italic text-[var(--color-accent)]">
              subscription
            </span>{" "}
            revenue?
          </h2>

          {/* Subheadline */}
          <p className="body-attio text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            Join 15,000+ apps that trust Adapty. Free to start, no credit card required.
          </p>

          {/* CTA buttons - DS2 style */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className={cn(
                "bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-hover)]",
                "text-white",
                "rounded-[var(--button-radius)]",
                "h-12 px-8",
                "text-base font-medium",
                "transition-all duration-[var(--duration-fast)]",
                "gap-2"
              )}
            >
              Get started free
              <ArrowRight size={18} weight="bold" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={cn(
                "btn-ghost",
                "h-12 px-8",
                "text-base"
              )}
            >
              Schedule a demo
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-sm text-[var(--text-muted)] body-attio">
            No credit card required. Free plan includes up to $10K MTR.
          </p>
        </div>
      </div>

      {/* DS2 ATTIO: Dotted separator at bottom */}
      <div className="mt-20 mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <div className="dotted-separator" />
      </div>
    </section>
  );
}

export default FinalCTA;
