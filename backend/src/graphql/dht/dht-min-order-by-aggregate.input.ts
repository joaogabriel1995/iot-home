import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class dhtMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  ukey?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  temperature?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  humidity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;
}
