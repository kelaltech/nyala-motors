import React from 'react'

import './branches-hero.scss'
import { Block, Yoga } from 'gerami'
// import { Loading} from 'gerami'

type Branches = {}

const BranchesHero: React.FC<Branches> = () => {
  return (
    <>
      <Block className={'image-box'}>
        <Yoga maxCol={2}></Yoga>
      </Block>
    </>
  )
}

export default BranchesHero
