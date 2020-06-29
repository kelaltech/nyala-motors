import React from 'react'
import './about.scss'

import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { useAboutQuery } from '../../../../app/graphql'
import { Yoga, Loading, Warning, Content } from 'gerami'
import Markdown from 'markdown-to-jsx'
import { strapiApiBase } from '../../../../../constants'
import { IoIosPlay } from 'react-icons/io'

type About = {}

const About: React.FC<About> = () => {
  const { loading, error, data } = useAboutQuery()
  return (
    <>
      <SEO title="About" />

      <Layout headerProps={{ mode: 'default' }}>
        {!data && loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : !data?.about || error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} />
          </div>
        ) : (
          <div className="about-container">
            <div
              style={{
                backgroundImage: `url(${strapiApiBase}${data.about.heroImg?.url})`,
              }}
              className="about-hero"
            >
              <div className="about-hero-overlay">
                <h3>About Nyala Motors S.C.</h3>
              </div>
            </div>
            <Content transparent={true} className="about-page">
              <Yoga maxCol={2} className="about-page-top">
                <div className="about-page-top-navigator">
                  <span>
                    {' '}
                    <IoIosPlay color="C51632" /> {'    '} Overview{' '}
                  </span>
                  <span>
                    {' '}
                    <IoIosPlay color="C51632" /> {'    '} Values{' '}
                  </span>
                  <span>
                    {' '}
                    <IoIosPlay color="C51632" /> {'    '} Mission{' '}
                  </span>
                  <span>
                    {' '}
                    <IoIosPlay color="C51632" /> {'    '} Achievements{' '}
                  </span>
                </div>
                <div className="about-page-top-title">
                  <h1> Nyala Motors S.C</h1>
                  <span>Since 1972</span>
                </div>
              </Yoga>
              <Content
                size={'4XL'}
                transparent={true}
                className="about-page-details"
              >
                <div className="about-page-details">
                  <h4>Overview</h4>
                  <Markdown className="about-page-details-description">
                    {data.about.overviewHistory}
                  </Markdown>
                </div>
                <div className="about-page-details">
                  <h4>Values</h4>
                  <Markdown className="about-page-details-description">
                    {data.about.values}
                  </Markdown>
                </div>
                <div className="about-page-details">
                  <h4>Mission</h4>
                  <Markdown className="about-page-details-description">
                    {data.about.mission}
                  </Markdown>
                </div>
                <div className="about-page-details">
                  <h4> Achievements </h4>
                  <Yoga maxCol={2}>
                    <Markdown className="about-page-details-description">
                      {data.about.achievements}
                    </Markdown>
                    <div>
                      {data.about.awardImg?.map((image, key) => (
                        <div key={key}>
                          <img
                            src={`${strapiApiBase}${image?.url}`}
                            width={'100%'}
                          />
                        </div>
                      ))}
                    </div>
                  </Yoga>
                </div>
              </Content>
            </Content>
          </div>
        )}
      </Layout>
    </>
  )
}

export default About
