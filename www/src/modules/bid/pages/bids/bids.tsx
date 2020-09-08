import { graphql, useStaticQuery } from 'gatsby'
import { Block, Content, Loading, Warning } from 'gerami'
import React, { useMemo, useState } from 'react'

import { strapiApiBase } from '../../../../../constants'
import { BidsStaticQuery } from '../../../../../graphql-types'
import { useBidsQuery } from '../../../../app/graphql'
import Button from '../../../../shared/components/button/button'
import HeroSearch from '../../../../shared/components/hero-search/hero-search'
import Layout from '../../../../shared/components/layout/layout'
import SEO from '../../../../shared/components/seo/seo'
import useLazy from '../../../../shared/hooks/use-lazy/use-lazy'
import BidCard from '../../components/bid-card/bid-card'
import './bids.scss'

const COUNT = 12

type BidsProps = {}

const Bid: React.FC<BidsProps> = () => {
  const { heroBg } = useStaticQuery<BidsStaticQuery>(query)
  const [term, setTerm] = useState('')

  const [selected, setOnSelected] = useState<{
    name: string
    url?: string
  } | null>()

  const [limit, setLimit] = useState(COUNT)

  const value = useMemo(
    () =>
      selected?.name
        ? selected?.name === 'CLOSED'
          ? { Deadline_lt: new Date().toISOString() }
          : selected?.name === 'ACTIVE'
          ? { Deadline_gte: new Date().toISOString() }
          : {}
        : {},
    [selected]
  )

  const { loading, error, data } = useBidsQuery({
    variables: {
      limit,
      sort: 'Deadline:DESC',
      where: {
        ...value,
        ...(term ? { _q: term } : {}),
      },
    },
  })
  const [total] = useLazy(0, (set) => {
    fetch(`${strapiApiBase}/bids/count`)
      .then((res) => res.json())
      .then((data) => set(Number(data)))
      .catch(console.error)
  })

  const chips = useMemo(
    () => [
      {
        name: 'CLOSED',
        url: '',
      },
      {
        name: 'ACTIVE',
        url: '',
      },
    ],
    []
  )
  return (
    <>
      <SEO title="Bids" />
      <Layout headerProps={{ mode: 'white' }}>
        <HeroSearch
          bg={heroBg?.childImageSharp?.fluid as any}
          title={`Bids & Auctions`}
          term={term}
          onTerm={setTerm}
          chips={chips}
          selectedChip={selected}
          onSelectedChip={setOnSelected}
        />
        {!data && loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : error ? (
          <div>
            <Warning problem={error as any} />
          </div>
        ) : (
          <>
            <Content size={'4XL'} transparent={true}>
              {!data?.bids?.length ? (
                <div className="margin-vertical-very-big padding-very-big center fg-blackish">
                  No result found
                  {!term ? null : (
                    <>
                      {' '}
                      for <q>{term}</q>
                    </>
                  )}
                  .
                </div>
              ) : (
                <div
                  className="bid-bids-content"
                  style={{ marginTop: -48, paddingTop: 0 }}
                >
                  <div className="bid-bids-content-grid">
                    {data?.bids
                      ?.filter((bid) => !!bid)
                      .map((bid, key) => (
                        <BidCard key={key} bid={bid as any} />
                      ))}
                  </div>

                  <Block first className="center">
                    {!data?.bids || data.bids.length >= total ? null : (
                      <Button
                        mode="primary-outline"
                        className="vacancy-vacancies-load-more"
                        onClick={() => {
                          setLimit(limit + COUNT)
                        }}
                        disabled={loading}
                      >
                        Load more{loading ? '...' : ''}
                      </Button>
                    )}
                  </Block>
                </div>
              )}
            </Content>
          </>
        )}
      </Layout>
    </>
  )
}

export default Bid

const query = graphql`
  query BidsStatic {
    heroBg: file(relativePath: { eq: "vacancy/hero-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
