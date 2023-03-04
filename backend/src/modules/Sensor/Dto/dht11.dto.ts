import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Dht11Dto {
  @Field(() => Number)
  Humidity: number;
  @Field(() => Number)
  Temperature: number;
}
