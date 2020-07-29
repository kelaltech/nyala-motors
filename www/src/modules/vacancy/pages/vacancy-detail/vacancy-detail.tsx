import React, { useMemo } from 'react'
import { Yoga, Loading, Warning, Block } from 'gerami'
import Markdown from 'markdown-to-jsx'
import qs from 'qs'
import moment from 'moment'
import { AiOutlineDownload } from 'react-icons/all'

import './vacancy-detail.scss'
import { usePage } from '../../../../app/contexts/page-context/page-context'
import { useVacancyDetailQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { nameJobType } from '../../../../shared/components/nameJobType'
import { nameSalaryType } from '../../../../shared/components/nameSalaryType'
import { GoLocation } from 'react-icons/go'
import Button from '../../../../shared/components/button/button'

type VacancyDetailProps = {}

const VacancyDetail: React.FC<VacancyDetailProps> = () => {
  const page = usePage()
  const query =
    qs.parse(page?.location.search || '?', {
      ignoreQueryPrefix: true,
    }) || {}
  const id = query.id

  const { loading, error, data } = useVacancyDetailQuery({ variables: { id } })

  const deadline = useMemo(() => new Date(data?.vacancy?.deadline), [
    data?.vacancy?.deadline,
  ])
  const isExpired = useMemo(() => Date.now() - deadline.getTime() > 0, [
    deadline,
  ])

  return (
    <>
      <SEO title={`${data?.vacancy?.title || ''} (Vacancy)`} />

      <Layout headerProps={{ mode: 'primary' }}>
        {!data && loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : !data?.vacancy || error ? (
          <div className="padding-very-big">
            <Warning
              problem={!data?.vacancy ? `404 | DATA NOT FOUND` : (error as any)}
            />
          </div>
        ) : (
          <div className="vacancy-vacancy-detail-content">
            <div className="vacancy-vacancy-detail-hero">
              <div>
                <h6>Vacancy</h6>
                <h1>{data.vacancy.title}</h1>
                {isExpired || !data.vacancy.attachment?.url ? null : (
                  <Button
                    to={`${data.vacancy.attachment.url}`}
                    download
                    target="_blank"
                    rel="noopener nofollow"
                    mode="default"
                  >
                    <AiOutlineDownload />
                    <span>Download File</span>
                  </Button>
                )}

                <Yoga maxCol={3}>
                  <div>
                    <p>
                      {isExpired ? (
                        <>
                          <span>
                            {' '}
                            <b>Closed </b>
                          </span>{' '}
                          on
                        </>
                      ) : (
                        <b>Apply by</b>
                      )}{' '}
                      {moment(deadline).format('MMMM d, YYYY')}
                    </p>
                    <p>
                      Posted on{' '}
                      {moment(data.vacancy.created_at).format('MMMM d, YYYY')}
                    </p>
                  </div>

                  <div>
                    <p>
                      <GoLocation style={{ width: 16, height: 16 }} />{' '}
                      {data.vacancy.location}
                    </p>
                    <p>
                      {' '}
                      <b>Job Type: </b> {nameJobType(data.vacancy.type)}
                    </p>
                  </div>

                  <div>
                    <p>
                      {data.vacancy.quantity}{' '}
                      {data.vacancy.quantity === 1 ? `person` : `people`} needed
                      for the job
                    </p>
                    <p>
                      {nameSalaryType(data.vacancy.salaryPeriod)} salary:{' '}
                      {data.vacancy.salary || <i>Not specified</i>}
                    </p>
                  </div>
                </Yoga>
              </div>
            </div>

            <div className="vacancy-vacancy-detail-card">
              <div>
                <Yoga maxCol={2}>
                  <div>
                    <h2 className="vacancy-vacancy-detail-card-title">
                      Job Description
                    </h2>
                    <div>
                      <Markdown>{data.vacancy.description}</Markdown>
                    </div>
                  </div>

                  <div>
                    <h2 className="vacancy-vacancy-detail-card-title">
                      Job Requirements
                    </h2>
                    <div>
                      <Markdown>{data.vacancy.requirements}</Markdown>
                    </div>
                  </div>
                </Yoga>
              </div>
            </div>

            <div className="vacancy-vacancy-detail-card">
              <div>
                <h2 className="vacancy-vacancy-detail-card-title">
                  How to Apply
                </h2>
                {data.vacancy.applyByCV ? (
                  <Block className="center registration-container">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSfoK2Wjw0ZI0La69NvpBNL5nftHxs9kam5fHpi2YFj1brzZHA/viewform?usp=sf_link"
                      frameBorder={0}
                      scrolling={'no'}
                      className="registration-form"
                    >
                      Loading…
                    </iframe>
                  </Block>
                ) : (
                  <div>
                    <Markdown>{data.vacancy.howToApply}</Markdown>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  )
}

export default VacancyDetail
