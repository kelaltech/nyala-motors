import React from 'react'
import { PageRendererProps } from 'gatsby'
import App from '../app'
import Report from '../../layouts/layout-default/pages/report/report'

export default (props: PageRendererProps) => {
  return (
    <App pageRendererProps={props}>
      <Report />
    </App>
  )
}
