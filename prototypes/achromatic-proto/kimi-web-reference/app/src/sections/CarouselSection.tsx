import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Plus, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface CarouselItem {
  id: string
  title: string
  description: string
  image: string
  hasLink: boolean
  link?: string
}

const items: CarouselItem[] = [
  {
    id: 'sdk',
    title: 'Subscriptions SDK',
    description: 'Integrate in-app purchases with a few lines of code',
    image: '/images/feature-sdk.png',
    hasLink: true,
    link: '/sdk'
  },
  {
    id: 'analytics',
    title: 'Revenue Analytics',
    description: 'Real-time metrics and reporting dashboards',
    image: '/images/feature-analytics.png',
    hasLink: false
  },
  {
    id: 'paywall',
    title: 'Paywall Builder',
    description: 'Create and manage paywalls without code',
    image: '/images/feature-paywall.png',
    hasLink: false
  },
  {
    id: 'abtesting',
    title: 'A/B Testing',
    description: 'Optimize conversions with data-driven experiments',
    image: '/images/feature-abtesting.png',
    hasLink: true,
    link: '/ab-testing'
  },
  {
    id: 'ltv',
    title: 'LTV Predictions',
    description: 'AI-powered lifetime value forecasting',
    image: '/images/feature-ltv.png',
    hasLink: false
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect with your favorite tools',
    image: '/images/feature-integrations.png',
    hasLink: true,
    link: '/integrations'
  },
  {
    id: 'lifecycle',
    title: 'Subscription Lifecycle',
    description: 'Manage trials, renewals, and cancellations',
    image: '/images/feature-lifecycle.png',
    hasLink: false
  }
]

const CarouselSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 320
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(containerRef.current.scrollWidth - containerRef.current.clientWidth, scrollPosition + scrollAmount)
      
      containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
      setScrollPosition(newPosition)
    }
  }

  const canScrollLeft = scrollPosition > 0
  const canScrollRight = containerRef.current ? scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth : true

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tag */}
        <div 
          className={`flex items-center gap-2 mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-violet-500" />
          <a href="/features" className="group flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            All features
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Title and description */}
        <div 
          className={`grid lg:grid-cols-2 gap-8 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 leading-tight">
            Explore the complete platform
          </h2>
          <div className="flex flex-col justify-end">
            <p className="text-neutral-500 leading-relaxed">
              From SDK integration to advanced analytics, Adapty provides everything you need to manage and grow your in-app subscription business.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div 
        className={`relative transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-thin px-6 pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {/* Spacer for alignment */}
          <div className="flex-shrink-0 w-[calc((100vw-72rem)/2)]" />
          
          {items.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-72 group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative rounded-2xl border border-neutral-200 bg-neutral-50/50 overflow-hidden hover:shadow-lg hover:border-neutral-300 transition-all duration-300">
                {/* Card image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3 className="font-medium text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-500">{item.description}</p>
                </div>

                {/* Action button */}
                <div className="absolute bottom-5 right-5">
                  {item.hasLink ? (
                    <a 
                      href={item.link}
                      className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-all"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-all">
                      <Plus className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Spacer for alignment */}
          <div className="flex-shrink-0 w-6" />
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-3 mt-8">
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              canScrollLeft 
                ? 'border-neutral-300 text-neutral-600 hover:bg-neutral-50' 
                : 'border-neutral-200 text-neutral-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              canScrollRight 
                ? 'border-neutral-300 text-neutral-600 hover:bg-neutral-50' 
                : 'border-neutral-200 text-neutral-300 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CarouselSection
