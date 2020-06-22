import React, { useMemo } from 'react'
import qs from 'qs'
import Layout from '../../../../shared/components/layout/layout'
import { usePage } from '../../../../app/contexts/page-context/page-context'
import { useBidDetailQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import './bid-detail.scss'
import { Loading, Warning, Yoga } from 'gerami'
import moment from 'moment'
type BidDetailProps = {}

const BidDetail: React.FC<BidDetailProps> = () => {
  const page = usePage()
  const query =
    qs.parse(page?.location.search || '?', {
      ignoreQueryPrefix: true,
    }) || {}
  const id = query.id
  const { loading, error, data } = useBidDetailQuery({ variables: { id } })
  const deadline = useMemo(() => new Date(data?.bid?.Deadline), [
    data?.bid?.Deadline,
  ])
  const isExpired = useMemo(() => Date.now() - deadline.getTime() < 0, [
    deadline,
  ])
  return (
    <>
      <SEO title={`${data?.bid?.Title || ''} (Bid)`} />
      <Layout headerProps={{ mode: 'white' }}>
        {loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : !data?.bid || error ? (
          <div className="padding-very-big">
            <Warning
              problem={!data?.bid ? `404 | DATA NOT FOUND` : (error as any)}
            />
          </div>
        ) : (
          <div className="vacancy-vacancy-detail-content">
            `{' '}
            <div className="vacancy-vacancy-detail-hero">
              <div>
                <h6>Bid</h6>
                <h1>{data.bid.Title} </h1>
                <Yoga maxCol={3}>
                  <div>
                    <p>
                      {isExpired ? (
                        <>
                          <span>Closed</span> on
                        </>
                      ) : (
                        <> Apply by </>
                      )}{' '}
                      {moment(deadline).format('MMMM d, YYYY')}
                    </p>
                  </div>
                  <div>
                    <p>Posted on {data.bid.created_at} </p>
                  </div>
                </Yoga>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  )
}

export default BidDetail
