import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { relayWhereUniqueInput } from './relay-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnerelayArgs {

    @Field(() => relayWhereUniqueInput, {nullable:false})
    @Type(() => relayWhereUniqueInput)
    where!: relayWhereUniqueInput;
}
