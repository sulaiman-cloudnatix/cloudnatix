import Image from 'next/image'
import Link from 'next/link'
import { Header, Footer } from '@ui'
import { Cta } from '@components'

const features = [
  {
    name: 'Enterprise Challenge(s)',
    description:
      'As enterprises increasingly adopt cloud native application architectures and implement kubernetes as the infrastructure substrate, we see SRE and DevOps teams facing a new set of challenges. The challenges around infrastructure provisioning ( VPC, ELB, Elastic IP et.c) to Day 2 Operations ( updates, upgrades, access control, quota management, resource and cost optimization). These challenges start to increase in complexity as kubernetes projects move from exploration to production, wherein we see the reliability degrading incidents and overworked DevOps team’s attrition quickly grow in tandem with kubernetes cluster count.',
    imageSrc: '/images/supplemental/Automate.png',
    imageAlt: ''
  },
  {
    name: 'The CloudNatix Solution',
    description:
      'The CloudNatix solution provides a planet scale cluster manager, delivered as a service, that can automate Day 0 to Day 2 Operations across kubernetes and VM Clusters, across Virtual Machine substrate or on top of existing Managed K8s clusters like EKS, AKS and GKE. Bandage solutions like bespoke scripts to run operational runbooks are not scalable. CloudNatix has built-in tools like machine learning to automate operations and optimize at scale, bin packing technology to intelligently and automatically size workloads across a planet scale infrastructure fleet, with humans in the loop or out. That’s exactly how hyperscalers and webscalers are already doing it and now enterprises can too.',
    imageSrc: '/images/supplemental/Automate,+2.png',
    imageAlt: ''
  }
]

export default function MultiClusterControl() {
  return (
    <div className='bg-white'>
      <Header />
      <div className='mx-auto max-w-6xl py-12 sm:py-20 sm:px-2 lg:px-4'>
        <div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
          <div className='max-w-3xl'>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Cloud managed k8s as a service (KaaS)
            </p>
            <p className='mt-4 text-gray-500'>
              Automate Day 1 and Day 2 Operations across a fleet of multiple K8s
              and VM Clusters
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
                <div className='flex lg:col-span-7 xl:col-span-6 justify-center lg:justify-end'>
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
            <ul className='list-disc ml-5 md:ml-10 mt-3 text-gray-500 space-y-3'>
              <li>
                Cloud Native Transformation to enable your teams with a
                consistent, managed Kubernetes infrastructure across any cloud
                or on-premise environment.
              </li>
              <li>
                Unified cost & operational visibility across heterogeneous cloud
                infrastructures spanning cloud, cloud native and multi cloud
                environments.
              </li>
              <li>
                Global Operational Control Plane - Automate Day 2 operations
                across clusters, drive down MTTR via faster, automated incident
                resolution.
              </li>
              <li>
                Reduce DevOps Toil - DevOps team can automate once, and let the
                CloudNatix federate the operational plumbing and enterprise
                policies across multiple existing clusters.
              </li>
              <li>
                No Cloud Lock-in - Our cloud agnostic architecture ensures that
                your enterprise business is not at the mercy of Cloud Service
                Providers by providing a truly cloud independent operational
                layer with freedom of choice.
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
