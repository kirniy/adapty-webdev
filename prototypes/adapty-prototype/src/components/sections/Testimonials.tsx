"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";
import { cn } from "~/lib/utils";

interface TestimonialsProps {
  variant?: "carousel" | "single" | "grid";
}

export function Testimonials({ variant = "carousel" }: TestimonialsProps) {
  const { testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (variant !== "carousel") return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.items.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials.items.length, variant]);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.items.length) % testimonials.items.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.items.length);
  };

  const active = testimonials.items[activeIndex];

  if (variant === "single" && testimonials.items[0]) {
    const single = testimonials.items[0];
    return (
      <Section className="bg-[var(--bg-secondary)]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto mb-6 h-12 w-12 text-[var(--color-primary)] opacity-20" />
            <p className="mb-8 text-xl font-medium text-[var(--text-primary)] md:text-2xl">
              &ldquo;{single.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <Image
                src={single.image}
                alt={single.name}
                width={56}
                height={56}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="font-semibold text-[var(--text-primary)]">
                  {single.name}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {single.position}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  if (!active) return null;

  return (
    <Section className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            <span className="text-[var(--text-primary)]">{testimonials.headline.primary}</span>
            <br className="hidden sm:block" />
            <span className="text-[var(--text-muted)]">{testimonials.headline.secondary}</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-4xl">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-primary)] shadow-[var(--shadow-md)] transition-all hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-lg)] md:-left-16"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5 text-[var(--text-primary)]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-primary)] shadow-[var(--shadow-md)] transition-all hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-lg)] md:-right-16"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5 text-[var(--text-primary)]" />
          </button>

          {/* Card */}
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-8 shadow-[var(--shadow-lg)] md:p-12">
            <Quote className="absolute right-8 top-8 h-24 w-24 text-[var(--color-primary)] opacity-5" />

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)]">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote */}
              <div>
                <p className="mb-8 text-lg font-medium leading-relaxed text-[var(--text-primary)] md:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">
                      {active.name}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {active.position}
                    </p>
                  </div>
                  <div className="ml-auto rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] p-2">
                    <Image
                      src={active.logo}
                      alt={active.name}
                      width={100}
                      height={32}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === activeIndex
                      ? "w-8 bg-[var(--color-primary)]"
                      : "w-2 bg-[var(--border-default)] hover:bg-[var(--border-strong)]"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
