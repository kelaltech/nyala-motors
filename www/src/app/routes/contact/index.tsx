import { PageRendererProps } from 'gatsby'
import React from 'react'

import Branches from '../../../modules/branches/pages/branches/branches'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Branches />
  </App>
)
