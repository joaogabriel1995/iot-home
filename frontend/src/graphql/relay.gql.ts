import { gql } from '@apollo/client'
import { relayType } from '../shared/dto/relay.dto'
export type Dht11getData = { getTempAndHumidity?: relayType }

export const dht11Gql = {
  getData: gql`
    subscription Subscription {
      getTempAndHumidity {
        Humidity
        Temperature
      }
    }
  `
}
