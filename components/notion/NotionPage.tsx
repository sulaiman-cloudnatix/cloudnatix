import React, { ReactElement, Fragment } from 'react'
import { RenderBlock } from '@notion'

export function NotionPage({ page, blocks }): ReactElement {
  if (!page || !blocks) {
    return <div />
  }
  return (
    <>
      <article>
        {blocks.map((block) => (
          <Fragment key={block.id}>{RenderBlock(block)}</Fragment>
        ))}
      </article>
    </>
  )
}
