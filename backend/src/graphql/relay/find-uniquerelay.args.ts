import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { relayWhereUniqueInput } from './relay-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquerelayArgs {
  @Field(() => relayWhereUniqueInput, { nullable: false })
  @Type(() => relayWhereUniqueInput)
  where!: relayWhereUniqueInput;
}
