import clsx from 'clsx'

export function Container({
  className,
  children
}: {
  className?: string
  children: any
}) {
  return (
    <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
