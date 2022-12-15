import Image from 'next/image'

export function TrustedBy() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <p className='text-center text-lg font-semibold text-gray-600'>
          Putting enterprises on CloudNatix autopilot
        </p>
        <div className='mt-6 lg:mt-8'>
          <div className='w-full flex justify-center bg-gray-50 py-8 px-8'>
            <Image
              alt='Companies'
              width={500}
              height={500}
              className='md:h-32 lg:h-44 w-auto'
              src='/images/logos/Client-Logo-v4.png'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
