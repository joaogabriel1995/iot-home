import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class dht {
  @Field(() => ID, { nullable: false })
  ukey!: number;

  @Field(() => Float, { nullable: false })
  temperature!: number;

  @Field(() => Float, { nullable: false })
  humidity!: number;

  @Field(() => Date, { nullable: true })
  created_at!: Date | null;
}
