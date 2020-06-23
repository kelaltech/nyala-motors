import React from 'react'
import { usePage } from '../../../../app/contexts/page-context/page-context'
import qs from 'qs'
import { useProductDetailQuery } from '../../../../app/graphql'
import { Loading, Warning } from 'gerami'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { strapiApiBase } from '../../../../../constants'

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
      <Layout headerProps={{ mode: 'white' }}>
        <div>
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
            <div>
              <span>{data?.product?.name}</span>
              {data?.product?.overview?.images?.map((img) => (
                <>
                  <img src={`${strapiApiBase}${img?.url}`} />
                </>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}

export default ProductDetail
