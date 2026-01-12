# Design System Variants

This folder contains 5 design system specifications for Phase A testing.

## Variants

| ID | Name | Inspiration | Key Characteristics |
|----|------|-------------|---------------------|
| ds-1 | Linear-inspired | linear.app | Premium, micro-interactions, bold typography |
| ds-2 | Attio-inspired | attio.com | Light theme, clean hierarchy, subtle animations |
| ds-3 | Polar-minimal | polar.sh | Minimal, code-focused, high readability |
| ds-4 | Vercel-bold | vercel.com | Colorful accents, strong metrics display |
| ds-5 | Hybrid-premium | All refs | Best of all, balanced approach |

## Folder Structure

Each DS folder contains:
```
/ds-[n]-[name]/
├── design-system.md     # Full specification document
├── tokens.css           # CSS custom properties
└── tailwind.config.ts   # Tailwind configuration
```

## Design System Document Template

Each `design-system.md` follows this structure:
- Philosophy
- Color Tokens
- Typography
- Spacing
- Border & Radius
- Shadows
- Animations
- Component Guidelines

## How to Create a DS

1. Analyze reference site using extraction protocol
2. Synthesize findings into design-system.md
3. Generate tokens.css from color/spacing/radius data
4. Create tailwind.config.ts extending base config

## Testing

Each DS will be implemented in `/prototypes/phase-a-design-systems/proto-ds[n]/`
