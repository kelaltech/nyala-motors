import { Block, Content, Flex, FlexSpacer } from 'gerami'
import * as moment from 'moment'
import React, { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

import Button from '../../../../shared/components/button/button'
import './report-card.scss'

type ReportCardProps = {
  title: string
  date: string | Date
  type: string
  excerpt: string
  url: string | any
}

const ReportCard = ({ date, excerpt, title, type, url }: ReportCardProps) => {
  const [expand, setExpand] = useState(false)
  return (
    <Block>
      <Content>
        <Block first>
          <h4 className="report-card-title">{title}</h4>
          <Flex>
            <span className="font-S fg-blackish report-date">
              {moment.default(date).format('ddd, MMMM Do YYYY')}
            </span>
            <FlexSpacer />
            <span className="bg-whitish font-S fg-blackish padding-normal nyala-style-radius">
              {type}
            </span>
          </Flex>
        </Block>

        <Block className="excerpt-box">
          <p
            className="fg-blackish font-M"
            style={{ height: `${expand ? 'auto' : '70px'}` }}
          >
            {excerpt}
          </p>

          <span
            className="fg-blackish expandable-icon"
            onClick={() => setExpand(!expand)}
          >
            {excerpt.length >= 200 ? (
              <>{expand ? <MdExpandLess /> : <MdExpandMore />}</>
            ) : (
              <MdExpandLess style={{ visibility: 'hidden' }} />
            )}
          </span>
        </Block>
        {!url ? null : (
          <div className="right">
            <Button
              mode={'primary'}
              className="nyala-style-radius"
              to={`${url}`}
            >
              <FiDownload className="margin-right-normal" />
              Download
            </Button>
          </div>
        )}
      </Content>
    </Block>
  )
}

export default ReportCard
