import React from 'react'
import { Showroom } from '../../../../app/graphql'
import { Content, Block } from 'gerami'

type ShowroomCardProps = {
  showroom: Pick<Showroom, 'image' | 'description'>
}
const ShowroomCard: React.FC<ShowroomCardProps> = ({ showroom }) => {
  return (
    <>
      <Content className="showroom-card-container">
        <Block>
          <div
            style={{
              backgroundImage: `url(${showroom.image?.url})`,
            }}
            className="showroom-card-pic"
          />
          <div className="showroom-card-content">
            <p>{showroom.description}</p>
          </div>
        </Block>
      </Content>
    </>
  )
}

export default ShowroomCard
