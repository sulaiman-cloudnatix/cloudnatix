import { Header, Footer, Meta } from '@ui'
import {
  AboutUs,
  Cta,
  EverythingYouNeed,
  HeroSection,
  Testimonials,
  TrustedBy,
  Pricing
} from '@components'

export default function About() {
  return (
    <div>
      <Meta
        meta={{
          title: 'CloudNatix | Meet the team',
          description:
            'Our mission is to accelerate innovation with efficient infrastructure.'
        }}
      />
      <Header />
      <AboutUs />
      <Footer />
    </div>
  )
}
