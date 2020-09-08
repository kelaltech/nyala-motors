import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import React, { PropsWithChildren, useMemo } from 'react'

import { ApolloProvider } from '@apollo/react-hooks'

import { graphqlUrl } from '../../../constants'

const ApolloClientProvider = ({ children }: PropsWithChildren<{}>) => {
  const apolloClient = useMemo(
    () =>
      new ApolloClient({
        uri: graphqlUrl,
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
