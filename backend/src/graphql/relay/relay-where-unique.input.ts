import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class relayWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  ukey?: number;
}
