import { Text, leftBorderColors, colors, P } from '@notion/ui'
import { ReactElement } from 'react'

export interface QuoteProps {
  color: string
  rich_text: []
}

export function Quote({ rich_text, color }: QuoteProps): ReactElement {
  return (
    <div
      className={`rounded-md rounded-l-none border-l-4 ${leftBorderColors[color]} ${colors[color]} p-5`}
    >
      <P>
        <Text text={rich_text} />
      </P>
    </div>
  )
}
