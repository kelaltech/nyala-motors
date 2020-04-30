import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import './header.scss'
import { HeaderQuery } from '../../../../graphql-types'
import Anchor from '../anchor/anchor'
import Wordmark from '../../../assets/images/shared/brand/wordmark.svg'
import WordmarkAlt from '../../../assets/images/shared/brand/wordmark-alt.svg'
import Nav from './components/nav/nav'

export type HeaderProps = {
  mode?: 'default' | 'white' | 'transparent' | 'primary'
}

const Header: React.FC<HeaderProps> = ({ mode = 'default' }) => {
  const { logo } = useStaticQuery<HeaderQuery>(query)

  return (
    <header
      className={`shared-header ${
        mode !== 'default' ? `shared-header-mode-${mode}` : ''
      }`}
    >
      <div>
        <Anchor to="/" className="shared-header-brand">
          <GatsbyImage
            fixed={logo?.childImageSharp?.fixed as any}
            className="shared-header-mode-logo"
          />

          {(['transparent', 'primary'] as HeaderProps['mode'][]).includes(
            mode
          ) ? (
            <WordmarkAlt className="shared-header-mode-wordmark" />
          ) : (
            <Wordmark className="shared-header-mode-wordmark" />
          )}
        </Anchor>

        <Nav />
      </div>
    </header>
  )
}

export default Header

const query = graphql`
  query Header {
    logo: file(relativePath: { eq: "shared/brand/logo.png" }) {
      childImageSharp {
        fixed(height: 64, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`
