import { Header, Footer, Meta } from '@ui'
import { getDatabase, careersDatabaseId } from '@lib'
import { Cta, Careers } from '@components'

export default function Home({ careers }) {
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
      <Careers careers={careers} />
      <Cta />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const database = await getDatabase(careersDatabaseId)

  return {
    props: {
      careers: database
    },
    revalidate: 1
  }
}
