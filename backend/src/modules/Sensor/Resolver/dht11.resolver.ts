import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MQTTPubSub } from 'graphql-mqtt-subscriptions';
import { PrismaService } from 'nestjs-prisma';
import { CreateOnedhtArgs } from 'src/graphql/dht/create-onedht.args';
import { dht } from 'src/graphql/dht/dht.model';
import { Dht11Dto } from '../Dto/dht11.dto';

@Resolver((of) => Dht11Dto)
export class Dht11SensorResolver {
  constructor(
    @Inject('MQTT_PUB_SUB')
    private mqttpubSub: MQTTPubSub,
    private prismaService: PrismaService,
  ) {}

  @Subscription((returns) => Dht11Dto, {
    resolve(this: Dht11SensorResolver, value: Dht11Dto) {
      this.createOneDataDht11({
        data: { humidity: value.Humidity, temperature: value.Temperature },
      });
      return value;
    },
  })
  getTempAndHumidity() {
    return this.mqttpubSub.asyncIterator('SENSOR/ESP32/DHT11/01');
  }
  @Mutation((returns) => dht)
  async createOneDataDht11(@Args() args?: CreateOnedhtArgs) {
    return await this.prismaService.dht.create(args as Prisma.dhtCreateArgs);
  }
}
