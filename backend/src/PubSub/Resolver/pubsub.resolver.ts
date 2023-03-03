import { Query, Resolver } from '@nestjs/graphql';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Resolver()
export class AuthorsResolver {
  constructor() {}

  @Query((returns) => String)
  helloWord() {
    const str: string = 'Hello Word';
    return str;
  }
}
