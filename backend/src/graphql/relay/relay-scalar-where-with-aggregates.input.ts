import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class relayScalarWhereWithAggregatesInput {
  @Field(() => [relayScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<relayScalarWhereWithAggregatesInput>;

  @Field(() => [relayScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<relayScalarWhereWithAggregatesInput>;

  @Field(() => [relayScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<relayScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  ukey?: IntWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  status_relay?: IntWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeNullableWithAggregatesFilter;
}
