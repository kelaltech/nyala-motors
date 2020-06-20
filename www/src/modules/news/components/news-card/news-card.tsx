import React from 'react'
import './news-card.scss'
import { Content, Block } from 'gerami'
import Button from '../../../../shared/components/button/button'
import { strapiApiBase } from '../../../../../constants'
import * as moment from 'moment'

type NewsCardProps = {
  title: string
  author: string
  picture_url: string
  excerpt: string
  date: string
  id: string
}

const NewsCard: React.FC<NewsCardProps> = ({
  date,
  excerpt,
  picture_url,
  title,
  id,
}) => {
  return (
    <>
      <Content className="news-card-container">
        <Block>
          <div
            style={{
              backgroundImage: `url(${strapiApiBase}${picture_url})`,
            }}
            className="news-card-pic"
          />
          <div className="news-card-content">
            <h3 className="margin-top-normal news-card-title">{title}</h3>
            <span className="font-S fg-blackish news-card-date">
              {moment.default(date).format('ddd, MMMM Do YYYY')}
            </span>
            <p className="news-card-excerpt">{excerpt}</p>
            <div className="right">
              <Button to={`/news/detail/?id=${id}`} mode={'lite'}>
                Read More
              </Button>
            </div>
          </div>
        </Block>
      </Content>
    </>
  )
}

export default NewsCard
