import React from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'

type LayoutProps = React.PropsWithChildren<{}>

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <main style={{ minHeight: `calc(100vh - 96px)` }}>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
