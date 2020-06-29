import React from 'react'
import { Showroom } from '../../../../app/graphql'
// import

type ShowroomCardProps = {
  showroom: Pick<Showroom, 'image' | 'description'>
}
const ShowroomCard: React.FC<ShowroomCardProps> = ({ showroom }) => {
  return (
    <div>
      {showroom.image?.map((img, key) => (
        <div key={key}>
          <img src={`${img?.url}`} />
        </div>
      ))}
      <img src={``} />
      {showroom.description}
    </div>
  )
}

export default ShowroomCard
