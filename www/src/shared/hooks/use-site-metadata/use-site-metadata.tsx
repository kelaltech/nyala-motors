import { graphql, useStaticQuery } from 'gatsby'

import { UseSiteMetadataQuery } from '../../../../gen/gatsby-types'

const useSiteMetadata = () => {
  const { site } = useStaticQuery<UseSiteMetadataQuery>(query)

  return site?.siteMetadata || {}
}

export default useSiteMetadata

const query = graphql`
  query UseSiteMetadata {
    site {
      siteMetadata {
        title
        description
        author
        image
        twitter
        copyright
        siteUrl
      }
    }
  }
`
