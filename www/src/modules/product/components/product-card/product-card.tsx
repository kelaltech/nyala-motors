import React from 'react'
import './product-card.scss'
import { Products } from '../../../../app/graphql'
// import Button from '../../../../shared/components/button/button
import { nameEachCat } from '../../../../shared/components/nameEachCat'
import Anchor from '../../../../shared/components/anchor/anchor'

type ProductCardProps = {
  product: Pick<
    Products,
    'id' | 'eachCategory' | 'headerImg' | 'motto' | 'name'
  >
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Anchor
      className="product-card-content"
      to={`/products/detail/?id=${product.id}`}
    >
      <h2 className={'left'}>{nameEachCat(product.eachCategory)}</h2>
      <img src={`${product?.headerImg?.url}`} width={'100%'} />

      <div className="product-content-container">
        <h2 className={'padding-top-big'}>{product.name}</h2>
        <p className="product-motto  align-center">{product.motto}</p>
      </div>
    </Anchor>
  )
}

export default ProductCard
