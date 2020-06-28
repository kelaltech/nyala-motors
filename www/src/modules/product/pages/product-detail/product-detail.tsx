import React from 'react'
import './Product-detail.scss'
import { usePage } from '../../../../app/contexts/page-context/page-context'
import qs from 'qs'
import { useProductDetailQuery } from '../../../../app/graphql'
import { Loading, Warning, Content, Yoga } from 'gerami'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { strapiApiBase } from '../../../../../constants'
import { IoIosPlay } from 'react-icons/io'

type ProductDetailProps = {}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const page = usePage()
  const query =
    qs.parse(page?.location.search || '?', {
      ignoreQueryPrefix: true,
    }) || {}

  const id = query.id

  const { loading, error, data } = useProductDetailQuery({ variables: { id } })
  return (
    <>
      <SEO title={`${data?.product?.name || ''} (Products)`} />
      <Layout headerProps={{ mode: 'primary' }}>
        <div className="product-detail-container">
          {!data && loading ? (
            <div>
              <Loading className="margin-vertical-very-big" delay={700} />
            </div>
          ) : !data?.product && error ? (
            <div>
              <Warning
                problem={
                  !data?.product ? `404 | DATA NOT FOUND` : (error as any)
                }
              />
            </div>
          ) : (
            <div className="product-detail-container">
              <div
                style={{
                  backgroundImage: `url(${strapiApiBase}${data?.product?.headerImg?.url})`,
                }}
                className="product-detail-hero"
              >
                <div className="product-detail-hero-overlay">
                  <h3> {data?.product?.name} </h3>
                </div>
              </div>
              <Content transparent={true} className="product-detail-page">
                <Yoga maxCol={2} className="product-detail-page-top">
                  <div className="product-detail-page-top-navigator">
                    <span>
                      {' '}
                      <IoIosPlay color="C51632" /> {'    '} Overview{' '}
                    </span>
                    <span>
                      {' '}
                      <IoIosPlay color="C51632" /> {'    '} Values{' '}
                    </span>
                    <span>
                      {' '}
                      <IoIosPlay color="C51632" /> {'    '} Mission{' '}
                    </span>
                    <span>
                      {' '}
                      <IoIosPlay color="C51632" /> {'    '} Achievements{' '}
                    </span>
                  </div>
                  <div className="product-detail-page-top-title">
                    <h1> {data?.product?.name} </h1>
                    <span> {data?.product?.motto} </span>
                  </div>
                </Yoga>
              </Content>
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}

export default ProductDetail
