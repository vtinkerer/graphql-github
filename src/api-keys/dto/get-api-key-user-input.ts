import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetApiKeyUserInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
