import Link from 'next/link'
import Image from 'next/image'

export function FromTheBlog({ posts }: { posts: [] }) {
  return (
    <div className='relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
      <div className='absolute inset-0'>
        <div className='h-1/3 bg-white sm:h-2/3' />
      </div>
      <div className='relative mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            From the blog
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
            Stay up to date with articles from CloudNatix
          </p>
        </div>
        <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => {
            const {
              Title,
              Description,
              Image: PostImage,
              Date: PostDate
            } = post.properties

            const date = new Date(PostDate.date.start)
            const fullDate = date.toLocaleString('default', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })

            const title = Title.rich_text[0].plain_text
            const description = Description.rich_text[0].plain_text
            return (
              <div
                key={title}
                className='flex flex-col overflow-hidden rounded-lg shadow-lg'
              >
                <div className='flex-shrink-0'>
                  {PostImage.url != null ? (
                    <img
                      className='h-48 w-full object-contain'
                      src={PostImage.url}
                      alt=''
                    />
                  ) : (
                    <Image
                      width='100'
                      height='100'
                      alt='CloudNatix logo'
                      className='h-48 w-full object-contain'
                      src='/images/logos/logo-cloud.png'
                    />
                  )}
                </div>
                <div className='flex flex-1 flex-col justify-center bg-white p-6'>
                  <div className='flex-1'>
                    <Link href={`/blog/${post.id}`} className='mt-2 block'>
                      <p className='text-lg font-semibold text-gray-900'>
                        {title}
                      </p>
                      <p className='mt-3 text-base text-gray-500'>
                        {description}
                      </p>
                    </Link>
                  </div>
                  <div className='mt-6 flex items-center'>
                    <div>
                      <div className='flex space-x-1 text-sm text-gray-500'>
                        <time dateTime={fullDate}>{fullDate}</time>
                        <span aria-hidden='true'>&middot;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
