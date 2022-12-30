import Image from 'next/image'
import { Input, TextArea, Modal } from '@ui'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

const choices = [
  {
    id: 'request-a-demo',
    title: 'Request a demo'
  },
  { id: 'sales', title: 'Contact sales' },
  { id: 'early-access', title: 'Early access free version' },
  {
    id: 'support',
    title: 'Support'
  },
  { id: 'other', title: 'Other' }
]

export const Contact = () => {
  const router = useRouter()
  const [success, setSuccess] = useState(false)
  const [f, setF] = useState('')
  const [l, setL] = useState('')
  const [e, setE] = useState('')
  const [c, setC] = useState('')
  const [j, setJ] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [assist, setAssist] = useState(choices[0].id)

  const submitForm = async (event) => {
    event.preventDefault()

    const data = {
      text: `
    _______________________________________________________\n
✅ Contact Form Submission:\n
    First Name: ${f}\n
    Last Name: ${l}\n
    Email: ${e}\n
    Company: ${c}\n
    Job Title: ${j}\n
    How can we assist: ${choices.find((c) => c.id === assist)?.title}\n
    Message: ${message}
_______________________________________________________`
    }
    console.log(data)

    await axios.post(
      process.env.NEXT_PUBLIC_SLACK_CONTACT_WEBHOOK,
      JSON.stringify(data),
      {
        withCredentials: false,
        transformRequest: [
          (data, headers) => {
            return data
          }
        ]
      }
    )
    setSuccess(true)
  }

  return (
    <>
      <Modal
        size='max-w-2xl'
        open={success}
        setOpen={() => {
          setSuccess(false)
          router.push('/')
        }}
      >
        <div className='space-y-4'>
          <Image
            alt='CloudNatix logo'
            src='/images/logos/logo-cloud.png'
            width={500}
            height={500}
            className='h-8 w-auto'
          />
          <h2 className='text-xl font-semibold leading-8 text-black mb-5'>
            Thank you, {f}, for reaching out. We will get back to you shortly.
          </h2>
          <button
            onClick={() => router.push('/')}
            className='sm:col-span-2 mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-natix px-5 py-3 text-base font-medium text-white hover:bg-natix/70'
          >
            Home
          </button>
        </div>
      </Modal>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-xl font-semibold leading-8 text-black mb-5'>
          Contact CloudNatix
        </h2>
        <form
          onSubmit={submitForm}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'
        >
          <Input
            setOnChange={setF}
            value={f}
            id='first-name'
            required={true}
            label='First name'
          />
          <Input
            setOnChange={setL}
            value={l}
            required={true}
            id='last-name'
            label='Last name'
          />
          <Input
            setOnChange={setE}
            value={e}
            className='sm:col-span-2'
            id='email'
            required={true}
            label='Email'
            type='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          />
          <Input
            setOnChange={setC}
            value={c}
            required={true}
            id='company-name'
            label='Company name'
          />
          <Input
            setOnChange={setJ}
            value={j}
            required={true}
            id='job-title'
            label='Job title'
          />

          <div className='sm:col-span-2'>
            <label className='text-lg'>How can we assist?</label>

            <fieldset className='mt-4'>
              <div className='space-y-4'>
                {choices.map((choice, index) => (
                  <div key={choice.id} className='flex items-center'>
                    <input
                      onChange={(e) => {
                        setAssist(choice.id)
                      }}
                      id={choice.id}
                      checked={choice.id === assist ? true : false}
                      type='radio'
                      className='h-4 w-4 border-gray-300 text-natix'
                    />
                    <label
                      htmlFor={choice.id}
                      className='ml-3 block text-lg font-medium text-gray-700'
                    >
                      {choice.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div className='sm:col-span-2'>
            <TextArea
              id='message'
              label='Message'
              value={message}
              setOnChange={setMessage}
              required={true}
            />
          </div>
          <button
            type='submit'
            className='sm:col-span-2 mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-natix px-5 py-3 text-base font-medium text-white hover:bg-natix/70'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
