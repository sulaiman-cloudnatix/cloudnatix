import { Header, Footer, Meta, Container } from '@ui'
import { getDatabase, careersDatabaseId } from '@lib'
import { Cta, Careers, CommunityEditionSignup } from '@components'

export default function CommunityEdition() {
  return (
    <div>
      <Meta
        meta={{
          title: 'CloudNatix | Community Edition',
          description: 'Sign up for CloudNatix Community Edition for free!'
        }}
      />
      <Header />
      <Container className='mb-24 mt-12'>
        <CommunityEditionSignup />
      </Container>
      <Cta />
      <Footer />
    </div>
  )
}
