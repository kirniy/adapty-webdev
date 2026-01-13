# Phase B Research: UI Component Libraries & AI-Powered Development Workflows

**Research Date**: January 13, 2026
**Researcher**: Claude Code (Opus 4.5)
**Purpose**: Inform Phase B library selection for ADAPTY website redesign

---

## Executive Summary

This research evaluates UI component libraries for the ADAPTY website redesign Phase B. Based on comprehensive analysis of current trends, MCP integrations, and AI-native workflows, **shadcn/ui** emerges as the clear winner for the primary library, with **21st.dev Magic MCP** and **Shadcn Blocks** as powerful complementary tools.

### Top Recommendations

| Rank | Library | Use Case | MCP Available | Price |
|------|---------|----------|---------------|-------|
| 1 | **shadcn/ui** | Primary foundation | Yes (FREE) | Free |
| 2 | **21st.dev** | AI-generated components | Yes ($16+/mo) | Freemium |
| 3 | **Shadcn Blocks** | Marketing page blocks | Yes (via shadcn) | $149-299 |
| 4 | **React Bits** | Animations & interactions | Yes (Free + Pro) | Freemium |

---

## Part 1: Primary Libraries Deep Analysis

### 1. shadcn/ui - THE WINNER

**URL**: https://ui.shadcn.com/
**Architecture**: Copy-paste (not npm package)
**Built On**: Radix UI primitives + Tailwind CSS

#### Key Strengths
- **Full ownership**: Code copied directly into your project
- **No lock-in**: Modify anything without fighting abstractions
- **Official MCP Server**: FREE, no auth required
- **60+ components**: Accordion to Typography, all accessible
- **Registry system**: Support for multiple component sources
- **Tailwind CSS v4 ready**: Modern utility-first styling

#### Component Count (January 2026)
- Core components: 60+
- Forms: React Hook Form + TanStack Form support
- Data: Tables, Charts, Calendars
- Navigation: Sidebar, Breadcrumb, Pagination
- Feedback: Toast (Sonner), Alert, Progress

#### MCP Integration (BEST IN CLASS)
```bash
# One-command setup for Claude Code
npx shadcn@latest mcp init --client claude
```

**MCP Capabilities**:
- Browse all available components
- Search across registries
- Install via natural language ("add button, dialog, card")
- Support for private/namespaced registries

#### Verdict for ADAPTY
**HIGHLY RECOMMENDED** as the foundation. Zero cost, maximum control, excellent AI integration.

---

### 2. Shadcn Blocks

**URL**: https://www.shadcnblocks.com/
**Type**: Premium block library built on shadcn/ui

#### Content (January 2026)
- **1,110 blocks** across categories
- **1,145 component variants**
- **11 premium templates**

#### Block Categories (Most Relevant for ADAPTY)
| Category | Count | Relevance |
|----------|-------|-----------|
| Hero | 175 | HIGH - Landing pages |
| Feature | 272 | HIGH - Product showcases |
| Pricing | 35 | HIGH - Pricing page |
| Testimonial | 20+ | HIGH - Social proof |
| Navbar | 18 | HIGH - Navigation |
| Footer | 25 | MEDIUM |
| CTA | 50+ | HIGH |
| About | 17 | MEDIUM |

#### Pricing
- **Pro**: $149 (lifetime) - 976 blocks, CLI access
- **Premium**: $299 (lifetime) - All blocks + 11 templates + Figma kit

#### MCP Integration
- Searchable via official shadcn MCP
- CLI install: `npx shadcn add [block-name]`

#### Verdict for ADAPTY
**RECOMMENDED** for rapid prototyping. The hero and feature blocks alone would save significant time. Consider Pro tier ($149) for full access.

---

### 3. 21st.dev / Magic MCP

**URL**: https://21st.dev/
**Type**: AI-powered component generation + community registry

#### How It Works
1. Describe component in natural language
2. AI generates 3 variations
3. Select and integrate into project
4. Full ownership of generated code

#### Key Features
- **Magic AI Agent**: IDE integration for component creation
- **Community registry**: User-contributed components
- **SVGL integration**: Professional logo/icon library
- **Multiple IDE support**: Cursor, Windsurf, VS Code + Cline

#### MCP Details
- **Pricing**: Starts at $16/month
- **Free tier**: 5 requests (very limited)
- **Response time**: Under 100ms
- **Output**: Clean HTML/CSS or React components

#### Pros
- Beautiful, modern components
- Fast generation
- Full code ownership
- Community contributions

#### Cons
- Limited free tier (5 requests)
- $16+/month for meaningful usage
- Less predictable than pre-built libraries

#### Verdict for ADAPTY
**RECOMMENDED AS SUPPLEMENT**. Use for custom components not available in shadcn/blocks. The MCP integration is excellent for Claude Code workflows.

---

### 4. React Bits

**URL**: https://reactbits.dev/
**Type**: Animation-focused component library

#### Unique Value Proposition
- **110+ animated components**
- Focus on memorable user experiences
- Text animations, backgrounds, UI effects
- Complements shadcn (not replacement)

#### Component Categories
- Animated Lists
- Text Effects
- Background Animations
- Interactive Elements
- Micro-interactions

#### MCP Integration
- Free MCP available
- Pro version with expanded access

#### GitHub Stats
- 4.1k+ stars
- Active development
- Open source core

#### Verdict for ADAPTY
**RECOMMENDED FOR ANIMATIONS**. Perfect complement to shadcn for adding Linear/Vercel-style micro-interactions. Aligns with Phase A design goals.

---

### 5. shadcn/studio

**URL**: https://shadcnstudio.com/
**Type**: Visual builder + extended components

#### Features
- Visual component customization
- Extended shadcn components
- Theme management
- MCP available (PRO only)

#### Pricing
- **PRO**: $200 (required for MCP)

#### Verdict for ADAPTY
**NOT RECOMMENDED**. Too expensive for MCP access. Official shadcn MCP provides same core functionality for free.

---

### 6. Shadcn Design

**URL**: https://www.shadcndesign.com/
**Type**: Similar to shadcn/studio

#### Verdict
**NOT RECOMMENDED**. No clear differentiator from shadcn/studio, limited free offerings.

---

## Part 2: Alternative Libraries Analysis

### NextUI (now HeroUI)

**URL**: https://nextui.org/
**Architecture**: Component library (npm package)

#### Strengths
- Beautiful default styling
- Built on React Aria (accessibility)
- Tailwind CSS integration
- Good TypeScript support
- Sub-40KB gzipped

#### Weaknesses
- Less customization than shadcn
- Pro version needed for advanced features ($249-799)
- No MCP integration

#### Verdict
**NOT RECOMMENDED** for ADAPTY. Less flexible than shadcn, no AI integration.

---

### Mantine

**URL**: https://mantine.dev/
**Architecture**: Full-featured component library

#### Strengths
- 100+ components
- Built-in hooks (useForm, useNotifications)
- Form management included
- Great documentation
- Free and open source

#### Weaknesses
- Not Tailwind-native (own styling system)
- Heavier bundle size
- No MCP integration
- Different mental model than shadcn ecosystem

#### Verdict
**NOT RECOMMENDED** for ADAPTY. Would require deviation from Tailwind-first approach established in Phase A.

---

### Radix UI

**URL**: https://www.radix-ui.com/
**Architecture**: Headless primitives (unstyled)

#### Role
- Foundation that shadcn/ui is built upon
- Handles accessibility, keyboard navigation
- You apply all styling

#### Verdict
**INDIRECT USE** - Already using via shadcn/ui. No need to use directly.

---

### Material UI (MUI)

**Verdict**: NOT RECOMMENDED. Distinct Material Design aesthetic doesn't match Adapty's target (Linear, Attio, Clerk style).

### Ant Design

**Verdict**: NOT RECOMMENDED. Enterprise-focused, heavy, distinct aesthetic.

### Chakra UI

**Verdict**: NOT RECOMMENDED. Good library but not Tailwind-native, no MCP integration.

---

## Part 3: MCP Integration Comparison

### MCP Availability Matrix

| Library | MCP | Auth | Price | Quality |
|---------|-----|------|-------|---------|
| **shadcn/ui** | Yes | None | FREE | Excellent |
| **21st.dev** | Yes | API Key | $16+/mo | Excellent |
| **React Bits** | Yes | None | Free/Pro | Good |
| **Shadcn Blocks** | Via shadcn | None | $149+ | Excellent |
| **NextUI** | No | - | - | - |
| **Mantine** | No | - | - | - |
| **Chakra** | No | - | - | - |

### shadcn MCP Capabilities

```json
// Example .mcp.json configuration
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@latest", "mcp"]
    }
  }
}
```

**Available Operations**:
- `get_project_registries` - List configured registries
- `search_items_in_registries` - Find components
- `view_items_in_registries` - Get implementation details
- `get_item_examples_from_registries` - Get usage examples
- `get_add_command_for_items` - Get install commands
- `get_audit_checklist` - Best practices validation

---

## Part 4: Claude Code Workflow Recommendations

### The "Ultimate Vibe Coder" Workflow

Based on research, here's the optimal workflow for ADAPTY:

#### 1. Foundation Setup
```bash
# Initialize Next.js 15 project
npx create-next-app@latest adapty-website

# Initialize shadcn
npx shadcn@latest init

# Setup MCP for Claude Code
npx shadcn@latest mcp init --client claude
```

#### 2. Extend with Registries
```json
// components.json - Add multiple registries
{
  "registries": {
    "default": "https://ui.shadcn.com",
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json",
    "@magicui": "https://magicui.design/r/{name}.json"
  }
}
```

#### 3. Install 21st.dev Magic MCP (Optional)
For custom component generation when pre-built options don't fit.

### Best Practices from Anthropic

From official Claude Code documentation:

1. **Explore, Plan, Code, Commit** workflow
2. **Test-Driven Development** with AI
3. **Screenshot-based iteration** for UI work
4. **Multiple Claude instances** for complex tasks
5. **Custom slash commands** for repeated workflows

### Recommended CLAUDE.md Additions

```markdown
# UI Development

## Component Installation
- Use shadcn MCP to search and install components
- Prefer official shadcn components first
- Use @aceternity or @magicui for special effects

## Workflow
1. Search for component: "Find me a pricing table"
2. Get examples: "Show examples of pricing-table"
3. Install: "Add pricing-table to my project"
4. Customize: Modify copied code to match DS tokens

## Design System Integration
- Apply DS tokens from /design-systems/ds-X-*/tokens.css
- Use existing color variables, not hardcoded values
- Maintain consistent spacing and typography
```

---

## Part 5: Cost Analysis

### Scenario: ADAPTY Website Build

| Item | Option A (Minimal) | Option B (Recommended) |
|------|-------------------|------------------------|
| shadcn/ui | $0 | $0 |
| Shadcn Blocks | $0 | $149 (Pro) |
| 21st.dev | $0 | $16/mo (1 month) |
| React Bits | $0 | $0 |
| **Total** | **$0** | **$165** |

### ROI Analysis

**Option B Justification**:
- Shadcn Blocks ($149): 1,110 blocks = ~$0.13/block
- Time saved: ~40-60 hours of component building
- At $50/hour developer rate: $2,000-3,000 value
- **ROI: 12-18x return**

---

## Part 6: Final Recommendations

### Primary Stack for Phase B

```
┌─────────────────────────────────────────────────┐
│              ADAPTY Phase B Stack               │
├─────────────────────────────────────────────────┤
│  Foundation: shadcn/ui (FREE)                   │
│  ├── MCP: Official shadcn MCP (FREE)            │
│  ├── Blocks: Shadcn Blocks Pro ($149)           │
│  └── Animations: React Bits (FREE)              │
│                                                 │
│  Supplemental: 21st.dev Magic ($16/mo)          │
│  └── For custom components not in shadcn        │
└─────────────────────────────────────────────────┘
```

### Implementation Priority

1. **Week 1**: Setup shadcn/ui + MCP integration
2. **Week 1**: Purchase Shadcn Blocks Pro
3. **Week 2**: Build core pages using blocks
4. **Week 2**: Add animations via React Bits
5. **Week 3**: Custom components via 21st.dev as needed

### What NOT to Use

| Library | Reason |
|---------|--------|
| NextUI | Less flexible, no MCP, paid features |
| Mantine | Not Tailwind-native |
| MUI | Wrong aesthetic |
| Ant Design | Enterprise focus, heavy |
| shadcn/studio | Too expensive for MCP ($200) |

---

## Appendix: Sources

### Primary Sources Scraped
1. Builder.io - "15 Best React UI Libraries for 2026" (Dec 2025)
2. shadcn/ui - Official MCP Documentation
3. 21st.dev - Magic MCP Product Page
4. Anthropic - "Claude Code Best Practices" (Apr 2025)
5. Shadcn Blocks - Pricing and Features
6. Subframe - "NextUI vs Shadcn" Comparison
7. Makers' Den - "React UI Libraries 2025"
8. Medium - "Ultimate Vibe Coder Workflow" (Sep 2025)
9. Apidog - "21st.dev Review"

### Key Insights

**Industry Trend**: "Copy-paste architecture" (shadcn model) is winning over traditional npm packages because it gives developers full control and eliminates dependency hell.

**AI Integration**: MCP (Model Context Protocol) is becoming the standard for AI-assisted development. Libraries without MCP support will fall behind.

**2026 Stack**: The modern frontend stack is converging on:
- Next.js 15 (App Router)
- Tailwind CSS v4
- shadcn/ui ecosystem
- AI assistance via MCP

---

*Research conducted using Firecrawl for web scraping, January 13, 2026*
