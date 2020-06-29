import React from 'react'
import './product-detail.scss'
import { usePage } from '../../../../app/contexts/page-context/page-context'
import qs from 'qs'
import { useProductDetailQuery } from '../../../../app/graphql'
import { Loading, Warning, Content, Block } from 'gerami'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { strapiApiBase } from '../../../../../constants'
import { IoMdArrowDropright } from 'react-icons/io'
import Markdown from 'markdown-to-jsx'

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

              <div className="product-detail-navigator">
                <div className="product-detail-navigator-item">
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  <a href={'#overview'}>OVERVIEW</a>
                </div>
                <div className="product-detail-navigator-item">
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  <a href={'#specification'}>SPECIFICATION</a>
                </div>
              </div>
              <Content className="product-detail-title">
                <Block className="center product-detail-title-block">
                  <div className="product-detail-title-box">
                    <h1> {data?.product?.name} </h1>
                    <p> {data?.product?.motto} </p>
                  </div>
                </Block>
              </Content>

              <Content transparent={true} className="product-detail-page">
                <Content size="4XL">
                  <div className="product-detail-page-details">
                    <h4>Overview</h4>

                    <Markdown className="product-detail-page-details-description">
                      {data?.product?.description}
                    </Markdown>
                  </div>
                </Content>
              </Content>
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}

export default ProductDetail
