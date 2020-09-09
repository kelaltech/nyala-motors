import { PageRendererProps } from 'gatsby'
import React from 'react'

import ProductCategories from '../../../modules/product/pages/product-categories/products-categories'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <ProductCategories />
  </App>
)
