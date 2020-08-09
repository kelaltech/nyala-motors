import React from 'react'
import { Helmet } from 'react-helmet'
import url from 'url'

import useSiteMetadata from '../../hooks/use-site-metadata/use-site-metadata'
import { graphqlUrl } from '../../../../constants'

type SEOProps = {
  title: string
  description?: string
  author?: string
  twitter?: string
  copyright?: string
  lang?: string
  meta?: any[]
}

function SEO({
  title,
  description = ``,
  author = ``,
  twitter = ``,
  copyright = ``,
  lang = `en`,
  meta = [],
}: SEOProps) {
  const siteMetadata = useSiteMetadata()

  const href = url.parse(graphqlUrl)

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      link={[
        { rel: 'preconnect', href: `${href.protocol}//${href.host}` },
        { rel: 'dns-prefetch', href: `${href.protocol}//${href.host}` },
      ]}
      meta={[
        {
          name: `description`,
          content: description || siteMetadata.description || ``,
        },
        {
          name: `author`,
          content: author || siteMetadata.author || ``,
        },
        {
          name: `copyright`,
          content: copyright || siteMetadata.copyright || ``,
        },
        {
          property: `og:title`,
          content: title || ``,
        },
        {
          property: `og:description`,
          content: description || siteMetadata.description || ``,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: twitter || siteMetadata.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title || ``,
        },
        {
          name: `twitter:description`,
          content: description || siteMetadata.description || ``,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
