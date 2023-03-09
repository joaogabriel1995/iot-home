import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';

@InputType()
export class dhtUpdateInput {
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  temperature?: FloatFieldUpdateOperationsInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  humidity?: FloatFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: NullableDateTimeFieldUpdateOperationsInput;
}
