import React from 'react'
import './product-card.scss'
import { Products } from '../../../../app/graphql'
// import Button from '../../../../shared/components/button/button'
import Anchor from '../../../../shared/components/anchor/anchor'
import { strapiApiBase } from '../../../../../constants'

type ProductCardProps = {
  product: Pick<Products, 'id' | 'name' | 'motto' | 'headerImg'>
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card-container">
      <div className="product-card-content">
        <Anchor to={`/products/detail/?id=${product.id}`}>
          <h4>{product.name}</h4>
          <hr />
          <div>
            <img
              src={`${strapiApiBase}${product?.headerImg?.url}`}
              width={'100%'}
            />
          </div>
        </Anchor>
        <span className="align-center">{product.motto}</span>
      </div>
    </div>
  )
}

export default ProductCard
