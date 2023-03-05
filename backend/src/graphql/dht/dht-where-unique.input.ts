import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class dhtWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    ukey?: number;
}
