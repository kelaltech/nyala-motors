import { PageRendererProps } from 'gatsby'
import React from 'react'

import Showroom from '../../../modules/showroom/pages/showroom'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Showroom />
  </App>
)
