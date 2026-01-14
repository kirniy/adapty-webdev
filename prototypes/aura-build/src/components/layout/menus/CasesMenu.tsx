"use client";

import Image from "next/image";
import Link from "next/link";

const CASE_STUDIES = [
  {
    name: "Fotorama",
    description: "Photo editing app",
    icon: "/images/case-studies/fotorama.webp",
    href: "/case-studies/fotorama",
  },
  {
    name: "JEFIT",
    description: "Fitness tracking",
    icon: "/images/case-studies/glam-ai.webp",
    href: "/case-studies/jefit",
  },
  {
    name: "Lively",
    description: "Live wallpapers",
    icon: "/images/case-studies/lively.png",
    href: "/case-studies/lively",
  },
  {
    name: "Going Merry",
    description: "Scholarship search",
    icon: "/images/case-studies/going-merry.webp",
    href: "/case-studies/going-merry",
  },
  {
    name: "Shmoody",
    description: "Mental wellness",
    icon: "/images/case-studies/shmoody.webp",
    href: "/case-studies/shmoody",
  },
  {
    name: "Glam AI",
    description: "AI photo editing",
    icon: "/images/case-studies/glam-ai.webp",
    href: "/case-studies/glam-ai",
  },
  {
    name: "Pepapp",
    description: "Period tracker",
    icon: "/images/case-studies/pepapp.webp",
    href: "/case-studies/pepapp",
  },
  {
    name: "Productivity",
    description: "Task management",
    icon: "/images/case-studies/productivity-app.webp",
    href: "/case-studies/productivity",
  },
  {
    name: "Wave",
    description: "Audio editor",
    icon: "/images/case-studies/wave.png",
    href: "/case-studies/wave",
  },
];

export function CasesMenu() {
  return (
    <div className="w-[640px] p-6">
      <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4 px-3">
        Case Studies
      </h4>
      <div className="grid grid-cols-3 gap-2">
        {CASE_STUDIES.map((caseStudy) => (
          <Link
            key={caseStudy.name}
            href={caseStudy.href}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-100 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-sm">
              <Image
                src={caseStudy.icon}
                alt={caseStudy.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium text-stone-900 group-hover:text-stone-700 block truncate">
                {caseStudy.name}
              </span>
              <span className="text-xs text-stone-500 block truncate">
                {caseStudy.description}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-stone-200">
        <Link
          href="/case-studies"
          className="text-sm font-medium text-brand-lime hover:underline px-3"
        >
          View all case studies →
        </Link>
      </div>
    </div>
  );
}
