import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { relayWhereInput } from './relay-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyrelayArgs {

    @Field(() => relayWhereInput, {nullable:true})
    @Type(() => relayWhereInput)
    where?: relayWhereInput;
}
