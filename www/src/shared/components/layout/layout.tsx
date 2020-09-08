import React from 'react'

import Footer from '../footer/footer'
import Header, { HeaderProps } from '../header/header'

type LayoutProps = React.PropsWithChildren<{
  headerProps?: HeaderProps
}>

const Layout: React.FC<LayoutProps> = ({ headerProps, children }) => {
  return (
    <>
      <Header {...headerProps} />

      <main style={{ minHeight: `calc(100vh - 96px)` }}>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
