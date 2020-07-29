import React from 'react'
import SEO from '../../../shared/components/seo/seo'
import LayoutDefault from '../../../shared/components/layout/layout'
import { Content, Block } from 'gerami'
// import { Loading} from 'gerami'

type PartsProps = {}

const Parts: React.FC<PartsProps> = () => {
  return (
    <>
      <SEO title="Feedback" />

      <LayoutDefault
        headerProps={{
          mode: 'primary',
        }}
      >
        <Block />
        <Content transparent size={'XL'}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScJD3QW6HC8R6IEwdzZDuGgiejicbvrrvO5WraoXxnMlk1M4w/viewform?usp=sf_link"
            width={800}
            height={750}
            frameBorder={0}
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

export default Parts
