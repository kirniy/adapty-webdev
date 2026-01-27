import { useState } from 'react'
import { Github, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SDKSection = () => {
  const [activeTab, setActiveTab] = useState('swift')
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const codeExamples: Record<string, string> = {
    swift: `import Adapty

do {
  try await Adapty.activate(
    "PUBLIC_SDK_KEY"
  )
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
    kotlin: `import com.adapty.Adapty

Adapty.activate(
  context,
  "PUBLIC_SDK_KEY"
) { error ->
  // handle the error
}
// Make a purchase
Adapty.makePurchase(activity, product) { result ->
  // handle the result
}`,
    react: `import { adapty } from 'react-native-adapty';

adapty.activate('PUBLIC_SDK_KEY');
// Make a purchase
const purchase = await adapty.makePurchase(product);
// successful purchase`,
    flutter: `import 'package:adapty_flutter/adapty_flutter.dart';

await Adapty().activate('PUBLIC_SDK_KEY');
// Make a purchase
final purchase = await Adapty().makePurchase(product);
// successful purchase`,
    unity: `using AdaptySdk;

Adapty.Activate("PUBLIC_SDK_KEY");
// Make a purchase
Adapty.MakePurchase(product, (result, error) => {
  // handle the result
});`,
  }

  const tabs = [
    { id: 'swift', label: 'Swift' },
    { id: 'kotlin', label: 'Kotlin' },
    { id: 'react', label: 'React Native' },
    { id: 'flutter', label: 'Flutter' },
    { id: 'unity', label: 'Unity' },
  ]

  return (
    <section ref={ref} className="relative py-24 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
              Integrate in-app purchases with a few lines of code
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Integrate IAPs within a few hours without server coding. Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK.
            </p>

            <a
              href="/sdk"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium mb-10 transition-colors"
            >
              Make subscriptions easy
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Testimonial */}
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <div>
                  <div className="font-semibold">Smitten</div>
                </div>
              </div>
              <p className="text-neutral-300 italic mb-4">
                "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-600" />
                <div>
                  <div className="text-sm font-medium">Magnús Ólafsson</div>
                  <div className="text-xs text-neutral-500">Chief Technology Officer at Smitten</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Code block */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border border-neutral-700 bg-[#1a1a2e]">
              {/* Tabs */}
              <div className="flex border-b border-neutral-700 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'text-white border-b-2 border-violet-500'
                        : 'text-neutral-400 hover:text-neutral-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Code */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-neutral-300">
                  <code>{codeExamples[activeTab]}</code>
                </pre>
              </div>

              {/* GitHub link */}
              <div className="px-6 py-4 border-t border-neutral-700 flex items-center justify-between">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Github className="w-5 h-5" />
                  <span className="text-sm">100% Open Source</span>
                </div>
                <a 
                  href="https://github.com/adaptyteam" 
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  Go to GitHub
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SDKSection
