"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Copy, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";
import { cn } from "~/lib/utils";
import { SoftCornerGradient } from "~/components/textures/SoftCornerGradient";
import { MoireInterference } from "~/components/textures/MoireInterference";
import { InfiniteFloor } from "~/components/textures/InfiniteFloor";

type Tab = "swift" | "kotlin" | "flutter" | "react-native";

interface SDKCodeSnippetProps {
  ds?: "ds1" | "ds2" | "ds3" | "ds4" | "ds5";
}

export function SDKCodeSnippet({ ds }: SDKCodeSnippetProps) {
  const { sdk } = content;
  const [activeTab, setActiveTab] = useState<Tab>("swift");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(sdk.codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* DS2: Soft Corner Gradient */}
      {ds === "ds2" && <SoftCornerGradient opacity={0.3} />}
      {/* DS3: Moiré */}
      {ds === "ds3" && <MoireInterference opacity={0.05} />}
      {/* DS4: Floor */}
      {ds === "ds4" && <div className="absolute inset-0 opacity-10 pointer-events-none"><InfiniteFloor /></div>}

      <Section className="relative z-10">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className={cn(
                "mb-6 text-3xl font-bold tracking-tight md:text-4xl",
                ds === "ds1" && "heading-metallic"
              )}>
                <span className={ds === "ds1" ? "" : "text-[var(--text-primary)]"}>{sdk.headline.primary}</span>
                <br />
                <span className={ds === "ds1" ? "opacity-60" : "text-[var(--text-muted)]"}>{sdk.headline.secondary}</span>
              </h2>
              <p className="mb-8 text-lg">
                <span className="text-[var(--text-primary)]">{sdk.subheadline.primary}</span>
                <span className="text-[var(--text-muted)]"> {sdk.subheadline.secondary}</span>
              </p>
              <Link
                href={sdk.cta.href}
                className="inline-flex items-center gap-2 font-medium text-[var(--color-primary)] transition-all hover:gap-3"
              >
                {sdk.cta.text}
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Testimonial */}
              <div className={cn(
                "mt-10 rounded-[var(--card-radius)] p-6",
                ds === "ds1"
                  ? "card-glass"
                  : "border border-[var(--border-subtle)] bg-[var(--bg-primary)]"
              )}>
                <Image
                  src={sdk.testimonial.logo}
                  alt="Company logo"
                  width={120}
                  height={32}
                  className="mb-4 h-6 w-auto object-contain"
                />
                <p className="mb-4 italic text-[var(--text-secondary)]">
                  &ldquo;{sdk.testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={sdk.testimonial.author.avatar}
                    alt={sdk.testimonial.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {sdk.testimonial.author.name}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {sdk.testimonial.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Editor */}
            <div className="group order-1 lg:order-2">
              {/* DS3 POLAR SIGNATURE: Gradient border wrapper */}
              <motion.div
                className={cn(
                  "rounded-xl p-[1px]",
                  ds !== "ds3" && "code-gradient-border"
                )}
                style={ds === "ds3" ? {
                  background: "linear-gradient(90deg, #333 0%, #fff 50%, #333 100%)",
                  backgroundSize: "200% 100%",
                } : undefined}
                animate={ds === "ds3" ? {
                  backgroundPosition: ["100% 0", "-100% 0"]
                } : undefined}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity
                }}
              >
                <div className="relative overflow-hidden rounded-xl border border-[var(--border-default)] bg-[#1E1E2E] shadow-[var(--shadow-xl)] code-editor-card">
                  {/* Window Header */}
                  <div className="flex items-center justify-between border-b border-white/5 bg-[#252535] px-4 py-3">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                      <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                      <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-1 rounded-lg bg-black/20 p-1">
                      {(["swift", "kotlin", "flutter", "react-native"] as Tab[]).map(
                        (tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                              "rounded-md px-3 py-1 text-xs font-medium capitalize transition-all",
                              activeTab === tab
                                ? "bg-white/10 text-white"
                                : "text-white/40 hover:bg-white/5 hover:text-white/70"
                            )}
                          >
                            {tab.replace("-", " ")}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Code */}
                  <div className="relative p-6">
                    <button
                      onClick={handleCopy}
                      className="absolute right-4 top-4 rounded-lg bg-white/5 p-2 text-white/40 transition-all hover:bg-white/10 hover:text-white"
                      title="Copy code"
                    >
                      {copied ? (
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>

                    <pre className="font-mono text-sm leading-relaxed text-[#CDD6F4]">
                      <code>
                        {sdk.codeExamples[activeTab].split("\n").map((line, i) => (
                          <div key={i} className="table-row">
                            <span className="table-cell select-none pr-4 text-right text-white/20">
                              {i + 1}
                            </span>
                            <span className="table-cell">{line}</span>
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                </div>
              </motion.div>{/* Close gradient border wrapper */}
            </div>
          </div>
        </Container>
      </Section>

      {/* SDK Grid */}
      <Section className="pb-24 pt-8">
        <Container>
          <h2 className={cn(
            "mb-12 text-center text-2xl font-bold tracking-tight md:text-3xl",
            ds === "ds1" ? "heading-metallic" : "text-[var(--text-primary)]"
          )}>
            {sdk.gridHeadline}
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {sdk.platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.link}
                className={cn(
                  "group flex flex-col items-center justify-center rounded-[var(--card-radius)] p-6 transition-all duration-[var(--duration-normal)] hover:-translate-y-1",
                  ds === "ds1"
                    ? "card-glass hover:shadow-[var(--shadow-xl)]"
                    : "border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-transparent hover:shadow-[var(--shadow-xl)]"
                )}
              >
                <div className="relative mb-4 h-12 w-12 transition-transform group-hover:scale-110">
                  <Image
                    src={platform.icon}
                    alt={platform.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-center text-sm font-semibold text-[var(--text-primary)]">
                  {platform.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
