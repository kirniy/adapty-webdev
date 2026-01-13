"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendUp, TrendDown, Sparkle } from "@phosphor-icons/react";

const caseStudies = [
  {
    category: "Productivity",
    metric: "+50%",
    metricType: "increase",
    title: "How pricing tests unlocked app's potential",
    company: "Productivity App",
  },
  {
    category: "Photo Editing",
    metric: "+30%",
    metricType: "increase",
    title: "How to boost revenue with the right experiments",
    company: "Text on Pic",
  },
  {
    category: "Travel",
    metric: "+102%",
    metricType: "increase",
    title: "New onboarding and pricing strategy doubled revenue",
    company: "Trip Planning",
  },
  {
    category: "Finance",
    metric: "5x",
    metricType: "multiply",
    title: "How to scale subscription revenue with Paywall Builder",
    company: "Going Merry",
  },
  {
    category: "Health",
    metric: "$2M",
    metricType: "revenue",
    title: "How to grow from a free app to $2M ARR",
    company: "Shmoody",
  },
  {
    category: "Entertainment",
    metric: "-83%",
    metricType: "decrease",
    title: "Saved 82% of potentially lost revenue",
    company: "Lively",
  },
  {
    category: "AI Photo",
    metric: "108%",
    metricType: "increase",
    title: "How to scale to $1.2M ARR in 3 months",
    company: "Glam AI",
  },
  {
    category: "Health",
    metric: "400%",
    metricType: "increase",
    title: "How to make Adapty free with Refund Saver",
    company: "Pepapp",
  },
  {
    category: "Photo",
    metric: "-40%",
    metricType: "decrease",
    title: "How to decrease the refund rate with Adapty",
    company: "Fotorama",
  },
];

function getMetricIcon(type: string) {
  switch (type) {
    case "increase":
    case "multiply":
    case "revenue":
      return TrendUp;
    case "decrease":
      return TrendDown;
    default:
      return Sparkle;
  }
}

function getMetricColor(type: string) {
  switch (type) {
    case "increase":
    case "multiply":
    case "revenue":
      return "text-emerald-400";
    case "decrease":
      return "text-blue-400";
    default:
      return "text-[var(--color-accent)]";
  }
}

export function CaseStudies() {
  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 tracking-[var(--letter-spacing-heading)]">
            Trusted by thousands of scaling apps
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Real results from real apps using Adapty
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => {
            const MetricIcon = getMetricIcon(study.metricType);
            const metricColor = getMetricColor(study.metricType);

            return (
              <Card
                key={index}
                className={cn(
                  "group cursor-pointer",
                  "bg-[var(--bg-secondary)] border-[var(--border-subtle)]",
                  "rounded-[var(--card-radius)]",
                  "hover:border-[var(--border-default)]",
                  "hover:shadow-[var(--shadow-card)]",
                  "transition-all duration-[var(--duration-normal)]"
                )}
              >
                <CardContent className="p-6">
                  {/* Category Badge */}
                  <Badge
                    variant="secondary"
                    className={cn(
                      "mb-4 text-xs",
                      "bg-[var(--bg-tertiary)] text-[var(--text-muted)]",
                      "border-none"
                    )}
                  >
                    {study.category}
                  </Badge>

                  {/* Metric */}
                  <div className="flex items-center gap-2 mb-3">
                    <MetricIcon size={20} weight="duotone" className={metricColor} />
                    <span
                      className={cn(
                        "text-2xl font-bold tracking-tight",
                        metricColor
                      )}
                    >
                      {study.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-medium text-[var(--text-primary)] mb-2 leading-snug">
                    {study.title}
                  </h3>

                  {/* Company with Arrow */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border-subtle)]">
                    <span className="text-sm text-[var(--text-muted)]">
                      {study.company}
                    </span>
                    <ArrowUpRight
                      className={cn(
                        "w-4 h-4 text-[var(--text-muted)]",
                        "group-hover:text-[var(--color-accent)]",
                        "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        "transition-all duration-[var(--duration-fast)]"
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
