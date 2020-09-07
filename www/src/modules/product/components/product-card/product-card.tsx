import React from 'react'
import './product-card.scss'
import { Products } from '../../../../app/graphql'
// import Button from '../../../../shared/components/button/button
import { nameEachCat } from '../../../../shared/components/nameEachCat'
import Anchor from '../../../../shared/components/anchor/anchor'
import Button from '../../../../shared/components/button/button'

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
          style={{ borderRadius: '0px', width: '100%', marginTop: '15px' }}
        >
          EXPLORE MORE
        </Button>
      ) : (
        <div className="product-content-container">
          <h2 className={'padding-top-big'}>{product.name}</h2>
          <p className="product-motto  align-center">{product.motto}</p>
        </div>
      )}
    </Anchor>
  )
}

export default ProductCard
