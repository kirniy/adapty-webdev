"use client";

import { Shield, Lock, HardDrives, Headset } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";

const features = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: Lock, label: "GDPR Compliant" },
  { icon: HardDrives, label: "99.99% Uptime" },
  { icon: Headset, label: "Dedicated Support" },
];

export function Enterprise() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-24">
      <Card className="p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight mb-4 animate-intro-blur text-balance">
            Enterprise-ready infrastructure
          </h2>
          <p className="text-stone-500 mb-8 animate-intro-blur delay-100">
            Built for scale, security, and compliance. We support the
            world&apos;s largest publishers.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 text-sm font-medium animate-intro-blur"
                style={{ animationDelay: `${150 + index * 75}ms` }}
              >
                <feature.icon size={18} className="text-stone-400" weight="duotone" />
                {feature.label}
              </div>
            ))}
          </div>
        </div>

        <div>
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 font-semibold text-stone-700 hover:bg-stone-50 transition-colors bg-white/60 backdrop-blur-sm animate-intro-blur delay-300">
            Contact Sales
          </button>
        </div>
      </Card>
    </section>
  );
}
