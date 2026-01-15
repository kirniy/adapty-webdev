# Achromatic Template Adoption Guide

> Analysis of `/templates/achromatic-template` for patterns to adopt in Oatmeal prototype.

---

## Template Overview

**Structure**: Turborepo monorepo with `apps/marketing` + `packages/ui`

**Pages Available**:
| Page | Sections |
|------|----------|
| **Homepage** | Hero, Logos, Problem, Solution, Stats, Testimonials, FAQ, CTA |
| **Pricing** | PricingHero, PricingFAQ |
| **Story (About)** | StoryHero, StoryVision, StoryTeam, StoryTimeline, StoryValues |
| **Careers** | CareersHero, CareersBenefits, CareersPositions |
| **Blog** | Blog list + individual posts |
| **Contact** | Contact form |
| **Legal** | Privacy, Terms, Cookies |

---

## Components to Adopt

### Priority 1: Core Animation Utilities

#### 1.1 GridSection (NEW - Port Required)
**Location**: `apps/marketing/components/fragments/grid-section.tsx`

**What it does**: Section wrapper with optional vertical border lines on sides and bottom border.

**Why adopt**: Creates visual structure and rhythm across sections. The dashed lines add premium feel.

```tsx
// Key pattern
<section>
  <div className="px-2 sm:container">
    <div className="relative grid">
      {/* Vertical border lines on left/right */}
      <div className="absolute inset-y-0 block w-px bg-border" />
      <div className="absolute inset-y-0 right-0 w-px bg-border" />
      {children}
    </div>
  </div>
  {/* Bottom border line */}
  <div className="h-px w-full bg-border" />
</section>
```

**Props**:
- `hideVerticalGridLines?: boolean`
- `hideBottomGridLine?: boolean`

---

#### 1.2 Vertical Marquee (ENHANCE Existing)
**Location**: `apps/marketing/components/fragments/marquee.tsx`

**Gap in Oatmeal**: Current Marquee only supports horizontal. Achromatic adds `vertical` prop.

**Enhancement needed**:
```tsx
// Add to Oatmeal's Marquee
vertical?: boolean

// Then:
className={cn(
  'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] gap-(--gap)',
  vertical ? 'flex-col' : 'flex-row',
  className
)}
// Animation classes:
vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row'
```

**CSS Animation needed**:
```css
@keyframes marquee-vertical {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-100% - var(--gap))); }
}
```

---

#### 1.3 BlurFade (ALREADY HAVE - Verify Parity)
**Achromatic Location**: `apps/marketing/components/fragments/blur-fade.tsx`
**Oatmeal Equivalent**: `src/components/effects/FadeIn.tsx`

**Status**: Oatmeal's FadeIn already has blur support! Minor API differences:
- Achromatic uses `inView` + `inViewMargin` props
- Oatmeal uses `once: true` hardcoded

**Recommendation**: No changes needed. Oatmeal's version is actually MORE flexible (direction prop).

---

### Priority 2: Visual Effects

#### 2.1 TextGenerateEffect (NEW - Port Required)
**What it does**: Reveals text word-by-word with fade/blur animation.

**Use case**: CTA headlines, hero text for dramatic effect.

**Implementation pattern**:
```tsx
const words = text.split(' ')
return words.map((word, i) => (
  <motion.span
    key={i}
    initial={{ opacity: 0, filter: 'blur(4px)' }}
    animate={{ opacity: 1, filter: 'blur(0)' }}
    transition={{ delay: i * 0.1 }}
  >
    {word}{' '}
  </motion.span>
))
```

---

#### 2.2 FlickeringGrid (CONSIDER - Heavy)
**Location**: `apps/marketing/components/fragments/flickering-grid.tsx`

**What it does**: Canvas-based grid with flickering cells.

**Analysis**: 192 lines, uses requestAnimationFrame, IntersectionObserver.

**Recommendation**: Skip for now. Oatmeal's AnimatedGrid already provides grid effect. Only adopt if specifically needed.

---

#### 2.3 Dashed Grid Lines (NEW - CSS Pattern)
**Source**: Hero section SVG pattern

**Pattern**:
```tsx
<svg className="pointer-events-none absolute inset-0 h-full w-full">
  {/* Vertical dashed lines */}
  <line x1="25%" y1="0" x2="25%" y2="100%"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeDasharray="6 6" />
  <line x1="50%" y1="0" x2="50%" y2="100%" ... />
  <line x1="75%" y1="0" x2="75%" y2="100%" ... />
</svg>
```

**Use case**: Hero backgrounds, section dividers.

---

### Priority 3: Section Patterns to Adopt

#### 3.1 Stats Pattern
**Achromatic approach**: Simple divider-based grid
```tsx
<div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
  {stats.map((stat) => (
    <div className="flex flex-col items-center p-6 text-center lg:p-8">
      <p className="text-2xl font-semibold md:text-3xl">
        <NumberTicker value={stat.value} />{stat.suffix}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">{stat.description}</p>
    </div>
  ))}
</div>
```

**Key insight**: `divide-x divide-border` creates clean separators without extra markup.

---

#### 3.2 Testimonials Pattern (Masonry + Vertical Marquee)
**Achromatic approach**: Multi-column masonry with different scroll speeds

```tsx
<div className="relative mt-6 max-h-[640px] overflow-hidden">
  <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
    {columns.map((colItems, i) => (
      <Marquee vertical className={cn({
        '[--duration:60s]': i === 1,
        '[--duration:30s]': i === 2,
        '[--duration:70s]': i === 3
      })}>
        {colItems.map((testimonial) => (
          <div className="mb-4 flex w-full break-inside-avoid ...">
            {/* testimonial card */}
          </div>
        ))}
      </Marquee>
    ))}
  </div>
  {/* Fade gradient at bottom */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background" />
</div>
```

**Key insight**: Different `--duration` per column creates organic, non-synchronized motion.

---

#### 3.3 FAQ Pattern (Two-Column)
**Achromatic approach**:
```tsx
<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
  {/* Left: Title + description */}
  <div className="text-center lg:text-left">
    <h2>Frequently Asked Questions</h2>
    <p>Haven't found what you're looking for? Try contacting us.</p>
  </div>
  {/* Right: Accordion */}
  <div className="mx-auto flex w-full max-w-xl flex-col">
    <Accordion type="single" collapsible>
      {faqs.map(...)}
    </Accordion>
  </div>
</div>
```

---

#### 3.4 Problem Section Pattern (Icon Cards)
**Achromatic approach**: Three-column grid with dashed borders
```tsx
<div className="grid divide-y border-t border-dashed md:grid-cols-3 md:divide-x md:divide-y-0">
  {items.map((item, index) => (
    <BlurFade inView delay={0.2 + index * 0.2} className="border-dashed px-8 py-12">
      <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border bg-background shadow">
        {item.icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
      <p className="text-muted-foreground">{item.description}</p>
    </BlurFade>
  ))}
</div>
```

**Key insight**: `border-dashed` + `divide-x divide-y` creates structured grid without heavy borders.

---

#### 3.5 Bento Card Pattern (Motion Cards)
**Achromatic approach**: Using `motion.create()` for Card component
```tsx
const MotionCard = motion.create(Card)

<MotionCard
  className="relative h-[300px] max-h-[300px] overflow-hidden"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <CardHeader>...</CardHeader>
  <CardContent>
    {/* Staggered child animations */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      ...
    </motion.div>
  </CardContent>
</MotionCard>
```

**Key insight**: Fixed height + `overflow-hidden` + staggered children = polished bento cards.

---

### Priority 4: CSS Utilities

#### 4.1 bg-diagonal-lines
**Use case**: CTA section backgrounds
```css
.bg-diagonal-lines {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 8px,
    hsl(var(--muted)) 8px,
    hsl(var(--muted)) 9px
  );
}
```

---

## Comparison: Oatmeal vs Achromatic

| Feature | Oatmeal | Achromatic | Action |
|---------|---------|------------|--------|
| FadeIn/BlurFade | FadeIn (better) | BlurFade | Keep Oatmeal |
| Marquee | Horizontal only | H + V | Enhance |
| NumberTicker | Yes | Yes | Keep Oatmeal |
| AnimatedGrid | Yes | FlickeringGrid | Keep Oatmeal |
| GridSection | No | Yes | **Port** |
| TextGenerate | No | Yes | **Port** |
| SpotlightCard | Yes | No | Keep Oatmeal |
| MagneticButton | Yes | No | Keep Oatmeal |
| ScrambleText | Yes | No | Keep Oatmeal |

---

## Adoption Order

1. **Quick Wins (CSS only)**:
   - Add `bg-diagonal-lines` utility
   - Add dashed SVG grid lines pattern

2. **Component Enhancements**:
   - Add `vertical` prop to Marquee
   - Add `animate-marquee-vertical` keyframe

3. **New Components**:
   - Port GridSection wrapper
   - Port TextGenerateEffect

4. **Section Pattern Updates**:
   - Apply Stats `divide-x` pattern
   - Apply Testimonials vertical marquee masonry
   - Apply Problem section dashed borders

---

## Implementation Notes

### CSS Variables Needed
```css
:root {
  --gap: 1rem;
  --duration: 40s;
}
```

### Tailwind Config Additions
```ts
// tailwind.config.ts
animation: {
  'marquee-vertical': 'marquee-vertical var(--duration, 40s) linear infinite',
}
keyframes: {
  'marquee-vertical': {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(calc(-100% - var(--gap)))' },
  },
}
```

---

## Files to Port

| Source | Destination | Priority |
|--------|-------------|----------|
| `fragments/grid-section.tsx` | `components/layout/GridSection.tsx` | High |
| `fragments/marquee.tsx` (vertical parts) | Enhance `effects/Marquee.tsx` | High |
| `fragments/text-generate-effect.tsx` | `components/effects/TextGenerate.tsx` | Medium |
| CSS patterns | `globals.css` | High |
