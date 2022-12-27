import { Checkbox, Input } from '@ui'
import axios from 'axios'
import { useState } from 'react'

const choices = [
  { id: 'yes', title: 'Yes' },
  { id: 'no', title: 'No' }
]

const checkboxes = [
  {
    id: 'cost-and-opertaional',
    label: 'Cost and Operational Intelligence'
  },
  { id: 'multi-k8s', label: 'Multi K8s Cost Reduction' },
  { id: 'multi-cloud', label: 'Multi Cloud (VM) Cost Reduction' },
  {
    id: 'multi-cluster',
    label: 'Multi-Cluster Control for K8s (IAM, logs, console, insights)'
  },
  { id: 'cloud-managed', label: 'Cloud Managed K8s as a Service' },
  {
    id: 'automation',
    label: 'Automation to reduce MTTR across multiple VM and K8s Clusters'
  }
]

export const CommunityEditionSignup = () => {
  const [f, setF] = useState('')
  const [l, setL] = useState('')
  const [e, setE] = useState('')
  const [c, setC] = useState('')
  const [j, setJ] = useState('')
  const [cb, setCb] = useState([false, false, false, false, false, false])
  const [error, setError] = useState('')
  const [demo, setDemo] = useState(true)

  const submitForm = async (event) => {
    event.preventDefault()

    const community = cb
      .map((c, index) => {
        return { checked: c, title: `\t\t\t${checkboxes[index].label}\n` }
      })
      .filter((c) => c.checked)
      .map((c) => c.title)
      .toString()
      .replaceAll(',', '')

    if (community.length === 0) {
      setError('Please select an option')
      return
    }

    const data = {
      text: `
    _______________________________________________________\n
    ✅ New Community Edition Signup:\n
        First Name: ${f}\n
        Last Name: ${l}\n
        Email: ${e}\n
        Company: ${c}\n
        Job Title: ${j}\n
        Reason for Signup: \n${community}
        Wants a FREE 30-minute demo?: ${demo ? 'Yes' : 'No'}
_______________________________________________________`
    }

    await axios.post(
      process.env.NEXT_PUBLIC_SLACK_WEBHOOK,
      JSON.stringify(data),
      {
        withCredentials: false,
        transformRequest: [
          (data, headers) => {
            // delete headers?.post?['Content-Type']

            return data
          }
        ]
      }
    )
  }

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-xl font-semibold leading-8 text-black mb-5'>
        Sign up for CloudNatix Community Edition
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

        <fieldset className='sm:col-span-2'>
          <legend className='mb-3 text-lg'>
            What do you want to use CloudNatix Community Edition for?
          </legend>
          <div className='space-y-2'>
            {checkboxes.map((check, index) => (
              <Checkbox
                onChange={(checked) => {
                  setCb(() => {
                    const f = [...cb]
                    f[index] = checked
                    return f
                  })
                }}
                key={check.id}
                id={check.id}
                label={check.label}
              />
            ))}
          </div>
          <p className='text-red-500'>{error}</p>
        </fieldset>

        <div className='sm:col-span-2'>
          <label className='text-lg'>
            Would you like a FREE 30-minute demo of CloudNatix Enterprise?
          </label>

          <fieldset className='mt-4'>
            <div className='space-y-4'>
              {choices.map((choice) => (
                <div key={choice.id} className='flex items-center'>
                  <input
                    onChange={(e) => {
                      if (choice.id == 'yes' && !demo) setDemo(true)
                      if (choice.id == 'no' && demo) setDemo(false)
                    }}
                    id={choice.id}
                    checked={
                      choice.id === 'yes' && demo
                        ? true
                        : choice.id === 'no' && !demo
                        ? true
                        : false
                    }
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
        <button
          type='submit'
          className='sm:col-span-2 mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-natix px-5 py-3 text-base font-medium text-white hover:bg-natix/70'
        >
          Submit
        </button>
      </form>
    </div>
  )
}
