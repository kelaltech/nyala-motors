import { PageRendererProps } from 'gatsby'
import React from 'react'

import Bid from '../../../modules/bid/pages/bids/bids'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Bid />
  </App>
)
