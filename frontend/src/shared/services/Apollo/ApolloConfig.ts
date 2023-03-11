import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  split
} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
const urlClient: string = `${process.env.REACT_APP_URL}`

const httpLink = createHttpLink({
  uri: `http://localhost:4000/graphql`
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws://localhost:4000/graphql`
  })
)

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

export const client = new ApolloClient({
  link: ApolloLink.from([link]),
  cache: new InMemoryCache()
})
