import Link from 'next/link'
import { HeroBackground } from './ui/backgrounds'
import Image from 'next/image'

export function Ctaa() {
  return (
    <div className='bg-gray-200'>
      <div className='bg-[#10172A] relative overflow-hidden'>
        <div className='mx-auto max-w-2xl py-24 px-4 text-center sm:py-32 sm:px-6 lg:px-8 relative z-10'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            <span className='block'>Boost your infrastructure</span>
            <span className='block'>with CloudNatix</span>
          </h2>
          <p className='mt-4 text-lg leading-6 text-indigo-200'>
            A Cloud Infrastructure revolution against high costs, low
            utilization, and multi-cloud complexity across legacy and cloud
            native workloads.
          </p>
          <Link
            href='https://learn.cloudnatix.com/cloudnatix-demo'
            className='mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-[#10172A] hover:bg-white/70 sm:w-auto'
          >
            Request a demo
          </Link>
        </div>
        <HeroBackground className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%] overflow-hidden z-0' />
      </div>
    </div>
  )
}

export function Cta() {
  return (
    <div className='bg-[#f9fafc]'>
      <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1024 1024'
            className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient
                id='759c1415-0410-454c-8f7c-9a820de03641'
                cx={0}
                cy={0}
                r={1}
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(512 512) rotate(90) scale(512)'
              >
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
          <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              <span className='block'>Boost your infrastructure</span>
              <span className='block'>with CloudNatix</span>
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              A Cloud Infrastructure revolution against high costs, low
              utilization, and multi-cloud complexity across legacy and cloud
              native workloads.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
              <Link
                href='https://learn.cloudnatix.com/cloudnatix-demo'
                className='rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Request a demo
              </Link>
              <Link
                href='/solutions'
                className='text-base font-semibold leading-7 text-white'
              >
                Learn more <span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
          <div className='relative mt-16 h-80 lg:mt-8'>
            <Image
              className='absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
              src='/images/ui/dashboard.jpeg'
              alt='App screenshot'
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
