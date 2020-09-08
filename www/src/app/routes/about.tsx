import { PageRendererProps } from 'gatsby'
import React from 'react'

import AboutUs from '../../modules/_static/pages/about-us/about-us'
import App from '../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <AboutUs />
  </App>
)
