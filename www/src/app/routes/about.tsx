import React from 'react'

import { PageRendererProps } from 'gatsby'

import App from '../app'
import AboutUs from '../../modules/_static/pages/about-us/about-us'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <AboutUs />
  </App>
)
