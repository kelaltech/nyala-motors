import React from 'react'
import { Content, Block } from 'gerami'

import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'
import Towing from '../../../../assets/images/four04/towing.svg'

type Four4 = {}

const Four04: React.FC<Four4> = () => {
  return (
    <>
      <SEO title="Home" />

      <Layout headerProps={{ mode: 'default' }}>
        <Content
          transparent
          size="L"
          className="margin-vertical-very-big padding-vertical-very-big"
        >
          <Block first last>
            <Towing width="100%" height="auto" />
          </Block>

          <Block first last>
            <h2 className="center">
              <span className="middle">404</span>
              <span
                className="middle padding-big light"
                style={{ opacity: 0.14, fontSize: `200%` }}
              >
                |
              </span>
              <span className="middle">Page Not Found</span>
            </h2>
          </Block>
        </Content>
      </Layout>
    </>
  )
}

export default Four04
