import React from 'react'
import { PageRendererProps } from 'gatsby'
import ProductDetail from '../../../modules/product/pages/product-detail/product-detail'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <ProductDetail />
  </App>
)
