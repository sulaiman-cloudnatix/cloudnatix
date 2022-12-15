import Image from 'next/image'

export function WorksWhereYouWork() {
  return (
    <div className='mt-32'>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex justify-center'>
        <div className='text-center flex flex-col w-max'>
          <p className='mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
            Works where you work
          </p>

          <p className='mx-auto mt-5 max-w-xl text-lg text-gray-500'>
            CloudNatix can connect to any infrastructure, anywhere, from cloud
            to datacenter to edge, across VM, Kubernetes and Managed Kubernetes
            clusters.
          </p>
          <Image
            alt='Companies'
            width={500}
            height={500}
            className='mt-12 w-auto'
            src='/images/logos/CSP-Logos.png'
          />
        </div>
      </div>
    </div>
  )
}
