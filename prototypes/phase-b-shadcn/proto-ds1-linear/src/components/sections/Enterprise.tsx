"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  CheckCircle,
  Clock,
  Headphones,
  FileText,
  Buildings,
} from "@phosphor-icons/react";

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
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <div
          className={cn(
            "relative overflow-hidden",
            "rounded-[var(--card-radius)]",
            "bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--color-accent)]/5",
            "border border-[var(--border-subtle)]",
            "p-8 md:p-12 lg:p-16"
          )}
        >
          {/* Background Glow */}
          <div
            className={cn(
              "absolute top-0 right-0 w-96 h-96",
              "bg-[var(--color-accent)]/10 blur-3xl",
              "rounded-full -translate-y-1/2 translate-x-1/2"
            )}
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Badge */}
            <Badge
              variant="outline"
              className={cn(
                "mb-6 px-3 py-1",
                "border-[var(--color-accent)]/30 text-[var(--color-accent)]",
                "bg-[var(--color-accent)]/10"
              )}
            >
              Enterprise
            </Badge>

            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 tracking-[var(--letter-spacing-heading)] max-w-xl">
              Enterprise-ready infrastructure
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-xl">
              Built for scale, security, and compliance. Trusted by the world's
              largest app publishers.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 text-[var(--text-secondary)]"
                >
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-lg",
                      "bg-[var(--bg-elevated)] border border-[var(--border-subtle)]",
                      "flex items-center justify-center"
                    )}
                  >
                    <feature.icon size={16} weight="duotone" className="text-[var(--color-accent)]" />
                  </div>
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className={cn(
                "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]",
                "text-white font-medium",
                "rounded-[var(--button-radius)]",
                "transition-all duration-[var(--duration-normal)]",
                "hover:shadow-[0_0_30px_rgba(94,106,210,0.4)]"
              )}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enterprise;
