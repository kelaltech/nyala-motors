import { PageRendererProps } from 'gatsby'
import React from 'react'

import App from '../../../../app/app'
import Services from '../../../../modules/aftersales/services/services'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Services />
  </App>
)
