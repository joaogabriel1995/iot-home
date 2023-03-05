import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { relayWhereInput } from './relay-where.input';
import { Type } from 'class-transformer';
import { relayOrderByWithRelationInput } from './relay-order-by-with-relation.input';
import { relayWhereUniqueInput } from './relay-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RelayScalarFieldEnum } from '../prisma/relay-scalar-field.enum';

@ArgsType()
export class FindFirstrelayArgs {

    @Field(() => relayWhereInput, {nullable:true})
    @Type(() => relayWhereInput)
    where?: relayWhereInput;

    @Field(() => [relayOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<relayOrderByWithRelationInput>;

    @Field(() => relayWhereUniqueInput, {nullable:true})
    cursor?: relayWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RelayScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RelayScalarFieldEnum>;
}
