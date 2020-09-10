import { Content } from 'gerami'
import * as moment from 'moment'
import React from 'react'

import Button from '../../../../shared/components/button/button'
import './news-card.scss'
import Anchor from '../../../../shared/components/anchor/anchor'
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
    <Anchor to={`/news/detail/?id=${id}`} className={'news-card-anchor'}>
      <Content className="news-card-container">
        <div>
          <img src={picture_url} alt={`${title}`} width={'100%'} height={240} />
          <div className="news-card-content">
            <h3 className="margin-top-normal news-card-title">{title}</h3>
            <span className="font-S fg-blackish news-card-date">
              {moment.default(date).format('ddd, MMMM Do YYYY')}
            </span>
            <p className="news-card-excerpt">{excerpt}</p>
            <div className="right padding-bottom-big">
              <Button to={`/news/detail/?id=${id}`} mode={'lite'}>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </Content>
    </Anchor>
  )
}

export default NewsCard
