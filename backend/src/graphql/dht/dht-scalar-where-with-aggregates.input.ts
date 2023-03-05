import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class dhtScalarWhereWithAggregatesInput {

    @Field(() => [dhtScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<dhtScalarWhereWithAggregatesInput>;

    @Field(() => [dhtScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<dhtScalarWhereWithAggregatesInput>;

    @Field(() => [dhtScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<dhtScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ukey?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    temperature?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    humidity?: FloatWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;
}
