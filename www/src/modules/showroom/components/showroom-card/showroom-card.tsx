import React from 'react'
import { Showroom } from '../../../../app/graphql'
import { Content, Block } from 'gerami'
import './showroom-card.scss'
import Carousel, { consts } from 'react-elastic-carousel'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'

type ShowroomCardProps = {
  showroom: Pick<Showroom, 'image' | 'description'>
}
const ShowroomCard: React.FC<ShowroomCardProps> = ({ showroom }) => {
  const myArrow = ({ type, onClick }: any) => {
    const pointer =
      type === consts.PREV ? <AiOutlineLeftCircle /> : <AiOutlineRightCircle />
    return (
      <div style={{ alignSelf: 'center' }} onClick={onClick}>
        {pointer}
      </div>
    )
  }
  return (
    <>
      <Content className="showroom-card-container">
        <Block>
          <div className="showroom-card-content">
            <Carousel
              enableAutoPlay={false}
              pagination={false}
              renderArrow={myArrow}
              itemsToShow={1}
            >
              {showroom?.image?.map((img, key) => (
                <div>
                  {!img ? null : (
                    <div
                      key={key}
                      // className={'spec-imgs'}
                      style={{
                        backgroundImage: `url(${img.url})`,
                      }}
                      className="showroom-card-pic"
                    />
                  )}
                </div>
              ))}
            </Carousel>
            <hr />
            <p>{showroom.description}</p>
          </div>
        </Block>
      </Content>
    </>
  )
}

export default ShowroomCard
