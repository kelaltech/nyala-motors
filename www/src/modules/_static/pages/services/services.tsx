import React from 'react'
import { useServicesQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { Loading, Warning, Yoga, Card, Content } from 'gerami'
import Markdown from 'markdown-to-jsx'
import { strapiApiBase } from '../../../../../constants'
import './services.scss'

type ServicesProps = {}
const Services: React.FC<ServicesProps> = () => {
  const { loading, error, data } = useServicesQuery()
  return (
    <>
      <SEO title="Services" />
      <Layout headerProps={{ mode: 'white' }}>
        <div className="services-header">
          <img
            src={`${strapiApiBase}${data?.service?.heroBg?.url}`}
            className="services-header-underlay"
          />

          <div className="services-header-overlay">
            <div>
              <h2> {data?.service?.title} </h2>

              <div>{data?.service?.motto}</div>
            </div>
          </div>
        </div>

        <Content size={'3XL'} transparent={true}>
          {!data && loading ? (
            <div className="padding-very-big">
              <Loading className="margin-vertical-very-big" delay={700} />
            </div>
          ) : error ? (
            <div>
              <Warning problem={error as any} />
            </div>
          ) : (
            <>
              <div>
                <h2> {data?.service?.fullService?.title} </h2>
                <p> {data?.service?.fullService?.description} </p>
                <Yoga maxCol={4}>
                  {data?.service?.fullService?.serviceType?.map(
                    (fullServiceTypes, key) => (
                      <Card key={key}>
                        <h3> {fullServiceTypes?.title} </h3>
                        <Markdown>{fullServiceTypes?.description}</Markdown>
                      </Card>
                    )
                  )}
                </Yoga>
              </div>
              <div>
                <h2> Service Types </h2>
                <Yoga maxCol={2}>
                  {data?.service?.serviceType?.map((allServices, key) => (
                    <Card
                      key={key}
                      className="padding-horizontal-very-big padding-vertical-very-big"
                    >
                      <h3>{allServices?.title}</h3>
                      <Markdown>{allServices?.description}</Markdown>
                    </Card>
                  ))}
                </Yoga>
              </div>
            </>
          )}
        </Content>
      </Layout>
    </>
  )
}

export default Services
