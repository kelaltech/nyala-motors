import React from 'react'
import { PageRendererProps } from 'gatsby'
import Registration from '../../../modules/_static/pages/registration/registration'

import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Registration />
  </App>
)
