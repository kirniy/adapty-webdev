# Prototype Builds

This folder contains all test prototype implementations for Phase A and Phase B.

## Structure

```
/prototypes/
├── /phase-a-design-systems/     # Testing DS variants (no libraries)
│   ├── /proto-ds1/              # DS1 + vanilla Tailwind
│   ├── /proto-ds2/              # DS2 + vanilla Tailwind
│   ├── /proto-ds3/              # DS3 + vanilla Tailwind
│   ├── /proto-ds4/              # DS4 + vanilla Tailwind
│   └── /proto-ds5/              # DS5 + vanilla Tailwind
│
└── /phase-b-libraries/          # Testing UI libraries (with winner DS)
    ├── /proto-shadcn-ui/        # Winner DS + shadcn/ui
    ├── /proto-shadcn-blocks/    # Winner DS + shadcn-blocks
    ├── /proto-21st-dev/         # Winner DS + 21st.dev
    ├── /proto-react-bits/       # Winner DS + React Bits
    └── /proto-custom-mix/       # Winner DS + custom combination
```

## Phase A: Design System Testing

**Goal**: Find the best visual language
**Method**: Same skeleton, different styling, no UI libraries

Each prototype:
- Next.js 15 + App Router
- Tailwind CSS 4 (vanilla, no component library)
- TypeScript
- Applies design tokens from `/design-systems/ds-[n]/`
- Implements `/skeleton/SKELETON.md` exactly
- Deploys to Vercel

## Phase B: UI Library Testing

**Goal**: Find the best tooling
**Method**: Same skeleton + winner DS, different libraries

Each prototype:
- Next.js 15 + App Router
- Winning DS from Phase A
- Different UI component library
- Implements `/skeleton/SKELETON.md` exactly
- Deploys to Vercel

## Creating a New Prototype

Use the automation script:
```bash
./scripts/create-prototype.sh [name] [design-system]
```

Or manually:
1. Create Next.js project: `npx create-next-app@latest proto-[name]`
2. Copy skeleton content from `/skeleton/content/`
3. Copy assets from `/skeleton/assets/`
4. Apply design tokens from `/design-systems/ds-[n]/`
5. Configure Vercel deployment

## Comparison Metrics

For each prototype, track:
- Bundle size (KB)
- Lighthouse scores (perf, a11y)
- Development time (hours)
- Code complexity (lines, components)
- Visual fidelity to DS spec

## Deployment URLs

| Prototype | Vercel URL | Status |
|-----------|------------|--------|
| proto-ds1 | TBD | Pending |
| proto-ds2 | TBD | Pending |
| proto-ds3 | TBD | Pending |
| proto-ds4 | TBD | Pending |
| proto-ds5 | TBD | Pending |
| proto-shadcn-ui | TBD | Pending |
| proto-shadcn-blocks | TBD | Pending |
| proto-21st-dev | TBD | Pending |
| proto-react-bits | TBD | Pending |
| proto-custom-mix | TBD | Pending |
