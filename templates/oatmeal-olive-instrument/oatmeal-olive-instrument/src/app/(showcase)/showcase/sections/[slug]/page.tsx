import Link from 'next/link'
import { notFound } from 'next/navigation'

// Import all sections
import { BrandsCardsMultiColumn } from '@/components/sections/brands-cards-multi-column'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentCentered } from '@/components/sections/document-centered'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { FAQsAccordion } from '@/components/sections/faqs-accordion'
import { FAQsTwoColumnAccordion } from '@/components/sections/faqs-two-column-accordion'
import { FeaturesStackedAlternatingWithDemos } from '@/components/sections/features-stacked-alternating-with-demos'
import { Features as FeaturesThreeColumnWithDemos } from '@/components/sections/features-three-column-with-demos'
import { FeaturesThreeColumn } from '@/components/sections/features-three-column'
import { FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { FeaturesWithLargeDemo } from '@/components/sections/features-with-large-demo'
import { FooterWithLinkCategories } from '@/components/sections/footer-with-link-categories'
import { FooterWithLinksAndSocialIcons } from '@/components/sections/footer-with-links-and-social-icons'
import { FooterWithNewsletterFormCategoriesAndSocialIcons } from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import { HeroCenteredWithDemo } from '@/components/sections/hero-centered-with-demo'
import { HeroCenteredWithPhoto } from '@/components/sections/hero-centered-with-photo'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { HeroSimpleLeftAligned } from '@/components/sections/hero-simple-left-aligned'
import { HeroTwoColumnWithPhoto } from '@/components/sections/hero-two-column-with-photo'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'
import { NavbarWithLinksActionsAndCenteredLogo } from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import { NavbarWithLogoActionsAndCenteredLinks } from '@/components/sections/navbar-with-logo-actions-and-centered-links'
import { NavbarWithLogoActionsAndLeftAlignedLinks } from '@/components/sections/navbar-with-logo-actions-and-left-aligned-links'
import { PlanComparisonTable } from '@/components/sections/plan-comparison-table'
import { PricingHeroMultiTier } from '@/components/sections/pricing-hero-multi-tier'
import { PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { PricingSingleTierTwoColumn } from '@/components/sections/pricing-single-tier-two-column'
import { StatsFourColumns } from '@/components/sections/stats-four-columns'
import { StatsThreeColumnWithDescription } from '@/components/sections/stats-three-column-with-description'
import { StatsWithGraph } from '@/components/sections/stats-with-graph'
import { TeamFourColumnGrid } from '@/components/sections/team-four-column-grid'
import { TeamThreeColumnGrid } from '@/components/sections/team-three-column-grid'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'
import { TestimonialLargeQuote as TestimonialWithLargeQuote } from '@/components/sections/testimonial-with-large-quote'
import { TestimonialThreeColumnGrid as TestimonialsThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sections: Record<string, React.ComponentType<any>> = {
  'brands-cards-multi-column': BrandsCardsMultiColumn,
  'call-to-action-simple-centered': CallToActionSimpleCentered,
  'call-to-action-simple': CallToActionSimple,
  'document-centered': DocumentCentered,
  'document-left-aligned': DocumentLeftAligned,
  'faqs-accordion': FAQsAccordion,
  'faqs-two-column-accordion': FAQsTwoColumnAccordion,
  'features-stacked-alternating-with-demos': FeaturesStackedAlternatingWithDemos,
  'features-three-column-with-demos': FeaturesThreeColumnWithDemos,
  'features-three-column': FeaturesThreeColumn,
  'features-two-column-with-demos': FeaturesTwoColumnWithDemos,
  'features-with-large-demo': FeaturesWithLargeDemo,
  'footer-with-link-categories': FooterWithLinkCategories,
  'footer-with-links-and-social-icons': FooterWithLinksAndSocialIcons,
  'footer-with-newsletter-form-categories-and-social-icons': FooterWithNewsletterFormCategoriesAndSocialIcons,
  'hero-centered-with-demo': HeroCenteredWithDemo,
  'hero-centered-with-photo': HeroCenteredWithPhoto,
  'hero-left-aligned-with-demo': HeroLeftAlignedWithDemo,
  'hero-left-aligned-with-photo': HeroLeftAlignedWithPhoto,
  'hero-simple-centered': HeroSimpleCentered,
  'hero-simple-left-aligned': HeroSimpleLeftAligned,
  'hero-two-column-with-photo': HeroTwoColumnWithPhoto,
  'hero-with-demo-on-background': HeroWithDemoOnBackground,
  'navbar-with-links-actions-and-centered-logo': NavbarWithLinksActionsAndCenteredLogo,
  'navbar-with-logo-actions-and-centered-links': NavbarWithLogoActionsAndCenteredLinks,
  'navbar-with-logo-actions-and-left-aligned-links': NavbarWithLogoActionsAndLeftAlignedLinks,
  // Components below require data props - view them in page templates instead
  // 'plan-comparison-table': PlanComparisonTable,
  // 'pricing-hero-multi-tier': PricingHeroMultiTier,
  // 'pricing-multi-tier': PricingMultiTier,
  // 'pricing-single-tier-two-column': PricingSingleTierTwoColumn,
  // 'stats-four-columns': StatsFourColumns,
  // 'stats-three-column-with-description': StatsThreeColumnWithDescription,
  // 'stats-with-graph': StatsWithGraph,
  // 'team-four-column-grid': TeamFourColumnGrid,
  // 'team-three-column-grid': TeamThreeColumnGrid,
  // 'testimonial-two-column-with-large-photo': TestimonialTwoColumnWithLargePhoto,
  // 'testimonial-with-large-quote': TestimonialWithLargeQuote,
  // 'testimonials-three-column-grid': TestimonialsThreeColumnGrid,
}

export function generateStaticParams() {
  return Object.keys(sections).map((slug) => ({ slug }))
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const Section = sections[slug]

  if (!Section) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-olive-200 bg-olive-50 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <Link
              href="/showcase/sections"
              className="text-sm text-olive-500 hover:text-olive-700"
            >
              ← Back to Sections
            </Link>
            <h1 className="mt-1 font-display text-xl text-olive-950">{slug}</h1>
          </div>
          <code className="rounded bg-olive-200 px-2 py-1 text-xs text-olive-700">
            @/components/sections/{slug}
          </code>
        </div>
      </div>

      {/* Section Preview */}
      <div className="overflow-hidden">
        <Section />
      </div>
    </div>
  )
}
