"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, ChartLine, Layout } from "@phosphor-icons/react";

const roles = [
  {
    icon: Code,
    title: "For Developers",
    description:
      "Ship subscriptions in days, not months. Our SDK handles the complexity of in-app purchases across iOS, Android, and web.",
    features: ["Cross-platform SDK", "Receipt validation", "Webhook events"],
  },
  {
    icon: ChartLine,
    title: "For Growth Teams",
    description:
      "Run experiments and optimize conversion without touching code. A/B test paywalls and pricing in real-time.",
    features: ["No-code paywalls", "A/B testing", "Cohort analysis"],
  },
  {
    icon: Layout,
    title: "For Product Managers",
    description:
      "Understand your subscribers better. Track key metrics, analyze funnels, and make data-driven decisions.",
    features: ["Subscription analytics", "Revenue insights", "Churn prediction"],
  },
];

export function RoleCards() {
  return (
    <section className="relative py-20 md:py-28">
      {/* DS2 ATTIO: Section number */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-16">
        <span className="section-number">[04]</span>
      </div>

      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="headline-attio text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
            Built for{" "}
            <span className="text-serif italic text-[var(--color-accent)]">
              every
            </span>{" "}
            team
          </h2>
          <p className="body-attio text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            From developers to growth teams, Adapty empowers your entire organization
          </p>
        </div>

        {/* Role cards grid - DS2 cinematic shadows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <Card
              key={index}
              className={cn(
                "card-cinematic",
                "bg-[var(--bg-primary)] border-[var(--border-subtle)]",
                "rounded-[var(--card-radius)]",
                "overflow-hidden"
              )}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-[var(--bg-tertiary)]">
                    <role.icon
                      size={24}
                      weight="duotone"
                      className="text-[var(--text-primary)]"
                    />
                  </div>
                </div>
                <h3 className="headline-attio text-xl text-[var(--text-primary)]">
                  {role.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="body-attio text-[var(--text-secondary)] mb-6">
                  {role.description}
                </p>
                <ul className="space-y-2">
                  {role.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoleCards;
