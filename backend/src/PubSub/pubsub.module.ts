import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { AuthorsResolver } from './Resolver/pubsub.resolver';
import { connect } from 'mqtt';
import { MQTTPubSub } from 'graphql-mqtt-subscriptions';

const client = connect({
  host: `${process.env.HOST_BROKER}`,
  port: process.env.PORT_BROKER as unknown as number,
  username: `${process.env.USER_BROKER}`,
  password: `${process.env.PWD_BROKER}`,
  reconnectPeriod: 1000,
  protocol: `${process.env.PROTOCOL_BROKER}`,
});

const pubsub = new MQTTPubSub({
  client,
});

@Module({
  imports: [],
  controllers: [],
  providers: [
    AuthorsResolver,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
    {
      provide: 'MQTT_PUB_SUB',
      useValue: pubsub,
    },
  ],
  exports: [],
})
export class PubSubModule {}
