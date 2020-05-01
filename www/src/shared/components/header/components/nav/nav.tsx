import React from 'react'
import { FaCaretDown } from 'react-icons/fa'

import './nav.scss'
import useDropDown from '../../../../hooks/use-drop-down/use-drop-down'
import Anchor from '../../../anchor/anchor'

export type NavProps = {}

const Nav: React.FC<NavProps> = () => {
  const [menuRef, isMenuOpen, openMenu] = useDropDown<HTMLDivElement>()

  return (
    <div style={{ height: `inherit` }}>
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
        <Anchor
          to="/"
          className="shared-header-nav-on-mobile"
          onClick={openMenu}
        >
          <span>
            MENU <FaCaretDown />
          </span>
        </Anchor>
      </nav>

      {!isMenuOpen ? null : (
        <div className="shared-header-nav-menu" ref={menuRef}>
          <Anchor to="/products" className="shared-header-nav-on-mobile">
            <span>Products</span>
          </Anchor>
          <Anchor to="/aftersales" className="shared-header-nav-on-mobile">
            <span>Aftersales</span>
          </Anchor>
          <Anchor to="/news" className="shared-header-nav-on-mobile">
            <span>News</span>
          </Anchor>
          <Anchor
            to="/contact"
            className="shared-header-nav-important-link shared-header-nav-on-mobile"
          >
            <span>Contact Us</span>
          </Anchor>
        </div>
      )}
    </div>
  )
}

export default Nav
