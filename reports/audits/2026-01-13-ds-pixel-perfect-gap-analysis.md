# Design System Pixel-Perfect Gap Analysis

**Date**: 2026-01-13
**Purpose**: Compare prototype implementations against reference analysis.md files
**Goal**: Identify gaps and create actionable improvement plan for pixel-perfect fidelity

---

## Executive Summary

| DS | Current Fidelity | Critical Gaps | Priority |
|----|------------------|---------------|----------|
| DS1 (Linear) | 55% | Missing 3D perspective, letter-spacing too loose, no layered shadows | HIGH |
| DS2 (Attio) | 50% | Missing serif font emphasis, LAB colors, editorial numbering format | HIGH |
| DS3 (Polar) | 60% | Missing gradient code blocks, 150ms universal timing, Geist fonts | MEDIUM |
| DS4 (Vercel) | 35% | **CRITICAL**: Missing signature gradient hero, bouncy easing, compound shadows | CRITICAL |
| DS5 (Clerk) | 65% | Missing background pattern SVG, Suisse font, exact purple #6C47FF | MEDIUM |

---

## DS1: Linear-Inspired — Gap Analysis

### Reference Analysis Key Points
- **Colors**: Dark-first `#08090a` to `#191a1b`, subtle grays `#71717a`
- **Typography**: Inter Variable, 64px H1, **letter-spacing: -0.02em to -0.04em** (tight!)
- **Borders**: 30px card radius, subtle `rgba(255,255,255,0.06)` borders
- **Shadows**: Layered shadows creating depth without heavy blur
- **Animations**: 67+ unique animations, floating elements, card glow on hover

### Current Implementation Analysis

```css
/* globals.css DS1 tokens */
--bg-primary: #08090a;           /* ✅ CORRECT */
--radius-card: 30px;             /* ✅ CORRECT */
--letter-spacing-tight: -0.025em; /* ⚠️ NEEDS -0.02 to -0.04em range */
```

### GAPS IDENTIFIED

| Category | Reference | Current | Gap |
|----------|-----------|---------|-----|
| **Letter-spacing H1** | -0.04em | -0.025em | Too loose by 0.015em |
| **Letter-spacing Body** | -0.02em | -0.01em | Too loose |
| **3D Perspective** | `perspective: 2000px` + transforms | Basic floating | Missing depth layers |
| **Card Shadows** | Layered `0 0 0 1px rgba(255,255,255,0.06), 0 4px 6px rgba(0,0,0,0.4)` | Single shadow | Missing compound shadow |
| **Glow Hover** | `0 0 30px rgba(accent,0.3)` | opacity change | Missing glow effect |
| **Animation Count** | 67+ | ~5 | Missing micro-interactions |
| **Floating Animation** | Multiple offset layers | Single element | Missing parallax depth |

### Hero Section Gaps (HeroDS1)

**Reference Linear Hero Structure**:
```
┌─────────────────────────────────────────────────────────────┐
│                    Radial Gradient Glow                      │
│  ┌─────────────────────────────────────────────────────┐    │
│  │         [Announcement Badge with Pulse]              │    │
│  │                                                      │    │
│  │    Large Headline (-0.04em tracking)                 │    │
│  │    Muted Secondary Line                              │    │
│  │                                                      │    │
│  │    Subheadline with two-tone                         │    │
│  │                                                      │    │
│  │    [Primary CTA]  Secondary Link →                   │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────┐                              ┌──────────┐     │
│  │ BACK     │    ┌──────────────────┐      │ FRONT    │     │
│  │ LAYER    │←───│   MAIN PANEL     │───→  │ LAYER    │     │
│  │ (z:-1)   │    │   (perspective)  │      │ (z:+1)   │     │
│  │ Analytics│    │   Dashboard      │      │ Paywall  │     │
│  └──────────┘    └──────────────────┘      └──────────┘     │
│        ↑ animate-float delay:0s     ↑ delay:2s              │
└─────────────────────────────────────────────────────────────┘
```

**Current Implementation Gaps**:
1. ❌ Letter-spacing on headline is too loose
2. ⚠️ 3D layers exist but lack proper `transform: translateZ()` depth
3. ⚠️ Card glow on hover is weak
4. ❌ Missing precision guide lines (animated horizontal/vertical lines)

### Required CSS Token Changes

```css
/* DS1 Token Updates Needed */
--letter-spacing-h1: -0.04em;        /* was -0.025em */
--letter-spacing-tight: -0.02em;     /* was -0.01em */
--perspective-depth: 2000px;         /* ADD */
--card-layer-back: translateZ(-50px); /* ADD */
--card-layer-front: translateZ(50px); /* ADD */
--shadow-layered-card:
  0 0 0 1px rgba(255,255,255,0.06),
  0 4px 6px -1px rgba(0,0,0,0.3),
  0 10px 15px -3px rgba(0,0,0,0.2);   /* UPDATE */
--card-glow-hover:
  0 0 30px rgba(var(--color-accent-rgb),0.3),
  0 0 60px rgba(var(--color-accent-rgb),0.1);  /* ADD */
```

---

## DS2: Attio-Inspired — Gap Analysis

### Reference Analysis Key Points
- **Colors**: Light-first `#ffffff`, LAB color space for perceptual uniformity
- **Typography**: Inter Display, **68px header**, 4-font system (Inter, Display, Tiempos Headline for serif, JetBrains Mono)
- **Section Pattern**: `[01] TITLE / ITEM` editorial numbering
- **Borders**: 8px squircle, subtle warm grays
- **Animations**: Moderate, 200ms default

### Current Implementation Analysis

```css
/* globals.css DS2 tokens */
--bg-primary: #ffffff;           /* ✅ CORRECT */
--radius-lg: 8px;                /* ✅ CORRECT (squircle) */
--font-family-default: 'Inter Variable';  /* ⚠️ Missing Display variant */
```

### GAPS IDENTIFIED

| Category | Reference | Current | Gap |
|----------|-----------|---------|-----|
| **Serif Font** | Tiempos Headline for emphasis | None | Missing emotional typography |
| **LAB Colors** | `lab(98% 0 0)` perceptual | RGB values | Missing perceptual uniformity |
| **Section Numbers** | `[01] TITLE` monospace format | Present but styling weak | Needs font-mono + tracking |
| **H1 Size** | 68px | 60px | 8px smaller |
| **Ghost Button** | 8px radius, 1px border, no fill | Has fill on hover | Should stay transparent |
| **Dotted Separator** | `border-dotted` between sections | Solid lines | Missing editorial feel |

### Hero Section Gaps (HeroDS2)

**Reference Attio Hero Structure**:
```
┌─────────────────────────────────────────────────────────────┐
│                 [01] PLATFORM ········· / HERO              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │    [Badge with Stroke Border]                        │    │
│  │                                                      │    │
│  │    The power of subscription                         │ ←68px
│  │    *analytics* & paywalls        ← serif emphasis    │    │
│  │                                                      │    │
│  │    Subheadline (medium weight)                       │    │
│  │                                                      │    │
│  │    [Solid Primary] [Ghost Secondary →]              │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  [Paywalls]  [A/B Tests]  [Analytics]  [FunnelFox]  │   │
│  │  ─────────                                           │ ←underline
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────┬────────────────────────────────────────────┐     │
│  │ NAV  │              MAIN CONTENT                   │     │
│  │ SIDE │              Dashboard Image                │     │
│  │ BAR  │                                             │     │
│  └──────┴────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

**Current Implementation Gaps**:
1. ❌ Missing serif font for emotional words ("analytics", "powerful")
2. ❌ Section numbering format needs `font-mono tracking-widest`
3. ⚠️ Ghost button has bg on hover (should remain transparent, just border change)
4. ❌ Missing dot grid background pattern
5. ⚠️ Tab underline animation needs spring feel

### Required CSS Token Changes

```css
/* DS2 Token Updates Needed */
--font-family-serif: 'Tiempos Headline', Georgia, serif;  /* ADD */
--font-size-h1: 68px;                /* was implicit 60px */
--section-number-tracking: 0.2em;    /* ADD */
--color-bg-secondary: lab(98% 0 2);  /* Convert to LAB */
--ghost-button-hover-bg: transparent; /* Override */
--border-style-section: dotted;      /* ADD */
```

---

## DS3: Polar-Inspired — Gap Analysis

### Reference Analysis Key Points
- **Colors**: Dark `#171719`, muted `#26262a`
- **Typography**: Geist Sans + Geist Mono, system-like clarity
- **Borders**: 0.6rem (10px) base radius, minimal
- **Animations**: **ALL 150ms** (fast, snappy, code-editor feel)
- **Signature**: Gradient code blocks (orange→pink→blue), "Now in Beta" badge

### Current Implementation Analysis

```css
/* globals.css DS3 tokens */
--bg-primary: #171719;           /* ✅ CORRECT */
--radius-default: 0.6rem;        /* ✅ CORRECT */
--duration-default: 150ms;       /* ✅ CORRECT */
```

### GAPS IDENTIFIED

| Category | Reference | Current | Gap |
|----------|-----------|---------|-----|
| **Geist Font** | Geist Sans + Mono | Inter | Missing font family |
| **Code Gradient** | `linear-gradient(135deg, #FF6B35, #E91E63, #3B82F6)` | Present | Needs exact colors |
| **Beta Badge** | Green dot + "Now in Beta" | Present | ✅ OK |
| **Mini-UI Cards** | Transaction lists, stats grids | Present | ✅ OK |
| **Checkmark Color** | Bright green #22C55E | CSS variable | Verify exact value |
| **Tab Animation** | 150ms all transitions | Mixed | Ensure consistency |

### Hero Section Gaps (HeroDS3)

**Reference Polar Hero Structure**:
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                    ● Now in Beta                             │
│                                                              │
│               Grow your subscriptions                        │
│               with analytics                                 │ ←Bold
│                                                              │
│          Simple subheadline, one line                        │
│                                                              │
│         [Get Started →]  [View docs →]                       │
│                                                              │
│  ┌───────────────┬───────────────┬───────────────┐          │
│  │ Recent        │ Subscriber    │ Quick Start   │ ←mini-UI │
│  │ Activity      │ Stats         │ (code block)  │          │
│  │               │               │ ┌───────────┐ │          │
│  │ Pro: +$9.99   │ 2.4k  94%     │ │import...  │ │ ←gradient
│  │ Premium...    │ subs  retain  │ │Adapty...  │ │  border  │
│  └───────────────┴───────────────┴─└───────────┘─┘          │
│                                                              │
│       ✓ Open source  ✓ Self-hosted  ✓ Enterprise            │
└─────────────────────────────────────────────────────────────┘
```

**Current Implementation Gaps**:
1. ⚠️ Missing Geist font family (using Inter)
2. ✅ Mini-UI cards are present and well-structured
3. ⚠️ Code gradient border needs exact Polar colors
4. ✅ 150ms animations are applied

### Required CSS Token Changes

```css
/* DS3 Token Updates Needed */
--font-family-default: 'Geist', 'Inter Variable', system-ui; /* UPDATE */
--font-family-mono: 'Geist Mono', 'JetBrains Mono', monospace; /* UPDATE */
--code-gradient: linear-gradient(135deg, #FF6B35 0%, #E91E63 50%, #3B82F6 100%); /* VERIFY */
--checkmark-color: #22C55E;         /* VERIFY exact */
```

---

## DS4: Vercel-Inspired — Gap Analysis

### Reference Analysis Key Points
- **Colors**: TRUE BLACK `#000000` (not near-black), compound shadows
- **Typography**: Geist Sans + Space Grotesk for display, 72px H1
- **Borders**: 6-8px radius, compound shadows with white border overlay
- **Animations**: Bouncy easing `cubic-bezier(.175,.885,.32,1.1)`
- **Signature**: **Colorful gradient hero** (pink/purple/blue), grid background

### Current Implementation Analysis

```css
/* globals.css DS4 tokens */
--bg-primary: #000000;           /* ✅ CORRECT */
--radius-button: 6px;            /* ✅ CORRECT */
```

### GAPS IDENTIFIED — **CRITICAL**

| Category | Reference | Current | Gap | Severity |
|----------|-----------|---------|-----|----------|
| **Gradient Hero** | Signature pink/purple/blue gradient | **MISSING** | Hero is plain black | **CRITICAL** |
| **Compound Shadow** | White border + blur shadow | Single shadow | Missing depth | HIGH |
| **Bouncy Easing** | `cubic-bezier(.175,.885,.32,1.1)` | Default ease | Missing spring | HIGH |
| **Space Grotesk** | Display font | Not loaded | Missing personality | MEDIUM |
| **Metrics Row** | Large bold numbers before CTA | Present | ✅ OK |
| **Grid Background** | 64px grid pattern | Present | ✅ OK |

### Hero Section Gaps (HeroDS4)

**Reference Vercel Hero Structure**:
```
┌─────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────┐ │
│ │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ │
│ │▓▓▓▓▓▓▓  GRADIENT HERO (pink→purple→blue)  ▓▓▓▓▓▓▓▓▓▓▓▓│ │ ← MISSING!
│ │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│            Grow your subscriptions                           │ ←72px bold
│            with analytics                                    │
│                                                              │
│            Subheadline two-tone                              │
│                                                              │
│      $120M+        15K+          99.9%                       │ ←metrics
│      Revenue       Apps          Uptime                      │
│                                                              │
│            [Get Started →]  [Request Demo]                   │
│                                                              │
│       ╔═══════════════════════════════════════════╗         │
│       ║ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║ ←glow   │
│       ║                                           ║         │
│       ║         Dashboard Screenshot              ║         │
│       ║                                           ║         │
│       ╚═══════════════════════════════════════════╝         │
│           ↑ compound shadow: white 1px + blur               │
└─────────────────────────────────────────────────────────────┘
```

**Current Implementation Critical Gaps**:
1. **❌ CRITICAL: Missing signature gradient hero** - This is THE Vercel identifier
2. ❌ Missing compound shadow (white border + blur)
3. ❌ Missing bouncy easing function
4. ⚠️ Missing Space Grotesk display font
5. ✅ Metrics row exists
6. ✅ Grid background exists

### Required CSS Token Changes

```css
/* DS4 Token Updates Needed — CRITICAL */
--gradient-hero: linear-gradient(
  135deg,
  #FF0080 0%,
  #7928CA 50%,
  #0070F3 100%
);  /* ADD - CRITICAL */

--shadow-compound:
  0 0 0 1px rgba(255,255,255,0.1),
  0 8px 40px rgba(0,0,0,0.6);  /* UPDATE */

--ease-bouncy: cubic-bezier(.175,.885,.32,1.1);  /* ADD */

--font-family-display: 'Space Grotesk', 'Geist', sans-serif;  /* ADD */

--font-size-h1: 72px;  /* Verify */
```

### HeroDS4 Component Changes Needed

```tsx
// CRITICAL: Add gradient hero section above content
<section className="relative">
  {/* VERCEL SIGNATURE: Gradient Hero Band */}
  <div className="absolute top-0 left-0 right-0 h-[400px] bg-[var(--gradient-hero)] opacity-60 blur-[100px]" />

  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(...)] opacity-30" />

  {/* Content with bouncy animations */}
  ...
</section>
```

---

## DS5: Clerk-Inspired — Gap Analysis

### Reference Analysis Key Points
- **Colors**: Warm gray `#F7F7F8`, purple accent `#6C47FF`
- **Typography**: Suisse International, -2.24px letter-spacing on H1
- **Borders**: 24px pill buttons, 12px cards
- **Animations**: Moderate, focus on polish not speed
- **Signature**: Auth form showcase, circuit/geometric background pattern

### Current Implementation Analysis

```css
/* globals.css DS5 tokens */
--bg-primary: var(--bg-pattern);  /* Using pattern */
--radius-pill: 24px;              /* ✅ CORRECT */
--color-primary: #6C47FF;         /* ✅ CORRECT */
```

### GAPS IDENTIFIED

| Category | Reference | Current | Gap |
|----------|-----------|---------|-----|
| **Suisse Font** | Suisse International | Inter | Missing font |
| **H1 Letter-spacing** | -2.24px (-0.035em on 64px) | Generic | Needs exact value |
| **Background Pattern** | SVG circuit/geometric | CSS pattern | May need SVG |
| **Form Card** | Elevated white with shadow | Present | ✅ OK |
| **OAuth Buttons** | Rounded corners, border | Present | ✅ OK |
| **Purple Accent** | #6C47FF exact | Present | ✅ Verify |

### Hero Section Gaps (HeroDS5)

**Reference Clerk Hero Structure**:
```
┌─────────────────────────────────────────────────────────────┐
│  ╭─────╮╭─────╮╭─────╮╭─────╮                               │
│  │     ││     ││     ││     │  ← Circuit pattern background │
│  ╰─────╯╰─────╯╰─────╯╰─────╯                               │
│                                                              │
│  ┌─────────────────────────┬─────────────────────────────┐  │
│  │                         │                              │  │
│  │  SUBSCRIPTION PLATFORM  │    ┌────────────────────┐   │  │
│  │  (purple label)         │    │        A           │   │  │
│  │                         │    │  Create account    │   │  │
│  │  Grow your              │    │  Start free trial  │   │  │
│  │  subscriptions          │    │                    │   │  │
│  │  with analytics         │    │ [Continue Google]  │   │  │
│  │                         │    │ [Continue GitHub]  │   │  │
│  │  Subheadline text       │    │                    │   │  │
│  │                         │    │  ────── or ──────  │   │  │
│  │  [Get Started →]        │    │                    │   │  │
│  │  [▶ Watch Demo]         │    │  Email: [______]   │   │  │
│  │                         │    │  [Continue]        │   │  │
│  │                         │    │                    │   │  │
│  │                         │    │  🛡️ Secured by     │   │  │
│  └─────────────────────────┴────└────────────────────┘───┘  │
│                                                              │
│                    <PaywallBuilder />                        │
└─────────────────────────────────────────────────────────────┘
```

**Current Implementation Gaps**:
1. ⚠️ Missing Suisse International font (using Inter)
2. ⚠️ Letter-spacing needs exact -0.035em value
3. ⚠️ Background pattern may need SVG version
4. ✅ Form card showcase is present and well-structured
5. ✅ Purple accent color is correct

### Required CSS Token Changes

```css
/* DS5 Token Updates Needed */
--font-family-default: 'Suisse International', 'Inter Variable', system-ui; /* UPDATE */
--letter-spacing-h1: -0.035em;   /* was -0.02em */
--bg-pattern-svg: url("data:image/svg+xml,..."); /* ADD SVG version */
```

---

## Priority Implementation Plan

### CRITICAL (Do First)

1. **DS4 Gradient Hero** — The #1 missing Vercel identifier
   - Add `--gradient-hero` token
   - Implement blur gradient band in HeroDS4
   - Add compound shadow to dashboard card

### HIGH PRIORITY (Do Second)

2. **DS1 Letter-spacing** — Core Linear identity
   - Update `--letter-spacing-h1` to -0.04em
   - Update `--letter-spacing-tight` to -0.02em
   - Add perspective transforms for 3D depth

3. **DS2 Serif Font** — Core Attio identity
   - Add Tiempos Headline or similar serif
   - Implement serif emphasis on emotional words
   - Fix ghost button hover (no background)

4. **DS4 Bouncy Easing** — Vercel feel
   - Add `--ease-bouncy: cubic-bezier(.175,.885,.32,1.1)`
   - Apply to hover states and transitions

### MEDIUM PRIORITY (Do Third)

5. **Font Loading** — All DS
   - DS3: Add Geist fonts
   - DS4: Add Space Grotesk
   - DS5: Add Suisse International (or keep Inter as fallback)

6. **Shadow Systems** — DS1, DS4
   - DS1: Implement layered card shadows
   - DS4: Implement compound shadows

### LOW PRIORITY (Polish)

7. **Background Patterns**
   - DS5: Create proper SVG circuit pattern
   - DS2: Add dot grid pattern

8. **Animation Polish**
   - DS1: Add more micro-interactions (67 total)
   - DS3: Verify all animations are 150ms

---

## Token Update Summary

### globals.css Changes Required

```css
/* ============================================
   DS1: LINEAR FIXES
   ============================================ */
[data-theme="ds1"] {
  /* Typography - TIGHTEN */
  --letter-spacing-h1: -0.04em;      /* was -0.025em */
  --letter-spacing-tight: -0.02em;   /* was -0.01em */

  /* 3D Depth - ADD */
  --perspective-depth: 2000px;
  --transform-layer-back: translateZ(-50px) scale(0.95);
  --transform-layer-front: translateZ(50px) scale(1.02);

  /* Shadows - ENHANCE */
  --shadow-layered-card:
    0 0 0 1px rgba(255,255,255,0.06),
    0 4px 6px -1px rgba(0,0,0,0.3),
    0 10px 15px -3px rgba(0,0,0,0.2);
  --card-glow-hover:
    0 0 30px rgba(99,102,241,0.3),
    0 0 60px rgba(99,102,241,0.1);
}

/* ============================================
   DS2: ATTIO FIXES
   ============================================ */
[data-theme="ds2"] {
  /* Typography - ADD SERIF */
  --font-family-serif: 'Tiempos Headline', Georgia, serif;
  --font-size-h1: 68px;              /* was 60px */
  --section-number-tracking: 0.2em;

  /* Ghost Button - FIX */
  --ghost-hover-bg: transparent;

  /* Editorial - ADD */
  --border-style-section: dotted;
}

/* ============================================
   DS3: POLAR FIXES
   ============================================ */
[data-theme="ds3"] {
  /* Typography - UPDATE */
  --font-family-default: 'Geist', 'Inter Variable', system-ui;
  --font-family-mono: 'Geist Mono', 'JetBrains Mono', monospace;

  /* Code Gradient - VERIFY */
  --code-gradient: linear-gradient(135deg, #FF6B35 0%, #E91E63 50%, #3B82F6 100%);
}

/* ============================================
   DS4: VERCEL FIXES — CRITICAL
   ============================================ */
[data-theme="ds4"] {
  /* Gradient Hero - ADD (CRITICAL) */
  --gradient-hero: linear-gradient(135deg, #FF0080 0%, #7928CA 50%, #0070F3 100%);
  --gradient-hero-opacity: 0.6;
  --gradient-hero-blur: 100px;

  /* Typography - ADD */
  --font-family-display: 'Space Grotesk', 'Geist', sans-serif;
  --font-size-h1: 72px;

  /* Shadows - UPDATE */
  --shadow-compound:
    0 0 0 1px rgba(255,255,255,0.1),
    0 8px 40px rgba(0,0,0,0.6);

  /* Animation - ADD */
  --ease-bouncy: cubic-bezier(.175,.885,.32,1.1);
}

/* ============================================
   DS5: CLERK FIXES
   ============================================ */
[data-theme="ds5"] {
  /* Typography - UPDATE */
  --font-family-default: 'Suisse International', 'Inter Variable', system-ui;
  --letter-spacing-h1: -0.035em;     /* was -0.02em */
}
```

---

## Component Changes Required

### 1. HeroDS4 (CRITICAL)

```tsx
// Add gradient hero band
function HeroDS4() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)]">
      {/* VERCEL SIGNATURE: Gradient Hero Band */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px]"
        style={{
          background: 'var(--gradient-hero)',
          opacity: 'var(--gradient-hero-opacity, 0.6)',
          filter: 'blur(var(--gradient-hero-blur, 100px))',
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(...)] opacity-30" />

      {/* Content */}
      <Container className="relative z-10 pt-20 pb-24">
        {/* ... existing content ... */}

        {/* Dashboard with compound shadow */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            className="rounded-xl border border-white/10 bg-[var(--bg-tertiary)] overflow-hidden"
            style={{ boxShadow: 'var(--shadow-compound)' }}
          >
            {/* ... dashboard image ... */}
          </div>
        </div>
      </Container>
    </section>
  );
}
```

### 2. HeroDS1 (High Priority)

```tsx
// Add perspective transforms and tighter letter-spacing
function HeroDS1() {
  return (
    <section className="...">
      {/* Headline with tight letter-spacing */}
      <h1 className="text-6xl font-semibold tracking-[-0.04em]">
        {/* ... */}
      </h1>

      {/* 3D Layered Showcase with perspective */}
      <div style={{ perspective: 'var(--perspective-depth)' }}>
        <div className="..." style={{ transform: 'var(--transform-layer-back)' }}>
          {/* Back layer */}
        </div>
        <div className="..." style={{ transform: 'translateZ(0)' }}>
          {/* Main layer */}
        </div>
        <div className="..." style={{ transform: 'var(--transform-layer-front)' }}>
          {/* Front layer */}
        </div>
      </div>
    </section>
  );
}
```

### 3. HeroDS2 (High Priority)

```tsx
// Add serif emphasis and fix ghost button
function HeroDS2() {
  return (
    <section className="...">
      {/* Section number with proper styling */}
      <div className="font-mono tracking-[0.2em] text-xs uppercase">
        <span className="text-[var(--color-primary)]">[01]</span>
        <span className="text-[var(--text-primary)] ml-4">Platform</span>
      </div>

      {/* Headline with serif emphasis */}
      <h1 className="text-[68px] font-semibold tracking-tight">
        The power of <em className="font-serif not-italic">subscription</em>
        <br />
        analytics & <em className="font-serif not-italic">paywalls</em>
      </h1>

      {/* Ghost button - no bg on hover */}
      <Button
        variant="ghost"
        className="hover:bg-transparent hover:border-[var(--color-primary)]"
      >
        ...
      </Button>
    </section>
  );
}
```

---

## Next Steps

1. [ ] Implement DS4 gradient hero (CRITICAL)
2. [ ] Update DS1 letter-spacing tokens
3. [ ] Add serif font loading for DS2
4. [ ] Update globals.css with all token changes
5. [ ] Test each DS variant visually
6. [ ] Fine-tune shadows and animations
7. [ ] Document font loading strategy

---

*Report generated: 2026-01-13*
*Author: Claude Code with frontend-design + frontend-ui-ux skills*
