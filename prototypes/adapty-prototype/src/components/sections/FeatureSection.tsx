import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { cn } from "~/lib/utils";

interface FeatureSectionProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    bgColor?: string;
  };
  cta: {
    text: string;
    href: string;
    external?: boolean;
  };
  testimonial?: {
    quote: string;
    logo?: string;
    company?: {
      name: string;
      category: string;
      logo: string;
    };
    author: {
      name: string;
      role: string;
      avatar: string;
    };
  };
  features?: readonly string[];
  variant?: "ds1" | "ds2" | "ds3" | "ds4" | "ds5";
  sectionNumber?: string;
  codeSnippet?: string;
  flipped?: boolean;
  className?: string;
}

export function FeatureSection(props: FeatureSectionProps) {
  const { variant = "ds5" } = props;

  // ROUTER: Dispatch to specific DNA implementation
  // This allows radically different DOM structures per theme
  if (variant === "ds1") return <FeatureSectionLinear {...props} />;
  if (variant === "ds2") return <FeatureSectionAttio {...props} />;
  if (variant === "ds3") return <FeatureSectionPolar {...props} />;
  if (variant === "ds4") return <FeatureSectionVercel {...props} />;

  // Default/Clerk (DS5)
  return <FeatureSectionDefault {...props} />;
}

// ==========================================
// DS1: LINEAR (Glass, Lists, Tight Type, Animated Cards)
// ==========================================
function FeatureSectionLinear({
  title,
  description,
  image,
  features,
  cta,
  flipped,
  className,
}: FeatureSectionProps) {
  return (
    <Section className={cn("border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] py-24 relative overflow-hidden", className)}>
      {/* LINEAR SIGNATURE: Radial gradient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-primary)/5_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className={cn("grid gap-16 lg:grid-cols-2 items-center", flipped && "lg:[direction:rtl]")}>
          {/* Visual: Animated Glass Card with Glow */}
          <div className={cn("relative lg:[direction:ltr] group")}>
            {/* Glow effect on hover */}
            <div className="absolute -inset-4 bg-[var(--color-primary)]/0 rounded-3xl blur-2xl transition-all duration-500 group-hover:bg-[var(--color-primary)]/10" />

            {/* Main Card with Linear layered shadow */}
            <div className="card-linear relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] transition-all duration-300 group-hover:shadow-[var(--card-glow-hover)]">
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-20" />

              {/* Motion Lines - Animated illustration elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Horizontal precision guides */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent animate-pulse" style={{ animationDelay: '0s' }} />
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Vertical precision guides */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-primary)]/15 to-transparent animate-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-primary)]/15 to-transparent animate-pulse" style={{ animationDelay: '0.8s' }} />

                {/* Corner accent dots */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[var(--color-primary)]/30 animate-pulse" />
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--color-primary)]/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[var(--color-primary)]/30 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[var(--color-primary)]/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>

              {/* Main image with floating animation */}
              <div className={cn("h-full w-full p-8 flex items-center justify-center animate-float", image.bgColor ? `bg-[${image.bgColor}]` : "")} style={{ animationDuration: '6s' }}>
                <Image src={image.src} alt={image.alt} fill className="object-contain" />
              </div>

              {/* LINEAR SIGNATURE: Expand button (+) */}
              <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-200 opacity-0 group-hover:opacity-100">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 1v10M1 6h10" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="lg:[direction:ltr]">
            <h2 className="heading-linear mb-6 text-4xl font-medium text-[var(--text-primary)] leading-[1.1]">
              {title}
            </h2>
            <p className="mb-8 text-lg text-[var(--text-secondary)] leading-relaxed">
              {description}
            </p>

            {/* Linear Style Lists: "Icon + Text" Rows with hover animation */}
            {features && features.length > 0 && (
              <ul className="mb-8 space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 group/item">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-200 group-hover/item:bg-[var(--color-primary)]/20 group-hover/item:scale-110">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-[var(--text-secondary)] group-hover/item:text-[var(--text-primary)] transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <ButtonLink href={cta.href} text={cta.text} external={cta.external} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ==========================================
// DS2: ATTIO (Editorial, Numbers, Structured)
// ==========================================
function FeatureSectionAttio({
  title,
  description,
  image,
  features,
  sectionNumber,
  cta,
  flipped,
  className,
}: FeatureSectionProps) {
  return (
    <Section className={cn("border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] py-20", className)}>
      <Container>
        <div className={cn("grid gap-12 lg:grid-cols-12", flipped && "lg:[direction:rtl]")}>
          {/* Content Column (Narrower in Attio style often) */}
          <div className="lg:col-span-5 lg:[direction:ltr] flex flex-col justify-center">
            <h3 className="mb-6 text-3xl font-semibold text-[var(--text-primary)] tracking-tight">
              {description.split(".")[0]}.
            </h3>
            <p className="mb-8 text-[var(--text-secondary)] leading-relaxed">
              {description}
            </p>

            {/* Tag logic simulation */}
            {features && (
              <div className="flex flex-wrap gap-2 mb-8">
                {features.map((f, i) => (
                  <span key={i} className="px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-default)] text-xs font-medium text-[var(--text-secondary)]">
                    {f}
                  </span>
                ))}
              </div>
            )}

            <ButtonLink href={cta.href} text={cta.text} external={cta.external} />
          </div>

          {/* Image Column */}
          <div className="lg:col-span-7 lg:[direction:ltr]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] shadow-sm">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ==========================================
// DS3: POLAR (Code First, Tab Switcher, Gradient Code Blocks)
// ==========================================
function FeatureSectionPolar({
  title,
  description,
  codeSnippet,
  features,
  cta,
  flipped,
  className,
}: FeatureSectionProps) {
  // Polar-style SDK tabs - frameworks for mobile subscription SDK
  const sdkTabs = [
    { id: "swift", label: "Swift", filename: "Adapty.swift" },
    { id: "kotlin", label: "Kotlin", filename: "Adapty.kt" },
    { id: "flutter", label: "Flutter", filename: "adapty.dart" },
    { id: "rn", label: "React Native", filename: "adapty.ts" },
  ];

  const [activeTab, setActiveTab] = React.useState("swift");

  // Get code based on active tab (for now, use the provided snippet)
  const getCodeForTab = (tabId: string) => {
    // In production, content.ts would provide per-tab code
    // For now, we show the provided snippet with tab-specific comments
    const tabSnippets: Record<string, string> = {
      swift: `import Adapty

// Initialize Adapty SDK
Adapty.activate("YOUR_API_KEY")

// Check subscription status
let profile = try await Adapty.getProfile()
let hasAccess = profile.accessLevels["premium"]?.isActive`,
      kotlin: `import com.adapty.Adapty

// Initialize Adapty SDK
Adapty.activate(applicationContext, "YOUR_API_KEY")

// Check subscription status
Adapty.getProfile { result ->
    val hasAccess = result.accessLevels["premium"]?.isActive
}`,
      flutter: `import 'package:adapty_flutter/adapty_flutter.dart';

// Initialize Adapty SDK
await Adapty().activate('YOUR_API_KEY');

// Check subscription status
final profile = await Adapty().getProfile();
final hasAccess = profile.accessLevels['premium']?.isActive;`,
      rn: `import { adapty } from 'react-native-adapty';

// Initialize Adapty SDK
await adapty.activate('YOUR_API_KEY');

// Check subscription status
const profile = await adapty.getProfile();
const hasAccess = profile.accessLevels.premium?.isActive;`,
    };
    return tabSnippets[tabId] || codeSnippet || "// Select an SDK";
  };

  const activeTabData = sdkTabs.find(t => t.id === activeTab);

  return (
    <Section className={cn("border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] py-24", className)}>
      <Container>
        {/* Polar-style Tab Navigation */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {sdkTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                activeTab === tab.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)]"
              )}
            >
              {tab.label}
            </button>
          ))}
          <span className="ml-auto text-sm text-[var(--text-muted)]">All SDKs →</span>
        </div>

        <div className={cn("grid gap-16 lg:grid-cols-2 items-start", flipped && "lg:[direction:rtl]")}>

          {/* Content Side */}
          <div className="lg:[direction:ltr]">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              {title}
            </h2>
            <p className="mb-8 text-lg text-[var(--text-muted)]">
              {description}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {features?.map((f, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Check className="h-4 w-4 text-[var(--color-success)]" />
                  {f}
                </span>
              ))}
            </div>
            <ButtonLink href={cta.href} text={cta.text} external={cta.external} />
          </div>

          {/* Polar-style Code Window with Gradient Background */}
          <div className="lg:[direction:ltr]">
            <div className="overflow-hidden rounded-xl border border-[var(--border-default)] shadow-2xl">
              {/* Gradient background container */}
              <div className="bg-gradient-to-br from-[#FF6B35]/20 via-[#E91E63]/20 to-[#3B82F6]/20 p-[1px]">
                <div className="bg-[#0C0C0C] rounded-xl overflow-hidden">
                  {/* Window Controls */}
                  <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                    <div className="ml-auto font-mono text-xs text-white/30">
                      {activeTabData?.filename || "code.ts"}
                    </div>
                  </div>

                  {/* Syntax Highlighted Code */}
                  <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[200px]">
                    <pre>
                      <code className="bg-transparent text-[#abb2bf]" dangerouslySetInnerHTML={{
                        __html: highlightCode(getCodeForTab(activeTab))
                      }} />
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}

// ==========================================
// DS4: VERCEL (Grid, Bento?? For now Standard)
// ==========================================
function FeatureSectionVercel({
  title,
  description,
  image,
  cta,
  className,
  flipped
}: FeatureSectionProps) {
  // Enhanced Vercel layout with Grid Background
  return (
    <Section className={cn("relative border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] py-24", className)}>
      {/* Vercel Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] [background-size:4rem_4rem] opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <div className={cn("grid gap-16 lg:grid-cols-2 items-center", flipped && "lg:[direction:rtl]")}>
          {/* Visual - Clean border, no shadow */}
          <div className="lg:[direction:ltr]">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)]">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:[direction:ltr]">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {title}
            </h2>
            <p className="mb-6 text-lg text-[var(--text-secondary)]">
              {description}
            </p>
            <ButtonLink href={cta.href} text={cta.text} external={cta.external} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

// ==========================================
// DS5: DEFAULT / CLERK
// ==========================================
function FeatureSectionDefault({
  title,
  description,
  image,
  cta,
  testimonial,
  flipped,
  className,
}: FeatureSectionProps) {
  return (
    <Section className={cn("border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] py-24", className)}>
      <Container>
        <div className={cn("grid gap-16 lg:grid-cols-2 items-center", flipped && "lg:[direction:rtl]")}>
          <div className="lg:[direction:ltr]">
            <div className={cn("relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] p-8", image.bgColor ? `bg-[${image.bgColor}]` : "bg-[var(--bg-secondary)]")}>
              <Image src={image.src} alt={image.alt} fill className="object-contain" />
            </div>
          </div>
          <div className="lg:[direction:ltr]">
            <h2 className="mb-4 text-3xl font-bold text-[var(--text-primary)]">{title}</h2>
            <p className="mb-8 text-lg text-[var(--text-secondary)]">{description}</p>
            <ButtonLink href={cta.href} text={cta.text} external={cta.external} />

            {testimonial && (
              <div className="mt-8 pt-8 border-t border-[var(--border-subtle)]">
                <p className="italic text-[var(--text-secondary)] mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <Image src={testimonial.author.avatar} alt={testimonial.author.name} width={32} height={32} className="rounded-full" />
                  <div className="text-sm">
                    <p className="font-medium text-[var(--text-primary)]">{testimonial.author.name}</p>
                    <p className="text-[var(--text-muted)]">{testimonial.author.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Helper to highlight code simply (regex based)
// Helper to highlight code simply (regex based)
function highlightCode(code: string) {
  // 1. Escape HTML entities first
  let clean = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // 2. Extract strings to prevent keyword/tag collision
  const strings: string[] = [];
  const placeholder = (i: number) => `__STR_${i}__`;

  // Replace double quotes
  clean = clean.replace(/"([^"]*)"/g, (match) => {
    strings.push(match);
    return placeholder(strings.length - 1);
  });

  // Replace single quotes 
  clean = clean.replace(/'([^']*)'/g, (match) => {
    strings.push(match);
    return placeholder(strings.length - 1);
  });

  // 3. Highlight Keywords (Purple/Pink)
  clean = clean.replace(/\b(const|let|var|function|return|if|else|import|from|export|async|await|try|catch)\b/g,
    '<span style="color: #c678dd; font-weight: bold;">$1</span>');

  // 4. Highlight Literals/Types (Orange)
  clean = clean.replace(/\b(true|false|null|undefined|number|string|boolean|void)\b/g,
    '<span style="color: #d19a66;">$1</span>');

  // 5. Highlight Functions (Blue) - careful with lookahead
  clean = clean.replace(/\b(\w+)\(/g, '<span style="color: #61afef;">$1</span>(');

  // 6. Highlight Comments (Gray) - naive, assumes // is not in a string (already extracted)
  clean = clean.replace(/(\/\/.*$)/gm, '<span style="color: #5c6370; font-style: italic;">$1</span>');

  // 7. Restore Strings (Green)
  strings.forEach((str, i) => {
    clean = clean.replace(placeholder(i), `<span style="color: #98c379;">${str}</span>`);
  });

  return clean;
}

function ButtonLink({ href, text, external }: { href: string; text: string; external?: boolean }) {
  const content = (
    <>
      {text} <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
    </>
  );

  const className = "inline-flex items-center font-medium text-[var(--color-primary)] group hover:opacity-80 transition-opacity";

  if (external) {
    return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{content}</a>;
  }
  return <Link href={href} className={className}>{content}</Link>;
}
