import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../../app'
import NewsDetail from '../../../modules/news/pages/news-detail/news-detail'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <NewsDetail />
  </App>
)
