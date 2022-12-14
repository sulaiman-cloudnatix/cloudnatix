import { ReactElement } from 'react'
import { Text, P } from '@notion/ui'

export function ListItem({ isChild, value, callback }): ReactElement {
  return (
    <div className=''>
      <div className='flex'>
        {isChild ? (
          <span className='mr-3 mt-2 h-2 w-2 rounded-full border border-black'>
            &nbsp;
          </span>
        ) : (
          <span className='mr-3 mt-2 h-2 w-2 rounded-full bg-black'>
            &nbsp;
          </span>
        )}

        <div className='w-full'>
          <P>
            <Text text={value.rich_text} />
          </P>
        </div>
      </div>
      <div className='ml-6'>
        {(value.children || value.has_children) &&
          value.children.map((block: any) => {
            return <div key={block.id}>{callback(block)}</div>
          })}
      </div>
    </div>
  )
}
