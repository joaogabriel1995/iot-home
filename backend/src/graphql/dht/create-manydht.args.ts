import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { dhtCreateManyInput } from './dht-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydhtArgs {

    @Field(() => [dhtCreateManyInput], {nullable:false})
    @Type(() => dhtCreateManyInput)
    data!: Array<dhtCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
