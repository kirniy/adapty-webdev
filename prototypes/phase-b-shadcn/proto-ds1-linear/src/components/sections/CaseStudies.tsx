"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendUp, TrendDown, Sparkle } from "@phosphor-icons/react";
import {
  linearEasing,
  transition,
  staggerContainer,
  cardHover,
} from "@/lib/animations";

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: linearEasing.dramatic }}
        >
          <h2 className="heading-linear text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            Trusted by thousands of scaling apps
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Real results from real apps using Adapty
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {caseStudies.map((study, index) => {
            const MetricIcon = getMetricIcon(study.metricType);
            const metricColor = getMetricColor(study.metricType);

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: linearEasing.dramatic,
                    },
                  },
                }}
                whileHover={cardHover}
                transition={transition.spring}
              >
                <Card
                  className={cn(
                    "group cursor-pointer h-full",
                    "bg-[var(--bg-secondary)] border-[var(--border-subtle)]",
                    "rounded-[var(--card-radius)]",
                    "transition-colors duration-[var(--duration-normal)]"
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
                    <motion.div
                      className="flex items-center gap-2 mb-3"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                      transition={{ delay: 0.3 + index * 0.08, duration: 0.3 }}
                    >
                      <MetricIcon size={20} weight="duotone" className={metricColor} />
                      <span
                        className={cn(
                          "text-2xl font-bold tracking-tight",
                          metricColor
                        )}
                      >
                        {study.metric}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-base font-medium text-[var(--text-primary)] mb-2 leading-snug">
                      {study.title}
                    </h3>

                    {/* Company with Arrow */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border-subtle)]">
                      <span className="text-sm text-[var(--text-muted)]">
                        {study.company}
                      </span>
                      <motion.div
                        whileHover={{ x: 2, y: -2 }}
                        transition={transition.snappy}
                      >
                        <ArrowUpRight
                          className={cn(
                            "w-4 h-4 text-[var(--text-muted)]",
                            "group-hover:text-[var(--color-accent)]",
                            "transition-colors duration-[var(--duration-fast)]"
                          )}
                        />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default CaseStudies;
