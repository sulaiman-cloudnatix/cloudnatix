import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@ui'
import { WorksWhereYouWork } from './WorksWhereYouWork'

// import screenshotExpenses from '@/images/screenshots/expenses.png'
// import screenshotPayroll from '@/images/screenshots/payroll.png'
// import screenshotReporting from '@/images/screenshots/reporting.png'
// import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Observe',
    description:
      'Observe your Global Cost, Efficiency & Operations with CloudNatix Dashboard.',
    image: '/images/ui/dashboard.jpeg'
  },
  {
    title: 'Understand',
    description:
      'Understand with Insights from CloudNatix recommendation engine.',
    image: '/images/ui/insights.jpeg'
  },
  {
    title: 'Automate',
    description:
      'Automate across multiple clusters for cost reduction, capacity optimization and reducing MTTR.',
    image: '/images/ui/autopilot.jpeg'
  },
  {
    title: 'Act',
    description:
      'Act across multiple clusters and clouds with CloudNatix Workload Operations Manager.',
    image: '/images/ui/workloads.jpeg'
  }
]

export function EverythingYouNeed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id='features'
      aria-label='Features for running your books'
      className='relative overflow-hidden  pt-20 pb-28 sm:py-32 bg-[#F9FAFC]'
    >
      <Image
        className='absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]'
        src='/images/backgrounds/background-features.jpg'
        alt=''
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className='relative'>
        <div className='max-w-2xl md:mx-auto md:text-center xl:max-w-none'>
          <h2 className='font-semibold text-3xl tracking-tight  sm:text-4xl md:text-5xl'>
            Everything you need to optimize your infrastructure.
          </h2>
          <p className='mt-6 text-lg tracking-tight text-gray-600'>
            Accelerate innovation with guided efficient infrastructure by
            CloudNatix.
          </p>
        </div>
        <Tab.Group
          as='div'
          className='mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0'
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className='-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5'>
                <Tab.List className='relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal'>
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-slate-500/10 lg:bg-slate-400/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/40'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none font-semibold',
                            selectedIndex === featureIndex
                              ? 'text-natix lg:text-natix'
                              : 'text-natix hover:text-blue-500 lg:text-natix'
                          )}
                        >
                          <span className='absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl' />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-black'
                            : 'text-gray-500'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className='lg:col-span-7'>
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className='relative sm:px-6 lg:hidden'>
                      <div className='absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl' />
                      <p className='relative mx-auto max-w-2xl text-base text-black sm:text-center'>
                        {feature.description}
                      </p>
                    </div>
                    <div className='mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]'>
                      <Image
                        className='w-full'
                        src={feature.image}
                        alt=''
                        priority
                        width='100'
                        height='100'
                        sizes='(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem'
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
        <WorksWhereYouWork />
      </Container>
    </section>
  )
}
