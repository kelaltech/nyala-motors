import { graphql, useStaticQuery } from 'gatsby'
import { Block, Content, Loading, Warning, Yoga } from 'gerami'
import React from 'react'
// import { BsThreeDots } from 'react-icons/bs'
// import { FaCarBattery, FaOilCan, FaWater } from 'react-icons/fa'

import { useServiceQuery } from '../../../../gen/apollo-types'
import { ServiceStaticQuery } from '../../../../gen/gatsby-types'
import Button from '../../../shared/components/button/button'
import LayoutDefault from '../../../shared/components/layout/layout'
import SEO from '../../../shared/components/seo/seo'
import ServiceCard from './components/service-card/service-card'
import './services.scss'

type Services = {}

const Services: React.FC<Services> = () => {
  const { data, loading, error } = useServiceQuery()

  const { serviceHero } = useStaticQuery<ServiceStaticQuery>(query)

  return (
    <>
      <SEO title={'Services'} />

      <LayoutDefault
        headerProps={{
          mode: 'transparent',
        }}
      >
        <div
          className={'service-hero-section'}
          style={{
            backgroundImage: `url(${serviceHero?.childImageSharp?.fluid?.src})`,
          }}
        >
          <div className={'service-hero-content'}>
            <h1>CAR REPAIR SERVICES</h1>
            <p>
              Nyala Motors S.C. provides aftersales services to ensure the
              maximum satisfaction of its esteemed customers.
            </p>
            <Button mode={'primary'} to={'#services'}>
              See Services
            </Button>
          </div>
        </div>

        <Content transparent className="center service-content-box" size={'M'}>
          <Block first>
            <h1>Full Service</h1>
          </Block>
          <Block>
            <p>
              Full service, oil and oil filter will be changed, some additional
              safety checks will be made and some moving parts will be
              lubricated. tyres and searching for any fluid leaks in the car.
            </p>
          </Block>
        </Content>

        {/* <Content transparent size={'XXL'} className={'service-yoga-container'}>
          <Yoga maxCol={4}>
            <div className={'service-yoga-card'}>
              <div className={'service-yoga-card-icon'}>
                <FaOilCan />
              </div>
              <h1>Oil</h1>
              <small>BRAKE</small>
              <small>GEAR</small>
              <small>WHEEL</small>
            </div>
            <div className={'service-yoga-card'}>
              <div className={'service-yoga-card-icon'}>
                <FaCarBattery />
              </div>
              <h1>Lights</h1>
              <small>SIDE</small>
              <small>HEAD</small>
              <small>STOP</small>
            </div>
            <div className={'service-yoga-card'}>
              <div className={'service-yoga-card-icon'}>
                <FaWater />
              </div>
              <h1>Lights</h1>
              <small>CHECK LEVEL</small>
              <small>CHECK QUALITY</small>
              <small>OTHER</small>
            </div>

            <div className={'service-yoga-card'}>
              <div className={'service-yoga-card-icon'}>
                <BsThreeDots />
              </div>
              <h1>Others</h1>
              <small>TIRE</small>
              <small>EXHAUST</small>
              <small>HORN</small>
            </div>
          </Yoga>
        </Content> */}

        {loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} />
          </div>
        ) : data?.service?.serviceType?.length === 0 ? (
          <Block>
            <Block first last>
              <h1>Report List</h1>
            </Block>
            <Block>
              <p>cant find services ... please try later</p>
            </Block>
          </Block>
        ) : (
          <Content
            id={'services'}
            size={'4XL'}
            className={'service-list-container'}
            style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <Block>
              <Block className="center padding-top-very-big">
                <h1>Service Operations</h1>
              </Block>
              <Block>
                <Yoga maxCol={2}>
                  {data?.service?.serviceType?.map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service?.title ? service.title : ''}
                      description={
                        service?.description ? service.description : ''
                      }
                    />
                  ))}
                </Yoga>
              </Block>
            </Block>
          </Content>
        )}
      </LayoutDefault>
    </>
  )
}

export default Services

const query = graphql`
  query ServiceStatic {
    serviceHero: file(relativePath: { eq: "aftersales/service-img.jpeg" }) {
      childImageSharp {
        fluid(cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
