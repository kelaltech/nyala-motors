import { Block, Content, Loading, Warning, Yoga } from 'gerami'
import React, { useState } from 'react'

import { strapiApiBase } from '../../../../../constants'
import { usePublicationsQuery } from '../../../../../gen/apollo-types'
import Button from '../../../../shared/components/button/button'
import Layout from '../../../../shared/components/layout/layout'
import SEO from '../../../../shared/components/seo/seo'
import useLazy from '../../../../shared/hooks/use-lazy/use-lazy'
import FeaturedNews from '../../components/featured-news/featured-news'
import NewsCard from '../../components/news-card/news-card'
import './news.scss'

type NewsProps = {}

const COUNT = 12
const News: React.FC<NewsProps> = () => {
  const [limit, setLimit] = useState(COUNT)
  const { data, loading, error } = usePublicationsQuery({
    variables: {
      limit: limit,
    },
  })

  const [total] = useLazy(0, (set) => {
    fetch(`${strapiApiBase}/publications/count`)
      .then((response) => response.json())
      .then((data) => set(Number(data)))
      .catch(console.error)
  })
  return (
    <>
      <SEO
        title="News Articles from Nyala Motors S.C."
        description={
          'latest News articles about the automotive industry leaders like Nissan, UD trucks, Eicher, UNI Carriers and Macpower from Nyala Motors S.C.'
        }
      />
      <Layout headerProps={{ mode: 'primary' }}>
        <Content size={'7XL'} transparent>
          <div className={'news-list-parent'} />
          {loading ? (
            <div className="padding-very-big">
              <Loading className="margin-vertical-very-big" delay={700} />
            </div>
          ) : error ? (
            <div className="padding-very-big">
              <Warning problem={error as any} />
            </div>
          ) : data ? (
            <div>
              {data?.featured?.length === 0 ? null : (
                <div>
                  <Block className={'feature-padding-optimizer-big'}>
                    <Block />
                    <Block className={'feature-padding-optimizer'}>
                      {data?.featured?.map((news, i) => (
                        <FeaturedNews
                          key={i}
                          title={news?.title!}
                          date={news?.created_at!}
                          author={news?.author!}
                          excerpt={news?.excerpt!}
                          picture_url={news?.picture?.url!}
                          id={news?.id!}
                        />
                      ))}
                    </Block>
                  </Block>
                </div>
              )}

              {data?.publications?.length === 0 ? null : (
                <Block className="feature-padding-optimizer-big">
                  <Block className="feature-padding-optimizer">
                    <Block first />
                    <h3 className="title-component">Latest News Articles</h3>
                    <Block first />
                    <Yoga maxCol={4}>
                      {data?.publications?.map((news, i) => (
                        <NewsCard
                          key={i}
                          title={news?.title!}
                          date={news?.created_at!}
                          author={news?.author!}
                          excerpt={news?.excerpt!}
                          picture_url={news?.picture?.url!}
                          id={news?.id!}
                        />
                      ))}
                    </Yoga>
                    <Block first last className="center">
                      {!data?.publications ||
                      data.publications.length >= total ? null : (
                        <Button
                          onClick={() => {
                            setLimit(limit + COUNT)
                          }}
                          disabled={loading}
                          mode={'primary-outline'}
                        >
                          Load more{loading ? '...' : ''}
                        </Button>
                      )}
                    </Block>
                  </Block>
                </Block>
              )}
            </div>
          ) : (
            <div>
              <Block>
                <Block first last>
                  <h1>News List</h1>
                </Block>
                <Block>
                  <p>cant find News files ...please try later!</p>
                </Block>
              </Block>
            </div>
          )}
        </Content>
      </Layout>
    </>
  )
}

export default News
