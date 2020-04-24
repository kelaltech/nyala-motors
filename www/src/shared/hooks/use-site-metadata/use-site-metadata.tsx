import { useStaticQuery, graphql } from 'gatsby'

import { UseSiteMetadataQuery } from '../../../../graphql-types'

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
        twitter
        copyright

        siteUrl
      }
    }
  }
`
