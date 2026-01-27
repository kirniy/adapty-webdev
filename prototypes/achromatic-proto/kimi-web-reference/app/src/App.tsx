import './App.css'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import LogoStrip from './sections/LogoStrip'
import FeatureCards from './sections/FeatureCards'
import StatsSection from './sections/StatsSection'
import SDKSection from './sections/SDKSection'
import PlatformSDKs from './sections/PlatformSDKs'
import PaywallBuilder from './sections/PaywallBuilder'
import RefundSaver from './sections/RefundSaver'
import AnalyticsSection from './sections/AnalyticsSection'
import FunnelFox from './sections/FunnelFox'
import IntegrationsSection from './sections/IntegrationsSection'
import Testimonials from './sections/Testimonials'
import EnterpriseSection from './sections/EnterpriseSection'
import CaseStudies from './sections/CaseStudies'
import CTASection from './sections/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <LogoStrip />
        <FeatureCards />
        <StatsSection />
        <SDKSection />
        <PlatformSDKs />
        <PaywallBuilder />
        <RefundSaver />
        <AnalyticsSection />
        <FunnelFox />
        <IntegrationsSection />
        <Testimonials />
        <EnterpriseSection />
        <CaseStudies />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
