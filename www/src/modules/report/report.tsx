import React from 'react'
import { Block, Yoga, Content } from 'gerami'
import ReportCard from './components/report-card/report-card'
const Report = () => {
  return (
    <>
      <Block>
        <Block>
          <h1>Report List</h1>
        </Block>

        <Content>
          <Yoga maxCol={3}>
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <ReportCard />
          </Yoga>
        </Content>
      </Block>
    </>
  )
}

export default Report
