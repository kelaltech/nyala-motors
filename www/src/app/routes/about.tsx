import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../app'
import About from '../../modules/_static/pages/about/about'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <About />
  </App>
)
