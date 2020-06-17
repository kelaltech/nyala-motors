import React from 'react'
import Markdown from 'markdown-to-jsx'
import { Content, Block, Yoga, Loading, Warning } from 'gerami'

import './branches.scss'
import { useBranchesQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../shared/components/layout/layout'

type Branches = {}

const Branches: React.FC<Branches> = () => {
  const { data, loading, error } = useBranchesQuery()

  return (
    <>
      <SEO title="Contacts" />

      <LayoutDefault>
        <Content size={'4XL'}>
          <Block first>
            {!data && loading ? (
              <div className="padding-very-big">
                <Loading className="margin-vertical-very-big" delay={700} />
              </div>
            ) : error ? (
              <div className="padding-very-big">
                <Warning problem={error as any} />
              </div>
            ) : (
              <>
                {data?.branches?.map((val: any, key: any) => (
                  <div key={key}>
                    <h3> {val.node.name} </h3>
                    <Yoga maxCol={3}>
                      <div>
                        <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>
                          Dealer Type
                        </h4>
                        <div>
                          {val.node.dealerTypes.map((val: any, key: any) => (
                            <div key={key}>{val.dealerType}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>Address</h4>
                        <Markdown className={'markdown'}>
                          {val.node.physicalAddress}
                        </Markdown>
                      </div>
                      <div>
                        <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>
                          Working Hours
                        </h4>
                        <Markdown className={'markdown'}>
                          {val.node.workingHours}
                        </Markdown>
                      </div>
                    </Yoga>
                  </div>
                ))}
              </>
            )}
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
