import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../../app'
import Showroom from '../../../modules/showroom/pages/showroom'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Showroom />
  </App>
)
