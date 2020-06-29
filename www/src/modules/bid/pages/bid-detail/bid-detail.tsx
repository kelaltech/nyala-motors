import React, { useMemo } from 'react'
import qs from 'qs'
import Layout from '../../../../shared/components/layout/layout'
import { usePage } from '../../../../app/contexts/page-context/page-context'
import { useBidDetailQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import './bid-detail.scss'
import Button from '../../../../shared/components/button/button'
import { Loading, Warning, Yoga } from 'gerami'
import moment from 'moment'
import { AiOutlineDownload } from 'react-icons/all'
import { GoLocation } from 'react-icons/go'
import { strapiApiBase } from '../../../../../constants'
import Markdown from 'markdown-to-jsx'
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
  const isExpired = useMemo(() => Date.now() - deadline.getTime() > 0, [
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
            <div className="vacancy-vacancy-detail-hero">
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
                      {moment(deadline).format('MMMM d, YYYY')}
                    </p>
                  </div>
                  <div>
                    <p>
                      Posted on{' '}
                      {moment(data.bid.created_at).format('MMMM d, YYYY')}{' '}
                    </p>
                  </div>
                  <div>
                    <GoLocation style={{ width: 16, height: 16 }} />{' '}
                    {data.bid.Location}
                  </div>
                </Yoga>
                {isExpired || !data.bid.attachment?.url ? null : (
                  <Button
                    to={`${strapiApiBase}${data.bid.attachment.url}`}
                    download
                    target="_blank"
                    rel="noopener nofollow"
                    mode="default"
                  >
                    <AiOutlineDownload />
                    <span> Download </span>
                  </Button>
                )}
              </div>
            </div>

            <div className="vacancy-vacancy-detail-card">
              <div>
                <div>
                  <h3>About the Job</h3>
                </div>
                <div>
                  <Markdown>{data.bid.description}</Markdown>
                </div>
                <br />
                <div>
                  <h3>Application Requirment</h3>
                </div>
                <div>
                  <Markdown>{data.bid.requirement}</Markdown>
                </div>
              </div>
            </div>

            <div className="vacancy-vacancy-detail-card">
              <div>
                <div>
                  <h3>How to Apply</h3>
                </div>
                <div>
                  <Markdown>{data.bid.howToApply}</Markdown>
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
