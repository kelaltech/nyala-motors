import { Block } from 'gerami'
import React from 'react'

import LayoutDefault from '../../../shared/components/layout/layout'
import SEO from '../../../shared/components/seo/seo'
import './parts.scss'

type PartsProps = {}

const Parts: React.FC<PartsProps> = () => {
  return (
    <>
      <SEO
        title="Geniune Parts"
        description={`Request form for Geniune parts/ sperparts`}
      />

      <LayoutDefault
        headerProps={{
          mode: 'primary',
        }}
      >
        <Block className="center parts-container padding-none">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScJD3QW6HC8R6IEwdzZDuGgiejicbvrrvO5WraoXxnMlk1M4w/viewform?usp=sf_link"
            frameBorder={0}
            scrolling={'no'}
            className="parts-form"
          >
            Loading…
          </iframe>
        </Block>
      </LayoutDefault>
    </>
  )
}

export default Parts
