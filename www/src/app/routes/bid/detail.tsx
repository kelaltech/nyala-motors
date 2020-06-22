import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../../app'
import BidDetail from '../../../modules/bid/pages/bid-detail/bid-detail'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <BidDetail />
  </App>
)
