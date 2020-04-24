import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../app'
import Four04 from '../../modules/_static/pages/four04/four04'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Four04 />
  </App>
)
