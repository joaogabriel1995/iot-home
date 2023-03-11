import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { dhtCountOrderByAggregateInput } from './dht-count-order-by-aggregate.input';
import { dhtAvgOrderByAggregateInput } from './dht-avg-order-by-aggregate.input';
import { dhtMaxOrderByAggregateInput } from './dht-max-order-by-aggregate.input';
import { dhtMinOrderByAggregateInput } from './dht-min-order-by-aggregate.input';
import { dhtSumOrderByAggregateInput } from './dht-sum-order-by-aggregate.input';

@InputType()
export class dhtOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    ukey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    temperature?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    humidity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => dhtCountOrderByAggregateInput, {nullable:true})
    _count?: dhtCountOrderByAggregateInput;

    @Field(() => dhtAvgOrderByAggregateInput, {nullable:true})
    _avg?: dhtAvgOrderByAggregateInput;

    @Field(() => dhtMaxOrderByAggregateInput, {nullable:true})
    _max?: dhtMaxOrderByAggregateInput;

    @Field(() => dhtMinOrderByAggregateInput, {nullable:true})
    _min?: dhtMinOrderByAggregateInput;

    @Field(() => dhtSumOrderByAggregateInput, {nullable:true})
    _sum?: dhtSumOrderByAggregateInput;
}
