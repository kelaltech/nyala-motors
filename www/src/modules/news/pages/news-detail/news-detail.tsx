import React from 'react'
import './news-detail.scss'

import { usePublicationDetailQuery } from '../../../../app/graphql'

import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { Loading, Warning, Block, Content, Flex, FlexSpacer } from 'gerami'
import { usePage } from '../../../../app/contexts/page-context/page-context'
import qs from 'qs'
import { strapiApiBase } from '../../../../../constants'
import * as moment from 'moment'
import Markdown from 'markdown-to-jsx'
import CopyToClipboard from '../../../../shared/components/copy-to-clipboard/copy-to-clipboard'

import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

const NewsDetail: React.FC<{}> = () => {
  const page = usePage()
  const query =
    qs.parse(page?.location.search || '?', {
      ignoreQueryPrefix: true,
    }) || {}
  const id = query.id

  const { data, loading, error } = usePublicationDetailQuery({
    variables: { id },
  })

  const appName = 'Nyala Motors S.C'
  const url = page?.location.href || ''
  const title = data?.publication?.title
  const created_at = data?.publication?.created_at
  const picture = data?.publication?.picture
  const excerpt = data?.publication?.excerpt
  const description = data?.publication?.description

  return (
    <>
      <SEO title={`${title || ''} (Vacancy)`} />
      <Layout>
        {loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} />
          </div>
        ) : data?.publication ? (
          <>
            <div
              style={{
                backgroundImage: `url(${strapiApiBase}${picture?.url})`,
              }}
              className="news-detail-img"
            />
            <Block first last>
              <h3 className="margin-top-very-big news-detail-title">{title}</h3>
              <Flex className="news-detail-passive">
                <span className="font-S fg-blackish">
                  {moment.default(created_at).format('ddd, MMMM Do YYYY')}
                </span>

                <FlexSpacer />

                <span className="margin-vertical-auto fg-blackish right">
                  <small className="inline-block middle margin-small margin-right-normal">
                    Share:
                  </small>

                  <FacebookShareButton
                    className="margin-horizontal-normal font-L middle"
                    url={url}
                    quote={`${title} | Blog – ${appName}\n\n${excerpt}`}
                    hashtag={
                      appName ? `#${appName.replace(/ /g, '')}` : undefined
                    }
                  >
                    <FaFacebook />
                  </FacebookShareButton>

                  <TelegramShareButton
                    className="margin-horizontal-normal font-L middle"
                    url={url}
                    title={`${title} | Blog – ${appName}: ${excerpt}`}
                  >
                    <FaTelegram />
                  </TelegramShareButton>

                  <TwitterShareButton
                    className="margin-horizontal-normal font-L middle"
                    url={url}
                    title={`${title} | Blog – ${appName}`}
                    hashtags={appName ? [appName.replace(/ /g, ``)] : undefined}
                  >
                    <FaTwitter />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    className="margin-horizontal-normal font-L middle"
                    url={url}
                    title={`${title} | Blog – ${appName}: ${excerpt}`}
                  >
                    <FaWhatsapp />
                  </WhatsappShareButton>

                  <CopyToClipboard
                    value={url}
                    className="margin-horizontal-normal font-L middle"
                  />
                </span>
             
              </Flex>

              <Block first last />
              <Content
                className="news-detail-description"
                transparent
                size="XL"
              >
                <Markdown>{description}</Markdown>
              </Content>
            </Block>
            <Block first last />
          </>
        ) : null}
      </Layout>
    </>
  )
}

export default NewsDetail
