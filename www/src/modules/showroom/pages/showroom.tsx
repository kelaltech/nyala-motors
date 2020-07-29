import React, { useState } from 'react'
import SEO from '../../../shared/components/seo/seo'
import LayoutDefault from '../../../shared/components/layout/layout'
import { useShowroomQuery } from '../../../app/graphql'
import { Warning, Loading, Content, Yoga, Block } from 'gerami'
import ShowroomCard from '../components/showroom-card/showroom-card'
import Modal from '../../../shared/components/modal/modal'
import Button from '../../../shared/components/button/button'
import './showroom.scss'
import { MdRotate90DegreesCcw } from 'react-icons/md'

type ShowroomProps = {}

const Showroom: React.FC<ShowroomProps> = () => {
  const [openModal, setOpenModal] = useState(false)
  const { loading, error, data } = useShowroomQuery()
  console.log('openModal')
  console.log(openModal)
  return (
    <>
      <SEO title="Showroom" />

      <LayoutDefault headerProps={{ mode: 'transparent' }}>
        <div className={'showroom-hero-container'}>
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
              src={'../../../../static/360/showroom.html'}
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
                <Yoga maxCol={2}>
                  {data.showrooms.map((showroom, key) => (
                    <div key={key}>
                      <ShowroomCard showroom={showroom} />
                    </div>
                  ))}
                </Yoga>
              </Block>
            </>
          )}
        </div>
      </LayoutDefault>
    </>
  )
}

export default Showroom
