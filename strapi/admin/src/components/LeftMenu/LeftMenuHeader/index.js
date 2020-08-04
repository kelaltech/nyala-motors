// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
import Wrapper from './Wrapper'


const LeftMenuHeader = () => (
  <Wrapper>
    <Link to="/" className="leftMenuHeaderLink">
      <span className="projectName" />
    </Link>
  </Wrapper>
)

export default LeftMenuHeader
