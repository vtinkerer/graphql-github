import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ApiKeyUserInput {
  @Field(() => Int)
  qty: number;
}
