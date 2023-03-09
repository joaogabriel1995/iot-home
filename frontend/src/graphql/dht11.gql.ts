import { gql } from '@apollo/client'
import { dhtMeanByTimeType, dhtType } from '../shared/dto/dht11.dto'

export type Dht11getData = { getTempAndHumidity?: dhtType }
export type Dht11getMeanBytime = { getMeanByTimeWindow?: [dhtMeanByTimeType] }

export const dht11Gql = {
  getData: gql`
    subscription Subscription {
      getTempAndHumidity {
        Humidity
        Temperature
      }
    }
  `,
  getMeanByTimeWindow: gql`
    query GetMeanByTimeWindow(
      $timeRangeStartCalc: String!
      $windowPeriod: String!
      $field: String!
    ) {
      getMeanByTimeWindow(
        timeRangeStartCalc: $timeRangeStartCalc
        windowPeriod: $windowPeriod
        _field: $field
      ) {
        _time
        _value
      }
    }
  `
}
