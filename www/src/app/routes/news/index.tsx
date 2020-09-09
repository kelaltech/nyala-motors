import { PageRendererProps } from 'gatsby'
import React from 'react'

import News from '../../../modules/news/pages/news/news'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <News />
  </App>
)
