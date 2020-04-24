import React from 'react'

import SEO from '../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../layouts/layout-default/layout-default'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <SEO title="Home" />

      <LayoutDefault>
        <>TODO: Home</>
      </LayoutDefault>
    </>
  )
}

export default Home
