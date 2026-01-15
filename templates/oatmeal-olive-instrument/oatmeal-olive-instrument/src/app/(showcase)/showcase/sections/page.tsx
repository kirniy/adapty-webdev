import Link from 'next/link'

// Sections that can be viewed standalone (no required data props)
const viewableSections = new Set([
  'hero-centered-with-demo',
  'hero-centered-with-photo',
  'hero-left-aligned-with-demo',
  'hero-left-aligned-with-photo',
  'hero-simple-centered',
  'hero-simple-left-aligned',
  'hero-two-column-with-photo',
  'hero-with-demo-on-background',
  'features-stacked-alternating-with-demos',
  'features-three-column',
  'features-three-column-with-demos',
  'features-two-column-with-demos',
  'features-with-large-demo',
  'navbar-with-links-actions-and-centered-logo',
  'navbar-with-logo-actions-and-centered-links',
  'navbar-with-logo-actions-and-left-aligned-links',
  'footer-with-link-categories',
  'footer-with-links-and-social-icons',
  'footer-with-newsletter-form-categories-and-social-icons',
  'faqs-accordion',
  'faqs-two-column-accordion',
  'call-to-action-simple',
  'call-to-action-simple-centered',
  'document-centered',
  'document-left-aligned',
  'brands-cards-multi-column',
])

const sections = {
  'Heroes (8)': [
    { name: 'hero-centered-with-demo', desc: 'Centered layout with demo screenshot' },
    { name: 'hero-centered-with-photo', desc: 'Centered layout with photo' },
    { name: 'hero-left-aligned-with-demo', desc: 'Left-aligned with demo screenshot' },
    { name: 'hero-left-aligned-with-photo', desc: 'Left-aligned with photo' },
    { name: 'hero-simple-centered', desc: 'Simple centered hero' },
    { name: 'hero-simple-left-aligned', desc: 'Simple left-aligned hero' },
    { name: 'hero-two-column-with-photo', desc: 'Two column layout with photo' },
    { name: 'hero-with-demo-on-background', desc: 'Demo on decorative background' },
  ],
  'Features (5)': [
    { name: 'features-stacked-alternating-with-demos', desc: 'Alternating stacked features with demos' },
    { name: 'features-three-column', desc: 'Three column feature grid' },
    { name: 'features-three-column-with-demos', desc: 'Three column with demo screenshots' },
    { name: 'features-two-column-with-demos', desc: 'Two column with demo screenshots' },
    { name: 'features-with-large-demo', desc: 'Features with large demo showcase' },
  ],
  'Pricing (4)': [
    { name: 'plan-comparison-table', desc: 'Feature comparison table' },
    { name: 'pricing-hero-multi-tier', desc: 'Hero section with pricing tiers' },
    { name: 'pricing-multi-tier', desc: 'Multi-tier pricing cards' },
    { name: 'pricing-single-tier-two-column', desc: 'Single tier two column layout' },
  ],
  'Testimonials (3)': [
    { name: 'testimonial-two-column-with-large-photo', desc: 'Two column with large photo' },
    { name: 'testimonial-with-large-quote', desc: 'Large quote testimonial' },
    { name: 'testimonials-three-column-grid', desc: 'Three column testimonial grid' },
  ],
  'Stats (3)': [
    { name: 'stats-four-columns', desc: 'Four column stats' },
    { name: 'stats-three-column-with-description', desc: 'Three column with descriptions' },
    { name: 'stats-with-graph', desc: 'Stats with decorative graph' },
  ],
  'Navbars (3)': [
    { name: 'navbar-with-links-actions-and-centered-logo', desc: 'Centered logo with links' },
    { name: 'navbar-with-logo-actions-and-centered-links', desc: 'Logo left, centered links' },
    { name: 'navbar-with-logo-actions-and-left-aligned-links', desc: 'Logo and links left-aligned' },
  ],
  'Footers (3)': [
    { name: 'footer-with-link-categories', desc: 'Footer with link categories' },
    { name: 'footer-with-links-and-social-icons', desc: 'Links and social icons' },
    { name: 'footer-with-newsletter-form-categories-and-social-icons', desc: 'Newsletter, links, social' },
  ],
  'FAQs (2)': [
    { name: 'faqs-accordion', desc: 'Single column accordion' },
    { name: 'faqs-two-column-accordion', desc: 'Two column accordion' },
  ],
  'CTAs (2)': [
    { name: 'call-to-action-simple', desc: 'Simple call to action' },
    { name: 'call-to-action-simple-centered', desc: 'Centered call to action' },
  ],
  'Team (2)': [
    { name: 'team-four-column-grid', desc: 'Four column team grid' },
    { name: 'team-three-column-grid', desc: 'Three column team grid' },
  ],
  'Documents (2)': [
    { name: 'document-centered', desc: 'Centered document layout' },
    { name: 'document-left-aligned', desc: 'Left-aligned document layout' },
  ],
  'Brands (1)': [
    { name: 'brands-cards-multi-column', desc: 'Multi-column brand cards' },
  ],
}

export default function SectionsShowcase() {
  const totalSections = Object.values(sections).flat().length

  return (
    <div className="min-h-screen bg-olive-100">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/showcase" className="text-sm text-olive-500 hover:text-olive-700">
            ← Back to Showcase
          </Link>
          <h1 className="mt-2 font-display text-4xl text-olive-950">
            Sections ({totalSections})
          </h1>
          <p className="mt-2 text-olive-600">
            Pre-built page sections you can mix and match
          </p>
        </div>

        {/* Sections by Category */}
        <div className="space-y-12">
          {Object.entries(sections).map(([category, items]) => (
            <div key={category}>
              <h2 className="mb-4 font-display text-2xl text-olive-950">
                {category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((section) => {
                  const isViewable = viewableSections.has(section.name)

                  if (isViewable) {
                    return (
                      <Link
                        key={section.name}
                        href={`/showcase/sections/${section.name}`}
                        className="group rounded-xl border border-olive-200 bg-white p-5 transition hover:border-olive-400 hover:shadow-md"
                      >
                        <h3 className="font-medium text-olive-900 group-hover:text-olive-700">
                          {section.name}
                        </h3>
                        <p className="mt-1 text-sm text-olive-500">
                          {section.desc}
                        </p>
                        <div className="mt-3 text-xs font-medium text-olive-400 group-hover:text-olive-600">
                          View section →
                        </div>
                      </Link>
                    )
                  }

                  return (
                    <div
                      key={section.name}
                      className="rounded-xl border border-olive-200 bg-white/50 p-5"
                    >
                      <h3 className="font-medium text-olive-700">
                        {section.name}
                      </h3>
                      <p className="mt-1 text-sm text-olive-500">
                        {section.desc}
                      </p>
                      <div className="mt-3 text-xs text-olive-400">
                        Requires data props — view in page templates
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 rounded-xl border border-olive-200 bg-olive-50 p-6">
          <h3 className="font-medium text-olive-900">How to use sections</h3>
          <p className="mt-2 text-sm text-olive-600">
            Each section is a self-contained React component. Import it from <code className="rounded bg-olive-200 px-1">@/components/sections/[name]</code> and compose them to build your pages. See the page templates for examples of how sections work together.
          </p>
          <p className="mt-2 text-sm text-olive-600">
            Sections marked "Requires data props" need arrays of data (testimonials, pricing tiers, team members, etc.) passed to them. Check the page templates to see them in action with real data.
          </p>
        </div>
      </div>
    </div>
  )
}
