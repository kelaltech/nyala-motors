import React from 'react'
import { Card, Yoga, Block } from 'gerami'

type modalProps = { id: string }

const Heritage: React.FC<modalProps> = (props) => {
  const history =
    props.id === 'UD_TRUCKS' ? (
      <Yoga maxCol={2}>
        <Card
          className={'padding-normal'}
          style={{
            margin: '20px auto',
            backgroundColor: '#c51632',
            color: 'rgba(255, 255, 255, 0.8)',
            height: 'inherit',
          }}
        >
          <h2 className="center padding-top-big" style={{ color: 'white' }}>
            History
          </h2>
          <div className="padding-vertical-normal">
            <Block first last style={{ fontSize: '16px' }}>
              <b>UD Trucks company was established in 1935. </b>The founder
              Kenzo Adachi had a vision to make the trucks the world needs
              today. His belief in making trucks with “ultimate dependability“
              makes up the company's DNA, and has been inherited over
              generations to this very day. UD's history is one of realizing his
              vision and core value.
              <br />
              <br />
              To meet the development of the logistics system which economy,
              society and living rest on, UD reaches for the ultimate truck, a
              truck with high durability and less trouble, a truck with high
              payload and superior fuel efficiency. This was the vision of the
              founder over 80 years ago, and it is still be the vision today.
            </Block>
          </div>
          {/* <div className={'padding-top-big'}>
            <Button
              to={'https://www.udtrucks.com/about-ud-trucks/our-brand/history'}
              target="_blank"
              mode={'default'}
            >
              Read About UD Truks
            </Button>
          </div> */}
        </Card>
        <Card
          className={'padding-normal'}
          style={{ margin: '20px auto', height: 'inherit' }}
        >
          <div className=" padding-top-big center">
            <h2>Brand Philosophy</h2>
          </div>
          <div className="padding-vertical-normal">
            <Block first last style={{ fontSize: '16px' }}>
              <b> UD Trucks’ brand philosophy articulates our brand values. </b>{' '}
              It is UD's guiding beacon. At UD Trucks we are going the extra
              mile for their customers, every single day. Ultimate dependability
              is our core value, our DNA. UD Trucks are smart and modern in
              everything we do. We continuously improve performance to excel on
              the essentials. We work as one UD team with the UD gemba spirit.{' '}
              <br />
              <br />
              At UD Trucks, we have relentless focus to excel on the essentials
              that make our customers profitable, &amp; strive to create the
              optimum balance of features, cost and efficiency. From fuel
              efficiency, uptime and productivity, to safety and drivability.
              All that you need, but not more than you want.
            </Block>
          </div>
          {/* <div className={'padding-top-big'}>
            <Button
              to={
                'https://www.udtrucks.com/about-ud-trucks/our-brand/brand-philosophy'
              }
              target="_blank"
              mode={'primary-outline'}
            >
              Read About Brand Philosophy
            </Button>
          </div> */}
        </Card>
      </Yoga>
    ) : props.id === 'UNICARRIER' ? (
      <Card
        className={'padding-normal'}
        style={{
          margin: '20px auto',
          height: 'inherit',
          backgroundColor: 'rgb(30,185,230)',
        }}
      >
        <h2 className="center" style={{ color: 'white' }}>
          Heritage
        </h2>
        <div className="padding-vertical-normal">
          <Block style={{ color: 'rgba(255, 255, 255, 0.9)' }} first last>
            The heritage of UniCarriers forklifts begins when the first Nissan
            Forklift rolled off the assembly line at Nissan Motor’s Totsuka
            Plant on August 25, 1957. Since its debut, Nissan Forklift had been
            a successful forklift brand under Nissan group, recognized as a
            leading provider of high performance material handling products.
            Making use of the advanced technologies derived from automotive
            industry, the key brand message was “keep the customers’ operation
            on the move.
            <br />
            <br />
            Our products have been supplied from the production bases in Japan,
            U.S., China, Spain and Sweden. At all locations, products have been
            strictly checked to assure quality before delivering to our sales
            networks in the global markets covering each continent in the world.
            Our sales networks have professional engineers to provide quality
            service to support your operation on the move.
          </Block>
        </div>
        {/* <div className={'padding-top-big'}>
          <Button
            to={'https://www.unicarriers.co.jp/os_products/about/'}
            target="_blank"
            mode={'default'}
          >
            Read About Brand Philosophy
          </Button>
        </div> */}
      </Card>
    ) : props.id === 'EICHER' ? (
      <Yoga maxCol={2}>
        <Card
          className={'padding-normal'}
          style={{
            margin: '20px auto',
            backgroundColor: '#c51632',
            color: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <h2 className="center padding-top-big" style={{ color: 'white' }}>
            Heritage
          </h2>
          <div className="padding-vertical-normal">
            <Block first last style={{ fontSize: '16px' }}>
              Eicher has a joint venture with Sweden’s AB Volvo (Volvo Eicher
              Commercial Vehicles Limited) and{' '}
              <strong>
                has pioneered modernisation of commercial vehicles
              </strong>{' '}
              in India and other developing countries.
              <br />
              <br />
              VECV has a complete range of trucks and buses from 4.9-55 tonnes,
              and its integrated manufacturing plant in Pithampur, Madhya
              Pradesh is the global hub for medium duty five- and eight-litre
              engines for Volvo Group.
            </Block>
          </div>
          {/* <div className={'padding-top-big'}>
            <Button
              to={'https://www.eicher.in/about-us'}
              target="_blank"
              mode={'default'}
            >
              Read About Eicher
            </Button>
          </div> */}
        </Card>
        <Card className={'padding-normal'} style={{ margin: '20px auto' }}>
          <h2 className="center padding-top-big">Milestones</h2>
          <div className="padding-vertical-normal">
            <Block first last style={{ fontSize: '16px' }}>
              <strong>
                A journey, spanning over five decades, Eicher has come a long
                way.
              </strong>
              These rewarding times saw the company grow, diversify, acquire,
              amalgamate, consolidate and expand; winning hearts and trust of
              clients, dealers/distributors and shareholders alike.
              <br />
              <br />
              The path pursued has been illuminated with landmarks and
              milestones, which stand as an edifice saluting our achievements.
              These milestones can be divided into 3 phases.
            </Block>
          </div>
          {/* <div className={'padding-top-big'}>
            <Button
              to={'https://www.eicher.in/milestones'}
              target="_blank"
              mode={'primary-outline'}
            >
              See Milestones
            </Button>
          </div> */}
        </Card>
      </Yoga>
    ) : props.id === 'MAC_POWER' ? (
      <Card
        className={'padding-normal'}
        style={{
          margin: '20px auto',
          height: '250px',
          backgroundColor: '#c51632',
          color: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <h2 className="center padding-top-big" style={{ color: 'white' }}>
          Heritage
        </h2>
        <div className="padding-vertical-normal">
          <Block first last style={{ fontSize: '16px' }}>
            Yigit Aku Corp. provides service with its portfolio of brands which
            are globally known “Platin, Tunç, Macpower, and Helden” portfolio of
            brands that have brand values globally, as well as with its 90 main
            dealers in the country and 6,000 subdealers.
            <br />
            <br />
            Yigit Aku Corp. supplies batteries to the most prestigious
            automotive companies, and industries including the Defence Industry
            in our country and many countries in the world.
          </Block>
        </div>
      </Card>
    ) : null

  return <div>{history}</div>
}

export default Heritage
