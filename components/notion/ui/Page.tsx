import { Fragment, ReactElement } from 'react'
import { H2 } from '@notion/ui'
import { RenderBlock } from '@notion'

export function Page({ blocks }: { blocks: any }): ReactElement {
  return (
    <article>
      <section className='mx-auto max-w-2xl'>
        <H2>{blocks.title}</H2>
        {blocks.children.map((block: any) => (
          <Fragment key={block.id}>{RenderBlock(block)}</Fragment>
        ))}
      </section>
    </article>
  )
}
