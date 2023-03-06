import { gql } from '@apollo/client'

export const relayGql = {
  getRelayLastData: gql`
    query GetLastData {
      getLastData {
        _value
      }
    }
  `,
  switchStatusRelay: gql`
    mutation Mutation($onOff: Int!) {
      switchStatus(OnOff: $onOff) {
        created_at
        status_relay
        ukey
      }
    }
  `
}
