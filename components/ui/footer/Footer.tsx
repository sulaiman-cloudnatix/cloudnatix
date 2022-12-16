import Image from 'next/image'

const navigation = {
  solutions: [
    {
      name: 'Cost & Operational Intelligence',
      href: '/solutions/cost-and-operational-intelligence'
    },
    { name: 'Cost Reduction', href: '/solutions/cost-reduction' },
    { name: 'Multi Cluster Control', href: '/solutions/multi-cluster-control' },
    { name: 'KaaS', href: '/solutions/kaas' }
  ],
  support: [
    {
      name: 'Support',
      href: 'https://cloudnatix.atlassian.net/servicedesk/customer/portals'
    },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Documentation', href: 'https://docs.cloudnatix.com' }
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/cloudnatix/',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/cloudnatix',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      )
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com/designnatix',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
            clipRule='evenodd'
          />
        </svg>
      )
    },
    {
      name: 'Behance',
      href: 'https://www.behance.net/gallery/155388997/CloudNatix-Design',
      icon: (props) => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-label='Behance'
          role='img'
          viewBox='0 0 512 512'
          {...props}
        >
          <rect width='512' height='512' rx='15%' fill='currentColor' />
          <path
            d='m346.12 211.86c-73.376 0-73.471 73.1-73.471 73.476 0 0-5.027 73.191 73.471 73.191 0 0 65.465 3.722 65.465-50.938h-33.615s1.114 20.578-30.731 20.578c0 0-33.616 2.237-33.616-33.244h99.081s10.896-83.063-66.584-83.063zm-32.873 57.454s4.099-29.427 33.62-29.427c29.613 0 29.146 29.427 29.146 29.427h-62.766zm-83.987-18.807s29.146-2.142 29.146-36.41c0-34.173-23.838-50.938-54.103-50.938h-99.551v191.36h99.542s60.81 1.866 60.81-56.521c5e-3 0 2.613-47.491-35.844-47.491zm-80.645-53.361h55.684s13.504 0 13.504 19.926-7.916 22.815-16.95 22.815h-52.238v-42.741zm52.894 123.39h-52.894v-51.218h55.684s20.211-.186 20.116 26.352c0 22.353-14.99 24.68-22.906 24.866zm103.45-146.1v23.562h78.969v-23.562h-78.969z'
            fill='#fff'
          />
        </svg>
      )
    }
  ]
}

export function Footer() {
  return (
    <footer className='bg-white' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:gap-8 flex flex-col lg:flex-row'>
          <div className='space-y-8'>
            <Image
              alt='CloudNatix logo'
              src='/images/logos/logo-cloud.png'
              width={500}
              height={500}
              className='h-8 w-auto'
            />
            <p className='text-base text-gray-500'>
              Accelerate innovation with efficient infrastructure by CloudNatix.
            </p>
            <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-start w-full lg:mt-0 mt-12'>
            <div className='flex justify-between w-full md:w-[65%]'>
              <div>
                <h3 className='text-base font-medium text-gray-900'>
                  Solutions
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='text-base font-medium text-gray-900'>Support</h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-12 md:mt-0'>
              <h3 className='text-base font-medium text-gray-900'>Company</h3>
              <ul role='list' className='mt-4 space-y-4'>
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-base text-gray-500 hover:text-gray-900'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-12 border-t border-gray-200 pt-8'>
          <p className='text-base text-gray-400 xl:text-center'>
            &copy; 2022 CloudNatix, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
