"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  staggerItem,
  scrollReveal,
  transition,
  viewportOnce,
} from "@/lib/animations";

const trustedByLogos = [
  { name: "Feeld", src: "/logos/trusted-by/feeld.svg" },
  { name: "Bumble", src: "/logos/trusted-by/bumble.svg" },
  { name: "WeeWoo", src: "/logos/trusted-by/weewoo.svg" },
  { name: "AppNation", src: "/logos/trusted-by/appnation.webp" },
  { name: "Almus", src: "/logos/trusted-by/almus.svg" },
  { name: "Impala Studios", src: "/logos/trusted-by/impala-studios.svg" },
  { name: "HubX", src: "/logos/trusted-by/hubx.svg" },
];

export function TrustedBy() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="py-16 border-y border-[var(--border-subtle)]"
      initial="offscreen"
      animate={isInView ? "onscreen" : "offscreen"}
      variants={scrollReveal}
    >
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Label with fade */}
        <motion.p
          className="text-center text-sm text-[var(--text-muted)] mb-10 tracking-[var(--letter-spacing-body)]"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Trusted by{" "}
          <span className="text-[var(--text-secondary)]">15,000+</span> apps and
          the world&apos;s largest app publishers
        </motion.p>

        {/* Logo Grid with stagger */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-8 md:gap-12 items-center justify-items-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {trustedByLogos.map((company, index) => (
            <motion.div
              key={company.name}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: {
                  opacity: 0.5,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.23, 1, 0.32, 1],
                  },
                },
              }}
              whileHover={{
                opacity: 1,
                scale: 1.1,
                filter: "grayscale(0)",
                transition: transition.snappy,
              }}
              className={cn(
                "flex items-center justify-center",
                "grayscale",
                "cursor-default"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={company.src}
                alt={company.name}
                className="h-6 md:h-8 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default TrustedBy;
