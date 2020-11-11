import Axios from 'axios'
import { Block, Content, Yoga } from 'gerami'
import * as moment from 'moment'
import React, { useEffect, useState } from 'react'

import { youtubeApi, youtubePlaylistId } from '../../../../../constants'
import './video-news.scss'

type VideoNewsProps = {}

const VideoNews: React.FC<VideoNewsProps> = () => {
  const [videoNews, setVideoNews] = useState([])
  useEffect(() => {
    //only the top four will be selected
    Axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${youtubePlaylistId}&key=${youtubeApi}&maxResults=2`
    )
      .then((data) => {
        setVideoNews(data.data.items)
      })
      .catch((e) => console.log(e))
  }, [])
  return (
    <>
      {videoNews.length === 0 ? null : (
        <Block>
          <Block className="padding-optimizer padding-bottom-none">
            <Block>
              <Yoga maxCol={2}>
                {videoNews.map((video: any, i) => (
                  <Content key={i} transparent className="margin-bottom-big">
                    {console.log(video)}
                    <iframe
                      className="full-width"
                      height="280"
                      src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                      frameBorder="0"
                      loading="lazy"
                    />
                    <h3 className={'video-news-card-title margin-top-normal'}>
                      {video.snippet.title}
                    </h3>
                    <span className="video-news-card-date">
                      {moment
                        .default(video.snippet.publishedAt)
                        .format('ddd, MMMM Do YYYY')}
                    </span>
                  </Content>
                ))}
              </Yoga>
            </Block>
          </Block>
        </Block>
      )}
    </>
  )
}

export default VideoNews
