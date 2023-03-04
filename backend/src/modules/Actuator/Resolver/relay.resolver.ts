import { Inject } from '@nestjs/common';
import {
  Args,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { MQTTPubSub } from 'graphql-mqtt-subscriptions';
import { RelayArgs, RelayDto } from '../dto/relay.dto';

@Resolver((of) => RelayDto)
export class RelayActuatorResolver {
  constructor(
    @Inject('MQTT_PUB_SUB')
    private mqttpubSub: MQTTPubSub,
  ) {}

  @Query((returns) => String)
  hello() {
    return 'Hello Word';
  }
  @Mutation((returns) => RelayDto)
  async switchStatus(@Args() args?: RelayArgs) {
    this.mqttpubSub.publish('RELAY/01', args.OnOff);
    return { OnOff: 1 };
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
