import { Header, Footer, Meta } from '@ui'
import { Cta, SolutionsOverview } from '@components'

export default function Solutions() {
  return (
    <div>
      <Meta
        meta={{
          title: 'CloudNatix | Solutions',
          description:
            'Discover CloudNatix Solutions by use case, role, industry, and customers.'
        }}
      />
      <Header />
      <SolutionsOverview />
      <Cta />
      <Footer />
    </div>
  )
}
