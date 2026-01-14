"use client";

import Image from "next/image";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

const badges = [
  { src: "/images/g2-badges/g2-winter-2025-1.svg", alt: "G2 Winter 2025 Award" },
  { src: "/images/g2-badges/g2-winter-2025-2.svg", alt: "G2 Winter 2025 Award" },
  { src: "/images/g2-badges/g2-winter-2025-3.svg", alt: "G2 Winter 2025 Award" },
  { src: "/images/g2-badges/g2-winter-2025-4.svg", alt: "G2 Winter 2025 Award" },
  { src: "/images/g2-badges/g2-winter-2025-5.svg", alt: "G2 Winter 2025 Award" },
];

export function G2Badges() {
  return (
    <div className="mb-16 text-center relative">
      {/* Horizontal beam connector */}
      <div className="absolute top-1/2 left-12 right-12 -translate-y-1/2 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.3} />
      </div>

      <h4 className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-6 relative animate-intro-blur">
        Top-rated on G2 | Winter 2025
        {/* Decorative nodes near heading */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <ConnectionNode size="xs" accent />
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <ConnectionNode size="xs" />
        </div>
      </h4>

      <div className="flex flex-wrap justify-center gap-4 relative">
        {/* Beam connecting badges */}
        <div className="absolute top-0 left-[15%] w-[70%] hidden lg:block">
          <SchematicLine direction="horizontal" length="100%" withNode="both" delay={0.4} />
        </div>

        {badges.map((badge, index) => (
          <div
            key={index}
            className="h-20 w-16 bg-white border border-stone-200 shadow-sm rounded-lg flex items-center justify-center relative group animate-intro-blur p-2"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <Image
              src={badge.src}
              alt={badge.alt}
              width={48}
              height={64}
              className="object-contain"
            />

            {/* Corner nodes on hover */}
            <div className="absolute -top-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" />
            </div>
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" accent={index % 2 === 0} />
            </div>

            {/* Connection between badges */}
            {index > 0 && (
              <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 hidden lg:block">
                <ConnectionNode size="xs" filled={index === 2} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
