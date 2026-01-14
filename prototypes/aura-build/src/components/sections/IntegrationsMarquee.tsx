"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

const integrations = [
  { name: "Amplitude", src: "/integrations/amplitude.svg" },
  { name: "Mixpanel", src: "/integrations/mixpanel.svg" },
  { name: "AppsFlyer", src: "/integrations/appsflyer.svg" },
  { name: "Adjust", src: "/integrations/adjust.svg" },
  { name: "Branch", src: "/integrations/branch.svg" },
  { name: "Segment", src: "/integrations/segment.svg" },
  { name: "Firebase", src: "/integrations/firebase.svg" },
  { name: "Facebook", src: "/integrations/facebook.svg" },
  { name: "OneSignal", src: "/integrations/onesignal.svg" },
  { name: "Slack", src: "/integrations/slack.svg" },
  { name: "Braze", src: "/integrations/braze.svg" },
  { name: "PostHog", src: "/integrations/posthog.svg" },
];

export function IntegrationsMarquee() {
  return (
    <section className="py-12 bg-stone-50 overflow-hidden relative">
      {/* ══════════════════════════════════════════════════════════════
         SCHEMATIC DECORATIONS
         ══════════════════════════════════════════════════════════════ */}

      {/* Left vertical rail */}
      <div className="absolute left-0 top-4 bottom-4 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.2} />
      </div>

      {/* Right vertical rail */}
      <div className="absolute right-0 top-4 bottom-4 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.3} />
      </div>

      {/* Top beam connector */}
      <div className="absolute top-4 left-12 right-12 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
      </div>

      {/* Bottom beam connector */}
      <div className="absolute bottom-4 left-12 right-12 hidden lg:block">
        <SchematicLine direction="horizontal" length="100%" withNode="both" delay={0.6} />
      </div>

      <div className="text-center mb-10 px-6 relative">
        <h2 className="text-2xl font-semibold tracking-tight mb-2 animate-intro-blur">
          Connect with your favorite tools
        </h2>
        <p className="text-stone-500 text-sm animate-intro-blur delay-100">
          Send subscription data to analytics, attribution, and marketing
          platforms
        </p>

        {/* Decorative nodes */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <ConnectionNode size="sm" accent />
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <ConnectionNode size="sm" />
        </div>
      </div>

      <div className="relative">
        {/* Connection nodes at marquee edges */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <ConnectionNode size="md" accent filled pulse />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <ConnectionNode size="md" filled />
        </div>

        {/* Horizontal beam through marquee */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 hidden lg:block pointer-events-none">
          <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.8} />
        </div>

        <Marquee pauseOnHover speed="slow" className="bg-stone-50">
          <div className="flex items-center gap-12 px-6">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="relative h-10 w-28 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
              >
                <Image
                  src={integration.src}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
                {/* Connection node on hover */}
                {index % 3 === 0 && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ConnectionNode size="xs" accent />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
