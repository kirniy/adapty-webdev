<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kirniy/adapty-webdev/main/.github/adapty-logo-white.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/kirniy/adapty-webdev/main/.github/adapty-logo-color.svg">
    <img alt="Adapty Logo" src="https://raw.githubusercontent.com/kirniy/adapty-webdev/main/.github/adapty-logo-color.svg" width="200">
  </picture>
</p>

# Website Redesign Project

<p align="center">
  <strong>A systematic, A/B-tested approach to redesigning the ADAPTY marketing website</strong>
</p>

<p align="center">
  <a href="https://adapty-prototype.vercel.app"><img src="https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=vercel" alt="Live Demo"></a>
  <a href="#"><img src="https://img.shields.io/badge/next.js-15.5-black?style=for-the-badge&logo=next.js" alt="Next.js 15"></a>
  <a href="#"><img src="https://img.shields.io/badge/react-19-61dafb?style=for-the-badge&logo=react" alt="React 19"></a>
  <a href="#"><img src="https://img.shields.io/badge/tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS 4"></a>
  <a href="#"><img src="https://img.shields.io/badge/typescript-5.0-3178c6?style=for-the-badge&logo=typescript" alt="TypeScript"></a>
</p>

<p align="center">
  <a href="#-live-demo">Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-design-systems">Design Systems</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-documentation">Docs</a>
</p>

---

## 🎯 Live Demo

<p align="center">
  <a href="https://adapty-prototype.vercel.app">
    <img src="https://img.shields.io/badge/▶_OPEN_LIVE_DEMO-000000?style=for-the-badge&logoColor=white&logo=vercel" alt="Open Demo" height="50">
  </a>
</p>

<table>
  <tr>
    <td align="center" width="20%">
      <a href="https://adapty-prototype.vercel.app?ds=ds1">
        <img src="https://img.shields.io/badge/DS1-Linear-08090a?style=flat-square" alt="DS1">
        <br><strong>Linear</strong>
        <br><sub>Dark • Premium</sub>
      </a>
    </td>
    <td align="center" width="20%">
      <a href="https://adapty-prototype.vercel.app?ds=ds2">
        <img src="https://img.shields.io/badge/DS2-Attio-ffffff?style=flat-square" alt="DS2">
        <br><strong>Attio</strong>
        <br><sub>Light • Editorial</sub>
      </a>
    </td>
    <td align="center" width="20%">
      <a href="https://adapty-prototype.vercel.app?ds=ds3">
        <img src="https://img.shields.io/badge/DS3-Polar-171719?style=flat-square" alt="DS3">
        <br><strong>Polar</strong>
        <br><sub>Dark • Minimal</sub>
      </a>
    </td>
    <td align="center" width="20%">
      <a href="https://adapty-prototype.vercel.app?ds=ds4">
        <img src="https://img.shields.io/badge/DS4-Vercel-000000?style=flat-square" alt="DS4">
        <br><strong>Vercel</strong>
        <br><sub>Black • Bold</sub>
      </a>
    </td>
    <td align="center" width="20%">
      <a href="https://adapty-prototype.vercel.app?ds=ds5">
        <img src="https://img.shields.io/badge/DS5-Clerk-f7f7f8?style=flat-square" alt="DS5">
        <br><strong>Clerk</strong>
        <br><sub>Light • Warm</sub>
      </a>
    </td>
  </tr>
</table>

> 💡 **Tip**: Add `?ds=ds1` through `?ds=ds5` to the URL to switch design systems, or use the dropdown in the top-right corner.

---

## ✨ Features

<table>
  <tr>
    <td>
      <h3>🎨 5 Complete Design Systems</h3>
      <p>Each with 100+ CSS tokens covering colors, typography, spacing, shadows, and animations. Switch instantly between themes.</p>
    </td>
    <td>
      <h3>⚡ Real-time Theme Switching</h3>
      <p>Zero-flash theme switching via URL params, dropdown, or localStorage. Persists across sessions.</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>📱 Fully Responsive</h3>
      <p>Mobile-first design with breakpoints at 640px, 768px, 1024px, and 1280px. Touch-optimized interactions.</p>
    </td>
    <td>
      <h3>🔒 Production Ready</h3>
      <p>Error boundaries, 404 pages, loading states, SEO metadata, security headers, and performance optimizations.</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🧩 Component Library</h3>
      <p>14 section components + UI primitives (Button, Container, Section) all using CSS custom properties.</p>
    </td>
    <td>
      <h3>📊 A/B Test Ready</h3>
      <p>Built for systematic comparison. Same content, different styling. Easy to measure and compare.</p>
    </td>
  </tr>
</table>

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

### Universal Patterns

All 5 reference sites share these design decisions:

```
┌─────────────────────────────────────────────────────────────┐
│  UNIVERSAL DESIGN PATTERNS (discovered through analysis)    │
├─────────────────────────────────────────────────────────────┤
│  📐 Spacing      4px base unit, 8px standard gaps           │
│  🔤 Typography   Geometric sans-serif (Inter, Geist)        │
│  📝 Headings     Negative letter-spacing (-0.02 to -0.04em) │
│  🎨 Accents      Blue-purple spectrum (#6366f1 family)      │
│  ⬜ Radius       6-12px for buttons, 8-16px for cards       │
│  ⏱️  Animation    200-300ms duration, ease-out timing       │
└─────────────────────────────────────────────────────────────┘
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

# Navigate to prototype
cd prototypes/adapty-prototype

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

### Theme Switching

```bash
# Via URL parameter
http://localhost:3000?ds=ds1  # Linear (dark)
http://localhost:3000?ds=ds2  # Attio (light)
http://localhost:3000?ds=ds3  # Polar (dark)
http://localhost:3000?ds=ds4  # Vercel (black)
http://localhost:3000?ds=ds5  # Clerk (light) - default
```

---

## 🏗️ Architecture

### Project Structure

```
adapty-webdev/
│
├── 📁 prototypes/
│   └── 📁 adapty-prototype/          # Main Next.js 15 application
│       ├── 📁 src/
│       │   ├── 📁 app/               # App Router pages
│       │   │   ├── layout.tsx        # Root layout + fonts + metadata
│       │   │   ├── page.tsx          # Homepage
│       │   │   ├── error.tsx         # Error boundary
│       │   │   ├── not-found.tsx     # 404 page
│       │   │   └── loading.tsx       # Loading skeleton
│       │   │
│       │   ├── 📁 components/
│       │   │   ├── DynamicPage.tsx   # Theme-aware section orchestrator
│       │   │   ├── ThemeProvider.tsx # next-themes wrapper
│       │   │   ├── ThemeSwitcher.tsx # DS dropdown selector
│       │   │   ├── 📁 layout/        # Header, Footer
│       │   │   ├── 📁 sections/      # 14 page sections
│       │   │   └── 📁 ui/            # Button, Container, Section
│       │   │
│       │   ├── 📁 config/
│       │   │   ├── content.ts        # All copy/content (683 lines)
│       │   │   └── ds-configs.ts     # DS-specific configurations
│       │   │
│       │   └── 📁 styles/
│       │       └── globals.css       # All tokens + animations (616 lines)
│       │
│       ├── next.config.js            # Next.js + security config
│       └── package.json
│
├── 📁 design-systems/                # DS specifications
│   ├── ds-1-linear-inspired/
│   ├── ds-2-attio-inspired/
│   ├── ds-3-polar-minimal/
│   ├── ds-4-vercel-bold/
│   └── ds-5-hybrid-premium/
│
├── 📁 references/                    # Site analysis data
│   ├── linear/
│   ├── attio/
│   ├── polar/
│   ├── vercel/
│   ├── clerk/
│   └── synthesis/                    # Cross-site insights
│
├── 📁 skeleton/                      # Shared content specification
│   └── SKELETON.md                   # 14-section homepage spec
│
├── 📁 docs/                          # Documentation
├── 📁 reports/                       # Audit reports
├── 📁 research/                      # Phase B research
│
├── CLAUDE.md                         # AI assistant context
├── CHANGELOG.md                      # Version history
└── README.md                         # You are here!
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

### Component Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                           RootLayout                                 │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                       ThemeProvider                            │  │
│  │  ┌─────────────────────────────────────────────────────────┐  │  │
│  │  │                     DynamicPage                          │  │  │
│  │  │  ┌─────────────────────────────────────────────────────┐ │  │  │
│  │  │  │ Header                                               │ │  │  │
│  │  │  ├─────────────────────────────────────────────────────┤ │  │  │
│  │  │  │ Hero          ← DS-aware variant selection          │ │  │  │
│  │  │  │ TrustedBy     ← Reads from CSS tokens               │ │  │  │
│  │  │  │ Features      ← Polymorphic structure               │ │  │  │
│  │  │  │ Stats         ← Uses --color-*, --bg-*              │ │  │  │
│  │  │  │ Testimonials  ← Uses --card-*, --shadow-*           │ │  │  │
│  │  │  │ CaseStudies   ← Uses --radius-*, --border-*         │ │  │  │
│  │  │  │ ...           ← All sections consume tokens          │ │  │  │
│  │  │  ├─────────────────────────────────────────────────────┤ │  │  │
│  │  │  │ Footer                                               │ │  │  │
│  │  │  └─────────────────────────────────────────────────────┘ │  │  │
│  │  └─────────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📊 Project Status

<table>
  <tr>
    <th>Phase</th>
    <th>Status</th>
    <th>Progress</th>
    <th>Details</th>
  </tr>
  <tr>
    <td>📚 Reference Analysis</td>
    <td><img src="https://img.shields.io/badge/Complete-success?style=flat-square" alt="Complete"></td>
    <td>████████████ 100%</td>
    <td>5 sites extracted (Linear, Attio, Polar, Vercel, Clerk)</td>
  </tr>
  <tr>
    <td>🎨 Design System Tokens</td>
    <td><img src="https://img.shields.io/badge/Complete-success?style=flat-square" alt="Complete"></td>
    <td>████████████ 100%</td>
    <td>5 DS variants with 100+ CSS custom properties each</td>
  </tr>
  <tr>
    <td>📝 Synthesis Documents</td>
    <td><img src="https://img.shields.io/badge/Complete-success?style=flat-square" alt="Complete"></td>
    <td>████████████ 100%</td>
    <td>Patterns, differentiators, recommendations</td>
  </tr>
  <tr>
    <td>🔬 Phase A Prototype</td>
    <td><img src="https://img.shields.io/badge/Complete-success?style=flat-square" alt="Complete"></td>
    <td>████████████ 100%</td>
    <td>5 DS variants live and deployed</td>
  </tr>
  <tr>
    <td>🔍 Phase B Research</td>
    <td><img src="https://img.shields.io/badge/Complete-success?style=flat-square" alt="Complete"></td>
    <td>████████████ 100%</td>
    <td>UI library evaluation (shadcn/ui selected)</td>
  </tr>
  <tr>
    <td>📦 Phase B Implementation</td>
    <td><img src="https://img.shields.io/badge/Pending-yellow?style=flat-square" alt="Pending"></td>
    <td>░░░░░░░░░░░░ 0%</td>
    <td>After DS winner selection with stakeholder</td>
  </tr>
</table>

---

## 📖 Documentation

| Document | Description | Location |
|:---------|:------------|:---------|
| 📋 **Project CLAUDE.md** | Living navigation doc, current state, directory routers | `/CLAUDE.md` |
| 📊 **Changelog** | All releases and changes | `/CHANGELOG.md` |
| 🎨 **DS Specifications** | Complete design system specs with tokens | `/design-systems/*/` |
| 📐 **ASCII Wireframes** | Reference site analysis (merged PDF) | `/docs/ASCII-Wireframes.pdf` |
| 📝 **Skeleton Spec** | 14-section homepage specification | `/skeleton/SKELETON.md` |
| 🔬 **Phase B Research** | UI library comparison and recommendations | `/research/` |
| 📈 **Audit Reports** | DS wireframe comparison audits | `/reports/audits/` |

---

## 🧪 Testing Methodology

### Phase A: Design System Testing

Test 5 design systems on **vanilla Tailwind CSS** (no UI libraries) to isolate visual impact.

```
┌─────────────────────────────────────────────────────────────┐
│                    SAME CONTENT                              │
│                    SAME COMPONENTS                           │
│                    SAME STRUCTURE                            │
│                         ↓                                    │
├─────────┬─────────┬─────────┬─────────┬─────────────────────┤
│   DS1   │   DS2   │   DS3   │   DS4   │        DS5          │
│ Linear  │  Attio  │  Polar  │ Vercel  │       Clerk         │
│  Dark   │  Light  │  Dark   │  Black  │       Light         │
├─────────┴─────────┴─────────┴─────────┴─────────────────────┤
│                         ↓                                    │
│              MEASURE & COMPARE                               │
│         • Visual appeal (stakeholder review)                 │
│         • Performance (Lighthouse)                           │
│         • Accessibility (WCAG compliance)                    │
└─────────────────────────────────────────────────────────────┘
```

### Phase B: UI Library Testing (Upcoming)

With the winning design system, test different UI library approaches:

- **shadcn/ui** - Copy-paste components with full customization
- **shadcn-blocks** - Pre-built page sections
- **21st.dev** - AI-powered component generation
- **React Bits** - Animated component library
- **Custom mix** - Best of each

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

- ✅ Modern image formats (AVIF, WebP)
- ✅ Font optimization with `display: swap`
- ✅ Tree-shaking for lucide-react icons
- ✅ React Strict Mode enabled
- ✅ Compression enabled
- ✅ Zero-flash theme switching (inline script)

### Build Output

```
Route (app)           Size      First Load JS
○ /                   33.6 kB   139 kB
○ /_not-found         127 B     102 kB
+ First Load shared   102 kB
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report Bugs** - Open an issue with reproduction steps
2. **Suggest Features** - Open an issue with your idea
3. **Submit PRs** - Fork, create a branch, make changes, open PR

### Development Guidelines

- Follow existing code style and patterns
- Use CSS custom properties for all styling
- Test across all 5 design systems before submitting
- Update relevant documentation

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
  <sub>Built with ❤️ and <a href="https://claude.ai">Claude</a></sub>
</p>

<p align="center">
  <a href="#website-redesign-project">↑ Back to top</a>
</p>
