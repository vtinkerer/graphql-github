import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HelloWorldResponse {
  @Field()
  message: string;
}
