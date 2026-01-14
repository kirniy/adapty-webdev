"use client";

import {
  Binary,
  Monitor,
  Users,
} from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    icon: Binary,
    title: "We Speak Data",
    description: "No guessing. Every decision is backed by analytics and raw performance metrics.",
  },
  {
    icon: Monitor,
    title: "Full-Stack Visibility",
    description: "We don't just fix the code; we optimize the business outcome across the stack.",
  },
  {
    icon: Users,
    title: "Partner, Not Vendor",
    description: "We integrate with your team via Slack/Teams for real-time collaboration.",
  },
];

export function WhyAdapty() {
  return (
    <section className="py-12 lg:py-16 max-w-[1600px] mx-auto px-6 lg:px-12 relative">
      <div className="text-center max-w-4xl mx-auto space-y-8 pt-12">
        <h2 className="text-3xl lg:text-6xl font-medium text-stone-900 tracking-tight font-sans leading-tight text-balance">
          Why Adapty?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {features.map((feature, i) => (
            <div key={i} className="space-y-3 group cursor-default">
              <div className="mx-auto w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-lime">
                <feature.icon size={24} weight="duotone" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">{feature.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
