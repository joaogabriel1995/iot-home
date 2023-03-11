import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { dhtWhereUniqueInput } from './dht-where-unique.input';
import { Type } from 'class-transformer';
import { dhtCreateInput } from './dht-create.input';
import { dhtUpdateInput } from './dht-update.input';

@ArgsType()
export class UpsertOnedhtArgs {

    @Field(() => dhtWhereUniqueInput, {nullable:false})
    @Type(() => dhtWhereUniqueInput)
    where!: dhtWhereUniqueInput;

    @Field(() => dhtCreateInput, {nullable:false})
    @Type(() => dhtCreateInput)
    create!: dhtCreateInput;

    @Field(() => dhtUpdateInput, {nullable:false})
    @Type(() => dhtUpdateInput)
    update!: dhtUpdateInput;
}
