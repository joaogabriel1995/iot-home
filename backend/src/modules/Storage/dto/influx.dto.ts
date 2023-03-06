import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class influxModel {
  @Field(() => String)
  result!: string;
  @Field(() => Number)
  table!: number;
  @Field(() => String)
  _start!: string;
  @Field(() => String)
  _stop!: string;
  @Field(() => String)
  _time!: string;
  @Field(() => Number)
  _value!: number;
  @Field(() => String)
  _field!: string;
  @Field(() => String)
  _measurement!: string;
  @Field(() => String)
  host!: string;
  @Field(() => String)
  topic!: string;
  @Field(() => String)
  relay_ukey!: string;
  @Field(() => String)
  ssid!: string;
}
