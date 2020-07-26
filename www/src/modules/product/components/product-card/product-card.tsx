import React from 'react'
import './product-card.scss'
import { Products } from '../../../../app/graphql'
// import Button from '../../../../shared/components/button/button'
import Anchor from '../../../../shared/components/anchor/anchor'

type ProductCardProps = {
  product: Pick<
    Products,
    'id' | 'name' | 'motto' | 'headerImg' | 'eachCategory'
  >
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log(product)
  return (
    <div className="product-card-container">
      <div className="product-card-content">
        <Anchor to={`/products/detail/?id=${product.id}`}>
          <h4>{product.eachCategory}</h4>
          <hr />
          <div>
            <img src={`${product?.headerImg?.url}`} width={'100%'} />
          </div>
        </Anchor>
        <div className="center">
          <span className="align-center">{product.name}</span>
          <br />
          <span className="align-center">{product.motto}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
