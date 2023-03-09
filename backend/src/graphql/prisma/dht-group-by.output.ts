import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { DhtCountAggregate } from './dht-count-aggregate.output';
import { DhtAvgAggregate } from './dht-avg-aggregate.output';
import { DhtSumAggregate } from './dht-sum-aggregate.output';
import { DhtMinAggregate } from './dht-min-aggregate.output';
import { DhtMaxAggregate } from './dht-max-aggregate.output';

@ObjectType()
export class DhtGroupBy {
  @Field(() => Int, { nullable: false })
  ukey!: number;

  @Field(() => Float, { nullable: false })
  temperature!: number;

  @Field(() => Float, { nullable: false })
  humidity!: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => DhtCountAggregate, { nullable: true })
  _count?: DhtCountAggregate;

  @Field(() => DhtAvgAggregate, { nullable: true })
  _avg?: DhtAvgAggregate;

  @Field(() => DhtSumAggregate, { nullable: true })
  _sum?: DhtSumAggregate;

  @Field(() => DhtMinAggregate, { nullable: true })
  _min?: DhtMinAggregate;

  @Field(() => DhtMaxAggregate, { nullable: true })
  _max?: DhtMaxAggregate;
}
