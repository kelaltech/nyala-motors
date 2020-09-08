import { PageRendererProps } from 'gatsby'
import React from 'react'

import BidDetail from '../../../modules/bid/pages/bid-detail/bid-detail'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <BidDetail />
  </App>
)
