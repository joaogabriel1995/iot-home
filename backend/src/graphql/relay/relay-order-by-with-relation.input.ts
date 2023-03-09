import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class relayOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  ukey?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status_relay?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;
}
