import React from 'react'

import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <SEO title="Home" />

      <Layout headerProps={{ mode: 'transparent' }}>
        <>TODO: Home</>
      </Layout>
    </>
  )
}

export default Home
