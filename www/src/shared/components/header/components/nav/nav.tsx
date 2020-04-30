import React from 'react'

import './nav.scss'
import Anchor from '../../../anchor/anchor'

export type NavProps = {}

const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="shared-header-nav">
      <Anchor to="/products">
        <span>Products</span>
      </Anchor>
      <Anchor to="/aftersales">
        <span>Aftersales</span>
      </Anchor>
      <Anchor to="/news">
        <span>News</span>
      </Anchor>
      <Anchor to="/contact" className="shared-header-nav-important-link">
        <span>Contact Us</span>
      </Anchor>
    </nav>
  )
}

export default Nav
