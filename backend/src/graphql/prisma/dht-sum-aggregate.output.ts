import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DhtSumAggregate {
  @Field(() => Int, { nullable: true })
  ukey?: number;

  @Field(() => Float, { nullable: true })
  temperature?: number;

  @Field(() => Float, { nullable: true })
  humidity?: number;
}
