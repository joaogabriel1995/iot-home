import { Module } from '@nestjs/common';
import { PubSubModule } from 'src/modules/PubSub/pubsub.module';
import { Dht11SensorResolver } from './Resolver/dht11.resolver';
@Module({
  imports: [PubSubModule],
  controllers: [],
  providers: [Dht11SensorResolver],
})
export class SensorModules {}
