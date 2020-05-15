import React from 'react'
import './news.scss'
import { usePublicationsQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { Loading, Warning, Block } from 'gerami'
import FeaturedNews from '../../components/featured-news/featured-news'

type NewsProps = {}

const News: React.FC<NewsProps> = () => {
  const { data, loading, error } = usePublicationsQuery()

  return (
    <>
      <SEO title="Reports" />
      <Layout>
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
                <Block>
                  <Block first last>
                    <h3 className="title-component">Latest News</h3>
                  </Block>
                  <Block>
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
          </div>
        ) : (
          <div>
            <Block>
              <Block first last>
                <h1>News List</h1>
              </Block>
              <Block>
                <p>cant find report files ...please try later!</p>
              </Block>
            </Block>
          </div>
        )}
      </Layout>
    </>
  )
}

export default News
