import React, { useState } from 'react'
import { Showroom } from '../../../../app/graphql'
import { Content, Block } from 'gerami'

import './showroom-card.scss'
import Carousel, { consts } from 'react-elastic-carousel'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
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

  const [isExpanded, setIsexapanded] = useState(false)
  return (
    <>
      <Content className="showroom-card-container padding-top-big padding-horizontal-normal">
        <Carousel
          enableAutoPlay={false}
          pagination={false}
          renderArrow={myArrow}
          itemsToShow={1}
        >
          {showroom?.image?.map((img, key) => (
            <div
              key={key}
              style={{
                backgroundImage: `url(${img?.url})`,
              }}
              className="showroom-card-pic"
            />
          ))}
        </Carousel>
        <Block className="showroom-card-content">
          <hr />
          <p
            style={{
              height: `${isExpanded ? 'auto' : '72px'}`,
            }}
          >
            {showroom.description}
          </p>
          <div className="fg-blackish center right font-L expandable-icon">
            {showroom?.description?.length >= 70 ? (
              <span onClick={() => setIsexapanded(!isExpanded)}>
                {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
              </span>
            ) : (
              <MdExpandLess style={{ visibility: 'hidden' }} />
            )}
          </div>
        </Block>
      </Content>
    </>
  )
}

export default ShowroomCard
