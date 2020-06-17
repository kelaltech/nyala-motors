import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../../app'
import Branches from '../../../modules/branches/pages/branches/branches'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Branches />
  </App>
)
