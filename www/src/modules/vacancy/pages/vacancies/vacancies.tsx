import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Warning, Loading, Content } from 'gerami'
import GatsbyImage from 'gatsby-image'

import './vacancies.scss'
import { VacanciesStaticQuery } from '../../../../../graphql-types'
import { useVacanciesQuery } from '../../../../app/graphql'
import { strapiApiBase } from '../../../../../constants'
import useLazy from '../../../../shared/hooks/use-lazy/use-lazy'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import HeroSearch from '../../../../shared/components/hero-search/hero-search'
import VacancyCard from '../../components/vacancy-card/vacancy-card'
import Button from '../../../../shared/components/button/button'

type VacanciesProps = {}

const COUNT = 12

const Vacancies: React.FC<VacanciesProps> = () => {
  const { heroBg, midBg } = useStaticQuery<VacanciesStaticQuery>(query)

  const [term, setTerm] = useState('')

  const [limit, setLimit] = useState(COUNT)
  const { loading, error, data } = useVacanciesQuery({
    variables: { limit, where: term ? { _q: term } : {} },
  })

  const [total] = useLazy(0, (set) => {
    fetch(`${strapiApiBase}/vacancies/count`)
      .then((response) => response.json())
      .then((data) => set(Number(data)))
      .catch(console.error)
  })

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

        {!data && loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} />
          </div>
        ) : (
          <>
            <Content size={'3XL'} transparent={true}>
              {!data?.vacancies?.length ? (
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
                  className="vacancy-vacancies-content"
                  style={{ marginTop: -48, paddingTop: 0 }}
                >
                  <div className="vacancy-vacancies-content-grid">
                    {data?.vacancies
                      ?.filter((vacancy) => !!vacancy)
                      ?.slice(0, 4)
                      .map((vacancy, i) => (
                        <VacancyCard key={i} vacancy={vacancy!} />
                      ))}
                  </div>
                </div>
              )}
            </Content>

            <div className="vacancy-vacancies-content-mid">
              <GatsbyImage
                fluid={midBg?.childImageSharp?.fluid as any}
                className="vacancy-vacancies-content-mid-underlay"
              />

              <div className="vacancy-vacancies-content-mid-overlay">
                <div>
                  <h1>EQUAL OPPORTUNITY CREATOR</h1>

                  <article>
                    <p>
                      It is the policy of Nyala Motors Share Company to recruit
                      the best qualified people and to maintain a pool of human
                      resources according to the manpower requirement and
                      planning of Nyala Motors Share Company.
                    </p>
                    <p>
                      All applicants have equal opportunities of employment
                      irrespective of their age, sex, marital status, family
                      status, disability, race, nationality or religion
                      (provided that these do not impede the abilities of the
                      prospective appointees to carry out normal job duties or
                      affect the health and safety of fellow employees).
                    </p>
                    <p>
                      Job applicants are treated fairly and equally. Employment
                      is offered only to the best qualified applicants with
                      reference to their merits and abilities to meet the
                      requirements of the jobs irrespective of whether they are
                      referrals or direct applicants.
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <Content size={'3XL'} transparent={true}>
              {!data?.vacancies || data.vacancies.length <= 4 ? null : (
                <div className="vacancy-vacancies-content">
                  <div className="vacancy-vacancies-content-grid">
                    {data?.vacancies
                      ?.filter((vacancy) => !!vacancy)
                      ?.slice(4)
                      .map((vacancy, i) => (
                        <VacancyCard key={i} vacancy={vacancy!} />
                      ))}
                  </div>

                  {!data?.vacancies || data.vacancies.length >= total ? null : (
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
