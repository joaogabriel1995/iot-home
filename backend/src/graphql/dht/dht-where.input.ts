import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class dhtWhereInput {

    @Field(() => [dhtWhereInput], {nullable:true})
    AND?: Array<dhtWhereInput>;

    @Field(() => [dhtWhereInput], {nullable:true})
    OR?: Array<dhtWhereInput>;

    @Field(() => [dhtWhereInput], {nullable:true})
    NOT?: Array<dhtWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ukey?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    temperature?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    humidity?: FloatFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;
}
