import { Header, Footer } from '@ui'
import {
  Cta,
  EverythingYouNeed,
  HeroSection,
  Testimonials,
  TrustedBy,
  Pricing
} from '@components'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustedBy />
      <EverythingYouNeed />
      <Cta />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}
