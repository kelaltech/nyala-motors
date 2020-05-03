import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Warning, Loading } from 'gerami'

import { VacanciesStaticQuery } from '../../../../../graphql-types'
import { useVacanciesQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import HeroSearch from '../../../../shared/components/hero-search/hero-search'

type VacanciesProps = {}

const Vacancies: React.FC<VacanciesProps> = () => {
  const { heroBg } = useStaticQuery<VacanciesStaticQuery>(query)

  const [term, setTerm] = useState('')

  const { loading, error, data } = useVacanciesQuery()

  return (
    <>
      <SEO title="Vacancies" />

      <Layout headerProps={{ mode: 'white' }}>
        <HeroSearch
          bg={heroBg?.childImageSharp?.fluid as any}
          title={`Vacancies`}
          term={term}
          onTerm={setTerm}
        />

        {loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} />
          </div>
        ) : (
          <pre>TODO: {JSON.stringify(data, null, 2)}</pre>
        )}
      </Layout>
    </>
  )
}

export default Vacancies

const query = graphql`
  query VacanciesStatic {
    heroBg: file(relativePath: { eq: "vacancy/hero-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    midBg: file(relativePath: { eq: "vacancy/mid-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
