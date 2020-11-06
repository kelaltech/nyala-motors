import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import { Block, Content, Loading, Warning } from 'gerami'
import React, { useRef, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { FaCar, FaCogs, FaRegMap, FaRegNewspaper } from 'react-icons/fa'

import { useHomeQuery } from '../../../../../gen/apollo-types'
import { HomeStaticQuery } from '../../../../../gen/gatsby-types'
import Anchor from '../../../../shared/components/anchor/anchor'
import Button from '../../../../shared/components/button/button'
import Layout from '../../../../shared/components/layout/layout'
import SEO from '../../../../shared/components/seo/seo'
import useLang from '../../../../shared/hooks/lang/use-lang'
import './home.scss'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const {
    heroSlide1,
    heroSlide2,
    heroSlide3,
    heroSlide4,

    Unicarriers,
    elicher,
    macpower,
    nissanLogo,
    udtrucks,
    productLink,
    serviceLink,
  } = useStaticQuery<HomeStaticQuery>(query)

  const lang = useLang()
  const { loading, error, data } = useHomeQuery()

  const carousel = useRef<any>(null)

  const [isLight, setLight] = useState(true)

  return (
    <>
      <SEO
        title="Nyala Motors Home Page"
        description={`Nyala Motors S.C is the exclusive importer and distributor of Nissan vehicles, UD Trucks, Eicher trucks and buses, Unicarrier forklifts and Macpower batteries in Ethiopia`}
      />

      <Layout headerProps={{ mode: 'transparent' }}>
        <div className={'landing-body-container'}>
          <div className={'lading-hero-section'}>
            <Carousel
              ref={carousel}
              className="home-hero-slides"
              enableTilt
              enableAutoPlay
              autoPlaySpeed={5000}
              itemsToShow={1}
              pagination={false}
              renderArrow={() => <></>}
              onChange={(_obj: any, i: number) => {
                setLight(i === 0 || i === 3)

                if (i >= 3) {
                  setTimeout(() => carousel.current?.goTo(0), 5000)
                }
              }}
            >
              <GatsbyImage fluid={heroSlide1?.childImageSharp?.fluid as any} />
              <GatsbyImage fluid={heroSlide2?.childImageSharp?.fluid as any} />
              <GatsbyImage fluid={heroSlide3?.childImageSharp?.fluid as any} />
              <GatsbyImage fluid={heroSlide4?.childImageSharp?.fluid as any} />
            </Carousel>

            <div
              className={`landing-hero-content ${
                isLight ? 'landing-hero-content-light' : ''
              }`}
            >
              <div>
                <h1>{lang`home.hero.title`}</h1>
                <p>{lang`home.hero.desciption`}</p>
                <div>
                  <Button
                    to={'#get-started'}
                    className={
                      'get-started-btn margin-vertical-normal margin-right-big'
                    }
                    mode={'primary'}
                  >{lang`home.hero.btn.get-started`}</Button>

                  <Button
                    to={'/about'}
                    className={'learn-more-btn margin-vertical-normal'}
                    mode={'primary-outline'}
                  >{lang`home.hero.btn.about`}</Button>
                </div>
              </div>
            </div>
          </div>

          <Block className={'landing-to-link-container'}>
            <Content id={'get-started'} transparent size={'4XL'}>
              <Block first last className={'center'}>
                <h1>{lang`home.link.title`} </h1>
              </Block>

              <Block className={'landing-link-yoga'}>
                <Anchor to={'/products'} className="landing-link-img-box">
                  <div className={'landing-img-content'}>
                    <span className={'icon-box'}>
                      <FaCar />
                    </span>
                    <span>
                      <span className={'bold'}>
                        {lang`home.link.product1`}{' '}
                      </span>
                      <span
                        className={'light '}
                      >{lang`home.link.product2`}</span>
                    </span>
                  </div>
                  <GatsbyImage
                    fluid={productLink?.childImageSharp?.fluid as any}
                    className="landing-link-img"
                  />
                </Anchor>

                <Anchor
                  to={'/aftersales/services'}
                  className="landing-link-img-box"
                >
                  <div className={'landing-img-content'}>
                    <span className={'icon-box'}>
                      <FaCogs />
                    </span>
                    <span>
                      <span className={'bold'}>
                        {lang`home.link.aftersale1`}{' '}
                      </span>
                      <Anchor to={'/aftersales/services'}>
                        <span
                          className={'light fg-white'}
                        >{lang`home.link.aftersale.service`}</span>
                      </Anchor>
                      <span className={'light'}>{` & `}</span>
                      <Anchor to={'/aftersales/parts'}>
                        <span
                          className={'light fg-white'}
                        >{lang`home.link.aftersale.parts`}</span>
                      </Anchor>
                    </span>
                  </div>
                  <GatsbyImage
                    fluid={serviceLink?.childImageSharp?.fluid as any}
                    className="landing-link-img"
                  />
                </Anchor>
              </Block>

              <Block className={'landing-products-list'}>
                <Content>
                  <Block className={'landing-products-list-box'}>
                    <Anchor to={'http://nissanethiopia.com'}>
                      <GatsbyImage
                        fluid={nissanLogo?.childImageSharp?.fluid as any}
                        className="produc-list produc-list-img-1"
                      />
                    </Anchor>

                    <Anchor to={'https://www.udtrucks.com'}>
                      <GatsbyImage
                        fluid={udtrucks?.childImageSharp?.fluid as any}
                        className="produc-list produc-list-img-2"
                      />
                    </Anchor>

                    <Anchor to={'https://www.eicher.in/about-us'}>
                      <GatsbyImage
                        fluid={elicher?.childImageSharp?.fluid as any}
                        className="produc-list produc-list-img-3"
                      />
                    </Anchor>
                    <Anchor to={'https://www.unicarriers.co.jp/os_products/'}>
                      <GatsbyImage
                        fluid={Unicarriers?.childImageSharp?.fluid as any}
                        className="produc-list produc-list-img-4"
                      />
                    </Anchor>
                    <Anchor
                      to={
                        'https://mac-power.yigitaku.com/corporate-profile/?lang=en'
                      }
                    >
                      <GatsbyImage
                        fluid={macpower?.childImageSharp?.fluid as any}
                        className="produc-list produc-list-img-5"
                      />
                    </Anchor>
                  </Block>
                </Content>
              </Block>
            </Content>
          </Block>

          <Block className={'landing-quote-container'}>
            <blockquote>
              {lang`home.quote`}
              <span className={'fg-primary'}> #NyalaMotors</span>
            </blockquote>
          </Block>

          {!data && loading ? (
            <div className="padding-very-big">
              <Loading className="margin-vertical-very-big" delay={700} />
            </div>
          ) : error ? (
            <div className="padding-very-big">
              <Warning problem={error as any} shy={true} />
            </div>
          ) : data?.home ? (
            <Block className={'landing-video-container'}>
              <Content size={'XXL'} style={{ overflow: 'hidden' }}>
                <iframe
                  className={'full-width block'}
                  height={'500'}
                  src={`${data.home.youtubeLink}`}
                  frameBorder="0"
                />
              </Content>
            </Block>
          ) : null}

          <div className={'landing-bottom-box'}>
            <div className={'landing-bottom-slant'} />
            <div className={'landing-bottom-items'}>
              <Anchor to={'/news'} className={'landing-bottom-item'}>
                <span className={'bottom-icons'}>
                  <FaRegNewspaper />
                </span>
                <span className={'bottom-title'}>
                  {lang`home.bottom.link1`}
                </span>
              </Anchor>

              <Anchor to={'/contact'} className={'landing-bottom-item'}>
                <span className={'bottom-icons'}>
                  <FaRegMap />
                </span>
                <span className={'bottom-title'}>
                  {lang`home.bottom.link2`}
                </span>
              </Anchor>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home

const query = graphql`
  query HomeStatic {
    heroSlide1: file(relativePath: { eq: "home/home-hero-slide-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroSlide2: file(relativePath: { eq: "home/home-hero-slide-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroSlide3: file(relativePath: { eq: "home/home-hero-slide-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroSlide4: file(relativePath: { eq: "home/home-hero-slide-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    nissanLogo: file(relativePath: { eq: "home/nissan-logo.webp" }) {
      childImageSharp {
        fluid(maxWidth: 420, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    udtrucks: file(relativePath: { eq: "home/udtrucks.png" }) {
      childImageSharp {
        fluid(maxWidth: 420, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    elicher: file(relativePath: { eq: "home/elicher.png" }) {
      childImageSharp {
        fluid(maxWidth: 420, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Unicarriers: file(relativePath: { eq: "home/Unicarriers.png" }) {
      childImageSharp {
        fluid(maxWidth: 420, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    macpower: file(relativePath: { eq: "home/macpower.png" }) {
      childImageSharp {
        fluid(maxWidth: 420, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    productLink: file(relativePath: { eq: "home/product-link.png" }) {
      childImageSharp {
        fluid(maxWidth: 420, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    serviceLink: file(relativePath: { eq: "aftersales/service-img.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
