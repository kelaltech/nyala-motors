import React from 'react'

type VacancyCardProps = {
  vacancy: any
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  return (
    <div>
      TODO: VacancyCard<pre>{JSON.stringify(vacancy, null, 2)}</pre>
    </div>
  )
}

export default VacancyCard
