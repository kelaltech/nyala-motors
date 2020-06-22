import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

import './footer.scss'
import useSiteMetadata from '../../hooks/use-site-metadata/use-site-metadata'
import Anchor from '../anchor/anchor'

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
  const { copyright } = useSiteMetadata()

  return (
    <footer className="shared-footer">
      <div className="shared-footer-top-row">
        <div className="shared-footer-links">
          <Anchor to="/vacancies">Vacancies</Anchor>
          <Anchor to="/bid">Bids</Anchor>
          <Anchor to="/reports">Reports</Anchor>
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
            kelal tech.
          </Anchor>
        </div>

        <div className="right">
          <Anchor to="/contact">Contact Us</Anchor>
          <span className="padding-horizontal-normal">•</span>
          <Anchor to="/feedback">Feedback</Anchor>
        </div>
      </div>
    </footer>
  )
}

export default Footer
