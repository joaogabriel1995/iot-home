import { Inject } from '@nestjs/common';
import { Resolver, Subscription } from '@nestjs/graphql';
import { MQTTPubSub } from 'graphql-mqtt-subscriptions';
import { Dht11Dto } from '../Dto/dht11.dto';

@Resolver((of) => Dht11Dto)
export class Dht11SensorResolver {
  constructor(
    @Inject('MQTT_PUB_SUB')
    private mqttpubSub: MQTTPubSub,
  ) {}

  @Subscription((returns) => Dht11Dto, {
    resolve(this: Dht11Dto, value) {
      return value;
    },
  })
  getTempAndHumidity() {
    return this.mqttpubSub.asyncIterator('DHT11/01');
  }
}
