import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MQTTPubSub } from 'graphql-mqtt-subscriptions';
import { PrismaService } from 'nestjs-prisma';
import { CreateOnedhtArgs } from 'src/graphql/dht/create-onedht.args';
import { dht } from 'src/graphql/dht/dht.model';
import { InfluxDbService } from 'src/modules/Storage/services/influxdb.service';
import { dht11Args, Dht11Dto, influxDht11 } from '../Dto/dht11.dto';
import { fluxgetMeanByTimeWindow } from '../Flux/sensor.flux';

@Resolver((of) => Dht11Dto)
export class Dht11SensorResolver {
  constructor(
    @Inject('MQTT_PUB_SUB')
    private mqttpubSub: MQTTPubSub,
    private prismaService: PrismaService,
    private influxDbService: InfluxDbService,
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
  @Query((returns) => [influxDht11])
  async getMeanByTimeWindow(@Args() args?: dht11Args) {
    const a = await this.influxDbService.queryRows(
      fluxgetMeanByTimeWindow(
        args.timeRangeStartCalc,
        args.windowPeriod,
        args._field,
      ),
    );
    console.log(a);
    return a;
  }
}
