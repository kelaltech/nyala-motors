import React from 'react'
import SEO from '../../../shared/components/seo/seo'
import LayoutDefault from '../../../shared/components/layout/layout'
import { Block } from 'gerami'
import './parts.scss'

type PartsProps = {}

const Parts: React.FC<PartsProps> = () => {
  return (
    <>
      <SEO title="Geniune Parts" />

      <LayoutDefault
        headerProps={{
          mode: 'primary',
        }}
      >
        <Block className="center parts-container">
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
