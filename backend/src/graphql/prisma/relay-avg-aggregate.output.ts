import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RelayAvgAggregate {

    @Field(() => Float, {nullable:true})
    ukey?: number;

    @Field(() => Float, {nullable:true})
    status_relay?: number;
}
