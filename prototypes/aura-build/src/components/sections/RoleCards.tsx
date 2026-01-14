"use client";

import { Code, ChartLineUp, Layout, Check } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";

const roles = [
  {
    icon: Code,
    label: "Engineering",
    title: "For Developers",
    subtitle: "SDK Integration",
    description:
      "Integrate subscriptions in minutes. Handle receipt validation, entitlements, and sync automatically.",
    features: ["Native iOS/Android SDKs", "React Native & Flutter", "Receipt Validation"],
    status: "active",
  },
  {
    icon: ChartLineUp,
    label: "Growth",
    title: "For Marketers",
    subtitle: "A/B Testing",
    description:
      "Design paywalls, run A/B tests, and optimize conversions without engineering help.",
    features: ["Visual Paywall Builder", "No-code Experiments", "Remote Config"],
    status: "pending",
  },
  {
    icon: Layout,
    label: "Management",
    title: "For App Owners",
    subtitle: "Revenue Analytics",
    description:
      "Get real-time visibility into your subscription business with revenue analytics and cohort analysis.",
    features: ["Real-time Dashboard", "Cohort Analysis", "LTV Prediction"],
    status: "triggered",
  },
];

export function RoleCards() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-24 relative">
      <div className="text-center max-w-3xl mx-auto mb-20 relative">
        <h2 className="text-3xl lg:text-5xl font-medium tracking-tight animate-intro-blur font-sans mb-6">
          Built for the entire product team
        </h2>
        <p className="text-lg text-stone-500 animate-intro-blur delay-100 max-w-xl mx-auto">
          From implementation to optimization, Adapty unifies your mobile subscription stack.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {roles.map((role, index) => (
          <div
            key={role.title}
            className="group relative animate-intro-blur flex flex-col"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Main Card - Persona Style */}
            <div className="glass-panel p-1 rounded-2xl h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-white/50 rounded-xl p-6 h-full flex flex-col backdrop-blur-sm">

                {/* Persona Header */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center shadow-sm text-stone-700">
                      <role.icon size={20} weight="duotone" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
                        {role.label}
                      </div>
                      <div className="text-sm font-bold text-stone-900">
                        {role.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-stone-100 border border-stone-200">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      index === 0 ? "bg-emerald-500" : index === 1 ? "bg-blue-500" : "bg-amber-500"
                    )} />
                    <span className="text-[10px] font-medium text-stone-600 uppercase">
                      {index === 0 ? "Ready" : index === 1 ? "Active" : "Syncing"}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-3">{role.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
                  {role.description}
                </p>

                {/* Feature List (Attio Style) */}
                <ul className="space-y-2 mb-2">
                  {role.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center text-stone-400">
                        <Check size={12} weight="bold" />
                      </span>
                      <span className="text-stone-600 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
