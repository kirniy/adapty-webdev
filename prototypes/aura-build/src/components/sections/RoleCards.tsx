"use client";

import { Code, ChartLineUp, Layout } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

const roles = [
  {
    icon: Code,
    title: "For Developers",
    description:
      "Integrate subscriptions in minutes with our SDK. Handle receipt validation, manage entitlements, and sync purchase data automatically.",
    tags: ["Native SDKs", "Server API"],
  },
  {
    icon: ChartLineUp,
    title: "For Marketers",
    description:
      "Design paywalls, run A/B tests, and optimize conversions without engineering help.",
    tags: ["No-code builder", "A/B testing"],
  },
  {
    icon: Layout,
    title: "For App Owners",
    description:
      "Get real-time visibility into your subscription business with revenue analytics and cohort analysis.",
    tags: ["Revenue analytics", "Dashboards"],
  },
];

export function RoleCards() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20 relative">
      {/* ══════════════════════════════════════════════════════════════
         SCHEMATIC DECORATIONS
         ══════════════════════════════════════════════════════════════ */}

      {/* Left vertical rail */}
      <div className="absolute left-0 top-12 bottom-12 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.2} />
      </div>

      {/* Right vertical rail */}
      <div className="absolute right-0 top-12 bottom-12 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.3} />
      </div>

      {/* Top beam connector */}
      <div className="absolute top-6 left-12 right-12 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
      </div>

      <div className="text-center max-w-2xl mx-auto mb-16 relative">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight animate-intro-blur">
          Help your team run the mobile subscription business. Faster and
          cheaper.
        </h2>

        {/* Decorative nodes near heading */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <ConnectionNode size="sm" accent />
        </div>
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <ConnectionNode size="sm" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Horizontal beam connecting all cards */}
        <div className="absolute top-1/2 left-[10%] w-[80%] hidden lg:block">
          <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.8} />
        </div>

        {/* Grid intersection nodes */}
        <div className="absolute -top-3 left-[33%] hidden lg:block">
          <ConnectionNode size="sm" />
        </div>
        <div className="absolute -top-3 left-[66%] hidden lg:block">
          <ConnectionNode size="sm" accent />
        </div>

        {roles.map((role, index) => (
          <Card
            key={role.title}
            className="p-8 relative group animate-intro-blur"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Corner schematic nodes */}
            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" />
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" />
            </div>
            <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" />
            </div>
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" accent />
            </div>

            {/* Left connection node */}
            {index > 0 && (
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
                <ConnectionNode size="sm" filled={index === 1} accent={index === 2} />
              </div>
            )}

            {/* Right connection node */}
            {index < 2 && (
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
                <ConnectionNode size="sm" />
              </div>
            )}

            <role.icon size={32} weight="duotone" className="text-stone-900 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              {role.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-stone-100 rounded text-xs font-medium text-stone-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom beam connector */}
      <div className="absolute bottom-6 left-12 right-12 hidden lg:block">
        <SchematicLine direction="horizontal" length="100%" withNode="both" delay={1} />
      </div>
    </section>
  );
}
