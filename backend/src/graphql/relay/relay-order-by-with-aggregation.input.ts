import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { relayCountOrderByAggregateInput } from './relay-count-order-by-aggregate.input';
import { relayAvgOrderByAggregateInput } from './relay-avg-order-by-aggregate.input';
import { relayMaxOrderByAggregateInput } from './relay-max-order-by-aggregate.input';
import { relayMinOrderByAggregateInput } from './relay-min-order-by-aggregate.input';
import { relaySumOrderByAggregateInput } from './relay-sum-order-by-aggregate.input';

@InputType()
export class relayOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  ukey?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status_relay?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => relayCountOrderByAggregateInput, { nullable: true })
  _count?: relayCountOrderByAggregateInput;

  @Field(() => relayAvgOrderByAggregateInput, { nullable: true })
  _avg?: relayAvgOrderByAggregateInput;

  @Field(() => relayMaxOrderByAggregateInput, { nullable: true })
  _max?: relayMaxOrderByAggregateInput;

  @Field(() => relayMinOrderByAggregateInput, { nullable: true })
  _min?: relayMinOrderByAggregateInput;

  @Field(() => relaySumOrderByAggregateInput, { nullable: true })
  _sum?: relaySumOrderByAggregateInput;
}
