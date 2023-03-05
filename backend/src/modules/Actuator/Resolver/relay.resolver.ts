import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MQTTPubSub } from 'graphql-mqtt-subscriptions';
import { RelayArgs, RelayDto } from '../dto/relay.dto';
import { CreateOnerelayArgs } from 'src/graphql/relay/create-onerelay.args';
import { relay } from 'src/graphql/relay/relay.model';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Resolver((of) => RelayDto)
export class RelayActuatorResolver {
  constructor(
    @Inject('MQTT_PUB_SUB')
    private mqttpubSub: MQTTPubSub,
    private prismaService: PrismaService,
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
    return this.createOneDataRelay({ data: { status_relay: 1 } });
  }

  // @Subscription((returns) => RelayActuator, {
  //   resolve(this: RelayActuator, value) {
  //     return value;
  //   },
  // })
  // getDataMachine() {
  //   return this.mqttpubSub.asyncIterator('teste/');
  // }
}
