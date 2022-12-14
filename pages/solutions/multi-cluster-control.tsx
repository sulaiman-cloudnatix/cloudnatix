import Image from 'next/image'
import Link from 'next/link'
import { Header, Footer } from '@ui'
import { Cta } from '@components'

const features = [
  {
    name: 'Enterprise Challenge(s)',
    description:
      'Enterprises have adopted cloud and to a greater extent Cloud Native architectures leveraging a bottoms-up approach that empowers the enterprise development teams in order to improve application delivery agility. Some have even termed this approach as “Bi-Modal IT”. This Bi-Modal approach is apt at encouraging innovation and this approach has definitely ushered in the golden age of enterprise innovation, yet there remain skeptics. As cloud and cloud native architectures have evolved to become mainstream, the challenges of fragmented and repetitive manual operations that were done to be expedient, now require to be re-thought. The manual federation of access, quota, operational and compliance policy is difficult to manage in a unified, federated way across multiple clouds and clusters.',
    imageSrc: '/images/supplemental/Multi-Cluster+Control.png',
    imageAlt: ''
  },
  {
    name: 'The CloudNatix Solution',
    description:
      'The CloudNatix solution provides a planet scale cluster manager, delivered as a service, that can observe costs, operations, performance, and SLAs across clusters, across public and private clouds, spanning VMS and Kubernetes on a single pane of glass so they can operate above the clouds in an automated, easy to use way. Bandage solutions like running multiple spreadsheet models to figure out how to optimize or bespoke scripts to run operational runbooks are not scalable. What’s needed are tools like machine learning to automate and optimize at scale, bin packing technology to intelligently and automatically optimize across a planet scale infrastructure fleet, and high levels of automation either with humans in the loop or out. That’s how hyperscalers and webscalers are already doing it and with CloudNatix, every enterprise can put their infrastructure on Autopilot.',
    imageSrc: '/images/supplemental/Multi-Cluster+Control,+2.png',
    imageAlt: ''
  }
]

export default function MultiClusterControl() {
  return (
    <div className='bg-white'>
      <Header />
      <div className='mx-auto max-w-6xl py-24 sm:py-20 sm:px-2 lg:px-4'>
        <div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
          <div className='max-w-3xl'>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Multi Cluster Control
            </p>
            <p className='mt-4 text-gray-500'>
              Control & aggregate resources from multiple clusters as a single
              planet scale cluster, improving productivity, and reducing MTTR
            </p>
          </div>

          <div className='mt-10 space-y-16 md:space-y-32 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8'
              >
                <div className='mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4'>
                  <h3 className='text-2xl font-medium text-gray-900'>
                    {feature.name}
                  </h3>
                  <p className='mt-2 text-base text-gray-500'>
                    {feature.description}
                  </p>
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
          <div className='mt-12 md:mt-24'>
            <h3 className='text-2xl font-medium text-gray-900'>
              Business Benefits
            </h3>
            <p className='mt-2 text-base text-gray-500'>
              Increase Developer Productivity - By tying together disparate
              clusters into a single planet scale cluster, developers can access
              their VMs and Containers with a single command or click without
              fiddling with various IAM roles and disparate access keys.
            </p>
            <ul className='list-disc ml-10 mt-3 text-gray-500 space-y-3'>
              <li>
                Reduce DevOps Toil - DevOps team can automate once, and let the
                CloudNatix federate the operational plumbing and enterprise
                policies across multiple existing clusters.
              </li>
              <li>
                Increase availability by reducing MTTR - A unified pane across
                clusters, across clouds and enable teams to search and easily
                find a needle in a haystack of container pods, reducing the time
                it takes to remediate an incident and increase availability.
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
