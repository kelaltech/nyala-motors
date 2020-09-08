import { navigate } from 'gatsby'
import fetch from 'isomorphic-fetch'
import qs from 'qs'
import React, { PropsWithChildren } from 'react'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { createHttpLink } from '@apollo/react-hooks'

const httpLink = createHttpLink({
  uri: process.env.GATSBY_GRAPHQL_URL || `http://localhost:4000/graphql`,
  fetch,
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (
        // no token:
        err.extensions?.code === 'UNAUTHENTICATED' ||
        // invalid:
        (err.extensions?.exception?.name === 'JsonWebTokenError' &&
          err.extensions?.exception?.message === 'invalid signature')
      ) {
        if (typeof window === 'undefined') {
          continue
        }
        if (
          !localStorage.getItem('token') &&
          err.path &&
          err.path.join('.') === ['account', 'me'].join('.')
        ) {
          // already logged out and the regular account.me is requested
          // no further action (such as navigate) is needed in this case
          continue
        }
        localStorage.removeItem('token')
        localStorage.removeItem('account')
        navigate(
          `/login/?${qs.stringify(
            {
              continue:
                location.pathname.replace(/\/$/, '/') +
                (location.search || '') +
                (location.hash || ''),
            },
            { addQueryPrefix: false }
          )}`
        )
      }
    }
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
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
