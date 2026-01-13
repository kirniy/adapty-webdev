"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  scrollReveal,
  scrollRevealScale,
  staggerContainer,
  staggerItem,
  transition,
  linearEasing,
  cardHover,
} from "@/lib/animations";

interface FeatureMetric {
  label: string;
  value: string;
  positive?: boolean;
}

interface FeatureItem {
  text: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features?: FeatureItem[];
  metrics?: FeatureMetric[];
  reversed?: boolean;
  visual?: React.ReactNode;
  className?: string;
}

export function FeatureSection({
  title,
  subtitle,
  features,
  metrics,
  reversed = false,
  visual,
  className,
}: FeatureSectionProps) {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-[var(--section-padding)]",
        "border-b border-[var(--border-subtle)]",
        className
      )}
    >
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <div
          className={cn(
            "grid md:grid-cols-2 gap-12 lg:gap-20 items-center",
            reversed && "md:[&>*:first-child]:order-2"
          )}
        >
          {/* Content Side */}
          <motion.div
            className="flex flex-col"
            initial="offscreen"
            animate={isInView ? "onscreen" : "offscreen"}
            variants={{
              offscreen: { opacity: 0, x: reversed ? 50 : -50 },
              onscreen: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  ease: linearEasing.dramatic,
                },
              },
            }}
          >
            <motion.h2
              className={cn(
                "heading-linear",
                "text-3xl sm:text-4xl lg:text-5xl",
                "text-[var(--text-primary)] mb-4"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: linearEasing.dramatic,
                delay: 0.1,
              }}
            >
              {title}
            </motion.h2>

            <motion.p
              className={cn(
                "text-lg text-[var(--text-secondary)]",
                "leading-relaxed mb-8",
                "tracking-[var(--letter-spacing-body)]"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: linearEasing.dramatic,
                delay: 0.2,
              }}
            >
              {subtitle}
            </motion.p>

            {/* Feature List with stagger */}
            {features && features.length > 0 && (
              <motion.ul
                className="space-y-3 mb-8"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-[var(--text-secondary)]"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.4,
                          delay: 0.3 + index * 0.1,
                          ease: linearEasing.snappy,
                        },
                      },
                    }}
                  >
                    <motion.span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        delay: 0.4 + index * 0.1,
                      }}
                    />
                    <span>{feature.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {/* Metrics with stagger */}
            {metrics && metrics.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          delay: 0.4 + index * 0.1,
                          ease: linearEasing.spring,
                        },
                      },
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="outline"
                      className={cn(
                        "px-4 py-2 text-base font-semibold",
                        "border-[var(--border)]",
                        "bg-[var(--bg-secondary)]",
                        metric.positive
                          ? "text-[var(--color-success)]"
                          : "text-[var(--text-primary)]"
                      )}
                    >
                      {metric.value}
                      <span className="ml-2 text-sm font-normal text-[var(--text-muted)]">
                        {metric.label}
                      </span>
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Visual Side with parallax-like reveal */}
          <motion.div
            className="relative"
            initial="offscreen"
            animate={isInView ? "onscreen" : "offscreen"}
            variants={{
              offscreen: {
                opacity: 0,
                x: reversed ? -50 : 50,
                scale: 0.95,
              },
              onscreen: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: linearEasing.dramatic,
                  delay: 0.2,
                },
              },
            }}
          >
            {visual || (
              <motion.div
                whileHover={cardHover}
                transition={transition.spring}
              >
                <Card
                  className={cn(
                    "card-linear",
                    "bg-[var(--bg-tertiary)]",
                    "border border-[var(--border-subtle)]",
                    "overflow-hidden"
                  )}
                >
                  <CardContent className="p-0">
                    {/* Placeholder visual with shimmer effect */}
                    <div className="aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                      <div
                        className="w-full h-full"
                        style={{
                          background: `
                            linear-gradient(135deg,
                              var(--bg-tertiary) 0%,
                              var(--bg-elevated) 50%,
                              var(--bg-tertiary) 100%
                            )
                          `,
                        }}
                      />
                      {/* Shimmer overlay */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                        }}
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
