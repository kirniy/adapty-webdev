# Critical Design DNA Audit Report (v3)

> [!CAUTION]
> **Status: CRITICAL FAIL**
> The current prototype is a "Skin-swapper" (generic layout with different colors), NOT a "Design System Clone". It fails to capture the structural "DNA" of the reference sites.

## 1. Linear (DS1) - The "Uncanny Valley" Problem
**Verdict: ❌ Misses the Premium Feel**

*   **Typography Gap**: We use `tracking-[-0.02em]`. Linear uses `tracking-[-1.4px]` (~0.04em) on headings. This 50% difference kills the "tight, engineered" look.
*   **Shadow Fidelity**: We use standard Tailwind shadows. Linear uses "Compound Layered Shadows" (shadow + subtle white border `rgba(255,255,255,0.08)`). Our cards look flat/muddy in comparison.
*   **Feature List**: We render simple bullet points. Linear uses "Icon + Text" grids or specific sub-feature layouts, often with glassmorphism backgrounds.
*   **Hero 3D**: The 3D CSS rotate is a good start, but the *content* inside the cards is generic colored divs. It needs to look like a real UI (Sidebar, Issues list).

## 2. Attio (DS2) - Structural Failure
**Verdict: ❌ FAIL**

*   **Section Numbering**: **CRITICAL ERROR**. We implemented a "Pill Badge" (`( O 01 Feature )`).
    *   *Reference Reality*: Attio uses "Editorial Headers": `[01] POWERFUL PLATFORM ...................... / ITEM 1:4`.
    *   *Fix*: Needs a completely different HTML structure for headers, not just a badge prop.
*   **Visual Logic**: Attio relies heavily on "Color Coded Tags" (Green for Members, Orange for Admin). We have zero logic for this; we just show generic icons.
*   **Tabs**: The Hero has tabs, but the Feature Sections are static. Attio often uses tabs *within* feature sections to switch views.

## 3. Polar (DS3) - "Fake" Developer Tool
**Verdict: ❌ FAIL**

*   **Code Blocks**: We implemented a blue `text-blue-400` block.
    *   *Reference Reality*: Polar uses rich syntax highlighting (Orange/Pink/Blue gradients for context, multi-colored tokens).
    *   *Impact*: Looks like a broken CSS file, not a developer product.
*   **Layout**: We force a 50/50 "Image + Text" split. Polar often uses "Code Left / Text Right" or full-width code samples.
*   **Typography**: We are using `Inter`. Polar uses `Geist Mono` extensively. The font mismatch destroys the "Code-First" aesthetic.

## 4. Vercel (DS4) - Missing the Grid
**Verdict: ❌ FAIL**

*   **Grid DNA**: Vercel's identity is the "Grid Background" (`linear-gradient(to right, ...)`). We check for it in Global CSS, but it's not applied to `FeatureSection`. So features float in void space.
*   **Bento Grids**: Vercel uses `Bento Grid` layouts (multi-sized cards). We use a standard single-column stack.
*   **Compound Shadows**: Vercel needs `0 0 0 1px #fff` borders on dark cards to pop. We miss this.

## 5. Clerk (DS5) - Button Radius Confusion
**Verdict: ⚠️ INCONSISTENT**

*   **Button Radius**: User requested `6px`. Reference Audit says `24px` (Pill).
    *   *Current State*: `6px`.
    *   *Impact*: If we want a "Clone", we should respect the verified 24px reference unless the User explicitly wants the "New Clerk" look (which might be 6px). Leaving as is per specific user instruction, but noting the deviation.
*   **Card Style**: Clerk uses very specific "Label Headers" (`H2 Label`) in brand purple. We use standard black headers.

## Action Plan (Refactoring Required)

To match "Design DNA", we cannot use a single generic `FeatureSection.tsx`. We must refactor it to be a **Polymorphic Component** or **Composition Pattern** that renders fundamentally different DOM structures based on the variant.

1.  **Refactor `FeatureSection` Logic**:
    *   `if (Attio)` -> Render `EditorialHeader` + `TabbedFeature`
    *   `if (Polar)` -> Render `SyntaxHighlighter` + `TerminalWindow`
    *   `if (Linear)` -> Render `GlassCard` + `TightHeading`
2.  **Update `globals.css`**: Verify and fix letter-spacing and shadow tokens.
3.  **Enhance Content**: `content.ts` needs rich HTML strings or structured objects for "Code Snippets", not just plain text.
