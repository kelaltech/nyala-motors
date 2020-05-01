import React from 'react'
import { Block, Yoga } from 'gerami'
import { graphql, useStaticQuery } from 'gatsby'
import ReportCard from '../components/report-card/report-card'
import { ReportsQuery } from '../../../../graphql-types'
const Reports = () => {
  const { allStrapiReports } = useStaticQuery<ReportsQuery>(QUERY)

  console.log(allStrapiReports)
  return (
    <>
      <Block>
        <Block>
          <h1>Report List</h1>
        </Block>
        <Yoga maxCol={2}>
          {allStrapiReports.edges.map((node, i) => (
            <ReportCard
              key={i}
              date={node.node.created_at!}
              excerpt={node.node.excerpt!}
              title={node.node.Title!}
              type={node.node.type!}
            />
          ))}
        </Yoga>
      </Block>
    </>
  )
}

export default Reports

const QUERY = graphql`
  query Reports {
    allStrapiReports {
      edges {
        node {
          Title
          excerpt
          featured
          type
          created_at
        }
      }
    }
  }
`
