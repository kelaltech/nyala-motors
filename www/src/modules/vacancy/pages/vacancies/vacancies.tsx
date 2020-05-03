import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Warning, Loading } from 'gerami'
import GatsbyImage from 'gatsby-image'

import './vacancies.scss'
import { VacanciesStaticQuery } from '../../../../../graphql-types'
import { useVacanciesQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import HeroSearch from '../../../../shared/components/hero-search/hero-search'
import VacancyCard from '../../components/vacancy-card/vacancy-card'
import Button from '../../../../shared/components/button/button'

type VacanciesProps = {}

const Vacancies: React.FC<VacanciesProps> = () => {
  const { heroBg, midBg } = useStaticQuery<VacanciesStaticQuery>(query)

  const [term, setTerm] = useState('')

  const { loading, error, data } = useVacanciesQuery()

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

        {loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} />
          </div>
        ) : (
          <>
            <div
              className="vacancy-vacancies-content"
              style={{ marginTop: -48, paddingTop: 0 }}
            >
              <div className="vacancy-vacancies-content-grid">
                {data?.vacancies
                  ?.filter((vacancy) => !!vacancy)
                  .map((vacancy, i) => (
                    <VacancyCard key={i} vacancy={vacancy!} />
                  ))}
              </div>
            </div>

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

            <div className="vacancy-vacancies-content">
              <div className="vacancy-vacancies-content-grid">
                {data?.vacancies
                  ?.filter((vacancy) => !!vacancy)
                  .map((vacancy, i) => (
                    <VacancyCard key={i} vacancy={vacancy!} />
                  ))}
              </div>

              {!true ? null : (
                <Button
                  mode="primary-outline"
                  className="vacancy-vacancies-load-more"
                  onClick={() => {
                    /* TODO: */
                  }}
                >
                  Load more
                </Button>
              )}
            </div>
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
