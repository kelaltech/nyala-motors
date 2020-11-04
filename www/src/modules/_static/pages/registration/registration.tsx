import { Block } from 'gerami'
import React from 'react'

import Layout from '../../../../shared/components/layout/layout'
import SEO from '../../../../shared/components/seo/seo'
import './registration.scss'

type RegistrationProps = {}

const Registration: React.FC<RegistrationProps> = () => {
  return (
    <>
      <SEO
        title="Customer Registration Form"
        description={'Register and get instant updates from Nyala Motors S.C.'}
      />

      <Layout headerProps={{ mode: 'primary' }}>
        <Block className="center registration-container">
          <iframe
            src="https://eepurl.com/g_DOGD"
            frameBorder={0}
            scrolling={'no'}
            className="registration-form"
          >
            Loading…
          </iframe>
        </Block>
      </Layout>
    </>
  )
}

export default Registration
