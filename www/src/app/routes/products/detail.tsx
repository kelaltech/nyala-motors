import { PageRendererProps } from 'gatsby'
import React from 'react'

import ProductDetail from '../../../modules/product/pages/product-detail/product-detail'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <ProductDetail />
  </App>
)
