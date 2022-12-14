import { Fragment, ReactElement } from 'react'
import { RenderBlock } from '@notion'
import { H4, Text } from '@notion/ui'

export function Toggle({ value }: { value: any }): ReactElement {
  return (
    <details className='rounded-md bg-gray-100'>
      <summary className='relative rounded-md p-3 py-5 hover:bg-gray-200'>
        <H4 className='absolute bottom-4 ml-3'>
          <Text text={value.rich_text} />
        </H4>
      </summary>
      <div className='rounded-md bg-gray-100 p-3'>
        <div className='rounded-md bg-white p-5'>
          {value.children?.map((block: any) => (
            <Fragment key={block.id}>{RenderBlock(block)}</Fragment>
          ))}
        </div>
      </div>
    </details>
  )
}
