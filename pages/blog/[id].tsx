import { Container, Footer, Header, Text } from '@ui'
import {
  getDatabase,
  blogDatabaseId,
  getBlocks,
  getPage,
  getAllElements
} from '@lib'
import { NotionPage } from '@notion'
import { H1 } from '@notion/ui'
import React, { ReactElement } from 'react'
import { Cta } from '@components'

export default function Post({ page, blocks }): ReactElement {
  if (!page || !blocks) {
    return <div />
  }

  const fullDate = new Date(page.properties.Date.date.start)
  const date = fullDate.toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  const { Title, Description, Content, Date: PostDate } = page.properties

  const title = Title.rich_text[0].plain_text
  const description = Description.rich_text[0].plain_text

  return (
    <>
      <Header />
      <Container className='mx-auto max-w-4xl mt-12 md:mt-24 mb-24'>
        {/* <Layout
        customMeta={{
          title: `Imam Zayd | ${page.properties.Post.title[0].plain_text}`,
          description: page.properties.Summary.rich_text[0].plain_text
        }}
      > */}
        <div className='mx-auto mb-6'>
          <H1>{title}</H1>

          <div className='my-10 flex items-center justify-between'>
            <div className='flex'>
              <p>{date}</p>
            </div>
          </div>
        </div>
        <NotionPage page={page} blocks={blocks} />
        {/* </Layout> */}
      </Container>
      <Cta />
      <Footer />
    </>
  )
}

export const getStaticPaths = async () => {
  const database = await getDatabase(blogDatabaseId)

  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: false
  }
}

export const getStaticProps = async (context: { params: { id: any } }) => {
  const { id } = context.params
  const page = await getPage(id)

  const blocks = await getBlocks(id)

  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const allElements = await getAllElements(blocks)

  return {
    props: {
      page,
      blocks: allElements
    },
    revalidate: 1
  }
}
