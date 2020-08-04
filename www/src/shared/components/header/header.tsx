import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import './header.scss'
import { HeaderQuery } from '../../../../graphql-types'
import Anchor from '../anchor/anchor'
import Wordmark from '../../../assets/images/shared/brand/wordmark.svg'
import WordmarkAlt from '../../../assets/images/shared/brand/wordmark-alt.svg'
import Nav from './components/nav/nav'
import { useScrollPosition } from '../../../shared/hooks/use-scroll-position/use-scroll-position'
export type HeaderProps = {
  mode?: 'default' | 'white' | 'transparent' | 'primary'
}

const Header: React.FC<HeaderProps> = ({ mode = 'default' }) => {
  const { logo } = useStaticQuery<HeaderQuery>(query)

  const [pos, setPos] = useState({ x: 0, y: 0 })
  useScrollPosition(({ currPos }) => setPos(currPos))

  return (
    <header
      className={`shared-header ${
        mode !== 'default'
          ? `shared-header-mode-${
              mode === 'transparent' && pos.y !== 0 ? 'white' : mode
            }`
          : `shared-header-mode-${pos.y !== 0 ? 'white' : ''}`
      }`}
    >
      <div>
        <Anchor to="/" className="shared-header-brand">
          <GatsbyImage
            fixed={logo?.childImageSharp?.fixed as any}
            className="shared-header-mode-logo"
          />

          {mode === 'primary' || (mode === 'transparent' && pos.y === 0) ? (
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
