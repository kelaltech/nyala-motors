import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../app'
import Home from '../../modules/_static/pages/home/home'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Home />
  </App>
)
