# T-Separator Layout Pattern Implementation

## Overview
Implemented Linear's signature T-separator layout pattern for feature sections. This pattern creates a visual hierarchy with a main feature spanning full width and two secondary features arranged side-by-side below.

---

## Pattern Specification

```
┌─────────────────────────────────────┐
│         Main Feature (Full Width)   │
│         ──────────────────          │ ← border-bottom
├──────────────────┬──────────────────┤
│  Left Feature    │  Right Feature   │ ← border-r divider
│                  │                  │
└──────────────────┴──────────────────┘
```

### CSS Specifications

| Element | Classes | Description |
|---------|---------|-------------|
| Main Feature Container | `pb-8 border-b border-white/10` | Full width, bottom padding, subtle bottom border |
| Bottom Grid | `grid grid-cols-1 md:grid-cols-2` | Responsive 2-column layout |
| Left Feature | `pt-8 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-white/10` | Top padding, right padding on desktop, right border divider |
| Right Feature | `pt-8 pl-0 md:pl-8` | Top padding, left padding on desktop |

### Border System
- **Color**: `border-white/10` (very subtle, ~10% opacity)
- **Thickness**: 1px
- **Hover state**: `border-white/20` (20% opacity)

### Border Radius System
- **Cards**: `rounded-[20px]` (or `rounded-2xl`)
- **Buttons**: `rounded-lg` (8px)
- **Modals**: `rounded-2xl` (16-20px)

---

## Files Created/Modified

### 1. New Component: TSeparatorSection
**Path**: `apps/marketing/components/fragments/t-separator-section.tsx`

A reusable component that implements the T-separator pattern with the following exports:

#### `TSeparatorSection`
Main layout component that accepts three content areas:
```tsx
interface TSeparatorSectionProps {
  mainFeature: React.ReactNode;   // Top - full width
  leftFeature: React.ReactNode;   // Bottom left
  rightFeature: React.ReactNode;  // Bottom right
  className?: string;
  borderColor?: string;           // Default: 'border-white/10'
}
```

#### `TSeparatorCard`
Wrapper component for consistent card styling:
```tsx
interface TSeparatorCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'ghost' | 'elevated';
  hoverable?: boolean;
}
```

#### `TSeparatorFeatureCard`
Complete feature card with visual area and content:
```tsx
interface TSeparatorFeatureCardProps {
  visual?: React.ReactNode;       // Image/visual at top
  title?: string;
  description?: string;
  action?: React.ReactNode;       // Bottom action/button
}
```

### 2. Updated: features-linear-style.tsx
**Path**: `apps/marketing/components/sections/features-linear-style.tsx`

Changes made:
- Added import for `TSeparatorSection` and `TSeparatorFeatureCard`
- Added new `TSeparatorExample` section demonstrating the pattern in action
- Exported T-separator components for convenient access

### 3. Documentation
**Path**: `linear-analysis/CHANGES-LAYOUT.md` (this file)

---

## Usage Example

```tsx
import {
  TSeparatorSection,
  TSeparatorFeatureCard,
} from '~/components/fragments/t-separator-section';

<TSeparatorSection
  // Main Feature - Full Width
  mainFeature={
    <TSeparatorFeatureCard
      className="bg-white/[0.03] border border-white/10"
      visual={<Image src="..." alt="..." fill className="object-cover" />}
    >
      <h3>Main Feature Title</h3>
      <p>Description text...</p>
    </TSeparatorFeatureCard>
  }
  // Left Feature
  leftFeature={
    <TSeparatorFeatureCard
      className="bg-white/[0.03] border border-white/10"
      visual={<Image src="..." alt="..." fill className="object-cover" />}
      title="Left Feature"
      description="Description..."
    />
  }
  // Right Feature
  rightFeature={
    <TSeparatorFeatureCard
      className="bg-white/[0.03] border border-white/10"
      visual={<Image src="..." alt="..." fill className="object-cover" />}
      title="Right Feature"
      description="Description..."
    />
  }
/>
```

---

## Design System Alignment

### Consistent with Linear DNA
- ✅ Pure black background (#000000)
- ✅ Subtle borders (white/10)
- ✅ Consistent border radius (rounded-[20px])
- ✅ No heavy shadows
- ✅ Minimal text blocks (max 3 lines)
- ✅ Fast animations (150-200ms)

### Responsive Behavior
- Mobile: Stack vertically, remove horizontal dividers
- Desktop: T-pattern with vertical divider between left/right

---

## Implementation Notes

1. **Mobile Responsiveness**: The pattern gracefully degrades on mobile:
   - Grid becomes single column
   - Right border becomes bottom border
   - Padding adjusts for touch targets

2. **Border Consistency**: All borders use `border-white/10` for subtlety:
   - Main feature bottom border
   - Left feature right border (desktop) / bottom border (mobile)

3. **Card Styling**: All cards use:
   - Background: `bg-white/[0.03]` (3% white)
   - Border: `border-white/10`
   - Border radius: `rounded-[20px]`

4. **Typography**: Following Linear's specs:
   - Card titles: `text-xl font-semibold tracking-tight`
   - Descriptions: `text-[15px] text-muted-foreground`

---

*Implementation completed as part of Linear Design System adoption.*
