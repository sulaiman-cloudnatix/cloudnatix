import { Dispatch, SetStateAction } from 'react'

export interface CheckboxProps {
  id: string
  label: string
  message?: string
  onChange: Dispatch<SetStateAction<boolean>>
}

export const Checkbox = ({ id, label, message, onChange }: CheckboxProps) => {
  return (
    <div className='relative flex items-start'>
      <div className='flex h-7 items-center'>
        <input
          id={id}
          name={id}
          onChange={(e) => onChange(e.target.checked)}
          type='checkbox'
          className='h-4 w-4 rounded border-gray-300 text-natix focus:ring-natix'
        />
      </div>
      <div className={`ml-3 text-lg`}>
        <label htmlFor={id} className='font-medium text-gray-700'>
          {label}
        </label>
        <p id={`${id}-description`} className='text-gray-500'>
          {message}
        </p>
      </div>
    </div>
  )
}
