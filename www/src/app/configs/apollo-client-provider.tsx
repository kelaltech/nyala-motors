import fetch from 'isomorphic-fetch'
import React, { PropsWithChildren } from 'react'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createHttpLink } from '@apollo/react-hooks'
import { graphqlUrl } from '../../../constants'
const httpLink = createHttpLink({
  uri: graphqlUrl,
  fetch,
})

const errorLink = onError(({ networkError }) => {
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

export const apolloClient = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const ApolloClientProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ApolloProvider client={apolloClient}>
      <>{children}</>
    </ApolloProvider>
  )
}

export default ApolloClientProvider
