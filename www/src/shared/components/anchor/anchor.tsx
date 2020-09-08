import { Link } from 'gatsby-plugin-intl'
import React, { AnchorHTMLAttributes } from 'react'

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
}

const Anchor: React.FC<AnchorProps> = ({ to: _to, children, ...aProps }) => {
  let to = _to
  if (
    typeof window !== 'undefined' &&
    to?.substr(0, window.location.origin.length).toLowerCase() ===
      window.location.origin.toLowerCase()
  ) {
    to = to.substr(window.location.origin.length)
    if (to.substr(0, 1) !== '/') to = `/${to}`
  }

  return to.match(/^(http(|s):\/\/|mailto:|tel:|#)/i) || aProps.download ? (
    <a href={aProps.href ?? to} {...aProps}>
      {children}
    </a>
  ) : (
    <Link to={to} {...aProps}>
      {children}
    </Link>
  )
}

export default Anchor
