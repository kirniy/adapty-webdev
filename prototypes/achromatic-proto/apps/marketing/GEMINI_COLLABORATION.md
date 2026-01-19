# Gemini Collaboration - Mega Menu Verification

## Objective

Verify that the mega menu implementation in achromatic-proto matches the content and functionality from `kirills-testversion-adapty-pt2` source.

---

## Files to Check

### Menu Components
| File | Description |
|------|-------------|
| `components/menus/product-mega-menu.tsx` | Sidebar (4 items) + Tabs (tech/paywalls/analytics) |
| `components/menus/cases-mega-menu.tsx` | 3-column grid with 11 case studies |
| `components/menus/resources-mega-menu.tsx` | 5 sections (Learn, Connect, Discover, Ebooks, Research) |
| `components/menus/docs-mega-menu.tsx` | Sidebar (4 items) + SDK grid (8 mobile + 2 web) |
| `components/menus/index.ts` | Barrel export |

### Core Files
| File | Description |
|------|-------------|
| `lib/menu-data.ts` | Centralized menu data (~350 lines) |
| `components/navbar.tsx` | Main navbar with mega menus and compact dropdowns |
| `components/mobile-menu.tsx` | Mobile menu with main -> submenu navigation |
| `components/language-switcher.tsx` | Language dropdown (12 languages) |

---

## Success Criteria Checklist

### Content Parity

- [ ] **Product menu**: 4 sidebar links + 17 product items (4 tech, 8 paywalls, 5 analytics)
- [ ] **Cases menu**: 11 case studies with metrics + "View all" link
- [ ] **Resources menu**: 5 sections with ~23 total items
- [ ] **Docs menu**: 4 sidebar links + 10 SDK items (8 mobile, 1 web payments, 1 web API)
- [ ] **web2app**: Orange highlighted nav item linking to funnelfox.com
- [ ] **Language Switcher**: 12 languages with flag icons

### Functional Tests

- [ ] Default header: All 4 mega menus open on hover
- [ ] Simple header: Compact dropdowns work
- [ ] Mobile menu: Main -> submenu navigation works
- [ ] Mobile menu: Back button returns to main menu
- [ ] All external links open in new tab (`target="_blank"`)
- [ ] Theme toggle works in both variants
- [ ] Language Switcher dropdown opens and closes properly

### Design System

- [ ] Menu border radius: `rounded-2xl` (outer), `rounded-xl` (inner items)
- [ ] Colors use tokens: `primary`, `muted-foreground`, `accent`, `border`
- [ ] Icons use `dark:invert` for dark mode support
- [ ] Hover states use `hover:bg-accent` with `transition-colors`
- [ ] Badges show "new", "weekly" with secondary variant
- [ ] Mobile menu has CTA buttons at bottom

---

## Source Reference Files

| Source File | Target Equivalent |
|-------------|-------------------|
| `kirills-testversion-adapty-pt2/src/components/layout/Header.tsx` | `navbar.tsx` + `lib/menu-data.ts` |
| `kirills-testversion-adapty-pt2/src/components/layout/menus/ProductMenu.tsx` | `menus/product-mega-menu.tsx` |
| `kirills-testversion-adapty-pt2/src/components/layout/menus/CasesMenu.tsx` | `menus/cases-mega-menu.tsx` |
| `kirills-testversion-adapty-pt2/src/components/layout/menus/ResourcesMenu.tsx` | `menus/resources-mega-menu.tsx` |
| `kirills-testversion-adapty-pt2/src/components/layout/menus/DocsMenu.tsx` | `menus/docs-mega-menu.tsx` |
| `kirills-testversion-adapty-pt2/src/components/layout/LanguageSwitcher.tsx` | `language-switcher.tsx` |

---

## Design System Rules

### Typography
- Section headers: `text-xs font-semibold uppercase tracking-wider text-muted-foreground`
- Menu items: `text-sm font-medium`
- Badges: `text-[10px] font-semibold uppercase`

### Spacing
- Menu panel padding: `p-4` or `p-6`
- Item gaps: `gap-1` to `gap-4`
- Section gaps: `gap-8` or `gap-10`

### Colors (OKLch tokens)
```css
--primary          /* Brand color (adapty purple #6720FF) */
--muted-foreground /* Secondary text */
--accent           /* Hover backgrounds */
--border           /* Borders and separators */
```

### Hover States
```tsx
<Link className="transition-colors hover:bg-accent hover:text-primary">
```

---

## Manual Testing Commands

```bash
# Start dev server
pnpm dev --filter=marketing

# Build (to check for type errors)
pnpm build --filter=marketing
```

### Test at http://localhost:3011

1. **Desktop (>1024px)**:
   - Toggle header variant in debug menu (bottom-right)
   - Hover each nav item to test mega menus
   - Click through links (should open in new tabs)

2. **Mobile (<1024px)**:
   - Resize browser or use DevTools device emulation
   - Open mobile menu (hamburger icon)
   - Test main -> submenu navigation
   - Test back button
   - Test theme toggle

3. **Dark Mode**:
   - Toggle theme
   - Verify icons invert properly
   - Verify colors adapt

---

## Notes for Gemini

1. **Architecture**: Uses Radix NavigationMenu (already integrated in achromatic-proto)
2. **Data centralization**: All menu content is in `lib/menu-data.ts`
3. **Mobile UX**: Uses slide-in panel with main -> submenu flow (not accordions)
4. **Language Switcher**: Uses Radix DropdownMenu for accessibility

If any content is missing or incorrect, check the source files in `kirills-testversion-adapty-pt2/src/components/layout/` for reference.
