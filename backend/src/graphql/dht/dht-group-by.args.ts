import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { dhtWhereInput } from './dht-where.input';
import { Type } from 'class-transformer';
import { dhtOrderByWithAggregationInput } from './dht-order-by-with-aggregation.input';
import { DhtScalarFieldEnum } from '../prisma/dht-scalar-field.enum';
import { dhtScalarWhereWithAggregatesInput } from './dht-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class dhtGroupByArgs {

    @Field(() => dhtWhereInput, {nullable:true})
    @Type(() => dhtWhereInput)
    where?: dhtWhereInput;

    @Field(() => [dhtOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<dhtOrderByWithAggregationInput>;

    @Field(() => [DhtScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DhtScalarFieldEnum>;

    @Field(() => dhtScalarWhereWithAggregatesInput, {nullable:true})
    having?: dhtScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
