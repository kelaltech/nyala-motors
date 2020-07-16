import React from 'react'

import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import { Block } from 'gerami'
import './registration.scss'

type RegistrationProps = {}

const Registration: React.FC<RegistrationProps> = () => {
  return (
    <>
      <SEO title="Home" />

      <Layout headerProps={{ mode: 'primary' }}>
        <Block className="center feedback-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScGr8rLqD-tntjntVT5TupqORR4wcCZ9DEmAXNqr_ptZD9yaw/viewform?embedded=true"
            frameBorder={0}
            scrolling={'no'}
            className="feedback-form"
          >
            Loading…
          </iframe>
        </Block>
      </Layout>
    </>
  )
}

export default Registration
