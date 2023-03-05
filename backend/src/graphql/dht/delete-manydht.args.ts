import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { dhtWhereInput } from './dht-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydhtArgs {

    @Field(() => dhtWhereInput, {nullable:true})
    @Type(() => dhtWhereInput)
    where?: dhtWhereInput;
}
