import React, { useState } from 'react'
import './service-card.scss'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
type serviceCard = {
  title: string
  description: string
}
const ServiceCard: React.FC<serviceCard> = ({ description, title }) => {
  const [isExpanded, setIsexapanded] = useState(false)
  return (
    <div className={'service-card-box'}>
      <h1>{title}</h1>
      <p style={{ height: `${isExpanded ? 'auto' : '120px'}` }}>
        {description}
      </p>
      <div
        className="fg-blackish center right font-L expandable-icon"
        onClick={() => setIsexapanded(!isExpanded)}
      >
        {description.length >= 312 ? (
          <>{isExpanded ? <MdExpandLess /> : <MdExpandMore />}</>
        ) : (
          <MdExpandLess style={{ visibility: 'hidden' }} />
        )}
      </div>
    </div>
  )
}

export default ServiceCard
