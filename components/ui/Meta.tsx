import Head from 'next/head'
import { useRouter } from 'next/router'

export type MetaFieldProps = {
  title?: string
  description?: string
  type?: string
  image?: string
  date?: string
  twitterLink?: string
}

export interface MetaProps {
  meta?: MetaFieldProps
}

export const Meta = ({ meta }: MetaProps) => {
  const defaultMeta = {
    title: 'CloudNatix',
    description:
      'CloudNatix Platform simplifies management and dramatically boosts cost optimization across fleets of diverse multi cloud and multi k8s cluster operations —VMs or containers, legacy or greenfield, on-prem or cloud-based—all delivered as a service',
    type: 'website',
    image: 'https://cloudnatix.vercel.app/images/logos/logo-cloud.png',
    twitterLink: '@cloudnatix',
    ...meta
  }

  const router = useRouter()
  return (
    <Head>
      <title>{defaultMeta.title}</title>
      <meta name='robots' content='follow, index' />
      <meta content={defaultMeta.description} name='description' />
      <meta
        property='og:url'
        content={`https://www.cloudnatix.vercel.app${router.asPath}`}
      />
      <link
        rel='canonical'
        href={`https://www.cloudnatix.vercel.app${router.asPath}`}
      />
      <meta property='og:type' content={defaultMeta.type} />
      <meta property='og:site_name' content='CloudNatix' />
      <meta property='og:description' content={defaultMeta.description} />
      <meta property='og:title' content={defaultMeta.title} />
      <meta property='og:image' content={defaultMeta.image} />
      <meta
        name='keywords'
        content='CloudNatix, Infrastructure, Workloads, Insights, Kubernetes'
      />
      {defaultMeta.date && (
        <meta property='article:published_time' content={defaultMeta.date} />
      )}
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <meta name='twitter:title' content={defaultMeta.title} />
      <meta name='twitter:description' content={defaultMeta.description} />
      <meta name='twitter:image' content={defaultMeta.image} />
      <meta name='twitter:site' content={defaultMeta.twitterLink} />

      {meta?.date && (
        <meta property='article:published_time' content={meta.date} />
      )}
    </Head>
  )
}
