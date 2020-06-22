import React from 'react'
import { Products } from '../../../../app/graphql'
import Button from '../../../../shared/components/button/button'
import Anchor from '../../../../shared/components/anchor/anchor'

type ProductCardProps = {
  product: Pick<Products, 'id' | 'name' | 'motto' | 'specification'>
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <div className="vacancy-card-strip" />

      <div className="vacancy-card-content">
        <h4>
          <Anchor to={`/products/detail/?id=${product.id}`}>
            {/* {product.name} */}
          </Anchor>
        </h4>
        <hr />
      </div>

      <div>
        <Button to={`/products/detail/?id=${product.id}`} mode="lite">
          More detail
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
