import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../app'
import Feedback from '../../modules/_static/pages/feedback/pages/feedback'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Feedback />
  </App>
)
