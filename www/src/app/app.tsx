import { PageRendererProps } from 'gatsby'
import 'normalize.css'
import React from 'react'
import { Helmet } from 'react-helmet'

import '../assets/styles/index.scss'
import ApolloClientProvider from './configs/apollo-client-provider'
import { PageProvider } from './contexts/page-context/page-context'

type AppProps = React.PropsWithChildren<{
  pageRendererProps: PageRendererProps
}>

const App: React.FC<AppProps> = ({ children, pageRendererProps }) => {
  return (
    <PageProvider value={pageRendererProps}>
      <ApolloClientProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <>{children}</>
      </ApolloClientProvider>
    </PageProvider>
  )
}

export default App
