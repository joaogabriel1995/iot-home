import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { relayWhereInput } from './relay-where.input';
import { Type } from 'class-transformer';
import { relayOrderByWithAggregationInput } from './relay-order-by-with-aggregation.input';
import { RelayScalarFieldEnum } from '../prisma/relay-scalar-field.enum';
import { relayScalarWhereWithAggregatesInput } from './relay-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class relayGroupByArgs {
  @Field(() => relayWhereInput, { nullable: true })
  @Type(() => relayWhereInput)
  where?: relayWhereInput;

  @Field(() => [relayOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<relayOrderByWithAggregationInput>;

  @Field(() => [RelayScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof RelayScalarFieldEnum>;

  @Field(() => relayScalarWhereWithAggregatesInput, { nullable: true })
  having?: relayScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
