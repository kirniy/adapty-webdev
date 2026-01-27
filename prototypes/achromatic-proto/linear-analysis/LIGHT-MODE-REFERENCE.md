# Light Mode Adaptation - From Kimi Web Reference

**Source**: `kimi-web-reference/app/` - A separate Kimi attempt with excellent modal implementation

This document adapts Linear's dark theme patterns to our light mode design.

---

## COLOR SYSTEM ADAPTATION

### Dark to Light Mapping

| Linear (Dark) | Adapty (Light) | Usage |
|---------------|----------------|-------|
| `#000000` | `#FFFFFF` | Page background |
| `#111111` | `#FAFAFA` | Card background |
| `white/10` | `neutral-200` | Borders |
| `white/60` | `neutral-500` | Secondary text |
| `white/40` | `neutral-400` | Muted text |
| `#FFFFFF` | `neutral-900` | Primary text |

---

## MODAL SYSTEM (FROM WEB REFERENCE)

### Modal Animation CSS
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
```

### Modal Structure (Working Implementation)
```tsx
const Modal = ({ feature, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop - LIGHT MODE */}
      <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm animate-fade-in" />

      {/* Modal content */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 transition-all z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image - ASPECT VIDEO */}
        <div className="aspect-video overflow-hidden">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
            {feature.title}
          </h3>
          <p className="text-neutral-500 leading-relaxed mb-8">
            {feature.description}
          </p>

          {/* Stats - 3 column grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {feature.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-semibold text-neutral-900">{stat.value}</div>
                <div className="text-xs text-neutral-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Separator - subtle gradient */}
          <div className="h-px bg-neutral-100 mb-8" />

          {/* Quote */}
          <blockquote className="text-neutral-600 italic mb-6 leading-relaxed">
            "{feature.quote}"
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-sm font-semibold">
              {feature.author[0]}
            </div>
            <div>
              <div className="text-sm font-medium text-neutral-900">{feature.author}</div>
              <div className="text-xs text-neutral-400">{feature.role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

## CARD SYSTEM (LIGHT MODE)

### Feature Cards
```tsx
className="group relative rounded-2xl border border-neutral-200 bg-neutral-50/50 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1"
```

### Card Content Structure
```tsx
<div className="aspect-[4/3] overflow-hidden">
  <img
    src={feature.image}
    alt={feature.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

<div className="p-5">
  <h3 className="text-lg font-medium text-neutral-900 mb-3">
    {feature.title}
  </h3>
  <div className="flex flex-wrap gap-x-3 gap-y-1">
    {feature.items.map((item, i) => (
      <span key={i} className="text-sm text-neutral-500">
        {item}
        {i < feature.items.length - 1 && <span className="ml-3 text-neutral-300">|</span>}
      </span>
    ))}
  </div>
</div>

{/* Plus button */}
<button className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 hover:shadow-md transition-all duration-200">
  <Plus className="w-4 h-4" />
</button>
```

---

## UTILITY CSS CLASSES

### From App.css
```css
/* Card lift effect */
.card-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* Image hover zoom */
.img-hover-zoom img {
  transition: transform 0.5s ease;
}

.img-hover-zoom:hover img {
  transform: scale(1.05);
}

/* Button hover lift */
.btn-hover-lift:hover {
  transform: translateY(-1px);
}

.btn-hover-lift:active {
  transform: translateY(0);
}

/* Link underline animation */
.link-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.3s ease;
}

.link-underline:hover::after {
  width: 100%;
}

/* Glass effect - LIGHT MODE */
.glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
}

/* Separator - gradient to transparent */
.separator {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
}

/* Modal backdrop - LIGHT MODE */
.modal-backdrop {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
}
```

---

## SECTION SPACING (LIGHT MODE)

```tsx
// Consistent section padding
className="py-24"  // 96px top/bottom

// Max container width
className="max-w-6xl mx-auto px-6"

// Grid gaps
className="grid md:grid-cols-3 gap-6"

// Section headers
<h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-4">
<p className="text-3xl sm:text-4xl font-semibold text-neutral-400">
```

---

## KEY PATTERNS TO ADOPT

1. **Modal: aspect-video for images** - No cropping
2. **Modal: bg-neutral-900/40 backdrop** - Not too dark
3. **Cards: aspect-[4/3] for images** - Consistent ratio
4. **Cards: Plus button bottom-right** - Opens modal
5. **Stats: 3-column grid** - Clean layout
6. **Quote: Author with avatar initial** - Personal touch
7. **Separators: h-px bg-neutral-100** - Subtle
8. **Hover: scale-105 on images** - Gentle zoom
9. **Hover: -translate-y-1 on cards** - Minimal lift
10. **Transitions: duration-500** - Smooth but not slow

---

## REFERENCE SERVER

The web reference is running at: **http://localhost:3012**

Use agent-browser to study it:
```bash
agent-browser open "http://localhost:3012"
agent-browser screenshot --output /tmp/kimi-ref-homepage.png
# Click on a card to see modal
agent-browser click ".group"
agent-browser wait 500
agent-browser screenshot --output /tmp/kimi-ref-modal.png
```

---

*Extracted from kimi-web-reference/app/ - Light mode implementation*
