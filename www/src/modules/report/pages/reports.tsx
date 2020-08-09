import React, { useState, useMemo } from 'react'
import { Block, Yoga, Loading, Warning } from 'gerami'
import { graphql, useStaticQuery } from 'gatsby'
import ReportCard from '../components/report-card/report-card'
import { useReportsQuery } from '../../../app/graphql'
import { ReportsStaticQuery } from '../../../../graphql-types'
import SEO from '../../../shared/components/seo/seo'
import Layout from '../../../shared/components/layout/layout'
import HeroSearch from '../../../shared/components/hero-search/hero-search'
import { strapiApiBase } from '../../../../constants'
import useLazy from '../../../shared/hooks/use-lazy/use-lazy'
import Button from '../../../shared/components/button/button'

const COUNT = 12

const Reports = () => {
  const { heroBg } = useStaticQuery<ReportsStaticQuery>(query)

  const [limit, setLimit] = useState(COUNT)
  const [term, setTerm] = useState('')
  const [selected, setOnSelected] = useState<{
    name: string
    url?: string
  } | null>()

  const { data, loading, error } = useReportsQuery({
    variables: {
      limit: limit,
      where: {
        ...(selected?.name ? { type: selected?.name } : {}),
        ...(term ? { _q: term } : {}),
      },
    },
  })

  const [total] = useLazy(0, (set) => {
    fetch(`${strapiApiBase}/reports/count`)
      .then((response) => response.json())
      .then((data) => set(Number(data)))
      .catch(console.error)
  })

  const chips = useMemo(
    () => [
      {
        name: 'ANNUAL',
        url: '',
      },
      {
        name: 'QUARTER',
        url: '',
      },
      {
        name: 'FINANCIAL',
        url: '',
      },
      {
        name: 'SEMIANNUAL',
        url: '',
      },
    ],
    []
  )

  return (
    <>
      <SEO title="Reports" />

      <Layout headerProps={{ mode: 'white' }}>
        <HeroSearch
          bg={heroBg?.childImageSharp?.fluid as any}
          title={`Reports`}
          term={term}
          onTerm={setTerm}
          chips={chips}
          selectedChip={selected}
          onSelectedChip={setOnSelected}
        />
        {loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} />
          </div>
        ) : data?.reports?.length === 0 ? (
          <div>
            <Block>
              <Block first last>
                <h1>Report List</h1>
              </Block>
              <Block>
                <p>cant find report files ...please try later!</p>
              </Block>
            </Block>
          </div>
        ) : (
          <Block>
            <Block first last>
              <h1>Report List</h1>
            </Block>
            <Yoga maxCol={2}>
              {data?.reports?.map((node, i) => (
                <ReportCard
                  key={i}
                  date={node?.created_at || ''}
                  excerpt={node?.excerpt || ''}
                  title={node?.title!}
                  type={node?.type!}
                  url={
                    node?.attachments?.id
                      ? `${strapiApiBase}/file-proxy/${node.attachments.id}`
                      : undefined
                  }
                />
              ))}
            </Yoga>
            <Block first last className="center">
              {!data?.reports || data.reports.length >= total ? null : (
                <Button
                  onClick={() => {
                    setLimit(limit + COUNT)
                  }}
                  disabled={loading}
                  mode={'primary-outline'}
                >
                  Load more{loading ? '...' : ''}
                </Button>
              )}
            </Block>
          </Block>
        )}
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
