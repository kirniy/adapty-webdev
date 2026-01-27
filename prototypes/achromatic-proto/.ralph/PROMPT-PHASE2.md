# RALPH SESSION PHASE 2: Verify, Polish & Perfect

## MISSION

This is the VERIFICATION phase. Phase 1 added animations to all pages. Your job is to:
1. **Verify** every single page has proper animations
2. **Fix** any pages that are missing animations or have issues
3. **Ensure** debug menu integration for all sections
4. **Apply** react-best-practices and motion-design principles

## SKILLS TO LOAD AND USE

Before starting, load these skills and apply their guidelines:

1. **react-best-practices** - Apply Vercel Engineering performance patterns
2. **web-animation-design** - Apply motion design best practices

## ABSOLUTE RULES

1. **NO EMOJIS** - Zero tolerance
2. **EVERY feature card MUST have a magic animation** - No exceptions
3. **useReducedMotion** on ALL motion components
4. **GPU-only**: Only animate `transform` and `opacity`
5. **Debug menu**: Every section variant must be selectable

## VERIFICATION CHECKLIST FOR EACH PAGE

Go through EVERY page and verify:

### 1. Feature Section Animations
- [ ] Has `Spotlight` effect on cards
- [ ] Has hover animations (y-offset, scale)
- [ ] Has icon animations (scale + rotate on hover)
- [ ] Has staggered reveal (BlurFade with delays)
- [ ] **CRITICAL: Has Magic Animation in EACH card** - not just some, ALL of them

### 2. Motion Best Practices
- [ ] Uses `motion/react` (NOT framer-motion)
- [ ] Has `useReducedMotion` hook
- [ ] Respects `shouldReduceMotion` in all animate props
- [ ] Uses spring physics with `bounce: 0` for snappy feel
- [ ] Uses EASE_OUT_QUART: `[0.165, 0.84, 0.44, 1]`

### 3. React Best Practices
- [ ] No barrel imports (import specific components)
- [ ] useCallback for event handlers passed to children
- [ ] useMemo for expensive computations
- [ ] No inline object/array creation in JSX
- [ ] Proper key props on mapped elements

### 4. Debug Menu Integration
- [ ] Section has variant type exported
- [ ] Variant hook exists in debug-context.tsx
- [ ] Page config exists in PAGE_SECTIONS in DebugMenu.tsx
- [ ] All variants are selectable

## PAGES TO VERIFY (ALL OF THEM)

### Tier 1: Feature Pages (Must have magic animations and lots of those, super thorough, each section and part of section)
1. paywall-ab-testing
2. onboarding-builder
3. paywall-library
4. paywall-localization
5. paywall-targeting
6. predictive-analytics
7. ai-paywall-generator
8. ltv-analytics
9. refund-saver
10. remote-config
11. fallback-paywalls
12. revenue-growth
13. autopilot
14. sdk

### Tier 2: Role Pages
1. for-marketers
2. for-developers
3. for-app-owners
4. for-indie

### Tier 3: Compare Pages
1. compare/revenuecat
2. compare/superwall
3. compare/qonversion
4. compare/purchasely
5. compare/in-house-development

### Tier 4: Other Pages
1. schedule-demo
2. why-adapty
3. state-of-in-app-subscriptions

## WORKFLOW

For EACH page above:

```
1. Read the features section file
2. Check: Does EVERY card have a MagicArea/animation component?
   - If NO: Add magic animations to missing cards
   - If YES: Verify animation quality
3. Check: Is useReducedMotion used properly?
   - If NO: Add it
4. Check: Are react-best-practices followed?
   - If NO: Fix violations
5. Check: Is the section in debug menu?
   - If NO: Add to debug-context.tsx and DebugMenu.tsx
6. Run: pnpm tsc --noEmit to verify no TypeScript errors
7. Move to next page
```

## MAGIC ANIMATION REQUIREMENTS

Each card's magic animation should:
- Be unique to the feature it represents
- Use motion/react primitives
- Have subtle, professional movement (not flashy)
- Loop infinitely or respond to state changes
- Be small (60-100px height typically)

### Animation Templates by Category

**Analytics/Metrics:**
```tsx
function MetricMagic() {
  return (
    <div className="mt-4 space-y-2">
      <motion.div
        animate={{ width: ['30%', '70%', '50%'] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="h-1.5 bg-primary rounded-full"
      />
    </div>
  );
}
```

**A/B Testing:**
```tsx
function ABMagic() {
  return (
    <div className="mt-4 flex gap-2">
      {['A', 'B'].map((v, i) => (
        <motion.div
          key={v}
          animate={{ height: i === 1 ? ['40%', '80%'] : ['40%', '50%'] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className={cn('w-8 rounded-t', i === 1 ? 'bg-primary' : 'bg-muted')}
        />
      ))}
    </div>
  );
}
```

**Text/Language:**
```tsx
function TextCycleMagic() {
  const [index, setIndex] = React.useState(0);
  const items = ['English', 'Spanish', 'German'];

  React.useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % items.length), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
      >
        {items[index]}
      </motion.span>
    </AnimatePresence>
  );
}
```

**Sync/Real-time:**
```tsx
function SyncMagic() {
  return (
    <div className="flex items-center gap-2">
      <div className="size-3 rounded-full bg-primary relative">
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
      </div>
      <span className="text-xs text-primary">Live</span>
    </div>
  );
}
```

## DEBUG MENU VERIFICATION

For each page, ensure in `lib/debug-context.tsx`:

1. Type exists: `export type XxxFeaturesVariant = 'grid' | 'bento' | 'tabs' | 'off'`
2. Options array: `export const XXX_FEATURES_VARIANTS = [...] as const`
3. State in DebugState interface
4. Setter in DebugContextValue
5. Hook exported: `export function useXxxFeaturesVariant()`

And in `components/debug/DebugMenu.tsx`:

1. Import the variant array
2. Add to PageSections type
3. Add page config in PAGE_SECTIONS object
4. Add controls in render

## FINAL QUALITY GATES

Before marking ANY page complete:

1. `pnpm tsc --noEmit` passes
2. Every feature card has a visible animation
3. Hover states work on all interactive elements
4. useReducedMotion is respected
5. No console errors
6. Debug menu can toggle all variants

## SESSION CONTINUITY

Keep working until EVERY page passes ALL verification checks. If you find issues, fix them immediately. Do not skip pages. Do not mark complete until verified.

This is the final polish phase. Quality over speed.
