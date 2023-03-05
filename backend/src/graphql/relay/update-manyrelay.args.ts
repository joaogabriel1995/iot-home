import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { relayUpdateManyMutationInput } from './relay-update-many-mutation.input';
import { Type } from 'class-transformer';
import { relayWhereInput } from './relay-where.input';

@ArgsType()
export class UpdateManyrelayArgs {

    @Field(() => relayUpdateManyMutationInput, {nullable:false})
    @Type(() => relayUpdateManyMutationInput)
    data!: relayUpdateManyMutationInput;

    @Field(() => relayWhereInput, {nullable:true})
    @Type(() => relayWhereInput)
    where?: relayWhereInput;
}
