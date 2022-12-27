import { Header, Footer, Meta, Container } from '@ui'
import { getDatabase, careersDatabaseId } from '@lib'
import { Cta, Careers, CommunityEditionSignup } from '@components'

export default function CommunityEdition() {
  return (
    <div>
      <Meta
        meta={{
          title: 'CloudNatix | Careers',
          description:
            'If you are passionate about future of compute infrastructure, want to simplify infrastructure while making it efficient, we are the company for you. We are looking for engineering talents for the following positions.'
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
