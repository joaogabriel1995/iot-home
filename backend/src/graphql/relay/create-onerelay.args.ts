import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { relayCreateInput } from './relay-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnerelayArgs {
  @Field(() => relayCreateInput, { nullable: false })
  @Type(() => relayCreateInput)
  data!: relayCreateInput;
}
