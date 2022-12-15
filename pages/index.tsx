import { Header, Footer, Meta } from '@ui'
import { getDatabase, blogDatabaseId } from '@lib'
import {
  Cta,
  EverythingYouNeed,
  HeroSection,
  Testimonials,
  TrustedBy,
  Pricing,
  FromTheBlog
} from '@components'

export default function Home({ posts }) {
  return (
    <div>
      <Meta />
      <Header />
      <HeroSection />
      <TrustedBy />
      <EverythingYouNeed />
      <Cta />
      <FromTheBlog posts={posts} />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const database = await getDatabase(blogDatabaseId, { page_size: 3 })

  return {
    props: {
      posts: database
    },
    revalidate: 1
  }
}
