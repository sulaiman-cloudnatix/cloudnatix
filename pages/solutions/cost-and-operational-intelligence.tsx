import Image from 'next/image'
import Link from 'next/link'
import { Header, Footer, Meta } from '@ui'
import { Cta } from '@components'

const features = [
  {
    name: 'Enterprise Challenge(s)',
    description:
      'As enterprises migrate to Cloud, and accelerate their transformation by adopting Kubernetes and Cloud Native architectures, companies are faced with a new set of challenges around identifying and allocating shared costs. With increasing numbers of cloud environments, accounts, subscriptions and kubernetes clusters, it is increasingly difficult to identify, understand, and forecast cloud, datacenter and infrastructure costs to the appropriate business line or set of applications. Budget management and forecasting increasingly becomes a tug of war between the Operations and Finance teams in such an environment.',
    imageSrc: '/images/supplemental/Cost-And-Operational-Intelligence.png',
    imageAlt:
      'As enterprises migrate to Cloud, and accelerate their transformation by adopting Kubernetes and Cloud Native architectures, companies are faced with a new set of challenges around identifying and allocating shared costs. With increasing numbers of cloud environments, accounts, subscriptions and kubernetes clusters, it is increasingly difficult to identify, understand, and forecast cloud, datacenter and infrastructure costs to the appropriate business line or set of applications. Budget management and forecasting increasingly becomes a tug of war between the Operations and Finance teams in such an environment.'
  },
  {
    name: 'The CloudNatix Solution',
    description:
      'CloudNatix Dashboard provides a common view of cost and operational intelligence across your multiple cloud & Kubernetes environments, including AWS, EKS, Azure, AKS, Google Cloud, GKE and many more CloudNatix provides a unified cost-attribution view across multiple public, private and hybrid cloud as well as multiple Kubernetes clusters and namespaces.  The Cost Management and Forecasting for Executives is a cloud-based solution that enables you to optimize your Cloud, K8s and Datacenter cost by forecasting future resource consumption based on past consumption, capacity utilization, assets types, contracts, metering rules, cost model, usage metrics etc.',
    imageSrc: '/images/supplemental/Blue-Purple-Layered-Art.png',
    imageAlt:
      'CloudNatix Dashboard provides a common view of cost and operational intelligence across your multiple cloud & Kubernetes environments, including AWS, EKS, Azure, AKS, Google Cloud, GKE and many more CloudNatix provides a unified cost-attribution view across multiple public, private and hybrid cloud as well as multiple Kubernetes clusters and namespaces.  The Cost Management and Forecasting for Executives is a cloud-based solution that enables you to optimize your Cloud, K8s and Datacenter cost by forecasting future resource consumption based on past consumption, capacity utilization, assets types, contracts, metering rules, cost model, usage metrics etc.'
  }
]

export default function CostAndOperationalIntelligence() {
  return (
    <div className='bg-white'>
      <Meta
        meta={{
          title: 'CloudNatix | Cost and Operational Intelligence',
          description:
            'Observe, understand, attribute and forecast application costs and performance across multiple clouds and multiple kubernetes clusters.'
        }}
      />
      <Header />
      <div className='mx-auto max-w-6xl py-12 sm:py-20 sm:px-2 lg:px-4'>
        <div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
          <div className='max-w-3xl'>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Cost and Operational Intelligence
            </p>
            <p className='mt-4 text-gray-500'>
              Observe, understand, attribute and forecast application costs and
              performance across multiple clouds and multiple kubernetes
              clusters.
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
              Unified cost & operational visibility across heterogeneous cloud
              infrastructures spanning cloud, cloud native and multi cloud
              environments
            </p>
            <ul className='list-disc ml-5 md:ml-10 mt-3 text-gray-500 space-y-3'>
              <li>
                Intelligent cost allocation and showback to optimize a day in
                the life of your FinOps professionals.
              </li>
              <li>
                Budget forecasting for your teams that is rooted in data and
                done collaboratively across Dev, Ops and Finance teams.
              </li>
              <li>
                Global operational control pane provides a birds eye-view of
                outages and budget blowouts before they happen.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  )
}
