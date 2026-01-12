---
project: adapty-redesign
type: index
tags: [libraries, documentation, local-docs]
---

# Local Library Documentation

> **Purpose**: Machine-readable, version-controlled library docs for clean AI context.
> **Philosophy**: Pull only what we need, control exactly what the AI sees.

---

## Why Local Docs?

1. **Clean Context**: No outdated info from web search
2. **Version Control**: Know exactly which docs we're using
3. **Focused**: Only the parts we actually need
4. **Fast**: No network latency for lookups

---

## Available Docs

| Library | File | Status | ADAPTY Usage |
|---------|------|--------|--------------|
| T3 Stack | `t3-stack.md` | Complete | Production evaluation |
| shadcn/ui | `shadcn-ui.md` | Complete | Phase B + Production |
| Tailwind CSS 4 | `tailwind-css.md` | TODO | All phases |
| Framer Motion | `framer-motion.md` | TODO | Animations |
| Next.js 15 | `nextjs-15.md` | TODO | All phases |

---

## Adding New Docs

1. Create `library-name.md` in this folder
2. Add YAML frontmatter with tags
3. Include only relevant sections
4. Add ADAPTY-specific usage notes
5. Update this README index

### Template

```yaml
---
project: adapty-redesign
type: library-doc
library: [name]
version: [version]
last_verified: [date]
tags: [library, category, ...]
---

# [Library] - Local Documentation

> **Source**: [URL]
> **Purpose**: [One line]

## Overview
[What it does]

## Quick Start
[How to use]

## ADAPTY Usage
[Specific to our project]

## Relevant Features
[What we actually need]
```

---

## Query by Tag

```bash
# Find all library docs
grep -r "type: library-doc" --include="*.md" .

# Find animation-related
grep -r "tags:.*animation" --include="*.md" .
```
