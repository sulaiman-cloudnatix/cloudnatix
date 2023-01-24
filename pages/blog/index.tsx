import { Header, Footer, Meta } from '@ui'
import { Cta, Blog } from '@components'
import { getDatabase, blogDatabaseId } from '@lib'

export default function Home({ allPosts }) {
  return (
    <div>
      <Meta
        meta={{
          title: 'CloudNatix | Blog',
          description: 'Stay up to date with articles from CloudNatix.'
        }}
      />
      <Header />
      <Blog posts={allPosts.reverse()} />
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
