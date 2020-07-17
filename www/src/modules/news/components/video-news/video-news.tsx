import React, { useEffect, useState } from 'react'
import './video-news.scss'
import Axios from 'axios'
import { Yoga, Content, Block } from 'gerami'
import { youtubeApi, youtubePlaylistId } from '../../../../../constants'
import * as moment from 'moment'
type VIDEONEWSPROPS = {}

const VideoNews: React.FC<VIDEONEWSPROPS> = () => {
  const [videoNews, setVideoNews] = useState([])
  useEffect(() => {
    //only the top for will be selected
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
      {videoNews.length === 0 ? null : (
        <Block>
          <Block className="padding-optimizer padding-bottom-none">
            <Block first last>
              <h3 className="title-component">Video News</h3>
              <hr className="full-width" />
            </Block>
            <Block>
              <Yoga maxCol={2}>
                {videoNews.map((video: any, i) => (
                  <Content transparent className="margin-bottom-big">
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
            </Block>
          </Block>
        </Block>
      )}
    </>
  )
}

export default VideoNews
