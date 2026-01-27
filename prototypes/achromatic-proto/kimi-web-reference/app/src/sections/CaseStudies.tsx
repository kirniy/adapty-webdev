import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const cases = [
  {
    company: 'Welmi',
    category: 'Health & Fitness',
    metric: '3x growth in MRR',
    description: 'Steady growth with Adapty UA',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    company: 'Productivity app',
    category: 'Productivity',
    metric: '+50% in total revenue',
    description: 'How pricing tests unlocked app\'s potential',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    company: 'Text on Pic',
    category: 'Photo & Video',
    metric: 'Over 30% MRR growth',
    description: 'How to boost revenue with the right experiments',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    company: 'Trip planning',
    category: 'Travel',
    metric: '+102% ARPU growth',
    description: 'New onboarding and pricing strategy doubled revenue per user',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    company: 'Going Merry',
    category: 'App publisher',
    metric: '5x MRR growth',
    description: 'How to scale subscription revenue with Paywall Builder',
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    company: 'Shmoody',
    category: 'Mental health',
    metric: 'ARR scaled from $0 to $2M',
    description: 'How to grow from a free app to $2M ARR with Adapty',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    company: 'Lively',
    category: 'Health & Fitness',
    metric: 'Refund rate dropped by 83%',
    description: 'Saved 82% of potentially lost revenue',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    company: 'Glam AI',
    category: 'Makeup & Beauty',
    metric: 'ROAS from Adapty – 108%',
    description: 'How to scale to $1.2M ARR in 3 months',
    gradient: 'from-fuchsia-500 to-pink-500'
  },
  {
    company: 'Pepapp',
    category: 'Health & Fitness',
    metric: '400% ROI on Adapty',
    description: 'How to make Adapty free with Refund Saver',
    gradient: 'from-red-500 to-orange-500'
  }
]

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
            Read the real cases of our customers
          </h2>
        </div>

        {/* Case studies grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cases.map((caseStudy, index) => (
            <a
              key={index}
              href={`/case-studies/${caseStudy.company.toLowerCase().replace(/\s+/g, '-')}`}
              className={`group bg-white rounded-xl p-6 border border-neutral-100 hover:shadow-lg hover:border-violet-200 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50 + 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${caseStudy.gradient} flex items-center justify-center text-white font-bold`}>
                  {caseStudy.company[0]}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{caseStudy.company}</div>
                  <div className="text-sm text-neutral-500">{caseStudy.category}</div>
                </div>
              </div>
              <div className="text-lg font-bold text-violet-600 mb-2">
                {caseStudy.metric}
              </div>
              <p className="text-neutral-600 text-sm mb-4">
                {caseStudy.description}
              </p>
              <div className="flex items-center gap-2 text-violet-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Read more
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Read all cases link */}
        <div className="text-center">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium transition-colors"
          >
            Read all cases
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
