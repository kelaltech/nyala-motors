import React, { useState } from 'react'
import { Block, Yoga } from 'gerami'
import { graphql, useStaticQuery } from 'gatsby'
import ReportCard from '../components/report-card/report-card'
import { useReportsQuery } from '../../../app/graphql'
import { ReportsStaticQuery } from '../../../../graphql-types'
import SEO from '../../../shared/components/seo/seo'
import Layout from '../../../shared/components/layout/layout'
import HeroSearch from '../../../shared/components/hero-search/hero-search'

const Reports = () => {
  const { data } = useReportsQuery()
  const { heroBg } = useStaticQuery<ReportsStaticQuery>(query)

  const [term, setTerm] = useState('')
  return (
    <>
      <SEO title="Reports" />

      <Layout headerProps={{ mode: 'white' }}>
        <HeroSearch
          bg={heroBg?.childImageSharp?.fluid as any}
          title={`Reports`}
          term={term}
          onTerm={setTerm}
        />

        <Block>
          <Block>
            <h1>Report List</h1>
          </Block>
          <Yoga maxCol={2}>
            {data?.reports?.map((node, i) => (
              <ReportCard
                key={i}
                date={node?.created_at || ''}
                excerpt={node?.excerpt || ''}
                title={node?.Title!}
                type={node?.type!}
              />
            ))}
          </Yoga>
        </Block>
      </Layout>
    </>
  )
}

export default Reports

const query = graphql`
  query ReportsStatic {
    heroBg: file(relativePath: { eq: "vacancy/hero-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
