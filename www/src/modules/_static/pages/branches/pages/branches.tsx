import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { BranchesQuery } from '../../../../../../graphql-types'
import SEO from '../../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../../shared/components/layout/layout'
import { Content, Block, Yoga } from 'gerami'
// import { Loading} from 'gerami'

type Branches = {}

const Branches: React.FC<Branches> = () => {
  const data = useStaticQuery<BranchesQuery>(query)
  console.log(data)

  //  console.log(Loading)
  return (
    <>
      <SEO title="Contacts" />

      <LayoutDefault>
        <Content size={'4XL'}>
          <Block first>
            {data.allStrapiBranches.edges.map((val: any, key: any) => (
              <div key={key}>
                <h3> {val.node.name} </h3>
                <Yoga maxCol={3}>
                  <div>Dealer Type</div>
                  <div>Address</div>
                  <div>
                    <h5>Working Hours</h5>
                    {val.node.workingHours}
                  </div>
                </Yoga>
              </div>
            ))}
          </Block>
          <Block>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAjYTKIXdz_UsyZC5mDX6PH4HdrI_PnMl0&q=9.0102672,38.8038423"
              frameBorder={0}
              width="100%"
              height="200"
              style={{ border: 0 }}
            ></iframe>
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
