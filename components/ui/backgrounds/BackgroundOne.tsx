import { HeroBackground } from './HeroBackground'

export const BackgroundOne = () => {
  return (
    <div className='overflow-hidden h-full w-full bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]'>
      <div className='py-16 sm:px-2 lg:relative lg:py-20 lg:px-0'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12'>
          <div className='relative lg:static xl:pl-10'>
            <div className='absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]'>
              <HeroBackground className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
