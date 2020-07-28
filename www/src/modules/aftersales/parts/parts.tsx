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
            src="https://docs.google.com/forms/d/e/1FAIpQLSeR38xESMpy6VXZMJ9NaHHWt4SAsApCD23SD7PRV_N3JL6TWA/viewform?embedded=true"
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
