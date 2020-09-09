import { PageRendererProps } from 'gatsby'
import React from 'react'

import Home from '../../modules/_static/pages/home/home'
import App from '../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Home />
  </App>
)
