import Image from 'next/image'

export function Testimonials() {
  return (
    <section className='overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-24 pt-32 lg:pt-32 md:pt-32'>
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <svg
          className='absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2'
          width={404}
          height={404}
          fill='none'
          viewBox='0 0 404 404'
          role='img'
          aria-labelledby='svg-cnatix'
        >
          <title id='svg-cnatix'>cnatix</title>
          <defs>
            <pattern
              id='ad119f34-7694-4c31-947f-5c9d249b21f3'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill='url(#ad119f34-7694-4c31-947f-5c9d249b21f3)'
          />
        </svg>

        <div className='relative'>
          <div className='flex justify-center'>
            <Image
              className='mx-auto h-32 w-auto absolute -top-24'
              src='/images/testimonials/optimal.png'
              width={500}
              height={500}
              priority
              alt='Optimal Asset Management'
            />
          </div>
          <blockquote className='mt-10'>
            <div className='mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900'>
              <p>
                &ldquo;With CloudNatix, we saved 50% of our cloud compute spend
                and increased Infra efficiency by 3x.&rdquo;
              </p>
            </div>
            <footer className='mt-8'>
              <div className='md:flex md:items-center md:justify-center'>
                <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                  <div className='text-base font-medium text-gray-900'>
                    Alec Barlow
                  </div>

                  <svg
                    className='mx-1 hidden h-5 w-5 text-natix md:block'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M11 0h3L9 20H6l5-20z' />
                  </svg>

                  <div className='text-base font-medium text-gray-500'>
                    Sr. Cloud Engineer, Optimal Asset Management
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
