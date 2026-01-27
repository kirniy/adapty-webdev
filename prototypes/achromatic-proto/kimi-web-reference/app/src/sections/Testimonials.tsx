import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    quote: "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure. They have a great external API that makes it easy to pass related events to other analytics tools like Amplitude and Mixpanel.",
    author: 'Kyle Smith',
    role: 'Head of data at Smitten Dating',
    company: 'Smitten',
    gradient: 'from-pink-500 to-orange-500'
  },
  {
    quote: "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
    author: 'Ilgar Tali',
    role: 'Founder & Chief Vision Officer',
    company: 'App Publisher',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    quote: "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away.",
    author: 'Berk Çağatay Albayrak',
    role: 'Sr. Product Manager',
    company: 'Fotorama',
    gradient: 'from-emerald-500 to-teal-500'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section ref={ref} className="relative py-24 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Developers from all kinds of apps move to Adapty to grow their revenue
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div 
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient} rounded-2xl transition-all duration-500`} />
              <div className="absolute inset-4 bg-neutral-800 rounded-xl flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>
            </div>

            {/* Quote */}
            <div className="relative">
              <div className="text-6xl text-violet-500 mb-4">"</div>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed transition-all duration-300">
                {current.quote}
              </p>
              <div>
                <div className="text-lg font-semibold text-white">
                  {current.author}
                </div>
                <div className="text-neutral-400">
                  {current.role}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-3 mt-10">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? 'bg-violet-500 w-6' : 'bg-neutral-600 hover:bg-neutral-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
