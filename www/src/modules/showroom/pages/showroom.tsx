import React from 'react'
import SEO from '../../../shared/components/seo/seo'
import LayoutDefault from '../../../shared/components/layout/layout'
import { useShowroomQuery } from '../../../app/graphql'
import { Warning, Loading, Content, Yoga } from 'gerami'
import ShowroomCard from '../components/showroom-card/showroom-card'
import './showroom.scss'

type ShowroomProps = {}

const Showroom: React.FC<ShowroomProps> = () => {
  const { loading, error, data } = useShowroomQuery()
  return (
    <>
      <SEO title="Feedback" />

      <LayoutDefault headerProps={{ mode: 'transparent' }}>
        <div>
          <iframe
            src={'../../../../static/360/showroom.html'}
            className="showroom-360"
            width={'100%'}
          />
        </div>
        <div className="showroom-container">
          {!data && loading ? (
            <div className="padding-very-big">
              <Loading className="margin-vertical-very-big" delay={700} />
            </div>
          ) : !data?.showrooms || error ? (
            <div className="padding-very-big">
              <Warning problem={error as any} />
            </div>
          ) : (
            <Content
              size="4XL"
              transparent={true}
              className={'margin-top-very-big showroom-list'}
            >
              <h3>Nyala Motors in Pitures </h3>
              <Yoga maxCol={3}>
                {data.showrooms.map((showroom, key) => (
                  <div key={key}>
                    <ShowroomCard showroom={showroom} />
                  </div>
                ))}
              </Yoga>
            </Content>
          )}
        </div>
      </LayoutDefault>
    </>
  )
}

export default Showroom
