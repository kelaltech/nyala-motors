import React from 'react'

import { Products } from '../../../../../gen/apollo-types'
import Anchor from '../../../../shared/components/anchor/anchor'
import { nameEachCat } from '../../../../shared/components/nameEachCat'
import './product-card.scss'

type ProductCardProps = {
  product: Pick<
    Products,
    'id' | 'eachCategory' | 'headerImg' | 'motto' | 'name' | 'category'
  >
}

const nissanCars = [
  {
    type: 'PASSENGER',
    name: 'Almera',
    to: 'http://www.nissanethiopia.com/vehicles/almera/',
  },

  {
    type: 'CROSSOVER',
    name: 'Kicks',
    to: 'http://www.nissanethiopia.com/vehicles/kicks/',
  },
  {
    type: 'CROSSOVER',
    name: 'Qashqai',
    to: 'http://www.nissanethiopia.com/vehicles/qashqai/',
  },
  {
    type: 'CROSSOVER',
    name: 'X-Trail',
    to: 'http://www.nissanethiopia.com/vehicles/x-trail/',
  },
  {
    type: 'CROSSOVER',
    name: 'Pathfinder',
    to: 'http://www.nissanethiopia.com/vehicles/pathfinder/',
  },

  {
    type: 'SPORT_UTILITY',
    name: 'Patrol Y61',
    to: 'http://www.nissanethiopia.com/vehicles/patrol-y61/',
  },
  {
    type: 'SPORT_UTILITY',
    name: 'Patrol',
    to: 'http://www.nissanethiopia.com/vehicles/patrol/',
  },

  {
    type: 'COMMERCIAL',
    name: 'NV350 Urvan',
    to: 'http://www.nissanethiopia.com/vehicles/nv350-urvan/',
  },
  {
    type: 'COMMERCIAL',
    name: 'NP300 Hardbody',
    to: 'http://www.nissanethiopia.com/vehicles/np300-hardbody/',
  },
  {
    type: 'COMMERCIAL',
    name: 'Civilian',
    to: 'http://www.nissanethiopia.com/vehicles/civilian/',
  },
] as const

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Anchor
      className="product-card-content"
      to={`${
        product.category === 'NISSAN'
          ? `#`
          : `/products/detail/?id=${product.id}`
      }`}
      style={{
        ...(product.category === 'NISSAN'
          ? { transform: 'none', filter: 'none', cursor: 'default' }
          : {}),
      }}
    >
      <h2 className={'left'}>{nameEachCat(product.eachCategory!)}</h2>
      <img src={`${product?.headerImg?.url}`} width={'100%'} height={200} />

      {product.category === 'NISSAN' ? (
        <div style={{ display: 'grid', gap: 4, marginTop: 16 }}>
          {nissanCars
            .filter((item) => item.type === product.eachCategory)
            .map((item) => (
              <Anchor
                key={item.to}
                to={item.to}
                target="_blank"
                style={{
                  boxShadow: 'none',
                  borderRadius: 4,
                  textTransform: 'uppercase',
                  border: '2px solid',
                }}
                className="fg-primary bg-white bold center padding-normal"
              >
                {item.name}
              </Anchor>
            ))}
        </div>
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
