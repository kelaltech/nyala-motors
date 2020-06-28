import React from 'react'
import { PageRendererProps } from 'gatsby'
import ProductCategories from '../../../modules/product/pages/product-categories/products-categories'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <ProductCategories />
  </App>
)
