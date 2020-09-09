import { PageRendererProps } from 'gatsby'
import React from 'react'

import FAQ from '../../../modules/_static/pages/faq/faq'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <FAQ />
  </App>
)
