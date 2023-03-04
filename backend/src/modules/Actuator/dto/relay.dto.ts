import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RelayDto {
  @Field(() => Int)
  OnOff!: number;
}

@ArgsType()
export class RelayArgs {
  @Field(() => Int)
  OnOff!: number;
}
