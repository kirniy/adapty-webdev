"use client";

import Image from "next/image";

const badges = [
  { src: "/images/g2-badges/g2-winter-2025-1.svg", alt: "G2 Best Results Winter 2025" },
  { src: "/images/g2-badges/g2-winter-2025-2.svg", alt: "G2 High Performer Winter 2025" },
  { src: "/images/g2-badges/g2-winter-2025-3.svg", alt: "G2 Best Usability Winter 2025" },
  { src: "/images/g2-badges/g2-winter-2025-4.svg", alt: "G2 Best Relationship Winter 2025" },
  { src: "/images/g2-badges/g2-winter-2025-5.svg", alt: "G2 Most Implementable Winter 2025" },
];

export function G2Badges() {
  return (
    <div className="text-center mb-16">
      <p className="text-sm font-medium text-stone-500 uppercase tracking-widest mb-8 animate-intro-blur">
        Top-rated on G2 | Winter 2025
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="relative h-24 w-20 lg:h-28 lg:w-24 animate-intro-blur transition-transform hover:scale-105"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <Image
              src={badge.src}
              alt={badge.alt}
              fill
              className="object-contain drop-shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
