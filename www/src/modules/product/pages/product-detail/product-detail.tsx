import { Block, Content, Loading, Warning, Yoga } from 'gerami'
import Markdown from 'markdown-to-jsx'
import qs from 'qs'
import React, { useCallback, useRef, useState } from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { IoMdArrowDropright } from 'react-icons/io'
import { MdRotate90DegreesCcw } from 'react-icons/md'

import { strapiApiBase } from '../../../../../constants'
import { useProductDetailQuery } from '../../../../../gen/apollo-types'
import { usePage } from '../../../../app/contexts/page-context/page-context'
import Button from '../../../../shared/components/button/button'
import Layout from '../../../../shared/components/layout/layout'
import Modal from '../../../../shared/components/modal/modal'
import SEO from '../../../../shared/components/seo/seo'
import './product-detail.scss'

type ProductDetailProps = {}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const [openModal, setOpenModal] = useState(false)
  const carousel = useRef<any>(null)
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

  const id = query.id as string

  const { loading, error, data } = useProductDetailQuery({ variables: { id } })

  const overviewRef = useRef<HTMLSpanElement | null>(null)
  const specsRef = useRef<HTMLSpanElement | null>(null)

  const scrollToRef = useCallback(
    (ref: React.MutableRefObject<HTMLSpanElement | null>) => {
      if (typeof window === 'undefined') return

      if (ref.current) {
        window.scrollTo(0, ref.current.offsetTop - 96 - 32)
      }
    },
    []
  )

  return (
    <>
      <SEO
        title={`${data?.product?.name || ''} (Products)`}
        author={'Nyala Motor S.C'}
        image={data?.product?.headerImg?.url}
        description={
          data?.product?.motto || data?.product?.description!.slice(0, 115)
        }
      />
      <Layout headerProps={{ mode: 'primary' }}>
        {!data && loading ? (
          <div>
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : !data?.product && error ? (
          <div>
            <Warning
              problem={!data?.product ? `404 | DATA NOT FOUND` : (error as any)}
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
              {data?.product?.vrImg?.url ? (
                <>
                  <Block className="product-detail-hero-tag">
                    <Button
                      className={'button-360'}
                      onClick={() => setOpenModal(true)}
                      mode={'primary'}
                    >
                      <MdRotate90DegreesCcw /> Explore in 360 or VR
                    </Button>
                  </Block>
                </>
              ) : null}
            </div>
            <Modal show={openModal} modalClosed={() => setOpenModal(false)}>
              <div>
                <iframe
                  src={`/360/vr-frame.html?src=${data?.product?.vrImg?.url}`}
                  className="showroom-360"
                  width={'100%'}
                />
              </div>
            </Modal>

            <div className="product-detail-navigator">
              <div className="product-detail-navigator-item">
                <span>
                  <IoMdArrowDropright />
                </span>
                <a
                  href="#overview"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToRef(overviewRef)
                  }}
                >
                  OVERVIEW
                </a>
              </div>
              <div className="product-detail-navigator-item">
                <span>
                  <IoMdArrowDropright />
                </span>
                <a
                  href="#specs"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToRef(specsRef)
                  }}
                >
                  SPECIFICATIONS
                </a>
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
            <Block first />
            <Block />

            {/* <Block> */}
            <Content size="4XL" className="product-detail-description">
              <Block className="product-detail-overview">
                <div className="product-detail-overview-description">
                  <span ref={overviewRef} id="overview" />
                  <h2>Overview</h2>
                  <Markdown>{data?.product?.description!}</Markdown>
                </div>
              </Block>

              <Block first last />

              <span ref={specsRef} id="specs" />
              <Block first last className="product-detail-overview">
                {data?.product?.specification?.map((spec, key) => (
                  <div key={key}>
                    <div className="product-detail-overview-img">
                      <Yoga maxCol={2}>
                        <div className="product-detail-overview-description">
                          <h2>{spec?.title}</h2>
                          <Markdown>{spec?.description!}</Markdown>
                        </div>
                        {!spec?.specImages ||
                        spec?.specImages?.length === 0 ? null : (
                          <div>
                            <Carousel
                              enableAutoPlay={true}
                              pagination={false}
                              ref={carousel}
                              enableTilt
                              disableArrowsOnEnd
                              autoPlaySpeed={2500}
                              renderArrow={myArrow}
                              itemsToShow={1}
                              onNextEnd={({ index }: any) => {
                                if (index + 1 >= spec?.specImages?.length!) {
                                  setTimeout(() => {
                                    carousel.current.goTo(0)
                                  }, 2500)
                                }
                              }}
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
                        )}
                      </Yoga>
                    </div>
                  </div>
                ))}
              </Block>

              <Block first last className="center">
                {data?.product?.brochure?.id ? (
                  <Button
                    to={`${strapiApiBase}/file-proxy/${data?.product?.brochure?.id}`}
                    download
                    mode="primary-outline"
                  >
                    Download Brochure
                  </Button>
                ) : null}
              </Block>
            </Content>
          </div>
        )}
      </Layout>
    </>
  )
}

export default ProductDetail
