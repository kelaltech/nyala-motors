import React, { useEffect, useState } from 'react'
import './video-news.scss'
import Axios from 'axios'
import { Yoga, Content } from 'gerami'
import { youtubeApi, youtubePlaylistId } from '../../../../../constants'
import * as moment from 'moment'
type VIDEONEWSPROPS = {}

const VideoNews: React.FC<VIDEONEWSPROPS> = () => {
  const [videoNews, setVideoNews] = useState([])
  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${youtubePlaylistId}&key=${youtubeApi}&maxResults=4`
    )
      .then((data) => {
        setVideoNews(data.data.items)
      })
      .catch((e) => console.log(e))
  }, [])
  return (
    <>
      <Yoga maxCol={2}>
        {videoNews.map((video: any, i) => (
          <Content transparent>
            <iframe
              key={i}
              className="full-width"
              height="280"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              frameBorder="0"
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
    </>
  )
}

export default VideoNews
