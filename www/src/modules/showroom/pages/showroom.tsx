import { graphql, useStaticQuery } from 'gatsby'
import { Block, Content, Loading, Warning, Yoga } from 'gerami'
import React, { useState } from 'react'
import { MdRotate90DegreesCcw } from 'react-icons/md'

import { strapiApiBase } from '../../../../constants'
import { useShowroomQuery } from '../../../../gen/apollo-types'
import { ShowroomStaticQuery } from '../../../../gen/gatsby-types'
import Button from '../../../shared/components/button/button'
import LayoutDefault from '../../../shared/components/layout/layout'
import Modal from '../../../shared/components/modal/modal'
import SEO from '../../../shared/components/seo/seo'
import useLazy from '../../../shared/hooks/use-lazy/use-lazy'
import ShowroomCard from '../components/showroom-card/showroom-card'
import VideoNews from '../components/video-news/video-news'
import './showroom.scss'

type ShowroomProps = {}
const COUNT = 12
const Showroom: React.FC<ShowroomProps> = () => {
  const [openModal, setOpenModal] = useState(false)
  const [limit, setLimit] = useState(COUNT)

  const { showroomHero } = useStaticQuery<ShowroomStaticQuery>(query)

  const { loading, error, data } = useShowroomQuery({
    variables: {
      limit,
    },
  })

  const [total] = useLazy(0, (set) => {
    fetch(`${strapiApiBase}/showrooms/count`)
      .then((response) => response.json())
      .then((data) => set(Number(data)))
      .catch(console.error)
  })

  return (
    <>
      <SEO title="Showroom" />

      <LayoutDefault headerProps={{ mode: 'transparent' }}>
        <div
          className={'showroom-hero-container'}
          style={{
            backgroundImage: `url(${showroomHero?.childImageSharp?.fluid?.src})`,
          }}
        >
          <Block className="showroom-hero-tag">
            <h1>SHOWROOM</h1>
            <Button
              className={'button-360'}
              onClick={() => setOpenModal(true)}
              mode={'default'}
            >
              <MdRotate90DegreesCcw /> Explore in 360 or VR
            </Button>
          </Block>
        </div>
        <Modal show={openModal} modalClosed={() => setOpenModal(false)}>
          <div>
            <iframe
              src={'/360/vr-frame.html?src=/360/showroom.min.jpg'}
              className="showroom-360"
              width={'100%'}
            />
          </div>
        </Modal>
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
            <>
              <Block>
                <Content
                  size="5XL"
                  transparent={true}
                  className={'showroom-list'}
                >
                  <div
                    style={{
                      backgroundColor: '#c51632',
                      height: '4px',
                      width: '100px',
                    }}
                  />
                  <h3>Nyala Motors in Pictures </h3>
                  <hr />
                </Content>
              </Block>

              <Block>
                <Content transparent size={'XXL'}>
                  <Yoga maxCol={2}>
                    {data.showrooms.slice(0, 2).map((showroom, key) => (
                      <div key={key}>
                        <ShowroomCard showroom={showroom as any} />
                      </div>
                    ))}
                  </Yoga>
                </Content>
              </Block>

              {/* videos from youtube playlist API */}
              <div className={'video-showroom-box'}>
                <VideoNews />
              </div>

              <Block>
                <Content transparent size={'XXL'}>
                  <Yoga maxCol={2}>
                    {data.showrooms.slice(2).map((showroom, key) => (
                      <div key={key}>
                        <ShowroomCard showroom={showroom as any} />
                      </div>
                    ))}
                  </Yoga>
                </Content>
              </Block>

              <Block className={'center'}>
                {!data?.showrooms || data.showrooms.length >= total ? null : (
                  <Button
                    mode="primary-outline"
                    className="vacancy-vacancies-load-more"
                    onClick={() => {
                      setLimit(limit + COUNT)
                    }}
                    disabled={loading}
                  >
                    Load more{loading ? '...' : ''}
                  </Button>
                )}
              </Block>
            </>
          )}
        </div>
      </LayoutDefault>
    </>
  )
}

export default Showroom

const query = graphql`
  query ShowroomStatic {
    showroomHero: file(relativePath: { eq: "showroom/showroom-hero.png" }) {
      childImageSharp {
        fluid(cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
