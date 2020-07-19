import React, { useState } from 'react'
import { useProductsQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { Loading, Warning, Yoga, Card } from 'gerami'
import Button from '../../../../shared/components/button/button'
import './products.scss'
import ProductCard from '../../components/product-card/product-card'
import HeroSearch from '../../../../shared/components/hero-search/hero-search'
import { graphql, useStaticQuery } from 'gatsby'
import { ProductStaticQuery } from '../../../../../graphql-types'
import useLang from '../../../../shared/hooks/lang/use-lang'

type ProductsProps = {}

const Products: React.FC<ProductsProps> = () => {
  const { heroBg } = useStaticQuery<ProductStaticQuery>(query)

  const [term, setTerm] = useState('')
  const { loading, error, data } = useProductsQuery({
    variables: { where: term ? { _q: term } : {} },
  })
  const lang = useLang()
  return (
    <>
      <SEO title={'Products'} />

      <Layout headerProps={{ mode: 'white' }}>
        <HeroSearch
          title={lang`products.title`}
          term={term}
          onTerm={setTerm}
          bg={heroBg?.childImageSharp?.fluid as any}
          color={true}
        />
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
                <Card className="product-category-card">
                  <h3>Nissan Vehicles</h3>
                  <Yoga className="product-category-yoga" maxCol={3}>
                    {data?.products
                      .filter((p) => p?.category == 'NISSAN')
                      .slice(0, 3)
                      .map((product, key) => (
                        <>
                          <ProductCard product={product!} key={key} />
                        </>
                      ))}
                  </Yoga>
                  <div className="center">
                    <Button
                      to={`/products/categories/?id=NISSAN`}
                      mode="primary-outline"
                    >
                      Browse all Nissan vehicles
                    </Button>
                  </div>
                </Card>
                <Card className="product-category-card">
                  <h3>Nissan Vehicles</h3>
                  <Yoga className="product-category-yoga" maxCol={3}>
                    {data?.products
                      .filter((p) => p?.category == 'NISSAN')
                      .slice(0, 3)
                      .map((product, key) => (
                        <>
                          <ProductCard product={product!} key={key} />
                        </>
                      ))}
                  </Yoga>
                  <div className="center">
                    <Button
                      to={`/products/categories/?id=NISSAN`}
                      mode="primary-outline"
                    >
                      Browse all Nissan vehicles
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </>
        )}
      </Layout>
    </>
  )
}

export default Products

const query = graphql`
  query ProductStatic {
    heroBg: file(relativePath: { eq: "vacancy/hero-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 90, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
