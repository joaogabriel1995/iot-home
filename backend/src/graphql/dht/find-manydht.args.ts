import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { dhtWhereInput } from './dht-where.input';
import { Type } from 'class-transformer';
import { dhtOrderByWithRelationInput } from './dht-order-by-with-relation.input';
import { dhtWhereUniqueInput } from './dht-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DhtScalarFieldEnum } from '../prisma/dht-scalar-field.enum';

@ArgsType()
export class FindManydhtArgs {
  @Field(() => dhtWhereInput, { nullable: true })
  @Type(() => dhtWhereInput)
  where?: dhtWhereInput;

  @Field(() => [dhtOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<dhtOrderByWithRelationInput>;

  @Field(() => dhtWhereUniqueInput, { nullable: true })
  cursor?: dhtWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [DhtScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof DhtScalarFieldEnum>;
}
