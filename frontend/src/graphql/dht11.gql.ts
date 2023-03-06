import { gql } from '@apollo/client'
import { dhtType } from '../shared/dto/dht11.dto'

export type Dht11getData = { getTempAndHumidity?: dhtType }

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
