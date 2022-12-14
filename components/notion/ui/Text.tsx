import { ReactElement, ReactNode } from 'react'

export const Text = ({ text }: { text: any }): ReactElement | null => {
  if (text.length == 0) {
    return (
      <span>
        <br />
      </span>
    )
  }
  return text.map(
    (
      value: {
        annotations: {
          bold: boolean
          code: boolean
          color: string
          italic: boolean
          strikethrough: boolean
          underline: boolean
        }
        text: unknown
      },
      index: number
    ) => {
      const {
        annotations: { bold, code, color, italic, strikethrough, underline },
        text
      }: { annotations: any; text: any } = value
      return (
        <span
          key={index}
          className={[
            bold && 'font-bold',
            code && 'code',
            italic && 'italic',
            strikethrough && 'line-through',
            underline && 'underline'
          ].join(' ')}
          style={color !== 'default' ? { color } : {}}
        >
          {text.link ? (
            <A
              className='text-natix hover:underline font-semibold'
              href={text.link.url}
            >
              {text.content}
            </A>
          ) : (
            text.content
          )}
        </span>
      )
    }
  )
}

interface TextProps {
  children: string | ReactNode | JSX.Element | JSX.Element[]
  className?: string
  size?: string
  attributes?: string
  onClick?: () => void
}

const sizeH1 = 'text-4xl md:text-5xl lg:text-5xl'
const attributesH1 = 'font-bold tracking-tight leading-tight mt-8 mb-5'

const sizeH2 = 'text-3xl md:text-4xl lg:text-4xl'
const attributesH2 = 'font-bold tracking-tight leading-tight mt-8 mb-5'

const sizeH3 = 'text-2xl md:text-3xl lg:text-3xl'
const attributesH3 = 'font-bold tracking-tight leading-tight mt-8 mb-5'

const sizeH4 = 'text-xl md:text-2xl lg:text-2xl'
const attributesH4 = 'font-bold tracking-tight leading-tight'

const sizeH5 = 'text-lg md:text-xl lg:text-xl'
const attributesH5 = 'font-bold tracking-tight leading-tight'

const sizeP = 'text-md sm:text-lg'
const attributesP = 'leading-relaxed'

const sizeMP = 'text-sm sm:text-md'
const attributesMP = 'leading-relaxed'

const marginHr = 'my-5'
const borderHr = 'border-slate-200'

export function HR({
  className,
  margin,
  border
}: {
  className?: string
  margin?: string
  border?: string
}): ReactElement {
  return (
    <hr
      className={`${margin ? margin : marginHr} ${
        border ? border : borderHr
      } ${className}`}
    />
  )
}

export function H1({
  children,
  className,
  onClick,
  size,
  attributes
}: TextProps): ReactElement {
  return (
    <h1
      onClick={onClick}
      className={`${size ? size : sizeH1} ${
        attributes ? attributes : attributesH1
      } ${className}`}
    >
      {children}
    </h1>
  )
}

export function H2({
  children,
  className,
  onClick,
  size,
  attributes
}: TextProps): ReactElement {
  return (
    <h2
      onClick={onClick}
      className={`${size ? size : sizeH2} ${
        attributes ? attributes : attributesH2
      } ${className}`}
    >
      {children}
    </h2>
  )
}

export function H3({
  children,
  className,
  onClick,
  size,
  attributes
}: TextProps): ReactElement {
  return (
    <h3
      onClick={onClick}
      className={`${size ? size : sizeH3} ${
        attributes ? attributes : attributesH3
      } ${className}`}
    >
      {children}
    </h3>
  )
}

export function H4({
  children,
  className,
  onClick,
  size,
  attributes
}: TextProps): ReactElement {
  return (
    <h4
      onClick={onClick}
      className={`${size ? size : sizeH4} ${
        attributes ? attributes : attributesH4
      } ${className}`}
    >
      {children}
    </h4>
  )
}

export function H5({
  children,
  className,
  onClick,
  size,
  attributes
}: TextProps): ReactElement {
  return (
    <h5
      onClick={onClick}
      className={`${size ? size : sizeH5} ${
        attributes ? attributes : attributesH5
      } ${className}`}
    >
      {children}
    </h5>
  )
}

export function P({
  children,
  className,
  onClick,
  size,
  attributes
}: TextProps): ReactElement {
  return (
    <p
      onClick={onClick}
      className={`${size ? size : sizeP} ${
        attributes ? attributes : attributesP
      } ${className}`}
    >
      {children}
    </p>
  )
}

export function MP({
  children,
  className,
  onClick,
  size,
  attributes
}: TextProps): ReactElement {
  return (
    <p
      onClick={onClick}
      className={`${size ? size : sizeMP} ${
        attributes ? attributes : attributesMP
      } ${className}`}
    >
      {children}
    </p>
  )
}

export interface AnchorProps extends TextProps {
  href: string
}

export function A({
  onClick,
  href,
  children,
  className
}: AnchorProps): ReactElement {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      onClick={onClick}
      className={`cursor-pointer text-natix hover:text-natix hover:underline ${className}`}
    >
      {children}
    </a>
  )
}
