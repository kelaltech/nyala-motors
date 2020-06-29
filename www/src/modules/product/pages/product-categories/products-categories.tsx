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
import { strapiApiBase } from '../../../../../constants'

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
  return (
    <>
      <Layout headerProps={{ mode: 'primary' }}>
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
                <h3>{nameProductsType(id)}</h3>
                <Yoga maxCol={2} className="product-category-yoga">
                  {data?.products?.map((product, key) => (
                    <Card key={key} className="product-category-card">
                      <a href={`/products/detail/?id=${product!.id}`}>
                        <h3>{product?.name} </h3>
                        <div>
                          <img
                            src={`${strapiApiBase}${product?.headerImg.url}`}
                            width={'100%'}
                          />
                        </div>
                        <Markdown className="product-category-markdown">
                          {product?.description}
                        </Markdown>
                      </a>
                    </Card>
                  ))}
                </Yoga>
              </Block>
            </Content>
          )}
        </div>
      </Layout>
    </>
  )
}

export default ProductCategories
