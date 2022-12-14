import Link from 'next/link'
import { HeroBackground } from './ui/backgrounds'

export function Cta() {
  return (
    <div className='bg-[#10172A] relative overflow-hidden'>
      <div className='mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8 relative z-10'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          <span className='block'>Boost your infrastructure</span>
          <span className='block'>with CloudNatix</span>
        </h2>
        <p className='mt-4 text-lg leading-6 text-indigo-200'>
          A Cloud Infrastructure revolution against high costs, low utilization,
          and multi-cloud complexity across legacy and cloud native workloads.
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
  )
}
