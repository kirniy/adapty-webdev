"use client";

import Image from "next/image";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";
import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";
import { SoftCornerGradient } from "~/components/textures/SoftCornerGradient";
import { MoireInterference } from "~/components/textures/MoireInterference";
import { InfiniteFloor } from "~/components/textures/InfiniteFloor";

interface IntegrationsMarqueeProps {
  ds?: "ds1" | "ds2" | "ds3" | "ds4" | "ds5";
}

export function IntegrationsMarquee({ ds }: IntegrationsMarqueeProps) {
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
    <Section className="bg-[var(--bg-primary)] py-12 relative overflow-hidden">
      {/* DS2: Soft Corner Gradient - very subtle */}
      {ds === "ds2" && <SoftCornerGradient opacity={0.2} />}
      {/* DS3: Moiré - very subtle */}
      {ds === "ds3" && <MoireInterference opacity={0.05} />}

      <div className="relative z-10">
        <div className="mb-8 text-center">
          <p className={cn(
            "text-sm font-medium uppercase tracking-wider",
            ds === "ds1" ? "text-[var(--text-muted)] opacity-80" : "text-[var(--text-muted)]"
          )}>
            Integrations
          </p>
          <h2 className={cn(
            "mt-2 text-2xl font-semibold md:text-3xl",
            ds === "ds1" ? "heading-metallic" : "text-[var(--text-primary)]"
          )}>
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
      </div>
    </Section>
  );
}
