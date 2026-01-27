# Homepage Redesign Implementation Plan

> Based on Figma analysis from Linear website study and Lera's feedback
> Created: January 27, 2026

---

## Executive Summary

**Goal**: Transform Adapty homepage from a bloated 11,113px layout to a focused ~4,550px page

| Metric | Current | Target | Change |
|--------|---------|--------|--------|
| Page Height | 11,113px | ~4,550px | -59% |
| Sections | 12 | 8 | -4 |
| Feature Coverage | 14% (1/7) | 66% (4/6) | +52% |

---

## Phase 0: Architecture Changes (P0 - Critical)

### 0.1 Delete Blog Section
**Location**: `apps/marketing/components/sections/blog.tsx`
**Action**: Remove entirely
**Reason**: Not on adapty.io, adds 600px+ of noise

```bash
# Files to modify/delete
apps/marketing/components/sections/blog.tsx  # DELETE
apps/marketing/app/(marketing)/page.tsx      # Remove import and usage
```

### 0.2 Merge Logos into Hero
**Current**: Separate TrustedBy section below hero
**Target**: Single logo strip inside hero, right after headline

```tsx
// Hero structure after change:
<section className="hero">
  <h1>Headline</h1>
  <p>Subheadline</p>
  <div className="logo-strip">  {/* NEW - inline logos */}
    <span className="text-muted">Trusted by 10,000+ apps</span>
    <LogoMarquee minimal />
  </div>
  <div className="cta-buttons">...</div>
  <HeroImage />
</section>
```

**Files**:
- `apps/marketing/components/sections/hero.tsx` - Add logo strip
- `apps/marketing/app/(marketing)/page.tsx` - Remove standalone TrustedBy

### 0.3 Remove Standalone Stats Section
**Current**: Dedicated stats section with 4 metrics
**Target**: Integrate key stats into relevant sections (hero, features, testimonials)

**Files**:
- `apps/marketing/components/sections/stats.tsx` - Keep for integration
- `apps/marketing/app/(marketing)/page.tsx` - Remove standalone usage

### 0.4 Simplify Roles Section
**Current**: 3-card layout with redundant content
**Target**: Remove entirely OR convert to simple 3-icon inline row

**Option A (Recommended)**: Delete section
**Option B**: Minimal inline version

```tsx
// If keeping (Option B):
<div className="flex justify-center gap-12 py-8">
  <RoleIcon icon={<UserIcon />} label="Marketers" />
  <RoleIcon icon={<CodeIcon />} label="Developers" />
  <RoleIcon icon={<ChartIcon />} label="Product" />
</div>
```

### 0.5 Strip Hero Complexity
**Current**:
- Auto-rotating tabs
- Floating animated shapes
- Multiple CTAs
- Large hero image

**Target**:
- Single static headline
- One CTA + one text link
- Smaller, contained hero image
- No floating elements

**Remove from Hero**:
- [ ] Tab rotation system
- [ ] Floating shapes/decorations
- [ ] Secondary CTAs
- [ ] Excessive padding

---

## Phase 1: Visual Cleanup (P1 - High Priority)

### 1.1 Remove All Drop Shadows
**Current**: Cards, buttons, images have subtle shadows
**Target**: Zero shadows - use borders and background contrast

```css
/* REMOVE all instances of: */
shadow-sm, shadow-md, shadow-lg, shadow-xl
box-shadow: ...

/* REPLACE with: */
border border-gray-200
bg-gray-50 /* for contrast */
```

**Search pattern**: `grep -r "shadow" apps/marketing/components/`

### 1.2 Remove Green Dots
**Current**: Green status dots in features, pricing, lists
**Target**: Remove entirely or replace with checkmarks

```tsx
// BEFORE
<span className="w-2 h-2 rounded-full bg-green-500" />

// AFTER (if keeping indicator)
<CheckIcon className="w-4 h-4 text-gray-400" />
```

### 1.3 Remove Tags/Badges
**Current**: "NEW", "POPULAR", "BETA" badges on features
**Target**: Clean, badge-free presentation

**Search**: `grep -rn "badge\|tag\|NEW\|POPULAR\|BETA" apps/marketing/`

### 1.4 Remove Button Arrows
**Current**: CTAs have trailing arrows (->)
**Target**: Clean button text only

```tsx
// BEFORE
<Button>Get Started <ArrowRight /></Button>

// AFTER
<Button>Get Started</Button>
```

### 1.5 Fix Snake Layout
**Current**: Zig-zag alternating image/text pattern
**Target**: Consistent left-to-right or stacked layout

```tsx
// BEFORE (alternating)
<Feature image="left" />
<Feature image="right" />
<Feature image="left" />

// AFTER (consistent)
<Feature image="right" />  // All same direction
<Feature image="right" />
<Feature image="right" />

// OR stacked
<Feature layout="stacked" />
```

---

## Phase 2: Polish (P2 - Medium Priority)

### 2.1 Balance Section Spacing
**Current**: Inconsistent py-16, py-20, py-24
**Target**: Standardized py-24 for all major sections

```tsx
// Standard section wrapper
<section className="py-24">
  ...
</section>
```

### 2.2 Align Section Headings
**Current**: Mix of left-aligned, centered, various sizes
**Target**: Consistent centered headings with standard hierarchy

```tsx
// Standard section header
<div className="text-center mb-16">
  <span className="text-sm text-muted uppercase tracking-wide">Label</span>
  <h2 className="text-4xl font-bold mt-2">Section Title</h2>
  <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">
    Supporting text goes here
  </p>
</div>
```

### 2.3 Simplify Feature Images
**Current**: Complex illustrations with multiple layers
**Target**: Clean, single-concept images or UI screenshots

**Guidelines**:
- Max 2 colors per illustration
- No gradients
- No floating elements
- Prefer actual UI screenshots

### 2.4 Condense Testimonials
**Current**: Large cards with photos, titles, long quotes
**Target**: Minimal text-only quotes or small inline mentions

```tsx
// BEFORE
<TestimonialCard
  photo={...}
  name="John Doe"
  title="CEO at Company"
  company="Company Inc."
  quote="Very long testimonial..."
/>

// AFTER
<blockquote className="text-lg italic text-gray-600">
  "Short impactful quote"
  <cite className="text-sm">- Name, Company</cite>
</blockquote>
```

### 2.5 Simplify Code Blocks
**Current**: Full SDK examples with syntax highlighting
**Target**: Minimal 3-5 line snippets

```tsx
// BEFORE (20+ lines)
// Full implementation example

// AFTER (3-5 lines)
<CodeBlock>
{`Adapty.makePurchase(product) { result in
  // Handle result
}`}
</CodeBlock>
```

---

## Phase 3: Enhancements (P3 - Low Priority)

### 3.1 Improve CTA Section
**Current**: Complex layout with multiple options
**Target**: Single focused CTA

```tsx
<section className="py-24 bg-gray-50">
  <div className="text-center">
    <h2 className="text-3xl font-bold">Ready to grow?</h2>
    <p className="text-lg text-muted mt-4">
      Start free, upgrade when ready
    </p>
    <Button size="lg" className="mt-8">
      Start Free Trial
    </Button>
  </div>
</section>
```

### 3.2 Simplify Footer
**Current**: 4-column mega footer
**Target**: 2-column minimal footer

```
[Logo]                    [Links: Product | Pricing | Docs | Blog]
(c) 2026 Adapty          [Social icons]
```

### 3.3 Add FAQ (If Needed)
**Current**: No FAQ
**Target**: Optional 5-6 question accordion

**Only add if**: Reduces support tickets or improves conversion

---

## Proposed Final Structure

```
Section               | Height | % of Page
----------------------|--------|----------
1. Hero (with logos)  | 800px  | 18%
2. Features (4 cards) | 600px  | 13%
3. SDK/Integration    | 500px  | 11%
4. How It Works       | 600px  | 13%
5. Testimonials       | 400px  | 9%
6. Pricing Preview    | 500px  | 11%
7. CTA                | 300px  | 7%
8. Footer             | 250px  | 5%
----------------------|--------|----------
TOTAL                 | ~4,550px| ~100%
```

---

## Implementation Checklist

### Phase 0 (Do First)
- [ ] Delete blog section entirely
- [ ] Move logo strip into hero
- [ ] Remove standalone stats section
- [ ] Remove or simplify roles section
- [ ] Strip hero tabs and floating elements
- [ ] Reduce hero to single CTA

### Phase 1 (Do Second)
- [ ] Remove all drop shadows (grep and replace)
- [ ] Remove all green dots
- [ ] Remove all tags/badges
- [ ] Remove button arrows
- [ ] Fix snake layout to consistent direction

### Phase 2 (Do Third)
- [ ] Standardize section spacing to py-24
- [ ] Align all section headings (centered)
- [ ] Simplify feature images
- [ ] Condense testimonials to minimal quotes
- [ ] Reduce code examples to 3-5 lines

### Phase 3 (Do Last)
- [ ] Simplify CTA section
- [ ] Reduce footer to 2 columns
- [ ] Consider adding FAQ section

---

## Files to Modify

### Delete
```
apps/marketing/components/sections/blog.tsx
```

### Major Changes
```
apps/marketing/app/(marketing)/page.tsx          # Section ordering
apps/marketing/components/sections/hero.tsx      # Strip complexity, add logos
apps/marketing/components/sections/features.tsx  # Remove shadows, badges
apps/marketing/components/sections/testimonials.tsx  # Condense
apps/marketing/components/layout/footer.tsx      # Simplify
```

### Style Updates (grep for patterns)
```
shadow-*     -> remove
bg-green-*   -> remove or change
badge/tag    -> remove
ArrowRight   -> remove from buttons
py-16/py-20  -> py-24
```

---

## Linear Design Principles to Apply

1. **Information Delivery**: Direct, no fluff, value immediately visible
2. **Unity**: One story, one flow, no competing elements
3. **Edge-to-Edge Content**: Use full viewport width where appropriate
4. **Contained Experiences**: Each section self-contained, no bleeding
5. **Progressive Disclosure**: Show essentials, hide details
6. **Purposeful Interactions**: Every element earns its place

---

## Success Metrics

| Metric | Current | Target | Measurement |
|--------|---------|--------|-------------|
| Page Height | 11,113px | <5,000px | Chrome DevTools |
| Section Count | 12 | 8 | Manual count |
| Shadows | ~50 | 0 | grep count |
| Green Dots | ~20 | 0 | grep count |
| Badges | ~10 | 0 | grep count |
| Button Arrows | ~15 | 0 | grep count |
| Feature Coverage | 14% | 66% | Section audit |

---

## Notes

- Reference: Linear website (linear.app) for design patterns
- All changes should maintain mobile responsiveness
- Test each phase before moving to next
- Keep debug menu functional for A/B testing variants
