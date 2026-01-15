# Gemini Task: Create Achromatic-Based Adapty Prototype

## Context

You are helping with the Adapty website redesign project. We have a working prototype called "Oatmeal" that needs a sister prototype based on the **achromatic-template** - a comprehensive Next.js template with an extensive component library.

### Project Background
- **Goal**: Redesign adapty.io with modern, premium aesthetics
- **Current prototype**: `/prototypes/oatmeal/` - Working Next.js 15 site with 14 homepage sections
- **Key feature**: Debug menu system that lets you switch between section variants (different layouts/styles for same content)
- **Template location**: `/templates/achromatic-template/`

### What We Need

Create a new prototype at `/prototypes/achromatic-proto/` that:

1. **Uses achromatic-template as the base** - Don't start from scratch, edit the template
2. **Implements the same debug menu system** as Oatmeal for switching section variants
3. **Maps our 14 sections to achromatic's component library** - Use their existing hero, features, testimonials, pricing sections etc.
4. **Each section should have 3-4 variants** sourced from achromatic's component library

### Files to Read for Context

**Project understanding:**
- `/CLAUDE.md` - Main project context and requirements
- `/docs/PROGRESS.md` - Current progress and decisions
- `/skeleton/SKELETON.md` - The 14 homepage sections we need

**Oatmeal reference (what to replicate):**
- `/prototypes/oatmeal/src/lib/debug-context.tsx` - The variant switching system
- `/prototypes/oatmeal/src/components/debug/DebugMenu.tsx` - The debug UI
- `/prototypes/oatmeal/src/lib/content.ts` - Content data structure
- `/prototypes/oatmeal/src/app/page.tsx` - How sections are composed

**Achromatic template (your source):**
- `/templates/achromatic-template/` - Explore the entire folder structure
- Look for: `src/components/`, `src/app/`, any `blocks/`, `sections/`, `templates/` folders
- Identify all hero variants, feature sections, testimonial layouts, CTA blocks, etc.

### Implementation Steps

1. **Explore achromatic-template structure** - Map out all available components
2. **Create component inventory** - List all usable section variants by category
3. **Copy template to `/prototypes/achromatic-proto/`**
4. **Add debug-context.tsx** - Port from Oatmeal, adapt variant types to achromatic's components
5. **Add DebugMenu.tsx** - Port from Oatmeal
6. **Create content.ts** - Same content as Oatmeal
7. **Build homepage** - Wire up sections with variant switching
8. **Map each of 14 sections** to 3-4 achromatic variants

### The 14 Sections (from SKELETON.md)

1. Hero
2. TrustedBy (logos)
3. Core Features
4. Stats/Metrics
5. Testimonials
6. Role Cards (For Developers/Marketers/etc)
7. Integrations
8. Case Studies
9. Enterprise
10. Pricing
11. FAQ
12. Final CTA
13. Footer
14. Navigation/Header

### Quality Requirements

- Each variant must be visually distinct (different layout, not just color swap)
- Maintain content parity with Oatmeal prototype
- Keep achromatic's animations and polish
- Ensure responsive design works on all variants

### Output

When done, provide:
1. List of all achromatic components mapped to our sections
2. The new prototype should be runnable with `pnpm dev`
3. Summary of which variants are available per section

---

**Note**: This is a rapid prototype to evaluate achromatic-template's potential. Speed over perfection, but ensure the debug switching system works properly.
