"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendUp } from "@phosphor-icons/react";
import Image from "next/image";

const caseStudies = [
  {
    company: "Bumble",
    logo: "/logos/trusted-by/bumble.svg",
    stat: "+47%",
    metric: "Trial conversion",
    description:
      "How Bumble increased trial-to-paid conversion using Adapty's paywall experimentation.",
    tags: ["Social", "A/B Testing"],
  },
  {
    company: "Feeld",
    logo: "/logos/trusted-by/feeld.svg",
    stat: "+32%",
    metric: "Revenue growth",
    description:
      "Feeld's journey to optimizing their subscription pricing across 150+ countries.",
    tags: ["Dating", "Pricing"],
  },
  {
    company: "HubX",
    logo: "/logos/trusted-by/hubx.svg",
    stat: "-28%",
    metric: "Churn reduction",
    description:
      "How HubX reduced subscription churn with targeted win-back campaigns.",
    tags: ["Productivity", "Retention"],
  },
];

export function CaseStudies() {
  return (
    <section className="relative py-20 md:py-28">
      {/* DS2 ATTIO: Section number */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-16">
        <span className="section-number">[07]</span>
      </div>

      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section header - DS2 editorial style */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="headline-attio text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
              Success{" "}
              <span className="text-serif italic text-[var(--color-accent)]">
                stories
              </span>
            </h2>
            <p className="body-attio text-lg text-[var(--text-secondary)] max-w-xl">
              See how leading apps transformed their subscription business with Adapty
            </p>
          </div>
          <Button
            variant="outline"
            className={cn(
              "btn-ghost mt-6 md:mt-0",
              "gap-2"
            )}
          >
            View all case studies
            <ArrowRight size={16} weight="bold" />
          </Button>
        </div>

        {/* Case studies grid - DS2 cinematic cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className={cn(
                "card-cinematic group cursor-pointer",
                "bg-[var(--bg-primary)] border-[var(--border-subtle)]",
                "rounded-[var(--card-radius)]",
                "overflow-hidden"
              )}
            >
              {/* Card header with logo */}
              <div className="p-6 border-b border-[var(--border-subtle)]">
                <div className="flex items-center justify-between">
                  <div className="relative h-6 w-20">
                    <Image
                      src={study.logo}
                      alt={study.company}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <ArrowRight
                    size={20}
                    weight="bold"
                    className="text-[var(--text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-[var(--duration-fast)]"
                  />
                </div>
              </div>

              <CardContent className="p-6">
                {/* Stat highlight - DS2 accent */}
                <div className="flex items-center gap-2 mb-4">
                  <TrendUp
                    size={20}
                    weight="duotone"
                    className="text-[var(--color-accent)]"
                  />
                  <span className="text-3xl font-semibold text-[var(--text-primary)] tracking-[var(--letter-spacing-tight)]">
                    {study.stat}
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">
                    {study.metric}
                  </span>
                </div>

                {/* Description */}
                <p className="body-attio text-[var(--text-secondary)] mb-6">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={cn(
                        "px-2 py-1 text-xs",
                        "bg-[var(--bg-tertiary)]",
                        "text-[var(--text-tertiary)]",
                        "rounded-[var(--radius-sm)]"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* DS2 ATTIO: Dotted separator at bottom */}
      <div className="mt-20 mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <div className="dotted-separator" />
      </div>
    </section>
  );
}

export default CaseStudies;
