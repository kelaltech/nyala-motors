import React from 'react'
import { PageRendererProps } from 'gatsby'
import App from '../app'
import Reports from '../../modules/report/pages/reports'

export default (props: PageRendererProps) => {
  return (
    <App pageRendererProps={props}>
      <Reports />
    </App>
  )
}
