import React from 'react'
import './product-detail.scss'
// import 'aframe'
// import 'aframe-particle-system-component'
// import { Scene, Entity } from 'aframe-react';
import { usePage } from '../../../../app/contexts/page-context/page-context'
import qs from 'qs'
import { useProductDetailQuery } from '../../../../app/graphql'
import { Loading, Warning, Content, Block, Yoga } from 'gerami'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { IoMdArrowDropright } from 'react-icons/io'
import Markdown from 'markdown-to-jsx'
import Button from '../../../../shared/components/button/button'
import Carousel, { consts } from 'react-elastic-carousel'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'

type ProductDetailProps = {}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const myArrow = ({ type, onClick }: any) => {
    const pointer =
      type === consts.PREV ? <AiOutlineLeftCircle /> : <AiOutlineRightCircle />
    return (
      <div style={{ alignSelf: 'center' }} onClick={onClick}>
        {pointer}
      </div>
    )
  }
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
                  backgroundImage: `url(${data?.product?.headerImg?.url})`,
                }}
                className="product-detail-hero"
              >
                <div className="product-detail-hero-overlay" />
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
              <Content transparent size="4XL" className="product-detail-title">
                <Block className="center product-detail-title-block">
                  <div className="product-detail-title-box">
                    <h1> {data?.product?.name} </h1>
                    <p> {data?.product?.motto} </p>
                  </div>
                </Block>
              </Content>
              <Block first last />
              <Block />

              <Content size="4XL" className="product-detail-description">
                <Block first last />
                <Block first />
                <Block id={'overview'} className="product-detail-overview">
                  <div className="product-detail-overview-description">
                    <h2>Overview</h2>
                    <hr />
                    <Markdown>{data?.product?.description}</Markdown>
                  </div>
                </Block>
                <Block first />
                <Block
                  id={'specification'}
                  first
                  last
                  className="product-detail-overview"
                >
                  {data?.product?.specification?.map((spec, key) => (
                    <div key={key}>
                      <div className="product-detail-overview-img">
                        <Yoga maxCol={2}>
                          <div className="product-detail-overview-description">
                            <h2>{spec?.title}</h2>
                            <hr />
                            <Markdown>{spec?.description}</Markdown>
                          </div>
                          <div>
                            <Carousel
                              enableAutoPlay={true}
                              pagination={false}
                              renderArrow={myArrow}
                              itemsToShow={1}
                            >
                              {spec?.specImages?.map((img, key) => (
                                <div
                                  key={key}
                                  className={'spec-imgs'}
                                  style={{
                                    backgroundImage: `url(${img?.url})`,
                                  }}
                                />
                              ))}
                            </Carousel>
                          </div>
                        </Yoga>
                      </div>
                    </div>
                  ))}
                </Block>

                <Block first last className="center">
                  <Button
                    to={`${data?.product?.brochure?.url}`}
                    download
                    mode="primary-outline"
                  >
                    Download Brochure
                  </Button>
                </Block>
                {/* <Scene>
                  <Entity
                  primitive='a-sky' 
                  src="../../../../../static/360/showroom.jpg"
                  // rotation="0 -130 0"
                  />
                </Scene> */}
              </Content>
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}

export default ProductDetail
