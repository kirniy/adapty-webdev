# Design Reference Analysis

This folder contains deep "x-ray" analysis of reference websites for the ADAPTY redesign.

## Priority Sites

1. **linear/** - Premium feel, micro-interactions, typography
2. **attio/** - Light theme, information hierarchy, animations
3. **polar/** - Minimalism, code aesthetics, readability
4. **vercel/** - Bold visuals, metrics presentation
5. **clerk/** - Developer-friendly, modern SaaS

## Folder Structure

Each site folder contains:
```
/[site-name]/
├── analysis.md           # Human-readable summary
├── /raw-data/           # Raw extraction outputs (33 JSON files)
├── /synthesized/        # Processed design tokens
└── /screenshots/        # Visual captures
```

## Synthesis Folder

`/synthesis/` contains cross-site analysis:
- `patterns.md` - Common patterns across all sites
- `differentiators.md` - Unique approaches per site
- `recommendations.md` - Our synthesis and recommendations

## How to Analyze a Site

Use Claude Code for Chrome with the Design DNA Extraction Protocol:
1. Navigate to reference site homepage
2. Execute 33 extraction scripts (see plan file)
3. Save JSON outputs to `/raw-data/`
4. Take screenshots per checklist
5. Write `analysis.md` summary

Full extraction protocol: `/Users/kirniy/.claude/plans/mellow-leaping-kay.md`
