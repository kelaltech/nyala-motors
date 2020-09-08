import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

import Loadable from '@loadable/component'

import useLang from '../../hooks/lang/use-lang'
import useSiteMetadata from '../../hooks/use-site-metadata/use-site-metadata'
import Anchor from '../anchor/anchor'
import './footer.scss'

const LoadLanguage = Loadable(
  () => import('../language-preference/language-preference')
)

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
  const { copyright } = useSiteMetadata()
  const lang = useLang()
  return (
    <footer className="shared-footer">
      <div className="shared-footer-top-row">
        <div className="shared-footer-links">
          <Anchor to="/vacancies">{lang`footer.item.vacancies`}</Anchor>
          <Anchor to="/bid">{lang`footer.item.bid`}</Anchor>
          {/* <Anchor to="/reports">{lang`footer.item.reports`}</Anchor> */}
          <Anchor to="/registration">{lang`footer.item.customer-reg`}</Anchor>
          <Anchor to="/faq">{lang`footer.item.faq`}</Anchor>
          <Anchor to="/feedback">{lang`footer.item.feedback`}</Anchor>
        </div>

        <div className="shared-footer-social">
          <Anchor
            to="https://www.facebook.com/NyalaMotors"
            target="_blank"
            rel="noopener nofollow"
            title="Facebook"
          >
            <FaFacebookF />
          </Anchor>
          <Anchor
            to="https://twitter.com/NMSC2016"
            target="_blank"
            rel="noopener nofollow"
            title="Twitter"
          >
            <FaTwitter />
          </Anchor>
          <Anchor
            to="https://www.youtube.com/channel/UCi5n-z1yLMrZCOebd5sEetQ"
            target="_blank"
            rel="noopener nofollow"
            title="YouTube"
          >
            <FaYoutube />
          </Anchor>
        </div>
      </div>

      <div className="shared-language-preference padding-bottom-big">
        <div className={'lang-box'}>
          <LoadLanguage />
        </div>
      </div>

      <div className="shared-footer-bottom-row">
        <div>
          {copyright}
          <span className="padding-horizontal-normal">•</span>
          Powered by{' '}
          <Anchor
            to="https://www.kelaltech.com/"
            target="_blank"
            rel="noopener nofollow"
          >
            Kelal Tech
          </Anchor>
        </div>

        <div className="right">
          <Anchor to="/contact">{lang`nav.item.contact`}</Anchor>
          <span className="padding-horizontal-normal">•</span>
          <Anchor to="/feedback">{lang`footer.item.feedback`}</Anchor>
        </div>
      </div>
    </footer>
  )
}

export default Footer
