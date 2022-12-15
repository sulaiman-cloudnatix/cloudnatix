const incentives = [
  {
    name: 'Full Benefits',
    description:
      'Worldclass health, dental, vision, 401(k) & life insurance benefits. Three weeks paid time off to rejuvenate and recharge.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg'
  },
  {
    name: 'Mentorship',
    description: 'A culture of mentorship to help you be the best you can be.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg'
  },
  {
    name: 'Fully Remote',
    description:
      'Financial incentives and work culture to help make remote work possible.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg'
  },
  {
    name: 'Ownership',
    description:
      'Meaningful equity ownership in the company. Grow, learn and own impactful initiatives across a cutting edge technology stack.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg'
  }
]

export function Incentive() {
  return (
    <div>
      <div className='mx-auto max-w-2xl sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8'>
          {incentives.map((incentive) => (
            <div key={incentive.name}>
              <h3 className='mt-5 text-sm font-medium text-gray-900'>
                {incentive.name}
              </h3>
              <p className='mt-2 text-sm text-gray-500'>
                {incentive.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
