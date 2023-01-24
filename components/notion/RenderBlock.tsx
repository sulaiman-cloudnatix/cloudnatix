import React, { Fragment, ReactElement, useState } from 'react'
import {
  Text,
  Callout,
  Quote,
  ListItem,
  Page,
  Toggle,
  H1,
  H2,
  H3,
  HR,
  ToDo,
  P
} from '@notion/ui'
import Image from 'next/image'
import { Modal } from '../ui/modal'

const getTableCells = (row: any[]): ReactElement => {
  return (
    <div className='flex justify-around'>
      {row.map((r: any, index: React.Key): ReactElement => {
        return (
          <div
            className='border-slight-100 flex w-full items-center justify-center p-3 py-5'
            key={index}
          >
            <Text text={r} />
          </div>
        )
      })}
    </div>
  )
}

export function RenderBlock(
  block: any,
  isChild?: boolean
): ReactElement | string {
  const [large, setLarge] = useState(false)
  const { type, id } = block
  const value = block[type]

  switch (type) {
    case 'paragraph':
      return (
        <P>
          <Text text={value.rich_text} />
        </P>
      )
    case 'heading_1':
      return (
        <H1>
          <Text text={value.rich_text} />
        </H1>
      )
    case 'heading_2':
      return (
        <H2>
          <Text text={value.rich_text} />
        </H2>
      )
    case 'heading_3':
      return (
        <H3>
          <Text text={value.rich_text} />
        </H3>
      )
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <ListItem
          value={value}
          isChild={isChild}
          callback={(block: any): void => RenderBlock(block, true)}
        />
      )
    case 'to_do':
      return (
        <ToDo id={id} checked={value.checked} onClick={(): null => null}>
          <Text text={value.rich_text} />
        </ToDo>
      )
    case 'toggle':
      return <Toggle value={value} />
    case 'callout':
      return (
        <Callout
          icon={value.icon.emoji}
          color={value.color}
          rich_text={value.rich_text}
        />
      )
    case 'quote':
      return <Quote rich_text={value.rich_text} color={value.color} />
    case 'divider':
      return <HR />
    case 'breadcrumb':
      return <div></div>
    case 'child_page':
      return <Page blocks={value} />
    case 'image':
      // eslint-disable-next-line no-case-declarations
      const src =
        value.type === 'external' ? value.external.url : value.file.url
      // eslint-disable-next-line no-case-declarations
      const caption =
        value.caption.length > 0 ? value.caption[0].plain_text : ''
      return (
        <>
          <Modal open={large} setOpen={setLarge}>
            <figure className='w-full flex flex-col justify-center items-center'>
              <Image
                src={src}
                alt={caption}
                width={500}
                height={500}
                priority
                className='h-full w-full'
              />
              {caption && (
                <figcaption className='mt-5 text-gray-500'>
                  {caption}
                </figcaption>
              )}
            </figure>
          </Modal>
          <figure className='w-full flex flex-col justify-center items-center'>
            <Image
              onClick={() => setLarge(true)}
              src={src}
              alt={caption}
              width={500}
              height={500}
              priority
              className='h-full w-auto cursor-pointer'
            />
            {caption && (
              <figcaption className='mt-5 text-gray-500'>{caption}</figcaption>
            )}
          </figure>
        </>
      )
    case 'column_list':
      return (
        <div>
          {value.children.map((child: any, index: number) => (
            <span key={index}>{RenderBlock(child)}</span>
          ))}
        </div>
      )
    case 'table':
      return (
        <div className='border-slight-100 w-full rounded-md border'>
          {value.children.map((child: any, index: number) => (
            <div
              className={`${index % 2 == 0 ? 'bg-slate-100' : ''}`}
              key={index}
            >
              {RenderBlock(child)}
            </div>
          ))}
        </div>
      )
    case 'table_row':
      return <div className=''>{getTableCells(value.cells)}</div>
    case 'column':
      return <div></div>
    default:
      return `❌ Unsupported block (${
        type === 'unsupported'
          ? 'This is an unsupported element. Please contact us for more details'
          : type
      })`
  }
}
