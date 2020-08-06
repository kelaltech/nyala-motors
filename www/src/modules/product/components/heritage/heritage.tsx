import React from 'react'
import { Card, Yoga } from 'gerami'
import Button from '../../../../shared/components/button/button'

type modalProps = { id: string }

const Heritage: React.FC<modalProps> = (props) => {
  const history =
    props.id === 'UD_TRUCKS' ? (
      <Yoga maxCol={2}>
        <Card
          className={'center padding-normal'}
          style={{
            margin: '20px auto',
            backgroundColor: '#c51632',
            color: 'rgba(255, 255, 255, 0.8)',
            height: '300px',
          }}
        >
          <h2 style={{ color: 'white' }}> History</h2>
          <div>
            Our company was established in 1935. Our founder Kenzo Adachi had a
            vision to make the trucks the world needs today. His belief in
            making trucks with “ultimate dependability“ makes up our DNA, and
            has been inherited over generations to this very day. Our history is
            one of realizing his vision and core value.
          </div>
          <div className={'padding-top-big'}>
            <Button
              to={'https://www.udtrucks.com/about-ud-trucks/our-brand/history'}
              target="_blank"
              mode={'default'}
            >
              Read About UD Truks
            </Button>
          </div>
        </Card>
        <Card
          className={'center padding-normal'}
          style={{ margin: '20px auto', height: '300px' }}
        >
          <h2>Brand Philosophy</h2>
          <div>
            At UD Trucks we are going the extra mile for our customers, every
            single day. Ultimate dependability is our core value, our DNA. We
            are smart and modern in everything we do. We continuously improve
            performance to excel on the essentials. We work as one UD team with
            the UD gemba spirit.{' '}
          </div>
          <div className={'padding-top-big'}>
            <Button
              to={
                'https://www.udtrucks.com/about-ud-trucks/our-brand/brand-philosophy'
              }
              target="_blank"
              mode={'primary-outline'}
            >
              Read About Brand Philosophy
            </Button>
          </div>
        </Card>
      </Yoga>
    ) : props.id === 'UNICARRIER' ? (
      <Card
        className={'center padding-normal'}
        style={{
          margin: '20px auto',
          height: '250px',
          backgroundColor: 'rgb(30,185,230)',
          color: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <h2>UniCarriers Heritage </h2>
        <div>
          The heritage of UniCarriers forklifts begins when the first Nissan
          Forklift rolled off the assembly line at Nissan Motor’s Totsuka Plant
          on August 25, 1957. Since its debut, Nissan Forklift had been a
          successful forklift brand under Nissan group, recognized as a leading
          provider of high performance material handling products. Making use of
          the advanced technologies derived from automotive industry, the key
          brand message was “keep the customers’ operation on the move.
        </div>
        <div className={'padding-top-big'}>
          <Button
            to={'https://www.unicarriers.co.jp/os_products/about/'}
            target="_blank"
            mode={'default'}
          >
            Read About Brand Philosophy
          </Button>
        </div>
      </Card>
    ) : props.id === 'EICHER' ? (
      <Yoga maxCol={2}>
        <Card
          className={'center padding-normal'}
          style={{
            margin: '20px auto',
            backgroundColor: '#c51632',
            color: 'rgba(255, 255, 255, 0.8)',
            height: '350px',
          }}
        >
          <h2 style={{ color: 'white' }}> Heritage</h2>
          <div>
            Eicher has a joint venture with Sweden’s AB Volvo - Volvo Eicher
            Commercial Vehicles Limited (VECV) - has pioneered modernisation of
            commercial vehicles in India and other developing countries. VECV
            has a complete range of trucks and buses from 4.9-55 tonnes, and its
            integrated manufacturing plant in Pithampur, Madhya Pradesh is the
            global hub for medium duty five- and eight-litre engines for Volvo
            Group.
          </div>
          <div className={'padding-top-big'}>
            <Button
              to={'https://www.eicher.in/about-us'}
              target="_blank"
              mode={'default'}
            >
              Read About Eicher
            </Button>
          </div>
        </Card>
        <Card
          className={'center padding-normal'}
          style={{ margin: '20px auto', height: '350px' }}
        >
          <h2>Milestones</h2>
          <div>
            A journey, spanning over five decades, Eicher has come a long way.
            These rewarding times saw the company grow, diversify, acquire,
            amalgamate, consolidate and expand; winning hearts and trust of
            clients, dealers/distributors and shareholders alike. The path
            pursued has been illuminated with landmarks and milestones, which
            stand as an edifice saluting our achievements. These milestones can
            be divided into 3 phases.
          </div>
          <div className={'padding-top-big'}>
            <Button
              to={'https://www.eicher.in/milestones'}
              target="_blank"
              mode={'primary-outline'}
            >
              See Milestones
            </Button>
          </div>
        </Card>
      </Yoga>
    ) : props.id === 'MAC_POWER' ? (
      <Card
        className={'center padding-normal'}
        style={{
          margin: '20px auto',
          height: '250px',
          backgroundColor: '#c51632',
          color: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <h2>MacPower Brand </h2>
        <div>
          Yigit Aku Corp. provides service with its portfolio of brands which
          are globally known “Platin, Tunç, Macpower, and Helden” portfolio of
          brands that have brand values globally, as well as with its 90 main
          dealers in the country and 6,000 subdealers. Yigit Aku Corp. supplies
          batteries to the most prestigious automotive companies, and industries
          including the Defence Industry in our country and many countries in
          the world.{' '}
        </div>
        <div className={'padding-top-big'}>
          <Button
            to={'https://mac-power.yigitaku.com/corporate-profile/?lang=en'}
            target="_blank"
            mode={'default'}
          >
            Read About Yigit Aku Corp.{' '}
          </Button>
        </div>
      </Card>
    ) : null
  return <div> {history}</div>
}

export default Heritage
