import React from 'react'
import SEO from '../../../shared/components/seo/seo'
import LayoutDefault from '../../../shared/components/layout/layout'
import { useShowroomQuery } from '../../../app/graphql'
import { Warning, Loading, Content, Yoga } from 'gerami'
import ShowroomCard from '../components/showroom-card/showroom-card'

type ShowroomProps = {}

const Showroom: React.FC<ShowroomProps> = () => {
  const { loading, error, data } = useShowroomQuery()
  return (
    <>
      <SEO title="Feedback" />

      <LayoutDefault>
        <iframe
          src={'../../../../static/360/showroom.html'}
          className="showroom-360"
        ></iframe>

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
            className={'margin-top-very-big'}
          >
            <h2>Nyala Motors in Pitures </h2>
            <Yoga maxCol={2}>
              {data.showrooms.map((showroom, key) => (
                <div key={key}>
                  <ShowroomCard showroom={showroom} />
                </div>
              ))}
            </Yoga>
          </Content>
        )}
      </LayoutDefault>
    </>
  )
}

export default Showroom
