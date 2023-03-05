import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class relayUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    ukey?: number;

    @Field(() => Int, {nullable:false})
    status_relay!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
