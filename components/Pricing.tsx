/* This example requires Tailwind CSS v3.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    id: 'tier-enterprise',
    name: 'Enterprise',
    href: 'https://learn.cloudnatix.com/cloudnatix-demo',
    priceMonthly: 'Available now',
    buttonTitle: 'Request a demo',
    description:
      'Enterprise-Grade Planet-Scale Cluster Management Solution for Virtual Machine and Kubernetes clusters across Amazon AWS, EKS, Microsoft Azure, AKS, Google GCP and GKE.',
    features: [
      'Federated Global Cluster Manager is a cloud managed, global cluster management system based on Kubernetes',
      'Global Dashboard provides a common view of cost and operational intelligence across your multiple cloud and Kubernetes environments.',
      'Insights generates recommendations that allow you to easily create a detailed picture of your Kubernetes and VM workloads using the power of machine learning.',
      'Multi-cluster Operations Manager provides a single pane of glass view for K8s and VM workloads running on multi-cloud infrastructure.',
      'Autopilot enables you to continuously adjust your application and infrastructure sizing with CloudNatix Insights recommendations.',
      'and much more!'
      // 'Logical Organizations and Namespaces simplifies organizational management by grouping multiple clusters into a federated organization.',
      // 'Logical Access across clouds and clusters allows you to log into the console or logs of any pod or VM across any cluster using a single click, helping you find needles in a haystack of pods.',
      // 'Command Line User Interface (CLUI) is a hybrid UI with CLI that lets developers develop and operate against a globally federated set of compute resources like it is one warehouse-scale computer.'
    ]
  },
  {
    id: 'tier-community',
    name: 'Community (Free) edition',
    href: '#',
    priceMonthly: 'Coming Soon',
    buttonTitle: 'Sign up for early access',
    description:
      'Planet-Scale Cluster Management Solution for Virtual Machine and Kubernetes clusters across Amazon AWS, EKS, Microsoft Azure, AKS, Google GCP and GKE.',
    features: [
      'Join and be part of #Autopilot community',
      'Access #Autopilot community Slack to get help from community',
      'Learn and share efficiency best practices at www.autopilot.fyi',
      'Sign up for an unique opportunity to bring hyperscale cost and operational efficiency to your enterprise!'
    ]
  }
]

export function Pricing() {
  return (
    <div id='pricing' className='bg-gray-900'>
      <div className='relative overflow-hidden pt-32 pb-96 lg:pt-40'>
        <div>
          <img
            className='absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2'
            src='https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg'
            alt=''
          />
        </div>
        <div className='relative mx-auto max-w-7xl px-6 text-center lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-4xl'>
            <h2 className='text-lg font-semibold leading-8 text-natix'>
              Pricing
            </h2>
            <p className='mt-2 text-4xl font-bold tracking-tight text-white'>
              Try CloudNatix Today
              <br className='hidden sm:inline lg:hidden' />
            </p>
            <p className='mt-6 text-lg leading-8 text-white/60'>
              Get started with CloudNatix Enterprise for Cloud, K8s and
              Datacenter environments.
            </p>
          </div>
        </div>
      </div>
      <div className='flow-root bg-white pb-32 lg:pb-40'>
        <div className='relative -mt-80'>
          <div className='relative z-10 mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8 h-max'>
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className='shadow-xl w-full h-max rounded-3xl bg-gradient-to-r from-indigo-400 via-sky-400 to-sky-400 p-0.5'
                >
                  <div className='flex flex-col rounded-3xl bg-white'>
                    <div className='p-8 sm:p-10'>
                      <h3
                        className='text-lg font-semibold leading-8 tracking-tight text-natix'
                        id={tier.id}
                      >
                        {tier.name}
                      </h3>
                      <div className='mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900'>
                        {tier.priceMonthly}
                      </div>
                      <p className='mt-6 text-base leading-7 text-gray-600'>
                        {tier.description}
                      </p>
                    </div>
                    <div className='flex flex-1 flex-col p-2'>
                      <div className='flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8'>
                        <ul role='list' className='space-y-6'>
                          {tier.features.map((feature) => (
                            <li key={feature} className='flex items-start'>
                              <div className='flex-shrink-0'>
                                <CheckIcon
                                  className='h-6 w-6 text-natix'
                                  aria-hidden='true'
                                />
                              </div>
                              <p className='ml-3 text-sm leading-6 text-gray-600'>
                                {feature}
                              </p>
                            </li>
                          ))}
                        </ul>
                        <div className='mt-8'>
                          <a
                            href={tier.href}
                            className='inline-block w-full rounded-lg bg-natix px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-natix'
                            aria-describedby={tier.id}
                          >
                            {tier.buttonTitle}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
