import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MQTTPubSub } from 'graphql-mqtt-subscriptions';
import { influxRelay, RelayArgs, RelayDto } from '../dto/relay.dto';
import { CreateOnerelayArgs } from 'src/graphql/relay/create-onerelay.args';
import { relay } from 'src/graphql/relay/relay.model';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { client } from 'src/modules/PubSub/services/pubsub.service';
import { InfluxDbService } from 'src/modules/Storage/services/influxdb.service';
import { fluxRelayLastData } from '../Flux/actuator.flux';

@Resolver((of) => RelayDto)
export class RelayActuatorResolver {
  constructor(
    @Inject('MQTT_PUB_SUB')
    private mqttpubSub: MQTTPubSub,
    private prismaService: PrismaService,
    private influxDbService: InfluxDbService,
  ) {}

  @Query((returns) => String)
  hello() {
    return 'Hello Word';
  }
  @Mutation((returns) => relay)
  async createOneDataRelay(@Args() args?: CreateOnerelayArgs) {
    return await this.prismaService.relay.create(
      args as Prisma.relayCreateArgs,
    );
  }

  @Mutation((returns) => relay)
  async switchStatus(@Args() args?: RelayArgs) {
    this.mqttpubSub.publish('ACTUADOR/ESP32/RELAY/01', args.OnOff);
    client.then((mqtt) => {
      mqtt.publish(
        'ACTUADOR/INFLUX/RELAY/01',
        `relay,relay_ukey=1,ssid=quarto,host="hostUser" OnOff=${args.OnOff}`,
      );
    });

    return this.createOneDataRelay({ data: { status_relay: 1 } });
  }
  @Query((returns) => [influxRelay])
  async getLastData() {
    return await this.influxDbService.queryRows(fluxRelayLastData());
  }
}
