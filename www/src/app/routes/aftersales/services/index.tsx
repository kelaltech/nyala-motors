import React from 'react'
import { PageRendererProps } from 'gatsby'
import Services from '../../../../modules/aftersales/services/services'
import App from '../../../../app/app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Services />
  </App>
)
