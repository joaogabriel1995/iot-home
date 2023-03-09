import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { relayWhereUniqueInput } from './relay-where-unique.input';
import { Type } from 'class-transformer';
import { relayCreateInput } from './relay-create.input';
import { relayUpdateInput } from './relay-update.input';

@ArgsType()
export class UpsertOnerelayArgs {
  @Field(() => relayWhereUniqueInput, { nullable: false })
  @Type(() => relayWhereUniqueInput)
  where!: relayWhereUniqueInput;

  @Field(() => relayCreateInput, { nullable: false })
  @Type(() => relayCreateInput)
  create!: relayCreateInput;

  @Field(() => relayUpdateInput, { nullable: false })
  @Type(() => relayUpdateInput)
  update!: relayUpdateInput;
}
