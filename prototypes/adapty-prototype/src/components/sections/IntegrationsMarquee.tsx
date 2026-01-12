"use client";

import Image from "next/image";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";
import { useEffect, useRef, useState } from "react";

export function IntegrationsMarquee() {
  const { integrations } = content;
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Double the items for seamless loop
  const items = [...integrations.items, ...integrations.items];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += speed;
        if (scrollPosition >= scrollElement.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollElement.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <Section className="overflow-hidden bg-[var(--bg-primary)] py-12">
      <div className="mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
          Integrations
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
          {integrations.headline}
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-12 overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {items.map((name, index) => (
          <div
            key={`${name}-${index}`}
            className="flex h-12 w-32 shrink-0 items-center justify-center opacity-50 transition-opacity hover:opacity-100 md:w-40"
          >
            <Image
              src={`/integrations/${name}.svg`}
              alt={name}
              width={160}
              height={48}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
