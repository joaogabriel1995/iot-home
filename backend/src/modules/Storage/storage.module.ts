import { Module } from '@nestjs/common';
import { PubSubModule } from 'src/modules/PubSub/pubsub.module';
import { PrismaService } from 'nestjs-prisma';
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class StorageModules {}
