---
project: adapty-redesign
type: analysis
tags: [reference, vercel, design-system, dark-theme, comprehensive]
extracted: 2026-01-12
---

# Vercel Design System Analysis

## Overview
Vercel has the most comprehensive design system with extensive HSLA color scales, detailed shadow systems, and signature gradient branding. The "ds-" prefix indicates a mature design system.

## Color Philosophy
- **Pure black background**: hsla(0,0%,0%,1) - true black
- **HSLA format**: Perceptually meaningful color definitions
- **10-level scales**: 100-1000 for each color family
- **Alpha variants**: Separate gray-alpha scale for overlays
- **Signature gradients**: Develop (blue→cyan), Preview (purple→pink), Ship (red→yellow)

### Color Scales (Dark Mode)
| Scale | 100 (dark) | 600 (mid) | 900 (light) |
|-------|------------|-----------|-------------|
| Gray | 10% | 53% | 63% |
| Blue | 12% | 50% | 66% |
| Green | 9% | 34% | 57% |
| Red | 12% | 59% | 69% |
| Amber | 8% | 49% | 50% |

## Typography
- **Sans**: Geist (their own font)
- **Mono**: Geist Mono
- **Display**: Space Grotesk (for marketing headlines)
- **Form sizes**: Small (32px), Default (40px), Large (48px)

## Spacing System
- **Base unit**: 4px
- **Multipliers**: 2x, 3x, 4x, 6x, 8x, 10x, 16x, 24x, 32x, 48x, 64x
- **Gap**: 24px (primary spacing)
- **Gap half**: 12px
- **Gap quarter**: 8px

## Border Radius
- **Default**: 6px (compact, professional)
- **Marketing**: 8px (slightly larger for landing pages)

## Shadow System (Dark Mode Optimized)
Vercel uses compound shadows with multiple layers:
- **Border base**: `0 0 0 1px #ffffff25` (subtle white border)
- **Background border**: `0 0 0 1px hsla(0,0%,0%,1)` (black outer)
- **Elevation layers**: Additional blur/offset for depth

### Shadow Levels
| Level | Use | Structure |
|-------|-----|-----------|
| Border | Base | White border + black outline |
| Small | Cards | + 1px 2px blur |
| Medium | Elevated | + 2px 2px, 8px 8px blur |
| Large | Prominent | + 2px 2px, 8px 16px blur |
| Menu | Dropdowns | Multi-layer with 16px 24px blur |
| Modal | Dialogs | Multi-layer with 24px 32px blur |

## Motion System
- **Swift easing**: `cubic-bezier(.175,.885,.32,1.1)` - bouncy overshoot
- **Overlay duration**: 0.3s
- **Popover duration**: 0.2s
- **Scale animation**: 0.96 (slight shrink effect)

## Layout
- **Header height**: 64px
- **Navbar height**: 85px
- **Page width**: 1400px
- **Page margin**: 24px

## Focus States
- **Ring**: 2px background + 4px focus color
- **Color**: Blue 900 (hsla(210,100%,66%,1))

## Signature Gradients
| Theme | Start | End | Text |
|-------|-------|-----|------|
| Develop | #007cf0 (blue) | #00dfd8 (cyan) | #0a72ef |
| Preview | #7928ca (purple) | #ff0080 (pink) | #de1d8d |
| Ship | #ff4d4d (red) | #f9cb28 (yellow) | #ff5b4f |

## Page Structure & Section Inventory

### ASCII Wireframe - Homepage

```
┌─────────────────────────────────────────────────────────────────────┐
│ ▲Vercel    Products  Resources  Solutions  Enterprise  Pricing     │
│                                               [Contact] [Dashboard] │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                   ╔═══════════════════════════╗                     │
│                   ║  SIGNATURE GRADIENT HERO  ║                     │
│                   ║    Rainbow prism rays     ║                     │
│                   ║   emanating from center   ║                     │
│                   ╚═══════════════════════════╝                     │
│                                                                     │
│              Build and deploy on the AI Cloud.                      │
│                                                                     │
│     Vercel provides the developer tools and cloud infrastructure    │
│        to build, scale, and secure a faster, more personalized web. │
│                                                                     │
│           [▲ Start Deploying]    [Get a Demo]                       │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ SOCIAL PROOF METRICS                                                │
│ runway build times went from 7m to 40s.                             │
│ Leonardo.AI saw a 95% reduction in page load times.                 │
│ _zapier saw 24x faster builds.                                      │
│                                                                     │
│ [AI Apps] [Web Apps] [Ecommerce] [Marketing] [Platforms]            │
│                                          [Deploy AI Apps in seconds]│
├─────────────────────────────────────────────────────────────────────┤
│ YOUR PRODUCT, DELIVERED                                             │
│ Security, speed, and AI included, so you can focus on your user.    │
│                                                                     │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐         │
│ │     Agents      │ │    AI Apps      │ │                 │         │
│ │ Execute complex │ │ Enrich with AI  │ │                 │         │
│ │   workflows     │ │ models & tools  │ │                 │         │
│ │ ┌───────────┐   │ │ [Fluid][AI SDK] │ │                 │         │
│ │ │Thinking...│   │ │ [AI GATEWAY]    │ │                 │         │
│ │ └───────────┘   │ │ [Workflow]      │ │                 │         │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘         │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐         │
│ │    Web Apps     │ │   Composable    │ │  Multi-tenant   │         │
│ │ Beautiful UIs   │ │    Commerce     │ │    Platform     │         │
│ │ ●●●             │ │ ┌────┬────┐     │ │ customer.domain │         │
│ │ What will you   │ │ │ 👕 │ 👔 │     │ │      .com       │         │
│ │ create?         │ │ └────┴────┘     │ │                 │         │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘         │
├─────────────────────────────────────────────────────────────────────┤
│ FRAMEWORK-DEFINED INFRASTRUCTURE                                    │
│                                                                     │
│   ⚡ ──┐                                                            │
│   💎 ──┼──▲──┬── 📦                                                 │
│   ⊘ ──┤     ├── 🔷   From code to infrastructure in one git push.  │
│   🔺 ──┤     └── 📚   Vercel deeply understands your app to         │
│   ◻ ──┘              provision the right resources and optimize.   │
│   (Framework icons connected with colorful paths)                   │
├─────────────────────────────────────────────────────────────────────┤
│     Scale your [Enterprise] without compromising [Security]         │
├─────────────────────────────────────────────────────────────────────┤
│ DEPLOY ONCE, DELIVER EVERYWHERE                                     │
│ When you push code to Vercel, we make it instantly available        │
│ across the globe.                                                   │
│                                                                     │
│       [More about Infrastructure]  [Learn about Enterprise]         │
│                                                                     │
│              ╭─────────────────────────────────╮                     │
│           ╭──┤     3D WIREFRAME GLOBE          ├──╮                  │
│        ▲ ─┤  │  with node points showing       │  ├─ ▲              │
│           │  │  global infrastructure network  │  │                  │
│        ▲ ─┤  │     [building... S]             │  ├─ ▲              │
│           ╰──┤                                 ├──╯                  │
│              ╰─────────────────────────────────╯                     │
├─────────────────────────────────────────────────────────────────────┤
│ ⚙ FLUID COMPUTE                                                     │
│                                                                     │
│ A compute model for all         ┌─────────────────────────────┐     │
│ workloads. With Active          │ Active │ idle-no charge│Active│   │
│ CPU pricing.                    │ ════   │ ----          │ ═══ │    │
│                                 │ ══     │ ---           │ ══  │    │
│ [Learn more]                    │ ═══    │ --            │ ═══ │    │
│                                 └─────────────────────────────┘     │
├─────────────────────────────────────────────────────────────────────┤
│ ✨ AI GATEWAY                                                       │
│                                                                     │
│ The AI Gateway For Developers.    Top models on Jan 13, 2026        │
│ Effortlessly access and deploy    1 ● Grok Code Fas...  49.0%       │
│ hundreds of AI models from one    2 ● Claude Sonnet...   9.1%       │
│ interface.                        3 ● Gemini 2.5 Fla...  6.0%       │
│                                   4 ● GPT-5.2            5.3%       │
│ ┌──────────────────────────┐      5 ● Gemini 3 Flash     4.3%       │
│ │ [AI SDK][Python][OpenAI] │      6 ● Claude Haiku 4...  3.1%       │
│ │ import { streamText }    │      7 ● Claude Opus 4...   2.4%       │
│ │   from 'ai'              │      8 ● Claude 3.7 Son...  1.7%       │
│ │ const result = stream... │      9 ● Gemini 2.5 Fla...  1.6%       │
│ │   model: 'openai/gpt-5'  │     10 ● DeepSeek V3.2      1.6%       │
│ │   prompt: 'Why is...'    │                                        │
│ └──────────────────────────┘                                        │
│                                                                     │
│ Use it with [OpenAI] [xAI] [Anthropic] and many more                │
├─────────────────────────────────────────────────────────────────────┤
│ DEPLOY YOUR FIRST APP IN SECONDS                                    │
│                                                                     │
│ 🐙💜💙 Deploy automatically      ┌────────────┐ ┌────────────┐      │
│        from git or with our CLI │  Next.js   │ │   Svelte   │      │
│ 📦 Wide range support for the   │  Templates │ │  Templates │      │
│    most popular frameworks      ├────────────┤ ├────────────┤      │
│ 👁 Previews for every push      │   React    │ │    Nuxt    │      │
│ 🔒 Automatic HTTPS for all      │  Templates │ │  Templates │      │
│    your domains                 ├────────────┤ ├────────────┤      │
│                                 │   Astro    │ │   Python   │      │
│                                 │  Templates │ │  Templates │      │
│                                 └────────────┘ └────────────┘      │
├─────────────────────────────────────────────────────────────────────┤
│              ┌─────────────────────────────────────┐                │
│              │        Start Deploying         →    │                │
│              └─────────────────────────────────────┘                │
│                                                                     │
│                            [Talk to an Expert]                      │
│                            [Get an Enterprise Trial]                │
├─────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                          ▲   │
│                                                                     │
│ Products        Resources         Company         Social            │
│ AI              Community ↗       About           GitHub            │
│ Enterprise      Docs              Blog            LinkedIn          │
│ Fluid Compute   Knowledge Base    Careers         Twitter           │
│ Next.js         Academy           Changelog       YouTube           │
│ Observability   Help              Contact Us                        │
│ Previews        Integrations      Customers                         │
│ Rendering       Platforms         Events                            │
│ Security        Pricing           Partners                          │
└─────────────────────────────────────────────────────────────────────┘
```

### Section-by-Section Breakdown

| # | Section | Background | Key Visual Elements |
|---|---------|------------|---------------------|
| 1 | Hero | True black with gradient prism | Rainbow rays emanating from triangular center, bouncy animations |
| 2 | Social Proof | Black | Customer logos + specific metrics, tab selector |
| 3 | Product Grid | Black | 2x3 cards with embedded mini-UIs, arrow CTAs |
| 4 | Framework Infrastructure | Black | Colored connecting lines between framework icons |
| 5 | Enterprise Banner | Black | Inline pill badges [Enterprise] [Security] |
| 6 | Globe | Black | 3D wireframe globe with Vercel node markers |
| 7 | Fluid Compute | Black | CPU activity timeline visualization |
| 8 | AI Gateway | Black | Code editor + model leaderboard |
| 9 | Templates | Black | 2x3 framework template cards |
| 10 | Final CTA | Black | Large "Start Deploying" button |
| 11 | Footer | Black | 4-column link grid |

## Key Insights for Adapty

1. **HSLA colors** with value notation for programmatic access
2. **Compound shadows** create depth in dark mode
3. **Bouncy easing** (`cubic-bezier(.175,.885,.32,1.1)`) feels premium
4. **True black** (#000) as background - bold choice
5. **4px base unit** with extensive multiplier scale
6. **Signature gradients** for brand identity
7. **Compact radius** (6px) feels professional vs Linear's larger radii
8. **White border overlay** on dark surfaces creates subtle definition
9. **Space Grotesk** for display typography adds character
10. **Form height system** (32/40/48px) is well-defined
11. **Embedded mini-UIs** in feature cards (AI chat, product grids, code editors)
12. **3D globe visualization** for global infrastructure messaging
13. **Model leaderboard** as dynamic social proof for AI Gateway
