import React from 'react'
import './home.scss'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { Block, Content } from 'gerami'
import Button from '../../../../shared/components/button/button'
import { graphql, useStaticQuery } from 'gatsby'
import { HomeStaticQuery } from '../../../../../graphql-types'
import GatsbyImage from 'gatsby-image'
import Anchor from '../../../../shared/components/anchor/anchor'
import { FaCar, FaRegNewspaper } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'

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
  } = useStaticQuery<HomeStaticQuery>(query)
  return (
    <>
      <SEO title="Home" />

      <Layout headerProps={{ mode: 'transparent' }}>
        <div className={'landing-body-container'}>
          <div className={'lading-hero-section'}>
            <Block className={'landing-hero-content'}>
              <h1>
                Exclusive Importer and Distributor of Top Automotive Brands
              </h1>
              <p>
                Nyala Motors S.C is the exclusive importer and distributor of
                Nissan vehicles, UD Trucks, Eicher trucks and buses, Unicarrier
                forklifts and Macpower batteries in Ethiopia. We also provide
                aftersales servicing and genuine part sales.
              </p>
              <Button>Get Started</Button>
            </Block>
          </div>

          <Block className={'landing-products-list'}>
            <Content>
              <Block className={'landing-products-list-box'}>
                <GatsbyImage
                  fluid={nissanLogo?.childImageSharp?.fluid as any}
                  className="produc-list produc-list-img-1"
                />
                <GatsbyImage
                  fluid={udtrucks?.childImageSharp?.fluid as any}
                  className="produc-list produc-list-img-2"
                />
                <GatsbyImage
                  fluid={elicher?.childImageSharp?.fluid as any}
                  className="produc-list produc-list-img-3"
                />
                <GatsbyImage
                  fluid={Unicarriers?.childImageSharp?.fluid as any}
                  className="produc-list produc-list-img-4"
                />
                <GatsbyImage
                  fluid={macpower?.childImageSharp?.fluid as any}
                  className="produc-list produc-list-img-5"
                />
              </Block>
            </Content>
          </Block>

          <Block className={'landing-about-container'}>
            <Content transparent size={'L'} className={'center'}>
              <Block first />
              <div>
                <h1>Nyala Motors</h1>
                <Block>
                  <hr />
                </Block>
                <p>
                  Nyala Motors Share Company was established in April 1973 in
                  line with the Commercial Code of Ethiopia by five founding
                  members with a registered capital of birr 50,000. When the
                  company was setup it began its operation with the sales of
                  Datsun automobiles and today it has become exclusive
                  distributor for Nissan motors vehicles, UD trucks, VE
                  commercial vehicles, Unicarrier forklifts and Macpower
                  battery.
                </p>
                <Block first last>
                  <Anchor to={'/about'}>Learn More About the Company</Anchor>
                </Block>
              </div>
              <Block first />
            </Content>
          </Block>

          <Block className={'landing-to-link-container'}>
            <Content transparent size={'4XL'}>
              <Block first last className={'center'}>
                <h1>What are you looking for? </h1>
              </Block>
              <Block className={'landing-link-yoga'}>
                <Anchor to={'/products'} className="landing-link-img-box">
                  <div className={'landing-img-content'}>
                    <span className={'icon-box'}>
                      <FaCar />
                    </span>
                    <span>
                      <span className={'bold'}>{`PRODUCTS `} </span>
                      <span className={'light'}>TO BUY</span>
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
                      <FaCar />
                    </span>
                    <span>
                      <span className={'bold'}>{`AFTERSALES `} </span>
                      <span className={'light'}>SERVICE OR PARTS</span>
                    </span>
                  </div>
                  <GatsbyImage
                    fluid={serviceLink?.childImageSharp?.fluid as any}
                    className="landing-link-img"
                  />
                </Anchor>
              </Block>
            </Content>
          </Block>

          <Block className={'landing-qoute-container'}>
            <blockquote>
              Step up performace, convenience, and style the easy way with
              Genuine Nissan accessories.
              <span className={'fg-primary'}>#NyalaMotors</span>
            </blockquote>
          </Block>

          <Block className={'landing-video-container'}>
            <Content size={'XXL'}>
              <iframe
                className={'full-width'}
                height={'500'}
                src={`https://www.youtube.com/embed/A6ZgYvIxTL4`}
                frameBorder="0"
              />
            </Content>
          </Block>

          <div className={'landing-bottom-box'}>
            <div className={'landing-bottom-slant'} />
            <div className={'landing-bottom-items'}>
              <div className={'landing-bottom-item'}>
                <span className={'bottom-icons'}>
                  <FaRegNewspaper />
                </span>
                <Anchor to={'/news'} className={'bottom-title'}>
                  READ THE LATEST NEWS
                </Anchor>
              </div>
              <div className={'landing-bottom-item'}>
                <span className={'bottom-icons'}>
                  <GrMapLocation color={'#c51632'} />
                </span>
                <Anchor to={'/contact'} className={'bottom-title'}>
                  FIND OR CONTACT US
                </Anchor>
              </div>
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
    nissanLogo: file(relativePath: { eq: "home/nissan-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    udtrucks: file(relativePath: { eq: "home/udtrucks.png" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    elicher: file(relativePath: { eq: "home/elicher.png" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Unicarriers: file(relativePath: { eq: "home/Unicarriers.png" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    macpower: file(relativePath: { eq: "home/macpower.png" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    productLink: file(relativePath: { eq: "home/product-link.png" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
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
