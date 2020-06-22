import React from 'react'
import './services.scss'
import SEO from '../../../shared/components/seo/seo'
import LayoutDefault from '../../../shared/components/layout/layout'
import Button from '../../../shared/components/button/button'
import { Content, Block, Yoga } from 'gerami'
import { FaOilCan, FaCarBattery, FaWater } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import ServiceCard from './components/service-card/service-card'
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
              Nyala Motors S.C. provides aftersales services to ensure the
              maximum satisfaction of its esteemed customers.
            </p>
            <Button mode={'primary'}>See Services</Button>
          </div>
        </div>

        <Content transparent className="center service-content-box" size={'M'}>
          <Block>
            <h1>Full Service</h1>
          </Block>
          <Block>
            <p>
              Full service, oil and oil filter will be changed, some additional
              safety checks will be made and some moving parts will be
              lubricated. tyres and searching for any fluid leaks in the car.
            </p>
          </Block>
        </Content>

        <Content transparent size={'XXL'} className={'service-yoga-container'}>
          <Yoga maxCol={4}>
            <div className={'service-yoga-card'}>
              <div className={'service-yoga-card-icon'}>
                <FaOilCan />
              </div>
              <h1>Oil</h1>
              <small>BRAKE</small>
              <small>GEAR</small>
              <small>WHEEL</small>
            </div>
            <div className={'service-yoga-card'}>
              <div className={'service-yoga-card-icon'}>
                <FaCarBattery />
              </div>
              <h1>Lights</h1>
              <small>SIDE</small>
              <small>HEAD</small>
              <small>STOP</small>
            </div>
            <div className={'service-yoga-card'}>
              <div className={'service-yoga-card-icon'}>
                <FaWater />
              </div>
              <h1>Lights</h1>
              <small>CHECK LEVEL</small>
              <small>CHECK QUALITY</small>
              <small>OTHER</small>
            </div>

            <div className={'service-yoga-card'}>
              <div className={'service-yoga-card-icon'}>
                <BsThreeDots />
              </div>
              <h1>Others</h1>
              <small>TIRE</small>
              <small>EXHAUST</small>
              <small>HORN</small>
            </div>
          </Yoga>
        </Content>

        <Content size={'4XL'} className={'service-list-container'}>
          <Block>
            <Block className="center padding-top-very-big">
              <h1>Service Operations</h1>
            </Block>
            <Block>
              <Yoga maxCol={2}>
                <ServiceCard
                  title={'PDI Service (Pre Delivery Inspection)'}
                  description={
                    'Nyala Motors provides PDI for all new vehicles before delivery to the customers. The PDI service is guided by the manufacturer’s procedure manual developed by our respective principal suppliers. All vehicles purchased from Nyala Motors are entitled for free inspection check-ups at 1,000Km and 5,000Km except for replacement of lubricants and filters.'
                  }
                />
                <ServiceCard
                  title={'Free Service Check-up'}
                  description={
                    'All vehicles purchased from Nyala Motors are entitled for free inspection check-ups at 1,000Km and 5,000Km except for replacement of lubricants and filters.'
                  }
                />
              </Yoga>
            </Block>
          </Block>
        </Content>
      </LayoutDefault>
    </>
  )
}

export default Services
