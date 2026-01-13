"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "Adapty helped us increase our subscription revenue by 40% in just 3 months. The A/B testing capabilities are incredible.",
    author: "Sarah Chen",
    role: "Head of Growth",
    company: "Fitness App Pro",
    avatar: "/avatars/sarah.jpg",
  },
  {
    quote:
      "The SDK integration was seamless. We went from zero to production in under a week. Best decision we made for our monetization.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "MindfulMe",
    avatar: "/avatars/marcus.jpg",
  },
  {
    quote:
      "Finally, a subscription platform that actually understands mobile apps. The analytics alone are worth it.",
    author: "Elena Rodriguez",
    role: "Product Manager",
    company: "PhotoEdit Pro",
    avatar: "/avatars/elena.jpg",
  },
  {
    quote:
      "We switched from a competitor and saw immediate improvements. The support team is incredibly responsive.",
    author: "David Kim",
    role: "Founder",
    company: "Language Learn",
    avatar: "/avatars/david.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-secondary)]">
      {/* DS2 ATTIO: Section number */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-16">
        <span className="section-number">[06]</span>
      </div>

      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section header - DS2 editorial style */}
        <div className="text-center mb-16">
          <h2 className="headline-attio text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
            Loved by{" "}
            <span className="text-serif italic text-[var(--color-accent)]">
              thousands
            </span>
          </h2>
          <p className="body-attio text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Join 15,000+ apps that trust Adapty for their subscription infrastructure
          </p>
        </div>

        {/* Testimonials carousel - DS2 styling */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  className={cn(
                    "h-full",
                    "bg-[var(--bg-primary)]",
                    "border border-[var(--border-subtle)]",
                    "rounded-[var(--card-radius)]",
                    "card-cinematic"
                  )}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote icon - DS2 accent */}
                    <Quotes
                      size={32}
                      weight="duotone"
                      className="text-[var(--color-accent)] opacity-50 mb-4"
                    />

                    {/* Quote text */}
                    <blockquote className="body-attio text-[var(--text-secondary)] mb-6 flex-1">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                      <div className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center">
                        <span className="text-sm font-medium text-[var(--text-tertiary)]">
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-[var(--text-primary)] text-sm">
                          {testimonial.author}
                        </div>
                        <div className="text-xs text-[var(--text-muted)]">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel navigation - DS2 ghost style */}
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious
              className={cn(
                "relative static translate-y-0",
                "bg-transparent border-[var(--border-default)]",
                "hover:bg-[var(--bg-tertiary)]",
                "text-[var(--text-secondary)]"
              )}
            />
            <CarouselNext
              className={cn(
                "relative static translate-y-0",
                "bg-transparent border-[var(--border-default)]",
                "hover:bg-[var(--bg-tertiary)]",
                "text-[var(--text-secondary)]"
              )}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
