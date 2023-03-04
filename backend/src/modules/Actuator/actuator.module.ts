import { Module } from '@nestjs/common';
import { PubSubModule } from 'src/modules/PubSub/pubsub.module';
import { RelayActuatorResolver } from './Resolver/relay.resolver';
@Module({
  imports: [PubSubModule],
  controllers: [],
  providers: [RelayActuatorResolver],
})
export class ActuatorModules {}
