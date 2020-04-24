import React from 'react'
import { PageRendererProps } from 'gatsby'

import { PageProvider } from './contexts/page-context/page-context'
import ApolloClientProvider from './configs/apollo-client-provider'

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
