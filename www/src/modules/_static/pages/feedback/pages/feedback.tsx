import React from 'react'
import SEO from '../../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../../shared/components/layout/layout'
import { Content } from 'gerami'
// import { Loading} from 'gerami'

type Feedback = {}

const Feedback: React.FC<Feedback> = () => {
  return (
    <>
      <SEO title="Feedback" />

      <LayoutDefault headerProps={{ mode: 'white' }}>
        <Content style={{ paddingTop: 64 }} transparent={true}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScGr8rLqD-tntjntVT5TupqORR4wcCZ9DEmAXNqr_ptZD9yaw/viewform?embedded=true"
            frameBorder={0}
            scrolling={'no'}
            width={'100%'}
            height={750 + 128}
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </Content>
      </LayoutDefault>
    </>
  )
}

export default Feedback
