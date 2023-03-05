import { gql } from '@apollo/client'

export const pageGql = {
  hello: gql`
    query Query {
      hello
    }
  `
}
