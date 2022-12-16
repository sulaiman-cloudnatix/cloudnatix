import Image from 'next/image'
import Link from 'next/link'
import { Modal } from '@ui'
import { CloudNatixDemo } from '@components'
import { useState } from 'react'

const features = [
  {
    name: 'Cost and Operational Intelligence',
    description:
      'Observe, understand, attribute and forecast application costs and performance across multiple clouds and multiple kubernetes clusters.',
    imageSrc: '/images/supplemental/Blue-Purple-Layered-Art.png',
    imageAlt:
      'Observe, understand, attribute and forecast application costs and performance across multiple clouds and multiple kubernetes clusters',
    link: '/solutions/cost-and-operational-intelligence'
  },
  {
    name: 'Cloud and Kubernetes (K8s) Cost Reduction',
    description:
      'Reduce cloud & kubernetes costs while optimizing cloud usage by matching resource allocation with application needs across traditional VMs and Cloud Native Applications.',
    imageSrc: '/images/supplemental/Capacity+Meets+the+Workload,+Square+LG.png',
    imageAlt:
      'Reduce cloud & kubernetes costs while optimizing cloud usage by matching resource allocation with application needs across traditional VMs and Cloud Native Applications.',
    link: '/solutions/cost-reduction'
  },
  {
    name: 'Multi Cluster Control',
    description:
      'Control & aggregate resources from multiple clusters as a single planet scale cluster, improving productivity, and reducing MTTR.',
    imageSrc: '/images/supplemental/Blue-Purple-Layered-Art.png',
    imageAlt:
      'Control & aggregate resources from multiple clusters as a single planet scale cluster, improving productivity, and reducing MTTR.',
    link: '/solutions/multi-cluster-control'
  },
  {
    name: 'Cloud managed k8s as a service (KaaS)',
    description:
      'Automate Day 1 and Day 2 Operations across a fleet of multiple K8s and VM Clusters.',
    imageSrc: '/images/supplemental/Automate.png',
    imageAlt:
      'Automate Day 1 and Day 2 Operations across a fleet of multiple K8s and VM Clusters.',
    link: '/solutions/kaas'
  }
]

export function SolutionsOverview() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <h2 className='font-semibold text-xl'>CloudNatix Demo</h2>
        <CloudNatixDemo />
      </Modal>
      <div className='bg-white'>
        <div className='mx-auto max-w-6xl pt-12 pb-24 sm:py-20 sm:px-2 lg:px-4'>
          <div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
            <div className='max-w-3xl'>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Solutions Overview
              </p>
              <p className='mt-4 text-gray-500'>
                Discover CloudNatix Solutions by use case, role, industry, and
                customers.
              </p>
            </div>
            <button
              type='button'
              onClick={() => setOpen(true)}
              className='inline-flex items-center rounded-md border border-natix bg-white px-4 py-2 text-base font-medium text-natix hover:text-white hover:bg-natix focus:outline-none focus:ring-2 focus:ring-natix focus:ring-offset-2 mt-5'
            >
              View Demo
            </button>

            <div className='space-y-16 md:space-y-32 border-t border-gray-200 pt-10 mt-8 sm:mt-8 sm:pt-16'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8'
                >
                  <div className='mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4'>
                    <h3 className='text-xl font-medium text-gray-900'>
                      {feature.name}
                    </h3>
                    <p className='mt-2 text-md text-gray-500'>
                      {feature.description}
                    </p>
                    <div className='mt-3'>
                      <Link
                        href={feature.link}
                        className='text-natix hover:underline'
                      >
                        Learn More...
                      </Link>
                    </div>
                  </div>
                  <div className='flex lg:col-span-7 xl:col-span-8 text-center justify-end'>
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      width='500'
                      height='500'
                      className='object-cover object-center'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
