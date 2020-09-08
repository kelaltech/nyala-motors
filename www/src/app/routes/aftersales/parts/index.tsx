import { PageRendererProps } from 'gatsby'
import React from 'react'

import Parts from '../../../../modules/aftersales/parts/parts'
import App from '../../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Parts />
  </App>
)
