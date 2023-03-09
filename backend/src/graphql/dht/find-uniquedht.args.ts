import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { dhtWhereUniqueInput } from './dht-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedhtArgs {
  @Field(() => dhtWhereUniqueInput, { nullable: false })
  @Type(() => dhtWhereUniqueInput)
  where!: dhtWhereUniqueInput;
}
