import { Module } from '@nestjs/common';
import { PubSubModule } from 'src/modules/PubSub/pubsub.module';
import { PrismaService } from 'nestjs-prisma';
import { InfluxDbService } from './services/influxdb.service';
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, InfluxDbService],
  exports: [PrismaService, InfluxDbService],
})
export class StorageModules {}
