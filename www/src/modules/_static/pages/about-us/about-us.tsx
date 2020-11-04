import { graphql, useStaticQuery } from 'gatsby'
import { Block, Content, Loading, Warning, Yoga } from 'gerami'
import Markdown from 'markdown-to-jsx'
import React, { useCallback, useRef } from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { IoMdArrowDropright } from 'react-icons/io'

import { useAboutQuery } from '../../../../../gen/apollo-types'
import { AboutStaticQuery } from '../../../../../gen/gatsby-types'
import Layout from '../../../../shared/components/layout/layout'
import SEO from '../../../../shared/components/seo/seo'
import './about-us.scss'

type AboutUs = {}

const AboutUs: React.FC<AboutUs> = () => {
  const { loading, error, data } = useAboutQuery()

  const { aboutHero } = useStaticQuery<AboutStaticQuery>(query)
  const myArrow = ({ type, onClick }: any) => {
    const pointer =
      type === consts.PREV ? <AiOutlineLeftCircle /> : <AiOutlineRightCircle />
    return (
      <div style={{ alignSelf: 'center', color: '#c51632' }} onClick={onClick}>
        {pointer}
      </div>
    )
  }

  const overviewRef = useRef<HTMLSpanElement | null>(null)
  const valuesRef = useRef<HTMLSpanElement | null>(null)
  const missionRef = useRef<HTMLSpanElement | null>(null)
  const achievementsRef = useRef<HTMLSpanElement | null>(null)

  const scrollToRef = useCallback(
    (ref: React.MutableRefObject<HTMLSpanElement | null>) => {
      if (typeof window === 'undefined') return

      if (ref.current) {
        window.scrollTo(0, ref.current.offsetTop - 96 - 32)
      }
    },
    []
  )

  return (
    <>
      <SEO
        title="About Nyala Mototrs S.C."
        description={
          data?.about?.overviewHistory ||
          'Official website of Nyala Motors S.C.'
        }
      />

      <Layout headerProps={{ mode: 'white' }}>
        {!data && loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : !data?.about || error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} shy={true} />
          </div>
        ) : (
          <>
            <div
              className={'about-hero-container'}
              style={{
                backgroundImage: `url(${aboutHero?.childImageSharp?.fluid?.src})`,
              }}
            >
              {/* <Block className="center about-hero-tag">
                <h1>About Nyala Motors S.C.</h1>
              </Block> */}
            </div>
            <div className={'about-outline-box'}>
              {data.about.overviewHistory && (
                <div className={'about-outline-item'}>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  <a
                    href="#overview"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToRef(overviewRef)
                    }}
                  >
                    OVERVIEW
                  </a>
                </div>
              )}

              {data.about.values && (
                <div className={'about-outline-item'}>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  <a
                    href="#values"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToRef(valuesRef)
                    }}
                  >
                    VISION
                  </a>
                </div>
              )}
              {data.about.mission && (
                <div className={'about-outline-item'}>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  <a
                    href="#mission"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToRef(missionRef)
                    }}
                  >
                    MISSION
                  </a>
                </div>
              )}

              {data.about.achievements && (
                <div className={'about-outline-item'}>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  <a
                    href="#achievements"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToRef(achievementsRef)
                    }}
                  >
                    OUR ACHIEVEMENTS
                  </a>
                </div>
              )}
            </div>
            <Content transparent className={'about-content'} size="4XL">
              <Block className={'center about-content-title'}>
                <div className="title-box">
                  <h1>Nyala Motors S.C.</h1>
                  <p>SINCE 1973</p>
                </div>
              </Block>
            </Content>

            <Block first last />
            <Block />
            <Content size="4XL" className={'about-main-container'}>
              <Block first last />
              <Block first last />
              <Block first last className={'overview-desc'}>
                <span ref={overviewRef} id="overview" />
                <h2>Overview</h2>
                <Markdown className={'mark-down-p'}>
                  {data?.about?.overviewHistory!}
                </Markdown>
              </Block>

              <Block first last>
                {data?.about?.slideImg?.length === 0 ? null : (
                  <div className={'about-slider-box'}>
                    <Carousel
                      enableAutoPlay={true}
                      pagination={false}
                      renderArrow={myArrow}
                      itemsToShow={1}
                    >
                      {data?.about?.slideImg?.map((img, i) => (
                        <div
                          key={i}
                          className={'slider-imgs'}
                          style={{
                            backgroundImage: `url(${img?.url})`,
                          }}
                        />
                      ))}
                    </Carousel>
                  </div>
                )}
              </Block>

              <Block first last />
              <Yoga maxCol={2}>
                <Content className={'values-card'}>
                  <Block first last className={'overview-desc'}>
                    <span ref={valuesRef} id="values" />
                    <h2>Vision</h2>
                    <Markdown className={'mark-down-values'}>
                      {data?.about?.values!}
                    </Markdown>
                  </Block>
                </Content>

                <Content className={'mission-card'}>
                  <span ref={missionRef} id="mission" />
                  <Block first last className={'overview-desc'}>
                    <div className={'right full-width'}>
                      <h2 className={'right'}>Mission Statement</h2>
                    </div>

                    <Markdown className={'mark-down-mission'}>
                      {data?.about?.mission!}
                    </Markdown>
                  </Block>
                </Content>
              </Yoga>

              <Block first last />
              <Block first last className={'overview-desc'}>
                <span ref={achievementsRef} id="achievements" />
                <h2>Our Achievements</h2>

                <div className={`achivements-container`}>
                  <div className="about-page-details-description">
                    <Markdown>{data?.about?.achievements!}</Markdown>
                  </div>
                  {data?.about?.awardImg?.length === 0 ? null : (
                    <div className={'carousel-box'}>
                      <Carousel
                        enableAutoPlay={true}
                        pagination={false}
                        renderArrow={myArrow}
                        itemsToShow={1}
                      >
                        {data?.about?.awardImg?.map((img, i) => (
                          <div
                            key={i}
                            className={'award-imgs'}
                            style={{
                              backgroundImage: `url(${img?.url})`,
                            }}
                          />
                        ))}
                      </Carousel>
                    </div>
                  )}
                </div>
              </Block>

              <Block first last />

              {data?.about?.boardMessage?.length === 0 ? null : (
                <Block>
                  <Yoga maxCol={2}>
                    {data?.about?.boardMessage?.map((board, i) => (
                      <Content key={i} className={'board-message-container'}>
                        <div className={'board-message'}>
                          <p>{board?.message}</p>
                        </div>
                        <hr />
                        <div className={'board-info'}>
                          <div className={'name-pos'}>
                            <h3>{board?.name}</h3>
                            <h3>{board?.position}</h3>
                          </div>
                          <div
                            className={'board-img'}
                            style={{
                              backgroundImage: `url(${board?.img?.url})`,
                            }}
                          />
                        </div>
                      </Content>
                    ))}
                  </Yoga>
                </Block>
              )}
              <Block first last />
              <Block first last />
            </Content>
          </>
        )}
      </Layout>
    </>
  )
}

export default AboutUs

const query = graphql`
  query AboutStatic {
    aboutHero: file(relativePath: { eq: "about/about-hero.png" }) {
      childImageSharp {
        fluid(cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
