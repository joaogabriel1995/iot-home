import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class relayWhereInput {

    @Field(() => [relayWhereInput], {nullable:true})
    AND?: Array<relayWhereInput>;

    @Field(() => [relayWhereInput], {nullable:true})
    OR?: Array<relayWhereInput>;

    @Field(() => [relayWhereInput], {nullable:true})
    NOT?: Array<relayWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ukey?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    status_relay?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;
}
