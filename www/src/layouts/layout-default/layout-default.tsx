import React from 'react'

type LayoutDefaultProps = React.PropsWithChildren<{}>

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => {
  return (
    <>
      <header>TODO: LayoutDefault (header)</header>

      <main>{children}</main>

      <header>TODO: LayoutDefault (footer)</header>
    </>
  )
}

export default LayoutDefault
