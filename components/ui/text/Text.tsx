import clsx from 'clsx'
import {
  CSSProperties,
  JSXElementConstructor,
  ReactElement,
  ReactNode
} from 'react'
import s from './Text.module.css'

export type Variant =
  | 'body'
  | 'sm'
  | 'base'
  | 'lg'
  | 'heading'
  | 'pageHeading'
  | 'sectionHeading'
  | 'midHeading'

export interface TextProps {
  variant?: Variant
  className?: String
  style?: CSSProperties
  children?: React.ReactNode | any
  onClick?: () => void
  href?: String
  id?: String
  textSpacing?: String
}

export const Text = ({
  variant = 'base',
  id = '',
  className = '',
  children,
  onClick,
  style,
  textSpacing = ''
}: TextProps) => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string
  } = {
    body: 'div',
    sm: 'p',
    base: 'p',
    lg: 'p',
    heading: 'h1',
    pageHeading: 'h1',
    sectionHeading: 'h2',
    midHeading: 'h2'
  }

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap![variant!]

  return (
    <Component
      className={clsx(
        s.root,
        {
          [s.body]: variant === 'body',
          [s.sp]: variant === 'sm',
          [s.base]: variant === 'base',
          [s.lg]: variant === 'lg',
          [s.heading]: variant === 'heading',
          [s.pageHeading]: variant === 'pageHeading',
          [s.sectionHeading]: variant === 'sectionHeading',
          [s.midHeading]: variant === 'midHeading'
        },
        variant != 'base' ? textSpacing : '',
        className
      )}
      onClick={onClick}
      style={style}
      id={id}
    >
      {children}
    </Component>
  )
}

export interface AnchorProps {
  children: string | ReactNode | JSX.Element | JSX.Element[]
  className?: string
  size?: string
  attributes?: string
  onClick?: () => void
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
      className={`cursor-pointer text-sky-600 hover:text-sky-700 hover:underline ${className}`}
    >
      {children}
    </a>
  )
}
