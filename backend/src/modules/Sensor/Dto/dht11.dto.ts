import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { influxModel } from 'src/modules/Storage/dto/influx.dto';

@ObjectType()
export class Dht11Dto {
  @Field(() => Number)
  Humidity: number;
  @Field(() => Number)
  Temperature: number;
}

@ObjectType()
export class influxDht11 extends influxModel {
  @Field(() => String)
  sensor_ukey!: string;
  @Field(() => String)
  ssid!: string;
}

@ArgsType()
export class dht11Args {
  @Field(() => String)
  timeRangeStartCalc!: string;
  @Field(() => String)
  _field!: string;
  @Field(() => String)
  windowPeriod!: string;
}
