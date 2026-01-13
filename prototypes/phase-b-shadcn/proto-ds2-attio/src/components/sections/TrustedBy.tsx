"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const logos = [
  { src: "/logos/trusted-by/bumble.svg", alt: "Bumble" },
  { src: "/logos/trusted-by/feeld.svg", alt: "Feeld" },
  { src: "/logos/trusted-by/hubx.svg", alt: "HubX" },
  { src: "/logos/trusted-by/impala-studios.svg", alt: "Impala Studios" },
  { src: "/logos/trusted-by/almus.svg", alt: "Almus" },
  { src: "/logos/trusted-by/weewoo.svg", alt: "WeeWoo" },
  { src: "/logos/bumble.svg", alt: "Bumble" },
  { src: "/logos/feeld.svg", alt: "Feeld" },
];

export function TrustedBy() {
  return (
    <section className="relative py-16 md:py-20">
      {/* DS2 ATTIO: Section number */}
      <div className="absolute top-8 left-6 md:left-12 lg:left-16">
        <span className="section-number">[02]</span>
      </div>

      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section label - DS2 editorial style */}
        <p className="text-center text-sm text-[var(--text-muted)] uppercase tracking-[0.2em] mb-10 body-attio">
          Trusted by industry leaders
        </p>

        {/* Logo grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className={cn(
                "relative h-8 w-full max-w-[100px]",
                "opacity-60 hover:opacity-100",
                "transition-opacity duration-[var(--duration-fast)]",
                "grayscale hover:grayscale-0"
              )}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DS2 ATTIO: Dotted separator at bottom */}
      <div className="mt-16 mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <div className="dotted-separator" />
      </div>
    </section>
  );
}

export default TrustedBy;
