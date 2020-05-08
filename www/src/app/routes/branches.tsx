import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../app'
import Branches from '../../modules/_static/pages/branches/pages/branches'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Branches />
  </App>
)
