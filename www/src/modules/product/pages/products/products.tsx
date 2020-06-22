import React, { useState } from 'react'
import { useProductsQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { Loading, Warning } from 'gerami'
import './products.scss'
// import ProductCard from '../../components/product-card/product-card'
import HeroSearch from '../../../../shared/components/hero-search/hero-search'

type ProductsProps = {}

const Products: React.FC<ProductsProps> = () => {
  const [term, setTerm] = useState('')
  const { loading, error, data } = useProductsQuery({
    variables: { where: term ? { _q: term } : {} },
  })
  return (
    <>
      <SEO title={'Products'} />

      <Layout headerProps={{ mode: 'white' }}>
        <HeroSearch title={`Products`} term={term} onTerm={setTerm} />
        {!data && loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} />
          </div>
        ) : (
          <>
            {!data?.products?.length ? (
              <div>
                No results found
                {!term ? null : (
                  <>
                    {' '}
                    for <q> {term} </q>
                  </>
                )}
                .
              </div>
            ) : (
              <div className="product-products-content">
                {/* <Yoga maxCol={3}>
                  {data?.products.map((product, key) => (
                    <ProductCard product={product!} key={key} />
                  ))}
                </Yoga> */}
              </div>
            )}
          </>
        )}
      </Layout>
    </>
  )
}

export default Products
