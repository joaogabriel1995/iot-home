import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DhtCountAggregate } from './dht-count-aggregate.output';
import { DhtAvgAggregate } from './dht-avg-aggregate.output';
import { DhtSumAggregate } from './dht-sum-aggregate.output';
import { DhtMinAggregate } from './dht-min-aggregate.output';
import { DhtMaxAggregate } from './dht-max-aggregate.output';

@ObjectType()
export class AggregateDht {

    @Field(() => DhtCountAggregate, {nullable:true})
    _count?: DhtCountAggregate;

    @Field(() => DhtAvgAggregate, {nullable:true})
    _avg?: DhtAvgAggregate;

    @Field(() => DhtSumAggregate, {nullable:true})
    _sum?: DhtSumAggregate;

    @Field(() => DhtMinAggregate, {nullable:true})
    _min?: DhtMinAggregate;

    @Field(() => DhtMaxAggregate, {nullable:true})
    _max?: DhtMaxAggregate;
}
