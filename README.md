# ADAPTY Website Redesign Project

Systematic redesign of the ADAPTY marketing website using A/B testing methodology.

## Quick Start

```bash
# This is the project root
cd /Users/kirniy/dev/adapty-dev

# Reference project (read-only)
cd adapty-pt2

# Working directories
cd references/     # Design analysis
cd skeleton/       # Shared test content
cd design-systems/ # DS variants
cd prototypes/     # Test builds
```

## Project Structure

| Directory | Purpose |
|-----------|---------|
| `adapty-pt2/` | Reference implementation (read-only) |
| `references/` | Design DNA analysis of Linear, Attio, Polar, Vercel, Clerk |
| `research/` | UI library comparison research |
| `skeleton/` | Shared homepage content for all prototypes |
| `design-systems/` | 5 DS variant specifications |
| `prototypes/` | Phase A (DS) and Phase B (Library) test builds |
| `messages/` | Communications for Sergey |
| `docs/` | Project documentation |
| `scripts/` | Automation scripts |

## Methodology

### Phase A: Design System Testing
Test 5 design system variants WITHOUT UI libraries (vanilla Tailwind)
- DS1: Linear-inspired
- DS2: Attio-inspired
- DS3: Polar-minimal
- DS4: Vercel-bold
- DS5: Hybrid-premium

### Phase B: UI Library Testing
Test UI libraries WITH winning DS from Phase A
- shadcn/ui
- shadcn-blocks
- 21st.dev
- React Bits
- Custom mix

## Key Files

- `CLAUDE.md` - AI context and project details
- `meeting.md` - Sergey meeting transcript
- `slack.md` - Slack conversation with resources
- `skeleton/SKELETON.md` - Homepage build specification

## Timeline

- Week 1: Setup, analysis, DS documents
- Week 2: Phase A prototypes + selection
- Week 3: Phase B prototypes + selection
- Week 4: Final build + deployment

## Owner

Kirill Kholodenko - AI-native Web Developer @ ADAPTY
