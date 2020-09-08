import { PageRendererProps } from 'gatsby'
import React from 'react'

import NewsDetail from '../../../modules/news/pages/news-detail/news-detail'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <NewsDetail />
  </App>
)
