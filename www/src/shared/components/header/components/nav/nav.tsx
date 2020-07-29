import React from 'react'
import { FaCaretDown } from 'react-icons/fa'

import './nav.scss'
import useDropDown from '../../../../hooks/use-drop-down/use-drop-down'
import { usePage } from '../../../../../app/contexts/page-context/page-context'
import Anchor from '../../../anchor/anchor'

import useLang from '../../../../hooks/lang/use-lang'

export type NavProps = {}

const Nav: React.FC<NavProps> = () => {
  const [menuRef, isMenuOpen, openMenu] = useDropDown<HTMLDivElement>()
  const [aftersaleRef, isAftersaleMenuOpen, aftersaleOpenMenu] = useDropDown<
    HTMLDivElement
  >()
  const lang = useLang()

  const page = usePage()
  const activePathname = (page?.location?.pathname || ``).replace(/\/$/, '')

  return (
    <div style={{ height: `inherit` }}>
      <nav className="shared-header-nav">
        <Anchor
          to="/about"
          className={`${
            '/about' !== activePathname ? '' : 'shared-nav-link-active'
          }`}
        >
          <span>{lang`nav.item.about`}</span>
        </Anchor>

        <Anchor
          to="/products"
          className={`${
            '/products' !== activePathname ? '' : 'shared-nav-link-active'
          }`}
        >
          <span>{lang`nav.item.products`}</span>
        </Anchor>

        <Anchor
          to="#"
          className={` ${!isAftersaleMenuOpen ? '' : 'shared-nav-link-active'}`}
          onClick={aftersaleOpenMenu}
        >
          <span>{lang`nav.item.aftersale`}</span>
          {!isAftersaleMenuOpen ? null : (
            <div className="aftersale-dropdown" ref={aftersaleRef}>
              <Anchor
                to="/aftersales/services"
                className={`${
                  '/aftersales/services' !== activePathname
                    ? ''
                    : 'shared-nav-link-active'
                }`}
              >
                <span>{lang`nav.item.services`}</span>
              </Anchor>
              <Anchor
                to="/aftersales/parts"
                className={`${
                  '/aftersales/parts' !== activePathname
                    ? ''
                    : 'shared-nav-link-active'
                }`}
              >
                <span>{lang`nav.item.parts`}</span>
              </Anchor>
            </div>
          )}
        </Anchor>

        <Anchor
          to="/showroom"
          className={`${
            '/showroom' !== activePathname ? '' : 'shared-nav-link-active'
          }`}
        >
          <span>{lang`nav.item.showroom`}</span>
        </Anchor>

        <Anchor
          to="/news"
          className={`${
            '/news' !== activePathname ? '' : 'shared-nav-link-active'
          }`}
        >
          <span>{lang`nav.item.news`}</span>
        </Anchor>

        <Anchor
          to="/contact"
          className={`shared-header-nav-important-link ${
            '/contact' !== activePathname ? '' : 'shared-nav-link-active'
          }`}
        >
          <span>{lang`nav.item.contact`}</span>
        </Anchor>
        <Anchor
          to="/"
          className={`shared-header-nav-on-mobile ${
            !isMenuOpen ? '' : 'shared-nav-link-active'
          }`}
          onClick={openMenu}
        >
          <span>
            {lang`nav.title`} <FaCaretDown />
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
            <span>{lang`nav.item.products`}</span>
          </Anchor>
          <Anchor
            to="/aftersales/services"
            className={`shared-header-nav-on-mobile ${
              '/aftersales/services' !== activePathname
                ? ''
                : 'shared-nav-link-active'
            }`}
          >
            <span>{lang`nav.item.services`}</span>
          </Anchor>

          <Anchor
            to="/aftersales/parts"
            className={`shared-header-nav-on-mobile ${
              '/aftersales/parts' !== activePathname
                ? ''
                : 'shared-nav-link-active'
            }`}
          >
            <span>{lang`nav.item.parts`}</span>
          </Anchor>

          <Anchor
            to="/news"
            className={`shared-header-nav-on-mobile ${
              '/news' !== activePathname ? '' : 'shared-nav-link-active'
            }`}
          >
            <span>{lang`nav.item.news`}</span>
          </Anchor>

          <Anchor
            to="/showroom"
            className={`shared-header-nav-on-mobile ${
              '/showroom' !== activePathname ? '' : 'shared-nav-link-active'
            }`}
          >
            <span>{lang`nav.item.showroom`}</span>
          </Anchor>
          <Anchor
            to="/about"
            className={`shared-header-nav-on-mobile ${
              '/about' !== activePathname ? '' : 'shared-nav-link-active'
            }`}
          >
            <span>{lang`nav.item.about`}</span>
          </Anchor>
          <Anchor
            to="/contact"
            className={`shared-header-nav-important-link shared-header-nav-on-mobile ${
              '/contact' !== activePathname ? '' : 'shared-nav-link-active'
            }`}
          >
            <span>{lang`nav.item.contact`}</span>
          </Anchor>
        </div>
      )}
    </div>
  )
}

export default Nav
