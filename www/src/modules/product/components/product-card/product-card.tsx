import React from 'react'

import { Products } from '../../../../app/graphql'
import Anchor from '../../../../shared/components/anchor/anchor'
import Button from '../../../../shared/components/button/button'
// import Button from '../../../../shared/components/button/button
import { nameEachCat } from '../../../../shared/components/nameEachCat'
import './product-card.scss'

type ProductCardProps = {
  product: Pick<
    Products,
    'id' | 'eachCategory' | 'headerImg' | 'motto' | 'name' | 'category'
  >
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Anchor
      className="product-card-content"
      to={`${
        product.category === 'NISSAN'
          ? `http://nissanethiopia.com/vehicles/`
          : `/products/detail/?id=${product.id}`
      }`}
      target={`${product.category === 'NISSAN' ? `_blank` : ``}`}
    >
      <h2 className={'left'}>{nameEachCat(product.eachCategory!)}</h2>
      <img src={`${product?.headerImg?.url}`} width={'100%'} height={200} />

      {product.category === 'NISSAN' ? (
        <Button
          mode={'primary'}
          style={{ borderRadius: '0px', width: '100%', marginTop: '10px' }}
        >
          EXPLORE MORE
        </Button>
      ) : (
        <div className="product-content-container">
          <h4 className={'padding-top-big'}>{product.name}</h4>
          <p className="product-motto font-M align-center">{product.motto}</p>
        </div>
      )}
    </Anchor>
  )
}

export default ProductCard
