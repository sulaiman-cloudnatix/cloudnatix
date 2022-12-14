import Image from 'next/image'

const people = [
  {
    name: 'Rohit Sethr',
    role: 'Founder & CEO',
    imageUrl: '/images/team/Rohit.jpeg',
    bio: 'Rohit has 25+ years of industry experience. He was at Google for 11 years in leadership roles managing large organizations in core Datacenter infrastructure and Display advertisements. He invented Linux containers and was responsible for Google-wide rollout of containers and other core data center optimization technologies. Earlier he was a Principal Engineer at Intel for over 9 years, responsible for driving Intel platform-related technologies across Linux and Unix ecosystems. Rohit holds a B.E. in Computer Science and Automation from IISc. Bangalore and a BSc. in Mathematics from Delhi University. Rohit has several patents in computer architecture and virtualization technologies.'
  },
  {
    name: 'Somik Behera',
    role: 'Founding Member, Head of Product',
    imageUrl: '/images/team/Somik.jpeg',
    bio: 'Somik was the former Head of Products at D2iQ for Mesosphere business where he scaled the company pre-product to over 100k+ clusters and over $50M in revenue. Prior, he was an early Product Manager at Nicira (acq. by VMware for $1.3B) and early engineer at VMware where he shipped vSphere, Capacity IQ and vCenter Operations 1.0 among other products. Somik holds a Bachelors in Computer Science from The University of Texas at Austin and has completed graduate work in Management Sciences & Engineering from Stanford University. Somik invented Container Networking for Software Defined Networking (SDN) and holds 10+ Patents and Patents Pending in the field of Cloud Infrastructure and SDN.'
  },
  {
    name: 'Kenji Kaneda',
    role: 'Founding Member, Chief Architect',
    imageUrl: '/images/team/Kenji.jpeg',
    bio: 'Kenji has been working on large-scale distributed systems - especially cluster management systems - for over ten years. As a co-tech lead, he worked on Borg, a foundational infrastructure component responsible for managing tens of thousands of machines at Google to serve billions of containers. After Google, he was a lead engineer at Square responsible for building their highly-available micro services infrastructure. Most recently, he was a Principal Engineer at Nvidia, responsible for developing their deep learning training platform and on-premise Kubernetes-based infrastructure. Kenji holds a PhD in Computer Science from The University of Tokyo.'
  }
]

export function AboutUs() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
          <div className='space-y-5 sm:space-y-4'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              About Us
            </h2>
            <p className='text-xl text-gray-500'>
              Our mission is to accelerate innovation with efficient
              infrastructure.
            </p>
          </div>
          <div className='lg:col-span-2'>
            <ul
              role='list'
              className='space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0'
            >
              {people.map((person) => (
                <li key={person.name} className='sm:py-8'>
                  <div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
                    <div className='aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'>
                      <Image
                        className='rounded-lg object-cover shadow-lg'
                        src={person.imageUrl}
                        height={500}
                        width={500}
                        alt=''
                      />
                    </div>
                    <div className='sm:col-span-2'>
                      <div className='space-y-4'>
                        <div className='space-y-1 text-lg font-medium leading-6'>
                          <h3>{person.name}</h3>
                          <p className='text-natix'>{person.role}</p>
                        </div>
                        <div className='text-lg'>
                          <p className='text-gray-500'>{person.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
