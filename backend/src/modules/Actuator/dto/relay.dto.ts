import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { influxModel } from 'src/modules/Storage/dto/influx.dto';

@ObjectType()
export class RelayDto {
  @Field(() => Int)
  OnOff!: number;
}

@ArgsType()
export class RelayArgs {
  @Field(() => Int)
  OnOff!: number;
}

@ObjectType()
export class influxRelay extends influxModel {
  @Field(() => String)
  relay_ukey!: string;
  @Field(() => String)
  ssid!: string;
}
