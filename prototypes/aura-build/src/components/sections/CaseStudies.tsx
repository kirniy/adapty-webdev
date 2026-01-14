"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

const caseStudies = [
  {
    title: "How Glam AI pricing tests unlocked potential",
    metric: "+50% Revenue",
    category: "Photo & Video",
    logo: "/images/case-studies/logo-glam-ai.png",
    bgColor: "bg-gradient-to-br from-pink-100 to-purple-100",
  },
  {
    title: "Fotorama's boost with A/B experiments",
    metric: "+30% Revenue",
    category: "Photo & Video",
    logo: "/images/case-studies/logo-fotorama.png",
    bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100",
  },
  {
    title: "Going Merry scaling with Paywall Builder",
    metric: "5x Growth",
    category: "Education",
    logo: "/images/case-studies/logo-going-merry.png",
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-100",
  },
];

export function CaseStudies() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-24 relative">
      {/* ══════════════════════════════════════════════════════════════
         SCHEMATIC DECORATIONS
         ══════════════════════════════════════════════════════════════ */}

      {/* Left vertical rail */}
      <div className="absolute left-0 top-12 bottom-12 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.2} />
      </div>

      {/* Right vertical rail */}
      <div className="absolute right-0 top-12 bottom-12 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.3} />
      </div>

      {/* Top beam connector */}
      <div className="absolute top-6 left-12 right-12 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
      </div>

      <div className="relative mb-12">
        <h2 className="text-3xl font-semibold tracking-tight animate-intro-blur">
          Trusted by thousands of scaling apps
        </h2>

        {/* Decorative nodes */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <ConnectionNode size="sm" accent />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {/* Horizontal beam connecting cards */}
        <div className="absolute top-1/2 left-[10%] w-[80%] hidden lg:block">
          <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.8} />
        </div>

        {/* Grid intersection nodes */}
        <div className="absolute -top-3 left-[33%] hidden lg:block">
          <ConnectionNode size="sm" />
        </div>
        <div className="absolute -top-3 left-[66%] hidden lg:block">
          <ConnectionNode size="sm" accent />
        </div>

        {caseStudies.map((study, index) => (
          <article
            key={study.title}
            className="group cursor-pointer relative animate-intro-blur"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Corner nodes on hover */}
            <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <ConnectionNode size="xs" />
            </div>
            <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <ConnectionNode size="xs" />
            </div>

            {/* Connection nodes between cards */}
            {index > 0 && (
              <div className="absolute -left-3 top-1/3 hidden lg:block">
                <ConnectionNode size="sm" filled={index === 1} />
              </div>
            )}
            {index < 2 && (
              <div className="absolute -right-3 top-1/3 hidden lg:block">
                <ConnectionNode size="sm" accent={index === 0} />
              </div>
            )}

            {/* Image Card - Full bleed with logo */}
            <div className={`aspect-[4/3] ${study.bgColor} rounded-xl mb-4 overflow-hidden relative shadow-sm border border-stone-100 group-hover:shadow-lg transition-shadow duration-300`}>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-32 h-32 drop-shadow-md">
                  <Image
                    src={study.logo}
                    alt={study.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />

              {/* Corner beams on image */}
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ConnectionNode size="xs" accent />
              </div>
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ConnectionNode size="xs" accent filled />
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="lime" className="text-xs">
                {study.metric}
              </Badge>
              <span className="text-xs text-stone-500">{study.category}</span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg leading-tight group-hover:underline">
              {study.title}
            </h3>
          </article>
        ))}
      </div>

      {/* Bottom beam connector */}
      <div className="absolute bottom-6 left-12 right-12 hidden lg:block">
        <SchematicLine direction="horizontal" length="100%" withNode="both" delay={1} />
      </div>
    </section>
  );
}
