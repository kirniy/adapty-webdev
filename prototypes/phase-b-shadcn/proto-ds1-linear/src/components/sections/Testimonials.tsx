"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quotes } from "@phosphor-icons/react";
import {
  linearEasing,
  transition,
  staggerContainer,
  cardHover,
} from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Adapty helped us increase our trial-to-paid conversion by 34%. The A/B testing capabilities are incredibly powerful.",
    author: "Sarah Chen",
    role: "Head of Growth",
    company: "Productivity Pro",
    initials: "SC",
  },
  {
    quote:
      "We migrated from RevenueCat and saw immediate improvements in our paywall performance. The no-code builder is a game-changer.",
    author: "Michael Torres",
    role: "CTO",
    company: "FitTrack",
    initials: "MT",
  },
  {
    quote:
      "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions about our pricing.",
    author: "Emma Wilson",
    role: "Product Manager",
    company: "MindfulApp",
    initials: "EW",
  },
  {
    quote:
      "Integration took less than a day. The SDK is well-documented and the support team is incredibly responsive.",
    author: "David Kim",
    role: "Lead Developer",
    company: "PhotoEditor Plus",
    initials: "DK",
  },
  {
    quote:
      "Adapty's refund prevention feature saved us over $50K in the first quarter alone. ROI was immediate.",
    author: "Lisa Zhang",
    role: "CEO",
    company: "LearnLingo",
    initials: "LZ",
  },
];

export function Testimonials() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: linearEasing.dramatic }}
        >
          <h2 className="heading-linear text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            Loved by app developers worldwide
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            See what our customers have to say about Adapty
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
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
                    delay: index * 0.1,
                    ease: linearEasing.dramatic,
                  },
                },
              }}
              whileHover={cardHover}
              transition={transition.spring}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <Card
                className={cn(
                  "h-full",
                  "bg-[var(--bg-primary)] border-[var(--border-subtle)]",
                  "rounded-[var(--card-radius)]",
                  "shadow-[var(--shadow-card)]",
                  "transition-colors duration-[var(--duration-normal)]"
                )}
              >
                <CardContent className="p-6 md:p-8">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  >
                    <Quotes size={32} weight="duotone" className="text-[var(--color-accent)] mb-4" />
                  </motion.div>

                  {/* Quote Text */}
                  <blockquote
                    className={cn(
                      "text-[var(--text-secondary)] mb-6",
                      "leading-relaxed",
                      index === 0 ? "text-lg md:text-xl" : "text-base"
                    )}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={transition.snappy}
                    >
                      <Avatar className="w-10 h-10 bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                        <AvatarFallback className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--bg-elevated)]">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <div className="text-sm font-medium text-[var(--text-primary)]">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-[var(--text-muted)]">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
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

export default Testimonials;
