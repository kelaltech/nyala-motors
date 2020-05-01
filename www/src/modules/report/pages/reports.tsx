import React from 'react'
import { Block, Yoga } from 'gerami'
import ReportCard from '../components/report-card/report-card'
const Reports = () => {
  return (
    <>
      <Block>
        <Block>
          <h1>Report List</h1>
        </Block>
        <Yoga maxCol={2}>
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </Yoga>
      </Block>
    </>
  )
}

export default Reports
