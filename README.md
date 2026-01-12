# ADAPTY Website Redesign Project

Systematic redesign of the ADAPTY marketing website using A/B testing methodology.

🔗 **Repository**: https://github.com/kirniy/adapty-webdev

---

## Current Status

| Phase | Status | Details |
|-------|--------|---------|
| Reference Analysis | ✅ Complete | 5 sites extracted (Linear, Attio, Polar, Vercel, Clerk) |
| Design System Tokens | ✅ Complete | 5 DS variants with CSS custom properties |
| Synthesis Documents | ✅ Complete | Patterns, differentiators, recommendations |
| Documentation | ✅ Complete | Word docs + PDF analysis |
| **Phase A Prototypes** | 🔄 In Progress | Building 5 homepage variants |
| Phase B Libraries | ⏳ Pending | After DS winner selection |

---

## Project Structure

```
adapty-webdev/
├── design-systems/          # 5 DS variants (tokens.css, tailwind.config.ts)
│   ├── ds-1-linear-inspired/
│   ├── ds-2-attio-inspired/
│   ├── ds-3-polar-minimal/
│   ├── ds-4-vercel-bold/
│   └── ds-5-hybrid-premium/
├── references/              # Site analysis + synthesis
│   ├── linear/, attio/, polar/, vercel/, clerk/
│   └── synthesis/           # Cross-site patterns & recommendations
├── skeleton/                # Shared content (SKELETON.md + assets)
├── prototypes/              # Phase A & B builds (Next.js 15)
├── docs/                    # Word docs, PDFs, project docs
├── messages/                # Sergey communications
└── scripts/                 # Automation (create, deploy, compare)
```

---

## Methodology

### Phase A: Design System Testing
5 variants on **vanilla Tailwind** (no UI libraries):

| DS | Inspiration | Theme | Key Feature |
|----|-------------|-------|-------------|
| DS1 | Linear | Dark | 67+ animations, premium feel |
| DS2 | Attio | Light | LAB colors, editorial typography |
| DS3 | Polar | Dark | Fast 150ms animations, minimal |
| DS4 | Vercel | Dark | Bouncy easing, bold gradients |
| DS5 | Hybrid | Light | Warm gray, Inter font (recommended) |

### Phase B: UI Library Testing
With winning DS from Phase A:
- shadcn/ui
- shadcn-blocks
- 21st.dev
- React Bits
- Custom mix

---

## Key Findings

### Universal Patterns (all 5 sites use)
- 4px base spacing unit
- Geometric sans-serif fonts (Inter/Geist)
- Negative letter-spacing for headings
- Blue-purple accent colors
- 6-12px border radius
- 200-300ms animation duration

### Recommendation: DS5 (Hybrid Premium)
- **Theme**: Light with warm gray (#F7F7F8)
- **Font**: Inter (industry standard)
- **Animations**: 150-200ms with bouncy easing
- **Rationale**: Broader audience appeal, easier on eyes

---

## Quick Commands

```bash
# Create new prototype
./scripts/create-prototype.sh ds1 1 a

# Deploy prototype
./scripts/deploy-prototype.sh phase-a-design-systems/proto-ds1

# Generate comparison report
./scripts/generate-comparison.sh a --lighthouse --screenshots
```

---

## Documentation

| Document | Contents |
|----------|----------|
| `docs/Adapty-Project-Overview.docx` | Executive summary, methodology, recommendations |
| `docs/Adapty-Design-Systems-Reference.docx` | All 5 DS specs with tokens |
| `docs/ASCII-Wireframes.pdf` | Reference site analysis (merged) |
| `skeleton/SKELETON.md` | 14 homepage sections specification |

---

## Owner

**Kirill Kholodenko** - AI-native Web Developer @ ADAPTY
