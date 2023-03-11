import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class dhtCreateManyInput {

    @Field(() => Int, {nullable:true})
    ukey?: number;

    @Field(() => Float, {nullable:false})
    temperature!: number;

    @Field(() => Float, {nullable:false})
    humidity!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
