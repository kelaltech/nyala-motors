import React from 'react'
import './product-categories.scss'
import { useProductCategoriesQuery } from '../../../../app/graphql'
import { usePage } from '../../../../app/contexts/page-context/page-context'
import qs from 'qs'
// import SEO from '../../../../shared/components/seo/seo'
import { Loading, Warning, Yoga, Content, Block, Card } from 'gerami'
import Layout from '../../../../shared/components/layout/layout'
import Markdown from 'markdown-to-jsx'
import { nameProductsType } from '../../../../shared/components/nameProductsType'
import { nameEachCat } from '../../../../shared/components/nameEachCat'
import Button from '../../../../shared/components/button/button'

type ProductCategoriesProps = {}

const ProductCategories: React.FC<ProductCategoriesProps> = () => {
  const page = usePage()
  const query =
    qs.parse(page?.location.search || '?', {
      ignoreQueryPrefix: true,
    }) || {}
  const id = query.id
  console.log(id)
  const { loading, error, data } = useProductCategoriesQuery({
    variables: { where: { _q: id } },
  })

  const catagorize = [
    'PASSENGER',
    'CROSSOVER',
    'SPORT_UTILITY',
    'COMMERCIAL',
    'CRONER',
    'QUESTER',
  ]

  return (
    <>
      <Layout headerProps={{ mode: 'white' }}>
        <div className={'productCat-hero-container'}>
          <Block className="center productCat-hero-tag">
            <h1>{nameProductsType(id)}</h1>
          </Block>
        </div>
        <div>
          {!data && loading ? (
            <div>
              <Loading className="margin-vertical-very-big" delay={700} />
            </div>
          ) : !data?.products && error ? (
            <div>
              <Warning
                problem={
                  !data?.products ? `404 | DATA NOT FOUND` : (error as any)
                }
              />
            </div>
          ) : (
            <Content
              size={'4XL'}
              transparent={true}
              className="product-category-container"
            >
              <Block first last>
                {catagorize.map((x) => (
                  <>
                    {data?.products?.find((p) => p?.eachCategory === x) ? (
                      <>
                        <div
                          style={{
                            backgroundColor: '#c51632',
                            height: '7px',
                            width: '100px',
                          }}
                        />
                        <h4 className={'product-category-title'}>
                          {nameEachCat(x)}
                        </h4>
                        <hr />
                        <Yoga maxCol={2} className="product-category-yoga">
                          {data?.products
                            ?.filter((p) => p?.eachCategory === x)
                            .map((product, key) => (
                              <Card key={key} className="product-category-card">
                                <h3>{product?.name} </h3>
                                <hr />
                                <div>
                                  <a
                                    href={`/products/detail/?id=${product!.id}`}
                                  >
                                    <img
                                      src={`${product?.headerImg?.url}`}
                                      width={'100%'}
                                    />
                                  </a>
                                </div>
                                <Markdown className="product-category-markdown">
                                  {product?.description}
                                </Markdown>
                                <div className="center">
                                  <Button
                                    to={`/products/detail/?id=${product!.id}`}
                                    mode="lite"
                                  >
                                    More detail
                                  </Button>
                                </div>
                              </Card>
                            ))}
                        </Yoga>
                      </>
                    ) : null}
                  </>
                ))}
              </Block>
            </Content>
          )}
        </div>
      </Layout>
    </>
  )
}

export default ProductCategories
