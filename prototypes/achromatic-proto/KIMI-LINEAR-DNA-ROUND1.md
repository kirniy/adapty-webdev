# KIMI DEEP WORK: Linear DNA Extraction - ROUND 1 of 3

## MISSION CRITICAL

You are about to transform the Adapty marketing website into something that rivals Linear's quality. This is not about copying - it's about extracting the DNA, the principles, the obsessive attention to detail that makes Linear feel "expensive" and "inevitable."

**You have 3 video recordings of Linear's homepage** in `/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/tempvideo/`:
- `linearmainpage1.mp4` (3.3MB)
- `linearmainpage2.mp4` (62MB)
- `linearmainpage3.mp4` (48MB)

**WATCH EVERY VIDEO NATIVELY. Study every frame. Extract every detail. Then implement.**

---

## PHASE 1: VIDEO ANALYSIS (Watch Videos Directly)

### Watch Each Video Carefully

Open and watch each video file directly. You can natively view video content. Study:

1. **Typography**
   - Heading sizes (h1, h2, h3) - exact pixel values
   - Body text sizes
   - Line heights (notice: NEVER more than 3 lines of text anywhere)
   - Letter spacing (tracking) - tighter on headings
   - Font weights used

2. **Spacing & Layout**
   - Section padding (top/bottom) - appears to be ~120px
   - Container max-width
   - Grid gaps
   - Card internal padding
   - Margins between elements

3. **Corner Radiuses** (CONSISTENCY IS KEY)
   - Cards: what radius?
   - Buttons: what radius?
   - Images: what radius?
   - Modals: what radius?
   - Input fields: what radius?
   - Document the SYSTEM - same values reused

4. **Separators & Dividers**
   - The T-shaped separators in feature sections
   - Line thickness (likely 1px)
   - Color/opacity (very subtle, barely visible)
   - How they create visual hierarchy
   - When used vs when spacing alone is used
   - The pattern: main feature on top, separator below, two smaller features side by side

5. **Modal Behavior**
   - How they open (scale from 0.96? fade?)
   - How they close
   - Backdrop blur amount (subtle, not heavy)
   - Modal max-width
   - Content organization inside modals
   - Scroll behavior within modals
   - Animation duration (VERY SHORT - under 250ms, no travel time)

6. **Micro-animations**
   - Button hover states (SUBTLE - no large movement)
   - Card hover (minimal lift, maybe 2px max)
   - Glassmorphism effects (subtle, restrained)
   - Transition durations (150-200ms max)
   - Easing curves used
   - NO aggressive animations, NO large travel distances

7. **Images & Icons**
   - Image aspect ratios used
   - Image sizing relative to cards
   - Icon sizes (consistent throughout)
   - Icon style (outline? filled? stroke width?)

---

## PHASE 2: LOAD REQUIRED SKILLS

Read these skill files for implementation guidance:

```bash
# Web Animation Design - CREATED BY THE LINEAR DESIGNER
cat ~/.claude/skills/web-animation-design/SKILL.md
cat ~/.claude/skills/web-animation-design/PRACTICAL-TIPS.md

# UI/UX Pro Max - Design intelligence
cat ~/.claude/skills/ui-ux-pro-max/SKILL.md

# Frontend Design - Production-grade UI
cat ~/.claude/skills/frontend-design/SKILL.md
```

**Key principles from web-animation-design (by Linear's designer):**
- `ease-out` for enter animations (150-250ms)
- `ease-in` for exit animations
- `ease` for hover states (150ms)
- NO LARGE TRAVEL DISTANCES EVER
- Animations should feel inevitable, not flashy
- Subtle is better than noticeable

---

## PHASE 3: CONTENT PARITY WITH ADAPTY.IO

### Scrape Real Content Using agent-browser

```bash
# Get homepage content
agent-browser open "https://adapty.io"
agent-browser text > /tmp/adapty-homepage-content.txt
agent-browser screenshot --output /tmp/adapty-homepage.png

# Scroll through and capture all sections
agent-browser scroll 1000
agent-browser screenshot --output /tmp/adapty-section2.png
agent-browser scroll 1000
agent-browser screenshot --output /tmp/adapty-section3.png
# Continue for all sections...

# Get testimonials specifically
agent-browser open "https://adapty.io"
agent-browser scroll 3000
agent-browser screenshot --output /tmp/adapty-testimonials.png
```

**FULL CONTENT PARITY REQUIREMENTS:**
- Same testimonials (ALL of them - exact quotes, names, companies, photos)
- Same feature descriptions (exact wording matters)
- Same stats/numbers displayed
- Same integration list
- Same pricing structure info
- Same FAQ content and answers
- Same everything - we need their content in our design

---

## PHASE 4: IMPLEMENTATION

### Project Location
```
/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/apps/marketing/
```

### Key Files to Modify

```
app/page.tsx                                    # Main page composition
components/sections/hero.tsx                    # Hero section
components/sections/features-linear-style.tsx   # Feature sections + modals
components/sections/testimonials-clean.tsx      # Testimonials
components/sections/roles.tsx                   # Role cards
components/sections/stats-orbital.tsx           # Stats section
components/sections/faq-cards.tsx               # FAQ
components/sections/logos-linear.tsx            # Logo bar
components/navbar.tsx                           # Navigation
components/layout/footer.tsx                    # Footer
```

### Design System Values (Document What You Extract)

```tsx
// Border radius system - extract exact values from videos
const RADIUS = {
  sm: '?px',      // small elements, inputs
  md: '?px',      // buttons, tags
  lg: '?px',      // cards
  xl: '?px',      // modals, large cards
};

// Spacing system
const SPACING = {
  section: '?px',        // between major sections
  sectionMobile: '?px',
  cardPadding: '?px',
  gap: '?px',            // grid gaps
};

// Animation system - from web-animation-design skill
const ANIMATION = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  easeOut: [0.16, 1, 0.3, 1],   // for enter
  easeIn: [0.4, 0, 1, 1],        // for exit
  ease: [0.4, 0, 0.2, 1],        // for hover
};
```

### T-Separator Pattern (From Videos)

Create this layout pattern seen in Linear:

```tsx
// T-separator: main feature on top, two features below with vertical divider
function FeatureSectionWithTSeparator({
  mainFeature,    // top: full width image + description
  leftFeature,    // bottom left
  rightFeature,   // bottom right
}) {
  return (
    <div>
      {/* Main feature - full width */}
      <div className="pb-8 border-b border-border/20">
        {mainFeature}
      </div>

      {/* Two features below with vertical divider */}
      <div className="grid grid-cols-2">
        <div className="pt-8 pr-8 border-r border-border/20">
          {leftFeature}
        </div>
        <div className="pt-8 pl-8">
          {rightFeature}
        </div>
      </div>
    </div>
  );
}
```

### Modal Requirements (Match Linear Exactly)

```tsx
// Modal animation - subtle, fast, no travel
const modalAnimation = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
};

// Backdrop - subtle blur, not too dark
className="bg-black/40 backdrop-blur-sm"

// Modal - clean, constrained width
className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-lg"
```

### Micro-interactions (SUBTLE ONLY)

```tsx
// Card hover - MINIMAL, just 2px lift
<motion.div
  whileHover={{ y: -2 }}
  transition={{ duration: 0.15, ease: 'easeOut' }}
>

// Button hover - color change only, NO movement
<button className="transition-colors duration-150 hover:bg-muted">

// NEVER:
// - translateY more than 2-3px
// - scale more than 1.02
// - duration more than 200ms
// - any "bouncy" or "playful" animations
```

---

## PHASE 5: SPAWN SUB-AGENTS FOR PARALLEL WORK

```
Agent 1: Video Analysis Expert
- Watch all 3 videos thoroughly
- Document every design value (spacing, radius, colors, timing)
- Create design-system.md with exact specifications

Agent 2: Content Scraper
- Use agent-browser to get ALL content from adapty.io
- Testimonials, features, stats, FAQ - everything
- Organize into structured content files

Agent 3: Typography & Spacing
- Apply consistent typography across all sections
- Fix section spacing to match Linear values
- Enforce 3-line max text rule everywhere

Agent 4: Modals & Animations
- Redesign all modals to Linear quality
- Add micro-interactions (subtle only!)
- Implement proper animation timing from skill

Agent 5: Separators & Layout Structure
- Create T-separator pattern components
- Apply consistent border-radius system
- Fix grid layouts and gaps

Agent 6: Mobile Responsiveness
- Test everything on 390px width
- No cropping, no overflow, no horizontal scroll
- Touch targets 44px minimum
```

---

## SUCCESS CRITERIA FOR ROUND 1

When complete, the site must:

1. **Feel expensive** - Every detail considered, nothing arbitrary
2. **No text blocks > 3 lines** - Concise, scannable copy everywhere
3. **Consistent corner radiuses** - Same values reused throughout
4. **Subtle separators** - T-patterns where appropriate, barely visible
5. **Perfect modals** - Linear-quality open/close, proper content layout
6. **Micro-animations** - Present but NEVER flashy or noticeable
7. **Content parity** - Exact same content as adapty.io
8. **Mobile perfect** - No issues on small screens
9. **Animation timing** - Per web-animation-design skill guidelines

---

## REQUIRED DOCUMENTATION

Before finishing Round 1, create these files in the project:

1. `linear-analysis/DESIGN-SYSTEM.md` - All values extracted from videos
2. `linear-analysis/CONTENT-INVENTORY.md` - All content from adapty.io
3. `linear-analysis/CHANGES-MADE.md` - What you implemented and why

These will be reviewed for Round 2.

---

## START NOW

1. Watch all 3 videos - study every frame
2. Read the skills files
3. Scrape adapty.io content with agent-browser
4. Spawn sub-agents for parallel work
5. Implement everything with obsessive attention to detail
6. Document your work

**Make it IMPRESSIVE. Make it feel INEVITABLE. Make it LINEAR-quality.**

This is Round 1 of 3. Go deep. Be obsessive. Every pixel matters.
