"use client";

import { Shield, Lock, HardDrives, Headset } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

const features = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: Lock, label: "GDPR Compliant" },
  { icon: HardDrives, label: "99.99% Uptime" },
  { icon: Headset, label: "Dedicated Support" },
];

export function Enterprise() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-24 relative">
      {/* ══════════════════════════════════════════════════════════════
         SCHEMATIC DECORATIONS
         ══════════════════════════════════════════════════════════════ */}

      {/* Left vertical rail */}
      <div className="absolute left-0 top-0 bottom-0 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.2} />
      </div>

      {/* Right vertical rail */}
      <div className="absolute right-0 top-0 bottom-0 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" accent delay={0.3} />
      </div>

      <Card className="p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative group overflow-hidden">
        {/* Corner schematic nodes */}
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ConnectionNode size="sm" />
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ConnectionNode size="sm" />
        </div>
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ConnectionNode size="sm" />
        </div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ConnectionNode size="sm" accent filled pulse />
        </div>

        {/* Edge beams */}
        <div className="absolute top-3 left-8 w-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
        </div>
        <div className="absolute top-3 right-8 w-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <BeamNoodle direction="horizontal" length="100%" from="right" delay={0.6} />
        </div>
        <div className="absolute bottom-3 left-8 w-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.7} />
        </div>
        <div className="absolute bottom-3 right-8 w-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <BeamNoodle direction="horizontal" length="100%" from="right" delay={0.8} />
        </div>

        <div className="max-w-xl relative">
          <h2 className="text-3xl font-semibold tracking-tight mb-4 animate-intro-blur">
            Enterprise-ready infrastructure
          </h2>
          <p className="text-stone-500 mb-8 animate-intro-blur delay-100">
            Built for scale, security, and compliance. We support the
            world&apos;s largest publishers.
          </p>

          <div className="grid grid-cols-2 gap-4 relative">
            {/* Horizontal beam connecting features */}
            <div className="absolute top-1/2 left-[10%] w-[80%] hidden md:block">
              <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.9} />
            </div>

            {features.map((feature, index) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 text-sm font-medium relative animate-intro-blur"
                style={{ animationDelay: `${150 + index * 75}ms` }}
              >
                <feature.icon size={18} className="text-stone-400" weight="duotone" />
                {feature.label}

                {/* Connection node on feature */}
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                  <ConnectionNode size="xs" accent={index % 2 === 0} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Connection to button */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <ConnectionNode size="md" accent filled />
          </div>

          <Button variant="secondary" size="lg" className="animate-intro-blur delay-300">
            Contact Sales
          </Button>
        </div>
      </Card>
    </section>
  );
}
