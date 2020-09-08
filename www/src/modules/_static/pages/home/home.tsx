import React from 'react'
import './home.scss'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { Block, Content, Loading, Warning } from 'gerami'
import Button from '../../../../shared/components/button/button'
import { graphql, useStaticQuery } from 'gatsby'
import { HomeStaticQuery } from '../../../../../graphql-types'
import GatsbyImage from 'gatsby-image'
import Anchor from '../../../../shared/components/anchor/anchor'
import { FaCar, FaRegNewspaper, FaRegMap, FaCogs } from 'react-icons/fa'
import useLang from '../../../../shared/hooks/lang/use-lang'
import { useHomeQuery } from '../../../../app/graphql'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const {
    Unicarriers,
    elicher,
    macpower,
    nissanLogo,
    udtrucks,
    productLink,
    serviceLink,
    landingHero,
  } = useStaticQuery<HomeStaticQuery>(query)

  const lang = useLang()
  const { loading, error, data } = useHomeQuery()

  return (
    <>
      <SEO title="Home" />

      <Layout headerProps={{ mode: 'transparent' }}>
        <div className={'landing-body-container'}>
          <div
            className={'lading-hero-section'}
            style={{
              backgroundImage: `url(${landingHero?.childImageSharp?.fluid?.src})`,
            }}
          >
            <Block className={'landing-hero-content'}>
              <Content transparent size="6XL">
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
              </Content>
            </Block>
          </div>

          {/* <Block className={'landing-about-container'}>
            <Content transparent size={'L'} className={'center'}>
              <Block first />
              <div>
                <h1>{lang`home.about.title`}</h1>
                <Block>
                  <hr />
                </Block>
                <p>{lang`home.about.description`}</p>
                <Block first last>
                  <Anchor to={'/about'}>{lang`home.about.link`}</Anchor>
                </Block>
              </div>
              <Block first />
            </Content>
          </Block> */}

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

          <Block className={'landing-qoute-container'}>
            <blockquote>
              {lang`home.quote`}
              <span className={'fg-primary'}>&nbsp;#NyalaMotors</span>
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
    landingHero: file(relativePath: { eq: "home/nyala-home-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nissanLogo: file(relativePath: { eq: "home/nissan-logo.webp" }) {
      childImageSharp {
        fluid(maxWidth: 420, quality: 90, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    udtrucks: file(relativePath: { eq: "home/udtrucks.png" }) {
      childImageSharp {
        fluid(maxWidth: 420, quality: 90, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    elicher: file(relativePath: { eq: "home/elicher.png" }) {
      childImageSharp {
        fluid(maxWidth: 420, quality: 90, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Unicarriers: file(relativePath: { eq: "home/Unicarriers.png" }) {
      childImageSharp {
        fluid(maxWidth: 420, quality: 90, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    macpower: file(relativePath: { eq: "home/macpower.png" }) {
      childImageSharp {
        fluid(maxWidth: 420, quality: 90, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    productLink: file(relativePath: { eq: "home/product-link.png" }) {
      childImageSharp {
        fluid(maxWidth: 420, quality: 90, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    serviceLink: file(relativePath: { eq: "aftersales/service-img.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
