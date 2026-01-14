"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

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
      <div className="relative mb-12">
        <h2 className="text-3xl font-semibold tracking-tight animate-intro-blur">
          Trusted by thousands of scaling apps
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {caseStudies.map((study, index) => (
          <article
            key={study.title}
            className="group cursor-pointer relative animate-intro-blur"
            style={{ animationDelay: `${index * 150}ms` }}
          >
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
    </section>
  );
}
