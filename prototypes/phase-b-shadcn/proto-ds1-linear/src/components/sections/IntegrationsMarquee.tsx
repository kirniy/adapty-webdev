"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  linearEasing,
  transition,
  staggerContainer,
} from "@/lib/animations";

const integrations = [
  { name: "Adjust", src: "/integrations/adjust.svg" },
  { name: "Airbridge", src: "/integrations/airbridge.svg" },
  { name: "Airship", src: "/integrations/airship.svg" },
  { name: "Amazon S3", src: "/integrations/amazon-s3.svg" },
  { name: "Amplitude", src: "/integrations/amplitude.svg" },
  { name: "Apple Ads", src: "/integrations/apple-ads.svg" },
  { name: "AppMetrica", src: "/integrations/appmetrica.svg" },
  { name: "AppsFlyer", src: "/integrations/appsflyer.svg" },
  { name: "Asapty", src: "/integrations/asapty.svg" },
  { name: "Branch", src: "/integrations/branch.svg" },
  { name: "Braze", src: "/integrations/braze.svg" },
  { name: "Facebook", src: "/integrations/facebook.svg" },
  { name: "Firebase GA", src: "/integrations/firebase-ga.svg" },
  { name: "Firebase", src: "/integrations/firebase.svg" },
  { name: "Google Cloud", src: "/integrations/google-cloud-storage.svg" },
  { name: "Mixpanel", src: "/integrations/mixpanel.svg" },
  { name: "OneSignal", src: "/integrations/onesignal.svg" },
  { name: "PostHog", src: "/integrations/posthog.svg" },
  { name: "Pushwoosh", src: "/integrations/pushwoosh.svg" },
  { name: "Segment", src: "/integrations/segment.svg" },
  { name: "Singular", src: "/integrations/singular.svg" },
  { name: "Slack", src: "/integrations/slack.svg" },
  { name: "Split", src: "/integrations/split.svg" },
  { name: "Stripe", src: "/integrations/stripe.svg" },
  { name: "Tenjin", src: "/integrations/tenjin.svg" },
  { name: "TikTok", src: "/integrations/tiktok.svg" },
  { name: "Webhook", src: "/integrations/webhook.svg" },
];

function IntegrationLogo({ name, src, index }: { name: string; src: string; index: number }) {
  return (
    <motion.div
      className={cn(
        "flex-shrink-0 flex items-center justify-center",
        "w-16 h-16 md:w-20 md:h-20",
        "rounded-xl",
        "bg-[var(--bg-secondary)] border border-[var(--border-subtle)]",
        "transition-all duration-[var(--duration-normal)]",
        "hover:border-[var(--color-accent)]/40 hover:bg-[var(--bg-tertiary)]",
        "group cursor-default"
      )}
      whileHover={{
        scale: 1.08,
        y: -4,
        boxShadow: "0 8px 30px rgba(94, 106, 210, 0.2), 0 0 0 1px rgba(94, 106, 210, 0.3)",
      }}
      transition={transition.spring}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
      />
    </motion.div>
  );
}

export function IntegrationsMarquee() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split integrations into two rows
  const row1 = integrations.slice(0, Math.ceil(integrations.length / 2));
  const row2 = integrations.slice(Math.ceil(integrations.length / 2));

  return (
    <section ref={ref} className="py-24 bg-[var(--bg-primary)] overflow-hidden">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: linearEasing.dramatic }}
        >
          <motion.span
            className={cn(
              "inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full",
              "border border-[var(--color-accent)]/30",
              "bg-[var(--color-accent)]/10",
              "text-[var(--color-accent)] text-sm font-medium"
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            22+ Integrations
          </motion.span>
          <h2 className="heading-linear text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            Connect with your favorite tools
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Send subscription data to analytics, attribution, and marketing platforms
          </p>
        </motion.div>
      </div>

      {/* Marquee Container - Full width for seamless scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="space-y-4 md:space-y-6"
      >
        {/* Row 1 - Scroll left */}
        <div className="relative">
          {/* Gradient masks for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 md:gap-6 animate-marquee-left">
            {/* Double the logos for seamless loop */}
            {[...row1, ...row1].map((integration, index) => (
              <IntegrationLogo
                key={`${integration.name}-${index}`}
                name={integration.name}
                src={integration.src}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll right (reverse) */}
        <div className="relative">
          {/* Gradient masks for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 md:gap-6 animate-marquee-right">
            {/* Double the logos for seamless loop */}
            {[...row2, ...row2].map((integration, index) => (
              <IntegrationLogo
                key={`${integration.name}-${index}`}
                name={integration.name}
                src={integration.src}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a
          href="/integrations"
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium",
            "text-[var(--color-accent)] hover:text-[var(--text-primary)]",
            "transition-colors duration-[var(--duration-fast)]"
          )}
        >
          View all integrations
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}

export default IntegrationsMarquee;
