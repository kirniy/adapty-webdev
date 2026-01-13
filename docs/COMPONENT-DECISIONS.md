# Component Decisions - proto-ds1-linear

This document maps all 14 SKELETON.md sections to specific shadcn/ui components with rationale.

**Discovery Date**: 2026-01-13
**Design System**: DS1 Linear (Dark, premium, 3D depth)

---

## Section-by-Section Component Mapping

### 1. Header / Navigation

**shadcn Components:**
- `navigation-menu` - Core nav structure with built-in dropdown support
- `dropdown-menu` - Product/Solutions/Resources mega-dropdowns
- `button` - Log in (ghost) + Sign up (primary)

**Custom Components Needed:**
- Logo wrapper with home link

**Rationale:** Navigation-menu provides accessible keyboard navigation and proper ARIA attributes. Dropdown-menu handles mega-menus elegantly with animation support.

**DS1 Linear Style Notes:**
- Sticky header with `backdrop-blur-lg`
- Border-b with subtle white/5 separator
- 8px button radius

---

### 2. Hero Section

**shadcn Components:**
- `badge` - "Ebook: $100K playbook" promotional badge
- `input` - Email input field
- `button` - "Get started" primary CTA
- `button-group` - Email + button combination (optional)

**Custom Components Needed:**
- Hero layout wrapper with gradient background
- Hero image with floating perspective effect

**Rationale:** Badge provides semantic markup for promotional content. Input + Button can be combined with button-group for tight visual coupling.

**DS1 Linear Style Notes:**
- Gradient radial from accent color (#5e6ad2)
- -0.04em letter-spacing on headline
- Floating card effect with layered shadows

---

### 3. Trusted By Section

**shadcn Components:**
- None directly needed - simple grid layout

**Custom Components Needed:**
- Logo grid component with responsive layout

**Rationale:** Clean grid layout is more elegant than marquee. Easier to maintain and style per DS.

**DS1 Linear Style Notes:**
- Grayscale logos with hover:brightness-100
- Grid layout: 7 logos in a row (responsive)
- Subtle opacity transition on hover

---

### 4. Feature Sections (6 total)

**shadcn Components:**
- `card` (CardHeader, CardTitle, CardDescription, CardContent) - Base container
- `badge` - Metric badges (+23%, +18%, etc.)
- `tabs` - For feature comparisons (if needed)

**Custom Components Needed:**
- Feature illustration containers
- Metric display cards

**Rationale:** Card provides consistent container styling. Badge handles metric callouts. Each of 6 features uses same base structure with different content.

**DS1 Linear Style Notes:**
- 30px card border-radius
- White ring border (box-shadow: 0 0 0 1px rgba(255,255,255,0.1))
- Hover: translateY(-4px) with glow effect

---

### 5. Integrations Section

**shadcn Components:**
- `card` (optional) - Container for logos

**Custom Components Needed:**
- Multi-row logo grid with responsive layout

**Rationale:** Clean grid layout matching Trusted By section. Consistent approach.

**DS1 Linear Style Notes:**
- Multi-row grid for 24 integration logos
- Grayscale → color on hover
- Logo size: 32-40px height

---

### 6. Role Cards Section

**shadcn Components:**
- `card` - Role card containers
- `badge` - Feature pills (Native SDKs, Server-side API, etc.)
- `separator` - Visual dividers if needed

**Custom Components Needed:**
- Icon components (Code bracket, Chart, Dashboard)

**Rationale:** Cards provide base structure. Badges work well for feature tags. 3-column grid layout.

**DS1 Linear Style Notes:**
- Icon with accent color glow
- Card background: rgba(255,255,255,0.02)
- Hover: border-white/20 transition

---

### 7. Stats Section

**shadcn Components:**
- None directly applicable for animated numbers

**Custom Components Needed:**
- `NumberTicker` - Animated number counter (NOT in shadcn core)
- Consider: Custom implementation with Framer Motion

**Rationale:** shadcn lacks number animation. Need custom component or library like `react-countup`.

**DS1 Linear Style Notes:**
- Large display font (72px+)
- Gradient text effect on numbers
- Subtle blur glow behind stats

---

### 8. SDK Code Snippet Section

**shadcn Components:**
- `tabs` (TabsList, TabsTrigger, TabsContent) - Platform switcher

**Custom Components Needed:**
- `CodeBlock` - Syntax highlighted code display (NOT in shadcn)
- Platform icon badges

**Rationale:** Tabs handle platform switching. Code highlighting needs custom implementation with Prism/Shiki.

**DS1 Linear Style Notes:**
- Code block with gradient border
- Tab triggers with underline indicator
- Accent color for syntax keywords

---

### 9. Testimonials Carousel

**shadcn Components:**
- `carousel` (Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext) - Main carousel
- `avatar` (Avatar, AvatarImage, AvatarFallback) - Author photos
- `card` - Quote containers

**Rationale:** Carousel provides Embla-based slider with accessibility. Avatar handles author images with fallbacks.

**DS1 Linear Style Notes:**
- Quote icon with accent color
- Card with subtle gradient overlay
- Navigation arrows: ghost buttons with white/20

---

### 10. G2 Badges Section

**shadcn Components:**
- `badge` - Optional text badges

**Custom Components Needed:**
- G2 badge images (likely just img elements)

**Rationale:** G2 badges are typically images, not styled components. Simple grid layout.

**DS1 Linear Style Notes:**
- Horizontal flex with gap-8
- Grayscale with subtle hover:brightness

---

### 11. Case Studies Section

**shadcn Components:**
- `card` - Case study cards
- `badge` - Metric badges (+50%, 5x, etc.)
- `avatar` - App icons

**Custom Components Needed:**
- None beyond standard components

**Rationale:** Cards provide consistent containers. Badge handles metric callouts. 3x3 responsive grid.

**DS1 Linear Style Notes:**
- Compact cards with 20px padding
- Metric badge: green/emerald for positive
- Hover: scale(1.02) with shadow lift

---

### 12. Enterprise Section

**shadcn Components:**
- `badge` - Feature badges (SOC 2, GDPR, etc.)
- `button` - "Contact sales" CTA

**Custom Components Needed:**
- Shield/security icon component

**Rationale:** Badges work well for compliance/feature tags. Simple section layout.

**DS1 Linear Style Notes:**
- Badge variant: outline with accent border
- Button: secondary style
- Background: subtle gradient mesh

---

### 13. Final CTA Section

**shadcn Components:**
- `input` - Email input
- `button` - "Start for free" primary CTA
- `button` (link variant) - "Or schedule a demo" secondary

**Custom Components Needed:**
- Dark section wrapper

**Rationale:** Reuse hero CTA pattern. Button link variant for secondary action.

**DS1 Linear Style Notes:**
- Background: gradient darker than page
- Input: larger size (h-12)
- CTA button: glow effect on hover

---

### 14. Footer

**shadcn Components:**
- `separator` - Column dividers
- `button` (link variant) - Footer links

**Custom Components Needed:**
- Social icon components
- Multi-column grid layout

**Rationale:** Simple link lists don't need shadcn components. Custom grid layout.

**DS1 Linear Style Notes:**
- Text: muted-foreground (60% opacity)
- Hover: white with transition
- Social icons: 20px, ghost hover

---

## Component Installation Summary

### Already Installed (9)
- [x] button
- [x] card
- [x] input
- [x] badge
- [x] separator
- [x] tabs
- [x] navigation-menu
- [x] dropdown-menu
- [x] avatar

### Need to Install (4)
- [ ] carousel - For testimonials
- [ ] tooltip - For icon hints
- [ ] popover - For mega-menu content (optional)
- [ ] scroll-area - For long dropdowns

### Custom Components to Build (4)
1. **Marquee** - Infinite scroll logos
2. **NumberTicker** - Animated stats counter
3. **CodeBlock** - Syntax highlighted code
4. **SectionWrapper** - Consistent section padding/layout

---

## Next Steps

1. Install remaining shadcn components
2. Build 4 custom components
3. Implement sections in order 1→14
4. Apply DS1 Linear tokens throughout
5. Add hover animations and micro-interactions
