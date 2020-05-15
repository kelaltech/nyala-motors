import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../../app'
import Bid from '../../../modules/bid/pages/bids/bids'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Bid />
  </App>
)
