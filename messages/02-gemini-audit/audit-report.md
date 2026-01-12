# Deep Design DNA Audit Report

## Executive Summary
The "Deep Design DNA" audit reveals that while the **CSS Tokens** (`globals.css`) and **Hero Sections** (`Hero.tsx`) are well-aligned with their respective references, the **Core Content Components** (`FeatureSection.tsx`) fail to support the sophisticated "Design DNA" required by the references.

**Critical Finding**: The `FeatureSection` component is too generic. It silently drops content defined in `SKELETON.md` (specifically feature lists) and fails to implement signature layout patterns (Attio's numbering, Polar's code blocks, Linear's sub-feature grids).

## Site-by-Site DNA Analysis

### 1. Linear (DS1)
*   **Design DNA**: Layered depth, 3D perspective, "Visual + Sub-features" grid.
*   **Prototype Status**:
    *   ✅ **Hero**: `HeroDS1` correctly implements the "3D Layered UI Showcase".
    *   ✅ **Tokens**: Colors, radius (30px cards), and typography match.
    *   ❌ **Features**: Mismatch. Linear uses a "Visual + Sub-features" layout. Our `FeatureSection` drops the sub-feature bullet points defined in `SKELETON.md`, rendering only a title and description.
    *   ❌ **Logic**: Missing "Scale animations" on interaction.

### 2. Attio (DS2)
*   **Design DNA**: Section numbering (`[01]`), color-coded tags, "Audience Tabs", ghost interaction models.
*   **Prototype Status**:
    *   ✅ **Hero**: `HeroDS2` correctly implements the "Product Tabs" and "Section Label".
    *   ✅ **Tokens**: Colors and 10px radius match.
    *   ❌ **Features**: **Critical DNA Failure**. Attio's signature `[01] SECTION NAME` numbering system is completely missing from `FeatureSection`.
    *   ❌ **Content**: `SKELETON.md` content ("4B. Refund Saver") is rendered without the Attio-style hierarchy elements.

### 3. Polar (DS3)
*   **Design DNA**: Code-first, "Tag pills", gradient code blocks, zero-image hero.
*   **Prototype Status**:
    *   ✅ **Hero**: `HeroDS3` correctly omits the hero image, honoring the text-heavy/minimal DNA.
    *   ✅ **Tokens**: Dark theme and 10px (0.6rem) radius match.
    *   ❌ **Features**: Mismatch. Polar relies heavily on "Tag pills" and "Code Snippets" directly in feature cards. Our prototype forces an `image` prop, preventing the implementation of Polar's "Code-First" aesthetic (live code blocks vs static screenshots).

### 4. Vercel (DS4)
*   **Design DNA**: True black, compound shadows, grid backgrounds, bold typography.
*   **Prototype Status**:
    *   ✅ **Hero**: `HeroDS4` correctly implements the grid background and gradient text logic.
    *   ✅ **Tokens**: Matches "True Black" and compound shadows.
    *   ⚠️ **Features**: Generally acceptable, but Vercel's "Bento Grid" layouts are not fully supported by the rigid `FeatureSection` component.

### 5. Clerk (DS5)
*   **Design DNA**: Developer-friendly, pill buttons (24px), label-style headers.
*   **Prototype Status**:
    *   ✅ **Hero**: `HeroDS5` matches logic.
    *   ✅ **Tokens**: Matches 24px pill buttons (Note: References confirm 24px, despite potential live site updates).
    *   ✅ **Overall**: The generic `FeatureSection` fits Clerk's simpler layout style best of all 5.

## SKELETON.md Robustness Check

The `SKELETON.md` is **structurally robust** in its definitions (it defines all necessary content), but the **Prototype Implementation** is **fragile** because it ignores parts of the skeleton to fit a generic component.

*   **Missing Content**: `FeatureSection.tsx` ignores the `Features: [...]` list defined in `SKELETON.md`.
*   **Missing Metadata**: The skeleton doesn't explicitly define "Section Number" or "Tags", which Attio and Polar need. The component must derive these or the Skeleton needs metadata fields.

## Recommendations

1.  **Upgrade `FeatureSection.tsx`**:
    *   Add `features` prop to accept the list of bullet points (crucial for Linear/Polar).
    *   Add `variant` prop (ds1-ds5) to trigger DNA-specific layouts (e.g., render `[01]` for DS2, render "Code Block" for DS3).

2.  **Enhance `SKELETON.md` mapping**:
    *   Ensure the "Features" list in the skeleton is actually passed to the component.

3.  **Visual Logic Updates**:
    *   **Attio**: Inject algorithmic section numbering in `FeatureSection` when `variant="ds2"`.
    *   **Polar**: Allow passing a `codeSnippet` instead of an `image` for feature sections.

## Conclusion
The "Skin" (CSS) is perfect. The "Skeleton" (Hero) is strong. The "Muscle" (Feature Sections) is weak and generic, failing to convey the deep "Design DNA" of the more complex references (Linear, Attio, Polar).
