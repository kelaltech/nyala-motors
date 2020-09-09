import { PageRendererProps } from 'gatsby'
import 'normalize.css'
import React from 'react'

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
        <>{children}</>
      </ApolloClientProvider>
    </PageProvider>
  )
}

export default App
