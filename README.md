<p align="center">
  <img src="https://raw.githubusercontent.com/kirniy/adapty-webdev/main/.github/adapty-logo-color.svg" alt="Adapty" width="200">
</p>

# ADAPTY Website Redesign Project

<p align="center">
  <strong>A systematic, A/B-tested approach to redesigning the ADAPTY marketing website</strong>
</p>

<p align="center">
  <a href="https://adapty-oatmeal-jan14-2026.vercel.app"><img src="https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=vercel" alt="Live Demo"></a>
  <a href="#"><img src="https://img.shields.io/badge/next.js-15.5-black?style=for-the-badge&logo=next.js" alt="Next.js 15"></a>
  <a href="#"><img src="https://img.shields.io/badge/react-19-61dafb?style=for-the-badge&logo=react" alt="React 19"></a>
  <a href="#"><img src="https://img.shields.io/badge/tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS 4"></a>
  <a href="#"><img src="https://img.shields.io/badge/typescript-5.0-3178c6?style=for-the-badge&logo=typescript" alt="TypeScript"></a>
</p>

<p align="center">
  <a href="#-live-prototypes">Live Prototypes</a> •
  <a href="#-features">Features</a> •
  <a href="#-current-status">Status</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-documentation">Docs</a>
</p>

---

## 🎯 Live Prototypes

### Active Prototypes

| Prototype | URL | Status | Quality | Description |
|-----------|-----|--------|---------|-------------|
| **Oatmeal** | [adapty-oatmeal-jan14-2026.vercel.app](https://adapty-oatmeal-jan14-2026.vercel.app) | 🟢 Active | 8/10 | Current production prototype with debug menu, mega-menu header, 18 section variants |
| **Aura Build** | [adapty-aura-build-jan-14-2026.vercel.app](https://adapty-aura-build-jan-14-2026.vercel.app) | 🟡 Optimized | 7/10 | Performance-tuned with blueprint grid, premium micro-interactions |
| **Phase A** | [adapty-prototype.vercel.app](https://adapty-prototype.vercel.app) | 🟢 Deployed | 7/10 | 5-way design system switcher, vanilla Tailwind approach |

### Legacy Prototypes

| Prototype | Status | Quality | Notes |
|-----------|--------|---------|-------|
| **Phase B (shadcn/ui)** | ⚠️ Evaluated | 4/10 | Not recommended - generic, over-engineered for marketing sites |
| **Achromatic** | 🔄 In Development | TBD | Premium SaaS starter-kit integration, debug menu system |

---

## ✨ Features

### Current Capabilities

<table>
  <tr>
    <td>
      <h3>🎨 Debug Menu System</h3>
      <p>Floating panel with 18+ section variants. Switch between design approaches in real-time. Grid overlays, header variants, section styles - all toggleable with localStorage persistence.</p>
    </td>
    <td>
      <h3>📐 Mega-Menu Headers</h3>
      <p>Full-featured navigation with 4 dropdown menus: Product (17 items), Cases (11 studies), Resources (5 sections), Docs (SDK grid). Content parity with adapty.io.</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🎭 18 Section Variants</h3>
      <p>Each section has multiple design approaches: Hero (centered, minimal, split), TrustedBy (marquee, grid, minimal), Features (colorful, muted, monochrome), Stats (cards, inline, graph, floating), and more.</p>
    </td>
    <td>
      <h3>⚡ Performance Optimized</h3>
      <p>optimizePackageImports for motion/react + @phosphor-icons, dynamic imports, React.cache() patterns, zero-flash theme switching, modern image formats.</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🎨 Design System Tokens</h3>
      <p>5 complete design systems with 100+ CSS custom properties each. Olive palette + Adapty purple (#6720FF) accent. Inter typography throughout.</p>
    </td>
    <td>
      <h3>📱 Production Ready</h3>
      <p>Error boundaries, 404 pages, loading states, SEO metadata, security headers, responsive design, accessibility features.</p>
    </td>
  </tr>
</table>

### Debug Menu Capabilities

The debug menu system allows real-time switching of:

- **Grid Background**: cursor-tracking, slow-drift, static, off + Achromatic-style guide lines
- **Header Variants**: Pill-navbar (Oatmeal), Mega-menu (Aura port)
- **Hero**: centered-demo, minimal-text, split-left
- **TrustedBy**: marquee, static-grid, static-minimal
- **CoreFeatures**: colorful, muted, monochrome
- **Stats**: cards, inline, graph, floating (with spring physics, parallax)
- **Testimonials**: editorial, wall, carousel
- **RoleCards**: cards, tabs, horizontal
- **Integrations**: static-grid, marquee, categorized

---

## 📊 Current Status

### Project Phase: Block-by-Block Iteration

**Current Focus**: Header enhancement and content parity with adapty.io navigation

**Progress**: ~40% complete, targeting 60-80% in next iteration

| Component | Status | Progress |
|-----------|--------|----------|
| **Content** | 🟡 In Progress | 70% - Mega-menus filled, 17 product items |
| **Styling** | 🟡 In Progress | 50% - Fonts (Inter), purple accent, guide lines |
| **Polish** | 🟡 In Progress | 30% - Micro-interactions, contrast improvements |
| **Sections** | 🟢 Complete | 80% - 18 variants implemented |
| **Responsive** | 🟡 In Progress | 50% - Desktop ready, mobile header pending |

### Completed Phases

| Phase | Status | Result |
|-------|--------|--------|
| **Reference Analysis** | ✅ Complete | 5 sites extracted (Linear, Attio, Polar, Vercel, Clerk) |
| **Design System Tokens** | ✅ Complete | 5 DS variants with 100+ CSS custom properties each |
| **Phase A Prototype** | ✅ Complete | 5-way theme switcher deployed, vanilla Tailwind approach validated |
| **Phase B Research** | ✅ Complete | shadcn/ui evaluated, not recommended for marketing sites |
| **Oatmeal Integration** | ✅ Complete | Template ported, debug menu added, mega-menu header integrated |

### Key Learnings

- ✅ **Vanilla Tailwind > shadcn/ui** for marketing sites (pixel-perfect control)
- ✅ **Debug menu system** enables rapid iteration and stakeholder feedback
- ✅ **optimizePackageImports** critical for barrel import performance
- ✅ **Server Components** require Client wrapper pattern for interactive features
- ✅ **Content parity** essential - adapty.io has 17 product items vs initial 9

---

## 🎨 Design Systems

### The Five Variants

Each design system is inspired by a best-in-class SaaS website and implemented with pixel-perfect accuracy.

| | Design System | Inspiration | Theme | Background | Key Characteristics |
|:---:|:---|:---|:---:|:---:|:---|
| **1** | **Linear** | [linear.app](https://linear.app) | 🌙 Dark | `#08090a` | Micro-interactions, layered backgrounds, 67+ animations |
| **2** | **Attio** | [attio.com](https://attio.com) | ☀️ Light | `#ffffff` | Editorial typography, LAB colors, ghost buttons |
| **3** | **Polar** | [polar.sh](https://polar.sh) | 🌙 Dark | `#171719` | Ultra-minimal, fast 150ms animations, code-focused |
| **4** | **Vercel** | [vercel.com](https://vercel.com) | 🌑 Black | `#000000` | Compound shadows, bouncy easing, signature gradients |
| **5** | **Clerk** | [clerk.com](https://clerk.com) | ☀️ Light | `#f7f7f8` | Warm gray, pill buttons, purple accents, Suisse font |

### Current Production Design (Oatmeal-based)

- **Palette**: Olive greens/grays + Adapty purple (#6720FF) accent
- **Typography**: Inter (Instrument Serif removed per feedback)
- **Grid**: Slow-drift animated background (cursor-tracking disabled)
- **Style**: Editorial elegance, sophisticated minimalism

### Token Architecture

```css
/* Example: Button tokens across design systems */

/* DS1 (Linear) */
--button-radius: 8px;
--button-padding-x: 14px;
--ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);

/* DS4 (Vercel) */
--button-radius: 6px;
--button-padding-x: 16px;
--ease-default: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy! */

/* DS5 (Clerk) */
--button-radius: 24px; /* Pill shape */
--button-padding-x: 20px;
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/kirniy/adapty-webdev.git
cd adapty-webdev

# Navigate to active prototype (Oatmeal)
cd prototypes/oatmeal

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

| Command | Description |
|:--------|:------------|
| `pnpm dev` | Start development server at `localhost:3000` |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript compiler check |

### Debug Menu Usage

1. Open the live prototype: https://adapty-oatmeal-jan14-2026.vercel.app
2. Look for the floating debug panel in the bottom-right corner
3. Toggle grid variants, header styles, and section designs
4. Preferences are saved to localStorage automatically

---

## 🏗️ Architecture

### Project Structure

```
adapty-webdev/
│
├── 📁 prototypes/
│   ├── 📁 oatmeal/                    # 🟢 Active prototype (Oatmeal-based)
│   │   ├── src/
│   │   │   ├── app/                   # Next.js App Router
│   │   │   ├── components/
│   │   │   │   ├── debug/             # Debug menu system
│   │   │   │   ├── effects/           # AnimatedGrid, FlickeringGrid, etc.
│   │   │   │   ├── layout/            # Header (mega-menu), Footer
│   │   │   │   └── sections/         # 14 sections with variants
│   │   │   └── lib/
│   │   │       ├── content.ts        # All content/copy
│   │   │       └── debug-context.tsx  # Debug state management
│   │   └── public/                    # Assets, logos, images
│   │
│   ├── 📁 aura-build/                 # 🟡 Optimized prototype
│   ├── 📁 adapty-prototype/           # 🟢 Phase A (5-way switcher)
│   ├── 📁 achromatic-proto/           # 🔄 New integration
│   └── 📁 phase-b-shadcn/             # ⚠️ Evaluated (not recommended)
│
├── 📁 design-systems/                 # DS specifications
│   ├── ds-1-linear-inspired/
│   ├── ds-2-attio-inspired/
│   ├── ds-3-polar-minimal/
│   ├── ds-4-vercel-bold/
│   └── ds-5-hybrid-premium/
│
├── 📁 references/                     # Site analysis data
│   ├── linear/
│   ├── attio/
│   ├── polar/
│   ├── vercel/
│   ├── clerk/
│   └── synthesis/                     # Cross-site insights
│
├── 📁 skeleton/                       # Shared content specification
│   └── SKELETON.md                    # 14-section homepage spec
│
├── 📁 templates/                      # Template integrations
│   ├── achromatic-template/           # Premium SaaS starter-kit
│   └── oatmeal-olive-instrument/      # Original Oatmeal template
│
├── 📁 docs/                           # Documentation
├── 📁 reports/                        # Audit reports
├── 📁 research/                       # Phase B research
├── 📁 messages/                       # Stakeholder communications
│
├── CLAUDE.md                          # AI assistant context (living doc)
├── CHANGELOG.md                       # Version history
└── README.md                          # You are here!
```

### Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
      <br>Next.js 15
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
      <br>React 19
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=typescript" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
      <br>Tailwind 4
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
      <br>Vercel
    </td>
  </tr>
</table>

**Additional Libraries:**
- `motion/react` - Animations (with optimizePackageImports)
- `@phosphor-icons/react` - Icon library (with optimizePackageImports)
- `next-themes` - Theme management

### Component Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                           RootLayout                                 │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    DebugMenuProvider                           │  │
│  │  ┌─────────────────────────────────────────────────────────┐  │  │
│  │  │                     PageFrame                            │  │  │
│  │  │  ┌─────────────────────────────────────────────────────┐ │  │  │
│  │  │  │ Header (Pill-navbar or Mega-menu)                    │ │  │  │
│  │  │  ├─────────────────────────────────────────────────────┤ │  │  │
│  │  │  │ Hero (variant: centered/minimal/split)              │ │  │  │
│  │  │  │ TrustedBy (variant: marquee/grid/minimal)           │ │  │  │
│  │  │  │ CoreFeatures (variant: colorful/muted/monochrome)   │ │  │  │
│  │  │  │ Stats (variant: cards/inline/graph/floating)        │ │  │  │
│  │  │  │ Testimonials (variant: editorial/wall/carousel)     │ │  │  │
│  │  │  │ RoleCards (variant: cards/tabs/horizontal)          │ │  │  │
│  │  │  │ Integrations (variant: grid/marquee/categorized)     │ │  │  │
│  │  │  │ ... (14 sections total)                             │ │  │  │
│  │  │  ├─────────────────────────────────────────────────────┤ │  │  │
│  │  │  │ Footer                                               │ │  │  │
│  │  │  └─────────────────────────────────────────────────────┘ │  │  │
│  │  │  ┌─────────────────────────────────────────────────────┐ │  │  │
│  │  │  │ DebugMenu (floating panel)                          │ │  │  │
│  │  │  └─────────────────────────────────────────────────────┘ │  │  │
│  │  └─────────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📖 Documentation

| Document | Description | Location |
|:---------|:------------|:---------|
| **CLAUDE.md** | Living navigation doc, current state, directory routers | `/CLAUDE.md` |
| **Changelog** | All releases and changes | `/CHANGELOG.md` |
| **DS Specifications** | Complete design system specs with tokens | `/design-systems/*/` |
| **Skeleton Spec** | 14-section homepage specification | `/skeleton/SKELETON.md` |
| **Phase B Research** | UI library comparison and recommendations | `/research/` |
| **Audit Reports** | DS wireframe comparison audits | `/reports/audits/` |
| **Daily Reports** | Stakeholder communications | `/messages/07-daily-report-jan15/` |

---

## 🧪 Testing Methodology

### Phase A: Design System Testing ✅

Tested 5 design systems on **vanilla Tailwind CSS** (no UI libraries) to isolate visual impact.

**Result**: Vanilla Tailwind approach validated. shadcn/ui adds friction for marketing sites.

### Phase B: UI Library Testing ⚠️

Evaluated shadcn/ui with winning design system.

**Result**: Not recommended - generic look, over-engineered for landing pages. Marketing sites need pixel-perfect control.

### Current Approach: Template Integration ✅

Using premium templates (Oatmeal, Achromatic) as foundation:
- **Oatmeal**: Marketing pages, landing sections
- **Achromatic**: Infrastructure (docs, blog, auth, dashboard)

**Method**: Debug menu system enables rapid iteration and stakeholder feedback without rebuilding.

---

## 🔒 Security & Performance

### Security Headers

```javascript
// Implemented in next.config.js
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Performance Optimizations

- ✅ **optimizePackageImports** for motion/react + @phosphor-icons (barrel import elimination)
- ✅ **Dynamic imports** for heavy components (TheInfiniteGrid wrapper)
- ✅ **React.cache()** for server-side data fetching
- ✅ **Modern image formats** (AVIF, WebP)
- ✅ **Font optimization** with `display: swap`
- ✅ **Zero-flash theme switching** (inline script)
- ✅ **Tree-shaking** for icon libraries

### Recent Optimizations (January 2026)

- **Bundle size reduction**: optimizePackageImports eliminated barrel import overhead
- **Server performance**: React.cache() patterns for parallel fetching
- **Visual polish**: Grain, shine, elevate, glow effects
- **Grid performance**: Optimized AnimatedGrid with reduced re-renders

---

## 🎯 Recent Updates (January 2026)

### January 15, 2026

- ✅ **Debug menu system** with 18 section variants
- ✅ **Mega-menu header** ported from Aura with 4 dropdowns
- ✅ **Content parity**: 17 product items (was 9), 11 case studies
- ✅ **Grid variants**: cursor-tracking disabled, slow-drift default, guide lines added
- ✅ **Typography**: Instrument Serif removed, Inter throughout
- ✅ **Color palette**: Adapty purple (#6720FF) integrated in OKLCH
- ✅ **Achromatic integration**: Premium SaaS starter-kit with debug menu

### January 14, 2026

- ✅ **Aura mega-menu header** ported to Oatmeal
- ✅ **Performance optimizations**: optimizePackageImports, dynamic imports
- ✅ **Visual polish**: Testimonials, CaseStudies, Integrations redesigned
- ✅ **AnimatedGrid**: Site-wide background via PageFrame

### January 13, 2026

- ✅ **Phase B evaluation**: shadcn/ui assessed, not recommended
- ✅ **Oatmeal template**: Purchased and integrated
- ✅ **14 sections**: All homepage sections implemented

---

## 🤝 Contributing

This is a proprietary project for ADAPTY. For internal contributors:

### Development Guidelines

- Follow existing code style and patterns
- Use CSS custom properties for all styling
- Test with debug menu across all variants
- Update relevant documentation
- **NO EMOJIS** - Zero tolerance policy (see CLAUDE.md)

### Git Workflow

- Use conventional commit messages
- Test locally before pushing
- Update CHANGELOG.md for significant changes
- Update CLAUDE.md for architectural decisions

---

## 📜 License

This project is proprietary to ADAPTY. All rights reserved.

---

## 👤 Author

<table>
  <tr>
    <td align="center">
      <strong>Kirill Kholodenko</strong>
      <br>
      AI-Native Web Developer @ ADAPTY
      <br><br>
      <a href="https://github.com/kirniy">
        <img src="https://img.shields.io/badge/GitHub-kirniy-181717?style=flat-square&logo=github" alt="GitHub">
      </a>
    </td>
  </tr>
</table>

---

<p align="center">
  <sub>Built with precision and <a href="https://claude.ai">Claude</a></sub>
</p>

<p align="center">
  <a href="#adapty-website-redesign-project">↑ Back to top</a>
</p>
