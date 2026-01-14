"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

const trustedByLogos = [
  { name: "Feeld", src: "/logos/trusted-by/feeld.svg" },
  { name: "Bumble", src: "/logos/trusted-by/bumble.svg" },
  { name: "Weewoo", src: "/logos/trusted-by/weewoo.svg" },
  { name: "AppNation", src: "/logos/trusted-by/appnation.webp" },
  { name: "Almus", src: "/logos/trusted-by/almus.svg" },
  { name: "Impala Studios", src: "/logos/trusted-by/impala-studios.svg" },
  { name: "HubX", src: "/logos/trusted-by/hubx.svg" },
];

export function TrustedBy() {
  return (
    <section className="border-y border-stone-200 bg-white py-12 overflow-hidden relative">
      {/* ══════════════════════════════════════════════════════════════
         SCHEMATIC DECORATIONS
         ══════════════════════════════════════════════════════════════ */}

      {/* Left vertical marker */}
      <div className="absolute left-6 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center">
        <ConnectionNode size="sm" />
        <SchematicLine direction="vertical" length="40px" delay={0.2} />
        <ConnectionNode size="xs" accent />
      </div>

      {/* Right vertical marker */}
      <div className="absolute right-6 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center">
        <ConnectionNode size="xs" />
        <SchematicLine direction="vertical" length="40px" accent delay={0.3} />
        <ConnectionNode size="sm" accent filled />
      </div>

      {/* Top edge beam */}
      <div className="absolute top-0 left-24 right-24 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.4} />
      </div>

      {/* Bottom edge beam */}
      <div className="absolute bottom-0 left-24 right-24 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="right" delay={0.5} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 text-center mb-8 relative">
        <p className="text-sm font-medium text-stone-500 uppercase tracking-widest animate-intro-blur delay-0">
          Trusted by 15,000+ apps and the world&apos;s largest app publishers
        </p>

        {/* Decorative nodes near text */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <ConnectionNode size="xs" />
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <ConnectionNode size="xs" />
        </div>
      </div>

      <Marquee pauseOnHover speed="normal" className="bg-white">
        <div className="flex items-center gap-16 px-8">
          {trustedByLogos.map((logo, index) => (
            <div
              key={logo.name}
              className="relative h-8 w-24 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300 group"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
              {/* Connection node on hover */}
              {index % 2 === 0 && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ConnectionNode size="xs" accent />
                </div>
              )}
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
