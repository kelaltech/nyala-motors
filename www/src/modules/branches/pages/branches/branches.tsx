import React from 'react'
import Markdown from 'markdown-to-jsx'
import { Content, Block, Yoga, Loading, Warning, Card } from 'gerami'
import './branches.scss'
import { useBranchesQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../shared/components/layout/layout'
import { nameDealerType } from '../../../../shared/components/nameDealerType'
import EmailContact from '../../components/contact/contact'

type Branches = {}

const Branches: React.FC<Branches> = () => {
  const { data, loading, error } = useBranchesQuery()

  return (
    <>
      <SEO title="Contacts" />

      <LayoutDefault>
        <div className={'branches-hero-container'}>
          <Block className="center branches-hero-tag">
            <h1>Contact Us </h1>
          </Block>
        </div>
        <Content size={'3XL'} transparent={true}>
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
              {data?.branches?.map((val, key) => (
                <Card className="margin-vertical-very-big" key={key}>
                  <Block>
                    <h3> {val!.name} </h3>
                    <Yoga maxCol={3}>
                      <div>
                        <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>
                          Dealer Type
                        </h4>
                        <div>
                          {val!.dealerTypes!.map((val: any, key: any) => (
                            <Markdown className={'markdown'} key={key}>
                              {nameDealerType(val.dealerType)}
                            </Markdown>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>Address</h4>
                        <Markdown className={'markdown'}>
                          {val!.physicalAddress}
                        </Markdown>
                      </div>
                      <div>
                        <h4 style={{ color: 'rgba(0,0,0, 0.7)' }}>
                          Working Hours
                        </h4>
                        <Markdown className={'markdown'}>
                          {val!.workingHours}
                        </Markdown>
                      </div>
                    </Yoga>
                  </Block>
                  <Block>
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAjYTKIXdz_UsyZC5mDX6PH4HdrI_PnMl0&q=${val?.mapCoordinates}`}
                      frameBorder={0}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                    ></iframe>
                  </Block>
                </Card>
              ))}
            </>
          )}
        </Content>
        <Content className="email-block">
          <div className={'contact-email-yoga'}>
            <Block className="email-block-left">
              <h1>Do you have a question?</h1>
              <p>
                about our products or services, or have you encountered a
                problem while using them? Feel free to reach us by the form on
                the right or using our feedback form. We will respond to your
                emailas soon as possible.
              </p>
            </Block>

            <Block className="center email-block-right">
              <EmailContact />
            </Block>
          </div>
        </Content>
      </LayoutDefault>
    </>
  )
}

export default Branches
