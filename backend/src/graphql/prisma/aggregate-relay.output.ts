import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RelayCountAggregate } from './relay-count-aggregate.output';
import { RelayAvgAggregate } from './relay-avg-aggregate.output';
import { RelaySumAggregate } from './relay-sum-aggregate.output';
import { RelayMinAggregate } from './relay-min-aggregate.output';
import { RelayMaxAggregate } from './relay-max-aggregate.output';

@ObjectType()
export class AggregateRelay {

    @Field(() => RelayCountAggregate, {nullable:true})
    _count?: RelayCountAggregate;

    @Field(() => RelayAvgAggregate, {nullable:true})
    _avg?: RelayAvgAggregate;

    @Field(() => RelaySumAggregate, {nullable:true})
    _sum?: RelaySumAggregate;

    @Field(() => RelayMinAggregate, {nullable:true})
    _min?: RelayMinAggregate;

    @Field(() => RelayMaxAggregate, {nullable:true})
    _max?: RelayMaxAggregate;
}
