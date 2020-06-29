import React, { useState } from 'react'
import Layout from '../../../../shared/components/layout/layout'
import { strapiApiBase } from '../../../../../constants'
import { useBidsQuery } from '../../../../app/graphql'
import useLazy from '../../../../shared/hooks/use-lazy/use-lazy'
import SEO from '../../../../shared/components/seo/seo'
import HeroSearch from '../../../../shared/components/hero-search/hero-search'
import { Loading, Warning, Content } from 'gerami'
import BidCard from '../../components/bid-card/bid-card'
import './bids.scss'
import Button from '../../../../shared/components/button/button'
import { BidsStaticQuery } from '../../../../../graphql-types'
import { useStaticQuery, graphql } from 'gatsby'

const COUNT = 12

type BidsProps = {}

const Bid: React.FC<BidsProps> = () => {
  const { heroBg } = useStaticQuery<BidsStaticQuery>(query)
  const [term, setTerm] = useState('')

  const [limit, setLimit] = useState(COUNT)

  const { loading, error, data } = useBidsQuery({
    variables: { limit, where: term ? { _q: term } : {} },
  })
  const [total] = useLazy(0, (set) => {
    fetch(`${strapiApiBase}/bids/count`)
      .then((res) => res.json())
      .then((data) => set(Number(data)))
      .catch(console.error)
  })
  return (
    <>
      <SEO title="Bids" />
      <Layout headerProps={{ mode: 'white' }}>
        <HeroSearch
          title={`Bids & Auctions`}
          term={term}
          onTerm={setTerm}
          bg={heroBg?.childImageSharp?.fluid as any}
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
                        <BidCard key={key} bid={bid!} />
                      ))}
                  </div>
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
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
