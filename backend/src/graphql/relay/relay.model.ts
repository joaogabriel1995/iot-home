import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class relay {
  @Field(() => ID, { nullable: false })
  ukey!: number;

  @Field(() => Int, { nullable: false })
  status_relay!: number;

  @Field(() => Date, { nullable: true })
  created_at!: Date | null;
}
