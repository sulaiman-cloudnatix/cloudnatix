import { Dispatch, SetStateAction } from 'react'

export interface InputProps {
  id: string
  type?: string
  className?: string
  placeholder?: string
  label: string
  setOnChange: Dispatch<SetStateAction<string>>
  value: string
  required?: boolean
  pattern?: string
}

export const Input = ({
  id,
  type = 'text',
  className,
  placeholder,
  label,
  setOnChange,
  value,
  required = false,
  pattern
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className='mt-1'>
        <input
          required={required}
          pattern={pattern}
          type={type}
          name={id}
          id={id}
          value={value}
          onChange={(e) => setOnChange(e.target.value)}
          className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-natix focus:ring-natix sm:text-sm`}
          placeholder={placeholder || label}
        />
      </div>
    </div>
  )
}

export const TextArea = ({
  id,
  className,
  placeholder,
  label,
  setOnChange,
  value,
  required = false
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className='mt-1'>
        <textarea
          required={required}
          name={id}
          id={id}
          rows={8}
          value={value}
          onChange={(e) => setOnChange(e.target.value)}
          className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-natix focus:ring-natix sm:text-sm`}
          placeholder={placeholder || label}
        />
      </div>
    </div>
  )
}
