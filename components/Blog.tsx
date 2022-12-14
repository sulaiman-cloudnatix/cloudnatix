import Link from 'next/link'

export function Blog({ posts }: { posts: [] }) {
  return (
    <div className='bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pb-28'>
      <div className='relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl'>
        <div>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            CloudNatix <span className='text-natix'>| Blog</span>
          </h2>
          <div className='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5'>
            {/* <p className='text-xl text-gray-500'>
              Get weekly articles in your inbox on how to grow your business.
            </p>
            <form className='mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email-address'
                  type='email'
                  autoComplete='email'
                  required
                  className='w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-natix focus:outline-none focus:ring-natix lg:max-w-xs'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mt-2 flex w-full flex-shrink-0 rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto'>
                <button
                  type='button'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-natix px-4 py-2 text-base font-medium text-white hover:bg-natix focus:outline-none focus:ring-2 focus:ring-natix focus:ring-offset-2 sm:inline-flex sm:w-auto'
                >
                  Notify me
                </button>
              </div>
            </form> */}
          </div>
        </div>
        <div className='mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
          {posts.map((post) => {
            const { Title, Description, Date: PostDate } = post.properties

            const date = new Date(PostDate.date.start)
            const fullDate = date.toLocaleString('default', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })

            const title = Title.rich_text[0].plain_text
            const description = Description.rich_text[0].plain_text

            return (
              <div key={post.id}>
                <p className='text-sm text-gray-500'>
                  <time dateTime={PostDate.date.start}>{fullDate}</time>
                </p>
                <Link href={`/blog/${post.id}`} className='mt-2 block'>
                  <p className='text-xl font-semibold text-gray-900'>{title}</p>
                  <p className='mt-3 text-base text-gray-500'>{description}</p>
                </Link>
                <div className='mt-3'>
                  <Link
                    href={`/blog/${post.id}`}
                    className='text-base font-semibold text-natix hover:text-natix'
                  >
                    Read full story
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
