import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BackgroundOne } from '@ui'
import { TrustedBy } from '@components'

const items = [
  'Multi-Cloud',
  'Multi-K8s',
  'EKS Clusters',
  'AKS Clusters',
  'GKE Clusters',
  'Amazon AWS',
  'Google GCP',
  'Microsoft Azure',
  'K8s Clusters',
  'Datacenter',
  'Hybrid Cloud',
  'Containers',
  'Virtual Machines',
  'Linux VMs',
  'Window VMs',
  'Microservices',
  'Batch jobs',
  'Sparks',
  'CI Jobs'
]

export const HeroSection = () => {
  const [revolve, setRevolve] = useState({ item: items[0], index: 0 })

  useEffect(() => {
    setTimeout(() => {
      if (revolve.index === items.length - 1)
        setRevolve({ item: items[0], index: 0 })
      else setRevolve({ item: items[revolve.index++], index: revolve.index++ })
    }, 2000)
  })

  return (
    <div>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-y-0 h-full w-full' aria-hidden='true'>
          <div className='relative h-full'>
            <svg
              className='absolute right-full translate-y-1/3 translate-x-1/4 transform sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full'
              width={404}
              height={784}
              fill='none'
              viewBox='0 0 404 784'
            >
              <defs>
                <pattern
                  id='e229dbec-10e9-49ee-8ec3-0286ca089edf'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill='url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)'
              />
            </svg>
            <svg
              className='absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4'
              width={404}
              height={784}
              fill='none'
              viewBox='0 0 404 784'
            >
              <defs>
                <pattern
                  id='d2a68204-c383-44b1-b99f-42ccff4e5365'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill='url(#d2a68204-c383-44b1-b99f-42ccff4e5365)'
              />
            </svg>
          </div>
        </div>

        <div className='mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
              <span className='block'>Optimize</span>
              <span className='block text-natix'>{revolve.item}</span>
              <span>with CloudNatix</span>
            </h1>
            <p className='mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl'>
              A Cloud Infrastructure revolution against high costs, low
              utilization, and multi-cloud complexity across legacy and cloud
              native workloads.
            </p>
          </div>
        </div>

        <div className='relative mt-12'>
          <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
            <div className='flex-1' />
            <div className='w-full flex-1 bg-slate-900 pb-24'>
              <BackgroundOne />
            </div>
          </div>
          <div className='mx-auto max-w-7xl px-4 sm:px-6'>
            <Image
              className='relative rounded-lg w-full shadow-lg'
              src='/images/ui/dashboard.jpeg'
              alt='App screenshot'
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
