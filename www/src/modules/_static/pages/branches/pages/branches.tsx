import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import { Content, Block, Yoga } from 'gerami'

import { BranchesQuery } from '../../../../../../graphql-types'
import SEO from '../../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../../shared/components/layout/layout'
import './branches.scss'

type Branches = {}

const Branches: React.FC<Branches> = () => {
  const data = useStaticQuery<BranchesQuery>(query)
  return (
    <>
      <SEO title="Contacts" />

      <LayoutDefault>
        <Content size={'3XL'}>
          <Block first>
            {data.allStrapiBranches.edges.map((val: any, key: any) => (
              <div key={key}>
                <h3> {val.node.name} </h3>
                <Yoga maxCol={3}>
                  <div>
                    <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>Dealer Type</h4>
                    {/* <div>
                      {val.node.dealerTypes.map((val: any, key: any) => (
                        <div key={key}>{val.dealerType}</div>
                      ))}
                    </div> */}
                  </div>
                  <div>
                    <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>Address</h4>
                    <Markdown className={'markdown'}>
                      {val.node.physicalAddress}
                    </Markdown>
                  </div>
                  <div>
                    <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>Working Hours</h4>
                    <Markdown className={'markdown'}>
                      {val.node.workingHours}
                    </Markdown>
                  </div>
                </Yoga>
                <Block>
                  <iframe
                    src={
                      'https://www.google.com/maps/embed/v1/place?key=AIzaSyAjYTKIXdz_UsyZC5mDX6PH4HdrI_PnMl0&q=9.0102672,38.8038423'
                    }
                    frameBorder={0}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                  ></iframe>
                </Block>
              </div>
            ))}
          </Block>
        </Content>
      </LayoutDefault>
    </>
  )
}

export default Branches

const query = graphql`
  query branches {
    allStrapiBranches {
      edges {
        node {
          name
          physicalAddress
          workingHours
          mapCoordinates
          phoneNumbers {
            phoneNumber
          }
          emails {
            email
          }
        }
      }
    }
  }
`
