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
