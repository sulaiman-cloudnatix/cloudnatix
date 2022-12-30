import { Header, Footer, Meta, Container } from '@ui'
import { Cta, Contact } from '@components'

export default function ContactHome() {
  return (
    <div>
      <Meta
        meta={{
          title: 'CloudNatix | Contact',
          description: 'Contact CloudNatix sales team.'
        }}
      />
      <Header />
      <Container className='mb-24 mt-12'>
        <Contact />
      </Container>
      <Cta />
      <Footer />
    </div>
  )
}
