import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../../../app'
import Parts from '../../../../modules/aftersales/parts/parts'
export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Parts />
  </App>
)
