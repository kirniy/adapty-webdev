"use client";

import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

const stats = [
  { value: "$2B+", label: "Processed revenue" },
  { value: "15k+", label: "Apps powered" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "200M+", label: "Monthly requests" },
];

export function Stats() {
  return (
    <section className="border-y border-stone-200 bg-white relative">
      {/* ══════════════════════════════════════════════════════════════
         SCHEMATIC DECORATIONS
         ══════════════════════════════════════════════════════════════ */}

      {/* Left vertical rail */}
      <div className="absolute left-0 top-4 bottom-4 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.2} />
      </div>

      {/* Right vertical rail */}
      <div className="absolute right-0 top-4 bottom-4 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" accent delay={0.3} />
      </div>

      {/* Top connector beam */}
      <div className="absolute top-4 left-12 right-12 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
      </div>

      {/* Bottom connector beam */}
      <div className="absolute bottom-4 left-12 right-12 hidden lg:block">
        <SchematicLine direction="horizontal" length="100%" withNode="both" delay={0.6} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative">
        {/* Horizontal beam connecting all stats */}
        <div className="absolute top-8 left-[15%] w-[70%] hidden lg:block">
          <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.8} />
        </div>

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`space-y-2 relative group ${
              index > 0 ? "border-l border-stone-100" : ""
            }`}
          >
            {/* Top connection node */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 hidden lg:block">
              <ConnectionNode
                size="sm"
                accent={index === 2}
                filled={index === 0}
                pulse={index === 2}
              />
            </div>

            {/* Vertical line from node to value */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 hidden lg:block">
              <SchematicLine
                direction="vertical"
                length="16px"
                accent={index === 2}
                delay={0.4 + index * 0.1}
              />
            </div>

            <div className="text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 animate-intro-blur pt-4" style={{ animationDelay: `${index * 100}ms` }}>
              {stat.value}
            </div>
            <div className="text-sm font-medium text-stone-500">
              {stat.label}
            </div>

            {/* Bottom connection node on hover */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
              <ConnectionNode size="xs" accent />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
