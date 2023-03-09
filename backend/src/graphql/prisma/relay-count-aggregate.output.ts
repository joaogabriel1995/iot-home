import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RelayCountAggregate {
  @Field(() => Int, { nullable: false })
  ukey!: number;

  @Field(() => Int, { nullable: false })
  status_relay!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
