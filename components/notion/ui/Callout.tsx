import { ReactElement } from 'react'
import { P, Text, colors } from '@notion/ui'
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid'

export interface CalloutProps {
  icon: string
  color: string
  rich_text: []
}

const Icon = {
  '❗': <ExclamationCircleIcon className='h-6 w-6 text-red-500' />,
  '✅': <CheckCircleIcon className='h-6 w-6 text-green-500' />,
  ℹ️: <InformationCircleIcon className='h-6 w-6 text-blue-500' />,
  '⚠️': <ExclamationTriangleIcon className='h-6 w-6 text-yellow-500' />
}

export function Callout({
  icon,
  rich_text,
  color
}: CalloutProps): ReactElement {
  return (
    <div className={`flex break-all rounded-md p-5 ${colors[color]} w-full`}>
      <span className='mr-5 text-2xl'>{Icon[icon] ? Icon[icon] : icon}</span>
      <P className='break-words'>
        <Text text={rich_text} />
      </P>
    </div>
  )
}
