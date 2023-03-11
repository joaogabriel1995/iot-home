import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { dhtUpdateInput } from './dht-update.input';
import { Type } from 'class-transformer';
import { dhtWhereUniqueInput } from './dht-where-unique.input';

@ArgsType()
export class UpdateOnedhtArgs {

    @Field(() => dhtUpdateInput, {nullable:false})
    @Type(() => dhtUpdateInput)
    data!: dhtUpdateInput;

    @Field(() => dhtWhereUniqueInput, {nullable:false})
    @Type(() => dhtWhereUniqueInput)
    where!: dhtWhereUniqueInput;
}
