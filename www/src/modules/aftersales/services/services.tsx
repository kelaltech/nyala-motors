import React from 'react'
import './services.scss'
import SEO from '../../../shared/components/seo/seo'
import LayoutDefault from '../../../shared/components/layout/layout'
import Button from '../../../shared/components/button/button'
import { Content, Block } from 'gerami'

type Services = {}
const Services: React.FC<Services> = () => {
  return (
    <>
      <SEO title={'Services'} />

      <LayoutDefault
        headerProps={{
          mode: 'transparent',
        }}
      >
        <div className={'service-hero-section'}>
          <div className={'service-hero-content'}>
            <h1>CAR REPAIR SERVICES</h1>
            <p>
              Nyala Motors S.C. provides aftersales services to ensure <br />{' '}
              the maximum satisfaction of its esteemed customers.
            </p>
            <Button mode={'primary'}>See Services</Button>
          </div>
        </div>

        <Content className="center" size={'M'}>
          <Block>
            <h1>Services</h1>
          </Block>
          <Block>
            <p>
              Full service, oil and oil filter will be changed, some additional
              safety checks will be made and some moving parts will be
              lubricated. Check the horn, lights, brakes, fluid levels, exhaust,
              tyres and searching for any fluid leaks in the car.
            </p>
          </Block>
        </Content>
      </LayoutDefault>
    </>
  )
}

export default Services
