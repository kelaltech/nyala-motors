import { Block, Content } from 'gerami'
import * as moment from 'moment'
import React from 'react'

import Button from '../../../../shared/components/button/button'
import './featured-news.scss'
import Anchor from '../../../../shared/components/anchor/anchor'
type FeaturedNewsProps = {
  title: string
  author: string
  picture_url: string
  excerpt: string
  date: string
  id: string
}

const FeaturedNews: React.FC<FeaturedNewsProps> = ({
  author,
  date,
  excerpt,
  picture_url,
  title,
  id,
}) => {
  return (
    <Anchor
      to={`/news/detail/?id=${id}`}
      className={'featured-news-card-anchor'}
    >
      <Content className="featured-news-container">
        <div
          style={{
            backgroundImage: `url(${picture_url})`,
          }}
          className="featured-news-pic"
        >
          <div className="featured-news-pic-overlay">
            <h3>{title}</h3>
          </div>
        </div>
        <Block first last className="featured-news-content">
          <div className="featured-tag">
            <label> FEATURED ARTICLE</label>
          </div>
          <span className="font-S fg-blackish featured-news-date">
            {moment.default(date).format('ddd, MMMM Do YYYY')}
          </span>
          <span className="featured-news-author">{author}</span>
          <p className="featured-news-excerpt">{excerpt}</p>
          <div className="right">
            <Button to={`/news/detail/?id=${id}`} mode={'primary-outline'}>
              Read More
            </Button>
          </div>
        </Block>
      </Content>
    </Anchor>
  )
}

export default FeaturedNews
