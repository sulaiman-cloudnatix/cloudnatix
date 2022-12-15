import { Incentive } from '@components'
import { MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export function Careers({ careers }: { careers: [] }) {
  return (
    <div className='mt-5 mb-24 flex w-full justify-center overflow-hidden bg-white sm:rounded-md'>
      <div className='w-full max-w-7xl'>
        <div className='border-b border-gray-200 bg-white px-4 py-5 sm:px-6'>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>
            Job Postings
          </h3>
          <p className='mt-1 text-sm text-gray-500'>
            If you are passionate about future of compute infrastructure, want
            to simplify infrastructure while making it efficient, we are the
            company for you. We are looking for engineering talents for the
            following positions.
          </p>
          <Incentive />
        </div>

        <ul role='list' className='divide-y divide-gray-200'>
          {careers.map((career) => {
            const { Name, Department, Location, Type } = career.properties
            const title = Name.title[0].plain_text
            // const department = Department
            const department = Department.select.name
            const location = Location.select.name
            const type = Type.select.name
            return (
              <li key={career.id}>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://docs.google.com/forms/d/e/1FAIpQLSc_czAs7vRZxISL6lS4nGGlmcZfp4Sj-ENbWpOWvD3RizLtGg/viewform'
                  className='block hover:bg-gray-50'
                >
                  <div className='px-4 py-4 sm:px-6'>
                    <div className='flex items-center justify-between'>
                      <p className='truncate text-sm font-medium text-natix'>
                        {title}
                      </p>
                      <div className='ml-2 flex flex-shrink-0'>
                        <p className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                          {type}
                        </p>
                      </div>
                    </div>
                    <div className='mt-2 sm:flex sm:justify-between'>
                      <div className='sm:flex'>
                        <p className='flex items-center text-sm text-gray-500'>
                          <UsersIcon
                            className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                            aria-hidden='true'
                          />
                          {department}
                        </p>
                        <p className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6'>
                          <MapPinIcon
                            className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                            aria-hidden='true'
                          />
                          {location}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
