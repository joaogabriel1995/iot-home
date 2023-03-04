import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mqttPubSub, pubSub } from './services/pubsub.service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'MQTT_PUB_SUB',
      useValue: mqttPubSub,
    },
    {
      provide: 'PUB_SUB',
      useValue: pubSub,
    },
  ],
  exports: ['MQTT_PUB_SUB', 'PUB_SUB'],
})
export class PubSubModule {}
