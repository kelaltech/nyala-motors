import React, { PropsWithChildren, useMemo } from 'react'
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import { ApolloProvider } from '@apollo/react-hooks'

const ApolloClientProvider = ({ children }: PropsWithChildren<{}>) => {
  const apolloClient = useMemo(
    () =>
      new ApolloClient({
        uri: process.env.GATSBY_GRAPHQL_URL || `http://localhost:1337/graphql`,
        fetch,
      }),
    []
  )

  return (
    <ApolloProvider client={apolloClient}>
      <>{children}</>
    </ApolloProvider>
  )
}

export default ApolloClientProvider
