import { Client } from '@notionhq/client'

export const blogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID

const notion = new Client({
  auth: process.env.NOTION_KEY
})

export const getDatabase = async (databaseId: string, options?: any) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    ...options
  })
  return response.results
}

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50
  })
  return response.results
}

export const getAllElements = async (blocks: []) => {
  const children = await Promise.all(
    blocks.map(async (block) => {
      if (block.has_children) {
        block[block.type]['children'] = await getAllElements(
          await getBlocks(block.id)
        )
      }

      return {
        ...block
      }
    })
  )

  return children
}
