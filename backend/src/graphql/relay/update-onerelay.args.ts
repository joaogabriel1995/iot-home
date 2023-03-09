import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { relayUpdateInput } from './relay-update.input';
import { Type } from 'class-transformer';
import { relayWhereUniqueInput } from './relay-where-unique.input';

@ArgsType()
export class UpdateOnerelayArgs {
  @Field(() => relayUpdateInput, { nullable: false })
  @Type(() => relayUpdateInput)
  data!: relayUpdateInput;

  @Field(() => relayWhereUniqueInput, { nullable: false })
  @Type(() => relayWhereUniqueInput)
  where!: relayWhereUniqueInput;
}
