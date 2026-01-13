"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, ChartLine, Layout } from "@phosphor-icons/react";
import {
  linearEasing,
  transition,
  cardHover,
  staggerContainer,
} from "@/lib/animations";

const roleCards = [
  {
    icon: Code,
    title: "For Developers",
    description:
      "Integrate subscriptions in minutes with our SDK. Handle receipt validation, manage entitlements, and sync purchase data automatically.",
    features: ["Native SDKs", "Server-side API", "Webhook events"],
  },
  {
    icon: ChartLine,
    title: "For Marketers",
    description:
      "Design paywalls, run A/B tests, and optimize conversions without engineering help.",
    features: ["No-code builder", "A/B testing", "Audience targeting"],
  },
  {
    icon: Layout,
    title: "For App Owners",
    description:
      "Get real-time visibility into your subscription business.",
    features: ["Revenue analytics", "Cohort analysis", "Custom dashboards"],
  },
];

export function RoleCards() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-[var(--section-padding)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: linearEasing.dramatic }}
        >
          <h2
            className={cn(
              "heading-linear",
              "text-3xl sm:text-4xl lg:text-5xl",
              "text-[var(--text-primary)] mb-4"
            )}
          >
            Help your team run the mobile subscription business.{" "}
            <span className="text-[var(--text-secondary)]">
              Faster and cheaper.
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {roleCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: linearEasing.dramatic,
                  },
                },
              }}
              whileHover={cardHover}
              transition={transition.spring}
            >
              <Card
                className={cn(
                  "h-full",
                  "bg-[var(--bg-tertiary)]",
                  "border border-[var(--border-subtle)]",
                  "rounded-[var(--card-radius)]",
                  "overflow-hidden",
                  "group"
                )}
              >
                <CardHeader className="pb-4">
                  {/* Icon with glow on hover */}
                  <motion.div
                    className={cn(
                      "w-12 h-12 rounded-xl mb-4",
                      "bg-[var(--color-accent-light)]",
                      "flex items-center justify-center"
                    )}
                    whileHover={{
                      boxShadow: "0 0 25px rgba(94, 106, 210, 0.5)",
                      scale: 1.05,
                    }}
                    transition={transition.snappy}
                  >
                    <card.icon size={24} weight="duotone" className="text-[var(--color-accent)]" />
                  </motion.div>

                  <CardTitle className="text-xl text-[var(--text-primary)] tracking-[var(--letter-spacing-tight)]">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    {card.description}
                  </CardDescription>

                  {/* Feature Tags with stagger */}
                  <div className="flex flex-wrap gap-2">
                    {card.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        className={cn(
                          "inline-flex px-3 py-1 text-xs rounded-full",
                          "border border-[var(--border)]",
                          "bg-[var(--bg-secondary)]",
                          "text-[var(--text-muted)]"
                        )}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{
                          delay: 0.4 + index * 0.15 + featureIndex * 0.05,
                          duration: 0.3,
                        }}
                        whileHover={{
                          borderColor: "rgba(94, 106, 210, 0.3)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default RoleCards;
