"use client";

import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";
import {
  Code,
  Palette,
  ChartLineUp,
  Lightning,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

const WORKFLOW_STEPS = [
  {
    icon: Code,
    title: "Integrate SDK",
    description: "Drop-in SDKs for all platforms in minutes",
    color: "blue",
  },
  {
    icon: Palette,
    title: "Build Paywalls",
    description: "No-code builder with 50+ templates",
    color: "purple",
  },
  {
    icon: Lightning,
    title: "Run A/B Tests",
    description: "Statistical confidence for pricing experiments",
    color: "lime",
  },
  {
    icon: ChartLineUp,
    title: "Grow Revenue",
    description: "Real-time analytics and revenue optimization",
    color: "orange",
  },
];

const colorClasses = {
  blue: "bg-blue-500/10 text-blue-600 border-blue-200",
  purple: "bg-purple-500/10 text-purple-600 border-purple-200",
  lime: "bg-brand-lime/20 text-green-700 border-green-200",
  orange: "bg-orange-500/10 text-orange-600 border-orange-200",
};

export function WorkflowSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-24 relative">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-4">
          <ConnectionNode size="md" accent filled />
        </div>
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-balance">
          Simple workflow, powerful results
        </h2>
        <p className="text-stone-500 text-lg max-w-2xl mx-auto">
          From integration to optimization in four easy steps
        </p>
      </div>

      {/* Workflow Steps */}
      <div className="relative">
        {/* Horizontal connection line through steps */}
        <div className="absolute top-24 left-[10%] right-[10%] hidden lg:block">
          <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {WORKFLOW_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Number */}
              <div className="absolute -top-2 left-4 lg:left-1/2 lg:-translate-x-1/2 text-xs font-bold text-stone-300 z-10">
                0{index + 1}
              </div>

              {/* Connection Node above icon */}
              <div className="mb-2 hidden lg:block">
                <ConnectionNode size="sm" accent={index === 2} />
              </div>

              {/* Icon Container */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border ${
                  colorClasses[step.color as keyof typeof colorClasses]
                } transition-transform group-hover:scale-110`}
              >
                <step.icon size={28} weight="duotone" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-stone-500">{step.description}</p>

              {/* Arrow to next step (hidden on last item) */}
              {index < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-24 translate-x-1/2 z-10">
                  <ArrowRight
                    size={20}
                    weight="bold"
                    className="text-stone-300"
                  />
                </div>
              )}

              {/* Vertical line to next step on mobile */}
              {index < WORKFLOW_STEPS.length - 1 && (
                <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 h-8">
                  <SchematicLine direction="vertical" length="100%" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom schematic decoration */}
      <div className="absolute bottom-0 left-24 right-24 hidden lg:block">
        <SchematicLine direction="horizontal" length="100%" withNode="both" delay={1.2} />
      </div>
    </section>
  );
}
