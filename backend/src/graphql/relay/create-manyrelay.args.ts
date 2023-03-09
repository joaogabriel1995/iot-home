import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { relayCreateManyInput } from './relay-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyrelayArgs {
  @Field(() => [relayCreateManyInput], { nullable: false })
  @Type(() => relayCreateManyInput)
  data!: Array<relayCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
