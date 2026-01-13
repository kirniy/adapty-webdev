"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Buildings,
  Headset,
  Certificate,
  ArrowRight,
} from "@phosphor-icons/react";

const enterpriseFeatures = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. GDPR and CCPA compliant. Your data is protected.",
  },
  {
    icon: Buildings,
    title: "Dedicated Support",
    description: "Named account manager, priority support, and custom SLAs.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Round-the-clock technical support with guaranteed response times.",
  },
  {
    icon: Certificate,
    title: "Custom Contracts",
    description: "Flexible terms, volume discounts, and procurement-friendly billing.",
  },
];

export function Enterprise() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-secondary)]">
      {/* DS2 ATTIO: Section number */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-16">
        <span className="section-number">[08]</span>
      </div>

      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div>
            <h2 className="headline-attio text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
              Ready for{" "}
              <span className="text-serif italic text-[var(--color-accent)]">
                enterprise
              </span>
            </h2>
            <p className="body-attio text-lg text-[var(--text-secondary)] mb-8">
              Trusted by Fortune 500 companies and high-growth startups alike.
              Get enterprise-grade security, support, and reliability.
            </p>

            {/* CTA buttons - DS2 style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className={cn(
                  "bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-hover)]",
                  "text-white",
                  "rounded-[var(--button-radius)]",
                  "h-11 px-6",
                  "transition-all duration-[var(--duration-fast)]",
                  "gap-2"
                )}
              >
                Contact sales
                <ArrowRight size={16} weight="bold" />
              </Button>
              <Button variant="outline" className="btn-ghost">
                View security docs
              </Button>
            </div>
          </div>

          {/* Right column - Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "p-5",
                  "bg-[var(--bg-primary)]",
                  "border border-[var(--border-subtle)]",
                  "rounded-[var(--card-radius)]",
                  "card-cinematic"
                )}
              >
                <div className="p-2 w-fit rounded-md bg-[var(--bg-tertiary)] mb-4">
                  <feature.icon
                    size={24}
                    weight="duotone"
                    className="text-[var(--text-primary)]"
                  />
                </div>
                <h3 className="headline-attio text-lg text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="body-attio text-sm text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges - DS2 subtle styling */}
        <div className="mt-16 pt-12 border-t border-[var(--border-subtle)]">
          <p className="text-center text-sm text-[var(--text-muted)] uppercase tracking-[0.2em] mb-8 body-attio">
            Certifications & Compliance
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {["SOC 2", "GDPR", "CCPA", "ISO 27001", "HIPAA"].map(
              (badge, i) => (
                <div
                  key={i}
                  className={cn(
                    "px-4 py-2",
                    "border border-[var(--border-subtle)]",
                    "rounded-[var(--radius-sm)]",
                    "text-sm text-[var(--text-tertiary)]",
                    "bg-[var(--bg-primary)]"
                  )}
                >
                  {badge}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enterprise;
