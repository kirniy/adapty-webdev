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
// DS1: LINEAR (Glass, Lists, Tight Type)
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
    <Section className={cn("border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] py-24", className)}>
      <Container>
        <div className={cn("grid gap-16 lg:grid-cols-2 items-center", flipped && "lg:[direction:rtl]")}>
          {/* Visual: Glass Card styling */}
          <div className={cn("relative lg:[direction:ltr]")}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-[var(--shadow-card)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-20" />
              <div className={cn("h-full w-full p-8 flex items-center justify-center", image.bgColor ? `bg-[${image.bgColor}]` : "")}>
                <Image src={image.src} alt={image.alt} fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:[direction:ltr]">
            <h2 className="mb-6 text-4xl font-medium tracking-[var(--letter-spacing-heading)] text-[var(--text-primary)] leading-[1.1]">
              {title}
            </h2>
            <p className="mb-8 text-lg text-[var(--text-secondary)] leading-relaxed">
              {description}
            </p>

            {/* Linear Style Lists: "Icon + Text" Rows */}
            {features && features.length > 0 && (
              <ul className="mb-8 space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
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
        {/* Attio Editorial Header: [01] TITLE ............ / ITEM */}
        <div className="mb-12 flex items-baseline justify-between border-b border-dotted border-[var(--border-strong)] pb-4 font-mono text-xs tracking-widest text-[var(--text-tertiary)] uppercase">
          <div className="flex items-center gap-4">
            <span className="text-[var(--color-primary)]">[{sectionNumber || "00"}]</span>
            <span className="text-[var(--text-primary)]">{title}</span>
          </div>
          <div className="hidden sm:block">/ {image.alt.split(" ")[0] || "FEATURE"}</div>
        </div>

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
// DS3: POLAR (Code First, Syntax Highlighting)
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
  return (
    <Section className={cn("border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] py-24", className)}>
      <Container>
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
                <span key={i} className="px-3 py-1 rounded-full border border-[var(--border-default)] text-sm text-[var(--text-secondary)]">
                  {f}
                </span>
              ))}
            </div>
            <ButtonLink href={cta.href} text={cta.text} external={cta.external} />
          </div>

          {/* Authentic Code Window */}
          <div className="lg:[direction:ltr]">
            <div className="overflow-hidden rounded-xl border border-[var(--border-default)] bg-[#0C0C0C] shadow-2xl">
              {/* Window Controls */}
              <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                <div className="ml-auto font-mono text-xs text-white/30">usage.ts</div>
              </div>

              {/* Syntax Highlighted Code (Simulated with simple coloring logic for demo) 
                  Real imp would use Shiki, but here we manually color nice spans 
              */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre>
                  {/* We assume codeSnippet is passed. If it's a raw string, we just display it. 
                      Ideally content.ts passes a structure, but let's try to highlight keywords. */}
                  <code className="bg-transparent text-[#abb2bf]" dangerouslySetInnerHTML={{
                    __html: highlightCode(codeSnippet || "// No code provided")
                  }} />
                </pre>
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
function highlightCode(code: string) {
  // Naive highlighter for demo purposes. 
  // Replaces keywords with colored spans.
  // Colors selected to match Polar's gradient aesthetic description roughly (Orange/Pink/Blue)
  let html = code
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\b(const|let|var|function|return|if|else|import|from|export|async|await)\b/g, '<span style="color: #c678dd; font-weight: bold;">$1</span>') // Purple/Pink
    .replace(/\b(true|false|null|undefined)\b/g, '<span style="color: #d19a66;">$1</span>') // Orange
    .replace(/'([^']*)'/g, '<span style="color: #98c379;">\'$1\'</span>') // Green
    .replace(/"([^"]*)"/g, '<span style="color: #98c379;">"$1"</span>') // Green
    .replace(/\b(\w+)\(/g, '<span style="color: #61afef;">$1</span>('); // Blue function calls

  return html;
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
