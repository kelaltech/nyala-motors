import { Block, Content } from 'gerami'
import React, { useState, useRef } from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

import { Showroom } from '../../../../../gen/apollo-types'
import './showroom-card.scss'

type ShowroomCardProps = {
  showroom: Pick<Showroom, 'image' | 'description'>
}
const ShowroomCard: React.FC<ShowroomCardProps> = ({ showroom }) => {
  const carousel = useRef<any>(null)
  const myArrow = ({ type, onClick }: any) => {
    const pointer =
      type === consts.PREV ? <AiOutlineLeftCircle /> : <AiOutlineRightCircle />
    return (
      <div style={{ alignSelf: 'center' }} onClick={onClick}>
        {pointer}
      </div>
    )
  }

  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
      <Content
        transparent
        className="showroom-card-container padding-top-big padding-horizontal-normal"
      >
        <Carousel
          enableAutoPlay={true}
          pagination={false}
          ref={carousel}
          enableTilt
          disableArrowsOnEnd
          autoPlaySpeed={2500}
          renderArrow={myArrow}
          itemsToShow={1}
          onNextEnd={({ index }: any) => {
            if (index + 1 >= showroom?.image?.length!) {
              setTimeout(() => {
                carousel.current.goTo(0)
              }, 2500)
            }
          }}
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
          <p
            style={{
              height: `${isExpanded ? 'auto' : '72px'}`,
            }}
          >
            {showroom.description}
          </p>
          <div className="fg-blackish center right font-L expandable-icon">
            {showroom?.description && showroom.description.length >= 70 ? (
              <span onClick={() => setIsExpanded(!isExpanded)}>
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
