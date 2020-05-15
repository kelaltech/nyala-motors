import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../../app'
import News from '../../../modules/news/pages/news/news'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <News />
  </App>
)