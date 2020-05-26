import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../app'
import Services from '../../modules/_static/pages/services/services'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Services />
  </App>
)
