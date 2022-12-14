import Image from 'next/image'
import Link from 'next/link'
import { Header, Footer } from '@ui'
import { Cta } from '@components'

const features = [
  {
    name: 'Enterprise Challenge(s)',
    description:
      'As enterprises have adopted cloud and expanded its use, they’re now grappling with the challenges around adopting cloud native apps, multi-tenancy, security, DevSecOps, and governance. Hand in hand with this goes a whole new set of challenges around cost management and optimization. Suddenly, companies are faced with managing the variable cost of public cloud infrastructure: optimizing compute infrastructure, utilization, and capacity to rein in cloud spend. The root cause remains that the issue of capacity optimization is now becoming urgent as the cloud model is converting traditional datacenter CAPEX spend  into OPEX spend, creating immediate waste in cloud costs due to low infrastructure utilization.',
    imageSrc: '/images/supplemental/Excess+Wasted+Capacity.png',
    imageAlt:
      'As enterprises have adopted cloud and expanded its use, they’re now grappling with the challenges around adopting cloud native apps, multi-tenancy, security, DevSecOps, and governance. Hand in hand with this goes a whole new set of challenges around cost management and optimization. Suddenly, companies are faced with managing the variable cost of public cloud infrastructure: optimizing compute infrastructure, utilization, and capacity to rein in cloud spend. The root cause remains that the issue of capacity optimization is now becoming urgent as the cloud model is converting traditional datacenter CAPEX spend  into OPEX spend, creating immediate waste in cloud costs due to low infrastructure utilization.'
  },
  {
    name: 'The CloudNatix Solution',
    description:
      'CloudNatix leverages the power of Machine Learning to provide a continuous model for optimization by better sizing workloads and mis-sized workloads will be resized automatically. CloudNatix helps realize workload cost savings up to 50%, increasing SLO performance 15-50% and simplifies the task of scaling your applications, so you can focus on other important tasks.',
    imageSrc: '/images/supplemental/Capacity+Meets+the+Workload.png',
    imageAlt:
      'CloudNatix leverages the power of Machine Learning to provide a continuous model for optimization by better sizing workloads and mis-sized workloads will be resized automatically. CloudNatix helps realize workload cost savings up to 50%, increasing SLO performance 15-50% and simplifies the task of scaling your applications, so you can focus on other important tasks.'
  }
]

export default function CostAndOperationalIntelligence() {
  return (
    <div className='bg-white'>
      <Header />
      <div className='mx-auto max-w-6xl py-12 sm:py-20 sm:px-2 lg:px-4'>
        <div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
          <div className='max-w-3xl'>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Cloud and Kubernetes (K8s) Cost Reduction
            </p>
            <p className='mt-4 text-gray-500'>
              Reduce cloud & kubernetes costs while optimizing cloud usage by
              matching resource allocation with application needs across
              traditional VMs and Cloud Native Applications
            </p>
          </div>

          <div className='mt-10 space-y-16 md:space-y-32 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8'
              >
                <div className='mt-6 lg:col-span-5 lg:mt-0 xl:col-span-6'>
                  <h3 className='text-2xl font-medium text-gray-900'>
                    {feature.name}
                  </h3>
                  <p className='mt-2 text-base text-gray-500'>
                    {feature.description}
                  </p>
                </div>
                <div className='flex lg:col-span-7 xl:col-span-6 text-center justify-center lg:justify-end'>
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
          <div className='mt-12 md:mt-24'>
            <h3 className='text-2xl font-medium text-gray-900'>
              Business Benefits
            </h3>
            <p className='mt-2 text-base text-gray-500'>
              Capacity optimization that ensures your cloud and datacenter spend
              remains optimized, reducing idle capacity and resulting wasted
              cloud spend.
            </p>
            <ul className='list-disc ml-10 mt-3 text-gray-500 space-y-3'>
              <li>
                Cloud Cost reduction for companies where cloud costs have become
                unmanageable, CloudNatix can help you realize immediat cost
                reduction, provide holistic cost visibility and attribution and
                finally maintain your optimized cost structure
              </li>
              <li>
                Kubernetes cost reduction for companies where cloud costs have
                become unmanageable, CloudNatix can help you realize immediat
                cost reduction, provide holistic cost visibility and attribution
                and finally maintain your optimized cost structure
              </li>
              <li>Outage avoidance.</li>
            </ul>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  )
}
