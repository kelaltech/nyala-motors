import { PageRendererProps } from 'gatsby'
import React from 'react'

import Four04 from '../../modules/_static/pages/four04/four04'
import App from '../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Four04 />
  </App>
)
