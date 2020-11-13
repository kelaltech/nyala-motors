import { PageRendererProps } from 'gatsby'
import React from 'react'

import ServiceForm from '../../../../modules/aftersales/service-form/service-form'
import App from '../../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <ServiceForm />
  </App>
)
