import React from 'react'
import { FaCaretDown } from 'react-icons/fa'

import './nav.scss'
import useDropDown from '../../../../hooks/use-drop-down/use-drop-down'
import { usePage } from '../../../../../app/contexts/page-context/page-context'
import Anchor from '../../../anchor/anchor'

export type NavProps = {}

const Nav: React.FC<NavProps> = () => {
  const [menuRef, isMenuOpen, openMenu] = useDropDown<HTMLDivElement>()

  const page = usePage()
  const activePathname = (page?.location?.pathname || ``).replace(/\/$/, '')

  return (
    <div style={{ height: `inherit` }}>
      <nav className="shared-header-nav">
        <Anchor
          to="/products"
          className={`${
            '/products' !== activePathname ? '' : 'shared-nav-link-active'
          }`}
        >
          <span>Products</span>
        </Anchor>
        <Anchor
          to="/aftersales"
          className={`${
            '/aftersales' !== activePathname ? '' : 'shared-nav-link-active'
          }`}
        >
          <span>Aftersales</span>
        </Anchor>
        <Anchor
          to="/news"
          className={`${
            '/news' !== activePathname ? '' : 'shared-nav-link-active'
          }`}
        >
          <span>News</span>
        </Anchor>
        <Anchor
          to="/contact"
          className={`shared-header-nav-important-link ${
            '/contact' !== activePathname ? '' : 'shared-nav-link-active'
          }`}
        >
          <span>Contact Us</span>
        </Anchor>
        <Anchor
          to="/"
          className={`shared-header-nav-on-mobile ${
            !isMenuOpen ? '' : 'shared-nav-link-active'
          }`}
          onClick={openMenu}
        >
          <span>
            MENU <FaCaretDown />
          </span>
        </Anchor>
      </nav>

      {!isMenuOpen ? null : (
        <div className="shared-header-nav-menu" ref={menuRef}>
          <Anchor
            to="/products"
            className={`shared-header-nav-on-mobile ${
              '/products' !== activePathname ? '' : 'shared-nav-link-active'
            }`}
          >
            <span>Products</span>
          </Anchor>
          <Anchor
            to="/aftersales"
            className={`shared-header-nav-on-mobile ${
              '/aftersales' !== activePathname ? '' : 'shared-nav-link-active'
            }`}
          >
            <span>Aftersales</span>
          </Anchor>
          <Anchor
            to="/news"
            className={`shared-header-nav-on-mobile ${
              '/news' !== activePathname ? '' : 'shared-nav-link-active'
            }`}
          >
            <span>News</span>
          </Anchor>
          <Anchor
            to="/contact"
            className={`shared-header-nav-important-link shared-header-nav-on-mobile ${
              '/contact' !== activePathname ? '' : 'shared-nav-link-active'
            }`}
          >
            <span>Contact Us</span>
          </Anchor>
        </div>
      )}
    </div>
  )
}

export default Nav
