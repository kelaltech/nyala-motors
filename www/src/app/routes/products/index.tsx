import React from 'react'
import { PageRendererProps } from 'gatsby'
import Products from '../../../modules/product/pages/products/products'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Products />
  </App>
)
