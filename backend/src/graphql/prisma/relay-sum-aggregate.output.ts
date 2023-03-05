import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RelaySumAggregate {

    @Field(() => Int, {nullable:true})
    ukey?: number;

    @Field(() => Int, {nullable:true})
    status_relay?: number;
}
