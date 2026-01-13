"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quotes } from "@phosphor-icons/react";

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
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 tracking-[var(--letter-spacing-heading)]">
            Loved by app developers worldwide
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            See what our customers have to say about Adapty
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={cn(
                "bg-[var(--bg-primary)] border-[var(--border-subtle)]",
                "rounded-[var(--card-radius)]",
                "shadow-[var(--shadow-card)]",
                "hover:border-[var(--border-default)]",
                "transition-all duration-[var(--duration-normal)]",
                index === 0 && "lg:col-span-2"
              )}
            >
              <CardContent className="p-6 md:p-8">
                {/* Quote Icon */}
                <Quotes size={32} weight="duotone" className="text-[var(--color-accent)] opacity-50 mb-4" />

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
                  <Avatar className="w-10 h-10 bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <AvatarFallback className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--bg-elevated)]">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
