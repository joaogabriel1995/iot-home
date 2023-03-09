import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { dhtCreateInput } from './dht-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedhtArgs {
  @Field(() => dhtCreateInput, { nullable: false })
  @Type(() => dhtCreateInput)
  data!: dhtCreateInput;
}
