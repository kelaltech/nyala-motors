import React from 'react'
import './report-card.scss'
import { Content, Block, Flex, FlexSpacer, Button } from 'gerami'
import { FiDownload } from 'react-icons/fi'

const ReportCard = () => {
  return (
    <Block>
      <Content>
        <Block>
          <h1 className="title">Annual report for share</h1>
          <Flex>
            <span className="font-S fg-blackish">Mon 16 2019</span>
            <FlexSpacer />
            <span className="bg-whitish font-S fg-blackish padding-normal nyala-style-radius">
              Anuual Report
            </span>
          </Flex>
        </Block>
        <Block className="excerpt-box">
          <p className="fg-blackish font-M">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            eveniet adipisci quis ab distinctio eos, mollitia voluptatibus
            reprehenderit culpa,
          </p>
        </Block>
        <div className="right">
          <Button primary className="nyala-style-radius">
            <FiDownload className="margin-right-normal" />
            Download
          </Button>
        </div>
      </Content>
    </Block>
  )
}

export default ReportCard
