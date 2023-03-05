import { forwardRef, Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PubSubModule } from 'src/modules/PubSub/pubsub.module';
import { StorageModules } from '../Storage/storage.module';
import { RelayActuatorResolver } from './Resolver/relay.resolver';
@Module({
  imports: [PubSubModule, StorageModules],
  controllers: [],
  providers: [RelayActuatorResolver],
})
export class ActuatorModules {}
