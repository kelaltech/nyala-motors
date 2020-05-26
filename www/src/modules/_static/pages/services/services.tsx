import React from 'react'
import { useServicesQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import HeroSearch from '../../../../shared/components/hero-search/hero-search'
import { Loading, Warning, Yoga } from 'gerami'

type ServicesProps = {}
const Services: React.FC<ServicesProps> = () => {
  const { loading, error, data } = useServicesQuery()
  return (
    <>
      <SEO title="Services" />
      <Layout headerProps={{ mode: 'white' }}>
        <HeroSearch title={'Services'} />
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
                    <div key={key}>
                      <h3> {fullServiceTypes?.title} </h3>
                    </div>
                  )
                )}
              </Yoga>
            </div>
          </>
        )}
      </Layout>
    </>
  )
}

export default Services
