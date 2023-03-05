import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PubSubModule } from './modules/PubSub/pubsub.module';
import { ConfigModule } from '@nestjs/config';
import { ActuatorModules } from './modules/Actuator/actuator.module';
import { SensorModules } from './modules/Sensor/sensor.module';
import { StorageModules } from './modules/Storage/storage.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    PubSubModule,
    ActuatorModules,
    SensorModules,
    StorageModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
