import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DhtMinAggregate {

    @Field(() => Int, {nullable:true})
    ukey?: number;

    @Field(() => Float, {nullable:true})
    temperature?: number;

    @Field(() => Float, {nullable:true})
    humidity?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
