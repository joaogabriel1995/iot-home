import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { dhtUpdateManyMutationInput } from './dht-update-many-mutation.input';
import { Type } from 'class-transformer';
import { dhtWhereInput } from './dht-where.input';

@ArgsType()
export class UpdateManydhtArgs {

    @Field(() => dhtUpdateManyMutationInput, {nullable:false})
    @Type(() => dhtUpdateManyMutationInput)
    data!: dhtUpdateManyMutationInput;

    @Field(() => dhtWhereInput, {nullable:true})
    @Type(() => dhtWhereInput)
    where?: dhtWhereInput;
}
