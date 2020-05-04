import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import { Content, Block, Yoga, Card } from 'gerami'
import { FaPhoneAlt } from 'react-icons/fa'
import { FiMail, FiMapPin } from 'react-icons/fi'

import { BranchesQuery } from '../../../../../../graphql-types'
import SEO from '../../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../../shared/components/layout/layout'
import './branches.scss'
import BranchHero from '../components/branches-hero'

type Branches = {}

const Branches: React.FC<Branches> = () => {
  const data = useStaticQuery<BranchesQuery>(query)
  console.log(data)

  //  console.log(Loading)
  return (
    <>
      <SEO title="Contacts" />

      <LayoutDefault>
        <BranchHero />
        <Content size={'4XL'} transparent>
          <div>
            {data.allStrapiBranches.edges.map((val: any, key: any) => (
              <Card key={key} className={'margin-vertical-big'}>
                <h3> {val.node.name} </h3>
                <Yoga maxCol={3}>
                  <div>
                    <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>Dealer Type</h4>
                    <div>
                      {val.node.dealerTypes.map((val: any, key: any) => (
                        <div
                          key={key}
                          className={'markdown margin-bottom-normal'}
                        >
                          {val.dealerType !== 'VEHICLE_SALES' ? null : (
                            <div> Vehicle sales</div>
                          )}
                          {val.dealerType !== 'PART_SALES' ? null : (
                            <div> Part sales</div>
                          )}
                          {val.dealerType !== 'SERVICE' ? null : (
                            <div> Services and Repair</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>Address</h4>
                    <div className={'markdown'}>
                      {val.node.emails.map((val: any, key: any) => (
                        <div key={key}>
                          <FiMail size={'1.2em'} className={'icons'} />
                          {val.email}
                        </div>
                      ))}
                    </div>

                    <div className={'markdown margin-vertical-normal flex'}>
                      <FaPhoneAlt className={'icons'} />
                      <div>
                        {val.node.phoneNumbers.map((val: any, key: any) => (
                          <div key={key}>{val.phoneNumber}</div>
                        ))}
                      </div>
                    </div>

                    <div className={'markdown'}>
                      <FiMapPin className={'icons'} />
                      {val.node.physicalAddress}
                    </div>
                  </div>

                  <div>
                    <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>Working Hours</h4>
                    <Markdown className={'markdown margin-bottom-normal'}>
                      {val.node.workingHours}
                    </Markdown>
                  </div>
                </Yoga>
                FAX IS NOT ADDED
                <Block>
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAjYTKIXdz_UsyZC5mDX6PH4HdrI_PnMl0&q=${val.node.mapCoordinates}&zoom=17`}
                    frameBorder={0}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                  ></iframe>
                </Block>
              </Card>
            ))}
          </div>
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
          mapCoordinates
          physicalAddress
          dealerTypes {
            dealerType
          }
          heroBG {
            url
          }
          workingHours
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
