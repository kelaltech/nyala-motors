import { PageRendererProps } from 'gatsby'
import React from 'react'

import Reports from '../../../modules/report/pages/reports'
import App from '../../app'

export default (props: PageRendererProps) => {
  return (
    <App pageRendererProps={props}>
      <Reports />
    </App>
  )
}
