import { PageRendererProps } from 'gatsby'
import React from 'react'

import Feedback from '../../../modules/feedback/pages/feedback/feedback'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Feedback />
  </App>
)
