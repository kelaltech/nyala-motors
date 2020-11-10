import { Loading, Warning, Yoga } from 'gerami'
import Markdown from 'markdown-to-jsx'
import moment from 'moment'
import qs from 'qs'
import React, { useMemo } from 'react'
import { AiOutlineDownload } from 'react-icons/all'
import { GoLocation } from 'react-icons/go'

import { strapiApiBase } from '../../../../../constants'
import { useBidDetailQuery } from '../../../../../gen/apollo-types'
import { usePage } from '../../../../app/contexts/page-context/page-context'
import Button from '../../../../shared/components/button/button'
import Layout from '../../../../shared/components/layout/layout'
import SEO from '../../../../shared/components/seo/seo'
import './bid-detail.scss'

type BidDetailProps = {}

const BidDetail: React.FC<BidDetailProps> = () => {
  const page = usePage()
  const query =
    qs.parse(page?.location.search || '?', {
      ignoreQueryPrefix: true,
    }) || {}
  const id = query.id as string
  const { loading, error, data } = useBidDetailQuery({ variables: { id } })
  const deadline = useMemo(() => new Date(data?.bid?.Deadline), [
    data?.bid?.Deadline,
  ])

  const isExpired = useMemo(() => Date.now() - deadline.getTime() > 0, [
    deadline,
  ])
  return (
    <>
      <SEO
        title={`${data?.bid?.Title || ''} (Bid)`}
        author={'Nyala Motor S.C.'}
      />
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
          <div className="bid-bid-detail-content">
            <div className="bid-bid-detail-hero">
              <div>
                <h6>Bid</h6>
                <h1>{data.bid.Title} </h1>
                <Yoga maxCol={3}>
                  <div>
                    <p>
                      {isExpired ? (
                        <>
                          {' '}
                          <span>
                            {' '}
                            <b>Closed</b>
                          </span>{' '}
                          on
                        </>
                      ) : (
                        <b> Apply by </b>
                      )}{' '}
                      {moment(deadline).format('MMMM Do YYYY')}
                    </p>
                  </div>
                  <div>
                    <p>
                      Posted on{' '}
                      {moment(data.bid.created_at).format('MMMM Do YYYY')}{' '}
                    </p>
                  </div>
                  <div>
                    <GoLocation style={{ width: 16, height: 16 }} />{' '}
                    {data.bid.Location}
                  </div>
                </Yoga>
                <div className="download-bid-attachement">
                  {isExpired || data.bid?.attachment?.length === 0
                    ? null
                    : data.bid?.attachment?.map((bid, i) => (
                        <div key={i}>
                          <Button
                            to={`${strapiApiBase}/file-proxy/${bid?.id}`}
                            download
                            target="_blank"
                            rel="noopener nofollow"
                            mode="default"
                          >
                            <AiOutlineDownload />
                            <span>{` Download attachment ${i + 1}`} </span>
                          </Button>
                        </div>
                      ))}
                </div>
              </div>
            </div>

            <div className="bid-bid-detail-card">
              <div>
                <div>
                  <h3>About the bid</h3>
                </div>
                <div>
                  <Markdown>{data.bid.description || ''}</Markdown>
                </div>
                <br />
                <div>
                  <h3>Application Requirement</h3>
                </div>
                <div>
                  <Markdown>{data.bid.requirement || ''}</Markdown>
                </div>
              </div>
            </div>

            <div className="bid-bid-detail-card">
              <div>
                <div>
                  <h3>How to Apply</h3>
                </div>
                <div>
                  <Markdown>{data.bid.howToApply || ''}</Markdown>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  )
}

export default BidDetail
