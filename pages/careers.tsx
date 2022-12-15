import { Header, Footer } from '@ui'
import { getDatabase, careersDatabaseId } from '@lib'
import { Cta, Careers } from '@components'

export default function Home({ careers }) {
  return (
    <div>
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
