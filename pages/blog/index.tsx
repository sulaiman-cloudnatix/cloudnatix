import { Header, Footer } from '@ui'
import { Cta, Blog } from '@components'
import { getDatabase, blogDatabaseId } from '@lib'

export default function Home({ allPosts }) {
  return (
    <div>
      <Header />
      <Blog posts={allPosts} />
      <Cta />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const database = await getDatabase(blogDatabaseId)

  return {
    props: {
      allPosts: database
    },
    revalidate: 1
  }
}
